import { ServiceItem, Testimonial, FAQItem, EmirateInfo } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-relocation',
    title: 'Home Relocation',
    shortDesc: 'Complete residential moving solutions tailored for apartments, townhouses, and family homes across the UAE.',
    fullDesc: 'Moving home in the UAE requires meticulous organization, speed, and utmost care for your belongings. Best Route Relocation Services delivers complete end-to-end residential moving solutions. Our team handles everything from dismantle and heavy lifting to room-by-room packing and reassembly at your new location.',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Dedicated move coordinator for personalized service',
      'High-grade bubble wrap and corrugated boxes for total protection',
      'Expert carpenters for furniture disassembly and re-assembly',
      'Floor and wall protection in both old and new properties',
      'Timely execution with zero hidden costs'
    ],
    processSteps: [
      'Pre-move assessment and inventory list',
      'Systematic room-by-room packing and color-coded labeling',
      'Secure loading onto air-padded enclosed moving trucks',
      'Safe transport with real-time route tracking',
      'Unloading, placement, and curtain/furniture mounting'
    ],
    suitableFor: ['1-4 Bedroom Family Homes', 'Duplexes & Townhouses', 'Residential Units in All Emirates']
  },
  {
    id: 'apartment-moving',
    title: 'Apartment Moving',
    shortDesc: 'Fast and hassle-free apartment moves, fully compliant with building management permissions and elevator rules.',
    fullDesc: 'Navigating high-rise apartment towers in Dubai, Abu Dhabi, or Sharjah comes with strict move-in/move-out permit requirements, elevator bookings, and tight time windows. Best Route Relocation Services specializes in seamless tower apartment relocations with minimum disruption to neighbors.',
    iconName: 'Building',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Full compliance with Emaar, Nakheel, DAMAC, and Dubai Properties move permits',
      'Elevator and corridor padding to prevent building damage',
      'Rapid packing and loading optimized for tower elevators',
      'Same-day express apartment moving available',
      'Clean removal of all packing debris after unpacking'
    ],
    processSteps: [
      'Permit and elevator booking coordination',
      'Heavy-duty floor and door frame protective padding',
      'Dismantling beds, wardrobes, and TV wall mounts',
      'Careful trolley transport through corridors and lifts',
      'Unpacking and setup at destination apartment'
    ],
    suitableFor: ['Studio Apartments', '1, 2 & 3 Bedroom Apartments', 'Penthouse Relocations']
  },
  {
    id: 'villa-relocation',
    title: 'Villa Relocation',
    shortDesc: 'Luxury villa moving services for large homes, including garden furniture, chandeliers, and high-value artwork.',
    fullDesc: 'Moving a villa involves multiple floors, high-value furnishings, outdoor setups, and specialized care. Our villa relocation team is equipped with heavy-duty equipment, specialized crating for fragile items like chandeliers and artwork, and large fleet trucks to move your entire estate efficiently in a single day.',
    iconName: 'Crown',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Dedicated multi-person moving crew led by a master supervisor',
      'Custom wooden crates for chandeliers, antiques, and glass tables',
      'Patio, garden furniture, and gym equipment dismantling',
      'Specialized care for high-end appliances and grand pianos',
      'Comprehensive insurance options for luxury items'
    ],
    processSteps: [
      'On-site or virtual comprehensive survey',
      'Multi-team parallel packing (bedrooms, living areas, outdoor)',
      'Custom crating for delicate luxury assets',
      'Multi-truck synchronized transit',
      'Complete furniture arrangement, mounting, and debris cleanup'
    ],
    suitableFor: ['3 to 7 Bedroom Luxury Villas', 'Gated Community Residences', 'Multi-Floor Estates']
  },
  {
    id: 'office-relocation',
    title: 'Office Relocation',
    shortDesc: 'Seamless commercial moves designed to minimize business downtime, including IT equipment, servers, and office desks.',
    fullDesc: 'Time is money during a business move. Best Route Relocation Services provides overnight and weekend office relocations to ensure your company experiences zero operational downtime. From IT server racks and sensitive electronics to executive desks and filing systems, we handle your commercial assets with military precision.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Weekend and after-hours overnight moving options',
      'Antistatic bubble wrap and specialized IT equipment crates',
      'Color-coded workstation tagging for organized reassembly',
      'Safe transport of confidential documents and filing units',
      'Fast turnaround to get your team back to work immediately'
    ],
    processSteps: [
      'Commercial project planning and timeline mapping',
      'Workstation tagging and document archiving',
      'IT gear, monitor, and server rack disconnection & wrapping',
      'Systematic loading and secure commercial transport',
      'Desk setup, cable routing assistance, and post-move cleanup'
    ],
    suitableFor: ['Corporate Offices', 'Retail Stores & Showrooms', 'Co-working Spaces & IT Hubs']
  },
  {
    id: 'furniture-moving',
    title: 'Furniture Moving',
    shortDesc: 'Expert furniture disassembly, wrapping, transport, and reassembly by certified UAE carpenters.',
    fullDesc: 'Purchased new furniture from IKEA, Home Centre, or Pan Emirates? Need to move single heavy items like sofas, dining tables, or wardrobes across town? Best Route Relocation Services offers specialized furniture moving with professional carpentry services included.',
    iconName: 'Armchair',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'In-house expert carpenters skilled in IKEA and luxury brands',
      'Heavy-duty padded moving blankets to prevent scratches',
      'Strapped and anchored transport inside enclosed box trucks',
      'Curtain, TV, and shelf wall-mounting services available',
      'Affordable per-item or small-load rates'
    ],
    processSteps: [
      'Inspection and hardware labeling during disassembly',
      'Multi-layer stretch film and corner guard protection',
      'Safe loading with hydraulic tail-lift equipment',
      'Secure transport across all UAE Emirates',
      'Precision reassembly and placement at final destination'
    ],
    suitableFor: ['Single Heavy Furniture Items', 'IKEA Furniture Assembly', 'Beds, Wardrobes & Dining Sets']
  },
  {
    id: 'packing-unpacking',
    title: 'Packing & Unpacking',
    shortDesc: 'Full-service professional packing with export-grade materials, dish-pack boxes, and wardrobe cartons.',
    fullDesc: 'Packing is often the most time-consuming part of moving. Our professional packing technicians use industry-leading packing materials—including double-walled corrugated boxes, bubble wrap, stretch film, tissue paper, and specialized wardrobe boxes—to ensure every item remains pristine.',
    iconName: 'PackageCheck',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Five-layer protective packing for fragile glassware and china',
      'Wardrobe boxes to transport clothes on hangers without wrinkles',
      'Complete unpacking and wardrobe arrangement service',
      'Eco-friendly recyclable packing materials',
      'Labeling each box by room and contents'
    ],
    processSteps: [
      'Sorting and inventory categorization',
      'Wrapping individual items with protective layers',
      'Packing into heavy-duty reinforced boxes',
      'Detailed labeling and fragile item tagging',
      'Unpacking at new site and box disposal'
    ],
    suitableFor: ['Full Property Packing', 'Fragile Item Special Packing', 'Express Same-Day Packing']
  },
  {
    id: 'loading-unloading',
    title: 'Loading & Unloading',
    shortDesc: 'Trained heavy-lifting manpower equipped with trolleys, ramps, and hydraulic tail-lifts for safe transport.',
    fullDesc: 'Avoid physical injury and property damage by letting our trained heavy-lifting specialists handle the strenuous loading and unloading work. Our crew uses ergonomic lifting straps, stair trolleys, and padded ramps to move heavy loads safely through tight stairwells and doorways.',
    iconName: 'Truck',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Trained physical crews with ergonomic lifting gear',
      'Tail-lift equipped modern enclosed vehicles',
      'Wall edge and door frame protection applied before loading',
      'Strategic weight distribution inside vehicles to prevent shifting',
      'Careful unloading directly into designated rooms'
    ],
    processSteps: [
      'Path clearance and door frame padding',
      'Rigging and securing heavy items with lifting straps',
      'Systematic stacking inside covered box truck',
      'Transit locking with ratcheted cargo belts',
      'Controlled unloading at target location'
    ],
    suitableFor: ['Heavy Equipment Handling', 'DIY Movers Needing Manpower', 'Container Loading/Unloading']
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    shortDesc: 'Climate-controlled, 24/7 monitored secure short-term and long-term storage facilities in Dubai & UAE.',
    fullDesc: 'In between lease dates or downsizing your property? Best Route Relocation Services provides clean, climate-controlled, pest-managed, and 24/7 CCTV-monitored storage units in Dubai and Abu Dhabi for both short-term and long-term storage needs.',
    iconName: 'Warehouse',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      '24/7 climate control to safeguard wood and leather against UAE heat',
      '24/7 CCTV surveillance and security guards',
      'Flexible weekly, monthly, or annual storage contracts',
      'Individual palletized and locked storage vaults',
      'Full pick-up from your doorstep and delivery upon request'
    ],
    processSteps: [
      'Doorstep pick-up and itemized inventory log',
      'Protective wrapping for long-term storage',
      'Storage inside secure climate-controlled facility',
      'Regular facility maintenance and pest control',
      'On-demand redelivery to your new location'
    ],
    suitableFor: ['Short-Term Transit Storage', 'Long-Term Household Storage', 'Business Document & Stock Storage']
  },
  {
    id: 'international-relocation',
    title: 'International Relocation',
    shortDesc: 'Worldwide door-to-door relocation with customs clearance, air/sea freight, and international documentation support.',
    fullDesc: 'Moving outside the UAE? We offer complete international relocation services from the UAE to destinations across GCC, Europe, Asia, Americas, and worldwide. Our team coordinates export packing, customs documentation, sea/air shipping, and destination delivery.',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'International export packing standards with heavy-duty crates',
      'Customs clearance handling at origin and destination ports',
      'Sea freight (FCL & LCL) and priority air freight options',
      'Comprehensive transit insurance coverage',
      'Global destination partner network for seamless unloading'
    ],
    processSteps: [
      'Volume measurement and freight mode selection',
      'Export wrapping, crating, and itemized packing list',
      'UAE customs export documentation',
      'Port dispatch via sea or air cargo',
      'Destination customs clearance and doorstep delivery'
    ],
    suitableFor: ['Expat Moves out of UAE', 'GCC Land Freight Moving', 'Worldwide Cargo & Household Shipping']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Al Mansoori',
    location: 'Dubai Marina, Dubai',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The Best Route team arrived exactly at 8:00 AM as promised. They moved my 3-bedroom apartment from Dubai Marina to Downtown in under 6 hours. Not a single scratch on any furniture or walls. Outstanding professionalism!',
    serviceUsed: 'Apartment Moving',
    verified: true
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    location: 'Arabian Ranches, Dubai',
    rating: 5,
    date: '1 month ago',
    comment: 'Extremely impressed with their villa moving service. They disassembled two massive IKEA wardrobes and reassembled them perfectly in our new Arabian Ranches villa. The carpenters were polite, quick, and left everything spotless.',
    serviceUsed: 'Villa Relocation',
    verified: true
  },
  {
    id: 't3',
    name: 'Tariq Hassan',
    location: 'Al Reem Island, Abu Dhabi',
    rating: 5,
    date: '3 weeks ago',
    comment: 'We hired Best Route for our office relocation from Business Bay to Abu Dhabi. They worked overnight on Friday so our employees could resume work on Monday morning without missing a beat. Highly recommended for commercial moves!',
    serviceUsed: 'Office Relocation',
    verified: true
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    location: 'Jumeirah Beach Residence (JBR)',
    rating: 5,
    date: '1 month ago',
    comment: 'Moving with a baby and pets was nerve-wracking, but Best Route made it completely stress-free. Their full packing service saved us days of effort. Every glass dish was double wrapped in bubble wrap.',
    serviceUsed: 'Packing & Unpacking',
    verified: true
  },
  {
    id: 't5',
    name: 'Mohammad K. Al Sayed',
    location: 'Al Majaz, Sharjah',
    rating: 5,
    date: '2 months ago',
    comment: 'Clear pricing from the start with no hidden fees! The driver was punctual, trucks were clean and fully enclosed, and WhatsApp customer support responded immediately whenever I asked for updates.',
    serviceUsed: 'Home Relocation',
    verified: true
  },
  {
    id: 't6',
    name: 'David & Lisa Miller',
    location: 'Palm Jumeirah, Dubai',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Top-tier luxury moving service! They moved our marble dining table and heavy outdoor teak furniture with ease using specialized lifting gear. Best Route lives up to its name!',
    serviceUsed: 'Villa Relocation',
    verified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much do moving services cost in Dubai and across the UAE?',
    answer: 'Moving costs depend on property size (Studio, 1 BHK, 2 BHK, Villa, Office), distance between location points, quantity of items, and required add-on services like packing or storage. Studio/1 BHK moves typically start around AED 500-900, 2-3 BHK apartments AED 1,000-1,800, and large villas AED 2,200+. Contact us on WhatsApp or call +971 58 140 1608 for a fast, transparent, zero-commitment quote.',
    category: 'pricing'
  },
  {
    id: 'faq-2',
    question: 'Do you provide professional packing materials like bubble wrap and boxes?',
    answer: 'Yes! Our full moving service includes high-quality export-grade packing materials: double-walled cardboard boxes, thick bubble wrap, heavy-duty stretch film, corrugated rolls, tissue paper for delicate items, and specialized wardrobe boxes for clothes.',
    category: 'packing'
  },
  {
    id: 'faq-3',
    question: 'Are my goods insured during transit across the UAE?',
    answer: 'Yes, Best Route Relocation Services takes extreme care with every move. We maintain comprehensive goods-in-transit liability coverage. For high-value items, luxury artwork, or international shipping, we also offer premium comprehensive insurance packages.',
    category: 'insurance'
  },
  {
    id: 'faq-4',
    question: 'Can you handle office relocations after working hours or on weekends?',
    answer: 'Absolutely. We specialize in weekend and overnight office moves across Dubai, Abu Dhabi, and Sharjah to ensure your business operations suffer zero downtime. Our team handles IT equipment, server racks, desks, and filing cabinets efficiently.',
    category: 'office'
  },
  {
    id: 'faq-5',
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking 2 to 5 days in advance to secure your preferred time slot and complete building move-in/move-out permit procedures. However, we also accommodate same-day urgent moves based on fleet availability.',
    category: 'booking'
  },
  {
    id: 'faq-6',
    question: 'Do you disassemble and reassemble furniture like beds and wardrobes?',
    answer: 'Yes! Every moving crew includes experienced carpenters equipped with professional tools. We disassemble large wardrobes, beds, dining sets, and wall units at your old property and reassemble them securely at your new location.',
    category: 'furniture'
  },
  {
    id: 'faq-7',
    question: 'Do I need building move permits in Dubai or Abu Dhabi?',
    answer: 'Yes, major developer communities (Emaar, Nakheel, DAMAC, Dubai Properties, Aldar) require Move-In/Move-Out NOC permits. We assist you by providing our company trade license, driver details, and truck registrations required for your building permit application.',
    category: 'moving-day'
  },
  {
    id: 'faq-8',
    question: 'What items are not allowed to be transported in moving trucks?',
    answer: 'For safety and legal reasons, we cannot transport hazardous chemicals, flammable liquids, compressed gas cylinders, illegal items, pets, or large amounts of cash and original personal passports. Please carry personal documents and jewelry with you.',
    category: 'moving-day'
  },
  {
    id: 'faq-9',
    question: 'Do you offer climate-controlled storage in Dubai?',
    answer: 'Yes! We offer 24/7 temperature-controlled, secure, monitored storage facilities in Dubai for short-term transit or long-term storage. Our facilities protect delicate wooden furniture, leather, and electronics from UAE humidity.',
    category: 'storage'
  },
  {
    id: 'faq-10',
    question: 'How do international relocation services work?',
    answer: 'Our international relocation service includes custom export packing, detailed inventory documentation, UAE export customs clearance, sea/air cargo freight, and complete door-to-door delivery with destination customs clearance.',
    category: 'international'
  }
];

export const EMIRATES_COVERAGE: EmirateInfo[] = [
  {
    name: 'Dubai',
    tagline: 'Full coverage across Dubai Marina, Downtown, Palm Jumeirah, Business Bay, JLT, Arabian Ranches, JVC, Mirdif & Silicon Oasis.',
    popularAreas: ['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay', 'Jumeirah Village Circle (JVC)', 'Arabian Ranches', 'Dubai Hills Estate', 'DIFC'],
    activeFleetCount: 18
  },
  {
    name: 'Abu Dhabi',
    tagline: 'Expert moving across Al Reem Island, Yas Island, Saadiyat, Al Raha, Khalifa City & Corniche.',
    popularAreas: ['Al Reem Island', 'Yas Island', 'Saadiyat Island', 'Al Raha Beach', 'Khalifa City', 'Corniche Area', 'Mohammed Bin Zayed City'],
    activeFleetCount: 12
  },
  {
    name: 'Sharjah',
    tagline: 'Fast relocation in Al Majaz, Al Nahda, Muwaileh, Al Taawun & University City.',
    popularAreas: ['Al Majaz', 'Al Nahda', 'Al Taawun', 'Muwaileh', 'Al Qasimia', 'Al Zahia'],
    activeFleetCount: 10
  },
  {
    name: 'Ajman',
    tagline: 'Affordable home and office moving in Ajman Downtown, Al Nuaimia, Al Rashidiya & Corniche.',
    popularAreas: ['Ajman Downtown', 'Al Nuaimia', 'Al Rashidiya', 'Al Jasmine', 'Ajman Corniche'],
    activeFleetCount: 6
  },
  {
    name: 'Ras Al Khaimah',
    tagline: 'Reliable moving in Al Hamra Village, Mina Al Arab, Khuzam & RAK City.',
    popularAreas: ['Al Hamra Village', 'Mina Al Arab', 'Khuzam', 'Al Nakheel'],
    activeFleetCount: 5
  },
  {
    name: 'Fujairah',
    tagline: 'Inter-emirate moving connecting Fujairah with Dubai, Abu Dhabi, and all northern Emirates.',
    popularAreas: ['Fujairah City', 'Dibba Al Fujairah', 'Al Aqah'],
    activeFleetCount: 4
  },
  {
    name: 'Umm Al Quwain',
    tagline: 'Prompt residential and commercial relocation solutions throughout UAQ.',
    popularAreas: ['Al Salama', 'Al Humrah', 'Marina UAQ'],
    activeFleetCount: 4
  }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    id: 'team',
    title: 'Professional Team',
    desc: 'Uniformed, background-checked movers, trained packing specialists, and certified carpenters with years of UAE experience.',
    iconName: 'Users'
  },
  {
    id: 'prices',
    title: 'Affordable Prices',
    desc: 'Clear, transparent pricing with no hidden charges. Free upfront itemized surveys and zero surprise fees on moving day.',
    iconName: 'Tag'
  },
  {
    id: 'packing',
    title: 'Safe Packing',
    desc: 'Export-grade bubble wrap, double-walled corrugated boxes, corner edge guards, and custom crates for fragile items.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'equipment',
    title: 'Modern Equipment',
    desc: 'Fully padded enclosed trucks, hydraulic tail-lifts, heavy-duty furniture dollies, stair trolleys, and lifting straps.',
    iconName: 'Truck'
  },
  {
    id: 'delivery',
    title: 'Fast & Timely Delivery',
    desc: 'Strict punctuality guarantee. Punctual arrival times, rapid execution, and real-time route optimization across UAE.',
    iconName: 'Clock'
  },
  {
    id: 'satisfaction',
    title: '100% Customer Satisfaction',
    desc: 'Dedicated move supervisor on-site for every job, responsive 24/7 WhatsApp support, and post-move satisfaction follow-up.',
    iconName: 'Smile'
  }
];

export const MOVING_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Request a Quote',
    desc: 'Fill our quick quote form or call/WhatsApp us at +971 58 140 1608. We assess your items and provide a clear, instant estimate.',
    detail: 'No obligation survey available via photo/video sharing or in-person visit.'
  },
  {
    number: '02',
    title: 'Schedule Your Move',
    desc: 'Choose your preferred date and time slot. We coordinate building access permits and send a booking confirmation.',
    detail: 'Flexible scheduling including morning, evening, or weekend slots.'
  },
  {
    number: '03',
    title: 'Packing & Transportation',
    desc: 'Our uniformed crew arrives on time with packing materials, carefully disassembles furniture, wraps items, and loads enclosed trucks.',
    detail: 'Every box is labeled by room for organized unloading.'
  },
  {
    number: '04',
    title: 'Safe Delivery & Setup',
    desc: 'We transport your belongings safely, unload into designated rooms, reassemble furniture, unpack boxes, and remove all trash.',
    detail: 'Final walk-through inspection with you before completion.'
  }
];
