#!/usr/bin/env python3
"""
Automated Appliance Image Generation Pipeline
Fetches brand names from sitemap, searches for product images,
processes them, and saves as optimized WEBP files.
"""

import os
import re
import sys
import time
import requests
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
from io import BytesIO
from PIL import Image
import hashlib

# Configuration
SITEMAP_URL = "https://bergencountyappliancesrepair.com/sitemap.xml"
OUTPUT_DIR = "assets/images/appliances"
MAX_WIDTH = 1200
MAX_FILE_SIZE_KB = 150
BACKGROUND_COLOR = (255, 255, 255)  # Pure white

APPLIANCE_TYPES = [
    "washer",
    "dryer",
    "dishwasher",
    "microwave",
    "oven",
    "cooktop",
    "refrigerator",
    "hood"
]

# Headers for web requests
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


def fetch_sitemap(url):
    """Fetch and parse sitemap XML."""
    print(f"Fetching sitemap from {url}...")
    response = requests.get(url, headers=HEADERS, timeout=30)
    response.raise_for_status()
    return response.text


def extract_brands_from_sitemap(sitemap_xml):
    """Extract brand names from sitemap URLs."""
    # Parse XML
    root = ET.fromstring(sitemap_xml)

    # Handle namespace
    namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}

    brands = set()

    for url_elem in root.findall("ns:url", namespace):
        loc = url_elem.find("ns:loc", namespace)
        if loc is not None and loc.text:
            parsed = urlparse(loc.text)
            hostname = parsed.hostname

            # Extract subdomain (brand name)
            if hostname and "bergencountyappliancesrepair.com" in hostname:
                parts = hostname.split(".")
                if len(parts) > 2:  # Has subdomain
                    brand = parts[0]
                    # Skip main domain entries
                    if brand != "www" and brand != "bergencountyappliancesrepair":
                        brands.add(brand)

    return sorted(list(brands))


def normalize_brand_name(brand):
    """Normalize brand name for display (capitalize properly)."""
    # Special cases for brand names
    special_cases = {
        "lg": "LG",
        "ge": "GE",
        "aeg": "AEG",
        "dcs": "DCS",
        "subzero": "Sub-Zero",
        "sub-zero": "Sub-Zero",
        "kitchenaid": "KitchenAid",
        "jennair": "JennAir",
        "jenn-air": "JennAir",
        "fisher-paykel": "Fisher & Paykel",
        "fisherpaykel": "Fisher & Paykel",
        "black-decker": "Black & Decker",
        "blackdecker": "Black & Decker",
    }

    brand_lower = brand.lower().replace("-", "")
    if brand_lower in special_cases:
        return special_cases[brand_lower]

    # Default: capitalize each word
    return brand.replace("-", " ").title()


def search_bing_images(query, num_results=5):
    """Search Bing Images and return image URLs."""
    # Using Bing image search scraping (for educational purposes)
    search_url = f"https://www.bing.com/images/search?q={requests.utils.quote(query)}&qft=+filterui:photo-photo&form=IRFLTR&first=1"

    try:
        response = requests.get(search_url, headers=HEADERS, timeout=15)
        response.raise_for_status()

        # Decode HTML entities
        html = response.text.replace("&quot;", '"').replace("&amp;", "&")

        # Extract image URLs using regex
        # Look for murl parameter in Bing results
        pattern = r'murl":"(https?://[^"]+\.(?:jpg|jpeg|png|webp))'
        matches = re.findall(pattern, html, re.IGNORECASE)

        # Filter and clean URLs
        image_urls = []
        for url in matches[:num_results * 2]:  # Get extra in case some fail
            # Skip small thumbnails and problematic sources
            if "thumbnail" not in url.lower() and "icon" not in url.lower():
                image_urls.append(url)
                if len(image_urls) >= num_results:
                    break

        return image_urls
    except Exception as e:
        print(f"  Error searching Bing: {e}")
        return []


def download_image(url, timeout=15):
    """Download image from URL and return as PIL Image."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=timeout, stream=True)
        response.raise_for_status()

        # Check content type
        content_type = response.headers.get("Content-Type", "")
        if "image" not in content_type.lower():
            return None

        image = Image.open(BytesIO(response.content))
        return image
    except Exception as e:
        return None


def remove_background_simple(image):
    """Simple background removal - makes white/light backgrounds transparent then white."""
    # Convert to RGBA if not already
    if image.mode != "RGBA":
        image = image.convert("RGBA")

    # This is a simple approach - for production, use rembg library
    # For now, we'll just ensure a clean white background

    # Create a white background
    white_bg = Image.new("RGB", image.size, BACKGROUND_COLOR)

    # If image has transparency, paste it on white
    if image.mode == "RGBA":
        white_bg.paste(image, mask=image.split()[3])
    else:
        white_bg.paste(image)

    return white_bg


def process_image(image):
    """Process image: resize, add white background, prepare for WEBP."""
    # Convert to RGB if necessary
    if image.mode in ("RGBA", "P"):
        # Create white background
        white_bg = Image.new("RGB", image.size, BACKGROUND_COLOR)
        if image.mode == "RGBA":
            white_bg.paste(image, mask=image.split()[3])
        else:
            image = image.convert("RGBA")
            white_bg.paste(image, mask=image.split()[3])
        image = white_bg
    elif image.mode != "RGB":
        image = image.convert("RGB")

    # Resize if wider than MAX_WIDTH, maintaining aspect ratio
    if image.width > MAX_WIDTH:
        ratio = MAX_WIDTH / image.width
        new_height = int(image.height * ratio)
        image = image.resize((MAX_WIDTH, new_height), Image.LANCZOS)

    return image


def save_as_webp(image, filepath, max_size_kb=MAX_FILE_SIZE_KB):
    """Save image as WEBP with compression to meet size requirements."""
    # Start with high quality and reduce until file size is acceptable
    quality = 90

    while quality >= 20:
        buffer = BytesIO()
        image.save(buffer, format="WEBP", quality=quality, method=6)
        size_kb = buffer.tell() / 1024

        if size_kb <= max_size_kb:
            # Save to file
            with open(filepath, "wb") as f:
                f.write(buffer.getvalue())
            return True, size_kb, quality

        quality -= 10

    # If still too large, save at minimum quality
    buffer = BytesIO()
    image.save(buffer, format="WEBP", quality=20, method=6)
    with open(filepath, "wb") as f:
        f.write(buffer.getvalue())
    return True, buffer.tell() / 1024, 20


def generate_image_for_brand_appliance(brand, appliance, output_dir):
    """Generate image for a specific brand and appliance combination."""
    filename = f"{brand}-{appliance}.webp"
    filepath = os.path.join(output_dir, filename)

    # Skip if already exists
    if os.path.exists(filepath):
        print(f"  [SKIP] {filename} already exists")
        return True

    # Create search query
    brand_display = normalize_brand_name(brand)
    query = f"{brand_display} {appliance} appliance product"

    print(f"  Searching: {query}")

    # Search for images
    image_urls = search_bing_images(query)

    if not image_urls:
        print(f"  [FAIL] No images found for {brand} {appliance}")
        return False

    # Try downloading and processing images
    for i, url in enumerate(image_urls):
        try:
            print(f"    Trying image {i+1}/{len(image_urls)}...")

            image = download_image(url)
            if image is None:
                continue

            # Check minimum size (skip tiny images)
            if image.width < 200 or image.height < 200:
                continue

            # Process image
            processed = process_image(image)

            # Save as WEBP
            success, size_kb, quality = save_as_webp(processed, filepath)

            if success:
                print(f"  [OK] Saved {filename} ({size_kb:.1f}KB, q={quality})")
                return True

        except Exception as e:
            print(f"    Error processing image: {e}")
            continue

    print(f"  [FAIL] Could not process any image for {brand} {appliance}")
    return False


def main():
    """Main pipeline execution."""
    print("=" * 60)
    print("APPLIANCE IMAGE GENERATION PIPELINE")
    print("=" * 60)

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"\nOutput directory: {OUTPUT_DIR}")

    # Step 1: Fetch sitemap
    try:
        sitemap_xml = fetch_sitemap(SITEMAP_URL)
    except Exception as e:
        print(f"Error fetching sitemap: {e}")
        sys.exit(1)

    # Step 2: Extract brands
    brands = extract_brands_from_sitemap(sitemap_xml)
    print(f"\nFound {len(brands)} brands in sitemap:")
    for brand in brands:
        print(f"  - {brand} ({normalize_brand_name(brand)})")

    # Step 3: Calculate total images
    total_images = len(brands) * len(APPLIANCE_TYPES)
    print(f"\nTotal images to generate: {len(brands)} brands × {len(APPLIANCE_TYPES)} appliances = {total_images}")

    # Step 4: Generate images
    print("\n" + "=" * 60)
    print("GENERATING IMAGES")
    print("=" * 60)

    success_count = 0
    fail_count = 0
    skip_count = 0

    for brand in brands:
        print(f"\n[{brand.upper()}]")

        for appliance in APPLIANCE_TYPES:
            filename = f"{brand}-{appliance}.webp"
            filepath = os.path.join(OUTPUT_DIR, filename)

            if os.path.exists(filepath):
                print(f"  [SKIP] {filename}")
                skip_count += 1
                continue

            if generate_image_for_brand_appliance(brand, appliance, OUTPUT_DIR):
                success_count += 1
            else:
                fail_count += 1

            # Rate limiting
            time.sleep(1)

    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total brands: {len(brands)}")
    print(f"Total appliance types: {len(APPLIANCE_TYPES)}")
    print(f"Total combinations: {total_images}")
    print(f"Successfully generated: {success_count}")
    print(f"Skipped (existing): {skip_count}")
    print(f"Failed: {fail_count}")
    print(f"\nOutput directory: {os.path.abspath(OUTPUT_DIR)}")


if __name__ == "__main__":
    main()
