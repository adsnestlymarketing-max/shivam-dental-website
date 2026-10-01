export const clinicInfo = {
  name: "Shivam Dental & Maxillofacial Centre",
  shortName: "Shivam Dental",
  tagline: "Empanelled on CGHS Panel | Multi-Specialty Dental & Oral Surgery",
  phone: "+91 85270 80186",
  altPhone: "08527080186",
  email: "contact@shivamdentalcentre.com",
  cghsEmail: "cghs@shivamdentalcentre.com",
  address: "C-1/23, First Floor, Block C, Yamuna Vihar, Delhi - 110053",
  landmark: "Near Yamuna Vihar Central Park / Petrol Pump",
  hoursWeekday: "Mon - Sat: 10:00am to 8:00pm",
  hoursSunday: "Sun: 10:00am to 2:00pm (By Prior Enquiry)",
  cghsCode: "DEL-CGHS-DENT-2024",
  rating: "4.9",
  reviewsCount: "500+",
  yearsExperience: "20+",
  patientCount: "15,000+",
  treatmentsCount: "145+",
  mapUrl: "https://www.google.com/maps/dir/?api=1&destination=shivam+ortho+%26+spine+care+center,+C-1/23,+Block+C,+Yamuna+Vihar,+Delhi,+110053",
  whatsappUrl: "https://wa.me/918527080186?text=Hello%20Shivam%20Dental%20Centre,%20I%20have%20an%20enquiry",
  socialLinks: {
    youtube: "https://www.youtube.com/@shivamdentalcentre", // Update YouTube link here
    instagram: "https://www.instagram.com/shivamdentalcentre", // Update Instagram link here
    whatsapp: "https://wa.me/918527080186?text=Hello%20Shivam%20Dental%20Centre,%20I%20have%20an%20enquiry" // Update WhatsApp link here
  }
};

export const quickFilters = [
  { id: "all", label: "All Treatments", category: "all" },
  { id: "maxillofacial", label: "Maxillofacial Surgery", category: "surgery" },
  { id: "root-canal", label: "Root Canal (RCT)", category: "endodontics" },
  { id: "implants", label: "Dental Implants", category: "prostho" },
  { id: "orthodontics", label: "Orthodontics & Aligners", category: "ortho" },
  { id: "cghs", label: "CGHS Cashless Panel", category: "cghs" },
  { id: "pediatrics", label: "Pediatric Dentistry", category: "kids" },
  { id: "cosmetic", label: "Cosmetic & Whitening", category: "cosmetic" }
];

export const doctorsList = [
  {
    id: "dr-sp-singh",
    name: "Dr. SP Singh",
    role: "Senior Oral & Maxillofacial Surgeon",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "20+ Years Experience",
    image: "/images/doctors/dr-sp-singh.jpg",
    department: "Oral & Maxillofacial Surgery",
    highlight: "Chief Maxillofacial Consultant",
    bio: "Renowned maxillofacial surgeon specializing in impacted wisdom tooth surgeries, facial trauma reconstruction, jaw cysts, TMJ disorders, and orthognathic corrective surgeries.",
    specialties: ["Impacted Tooth Extraction", "Facial Trauma Surgery", "Jaw Cyst Enucleation", "TMJ Pain Management", "Bone Grafting"]
  },
  {
    id: "dr-sufana-singh",
    name: "Dr. Sufana Singh",
    role: "Chief Dental Surgeon & Aesthetic Specialist",
    qualification: "BDS",
    experience: "15+ Years Experience",
    image: "/images/doctors/dr-sufana-singh.jpg",
    department: "General & Aesthetic Dentistry",
    highlight: "Clinical Director",
    bio: "Expert in comprehensive oral evaluations, painless preventive dentistry, aesthetic smile design, veneer restorations, and clinical governance.",
    specialties: ["Smile Designing", "Tooth-Colored Fillings", "Teeth Whitening", "Preventive Dental Care", "Gum Rejuvenation"]
  },
  {
    id: "dr-deepak-tomar",
    name: "Dr. Deepak Tomar",
    role: "Senior Consultant Orthodontist",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "14+ Years Experience",
    image: "/images/doctors/dr-deepak-tomar.jpg",
    department: "Orthodontics & Braces",
    highlight: "Invisalign & Clear Aligner Certified",
    bio: "Specialist in correcting irregular teeth, malocclusions, bite corrections, self-ligating ceramic braces, and invisible aligners for adults & teenagers.",
    specialties: ["Invisible Clear Aligners", "Ceramic Braces", "Metal Self-Ligating Braces", "Bite Alignment", "Dentofacial Orthopedics"]
  },
  {
    id: "dr-amit-raj",
    name: "Dr. Amit Raj",
    role: "Senior Endodontist & Root Canal Specialist",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "12+ Years Experience",
    image: "/images/doctors/dr-amit-raj.jpg",
    department: "Root Canal & Conservative Dentistry",
    highlight: "Microscopic Single-Sitting RCT",
    bio: "Pioneer in rotary painless single-sitting root canals, re-RCT revisions, post & core build-ups, and preservation of badly decayed natural teeth.",
    specialties: ["Single-Sitting Rotary RCT", "Painless Re-RCT", "Dental Pulp Therapy", "Micro-Endodontics", "Laser Root Debridement"]
  },
  {
    id: "dr-kunal-babbar",
    name: "Dr. Kunal Babbar",
    role: "Senior Prosthodontist & Implantologist",
    qualification: "BDS, MDS (Prosthodontics & Crown-Bridge)",
    experience: "13+ Years Experience",
    image: "/images/doctors/dr-kunal-babbar.jpg",
    department: "Dental Implants & Prosthetics",
    highlight: "Fixed Teeth & Digital Implants",
    bio: "Master in immediate dental implants, full-mouth rehabilitation, zirconia/ceramic crowns, bridges, precision dentures, and CAD-CAM restorations.",
    specialties: ["Basal & Conventional Implants", "Full Mouth Rehabilitation", "Zirconia Aesthetic Crowns", "Complete & BPS Dentures", "CAD/CAM Bridges"]
  },
  {
    id: "dr-ram-gopal",
    name: "Dr. Ram Gopal",
    role: "Senior Periodontist & Gum Specialist",
    qualification: "BDS, MDS (Periodontics & Oral Implantology)",
    experience: "11+ Years Experience",
    image: "/images/doctors/dr-ram-gopal.jpg",
    department: "Periodontology & Gum Surgery",
    highlight: "Laser Flap & Bone Regeneration",
    bio: "Specialized in treating bleeding gums, loose teeth, pyorrhea, laser gum depigmentation, bone grafting around teeth, and periodontal plastic surgeries.",
    specialties: ["Laser Gum Decontamination", "Flap Surgeries & Bone Grafts", "Gingival Depigmentation", "Treatment of Loose Teeth", "Deep Scaling & Root Planing"]
  },
  {
    id: "dr-tanvi-aggarwal",
    name: "Dr. Tanvi Aggarwal",
    role: "Senior Pedodontist & Child Specialist",
    qualification: "BDS, MDS (Pediatric & Preventive Dentistry)",
    experience: "10+ Years Experience",
    image: "/images/doctors/dr-tanvi-aggarwal.jpg",
    department: "Pediatric Dentistry",
    highlight: "Fear-Free Kids Dental Care",
    bio: "Dedicated specialist for kids dental care, milk teeth pulpectomy, stainless steel crowns, fluoride varnish cavity prevention, and space maintainers.",
    specialties: ["Painless Kids RCT (Pulpectomy)", "Fluoride Varnish & Sealants", "Space Maintainers", "Habit Breaking Appliances", "Zirconia Kids Crowns"]
  }
];

export const servicesList = [
  {
    id: "maxillofacial",
    title: "Oral & Maxillofacial Surgery",
    category: "surgery",
    icon: "ShieldAlert",
    tag: "Core Specialty",
    summary: "Expert surgical treatment for wisdom tooth impactions, facial trauma fractures, jaw cysts, TMJ joint disorders, and biopsy diagnostics.",
    details: [
      "Surgical removal of impacted third molars with minimal swelling",
      "Facial bone fracture management & emergency reconstruction",
      "Jaw cyst and benign tumor enucleations",
      "TMJ jaw joint clicking & arthritic pain therapies",
      "Pre-prosthetic ridge augmentation & bone grafting"
    ],
    cghsCovered: true,
    isFeatured: true
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (RCT)",
    category: "endodontics",
    icon: "Sparkles",
    tag: "Painless & Fast",
    summary: "Modern rotary single-sitting root canal treatment to instantly eliminate severe tooth pain and preserve damaged natural teeth.",
    details: [
      "Single-visit motorized rotary endodontic therapy",
      "Re-RCT revision for failed previous root canals",
      "High-strength fiberglass post & core buildup",
      "Dental abscess drainage & periapical healing",
      "Digital apex locator precision depth verification"
    ],
    cghsCovered: true,
    isFeatured: false
  },
  {
    id: "implants",
    title: "Dental Implants & Fixed Teeth",
    category: "prostho",
    icon: "CheckCircle2",
    tag: "Permanent Solution",
    summary: "Titanium and zirconia dental implants offering lifelong fixed natural-looking tooth replacement with superior biting strength.",
    details: [
      "Single and multiple missing teeth implant replacement",
      "All-on-4 & All-on-6 full arch rehabilitation",
      "Immediate loading implants for instant tooth in a day",
      "Sinus lift and ridge expansion bone grafting",
      "CAD-CAM custom abutments and screw-retained crowns"
    ],
    cghsCovered: true,
    isFeatured: false
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    category: "ortho",
    icon: "Smile",
    tag: "Perfect Alignment",
    summary: "Advanced braces and invisible aligners to straighten crooked teeth, close gaps, and restore a confident, well-aligned bite.",
    details: [
      "Transparent Invisible Aligners (no wires, removable)",
      "Ceramic tooth-colored aesthetic brackets",
      "Self-ligating low-friction metal braces",
      "Overbite, underbite & crossbite correction",
      "Post-orthodontic invisible retainers"
    ],
    cghsCovered: true,
    isFeatured: false
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Smile Makeover",
    category: "cosmetic",
    icon: "HeartPulse",
    tag: "Aesthetic Radiance",
    summary: "Complete aesthetic smile rejuvenation with porcelain veneers, laser teeth whitening, gap closures, and composite bonding.",
    details: [
      "In-clinic 1-hour laser teeth whitening",
      "Ultra-thin ceramic porcelain veneers & laminates",
      "Diastema (gap between front teeth) closure",
      "Gummy smile correction & gingival contouring",
      "Digital smile design previews before starting"
    ],
    cghsCovered: false,
    isFeatured: false
  },
  {
    id: "pediatrics",
    title: "Pediatric & Kids Dental Care",
    category: "kids",
    icon: "Baby",
    tag: "Gentle for Children",
    summary: "Gentle, fear-free dentistry designed exclusively for children, managing baby tooth decay, habits, and growth monitoring.",
    details: [
      "Painless baby tooth pulpectomy (kids RCT)",
      "Pediatric stainless steel & tooth-colored crowns",
      "Preventive fluoride varnish & dental pit/fissure sealants",
      "Habit-breaking appliances for thumb-sucking / tongue-thrusting",
      "Dental trauma management for school & playground injuries"
    ],
    cghsCovered: true,
    isFeatured: false
  },
  {
    id: "periodontics",
    title: "Periodontal & Laser Gum Care",
    category: "perio",
    icon: "Layers",
    tag: "Gum Health",
    summary: "Advanced periodontal therapies for bleeding gums, pyorrhea, receding gums, bad breath, and loose teeth stabilization.",
    details: [
      "Ultrasonic deep scaling & root surface debridement",
      "Laser periodontal flap surgery with bone grafts",
      "Cosmetic gum depigmentation (dark gum lightening)",
      "Crown lengthening for aesthetic restorations",
      "Mobile teeth splinting & regeneration therapy"
    ],
    cghsCovered: true,
    isFeatured: false
  },
  {
    id: "cghs-panel",
    title: "CGHS & Empanelled Scheme Care",
    category: "cghs",
    icon: "ShieldCheck",
    tag: "Govt Empanelled",
    summary: "Full authorization for CGHS pensioners, serving government personnel, and dependents with transparent paperwork and approved rates.",
    details: [
      "100% adherence to approved CGHS dental rates & guidelines",
      "Direct cashless authorization for eligible pensioners",
      "Assistance with official referral slips and permission letters",
      "Itemized diagnostic bills & verified medical certificates",
      "Priority scheduling for senior citizen CGHS cardholders"
    ],
    cghsCovered: true,
    isFeatured: true
  }
];

export const insurancesAndPanels = [
  {
    id: "cghs",
    name: "Central Government Health Scheme (CGHS)",
    badge: "Official Empanelment",
    type: "Govt Scheme",
    highlight: "Primary Panel",
    description: "Eligible for Central Govt employees, pensioners, defence civilian staff, and railway/postal staff with valid CGHS card.",
    coverage: ["Consultation & X-Rays", "Maxillofacial Surgeries", "Root Canal Therapy", "Scaling & Extractions", "Dentures & Restorations"]
  },
  {
    id: "echs",
    name: "ECHS & Ex-Servicemen Schemes",
    badge: "Assistance Available",
    type: "Armed Forces Support",
    highlight: "Documentation Support",
    description: "Complete diagnostic reporting, clinical case summaries, and stamped paperwork for reimbursement claims under ECHS & Armed Forces.",
    coverage: ["Emergency Dental Surgery", "Tooth Extraction", "Infection Control", "Specialist Consultations"]
  },
  {
    id: "state-govt",
    name: "Delhi Govt & PSU Schemes",
    badge: "Reimbursement Ready",
    type: "PSU / Autonomous",
    highlight: "Standard Formats",
    description: "Standardized medical receipts, pre/post X-ray documentation, and clinical notes for DGEHS, NTPC, BHEL, and PSU employees.",
    coverage: ["Root Canal & Crowns", "Implants & Bridges", "Periodontal Care", "Surgical Extractions"]
  },
  {
    id: "private-insurance",
    name: "Leading Private Health Insurers & TPAs",
    badge: "Cashless / Claim Assist",
    type: "Private Insurance",
    highlight: "OPD & Daycare",
    description: "Dedicated assistance for dental insurance claims, daycare surgical trauma benefits, and corporate health policies.",
    coverage: ["Accidental Dental Injury", "Surgical Extractions", "Diagnostic 3D Imaging", "Oral Pathology Biopsy"]
  }
];

export const blogPosts = [
  {
    id: "blog-1",
    title: "Committed to community good dental health",
    excerpt: "Maintaining optimal oral hygiene reduces the risk of systemic cardiovascular diseases and diabetes. Discover modern daily habits.",
    date: "September 24, 2026",
    category: "Oral Health Care",
    image: "/images/blog-1.jpg",
    readTime: "4 min read",
    author: "Dr. Sufana Singh"
  },
  {
    id: "blog-2",
    title: "Your good health, is our mission in life",
    excerpt: "Why precision rotary root canals and laser disinfection provide better long-term tooth survival than traditional drill methods.",
    date: "September 18, 2026",
    category: "Modern Endodontics",
    image: "/images/blog-2.jpg",
    readTime: "5 min read",
    author: "Dr. Amit Raj"
  },
  {
    id: "blog-3",
    title: "Achieving better smile with modern technology",
    excerpt: "How digital 3D intraoral scanners and clear aligners are replacing traditional uncomfortable gooey impressions for orthodontic braces.",
    date: "September 10, 2026",
    category: "Aesthetic Dentistry",
    image: "/images/blog-3.jpg",
    readTime: "3 min read",
    author: "Dr. Deepak Tomar"
  }
];

export const testimonialsList = [
  {
    id: 1,
    name: "Col. R. K. Sharma (Retd.)",
    role: "CGHS Beneficiary, Yamuna Vihar",
    avatar: "👨‍🦳",
    rating: "4.9",
    comment: "I underwent complex wisdom tooth surgery with Dr. SP Singh under CGHS panel. The entire process was completely painless, highly professional, and the clinic staff helped smoothly with all the CGHS documentation."
  },
  {
    id: 2,
    name: "Meenakshi Gupta",
    role: "Happy Patient, Dilshad Garden",
    avatar: "👩‍💼",
    rating: "5.0",
    comment: "Dr. Amit Raj did my single-sitting root canal treatment and it was genuinely effortless! No pain during or after the procedure. The clinic maintains top-grade sterilization and hygiene. Highly recommended!"
  },
  {
    id: 3,
    name: "Sunil Mittal",
    role: "Clear Aligners Patient, Delhi",
    avatar: "👨‍💻",
    rating: "4.9",
    comment: "Dr. Deepak Tomar’s clear aligner treatment transformed my smile in just 7 months. The modern clinic atmosphere and flexible consultation hours made it super convenient."
  }
];

export const clinicStats = [
  { value: "22+", label: "Health Sections", desc: "Specialist MDS disciplines & expert clinical departments." },
  { value: "145+", label: "Different Services", desc: "State-of-the-art painless procedures and surgical care." },
  { value: "15,000+", label: "Satisfied Patients", desc: "Trusted by families & CGHS beneficiaries across Delhi NCR." }
];
