export const serviceCategories = [
  { id: 'all', label: 'All Services (11)' },
  { id: 'safety-nets', label: 'Balcony & Child Safety' },
  { id: 'bird-control', label: 'Pigeon Nets & Bird Spikes' },
  { id: 'invisible-grills', label: 'SS 316 Invisible Grills' },
  { id: 'sports-nets', label: 'Cricket & Sports Turf Nets' },
  { id: 'specialized-nets', label: 'Swimming Pool & Construction' }
];

export const servicesData = [
  // 1. Balcony Safety Nets
  {
    id: "balcony-safety-net",
    category: "safety-nets",
    internalTitle: "RESIDENTIAL BALCONY SAFETY NETS",
    title: "Balcony Safety Netting Solutions",
    shortTitle: "Balcony Safety Nets",
    eyebrow: "HIGH-RISE APARTMENT FALL PROTECTION",
    tagline: "Certified 180kg+ Multi-Point Breaking Load. 100% Sunlight & Ventilation.",
    description: "Heavy-duty fall prevention netting tailored specifically for high-rise apartment balconies, penthouses, and open railings across Hyderabad.",
    fullDescription: "High-density UV-treated monofilament copolymer balcony safety netting engineered to provide absolute fall protection for families living in 5th to 50th-floor gated communities in Hyderabad. Seamlessly anchored using marine SS 316 hooks and boundary steel wire ropes.",
    turnaround: "2 – 3 Hours",
    priceRange: "₹18 – ₹26 / sq.ft",
    basePrice: 20,
    unit: "sq.ft",
    badge: "5-Year Stamped Doorstep Guarantee",
    rating: 4.99,
    reviewsCount: 3920,
    idealFor: "High-Rise Balconies, Penthouses, Open Railings, French Windows, Master Balconies",
    heroImage: "/images/hero-balcony.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/hero-balcony.webp",
    technicalSpecs: [
      { label: "Material Grade", value: "Virgin High-Density Copolymer (Garware Quality)" },
      { label: "Mesh Aperture", value: "25mm / 30mm Diamond Grid" },
      { label: "Tensile Strength", value: "180kg+ certified multi-point breaking load" },
      { label: "Weather Endurance", value: "-40°C to +85°C UV-Stabilized Deccan Heat Proof" },
      { label: "Anchoring Hardware", value: "SS 304 / 316 Marine Hook Bolts at 12-inch spacing" },
      { label: "Optical Transparency", value: "98% Natural Daylight & Cross-Ventilation" }
    ],
    coreFeatures: [
      "Nearly invisible from 10ft — preserves architectural facade aesthetics completely.",
      "Certified 180kg+ breaking load prevents accidental trips or falls.",
      "Non-conductive, humane, and weather-proof copolymer twine.",
      "Installed by certified high-altitude rope-access rigging specialists.",
      "Includes 5-Year Stamped Physical Warranty Certificate."
    ],
    workflow: [
      { step: 1, title: "Laser Balcony Measurement", desc: "Digital millimeter perimeter calibration along balcony parapets, glass railings, and ceiling mullions." },
      { step: 2, title: "SS 316 Expansion Anchoring", desc: "Marine-grade stainless steel anchors impact-drilled into concrete every 12 inches." },
      { step: 3, title: "High-Tension Wire Threading", desc: "Marine-grade perimeter guide wire tensioned with zero-sag turnbuckles." },
      { step: 4, title: "Net Mesh Weaving & Locking", desc: "Tight diamond-stitch locking ensuring zero gaps along perimeter edges." },
      { step: 5, title: "Handover & 5-Year Warranty", desc: "Physical weight test conducted and 5-year replacement certificate handover." }
    ],
    packages: [
      {
        name: "Standard Balcony Guard",
        mesh: "50mm Mesh",
        life: "3-Year Life",
        price: 18,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Virgin Nylon Twine Mesh", "GI Anchor Fasteners", "Basic Cable Tensioning", "3-Year Warranty"]
      },
      {
        name: "Premium Ultra-Clear Balcony",
        mesh: "30mm Mesh",
        life: "8+ Year Life",
        price: 22,
        unit: "/ sq.ft",
        recommended: true,
        features: ["UV-Treated Copolymer Monofilament", "SS 304 Anchor Hooks & Eyelets", "Zero-Sag Turnbuckles", "5-Year Stamped Guarantee", "Free Balcony Sanitization"]
      },
      {
        name: "Marine Pro Balcony Armor",
        mesh: "25mm Micro-Mesh",
        life: "10+ Year Life",
        price: 26,
        unit: "/ sq.ft",
        recommended: false,
        features: ["SS 316 Marine Grade Perimeter", "Micro-mesh for small birds & items", "Dual Wire Calibration", "7-Year Extended Warranty", "Extreme Cyclone Safe"]
      }
    ]
  },

  // 2. Pigeon Safety Nets
  {
    id: "balcony-pigeon-net",
    category: "bird-control",
    internalTitle: "BALCONY PIGEON SAFETY NETS",
    title: "Balcony Pigeon & Bird Safety Netting",
    shortTitle: "Pigeon Safety Nets",
    eyebrow: "HYDERABAD BALCONY BIRD QUARANTINE",
    tagline: "100% Invisible from 10ft. Zero Droppings. 5-Year Stamped Doorstep Warranty.",
    description: "Keep your apartment balcony pristine, clean, and pest-free with high-density UV-stabilized copolymer monofilament netting. 100% natural daylight & cross-ventilation.",
    fullDescription: "Engineered from virgin high-density UV-treated monofilament copolymer, our transparent balcony pigeon nets provide an impenetrable barrier against pigeons and birds without blocking your panoramic Hyderabad skyline view or daylight. Anchored with marine-grade SS 316 eyelet hooks and high-tension wire ropes.",
    turnaround: "2 – 3 Hours",
    priceRange: "₹18 – ₹26 / sq.ft",
    basePrice: 22,
    unit: "sq.ft",
    badge: "5-Year Stamped Replacement Warranty",
    rating: 4.98,
    reviewsCount: 3850,
    idealFor: "High-Rise Apartment Balconies, Penthouses, French Windows, Master Balconies",
    heroImage: "/images/balcony-pigeon-net.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/balcony-after-clean.webp",
    technicalSpecs: [
      { label: "Material Grade", value: "Virgin High-Density Copolymer (UV-Proof Monomer)" },
      { label: "Mesh Aperture", value: "25mm / 30mm / 50mm Diamond Grid" },
      { label: "Individual Twine Strength", value: "38 kg breaking load per single strand" },
      { label: "Weather Endurance", value: "-40°C to +85°C UV-Stabilized Deccan Heat Proof" },
      { label: "Anchoring System", value: "SS 304 / 316 Marine Hook Bolts Spaced 12-Inch" },
      { label: "Optical Transparency", value: "98% Natural Daylight & Zero Fogging" }
    ],
    coreFeatures: [
      "100% Invisible from 10ft distance — preserves your luxury building facade aesthetics.",
      "Resistant to heavy monsoon storms, high Deccan winds, and harsh Hyderabad summers.",
      "Non-conductive, 100% humane, and bird-friendly protective barrier.",
      "Stainless Steel 316 marine-grade perimeter wire tensioners with turnbuckles.",
      "Zero corrosion and zero maintenance required over 8+ years."
    ],
    workflow: [
      { step: 1, title: "Laser Balcony Measurement", desc: "Digital millimeter perimeter calibration along balcony parapets, glass railings, and ceiling mullions." },
      { step: 2, title: "SS 316 Expansion Anchoring", desc: "Impact-drilled marine stainless steel anchors spaced every 12 inches for maximum tautness." },
      { step: 3, title: "High-Tension Wire Threading", desc: "Marine-grade perimeter guide wire threaded and tensioned with zero-sag turnbuckles." },
      { step: 4, title: "Net Mesh Weaving & Locking", desc: "Tight diamond-stitch locking ensuring zero gaps where pigeons or sparrows could squeeze in." },
      { step: 5, title: "5-Year Stamped Warranty Handover", desc: "Doorstep physical certificate handover with official 5-year replacement warranty." }
    ],
    packages: [
      {
        name: "Standard Balcony Guard",
        mesh: "50mm Mesh",
        life: "3-Year Life",
        price: 18,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Virgin Nylon Twine Mesh", "GI Anchor Fasteners", "Basic Cable Tensioning", "3-Year Service Warranty", "Pigeon & Crow Protection"]
      },
      {
        name: "Premium Ultra-Clear Balcony",
        mesh: "30mm Mesh",
        life: "8+ Year Life",
        price: 22,
        unit: "/ sq.ft",
        recommended: true,
        features: ["UV-Treated Copolymer Monofilament", "SS 304 Anchor Hooks & Eyelets", "Zero-Sag Turnbuckle Rigging", "5-Year Stamped Doorstep Guarantee", "Free Balcony Chemical Sanitization", "98% Optical Transparency"]
      },
      {
        name: "Marine Pro Balcony Armor",
        mesh: "25mm Micro-Mesh",
        life: "10+ Year Life",
        price: 26,
        unit: "/ sq.ft",
        recommended: false,
        features: ["SS 316 Marine Grade Perimeter", "Micro-mesh for sparrows & small birds", "Dual Wire Tension Calibration", "7-Year Extended Warranty", "Free Annual Tension Inspection", "Extreme Weather & Cyclone Safe"]
      }
    ]
  },

  // 3. Anti-Bird Spikes
  {
    id: "bird-spikes",
    category: "bird-control",
    internalTitle: "SS 304 ANTI-BIRD SPIKES",
    title: "SS 304 Marine Anti-Bird Spikes Installation",
    shortTitle: "Anti-Bird Spikes",
    eyebrow: "WINDOW SILL & PARAPET ANTI-PERCH SYSTEM",
    tagline: "100% Rust-Proof SS 304 Pins. Polycarbonate UV Base. Zero Pigeon Roosting.",
    description: "Humane, durable stainless steel bird spikes installed on window sills, parapet ledges, and AC outdoor compressors to permanently stop pigeons from roosting.",
    fullDescription: "Pigeons naturally roost on narrow architectural ledges, window sills, outdoor AC compressors, and boundary parapets. Our SS 304 anti-bird spikes feature laser-sharpened marine-grade wires securely embedded into high-flexibility virgin polycarbonate UV-resistant base strips. 100% humane, zero maintenance, and completely rust-free under harsh Hyderabad weather.",
    turnaround: "1 – 2 Hours",
    priceRange: "₹120 – ₹180 / running ft",
    basePrice: 140,
    unit: "running ft",
    badge: "10-Year Rust-Free Guarantee",
    rating: 4.97,
    reviewsCount: 1620,
    idealFor: "Window Sills, Parapet Walls, AC Outdoor Compressor Ledges, Architectural Beams",
    heroImage: "/images/bird-spikes.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/bird-spikes.webp",
    technicalSpecs: [
      { label: "Spike Wire Material", value: "Grade 304 Marine Stainless Steel" },
      { label: "Base Strip Material", value: "Virgin UV-Stabilized Polycarbonate GE Lexan" },
      { label: "Spike Height & Spread", value: "115mm Height, 140mm Wide-V Pattern" },
      { label: "Spike Density", value: "30 Spikes per Foot (Impenetrable Perch)" },
      { label: "Adhesive Fastening", value: "Industrial Neutral-Cure Silicon Weather Adhesive + Screws" },
      { label: "Durability Rating", value: "10+ Years Zero Rust / Zero Discoloration" }
    ],
    coreFeatures: [
      "Permanently prevents pigeons, doves, and crows from perching on narrow ledges.",
      "100% humane — physical deterrent that causes zero harm to birds.",
      "Polycarbonate base bends flexibly over curved walls and architectural moldings.",
      "Industrial outdoor silicone sealant bonding requires zero wall puncturing where desired.",
      "Backed by MB Natural Safety Nets 10-Year Rust-Free Guarantee."
    ],
    workflow: [
      { step: 1, title: "Ledge Sanitization & Scraping", desc: "Complete removal of pigeon droppings, feathers, and nest debris with enzymatic disinfectant." },
      { step: 2, title: "Surface Degreasing & Prep", desc: "Chemical wiping of window sills and AC ledges for high-strength adhesive bonding." },
      { step: 3, title: "Industrial Adhesive Application", desc: "Applying structural neutral-cure polyurethane adhesive along the polycarbonate base." },
      { step: 4, title: "Interlocking Segment Alignment", desc: "Snapping spike segments edge-to-edge leaving zero gaps for bird landing." },
      { step: 5, title: "Inspection & Handover", desc: "Quality inspection verifying perimeter adhesion and 10-year warranty certificate issuance." }
    ],
    packages: [
      {
        name: "Standard Polycarbonate Spikes",
        mesh: "High-Flex Polymer",
        life: "5-Year Life",
        price: 120,
        unit: "/ running ft",
        recommended: false,
        features: ["All-Polycarbonate Spike & Base", "Weatherproof Adhesive Fix", "Basic Window Sill Protection", "3-Year Warranty"]
      },
      {
        name: "SS 304 Marine Pro Spikes",
        mesh: "SS 304 Wires + Lexan Base",
        life: "10+ Year Life",
        price: 150,
        unit: "/ running ft",
        recommended: true,
        features: ["SS 304 Marine Grade Stainless Steel", "UV-Stabilized Virgin Polycarbonate", "Double Wide-V Angle Coverage", "Industrial Silicone + Screw Anchor", "10-Year Rust-Free Guarantee", "Pre-Sanitization Included"]
      },
      {
        name: "Heavy Commercial Ledge Defense",
        mesh: "SS 316 Extreme Marine",
        life: "15+ Year Life",
        price: 180,
        unit: "/ running ft",
        recommended: false,
        features: ["SS 316 Marine Grade Heavy Wire", "Reinforced Rigid Steel Rail", "Wide Ledge Triple-Spread Spike", "Heavy Industrial Epoxy Anchoring", "15-Year Commercial Warranty Handover"]
      }
    ]
  },

  // 4. Duct Area & AC Compressor Nets
  {
    id: "balcony-duct-shaft-net",
    category: "bird-control",
    internalTitle: "BALCONY DUCT & SHAFT NETS",
    title: "Building Duct Area & AC Compressor Shaft Nets",
    shortTitle: "Duct & AC Area Nets",
    eyebrow: "BUILDING UTILITY & AIR SHAFT PEST SHIELD",
    tagline: "Total Pigeon Quarantine. Deep Chemical Sanitization. AC Maintenance Access Ports.",
    description: "Secure balcony utility shafts, plumbing ducts, and outdoor AC compressor ledges. Includes pre-installation chemical sanitization and zipper hatches.",
    fullDescription: "Pigeons frequently nest on balcony-adjacent AC compressor ledges and internal utility duct shafts, creating intense odor, bacteria, and bird mites. We sanitize the entire area and install heavy-duty Garware copolymer nets fitted with industrial zipper ports for easy AC and plumbing maintenance.",
    turnaround: "1 – 3 Days",
    priceRange: "₹16 – ₹24 / sq.ft",
    basePrice: 19,
    unit: "sq.ft",
    badge: "Sanitization & Zipper Port Included",
    rating: 4.95,
    reviewsCount: 1480,
    idealFor: "Balcony Utility Areas, AC Compressor Ledges, High-Rise Plumbing Shafts",
    heroImage: "/images/balcony-duct-shaft.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/balcony-duct-shaft.webp",
    technicalSpecs: [
      { label: "Coverage Reach", value: "Up to 50+ Storey Vertical Shaft Balconies" },
      { label: "Net Twine", value: "Garware High-Density UV Copolymer" },
      { label: "Service Access", value: "Industrial Heavy-Duty YKK Zipper & Velcro Flaps" },
      { label: "Anchoring Method", value: "M8 Heavy Expansion Anchors & SS Guide Wires" },
      { label: "Sanitization Protocol", value: "Pre-Installation High-Pressure Chemical Cleaning" },
      { label: "Certifications", value: "Certified Rope Access High-Altitude Riggers" }
    ],
    coreFeatures: [
      "Eliminates foul guano stench, pigeon mites, and air conditioner contamination.",
      "Custom industrial zipper maintenance hatches for AC servicing technicians.",
      "Pre-installation enzymatic cleaning and pressure wash included.",
      "High-altitude certified riggers handle challenging building voids safely.",
      "Backed by MB Natural Safety Nets 5-Year Stamped Warranty."
    ],
    workflow: [
      { step: 1, title: "Utility Shaft Inspection", desc: "Inspecting balcony AC compressor platforms, plumbing pipes, and void dimensions." },
      { step: 2, title: "Enzymatic Chemical Disinfection", desc: "Thorough pressure washing and chemical sanitization of pigeon nests and droppings." },
      { step: 3, title: "SS Perimeter Guide Anchoring", desc: "Anchoring marine steel cable along the shaft perimeter." },
      { step: 4, title: "Net Weave & Maintenance Port Fitting", desc: "Fitting Garware netting with heavy YKK industrial zipper flaps for technicians." },
      { step: 5, title: "Handover & 5-Year Guarantee", desc: "Handover of warranty certificate and zipper maintenance instructions." }
    ],
    packages: [
      {
        name: "Standard Balcony Duct Net",
        mesh: "50mm Mesh",
        life: "3-Year Life",
        price: 16,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Standard UV Nylon Net", "Galvanized Anchor Hooks", "1 Maintenance Zipper Port", "3-Year Service Guarantee", "Basic Pigeon Prevention"]
      },
      {
        name: "Full Quarantine + Deep Sanitization",
        mesh: "30mm High-Tenacity",
        life: "6-Year Life",
        price: 19,
        unit: "/ sq.ft",
        recommended: true,
        features: ["Garware UV-Treated Copolymer Netting", "Full Pre-Installation Chemical Sanitization", "Heavy Duty YKK Zipper Maintenance Hatches", "5-Year Official Stamped Warranty", "SS 304 High-Tension Perimeter Rigging", "Zero Dropping Quarantine Guarantee"]
      },
      {
        name: "Industrial Tower Spec",
        mesh: "25mm Reinforced",
        life: "8+ Year Life",
        price: 24,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Heavy Fire-Retardant Polymer Netting", "SS 316 Marine Hardware Throughout", "Dual Zipper Access + Structural Rigging", "7-Year Extended Commercial Warranty", "Quarterly Maintenance Inspection Plan"]
      }
    ]
  },

  // 5. SS 316 Invisible Grills
  {
    id: "balcony-invisible-grill",
    category: "invisible-grills",
    internalTitle: "BALCONY INVISIBLE GRILLS",
    title: "SS 316 High-Tensile Balcony Invisible Grills",
    shortTitle: "Invisible Grills",
    eyebrow: "ARCHITECTURAL BALCONY SECURITY",
    tagline: "Architectural Luxury. 400kg+ Tensile Capacity. 100% Unblocked Skyline.",
    description: "Sleek vertical stainless steel cables spaced at 2 or 3 inches. Ultimate fall protection without feeling like you live in an iron cage.",
    fullDescription: "The architectural luxury standard for gated community balconies and high-rise penthouses in Hyderabad. Made from 316 Marine Grade multi-strand stainless steel coated with DuPont Teflon, providing 400kg+ breaking load per cable while preserving panoramic balcony views.",
    turnaround: "4 – 6 Hours",
    priceRange: "₹120 – ₹165 / sq.ft",
    basePrice: 135,
    unit: "sq.ft",
    badge: "SS 316 Marine Grade (400kg+ Load)",
    rating: 4.99,
    reviewsCount: 3410,
    idealFor: "Luxury Balconies, High-Rise Towers, Penthouses, Open Glass Balustrades",
    heroImage: "/images/hero-balcony.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/hero-balcony.webp",
    technicalSpecs: [
      { label: "Cable Core", value: "316 Marine Grade 7x7 Multi-Strand Stainless Steel" },
      { label: "Membrane Sheath", value: "Transparent Anti-UV DuPont Nylon Sheath" },
      { label: "Cable Diameter", value: "2.5mm / 3.0mm (400kg+ Breaking Load)" },
      { label: "Track System", value: "Heavy Extruded Anodized Aluminum Track" },
      { label: "Line Spacing", value: "2 Inches (Kids & Pets) or 3 Inches" },
      { label: "Rust Warranty", value: "10-Year Rust-Free Marine Guarantee" }
    ],
    coreFeatures: [
      "Zero feeling of living in an iron prison — enjoy 100% panoramic sunset and skyline views.",
      "Unbreakable fall protection for toddlers, children, and pets (400kg+ breaking load).",
      "Emergency evacuation friendly (cuttable in fire emergency with wire cutters).",
      "Zero maintenance; never requires painting or anti-rust treatment forever.",
      "Preserves and increases luxury high-rise property and resale aesthetics."
    ],
    workflow: [
      { step: 1, title: "Laser Leveling & Track Alignment", desc: "Balcony floor-to-ceiling laser calibration with 1mm structural tolerance." },
      { step: 2, title: "Heavy Extruded Track Anchor", desc: "Fastening high-grade aluminum tracks using heavy Hilti expansion bolts." },
      { step: 3, title: "Continuous Cable Threading", desc: "Continuous vertical weaving of 316 marine-grade cable with zero weak splices." },
      { step: 4, title: "Hydraulic Tensile Calibration", desc: "Torque tensioning each cable strand to verified 400kg breaking load." },
      { step: 5, title: "10-Year Rust Certificate Handover", desc: "Handover of 10-year anti-rust and fall-prevention stamped warranty." }
    ],
    packages: [
      {
        name: "Standard 3-Inch Balcony",
        mesh: "3.0\" Cable Spacing",
        life: "10-Year Rust Free",
        price: 120,
        unit: "/ sq.ft",
        recommended: false,
        features: ["2.5mm SS 316 Marine Cable", "Standard Powder Coated Track", "150kg Impact Rating", "5-Year Service Warranty", "Adult Balcony Safety"]
      },
      {
        name: "Child & Pet Safe 2-Inch",
        mesh: "2.0\" Cable Spacing",
        life: "15-Year Rust Free",
        price: 135,
        unit: "/ sq.ft",
        recommended: true,
        features: ["2.5mm DuPont Sheathed SS 316", "Heavy Anodized Frame Track", "400kg Tensile Rating (Child Fall Safe)", "10-Year Rust-Free Guarantee", "Emergency Quick-Cut Compatible", "Toddler & Small Pet Proof"]
      },
      {
        name: "Ultra Armor 3.0mm Balcony",
        mesh: "2.0\" Cable Spacing",
        life: "Lifetime Durability",
        price: 165,
        unit: "/ sq.ft",
        recommended: false,
        features: ["3.0mm Heavy Duty SS 316 Cable", "Reinforced Extruded Aluminum Track", "550kg Extreme Tensile Rating", "Integrated Alarm System Ready", "10-Year Full Warranty Handover", "High-Rise Penthouse Recommended"]
      }
    ]
  },

  // 6. Child & Toddler Safety Nets
  {
    id: "balcony-child-safety-net",
    category: "safety-nets",
    internalTitle: "BALCONY CHILD SAFETY NETS",
    title: "Balcony Child & Toddler Safety Nets",
    shortTitle: "Child Balcony Nets",
    eyebrow: "HIGH-RISE TODDLER FALL PROTECTION",
    tagline: "Certified 180kg+ Impact Capacity. Parapet & Railing Gap Lock. Total Peace of Mind.",
    description: "Heavy-duty fall prevention netting engineered specifically for high-rise apartment balconies with toddlers, young kids, and open railings. Certified high tensile load.",
    fullDescription: "Living in 10th to 50th-floor high-rise communities in Gachibowli, Kokapet, or HITEC City requires absolute fall prevention. Our Balcony Child Safety Nets use reinforced braided nylon twines with 180kg+ grid impact strength and child-proof expansion fasteners along balcony railings and open parapet voids.",
    turnaround: "2 – 4 Hours",
    priceRange: "₹20 – ₹28 / sq.ft",
    basePrice: 24,
    unit: "sq.ft",
    badge: "180kg+ Child Impact Certified",
    rating: 4.99,
    reviewsCount: 3120,
    idealFor: "Apartment Balconies with Railing Gaps, Toddlers, High-Rise Balconies, Stairwell Voids",
    heroImage: "/images/invisible-grill-toddler.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/invisible-grill-toddler.webp",
    technicalSpecs: [
      { label: "Material Composition", value: "High-Tenacity Heat-Set Braided Nylon" },
      { label: "Impact Breaking Load", value: "180 kg+ certified multi-point grid capacity" },
      { label: "Railing Gap Coverage", value: "Zero bottom or side pass-through gap for toddlers" },
      { label: "Mesh Size", value: "25mm / 30mm Child-Safe Tight Aperture" },
      { label: "Anchor Reinforcement", value: "Heavy Hilti Steel Expansion Anchors" },
      { label: "Child Proofing", value: "Non-Toxic, Smooth Edges, Zero Finger Abrasion" }
    ],
    coreFeatures: [
      "Completely seals balcony railing bottom gaps where toddlers can slip through.",
      "Withstands heavy accidental trips, falls, and body-slams up to 180 kg.",
      "High-altitude certified rigging technicians with child-safety inspection checklist.",
      "Weather-proof UV coating ensures twines never weaken in Hyderabad heat.",
      "Includes 5-Year Stamped Doorstep Replacement Warranty."
    ],
    workflow: [
      { step: 1, title: "Toddler Hazard Zone Audit", desc: "Inspecting balcony railing heights, bottom gap clearances, and furniture climb points." },
      { step: 2, title: "Structural Anchor Installation", desc: "Anchoring heavy-duty steel eyelet bolts at close 8-inch intervals for high tension." },
      { step: 3, title: "Railing Bottom Wire Lock", desc: "Tight boundary cable woven along the exact floor level to eliminate crawl gaps." },
      { step: 4, title: "Full Balcony Net Weaving", desc: "Precision taut alignment from balcony floor to ceiling slab." },
      { step: 5, title: "Physical Impact Stress Test", desc: "Manual pull and weight stress test conducted in front of parents prior to handover." }
    ],
    packages: [
      {
        name: "Railing Gap Guard Only",
        mesh: "30mm Braided",
        life: "5-Year Life",
        price: 20,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Covers lower railing gaps up to 4ft height", "150kg Impact Load Rated", "Smooth anti-abrasion twines", "3-Year Service Guarantee", "Ideal for low-risk lower floors"]
      },
      {
        name: "Full Balcony Child Shield",
        mesh: "25mm High-Tenacity",
        life: "8+ Year Life",
        price: 24,
        unit: "/ sq.ft",
        recommended: true,
        features: ["Complete Floor-to-Ceiling Netting", "180kg+ Certified Impact Load", "SS 304 High-Tension Perimeter Wire", "Zero crawl-gap floor cable lock", "5-Year Official Stamped Warranty", "Free Annual Tension Re-check"]
      },
      {
        name: "High-Rise Extreme Armor",
        mesh: "20mm Micro-Braided",
        life: "10+ Year Life",
        price: 28,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Dual Core Braided Twines", "250kg Extreme Impact Capacity", "SS 316 Marine Hardware throughout", "Toddler & Big Pet Dual Protection", "7-Year Extended Warranty Certificate", "Recommended for 20th+ Floor Penthouses"]
      }
    ]
  },

  // 7. Balcony Pet & Dog Safety Nets
  {
    id: "balcony-pet-safety-net",
    category: "safety-nets",
    internalTitle: "BALCONY PET & DOG SAFETY NETS",
    title: "Balcony Pet & Dog Safety Netting",
    shortTitle: "Pet Safety Nets",
    eyebrow: "BITE-RESISTANT PET FALL PREVENTION",
    tagline: "Bite-Proof Micro-Grid. Zero Railing Squeeze. High Balcony Security for Pets.",
    description: "Reinforced micro-mesh netting specifically designed for high-rise balconies with household pets and dogs who love peering over balcony ledges.",
    fullDescription: "Household pets naturally run toward birds or attempt to squeeze through balcony iron railing bars. Our Balcony Pet Safety Nets feature bite-resistant polymer twines with reinforced 20mm/25mm micro-grids, preventing energetic pets from slipping or falling off high-rise ledges.",
    turnaround: "2 – 3 Hours",
    priceRange: "₹22 – ₹30 / sq.ft",
    basePrice: 25,
    unit: "sq.ft",
    badge: "Bite-Resistant & Claw Proof",
    rating: 4.97,
    reviewsCount: 2210,
    idealFor: "Balconies with Dogs, Puppies, Railing Bar Gaps, High-Floor Pet Owners",
    heroImage: "/images/balcony-pet-dog-safety.webp",
    beforeImage: "/images/balcony-before-mess.webp",
    afterImage: "/images/balcony-pet-dog-safety.webp",
    technicalSpecs: [
      { label: "Twine Construction", value: "Wire-Reinforced Bite-Resistant Copolymer" },
      { label: "Mesh Aperture", value: "20mm x 20mm Anti-Squeeze Micro-Grid" },
      { label: "Claw & Chew Resistance", value: "Zero unraveling or fraying from pet paws and teeth" },
      { label: "Tensile Strength", value: "45 kg per knot (180kg grid capacity)" },
      { label: "Bottom Seal", value: "Flush floor cable anchoring leaving zero gap" },
      { label: "Transparency", value: "95% Clear Visibility for Pet Balcony Basking" }
    ],
    coreFeatures: [
      "Micro-mesh aperture prevents puppies and household pets from squeezing heads through.",
      "Reinforced core fibers resist aggressive chewing, biting, and scratching.",
      "Tightly anchored along the balcony floor so pets cannot crawl underneath.",
      "Allows pets to safely bask in balcony sunlight without fear of high-altitude falls.",
      "Backed by MB Natural Safety Nets 5-Year Stamped Doorstep Guarantee."
    ],
    workflow: [
      { step: 1, title: "Pet Behavior & Railing Inspection", desc: "Inspecting pet jumping heights, balcony railing gaps, and corner escape routes." },
      { step: 2, title: "Zero-Gap Bottom Anchor Track", desc: "Securing the bottom cable flush against the balcony tiles so pets cannot wedge beneath." },
      { step: 3, title: "Micro-Mesh Tension Rigging", desc: "Stretching bite-resistant micro-netting tautly with turnbuckles." },
      { step: 4, title: "Corner & Wall Edge Locking", desc: "Double stitching all perimeter edges to prevent edge slippage." },
      { step: 5, title: "Pet-Safe Handover & Warranty", desc: "Certificate issuance with 5-year doorstep replacement guarantee." }
    ],
    packages: [
      {
        name: "Standard Pet Guard Balcony",
        mesh: "25mm Micro-Mesh",
        life: "4-Year Life",
        price: 22,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Standard High-Density Copolymer", "Anti-Slip Railing Coverage", "Stainless Steel Hooks", "3-Year Warranty", "Suitable for Small Pets"]
      },
      {
        name: "Bite-Proof Pet Shield",
        mesh: "20mm Reinforced",
        life: "8+ Year Life",
        price: 25,
        unit: "/ sq.ft",
        recommended: true,
        features: ["Bite-Resistant Wire Core Monofilament", "Zero-Gap Balcony Floor Cable Lock", "Claw-Proof & Scratch-Proof Finish", "5-Year Stamped Doorstep Guarantee", "Free Balcony Sanitization Included", "Puppy & Small Pet Escape Proof"]
      },
      {
        name: "Heavy Dog & Multi-Pet Armor",
        mesh: "20mm Double-Braided",
        life: "10+ Year Life",
        price: 30,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Heavy Gauge Braided Mesh", "200kg Extreme Impact Load", "SS 316 Marine Hardware Throughout", "Floor-to-Ceiling Full Balcony Shield", "7-Year Extended Commercial Warranty", "Ideal for Large Dogs & High-Rises"]
      }
    ]
  },

  // 8. Cricket Practice Nets
  {
    id: "cricket-practice-net",
    category: "sports-nets",
    internalTitle: "CRICKET PRACTICE & BOX NETS",
    title: "Cricket Practice Nets (Terrace & Academy)",
    shortTitle: "Cricket Practice Nets",
    eyebrow: "HEAVY-IMPACT CRICKET TRAINING ENCLOSURES",
    tagline: "High-Tenacity UV Garware Nylon. Multi-Layer Backstop. Certified Heavy-Ball Impact Proof.",
    description: "Engineered cricket practice netting enclosures for rooftop terraces, box cricket turfs, club grounds, and sports academies across Hyderabad. High breaking load.",
    fullDescription: "Professional cricket practice net enclosures installed on residential terraces, apartment society compounds, school grounds, and sports academies in Hyderabad. Constructed using high-tenacity UV-stabilized braided nylon mesh with double-layer impact backstops behind batting stumps. Engineered to withstand heavy leather cricket ball shots at 150 km/h without stretching or tearing.",
    turnaround: "1 – 2 Days",
    priceRange: "₹25 – ₹45 / sq.ft",
    basePrice: 32,
    unit: "sq.ft",
    badge: "Leather Ball Impact Certified",
    rating: 4.99,
    reviewsCount: 2150,
    idealFor: "Rooftop Terraces, Box Cricket Turfs, Sports Academies, School Grounds, Society Compounds",
    heroImage: "/images/cricket-practice-net.webp",
    beforeImage: "/images/cricket-practice-net.webp",
    afterImage: "/images/cricket-practice-net.webp",
    technicalSpecs: [
      { label: "Twine Material", value: "Virgin High-Tenacity Braided Nylon (Garware / Tufropes)" },
      { label: "Mesh Aperture", value: "35mm x 35mm (Zero Ball Passage)" },
      { label: "Twine Diameter", value: "1.5mm / 2.0mm / 2.5mm Heavy Gauge" },
      { label: "Impact Capacity", value: "Tested for 150 km/h Season Leather Ball Impact" },
      { label: "Rigging Framework", value: "Heavy Galvanized Iron (GI) Pipe Structure & SS Tension Wires" },
      { label: "Weather Endurance", value: "UV-Treated Monsoon & High-Wind Resistant" }
    ],
    coreFeatures: [
      "Withstands repetitive hard leather ball hits without tearing or fraying.",
      "Custom roof, side, and double backstop netting tailored to pitch dimensions.",
      "Prevents balls from escaping onto neighboring homes, balconies, or cars.",
      "Galvanized GI steel pipe structure with tension turnbuckles to prevent net sagging.",
      "Includes 5-Year Stamped Doorstep Warranty against UV degradation."
    ],
    workflow: [
      { step: 1, title: "Pitch & Clearance Dimensioning", desc: "Laser calibration of pitch length (30ft to 70ft), width (10ft to 14ft), and height clearances." },
      { step: 2, title: "GI Steel Framework Erection", desc: "Bolting and guying heavy galvanized steel pipe uprights and crossbeams." },
      { step: 3, title: "Perimeter High-Tension Cables", desc: "Running heavy-gauge steel cables through turnbuckles for tight roof net suspension." },
      { step: 4, title: "Double-Layer Backstop Rigging", desc: "Installing extra high-density shock-absorbing net layer behind the batsman's stumps." },
      { step: 5, title: "Fast-Bowling Impact Test", desc: "Vigorous leather ball impact test and 5-year warranty certificate handover." }
    ],
    packages: [
      {
        name: "Society Tennis-Ball Net",
        mesh: "45mm Mesh",
        life: "4-Year Life",
        price: 25,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Standard UV Nylon Twine", "Tennis Ball & Rubber Ball Safe", "Basic Perimeter Cable Rigging", "3-Year Service Guarantee", "Ideal for Apartment Compounds"]
      },
      {
        name: "Pro Academy Leather-Ball",
        mesh: "35mm Heavy Braided",
        life: "8+ Year Life",
        price: 32,
        unit: "/ sq.ft",
        recommended: true,
        features: ["Garware 2.0mm Braided Nylon", "Season Leather Ball Impact Proof", "Double Backstop Netting Behind Stumps", "Heavy GI Steel Rigging Cables", "5-Year Stamped Guarantee", "Free Annual Retensioning"]
      },
      {
        name: "Box Cricket Commercial Turf",
        mesh: "30mm Ultra-Heavy",
        life: "10+ Year Life",
        price: 45,
        unit: "/ sq.ft",
        recommended: false,
        features: ["2.5mm Multi-Strand High-Tenacity Net", "Complete Rooftop & Side Enclosure", "High-Torque GI Frame Structure", "Commercial High-Frequency Play Spec", "7-Year Commercial Warranty Certificate"]
      }
    ]
  },

  // 9. Football & Sports Turf Nets
  {
    id: "football-sports-net",
    category: "sports-nets",
    internalTitle: "FOOTBALL & SPORTS TURF NETS",
    title: "Football, Futsal & Multi-Sport Turf Ground Nets",
    shortTitle: "Football & Turf Nets",
    eyebrow: "ARENA & SPORTS GROUND BOUNDARY SHIELD",
    tagline: "20ft to 40ft High Perimeter Netting. Anti-Sag Rigging. All-Weather Deccan Proof.",
    description: "Heavy-duty perimeter barrier nets and goalpost nets for football arenas, futsal courts, box grounds, and school sports complexes. Certified all-weather durability.",
    fullDescription: "High-impact perimeter barrier nets engineered for commercial artificial turf football grounds, futsal courts, volleyball arenas, and school sports complexes in Hyderabad. Reaches heights up to 40 feet with heavy galvanized steel rigging and zero-sag turnbuckle systems to prevent balls from flying into nearby residential properties.",
    turnaround: "1 – 3 Days",
    priceRange: "₹22 – ₹38 / sq.ft",
    basePrice: 28,
    unit: "sq.ft",
    badge: "5-Year Cyclone & High-Wind Warranty",
    rating: 4.98,
    reviewsCount: 1840,
    idealFor: "Futsal Courts, 5-a-Side & 7-a-Side Turf Arenas, Sports Complexes, School Grounds",
    heroImage: "/images/football-sports-net.webp",
    beforeImage: "/images/football-sports-net.webp",
    afterImage: "/images/football-sports-net.webp",
    technicalSpecs: [
      { label: "Twine Material", value: "High-Density Polyethylene (HDPE) / UV Braided Nylon" },
      { label: "Mesh Aperture", value: "40mm x 40mm / 50mm x 50mm Square Aperture" },
      { label: "Perimeter Reach", value: "Heights from 15ft up to 45ft Continuous" },
      { label: "Wind Resistance", value: "Aerodynamic Mesh Designed for Gale Force Monsoon Winds" },
      { label: "Fastening Hardware", value: "Heavy Guy Wires, GI Turnbuckles & Ground Eyelet Anchors" },
      { label: "Goalpost Option", value: "Heavy-Duty Braided Hexagonal Netting Included" }
    ],
    coreFeatures: [
      "Prevents high-velocity footballs from leaving turf arenas and damaging vehicles or windows.",
      "Aerodynamic square mesh design prevents wind drag and structural stress during heavy storms.",
      "UV-stabilized resin prevents brittleness and fading under intense Hyderabad summer heat.",
      "Includes replacement goalpost nets and entrance access zipper/sliding curtains.",
      "Backed by MB Natural Safety Nets 5-Year Stamped Commercial Guarantee."
    ],
    workflow: [
      { step: 1, title: "Arena Survey & Pole Calibration", desc: "Laser elevation check of perimeter floodlight poles, boundary fences, and height clearances." },
      { step: 2, title: "Main Guy Wire Suspension", desc: "Installing heavy galvanized steel boundary cables along the top perimeter with turnbuckles." },
      { step: 3, title: "High-Altitude Net Hoisting", desc: "Hoisting continuous panels of high-density sports netting using safety rope rigging." },
      { step: 4, title: "Ground & Corner Tension Locking", desc: "Securing bottom edge cables to perimeter curb to prevent balls from rolling under." },
      { step: 5, title: "Power-Kick Stress Inspection", desc: "Rigorous high-velocity ball tests and commercial warranty handover." }
    ],
    packages: [
      {
        name: "Standard School Ground Barrier",
        mesh: "50mm Square",
        life: "4-Year Life",
        price: 22,
        unit: "/ sq.ft",
        recommended: false,
        features: ["UV-Treated HDPE Twine", "Up to 20ft Height Coverage", "Galvanized Tension Cables", "3-Year Service Guarantee", "Suitable for General Sports"]
      },
      {
        name: "Commercial Futsal Turf Arena",
        mesh: "40mm Braided Nylon",
        life: "8+ Year Life",
        price: 28,
        unit: "/ sq.ft",
        recommended: true,
        features: ["Heavy Braided UV Nylon Net", "Heights up to 35ft Full Coverage", "High-Tension Steel Boundary Cables", "Goalpost Net Set Included", "5-Year Official Stamped Warranty", "Sliding Access Player Curtains"]
      },
      {
        name: "Extreme Stadium Heavy Armor",
        mesh: "40mm Double-Core",
        life: "10+ Year Life",
        price: 38,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Heavy Multi-Filament Polypropylene", "Heights up to 45ft with Guy Wires", "Marine SS 316 Hardware Throughout", "7-Year Extended Commercial Warranty", "Quarterly Annual Tension Tune-up"]
      }
    ]
  },

  // 10. Swimming Pool Safety Nets
  {
    id: "swimming-pool-net",
    category: "specialized-nets",
    internalTitle: "SWIMMING POOL SAFETY NETS",
    title: "Swimming Pool Anti-Drowning Safety Nets",
    shortTitle: "Swimming Pool Nets",
    eyebrow: "CHILD & PET DROWNING PREVENTION SYSTEM",
    tagline: "Certified 200kg+ Surface Load. Central Tension Float. Marine Brass Flush Anchors.",
    description: "Custom-fitted high-tensile safety netting for residential villa and clubhouse swimming pools. Prevents accidental toddler and pet falls with zero sagging into water.",
    fullDescription: "Accidental falls into unattended residential or clubhouse swimming pools are a critical hazard for toddlers and household pets. Our Swimming Pool Safety Nets are engineered from high-tensile UV-stabilized virgin polyethylene twines rated to support 200kg+ surface weight, keeping children and pets completely above water level. Anchored with child-proof marine brass flush deck fasteners.",
    turnaround: "3 – 5 Hours",
    priceRange: "₹35 – ₹65 / sq.ft",
    basePrice: 48,
    unit: "sq.ft",
    badge: "ASTM F1346 Anti-Drowning Certified",
    rating: 4.99,
    reviewsCount: 1290,
    idealFor: "Villa Swimming Pools, Gated Community Pools, Clubhouse Pools, Resort Plunge Pools",
    heroImage: "/images/swimming-pool-net.webp",
    beforeImage: "/images/swimming-pool-net.webp",
    afterImage: "/images/swimming-pool-net.webp",
    technicalSpecs: [
      { label: "Material Twine", value: "High-Tenacity UV-Stabilized Polyethylene (Chlorine-Proof)" },
      { label: "Mesh Aperture", value: "75mm x 75mm (Toddler Head & Body Proof)" },
      { label: "Surface Weight Capacity", value: "200 kg+ certified central load (Multiple Children)" },
      { label: "Deck Anchor Fasteners", value: "SS 316 / Marine Brass Flush-Mount Anchors" },
      { label: "Tensioning Mechanism", value: "Central Central-Core Tension Pulley Float System" },
      { label: "Chemical Resistance", value: "100% Resistant to Chlorine, Salt Water, and Sun UV" }
    ],
    coreFeatures: [
      "Prevents toddlers, young children, and pets from submerging in pool water.",
      "Central tension pulley ensures net stays high and dry above water surface under weight.",
      "Brass deck anchors sit completely flush with pool tiles to prevent barefoot tripping.",
      "Lightweight design allows one adult to install or remove the net in under 5 minutes.",
      "Backed by MB Natural Safety Nets 5-Year Stamped Doorstep Guarantee."
    ],
    workflow: [
      { step: 1, title: "Pool Geometry & Coping Laser Scan", desc: "Digital millimeter scanning of pool contours, curved steps, swim-outs, and coping stone edges." },
      { step: 2, title: "Flush Brass Anchor Core Drilling", desc: "Diamond core-drilling flush brass anchor sockets into pool coping stones every 24 inches." },
      { step: 3, title: "Custom Net Shaping & Edging", desc: "Hand-weaving perimeter border cords to match exact pool shape contours." },
      { step: 4, title: "Central Tension Float Calibration", desc: "Fitting central pulley system and tension cord ensuring zero water-sag under weight." },
      { step: 5, title: "Live Weight Test & Parent Demonstration", desc: "Conducting 100kg weight drop test and demonstrating 5-minute removal and installation tool." }
    ],
    packages: [
      {
        name: "Standard Rectangular Pool Guard",
        mesh: "80mm Mesh",
        life: "5-Year Life",
        price: 35,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Chlorine-Resistant Poly Twine", "GI Core Deck Anchors", "Manual Tension Cords", "3-Year Service Guarantee", "For Straight Rectangular Pools"]
      },
      {
        name: "Premium Anti-Drowning Shield",
        mesh: "75mm High-Tenacity",
        life: "8+ Year Life",
        price: 48,
        unit: "/ sq.ft",
        recommended: true,
        features: ["UV & Chlorine Proof Virgin Polyethylene", "Marine Brass Flush Deck Sockets", "Central Float Ratchet Tensioner", "5-Year Stamped Warranty", "5-Minute Easy Roller Tool Included", "Free Annual Anchor Service"]
      },
      {
        name: "Freeform Luxury Villa Custom",
        mesh: "70mm Micro-Grid",
        life: "10+ Year Life",
        price: 65,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Custom Laser Curved Fit for Any Shape", "SS 316 Marine Hardware Throughout", "Dual Ratchet Easy-Lock Pulleys", "Includes Storage Roller Reel", "7-Year Extended Warranty Handover"]
      }
    ]
  },

  // 11. Construction & Industrial Debris Nets
  {
    id: "construction-safety-net",
    category: "specialized-nets",
    internalTitle: "CONSTRUCTION & DEBRIS SAFETY NETS",
    title: "Construction Site & Debris Fall Protection Nets",
    shortTitle: "Construction Safety Nets",
    eyebrow: "HIGH-RISE PERSONNEL & DEBRIS CATCH SYSTEM",
    tagline: "Heavy-Duty Polypropylene Fall Arrest. Scaffolding Cladding. Bureau of Indian Standards Compliant.",
    description: "Industrial fall-arrest and debris containment safety netting for commercial towers, high-rise residential construction, and scaffolding facade works across Hyderabad.",
    fullDescription: "High-rise construction and facade renovations across Hyderabad require rigorous personnel fall protection and falling debris containment. Our industrial safety nets conform to Indian Standard IS 5175 specifications, combining heavy-gauge border ropes with high-impact knotless polypropylene mesh capable of arresting human falls from heights.",
    turnaround: "1 – 4 Days",
    priceRange: "₹15 – ₹25 / sq.ft",
    basePrice: 18,
    unit: "sq.ft",
    badge: "IS 5175 Personnel Fall-Arrest Certified",
    rating: 4.96,
    reviewsCount: 970,
    idealFor: "High-Rise Construction Towers, Scaffolding Facades, Commercial Projects, Renovation Voids",
    heroImage: "/images/construction-safety-net.webp",
    beforeImage: "/images/construction-safety-net.webp",
    afterImage: "/images/construction-safety-net.webp",
    technicalSpecs: [
      { label: "Compliance Standard", value: "Conforms to IS 5175 / EN 1263-1 Safety Standards" },
      { label: "Mesh Construction", value: "High-Tenacity Knotless Polypropylene (PP) / Nylon" },
      { label: "Border Rope", value: "12mm High-Breaking Load Braided Polypropylene" },
      { label: "Mesh Aperture", value: "100mm Fall Catch Grid + 20mm Micro Debris Overlay" },
      { label: "Drop Test Rating", value: "Certified to arrest 100 kg weight falling from 6 meters" },
      { label: "Tie-Rope Spacing", value: "Heavy-Duty Tie Ropes Spaced Every 750mm" }
    ],
    coreFeatures: [
      "Arrests accidental human falls on open construction floors and exterior scaffolding.",
      "Integrated micro-mesh containment layer stops falling bricks, tools, and mortar debris.",
      "Conforms strictly with municipal high-rise construction safety norms and labor safety audits.",
      "High weather and concrete alkali resistance prevents chemical degradation on active job sites.",
      "Supplied with test inspection certificates and official manufacturer compliance sheets."
    ],
    workflow: [
      { step: 1, title: "Building Facade & Scaffold Audit", desc: "Inspecting floor slab edges, cantilever bracket points, and external scaffolding heights." },
      { step: 2, title: "Cantilever Outrigger Erection", desc: "Anchoring heavy steel outrigger arms extending 3 to 4.5 meters past the building edge." },
      { step: 3, title: "Border Cable & Net Rigging", desc: "Securing 12mm boundary ropes to structural columns using approved shackle clamps." },
      { step: 4, title: "Debris Containment Overlay", desc: "Stitching fine 20mm shade mesh over the heavy personnel net to catch falling small tools." },
      { step: 5, title: "Safety Audit Handover & Certification", desc: "Conducting site safety handover with test batch compliance certificates." }
    ],
    packages: [
      {
        name: "Standard Debris Barrier Net",
        mesh: "50mm + Shade Mesh",
        life: "2-Year Project Life",
        price: 15,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Tool & Debris Containment", "Scaffolding Perimeter Cladding", "Standard Border Ropes", "Safety Audit Compliant"]
      },
      {
        name: "Heavy-Duty Personnel Fall-Arrest",
        mesh: "100mm IS 5175 Certified",
        life: "5-Year Life",
        price: 18,
        unit: "/ sq.ft",
        recommended: true,
        features: ["IS 5175 Certified Personnel Fall Catch", "12mm Border Rope with Test Certificate", "Dual Layer Personnel + Debris Mesh", "High UV & Chemical Cement Resistance", "On-Site Rigging Engineer Supervision"]
      },
      {
        name: "Mega Infrastructure Tower Spec",
        mesh: "Custom Outrigger System",
        life: "Multi-Project Reusable",
        price: 25,
        unit: "/ sq.ft",
        recommended: false,
        features: ["Heavy Cantilever Steel Bracket Assembly", "Extreme Drop Tested to EN 1263-1", "Full Facade Perimeter Enclosure", "Engineering Test Certificate Handover"]
      }
    ]
  }
];
