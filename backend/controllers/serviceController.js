const Service = require('../models/Service');
const { getIsConnected } = require('../config/database');

const defaultServices = [
  {
    id: 'home-relocation',
    title: 'House & Villa Relocation',
    slug: 'home-relocation',
    category: 'Residential',
    iconName: 'Home',
    startingPrice: 750,
    shortDesc: 'Complete stress-free villa, townhome, and apartment relocation with export-grade packing materials across Dubai & UAE.',
    fullDesc: 'Moving to a new home should be an exciting benchmark, not a stressful ordeal. Best Route Relocation Services provides full end-to-end residential moving solutions across all seven Emirates. From dismantling custom IKEA wardrobes to double-bubble wrapping delicate crystal chandelier fixtures, our trained crew manages every detail.',
    suitableFor: ['Studio Apartments', '1 to 5 BHK Apartments', 'Luxury Villas', 'Townhouses'],
    benefits: [
      'Export-Grade Packing (Bubble wrap, corrugated boxes, stretch film)',
      'Professional Carpenter for Furniture Dismantling & Assembly',
      'Specialized Appliance Unhooking & Re-installation',
      'Free Carpet & Floor Protective Covers during loading',
      'Zero Hidden Costs Guarantee with upfront fixed quotation'
    ],
    processSteps: [
      'Free On-Site or Video Survey & Instant Quote',
      'Export Packing & Labeling room-by-room',
      'Safe Enclosed Truck Transportation with GPS tracking',
      'Unpacking & Furniture Reassembly in designated rooms'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'office-relocation',
    title: 'Office & Commercial Moving',
    slug: 'office-relocation',
    category: 'Commercial',
    iconName: 'Building2',
    startingPrice: 1500,
    shortDesc: 'Minimized business downtime with scheduled weekend and overnight corporate IT relocation, desk setup, and document archiving.',
    fullDesc: 'We understand that every minute of office downtime directly impacts your business revenue. Best Route offers strategic, rapid, and confidential corporate moving services across Dubai, Abu Dhabi, and Sharjah.',
    suitableFor: ['Corporate Offices', 'Retail Stores', 'Educational Facilities', 'IT & Tech Hubs'],
    benefits: [
      'Weekend & Night Shift Moving options for 0 downtime',
      'Anti-static bubble wrap for IT servers & monitors',
      'Strictly confidential document box tagging & seals',
      'Building Management NOC & Permit coordination (Emaar, Nakheel, DDA)',
      'Office furniture dismantling & desk layout re-installation'
    ],
    processSteps: [
      'Operational Assessment & Site Timeline Mapping',
      'IT Server & Hardware Color-Coded Tagging',
      'Swift After-Hours Loading & Secure Transport',
      'Desk Setup, Cable Management & Final Inspection'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'packing-unpacking',
    title: 'Professional Packing & Unpacking',
    slug: 'packing-unpacking',
    category: 'Packing',
    iconName: 'Package',
    startingPrice: 400,
    shortDesc: 'Premium multi-layer packing using heavy-duty boxes, wardrobe cartons, corner guards, and specialized glass wrapping.',
    fullDesc: 'Proper packing is the single most crucial factor in ensuring a damage-free move. Our certified packing specialists utilize heavy-duty corrugated cartons, specialized wardrobe boxes with hanging bars, tissue paper for silverware, and thick padded blankets for marble tops.',
    suitableFor: ['Fragile Antiques', 'Fine Art & Paintings', 'Wardrobes & Clothes', 'Glassware & Crockery'],
    benefits: [
      'Wardrobe boxes keep clothes wrinkle-free on original hangers',
      'Double-wall reinforced boxes for heavy books & kitchenware',
      'Crater-grade wood crating for expensive TVs and marble tops',
      'Full post-move debris removal and recycling',
      'Numbered itemized inventory checklist provided'
    ],
    processSteps: [
      'Item Categorization & Fragility Tagging',
      'Multi-layer Bubble & Blanket Wrapping',
      'Itemized Box Inventory Documentation',
      'Careful Placement & Unpacking at Destination'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'storage-solutions',
    title: 'Climate-Controlled Storage Units',
    slug: 'storage-solutions',
    category: 'Storage',
    iconName: 'Warehouse',
    startingPrice: 350,
    shortDesc: 'Secure 24/7 monitored, humidity-regulated short & long-term storage solutions in Dubai & Abu Dhabi warehouses.',
    fullDesc: 'Need temporary storage while waiting for your new villa keys or undergoing renovations? Best Route operates modern, clean, climate-controlled warehouse facilities in Al Quoz, Dubai Investment Park, and Mussafah.',
    suitableFor: ['Short-Term Inter-Move Storage', 'Long-Term Overseas Storage', 'Seasonal Furniture & Equipment', 'Document Archiving'],
    benefits: [
      '24/7 CCTV Surveillance & On-Site Security Guards',
      'Strict Temperature & Humidity Control (keeps leather & wood pristine)',
      'Individual Lockable Storage Bays & Wooden Pallet Storage',
      'Flexible Monthly or Annual Lease Terms with no long lock-ins',
      'Pest-controlled dust-free environment'
    ],
    processSteps: [
      'Inventory Volume Assessment & Rate Calculation',
      'Pickup, Wrapping & Palletizing at Your Doorstep',
      'Secure Placement in Dedicated Storage Unit',
      'Scheduled Redelivery Whenever You Are Ready'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'furniture-installation',
    title: 'Furniture Handyman & Carpentry',
    slug: 'furniture-installation',
    category: 'Handyman',
    iconName: 'Wrench',
    startingPrice: 300,
    shortDesc: 'Master carpenters for IKEA, Home Centre, and luxury Italian furniture disassembly, reassembly, TV wall mounting, and curtain hanging.',
    fullDesc: 'Don’t stress over complex furniture assembly instruction manuals or heavy wall drillings. Our team includes experienced carpenters and handymen equipped with modern power tools to safely dismantle, modify, and reassemble any furniture piece.',
    suitableFor: ['IKEA Wardrobes & Beds', 'Modular Kitchen Cabinets', 'Wall-Mounted Flat Screen TVs', 'Curtain Rods & Chandelier Mounting'],
    benefits: [
      'Certified master carpenters experienced with all global brands',
      'Heavy-duty wall anchors for concrete & drywall mounting',
      'Curtain, blind, and art frame mounting service',
      'Scratch-protection floor mats used during assembly',
      'All spare bolts, screws, and parts safely organized'
    ],
    processSteps: [
      'Pre-Move Inspection & Labeling of Hardware Parts',
      'Careful Breakdown without damaging dowels or hinges',
      'Secure Transport in Padded Truck Compartments',
      'Precision Level Alignment & Mounting in New Space'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'intercity-relocation',
    title: 'Inter-Emirate UAE Relocation',
    slug: 'intercity-relocation',
    category: 'Intercity',
    iconName: 'Truck',
    startingPrice: 900,
    shortDesc: 'Express daily moving services connecting Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Al Ain.',
    fullDesc: 'Relocating between Emirates requires route planning, highway permits, and long-haul shockproof truck loading. Whether moving from Dubai to Abu Dhabi or Sharjah to Ras Al Khaimah, our heavy-duty enclosed fleet delivers same-day or next-day relocation.',
    suitableFor: ['Dubai to Abu Dhabi Moves', 'Abu Dhabi to Dubai Moves', 'Northern Emirates Relocation', 'Al Ain & Western Region Moves'],
    benefits: [
      'Heavy-duty enclosed Box Trucks with air-ride suspension',
      'Inter-Emirate toll (Salik/Darb) & highway fuel inclusive',
      'GPS Live Tracking provided to customer phone',
      'Comprehensive Transit Damage Insurance Coverage',
      'Same-day express delivery options available'
    ],
    processSteps: [
      'Early Morning Loading & Weight Distribution Check',
      'Secure Highway Transit with Live GPS Location Link',
      'Direct Arrival & Offloading at Destination Emirate',
      'Immediate Unpacking & Setup completion'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop'
  }
];

exports.getAllServices = async (req, res, next) => {
  try {
    if (getIsConnected()) {
      let services = await Service.find();
      if (services.length === 0) {
        services = await Service.insertMany(defaultServices);
      }
      return res.json({ success: true, count: services.length, data: services });
    }
    return res.json({ success: true, count: defaultServices.length, data: defaultServices });
  } catch (error) {
    next(error);
  }
};

exports.getServiceBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let service = null;

    if (getIsConnected()) {
      service = await Service.findOne({ slug });
    }
    
    if (!service) {
      service = defaultServices.find((s) => s.slug === slug || s.id === slug);
    }

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};
