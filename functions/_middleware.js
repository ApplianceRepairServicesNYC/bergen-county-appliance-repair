// Comprehensive brand data with unique content for each subdomain
const brandData = {
  'asko': {
    name: 'ASKO',
    title: 'ASKO Appliance Repair of Bergen County - Same Day',
    description: 'Expert ASKO appliance repair in Bergen County NJ. Factory-trained technicians for ASKO dishwashers, washers, dryers & laundry centers. Same day service in Hackensack, Paramus, Fort Lee & all Bergen County.',
    heroTitle: 'ASKO Appliance Repair of Bergen County',
    about: 'ASKO is a premium Scandinavian appliance brand known for exceptional durability and eco-friendly designs. Founded in Sweden in 1950, ASKO appliances are built to last 20+ years with superior craftsmanship.',
    specialty: 'dishwashers, washing machines, dryers, and laundry centers',
    commonIssues: 'ASKO dishwasher not draining, washer spin cycle problems, dryer heating issues, control panel malfunctions',
    whyChoose: 'Our Bergen County technicians are factory-trained on ASKO\'s unique Scandinavian engineering, including their patented Steel Seal dishwasher technology and ActiveDrum washing system.'
  },
  'speedqueen': {
    name: 'Speed Queen',
    title: 'Speed Queen Appliance Repair of Bergen County - Same Day',
    description: 'Expert Speed Queen washer and dryer repair in Bergen County NJ. Commercial-grade laundry equipment specialists. Same day service in Hackensack, Paramus, Teaneck & all Bergen County.',
    heroTitle: 'Speed Queen Appliance Repair of Bergen County',
    about: 'Speed Queen is the industry leader in commercial and residential laundry equipment, manufactured in Ripon, Wisconsin since 1908. Built to last 25+ years, Speed Queen machines are found in laundromats worldwide.',
    specialty: 'commercial washers, residential washers, stack dryers, and coin-operated laundry equipment',
    commonIssues: 'Speed Queen washer not spinning, dryer not heating, transmission problems, coin mechanism failures, control board issues',
    whyChoose: 'Our technicians understand Speed Queen\'s heavy-duty commercial construction and unique transmission systems that differ from standard residential machines.'
  },
  'viking': {
    name: 'Viking',
    title: 'Viking Appliance Repair of Bergen County - Same Day',
    description: 'Expert Viking range, refrigerator & dishwasher repair in Bergen County NJ. Professional-grade kitchen appliance specialists. Same day service in Ridgewood, Tenafly, Alpine & all Bergen County.',
    heroTitle: 'Viking Appliance Repair of Bergen County',
    about: 'Viking brought professional-grade cooking to American homes in 1987. Based in Greenwood, Mississippi, Viking ranges and refrigerators are the choice of serious home chefs throughout Bergen County.',
    specialty: 'professional ranges, cooktops, built-in refrigerators, dishwashers, and ventilation hoods',
    commonIssues: 'Viking range igniter problems, oven temperature issues, refrigerator not cooling, ice maker failures, dishwasher drainage problems',
    whyChoose: 'We specialize in Viking\'s commercial-style burners, ProFlow convection systems, and their professional refrigeration technology used in Bergen County\'s finest kitchens.'
  },
  'samsung': {
    name: 'Samsung',
    title: 'Samsung Appliance Repair of Bergen County - Same Day',
    description: 'Expert Samsung refrigerator, washer, dryer & range repair in Bergen County NJ. Smart appliance specialists. Same day service in Hackensack, Paramus, Englewood & all Bergen County.',
    heroTitle: 'Samsung Appliance Repair of Bergen County',
    about: 'Samsung is a global leader in smart home appliances, bringing innovative technology like Family Hub refrigerators and AI-powered washers to Bergen County homes. Korean engineering meets American convenience.',
    specialty: 'French door refrigerators, front-load washers, smart dryers, induction ranges, and Family Hub appliances',
    commonIssues: 'Samsung refrigerator ice maker freezing, washer vibration issues, dryer not heating, smart connectivity problems, error codes',
    whyChoose: 'Our technicians are trained on Samsung\'s digital inverter technology, smart home integration, and can diagnose error codes on all Samsung smart appliances.'
  },
  'kitchenaid': {
    name: 'KitchenAid',
    title: 'KitchenAid Appliance Repair of Bergen County - Same Day',
    description: 'Expert KitchenAid refrigerator, dishwasher, range & mixer repair in Bergen County NJ. Premium kitchen appliance specialists. Same day service in Paramus, Ridgewood & all Bergen County.',
    heroTitle: 'KitchenAid Appliance Repair of Bergen County',
    about: 'KitchenAid has been crafting premium kitchen appliances in America since 1919. From their iconic stand mixers to professional-style ranges, KitchenAid is found in Bergen County\'s most passionate home kitchens.',
    specialty: 'stand mixers, dishwashers, refrigerators, wall ovens, cooktops, and range hoods',
    commonIssues: 'KitchenAid dishwasher not cleaning, refrigerator temperature problems, mixer grinding noise, oven not heating evenly',
    whyChoose: 'We repair all KitchenAid appliances including their commercial-style ranges and the famous stand mixers that have been American kitchen icons for over 100 years.'
  },
  'kenmore': {
    name: 'Kenmore',
    title: 'Kenmore Appliance Repair of Bergen County - Same Day',
    description: 'Expert Kenmore washer, dryer, refrigerator & dishwasher repair in Bergen County NJ. Over 100 years of American reliability. Same day service throughout Bergen County.',
    heroTitle: 'Kenmore Appliance Repair of Bergen County',
    about: 'Kenmore has been a trusted name in American homes since 1913. While Kenmore appliances are manufactured by various brands, our technicians know every model and can service all Kenmore appliances in Bergen County.',
    specialty: 'washers, dryers, refrigerators, dishwashers, ranges, and freezers',
    commonIssues: 'Kenmore washer not draining, dryer not heating, refrigerator running constantly, dishwasher not filling, oven igniter problems',
    whyChoose: 'Since Kenmore appliances are made by different manufacturers, our technicians are trained across multiple brands to properly service every Kenmore model.'
  },
  'subzero': {
    name: 'Sub-Zero',
    title: 'Sub-Zero Appliance Repair of Bergen County - Same Day',
    description: 'Expert Sub-Zero refrigerator and freezer repair in Bergen County NJ. Luxury refrigeration specialists serving Alpine, Saddle River, Franklin Lakes & all Bergen County.',
    heroTitle: 'Sub-Zero Appliance Repair of Bergen County',
    about: 'Sub-Zero has been the gold standard in luxury refrigeration since 1945, handcrafted in Madison, Wisconsin. Their dual refrigeration system and NASA-inspired air purification make Sub-Zero the choice for Bergen County\'s finest homes.',
    specialty: 'built-in refrigerators, integrated refrigerators, wine storage, undercounter units, and Pro 48 series',
    commonIssues: 'Sub-Zero compressor issues, vacuum condenser cleaning, ice maker problems, temperature fluctuations, door seal replacement',
    whyChoose: 'Our technicians are trained on Sub-Zero\'s unique dual compressor system and understand the precision required for these luxury appliances found in Bergen County\'s premium kitchens.'
  },
  'thermador': {
    name: 'Thermador',
    title: 'Thermador Appliance Repair of Bergen County - Same Day',
    description: 'Expert Thermador range, cooktop & refrigerator repair in Bergen County NJ. Luxury kitchen appliance specialists. Same day service in Ridgewood, Tenafly, Demarest & all Bergen County.',
    heroTitle: 'Thermador Appliance Repair of Bergen County',
    about: 'Thermador invented the cooktop in 1947 and continues to lead luxury kitchen innovation. Their Star Burners, Freedom refrigeration columns, and Sapphire dishwashers grace Bergen County\'s most sophisticated kitchens.',
    specialty: 'Pro Harmony ranges, Star Burner cooktops, Freedom refrigeration columns, Sapphire dishwashers, and steam ovens',
    commonIssues: 'Thermador Star Burner ignition problems, oven temperature calibration, refrigerator column issues, dishwasher not drying',
    whyChoose: 'We specialize in Thermador\'s patented Star Burner technology and understand their professional-grade cooking systems used in Bergen County\'s luxury homes.'
  },
  'miele': {
    name: 'Miele',
    title: 'Miele Appliance Repair of Bergen County - Same Day',
    description: 'Expert Miele dishwasher, washer, dryer & vacuum repair in Bergen County NJ. German engineering specialists. Same day service in Englewood, Tenafly, Cresskill & all Bergen County.',
    heroTitle: 'Miele Appliance Repair of Bergen County',
    about: 'Miele represents the pinnacle of German engineering with their "Immer Besser" (Forever Better) philosophy. Family-owned since 1899, Miele appliances are designed to last 20 years and are beloved by Bergen County homeowners.',
    specialty: 'dishwashers, washing machines, dryers, vacuum cleaners, coffee systems, and cooking appliances',
    commonIssues: 'Miele dishwasher water inlet problems, washer drainage issues, dryer sensor malfunctions, vacuum motor problems, coffee system descaling',
    whyChoose: 'Our technicians understand Miele\'s unique German engineering, including their honeycomb drum technology and AutoDos automatic detergent dispensing systems.'
  },
  'jennair': {
    name: 'JennAir',
    title: 'JennAir Appliance Repair of Bergen County - Same Day',
    description: 'Expert JennAir range, cooktop & refrigerator repair in Bergen County NJ. Luxury kitchen appliance specialists. Same day service in Paramus, Wyckoff, Franklin Lakes & all Bergen County.',
    heroTitle: 'JennAir Appliance Repair of Bergen County',
    about: 'JennAir invented the downdraft cooktop in 1961 and continues to innovate with their RISE and NOIR design collections. Their connected luxury appliances bring style and performance to Bergen County kitchens.',
    specialty: 'downdraft cooktops, professional ranges, built-in refrigerators, wall ovens, and connected appliances',
    commonIssues: 'JennAir downdraft motor problems, range igniter issues, refrigerator ice maker failures, oven temperature inconsistency',
    whyChoose: 'We specialize in JennAir\'s iconic downdraft ventilation systems and their precision cooking technology found in Bergen County\'s designer kitchens.'
  },
  'dacor': {
    name: 'Dacor',
    title: 'Dacor Appliance Repair of Bergen County - Same Day',
    description: 'Expert Dacor range, cooktop & wall oven repair in Bergen County NJ. California luxury kitchen specialists. Same day service in Alpine, Saddle River, Upper Saddle River & all Bergen County.',
    heroTitle: 'Dacor Appliance Repair of Bergen County',
    about: 'Dacor brings California luxury to professional-style kitchen appliances. Founded in 1965 in Los Angeles, Dacor\'s Modernist and Contemporary collections combine innovative technology with stunning design for Bergen County\'s luxury homes.',
    specialty: 'Modernist ranges, Discovery wall ovens, Porsche-designed cooktops, column refrigeration, and steam ovens',
    commonIssues: 'Dacor oven igniter problems, cooktop burner issues, wall oven heating elements, refrigerator compressor problems',
    whyChoose: 'Our technicians are trained on Dacor\'s innovative iQ cooking technology and understand the precision required for these California-designed luxury appliances.'
  },
  'electrolux': {
    name: 'Electrolux',
    title: 'Electrolux Appliance Repair of Bergen County - Same Day',
    description: 'Expert Electrolux washer, dryer, refrigerator & dishwasher repair in Bergen County NJ. Swedish design meets American service. Same day service throughout Bergen County.',
    heroTitle: 'Electrolux Appliance Repair of Bergen County',
    about: 'Electrolux is a global leader bringing Scandinavian design to home appliances since 1919. Swedish innovation and sustainability-focused engineering make Electrolux popular with Bergen County\'s eco-conscious homeowners.',
    specialty: 'front-load washers, ventless dryers, French door refrigerators, dishwashers, and induction ranges',
    commonIssues: 'Electrolux washer door lock problems, dryer not heating, refrigerator ice buildup, dishwasher pump failures',
    whyChoose: 'We understand Electrolux\'s European engineering including their Perfect Steam technology and LuxCare wash systems popular in Bergen County homes.'
  },
  'hotpoint': {
    name: 'Hotpoint',
    title: 'Hotpoint Appliance Repair of Bergen County - Same Day',
    description: 'Expert Hotpoint washer, dryer, refrigerator & range repair in Bergen County NJ. Reliable and affordable service. Same day appointments throughout Bergen County.',
    heroTitle: 'Hotpoint Appliance Repair of Bergen County',
    about: 'Hotpoint has provided reliable, affordable appliances to American homes for over a century. Dependable and budget-friendly, Hotpoint is a Bergen County household staple.',
    specialty: 'top-load washers, electric dryers, refrigerators, electric ranges, and dishwashers',
    commonIssues: 'Hotpoint washer not spinning, dryer not heating, refrigerator not cooling, range burner problems, dishwasher not draining',
    whyChoose: 'Hotpoint shares proven technology and our technicians have extensive experience with these reliable appliances.'
  },
  'gaggenau': {
    name: 'Gaggenau',
    title: 'Gaggenau Appliance Repair of Bergen County - Same Day',
    description: 'Expert Gaggenau oven, cooktop & refrigerator repair in Bergen County NJ. German luxury appliance specialists. Same day service in Alpine, Saddle River & all Bergen County.',
    heroTitle: 'Gaggenau Appliance Repair of Bergen County',
    about: 'Gaggenau represents 340 years of German craftsmanship, creating appliances for the most discerning homeowners. Their iconic anthracite finish and professional performance make Gaggenau the choice for Bergen County\'s architectural kitchens.',
    specialty: 'Vario cooktops, combi-steam ovens, built-in espresso machines, wine climate cabinets, and dishwashers',
    commonIssues: 'Gaggenau oven heating elements, cooktop ignition problems, wine cabinet temperature issues, espresso machine maintenance',
    whyChoose: 'We are trained on Gaggenau\'s modular Vario system and understand the precision German engineering found in Bergen County\'s most exclusive kitchens.'
  },
  'liebherr': {
    name: 'Liebherr',
    title: 'Liebherr Appliance Repair of Bergen County - Same Day',
    description: 'Expert Liebherr refrigerator and freezer repair in Bergen County NJ. European refrigeration specialists. Same day service in Ridgewood, Ho-Ho-Kus & all Bergen County.',
    heroTitle: 'Liebherr Appliance Repair of Bergen County',
    about: 'Liebherr brings Swiss precision and German engineering to premium refrigeration. Known for their BioFresh technology and wine storage solutions, Liebherr refrigerators preserve food longer in Bergen County homes.',
    specialty: 'integrated refrigerators, freestanding refrigerators, wine cabinets, and freezers',
    commonIssues: 'Liebherr compressor issues, BioFresh drawer problems, ice maker failures, temperature control malfunctions',
    whyChoose: 'Our technicians understand Liebherr\'s unique BioFresh and DuoCooling technologies that extend food preservation in Bergen County homes.'
  },
  'monogram': {
    name: 'Monogram',
    title: 'Monogram Appliance Repair of Bergen County - Same Day',
    description: 'Expert Monogram refrigerator, range & dishwasher repair in Bergen County NJ. Luxury appliance specialists. Same day service in Franklin Lakes, Wyckoff & all Bergen County.',
    heroTitle: 'Monogram Appliance Repair of Bergen County',
    about: 'Monogram represents American luxury craftsmanship, handcrafted in Louisville, Kentucky. These professional-grade appliances with restaurant-inspired design are found in Bergen County\'s finest chef\'s kitchens.',
    specialty: 'professional ranges, French door refrigerators, built-in refrigerators, dishwashers, and wall ovens',
    commonIssues: 'Monogram refrigerator ice maker problems, range igniter issues, oven temperature inconsistency, dishwasher drainage',
    whyChoose: 'We have deep expertise in Monogram\'s professional features and WiFi-connected smart home integration.'
  },
  'smeg': {
    name: 'Smeg',
    title: 'Smeg Appliance Repair of Bergen County - Same Day',
    description: 'Expert Smeg refrigerator, range & dishwasher repair in Bergen County NJ. Italian design appliance specialists. Same day service in Montclair, Glen Rock & all Bergen County.',
    heroTitle: 'Smeg Appliance Repair of Bergen County',
    about: 'Smeg brings iconic Italian design to home appliances since 1948. Their retro-styled refrigerators and professional ranges add European flair to Bergen County kitchens while delivering serious performance.',
    specialty: 'retro-style refrigerators, freestanding ranges, dishwashers, and small appliances',
    commonIssues: 'Smeg refrigerator compressor issues, range burner problems, oven temperature calibration, dishwasher pump failures',
    whyChoose: 'We understand Smeg\'s unique Italian engineering and can maintain the iconic style while ensuring peak performance in your Bergen County home.'
  },
  'bertazzoni': {
    name: 'Bertazzoni',
    title: 'Bertazzoni Appliance Repair of Bergen County - Same Day',
    description: 'Expert Bertazzoni range and oven repair in Bergen County NJ. Italian luxury cooking specialists. Same day service in Ridgewood, Glen Rock & all Bergen County.',
    heroTitle: 'Bertazzoni Appliance Repair of Bergen County',
    about: 'Bertazzoni has crafted professional cooking appliances in Guastalla, Italy since 1882. Six generations of family expertise bring authentic Italian cooking performance to Bergen County\'s passionate home chefs.',
    specialty: 'professional ranges, wall ovens, cooktops, range hoods, and refrigerators',
    commonIssues: 'Bertazzoni burner ignition problems, oven temperature issues, convection fan problems, range hood motor failures',
    whyChoose: 'Our technicians understand Bertazzoni\'s traditional Italian craftsmanship and dual-fuel technology that brings authentic cooking to Bergen County homes.'
  },
  'fisher-paykel': {
    name: 'Fisher & Paykel',
    title: 'Fisher & Paykel Appliance Repair of Bergen County - Same Day',
    description: 'Expert Fisher & Paykel dishwasher, refrigerator & laundry repair in Bergen County NJ. New Zealand innovation specialists. Same day service throughout Bergen County.',
    heroTitle: 'Fisher & Paykel Appliance Repair of Bergen County',
    about: 'Fisher & Paykel brings New Zealand innovation to kitchen and laundry appliances since 1934. Their DishDrawer dishwashers and ActiveSmart refrigerators offer unique solutions for Bergen County homes.',
    specialty: 'DishDrawer dishwashers, ActiveSmart refrigerators, front-load washers, and ranges',
    commonIssues: 'Fisher & Paykel DishDrawer not draining, refrigerator temperature problems, washer motor issues, range igniter failures',
    whyChoose: 'We specialize in Fisher & Paykel\'s unique DishDrawer technology and ActiveSmart refrigeration systems popular in Bergen County kitchens.'
  },
  'admiral': { name: 'Admiral', title: 'Admiral Appliance Repair of Bergen County - Same Day', heroTitle: 'Admiral Appliance Repair of Bergen County', description: 'Expert Admiral refrigerator, washer & dryer repair in Bergen County NJ. Reliable service for classic Admiral appliances. Same day service throughout Bergen County.', about: 'Admiral appliances built a reputation for reliability and value in American homes. Our Bergen County technicians keep these dependable machines running.', specialty: 'refrigerators, washers, dryers, and freezers', commonIssues: 'Admiral refrigerator not cooling, washer not spinning, dryer not heating', whyChoose: 'We have experience with Admiral\'s straightforward engineering and maintain parts for these reliable appliances.' },
  'aeg': { name: 'AEG', title: 'AEG Appliance Repair of Bergen County - Same Day', heroTitle: 'AEG Appliance Repair of Bergen County', description: 'Expert AEG dishwasher, washer & oven repair in Bergen County NJ. German engineering specialists. Same day service throughout Bergen County.', about: 'AEG has pioneered German appliance innovation since 1883. Their premium laundry and kitchen appliances bring European quality to Bergen County homes.', specialty: 'dishwashers, washing machines, dryers, ovens, and cooktops', commonIssues: 'AEG dishwasher drainage issues, washer motor problems, oven heating element failures', whyChoose: 'Our technicians understand AEG\'s German precision engineering and can service these premium European appliances.' },
  'blomberg': { name: 'Blomberg', title: 'Blomberg Appliance Repair of Bergen County - Same Day', heroTitle: 'Blomberg Appliance Repair of Bergen County', description: 'Expert Blomberg dishwasher, washer & refrigerator repair in Bergen County NJ. European compact appliance specialists. Same day service throughout Bergen County.', about: 'Blomberg brings German engineering and Turkish manufacturing to create efficient, compact appliances perfect for Bergen County apartments and smaller kitchens.', specialty: 'compact dishwashers, ventless dryers, refrigerators, and ranges', commonIssues: 'Blomberg dishwasher not draining, ventless dryer issues, refrigerator temperature problems', whyChoose: 'We specialize in Blomberg\'s space-saving European designs popular in Bergen County condos and apartments.' },
  'bluestar': { name: 'BlueStar', title: 'BlueStar Appliance Repair of Bergen County - Same Day', heroTitle: 'BlueStar Appliance Repair of Bergen County', description: 'Expert BlueStar range and cooktop repair in Bergen County NJ. Professional cooking specialists. Same day service in Alpine, Saddle River & all Bergen County.', about: 'BlueStar handcrafts professional ranges in Reading, Pennsylvania with 750+ color options and 25,000 BTU burners. Serious Bergen County chefs demand BlueStar performance.', specialty: 'professional ranges, cooktops, wall ovens, and range hoods', commonIssues: 'BlueStar burner ignition problems, oven temperature calibration, infrared broiler issues', whyChoose: 'Our technicians understand BlueStar\'s restaurant-grade open burner system and can maintain peak performance for Bergen County\'s serious home chefs.' },
  'cafe': { name: 'Cafe', title: 'Cafe Appliance Repair of Bergen County - Same Day', heroTitle: 'Cafe Appliance Repair of Bergen County', description: 'Expert Cafe refrigerator, range & dishwasher repair in Bergen County NJ. Customizable luxury appliances. Same day service throughout Bergen County.', about: 'Cafe offers customizable hardware finishes and smart home connectivity. These design-forward appliances let Bergen County homeowners personalize their kitchens.', specialty: 'French door refrigerators, dual-fuel ranges, dishwashers, and wall ovens', commonIssues: 'Cafe refrigerator ice maker problems, range igniter issues, dishwasher not draining, smart connectivity', whyChoose: 'We have deep expertise in Cafe\'s premium features and WiFi-connected smart capabilities.' },
  'cove': { name: 'Cove', title: 'Cove Appliance Repair of Bergen County - Same Day', heroTitle: 'Cove Appliance Repair of Bergen County', description: 'Expert Cove dishwasher repair in Bergen County NJ. Luxury dishwasher specialists. Same day service in Alpine, Saddle River & all Bergen County.', about: 'Cove is a premium luxury dishwasher brand bringing exceptional performance to dishwashing. Bergen County\'s finest kitchens feature Cove\'s quiet, powerful cleaning.', specialty: 'built-in dishwashers and dishwasher drawers', commonIssues: 'Cove dishwasher not draining, cleaning performance issues, door latch problems, error codes', whyChoose: 'Our certified technicians maintain Cove dishwashers to the highest standards for Bergen County\'s luxury kitchens.' },
  'dcs': { name: 'DCS', title: 'DCS Appliance Repair of Bergen County - Same Day', heroTitle: 'DCS Appliance Repair of Bergen County', description: 'Expert DCS grill, range & refrigerator repair in Bergen County NJ. Professional outdoor and indoor specialists. Same day service throughout Bergen County.', about: 'DCS creates professional-grade indoor and outdoor cooking appliances. Their stainless steel ranges and outdoor grills serve Bergen County\'s demanding home chefs.', specialty: 'professional ranges, outdoor grills, refrigerators, and cooktops', commonIssues: 'DCS grill igniter problems, range burner issues, refrigerator compressor failures', whyChoose: 'We specialize in DCS\'s professional construction and can service both their indoor and outdoor appliance lines.' },
  'haier': { name: 'Haier', title: 'Haier Appliance Repair of Bergen County - Same Day', heroTitle: 'Haier Appliance Repair of Bergen County', description: 'Expert Haier refrigerator, washer, dryer & wine cooler repair in Bergen County NJ. Compact and full-size specialists. Same day service throughout Bergen County.', about: 'Haier is the world\'s largest appliance manufacturer, offering compact to full-size options. Their wine coolers and compact appliances are popular in Bergen County apartments.', specialty: 'compact refrigerators, wine coolers, portable washers, and window AC units', commonIssues: 'Haier wine cooler temperature problems, compact washer drainage, refrigerator not cooling', whyChoose: 'We service Haier\'s diverse product line from compact units for Bergen County apartments to full-size appliances for homes.' },
  'hestan': { name: 'Hestan', title: 'Hestan Appliance Repair of Bergen County - Same Day', heroTitle: 'Hestan Appliance Repair of Bergen County', description: 'Expert Hestan range, grill & refrigerator repair in Bergen County NJ. Ultra-premium cooking specialists. Same day service in Alpine, Saddle River & all Bergen County.', about: 'Hestan creates the world\'s finest cooking equipment in Anaheim, California. Their commercial-grade ranges and outdoor grills represent the pinnacle of culinary performance for Bergen County\'s most demanding kitchens.', specialty: 'professional ranges, outdoor grills, refrigerators, and wine storage', commonIssues: 'Hestan burner problems, grill ignition issues, refrigerator temperature control', whyChoose: 'Our technicians are trained on Hestan\'s commercial-grade construction and can maintain these ultra-premium appliances to exacting standards.' },
  'broan': { name: 'Broan', title: 'Broan Appliance Repair of Bergen County - Same Day', heroTitle: 'Broan Appliance Repair of Bergen County', description: 'Expert Broan range hood, ventilation & exhaust fan repair in Bergen County NJ. Ventilation specialists. Same day service throughout Bergen County.', about: 'Broan has been America\'s ventilation leader since 1932. Their range hoods, bathroom fans, and ventilation systems keep Bergen County homes fresh and comfortable.', specialty: 'range hoods, bathroom exhaust fans, ventilation systems, and trash compactors', commonIssues: 'Broan range hood motor failure, exhaust fan not working, light problems, loud operation', whyChoose: 'We specialize in Broan\'s ventilation systems and can restore proper airflow to your Bergen County kitchen and bathrooms.' },
  'capital-cooking': { name: 'Capital Cooking', title: 'Capital Cooking Appliance Repair of Bergen County - Same Day', heroTitle: 'Capital Cooking Appliance Repair of Bergen County', description: 'Expert Capital range and cooktop repair in Bergen County NJ. Professional cooking equipment specialists. Same day service in Ridgewood, Wyckoff & all Bergen County.', about: 'Capital Cooking creates restaurant-quality ranges in California with open burners delivering 25,000 BTUs. Serious Bergen County home chefs rely on Capital\'s commercial performance.', specialty: 'professional ranges, rangetops, wall ovens, and outdoor grills', commonIssues: 'Capital burner ignition problems, oven temperature inconsistency, convection fan issues', whyChoose: 'We understand Capital\'s commercial-style open burner system and can maintain restaurant-grade performance in your Bergen County home.' },
  'danby': { name: 'Danby', title: 'Danby Appliance Repair of Bergen County - Same Day', heroTitle: 'Danby Appliance Repair of Bergen County', description: 'Expert Danby compact refrigerator, freezer & wine cooler repair in Bergen County NJ. Compact appliance specialists. Same day service throughout Bergen County.', about: 'Danby specializes in compact appliances perfect for Bergen County apartments, dorms, and offices. Their wine coolers, mini fridges, and portable ACs offer space-saving solutions.', specialty: 'compact refrigerators, wine coolers, chest freezers, and portable air conditioners', commonIssues: 'Danby wine cooler not cooling, mini fridge temperature problems, freezer frost buildup', whyChoose: 'We service Danby\'s full line of compact appliances popular in Bergen County apartments and smaller living spaces.' },
  'avanti': { name: 'Avanti', title: 'Avanti Appliance Repair of Bergen County - Same Day', heroTitle: 'Avanti Appliance Repair of Bergen County', description: 'Expert Avanti compact refrigerator, wine cooler & appliance repair in Bergen County NJ. Compact living specialists. Same day service throughout Bergen County.', about: 'Avanti creates compact appliances for modern living, from wine coolers to mini kitchens. Bergen County apartments and offices rely on Avanti\'s space-efficient designs.', specialty: 'wine coolers, compact refrigerators, mini kitchens, and beverage centers', commonIssues: 'Avanti wine cooler temperature issues, compact fridge not cooling, beverage center problems', whyChoose: 'We specialize in Avanti\'s compact appliance line serving Bergen County apartments and small spaces.' },
  'magic-chef': { name: 'Magic Chef', title: 'Magic Chef Appliance Repair of Bergen County - Same Day', heroTitle: 'Magic Chef Appliance Repair of Bergen County', description: 'Expert Magic Chef refrigerator, microwave & compact appliance repair in Bergen County NJ. Affordable reliability specialists. Same day service throughout Bergen County.', about: 'Magic Chef has provided affordable, reliable appliances to American homes for decades. Their compact refrigerators and microwaves serve Bergen County apartments and offices.', specialty: 'compact refrigerators, microwaves, wine coolers, and small appliances', commonIssues: 'Magic Chef microwave not heating, compact fridge problems, wine cooler temperature issues', whyChoose: 'We service Magic Chef\'s affordable appliance line and can keep your Bergen County compact appliances running reliably.' },
  'sharp': { name: 'Sharp', title: 'Sharp Appliance Repair of Bergen County - Same Day', heroTitle: 'Sharp Appliance Repair of Bergen County', description: 'Expert Sharp microwave, microwave drawer & appliance repair in Bergen County NJ. Microwave innovation specialists. Same day service throughout Bergen County.', about: 'Sharp pioneered microwave technology and continues innovating with microwave drawers and SuperSteam ovens. Bergen County kitchens feature Sharp\'s space-saving designs.', specialty: 'microwave drawers, over-the-range microwaves, countertop microwaves, and SuperSteam ovens', commonIssues: 'Sharp microwave not heating, drawer mechanism problems, turntable issues, door latch failures', whyChoose: 'We specialize in Sharp\'s innovative microwave drawer technology and can service all Sharp microwave products.' },
  'panasonic': { name: 'Panasonic', title: 'Panasonic Appliance Repair of Bergen County - Same Day', heroTitle: 'Panasonic Appliance Repair of Bergen County', description: 'Expert Panasonic microwave and appliance repair in Bergen County NJ. Japanese technology specialists. Same day service throughout Bergen County.', about: 'Panasonic brings Japanese technology to home appliances with their Inverter microwaves and innovative cooking solutions. Bergen County homes trust Panasonic\'s reliability.', specialty: 'inverter microwaves, countertop microwaves, and small appliances', commonIssues: 'Panasonic microwave inverter problems, not heating, turntable issues, door problems', whyChoose: 'Our technicians understand Panasonic\'s Inverter microwave technology that delivers superior cooking results.' },
  'la-cornue': { name: 'La Cornue', title: 'La Cornue Appliance Repair of Bergen County - Same Day', heroTitle: 'La Cornue Appliance Repair of Bergen County', description: 'Expert La Cornue range repair in Bergen County NJ. French luxury range specialists. Same day service in Alpine, Saddle River, Englewood Cliffs & all Bergen County.', about: 'La Cornue has handcrafted the world\'s finest French ranges since 1908. Each range takes over 100 hours to build, making La Cornue the ultimate statement in Bergen County\'s luxury kitchens.', specialty: 'Château ranges, CornuFé ranges, and custom cooking suites', commonIssues: 'La Cornue oven temperature calibration, gas burner problems, custom door issues', whyChoose: 'We are trained to service La Cornue\'s bespoke French ranges and understand the craftsmanship required for these extraordinary appliances.' },
  'true-residential': { name: 'True Residential', title: 'True Residential Appliance Repair of Bergen County - Same Day', heroTitle: 'True Residential Appliance Repair of Bergen County', description: 'Expert True refrigerator, freezer & wine cabinet repair in Bergen County NJ. Commercial-grade residential refrigeration. Same day service in Alpine, Franklin Lakes & all Bergen County.', about: 'True brings 75 years of commercial refrigeration expertise to luxury homes. Their stainless steel refrigerators and wine cabinets deliver restaurant-grade performance in Bergen County\'s finest kitchens.', specialty: 'column refrigerators, undercounter refrigerators, wine cabinets, and freezers', commonIssues: 'True compressor issues, temperature fluctuations, ice maker problems, door seal failures', whyChoose: 'Our technicians understand True\'s commercial-grade construction and can maintain their precision refrigeration systems.' },
  'vent-a-hood': { name: 'Vent-A-Hood', title: 'Vent-A-Hood Appliance Repair of Bergen County - Same Day', heroTitle: 'Vent-A-Hood Appliance Repair of Bergen County', description: 'Expert Vent-A-Hood range hood repair in Bergen County NJ. Magic Lung ventilation specialists. Same day service throughout Bergen County.', about: 'Vent-A-Hood invented the residential range hood in 1933 and their patented Magic Lung blower technology remains the quietest in the industry. Bergen County\'s serious kitchens demand Vent-A-Hood quality.', specialty: 'range hoods, ventilation systems, and blower units', commonIssues: 'Vent-A-Hood Magic Lung motor problems, light failures, grease filter issues, blower not working', whyChoose: 'We specialize in Vent-A-Hood\'s unique Magic Lung centrifugal blower system that captures smoke and grease more effectively.' },
  'zline': { name: 'ZLINE', title: 'ZLINE Appliance Repair of Bergen County - Same Day', heroTitle: 'ZLINE Appliance Repair of Bergen County', description: 'Expert ZLINE range, range hood & dishwasher repair in Bergen County NJ. Professional style at accessible prices. Same day service throughout Bergen County.', about: 'ZLINE brings professional-style kitchen appliances at accessible prices. Their stainless steel ranges and dramatic range hoods add chef-inspired style to Bergen County kitchens.', specialty: 'gas and dual-fuel ranges, range hoods, dishwashers, and microwaves', commonIssues: 'ZLINE range igniter problems, hood motor issues, dishwasher drainage, oven temperature calibration', whyChoose: 'We service ZLINE\'s professional-style appliances and can maintain their commercial-inspired performance.' },
  'thor-kitchen': { name: 'Thor Kitchen', title: 'Thor Kitchen Appliance Repair of Bergen County - Same Day', heroTitle: 'Thor Kitchen Appliance Repair of Bergen County', description: 'Expert Thor Kitchen range and appliance repair in Bergen County NJ. Professional-style cooking specialists. Same day service throughout Bergen County.', about: 'Thor Kitchen delivers professional-grade cooking appliances with bold styling. Their stainless steel ranges and range hoods bring commercial kitchen aesthetics to Bergen County homes.', specialty: 'professional ranges, range hoods, dishwashers, and refrigerators', commonIssues: 'Thor Kitchen burner ignition problems, oven not heating, range hood motor failures', whyChoose: 'We service Thor Kitchen\'s professional-style appliances and understand their commercial-inspired construction.' },
  'summit': { name: 'Summit', title: 'Summit Appliance Repair of Bergen County - Same Day', heroTitle: 'Summit Appliance Repair of Bergen County', description: 'Expert Summit refrigerator, freezer & wine cooler repair in Bergen County NJ. Compact and ADA-compliant specialists. Same day service throughout Bergen County.', about: 'Summit specializes in compact, ADA-compliant, and medical-grade refrigeration. Their space-saving solutions serve Bergen County apartments, offices, and healthcare facilities.', specialty: 'compact refrigerators, ADA-compliant appliances, medical refrigerators, and wine storage', commonIssues: 'Summit compressor problems, temperature control issues, door seal failures', whyChoose: 'We understand Summit\'s specialized refrigeration including their medical and ADA-compliant units serving Bergen County facilities.' },
  'tappan': { name: 'Tappan', title: 'Tappan Appliance Repair of Bergen County - Same Day', heroTitle: 'Tappan Appliance Repair of Bergen County', description: 'Expert Tappan range and appliance repair in Bergen County NJ. Classic American brand specialists. Same day service throughout Bergen County.', about: 'Tappan has been an American kitchen brand since 1881, pioneering innovations in gas cooking. Tappan appliances continue serving Bergen County homes with reliable performance.', specialty: 'gas ranges, electric ranges, wall ovens, and cooktops', commonIssues: 'Tappan oven igniter problems, burner issues, temperature inconsistency', whyChoose: 'We service Tappan\'s reliable American-made ranges and can source parts for both newer and older models.' },
  'roper': { name: 'Roper', title: 'Roper Appliance Repair of Bergen County - Same Day', heroTitle: 'Roper Appliance Repair of Bergen County', description: 'Expert Roper washer, dryer & appliance repair in Bergen County NJ. Affordable reliability. Same day service throughout Bergen County.', about: 'Roper delivers quality at budget-friendly prices. These no-frills appliances deliver reliable performance for Bergen County families watching their budget.', specialty: 'washers, dryers, refrigerators, and ranges', commonIssues: 'Roper washer not spinning, dryer not heating, refrigerator problems', whyChoose: 'Roper shares proven technology and parts availability for reliable Bergen County repairs.' },
  'ikea': { name: 'IKEA', title: 'IKEA Appliance Repair of Bergen County - Same Day', heroTitle: 'IKEA Appliance Repair of Bergen County', description: 'Expert IKEA appliance repair in Bergen County NJ. Swedish design appliance specialists. Same day service throughout Bergen County.', about: 'IKEA appliances bring Swedish design to integrated kitchens. IKEA appliances fit seamlessly into Bergen County\'s modern kitchen designs with clean Scandinavian aesthetics.', specialty: 'integrated refrigerators, dishwashers, cooktops, and wall ovens', commonIssues: 'IKEA dishwasher drainage, refrigerator temperature, oven heating problems', whyChoose: 'We have extensive experience with IKEA appliances and can service them expertly.' },
  'westinghouse': { name: 'Westinghouse', title: 'Westinghouse Appliance Repair of Bergen County - Same Day', heroTitle: 'Westinghouse Appliance Repair of Bergen County', description: 'Expert Westinghouse appliance repair in Bergen County NJ. Classic American brand specialists. Same day service throughout Bergen County.', about: 'Westinghouse pioneered American electrical appliances over a century ago. Today the brand continues through various manufacturers, and we service all Westinghouse appliances in Bergen County.', specialty: 'refrigerators, freezers, dehumidifiers, and small appliances', commonIssues: 'Westinghouse refrigerator not cooling, freezer problems, dehumidifier issues', whyChoose: 'We have experience with Westinghouse\'s various product generations and can service both vintage and modern appliances.' },
  'insignia': { name: 'Insignia', title: 'Insignia Appliance Repair of Bergen County - Same Day', heroTitle: 'Insignia Appliance Repair of Bergen County', description: 'Expert Insignia compact refrigerator, freezer & appliance repair in Bergen County NJ. Best Buy brand specialists. Same day service throughout Bergen County.', about: 'Insignia is Best Buy\'s house brand offering affordable compact appliances. Their mini fridges, freezers, and wine coolers serve Bergen County students and apartment dwellers.', specialty: 'compact refrigerators, chest freezers, wine coolers, and ice makers', commonIssues: 'Insignia mini fridge not cooling, freezer temperature problems, ice maker failures', whyChoose: 'We service Insignia\'s affordable appliances and can provide reliable repairs for these budget-friendly units.' },
  'crossover-commercial-laundry': { name: 'Crossover', title: 'Crossover Appliance Repair of Bergen County - Same Day', heroTitle: 'Crossover Commercial Laundry Repair of Bergen County', description: 'Expert Crossover commercial washer and dryer repair in Bergen County NJ. Commercial laundry specialists. Same day service for laundromats throughout Bergen County.', about: 'Crossover by Wascomat brings European commercial laundry technology to North American markets. Bergen County laundromats trust Crossover for heavy-duty reliability.', specialty: 'commercial washers, commercial dryers, and stacked laundry units', commonIssues: 'Crossover washer drainage problems, dryer heating issues, coin mechanism failures', whyChoose: 'We specialize in commercial laundry equipment and understand the demanding requirements of Bergen County laundromat operations.' },
  'wascomat': { name: 'Wascomat', title: 'Wascomat Appliance Repair of Bergen County - Same Day', heroTitle: 'Wascomat Appliance Repair of Bergen County', description: 'Expert Wascomat commercial washer and dryer repair in Bergen County NJ. European commercial laundry specialists. Same day service throughout Bergen County.', about: 'Wascomat is a leading European commercial laundry equipment manufacturer. Bergen County laundromats and multi-housing facilities rely on Wascomat\'s industrial-grade durability.', specialty: 'commercial washers, commercial dryers, and washer-extractors', commonIssues: 'Wascomat washer not draining, dryer heating problems, bearing failures, coin mechanism issues', whyChoose: 'Our technicians have commercial laundry expertise and can service Wascomat\'s industrial-grade equipment used in Bergen County businesses.' },
  'huebsch': { name: 'Huebsch', title: 'Huebsch Appliance Repair of Bergen County - Same Day', heroTitle: 'Huebsch Appliance Repair of Bergen County', description: 'Expert Huebsch commercial washer and dryer repair in Bergen County NJ. Commercial laundry specialists. Same day service throughout Bergen County.', about: 'Huebsch commercial laundry equipment is built with commercial-grade construction. Bergen County laundromats and apartments trust Huebsch\'s durability and reliability.', specialty: 'commercial washers, commercial dryers, and on-premise laundry equipment', commonIssues: 'Huebsch washer transmission problems, dryer not heating, control board failures', whyChoose: 'We understand Huebsch\'s commercial construction used in Bergen County multi-housing facilities.' },
  'alliance-laundry-systems': { name: 'Alliance Laundry Systems', title: 'Alliance Laundry Systems Repair of Bergen County - Same Day', heroTitle: 'Alliance Laundry Systems Repair of Bergen County', description: 'Expert Alliance Laundry Systems commercial laundry repair in Bergen County NJ. The world\'s largest commercial laundry manufacturer. Same day service throughout Bergen County.', about: 'Alliance Laundry Systems manufactures commercial laundry equipment in Ripon, Wisconsin. Bergen County laundromats and facilities trust Alliance\'s legendary durability.', specialty: 'commercial washers, dryers, ironers, and multi-housing laundry', commonIssues: 'Commercial washer drainage, dryer heating problems, coin mechanism failures, control board issues', whyChoose: 'We are specialists in Alliance Laundry Systems\' full product line serving Bergen County commercial customers.' },
  'hobart': { name: 'Hobart', title: 'Hobart Appliance Repair of Bergen County - Same Day', heroTitle: 'Hobart Appliance Repair of Bergen County', description: 'Expert Hobart commercial dishwasher, mixer & food equipment repair in Bergen County NJ. Commercial kitchen specialists. Same day service throughout Bergen County.', about: 'Hobart has been the leader in commercial food equipment since 1897. Bergen County restaurants and institutions rely on Hobart dishwashers, mixers, and food preparation equipment.', specialty: 'commercial dishwashers, floor mixers, food processors, and slicers', commonIssues: 'Hobart dishwasher not cleaning, mixer motor problems, slicer blade issues', whyChoose: 'We have commercial kitchen equipment expertise and can service Hobart\'s institutional-grade appliances used in Bergen County restaurants and facilities.' },
  'forno': { name: 'Forno', title: 'Forno Appliance Repair of Bergen County - Same Day', heroTitle: 'Forno Appliance Repair of Bergen County', description: 'Expert Forno range and refrigerator repair in Bergen County NJ. Italian cooking specialists. Same day service throughout Bergen County.', about: 'Forno brings authentic Italian cooking craftsmanship to professional-style ranges. Their stainless steel appliances add European flair to Bergen County kitchens.', specialty: 'professional ranges, range hoods, and refrigerators', commonIssues: 'Forno range igniter problems, oven temperature inconsistency, burner issues', whyChoose: 'We service Forno\'s Italian-inspired professional ranges and can maintain their European cooking performance.' },
  'fulgor-milano': { name: 'Fulgor Milano', title: 'Fulgor Milano Appliance Repair of Bergen County - Same Day', heroTitle: 'Fulgor Milano Appliance Repair of Bergen County', description: 'Expert Fulgor Milano range and cooktop repair in Bergen County NJ. Italian luxury cooking specialists. Same day service in Ridgewood, Glen Rock & all Bergen County.', about: 'Fulgor Milano has crafted professional cooking appliances in Milan, Italy since 1949. Their Sofia and Sophia ranges bring authentic Italian design to Bergen County\'s sophisticated kitchens.', specialty: 'professional ranges, wall ovens, cooktops, and range hoods', commonIssues: 'Fulgor Milano burner ignition problems, oven temperature calibration, convection fan issues', whyChoose: 'We understand Fulgor Milano\'s Italian engineering and can maintain their professional cooking performance.' },
  'panda': { name: 'Panda', title: 'Panda Appliance Repair of Bergen County - Same Day', heroTitle: 'Panda Appliance Repair of Bergen County', description: 'Expert Panda compact washer and dryer repair in Bergen County NJ. Portable laundry specialists. Same day service throughout Bergen County.', about: 'Panda specializes in compact and portable laundry solutions perfect for Bergen County apartments without laundry hookups. Their portable washers and ventless dryers enable laundry anywhere.', specialty: 'portable washers, compact dryers, and twin tub washers', commonIssues: 'Panda washer not draining, compact dryer heating problems, spin cycle issues', whyChoose: 'We service Panda\'s portable laundry equipment popular in Bergen County apartments and small spaces.' },
  'equator': { name: 'Equator', title: 'Equator Appliance Repair of Bergen County - Same Day', heroTitle: 'Equator Appliance Repair of Bergen County', description: 'Expert Equator compact washer, dryer & dishwasher repair in Bergen County NJ. Space-saving appliance specialists. Same day service throughout Bergen County.', about: 'Equator Advanced Appliances creates compact, combo, and portable appliances for space-constrained living. Bergen County condos and apartments benefit from Equator\'s innovative designs.', specialty: 'washer-dryer combos, compact dishwashers, and portable washers', commonIssues: 'Equator combo washer/dryer problems, compact dishwasher drainage, ventless drying issues', whyChoose: 'We specialize in Equator\'s unique combo appliances and compact designs that maximize space in Bergen County apartments.' },
  'ariston': { name: 'Ariston', title: 'Ariston Appliance Repair of Bergen County - Same Day', heroTitle: 'Ariston Appliance Repair of Bergen County', description: 'Expert Ariston washer, dryer & appliance repair in Bergen County NJ. European appliance specialists. Same day service throughout Bergen County.', about: 'Ariston is an Italian appliance brand known for elegant European design and efficient performance. Bergen County homes appreciate Ariston\'s Mediterranean engineering.', specialty: 'washing machines, dryers, dishwashers, and ranges', commonIssues: 'Ariston washer door lock problems, dryer heating issues, dishwasher drainage', whyChoose: 'We service European brands and understand Ariston\'s Italian engineering popular in Bergen County homes.' },
  'beaumark': { name: 'Beaumark', title: 'Beaumark Appliance Repair of Bergen County - Same Day', heroTitle: 'Beaumark Appliance Repair of Bergen County', description: 'Expert Beaumark appliance repair in Bergen County NJ. Canadian brand specialists. Same day service throughout Bergen County.', about: 'Beaumark was a Canadian house brand offering reliable home appliances. Our Bergen County technicians can service and maintain existing Beaumark appliances.', specialty: 'refrigerators, ranges, dishwashers, and laundry', commonIssues: 'Beaumark refrigerator not cooling, range problems, appliance age-related issues', whyChoose: 'We have experience with Beaumark appliances and can source parts to keep these units running.' },
  'brada': { name: 'Brada', title: 'Brada Appliance Repair of Bergen County - Same Day', heroTitle: 'Brada Appliance Repair of Bergen County', description: 'Expert Brada appliance repair in Bergen County NJ. Compact and portable specialists. Same day service throughout Bergen County.', about: 'Brada offers compact and portable appliances for space-constrained living. Bergen County apartments and small homes benefit from Brada\'s efficient designs.', specialty: 'portable washers, compact dryers, and small appliances', commonIssues: 'Brada washer drainage problems, compact dryer issues, motor failures', whyChoose: 'We service compact appliance brands and can repair Brada units in Bergen County apartments.' },
  'avantgarde': { name: 'Avantgarde', title: 'Avantgarde Appliance Repair of Bergen County - Same Day', heroTitle: 'Avantgarde Appliance Repair of Bergen County', description: 'Expert Avantgarde appliance repair in Bergen County NJ. European design specialists. Same day service throughout Bergen County.', about: 'Avantgarde brings European design sensibility to home appliances. Bergen County homeowners appreciate the modern aesthetics and efficient performance.', specialty: 'washers, dryers, and kitchen appliances', commonIssues: 'Avantgarde appliance performance issues, parts sourcing, maintenance', whyChoose: 'We service European-styled brands and can maintain Avantgarde appliances in Bergen County homes.' },
  'five-star': { name: 'Five Star', title: 'Five Star Appliance Repair of Bergen County - Same Day', heroTitle: 'Five Star Appliance Repair of Bergen County', description: 'Expert Five Star range repair in Bergen County NJ. Professional cooking specialists. Same day service throughout Bergen County.', about: 'Five Star ranges are built by Brown Stove Works in Tennessee, delivering professional-style cooking at competitive prices. Bergen County home chefs appreciate Five Star\'s open burner performance.', specialty: 'professional ranges, cooktops, and wall ovens', commonIssues: 'Five Star burner ignition problems, oven temperature issues, convection problems', whyChoose: 'We service Five Star\'s professional-style ranges and understand their open burner cooking systems.' },
  'galanz': { name: 'Galanz', title: 'Galanz Appliance Repair of Bergen County - Same Day', heroTitle: 'Galanz Appliance Repair of Bergen County', description: 'Expert Galanz retro refrigerator and microwave repair in Bergen County NJ. Retro-style appliance specialists. Same day service throughout Bergen County.', about: 'Galanz is the world\'s largest microwave manufacturer, now offering retro-styled refrigerators and appliances. Their colorful designs add personality to Bergen County kitchens.', specialty: 'retro refrigerators, microwaves, and toaster ovens', commonIssues: 'Galanz refrigerator compressor issues, microwave not heating, temperature problems', whyChoose: 'We service Galanz\'s retro-styled appliances and can maintain their distinctive designs.' },
  'gibson': { name: 'Gibson', title: 'Gibson Appliance Repair of Bergen County - Same Day', heroTitle: 'Gibson Appliance Repair of Bergen County', description: 'Expert Gibson refrigerator, range & appliance repair in Bergen County NJ. Classic American brand specialists. Same day service throughout Bergen County.', about: 'Gibson has been an American appliance brand since 1877. Bergen County homes with Gibson appliances trust our reliable repair service.', specialty: 'refrigerators, ranges, dishwashers, and laundry', commonIssues: 'Gibson refrigerator not cooling, range problems, appliance age-related issues', whyChoose: 'We service Gibson appliances and can source parts for reliable repairs.' },
  'hercules': { name: 'Hercules', title: 'Hercules Appliance Repair of Bergen County - Same Day', heroTitle: 'Hercules Appliance Repair of Bergen County', description: 'Expert Hercules commercial laundry repair in Bergen County NJ. Commercial equipment specialists. Same day service throughout Bergen County.', about: 'Hercules commercial laundry equipment serves laundromats and multi-housing facilities with heavy-duty performance. Bergen County businesses trust Hercules durability.', specialty: 'commercial washers, commercial dryers, and coin-operated laundry', commonIssues: 'Hercules washer not draining, dryer heating problems, coin mechanism failures', whyChoose: 'We specialize in commercial laundry equipment and can service Hercules machines in Bergen County facilities.' },
  'hisense': { name: 'Hisense', title: 'Hisense Appliance Repair of Bergen County - Same Day', heroTitle: 'Hisense Appliance Repair of Bergen County', description: 'Expert Hisense refrigerator, washer & appliance repair in Bergen County NJ. Value brand specialists. Same day service throughout Bergen County.', about: 'Hisense is a major Chinese electronics company offering affordable appliances worldwide. Bergen County budget-conscious shoppers appreciate Hisense\'s value proposition.', specialty: 'refrigerators, washing machines, dehumidifiers, and wine coolers', commonIssues: 'Hisense refrigerator temperature problems, washer drainage issues, dehumidifier failures', whyChoose: 'We service Hisense appliances and can provide reliable repairs for these value-oriented products.' },
  'inglis': { name: 'Inglis', title: 'Inglis Appliance Repair of Bergen County - Same Day', heroTitle: 'Inglis Appliance Repair of Bergen County', description: 'Expert Inglis washer, dryer & appliance repair in Bergen County NJ. Reliable laundry specialists. Same day service throughout Bergen County.', about: 'Inglis is historically sold in Canada, known for reliable laundry appliances. Bergen County residents with Inglis appliances trust our experienced service.', specialty: 'washers, dryers, and refrigerators', commonIssues: 'Inglis washer not spinning, dryer not heating, appliance performance issues', whyChoose: 'Inglis shares proven technology and parts availability for reliable Bergen County repairs.' },
  'marvel': { name: 'Marvel', title: 'Marvel Appliance Repair of Bergen County - Same Day', heroTitle: 'Marvel Appliance Repair of Bergen County', description: 'Expert Marvel wine cooler, beverage center & undercounter refrigerator repair in Bergen County NJ. Luxury refrigeration specialists. Same day service throughout Bergen County.', about: 'Marvel has specialized in undercounter refrigeration since 1892. Their wine coolers, beverage centers, and ice machines grace Bergen County\'s finest entertainment spaces.', specialty: 'wine coolers, beverage centers, undercounter refrigerators, and ice machines', commonIssues: 'Marvel wine cooler temperature problems, beverage center not cooling, ice maker failures', whyChoose: 'We specialize in Marvel\'s undercounter refrigeration and can maintain their precision cooling in Bergen County homes.' },
  'midea': { name: 'Midea', title: 'Midea Appliance Repair of Bergen County - Same Day', heroTitle: 'Midea Appliance Repair of Bergen County', description: 'Expert Midea washer, dryer, refrigerator & appliance repair in Bergen County NJ. World\'s largest appliance manufacturer. Same day service throughout Bergen County.', about: 'Midea is the world\'s largest appliance manufacturer, offering quality products at competitive prices. Bergen County value-seekers appreciate Midea\'s combination of features and affordability.', specialty: 'washers, dryers, refrigerators, dishwashers, and air conditioners', commonIssues: 'Midea washer drainage problems, dryer heating issues, refrigerator temperature control', whyChoose: 'We service Midea\'s diverse appliance line and can provide reliable repairs throughout Bergen County.' },
  'modern-maid': { name: 'Modern Maid', title: 'Modern Maid Appliance Repair of Bergen County - Same Day', heroTitle: 'Modern Maid Appliance Repair of Bergen County', description: 'Expert Modern Maid range and oven repair in Bergen County NJ. Classic kitchen appliance specialists. Same day service throughout Bergen County.', about: 'Modern Maid was a premium cooking brand known for innovative oven designs. Our Bergen County technicians can service and maintain existing Modern Maid appliances.', specialty: 'wall ovens, cooktops, and ranges', commonIssues: 'Modern Maid oven heating element failures, temperature calibration, igniter problems', whyChoose: 'We have experience with Modern Maid\'s cooking appliances and can source parts for these classic units.' },
  'moffat': { name: 'Moffat', title: 'Moffat Appliance Repair of Bergen County - Same Day', heroTitle: 'Moffat Appliance Repair of Bergen County', description: 'Expert Moffat range and appliance repair in Bergen County NJ. Reliable kitchen specialists. Same day service throughout Bergen County.', about: 'Moffat is historically sold in Canada, offering reliable kitchen appliances. Bergen County residents with Moffat appliances trust our knowledgeable service.', specialty: 'ranges, refrigerators, and dishwashers', commonIssues: 'Moffat range igniter problems, oven temperature issues, refrigerator not cooling', whyChoose: 'Moffat shares proven technology and our technicians have extensive experience with these reliable appliances.' },
  'northland-refrigeration': { name: 'Northland', title: 'Northland Appliance Repair of Bergen County - Same Day', heroTitle: 'Northland Appliance Repair of Bergen County', description: 'Expert Northland refrigerator and freezer repair in Bergen County NJ. Built-in refrigeration specialists. Same day service throughout Bergen County.', about: 'Northland specializes in built-in refrigeration with professional styling. Their stainless steel refrigerators and freezers serve Bergen County\'s custom kitchen designs.', specialty: 'built-in refrigerators, built-in freezers, and wine storage', commonIssues: 'Northland compressor issues, temperature fluctuations, ice maker problems', whyChoose: 'We service built-in refrigeration brands and can maintain Northland units in Bergen County\'s custom kitchens.' },
  'porter-charles': { name: 'Porter & Charles', title: 'Porter & Charles Appliance Repair of Bergen County - Same Day', heroTitle: 'Porter & Charles Appliance Repair of Bergen County', description: 'Expert Porter & Charles appliance repair in Bergen County NJ. European-style appliance specialists. Same day service throughout Bergen County.', about: 'Porter & Charles offers European-styled kitchen appliances with clean design aesthetics. Bergen County homeowners appreciate their modern, space-efficient designs.', specialty: 'refrigerators, dishwashers, and cooking appliances', commonIssues: 'Porter & Charles appliance performance issues, maintenance, parts sourcing', whyChoose: 'We service European-style brands and can maintain Porter & Charles appliances in Bergen County homes.' },
  'premier': { name: 'Premier', title: 'Premier Appliance Repair of Bergen County - Same Day', heroTitle: 'Premier Appliance Repair of Bergen County', description: 'Expert Premier range and oven repair in Bergen County NJ. American-made cooking specialists. Same day service throughout Bergen County.', about: 'Premier ranges are built by Brown Stove Works in Tennessee, offering reliable American-made cooking at affordable prices. Bergen County families trust Premier\'s dependable performance.', specialty: 'gas ranges, electric ranges, and wall ovens', commonIssues: 'Premier range igniter problems, oven temperature calibration, burner issues', whyChoose: 'We service Premier\'s American-made ranges and understand their straightforward, reliable construction.' },
  'signature-kitchen-suite': { name: 'Signature Kitchen Suite', title: 'Signature Kitchen Suite Appliance Repair of Bergen County - Same Day', heroTitle: 'Signature Kitchen Suite Appliance Repair of Bergen County', description: 'Expert Signature Kitchen Suite refrigerator, range & dishwasher repair in Bergen County NJ. Ultra-luxury appliance specialists. Same day service in Alpine, Saddle River & all Bergen County.', about: 'Signature Kitchen Suite is an ultra-luxury appliance brand, combining Korean innovation with professional performance. Bergen County\'s most sophisticated kitchens feature Signature\'s precision engineering.', specialty: 'built-in refrigerators, professional ranges, dishwashers, and wine storage', commonIssues: 'Signature refrigerator temperature issues, range igniter problems, dishwasher drainage', whyChoose: 'We are trained on Signature Kitchen Suite\'s premium technologies and can service their advanced features in Bergen County\'s luxury kitchens.' },
  'sirius': { name: 'Sirius', title: 'Sirius Appliance Repair of Bergen County - Same Day', heroTitle: 'Sirius Appliance Repair of Bergen County', description: 'Expert Sirius range hood and ventilation repair in Bergen County NJ. European ventilation specialists. Same day service throughout Bergen County.', about: 'Sirius creates European-designed range hoods with elegant styling and powerful ventilation. Bergen County\'s design-forward kitchens feature Sirius\'s distinctive hood designs.', specialty: 'range hoods, ventilation systems, and downdraft ventilation', commonIssues: 'Sirius hood motor problems, light failures, control panel issues', whyChoose: 'We service European ventilation brands and can maintain Sirius hoods\' performance and distinctive styling.' },
  'venmar': { name: 'Venmar', title: 'Venmar Appliance Repair of Bergen County - Same Day', heroTitle: 'Venmar Appliance Repair of Bergen County', description: 'Expert Venmar range hood and ventilation repair in Bergen County NJ. Canadian ventilation specialists. Same day service throughout Bergen County.', about: 'Venmar is a leading Canadian range hood manufacturer offering powerful ventilation in stylish designs. Bergen County kitchens benefit from Venmar\'s effective smoke and odor removal.', specialty: 'range hoods, downdraft systems, and ventilation', commonIssues: 'Venmar hood motor failures, blower problems, light issues', whyChoose: 'We service Venmar range hoods and can restore powerful ventilation to your Bergen County kitchen.' },
  'black-decker': { name: 'Black & Decker', title: 'Black & Decker Appliance Repair of Bergen County - Same Day', heroTitle: 'Black & Decker Appliance Repair of Bergen County', description: 'Expert Black & Decker small appliance repair in Bergen County NJ. Countertop appliance specialists. Same day service throughout Bergen County.', about: 'Black & Decker has been an American household name since 1910. Their countertop appliances and small kitchen products serve Bergen County homes reliably.', specialty: 'toaster ovens, coffee makers, microwaves, and small appliances', commonIssues: 'Black & Decker toaster oven heating issues, coffee maker problems, microwave failures', whyChoose: 'We service Black & Decker small appliances and can keep your Bergen County countertop products working.' }
};

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Extract subdomain
  const subdomain = hostname.split('.')[0];

  // Check if this is a brand subdomain
  const brand = brandData[subdomain];

  if (!brand) {
    // Not a brand subdomain, serve normally
    return next();
  }

  // Fetch the original page
  const response = await next();

  // Only modify HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    return response;
  }

  let html = await response.text();

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${brand.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${brand.description}">`
  );

  // Replace meta author
  html = html.replace(
    /<meta name="author" content=".*?">/,
    `<meta name="author" content="${brand.heroTitle}">`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?">/,
    `<link rel="canonical" href="https://${hostname}/">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?">/,
    `<meta property="og:title" content="${brand.title}">`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?">/,
    `<meta property="og:description" content="${brand.description}">`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?">/,
    `<meta property="og:url" content="https://${hostname}/">`
  );

  // Replace hero title - look for the main h1
  html = html.replace(
    /Bergen County Appliance Repair Service(?=<\/)/g,
    brand.heroTitle
  );

  // Add brand-specific hero subtitle after "Same-Day Repairs"
  html = html.replace(
    /Professional Same-Day Appliance Repair/,
    `Professional ${brand.name} Appliance Repair`
  );

  // Replace "Trusted Local Experts" section content if it exists
  html = html.replace(
    /Your Trusted Local Appliance Repair Experts/g,
    `Your Trusted ${brand.name} Repair Experts in Bergen County`
  );

  // Update schema.org name
  html = html.replace(
    /"name": "Bergen County Appliance Repair Service"/,
    `"name": "${brand.heroTitle}"`
  );
  html = html.replace(
    /"name": "Bergen County Appliance Repair"/,
    `"name": "${brand.heroTitle}"`
  );

  // Update schema.org @id and url
  html = html.replace(
    /"@id": "https:\/\/bergencountyappliancerepair\.com\/"/g,
    `"@id": "https://${hostname}/"`
  );
  html = html.replace(
    /"url": "https:\/\/bergencountyappliancerepair\.com\/"/g,
    `"url": "https://${hostname}/"`
  );
  html = html.replace(
    /"image": "https:\/\/bergencountyappliancerepair\.com\//g,
    `"image": "https://${hostname}/`
  );

  // Add brand indicator for styling
  html = html.replace(
    /<body/,
    `<body data-brand="${subdomain}"`
  );

  // Update footer with brand name
  html = html.replace(
    /Bergen County Appliance Repair Service\. All rights reserved/g,
    `${brand.heroTitle}. All rights reserved`
  );
  html = html.replace(
    />Bergen County Appliance Repair Service</g,
    `>${brand.heroTitle}<`
  );
  html = html.replace(
    />Bergen County Appliance Repair</g,
    `>${brand.heroTitle}<`
  );

  // Replace services section heading with brand name
  html = html.replace(
    /Expert Repair for All appliance Appliances/g,
    `Expert Repair for All ${brand.name} Appliances`
  );

  // Replace service areas dropdown with all Bergen County towns
  const allTownsHtml = `<div class="service-areas-submenu" id="serviceAreasSubmenu">
    <li><a href="#sa-service-areas" class="scroll-link">Allendale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Alpine</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Bergenfield</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Bogota</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Carlstadt</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Cliffside Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Closter</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Cresskill</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Demarest</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Dumont</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">East Rutherford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Edgewater</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Elmwood Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Emerson</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Englewood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Englewood Cliffs</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Fair Lawn</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Fairview</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Fort Lee</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Franklin Lakes</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Garfield</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Glen Rock</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hackensack</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Harrington Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hasbrouck Heights</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Haworth</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Hillsdale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ho-Ho-Kus</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Leonia</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Little Ferry</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Lodi</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Lyndhurst</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Mahwah</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Maywood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Midland Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Montvale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Moonachie</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">New Milford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">North Arlington</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Northvale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Norwood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Oakland</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Old Tappan</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Oradell</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Palisades Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Paramus</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Park Ridge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ramsey</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ridgefield</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ridgefield Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Ridgewood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">River Edge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">River Vale</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rochelle Park</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rockleigh</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Rutherford</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Saddle Brook</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Saddle River</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">South Hackensack</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Teaneck</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Tenafly</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Teterboro</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Upper Saddle River</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Waldwick</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Wallington</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Washington Township</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Westwood</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Woodcliff Lake</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Wood-Ridge</a></li>
    <li><a href="#sa-service-areas" class="scroll-link">Wyckoff</a></li>
  </div>`;

  html = html.replace(
    /<div class="service-areas-submenu" id="serviceAreasSubmenu">[\s\S]*?<\/div>/,
    allTownsHtml
  );

  // Add brand prefix to appliance type dropdown options
  html = html.replace(/value="Washer Repair">Washer<\/option>/g, `value="Washer Repair">${brand.name} Washer</option>`);
  html = html.replace(/value="Dryer Repair">Dryer<\/option>/g, `value="Dryer Repair">${brand.name} Dryer</option>`);
  html = html.replace(/value="Refrigerator Repair">Refrigerator<\/option>/g, `value="Refrigerator Repair">${brand.name} Refrigerator</option>`);
  html = html.replace(/value="Dishwasher Repair">Dishwasher<\/option>/g, `value="Dishwasher Repair">${brand.name} Dishwasher</option>`);
  html = html.replace(/value="Oven Repair">Oven<\/option>/g, `value="Oven Repair">${brand.name} Oven</option>`);
  html = html.replace(/value="Microwave Repair">Microwave<\/option>/g, `value="Microwave Repair">${brand.name} Microwave</option>`);
  html = html.replace(/value="Freezer Repair">Freezer<\/option>/g, `value="Freezer Repair">${brand.name} Freezer</option>`);
  html = html.replace(/value="Cooktop Repair">Cooktop<\/option>/g, `value="Cooktop Repair">${brand.name} Cooktop</option>`);
  html = html.replace(/value="Hood Vent Repair">Hood Vent<\/option>/g, `value="Hood Vent Repair">${brand.name} Hood Vent</option>`);
  html = html.replace(/value="Other">Other<\/option>/g, `value="Other">${brand.name} Other</option>`);

  // Remove cross-brand contamination - replace generic brand references with specific brand
  html = html.replace(/all major appliance brands/gi, `all ${brand.name} appliances`);
  html = html.replace(/all major home appliance brands/gi, `all ${brand.name} appliances`);
  html = html.replace(/At Bergen County Appliance Repair/g, `At ${brand.name} Appliance Repair of Bergen County`);
  html = html.replace(/When you choose Bergen County Appliance Repair/g, `When you choose ${brand.name} Appliance Repair of Bergen County`);
  html = html.replace(/When you trust us with your appliances/g, `When you trust us with your ${brand.name} appliances`);
  html = html.replace(/all appliance categories/gi, `all ${brand.name} appliance categories`);
  html = html.replace(/any appliance regardless/gi, `any ${brand.name} appliance regardless`);
  html = html.replace(/appliance engineering/gi, `${brand.name} engineering`);
  html = html.replace(/understanding the sophisticated engineering/gi, `understanding ${brand.name}'s sophisticated engineering`);
  html = html.replace(/Oven Models We Service/g, `${brand.name} Oven Models We Service`);
  html = html.replace(/Cooktop Models We Service/g, `${brand.name} Cooktop Models We Service`);
  html = html.replace(/Microwave Models We Service/g, `${brand.name} Microwave Models We Service`);
  html = html.replace(/Refrigerator Models We Service/g, `${brand.name} Refrigerator Models We Service`);
  html = html.replace(/Dryer Models We Service/g, `${brand.name} Dryer Models We Service`);
  html = html.replace(/Washer Models We Service/g, `${brand.name} Washer Models We Service`);
  html = html.replace(/Dishwasher Models We Service/g, `${brand.name} Dishwasher Models We Service`);
  html = html.replace(/Hood Vent Models We Service/g, `${brand.name} Hood Vent Models We Service`);
  html = html.replace(/qualified to service all major brands/gi, `qualified to service all ${brand.name} models`);
  html = html.replace(/We service all dryer models/gi, `We service all ${brand.name} dryer models`);
  html = html.replace(/We service all washer models/gi, `We service all ${brand.name} washer models`);
  html = html.replace(/service all hood and ventilation models/gi, `service all ${brand.name} hood and ventilation models`);
  html = html.replace(/dryers require specialized knowledge/gi, `${brand.name} dryers require specialized knowledge`);
  html = html.replace(/require understanding of electrical systems/gi, `${brand.name} repairs require understanding of electrical systems`);

  return new Response(html, {
    status: response.status,
    headers: response.headers
  });
}
