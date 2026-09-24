export const BUSINESS_INFO = {
  name: "APEX MOTO PRO",
  tagline: "Premier Two-Wheeler Workshop & Performance Hub",
  headline: "Reliable Bike Service, Every Ride.",
  subheadline: "Certified multi-brand workshop offering precision engine servicing, synthetic oil changes, computerized diagnostics, and free doorstep pickup & drop.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "service@apexmotopro.com",
  address: "Plot 42, Speedcraft Auto Zone, Ring Road, Sector 18, Cyber Hub Ind. Area",
  city: "Gurugram, HR - 122002",
  googleMapsUrl: "https://maps.google.com/?q=Sector+18+Cyber+Hub",
  hours: {
    weekdays: "Mon - Sat: 8:00 AM - 8:00 PM",
    sunday: "Sunday: 9:00 AM - 4:00 PM",
    emergency: "24/7 Roadside Assistance Available"
  },
  stats: [
    { label: "Bikes Serviced", value: "25,000+" },
    { label: "Customer Rating", value: "4.9 ★" },
    { label: "Certified Techs", value: "15+ Techs" },
    { label: "Pickup & Drop", value: "100% Free" }
  ],
  socials: {
    instagram: "https://instagram.com/apexmotopro_official",
    facebook: "https://facebook.com/apexmotopro",
    youtube: "https://youtube.com/@apexmotopro",
    whatsapp: "https://wa.me/919876543210?text=Hi%20Apex%20Moto%20Pro,%20I%20want%20to%20book%20a%20bike%20service.",
    twitter: "https://twitter.com/apexmotopro",
    linkedin: "https://linkedin.com/company/apexmotopro"
  }
};

export const SERVICES = [
  {
    id: "general-service",
    title: "General Service",
    category: "Routine",
    price: "₹499",
    originalPrice: "₹799",
    time: "90 mins",
    icon: "Wrench",
    description: "Complete 32-point inspection including engine oil check, air filter clean, spark plug check, brake adjustment, chain lube, and foam wash.",
    inclusions: [
      "Engine oil level check & top-up",
      "Air filter cleaning / inspect",
      "Spark plug cleaning & gap adjust",
      "Brake lever & cable play setting",
      "Chain slack adjustment & lubrication",
      "Complimentary high-pressure foam wash"
    ]
  },
  {
    id: "engine-service",
    title: "Engine Service & Tuning",
    category: "Engine & Brakes",
    price: "₹1,499",
    originalPrice: "₹1,999",
    time: "3-4 hours",
    icon: "Cpu",
    description: "Deep engine overhaul, valve clearance tuning, carburetor/EFI cleaning, carbon de-scaling, and performance diagnostic check.",
    inclusions: [
      "Carburetor ultrasonic cleaning / EFI scan",
      "Tappet & valve clearance setting",
      "Combustion chamber carbon cleaning",
      "Engine compression ratio test",
      "Clutch plate friction test & adjustment"
    ]
  },
  {
    id: "oil-change",
    title: "Oil Change & Filter",
    category: "Routine",
    price: "₹299",
    originalPrice: "₹399",
    time: "30 mins",
    icon: "Droplets",
    description: "Flush old engine oil, refill with Motul / Shell 100% synthetic or semi-synthetic grade oil, and replace OEM oil filter.",
    inclusions: [
      "Drain old degraded engine oil",
      "Engine oil flush treatment",
      "Premium Synthetic 10W40 / 20W50 refill",
      "New OEM oil filter replacement",
      "Waste oil disposal compliant"
    ]
  },
  {
    id: "brake-service",
    title: "Brake Service & Overhaul",
    category: "Engine & Brakes",
    price: "₹349",
    originalPrice: "₹499",
    time: "45 mins",
    icon: "ShieldAlert",
    description: "Complete inspection of disc brake pads, drum shoes, hydraulic fluid flush, caliper pin greasing, and rotor disc inspection.",
    inclusions: [
      "Disc brake pad / drum shoe check",
      "DOT 4 brake fluid bleeding & top-up",
      "Caliper slider pin lubrication",
      "Brake disc rotor de-glazing & cleaning",
      "ABS sensor diagnostic test"
    ]
  },
  {
    id: "tyre-replacement",
    title: "Tyre Replacement & Balance",
    category: "Routine",
    price: "₹199",
    originalPrice: "₹299",
    time: "45 mins",
    icon: "Disc",
    description: "Authorized fitment center for Michelin, MRF, CEAT, Pirelli & TVS Eurogrip tyres with computerized wheel balancing and valve replacement.",
    inclusions: [
      "Tyre tread depth & wear analysis",
      "Precision tyre mounting & demounting",
      "High-pressure tubeless valve change",
      "Dynamic wheel balancing check",
      "Nitrogen air inflation included"
    ]
  },
  {
    id: "battery-service",
    title: "Battery Health Check & Replace",
    category: "Routine",
    price: "₹149",
    originalPrice: "₹250",
    time: "20 mins",
    icon: "Zap",
    description: "Digital terminal voltage load test, terminal de-corrosion, charging circuit test, and replacement with Exide / Amaron batteries.",
    inclusions: [
      "Digital battery cranking amp test",
      "Stator coil voltage output check",
      "Terminal gel coating & cleaning",
      "Old battery recycling trade-in credit",
      "Up to 48 months manufacturer warranty"
    ]
  },
  {
    id: "chain-sprocket",
    title: "Chain Clean, Lube & Sprocket",
    category: "Routine",
    price: "₹249",
    originalPrice: "₹399",
    time: "30 mins",
    icon: "Repeat",
    description: "Deep degreasing with Motul chain cleaner, high-viscosity synthetic chain lube application, and drive sprocket wear alignment.",
    inclusions: [
      "Motul chain cleaner deep degrease",
      "High-viscosity chain lube spray",
      "Rear wheel alignment adjustment",
      "Sprocket teeth wear inspection",
      "Chain tension torque setting"
    ]
  },
  {
    id: "electrical-repair",
    title: "Electrical & Wiring Repair",
    category: "Engine & Brakes",
    price: "₹399",
    originalPrice: "₹599",
    time: "60 mins",
    icon: "Activity",
    description: "Full wire harness continuity test, fuse box overhaul, headlight LED upgrades, horn repair, and digital console troubleshooting.",
    inclusions: [
      "Wire harness short circuit scan",
      "Ignition switch & lock inspection",
      "Headlight bulb & relay upgrade",
      "Indicator & brake light wiring fix",
      "Digital speedometer sensor check"
    ]
  },
  {
    id: "washing-cleaning",
    title: "Washing, Cleaning & Polish",
    category: "Washing & Paint",
    price: "₹299",
    originalPrice: "₹499",
    time: "45 mins",
    icon: "Sparkles",
    description: "3-stage treatment: Underbody pressure jet wash, snow foam shampoo, chain wash, and 3M hydrophobic body wax polish.",
    inclusions: [
      "High-pressure underbody dirt flush",
      "pH-neutral snow foam shampoo",
      "Engine bay degreasing spray",
      "Microfiber streak-free drying",
      "3M liquid hydrophobic wax polish"
    ]
  },
  {
    id: "puncture-repair",
    title: "Tubeless Puncture Repair",
    category: "Routine",
    price: "₹99",
    originalPrice: "₹150",
    time: "15 mins",
    icon: "Crosshair",
    description: "Quick puncture repair with high-durability vulcanized rubber strips or internal mushroom patch repair for high-speed tyres.",
    inclusions: [
      "Leak detection & nail removal",
      "Sticky vulcanized strip insertion",
      "Optional internal mushroom patch",
      "Tyre pressure check & nitrogen fill"
    ]
  },
  {
    id: "accident-repair",
    title: "Accident Repair & Restoration",
    category: "Washing & Paint",
    price: "Custom",
    originalPrice: "On Quote",
    time: "1-3 days",
    icon: "Hammer",
    description: "Chassis frame alignment, handlebar straightening, body panel replacement, custom paint booth repainting, and insurance claim support.",
    inclusions: [
      "Laser chassis alignment check",
      "OEM body panel replacement",
      "Cashless insurance claims assistance",
      "Computerized paint matching booth",
      "Complete safety road testing"
    ]
  },
  {
    id: "periodic-maintenance",
    title: "Periodic Scheduled Maintenance",
    category: "Routine",
    price: "₹899",
    originalPrice: "₹1,299",
    time: "2 hours",
    icon: "Calendar",
    description: "Recommended every 3,000 km or 3 months. Thorough check of all vital safety components, fluid top-ups, filter swaps, and test ride.",
    inclusions: [
      "50-point complete bike health scan",
      "Engine oil change (Synthetic blend)",
      "Spark plug & air filter clean",
      "Clutch cable & brake adjustment",
      "Battery & electrical charging test",
      "Free doorstep pickup & drop"
    ]
  },
  {
    id: "pickup-drop",
    title: "Pickup & Drop Service",
    category: "Routine",
    price: "FREE",
    originalPrice: "₹199",
    time: "Scheduled",
    icon: "Truck",
    description: "Hassle-free doorstep pickup of your two-wheeler from your home or workplace by our insured driver, with real-time GPS tracking.",
    inclusions: [
      "Contactless doorstep pickup",
      "Pre-pickup video condition recording",
      "Insured transit to workshop",
      "Live status WhatsApp updates",
      "Safe return drop to your location"
    ]
  }
];

export const VEHICLES = [
  { name: "Honda", logoText: "HONDA", badge: "Popular", models: "Activa 6G, Shine 125, CB350, Hornet 2.0, Dio" },
  { name: "Yamaha", logoText: "YAMAHA", badge: "Performance", models: "R15 V4, MT-15, FZ-S, RayZR 125, Aerox 155" },
  { name: "TVS", logoText: "TVS", badge: "Top Rated", models: "Apache RTR 160/200, Jupiter 125, Ntorq, Ronin, XL100" },
  { name: "Royal Enfield", logoText: "ROYAL ENFIELD", badge: "Cruiser", models: "Classic 350, Hunter 350, Meteor, Himalayan 450, Continental GT" },
  { name: "Bajaj", logoText: "BAJAJ", badge: "Popular", models: "Pulsar NS200/N250, Dominar 400, Platina, Chetak EV" },
  { name: "Suzuki", logoText: "SUZUKI", badge: "Smooth", models: "Access 125, Burgman Street, Gixxer SF 250, V-Strom" },
  { name: "Hero", logoText: "HERO", badge: "Best Mileage", models: "Splendor Plus, HF Deluxe, Xpulse 200 4V, Maverick 440, Pleasure+" },
  { name: "KTM", logoText: "KTM", badge: "Racing", models: "Duke 200/390, RC 390, Adventure 390" },
  { name: "Vespa", logoText: "VESPA", badge: "Premium", models: "Vespa SXL 125, VXI 150, Elegante, ZX 125" },
  { name: "Other Brands", logoText: "SUPERBIKES & EVs", badge: "All Types", models: "Kawasaki, BMW Motorrad, Ather, Ola Electric, Revolt" }
];

export const SERVICE_PACKAGES = [
  {
    id: "express-care",
    title: "Basic Express Care",
    target: "Scooters & Commuters",
    price: 499,
    originalPrice: 799,
    popular: false,
    badge: "Quick Care",
    inclusions: [
      "Engine oil top-up check",
      "Air filter & spark plug cleaning",
      "Brake lever adjustment & lube",
      "Chain slack adjustment & oiling",
      "High-pressure foam wash",
      "25-point safety inspection"
    ]
  },
  {
    id: "standard-pro",
    title: "Standard Pro Maintenance",
    target: "Bikes & Performance Two-Wheelers",
    price: 899,
    originalPrice: 1399,
    popular: true,
    badge: "Most Popular",
    inclusions: [
      "Full engine oil change (Synthetic Blend)",
      "New OEM oil filter replacement",
      "Motul deep chain degrease & lube",
      "Carburetor / throttle body flush",
      "Battery voltage & charging test",
      "Brake pad inspection & cleaning",
      "Doorstep Pickup & Drop included",
      "Complimentary Teflon polish"
    ]
  },
  {
    id: "master-tuneup",
    title: "Master Performance Tune",
    target: "Cruisers & Sports Bikes (150cc+)",
    price: 1499,
    originalPrice: 2299,
    popular: false,
    badge: "Full Overhaul",
    inclusions: [
      "100% Full Synthetic Motul 300V / Shell Oil",
      "OEM oil filter + Air filter replacement",
      "Valve clearance & tappet tuning",
      "Full brake fluid flush (DOT 4)",
      "Wheel alignment & spoke tension test",
      "Ultrasonic fuel injector clean",
      "Engine carbon de-scaling",
      "Free Doorstep Pickup & Drop",
      "3M Ceramic wash & body wax"
    ]
  }
];

export const SPECIAL_OFFERS = [
  {
    id: "monsoon-25",
    title: "Monsoon Bike Shield Package",
    discount: "25% OFF",
    code: "MONSOON25",
    description: "Get comprehensive anti-rust underbody coating, electrical waterproofing, and brake overhaul at 25% discount.",
    validity: "Limited Time Offer"
  },
  {
    id: "free-wash",
    title: "Free Foam Wash + Teflon Wax",
    discount: "FREE VOUCHER",
    code: "FREEWASH",
    description: "Book any Full Engine Service or Scheduled Maintenance package and get a free ₹499 3M Foam Wash & Wax.",
    validity: "Valid on online bookings"
  },
  {
    id: "first-booking",
    title: "First-Time Customer Discount",
    discount: "FLAT ₹200 OFF",
    code: "APEXFIRST",
    description: "New to Apex Moto Pro? Enjoy ₹200 flat discount on your first bike service with zero minimum booking amount.",
    validity: "For new users"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram Sharma",
    bike: "Royal Enfield Classic 350",
    rating: 5,
    date: "2 days ago",
    comment: "Apex Moto Pro completely fixed the engine vibration and hard gear shift issue on my Classic 350. The doorstep pickup was seamless and the mechanic sent video updates on WhatsApp!",
    verified: true
  },
  {
    id: 2,
    name: "Priya Nair",
    bike: "TVS Ntorq 125",
    rating: 5,
    date: "1 week ago",
    comment: "Extremely clean workshop and genuine pricing! They replaced my battery and cleaned the brake drums in just 45 minutes. Super transparent service compared to local local garages.",
    verified: true
  },
  {
    id: 3,
    name: "Rahul Verma",
    bike: "Yamaha R15 V4",
    rating: 5,
    date: "2 weeks ago",
    comment: "Took my R15 V4 for chain sprocket replacement and Motul synthetic oil change. Acceleration feels smooth like brand new! Highly recommend their Master Performance Tuneup.",
    verified: true
  },
  {
    id: 4,
    name: "Amit Patel",
    bike: "Honda Activa 6G",
    rating: 5,
    date: "3 weeks ago",
    comment: "The pickup and drop service is a lifesaver. Dropped my Activa in the morning before work and received it sparkling clean by 4 PM. Very courteous staff.",
    verified: true
  }
];

export const FAQS = [
  {
    question: "How long does a standard bike service take?",
    answer: "A General Service typically takes 90 to 120 minutes. If you choose our Doorstep Pickup & Drop, we return your bike on the same day within 4-6 hours.",
    category: "Service"
  },
  {
    question: "Is Doorstep Pickup & Drop really free?",
    answer: "Yes! Pickup & Drop is 100% free within a 10 km radius of our Cyber Hub workshop for any service order above ₹499.",
    category: "Pickup & Drop"
  },
  {
    question: "Do you use original OEM spare parts and genuine oil?",
    answer: "Absolutely. We only use 100% genuine manufacturer OEM spare parts (Honda, RE, Yamaha, TVS, etc.) and certified oil brands like Motul, Shell, and Castrol.",
    category: "Quality & Warranty"
  },
  {
    question: "What kind of service warranty do you offer?",
    answer: "We offer a 30-day or 1,000 km warranty on all general service labor and up to 6 months warranty on spare parts.",
    category: "Quality & Warranty"
  },
  {
    question: "How can I pay for my service?",
    answer: "We accept Cash, UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and Netbanking upon vehicle delivery.",
    category: "Pricing & Payment"
  },
  {
    question: "What should I do if my bike breaks down on the road?",
    answer: "Call our 24/7 Roadside Emergency Hotline at +91 98765 43210. Our mobile towing team will reach your location within 30-45 minutes.",
    category: "Emergency"
  }
];
