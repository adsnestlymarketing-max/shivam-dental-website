/**
 * Shivam Dental & Maxillofacial Centre
 * Centralized Application & Clinical Configuration
 * 
 * Single Source of Truth for:
 * - Contact information (Phone, WhatsApp, Email, Emergency)
 * - Clinic Address, Geo coordinates, Directions URL
 * - Working hours & OPD Schedule
 * - CGHS Panel codes & accreditation
 */

const CLINIC_CONFIG = {
  name: "Shivam Dental & Maxillofacial Centre",
  shortName: "Shivam Dental",
  tagline: "Premier Multi-Specialty Dental & Maxillofacial Surgery Clinic",
  cghsStatus: "Empanelled on CGHS Panel (Central Government Health Scheme)",
  
  contact: {
    primaryPhone: "+91 98112 34567",
    primaryPhoneClean: "919811234567",
    emergencyPhone: "+91 98112 34567",
    whatsappNumber: "919811234567",
    email: "info@shivamdentalcentre.com",
  },

  location: {
    addressLine1: "C-1/23, Block C",
    area: "Yamuna Vihar",
    city: "Delhi",
    pincode: "110053",
    state: "Delhi",
    country: "India",
    landmark: "Opposite B-Block Market / Near MTNL Exchange",
    fullAddress: "C-1/23, Block C, Yamuna Vihar, Delhi 110053",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=shivam+ortho+%26+spine+care+center,+C-1/23,+Block+C,+Yamuna+Vihar,+Delhi,+110053",
    googleMapsEmbed: "https://maps.google.com/maps?q=shivam+ortho+%26+spine+care+center,+C-1/23,+Block+C,+Yamuna+Vihar,+Delhi,+110053&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      latitude: 28.6989,
      longitude: 77.2736
    }
  },

  timings: {
    weekdays: "10:00 AM - 8:00 PM (Monday to Saturday)",
    sunday: "10:00 AM - 2:00 PM",
    emergency: "24/7 Trauma & Maxillofacial Emergency Support Available",
    scheduleSummary: "Mon - Sat: 10:00 AM - 8:00 PM | Sun: 10:00 AM - 2:00 PM"
  },

  cghs: {
    isEmpanelled: true,
    schemeName: "Central Government Health Scheme (CGHS)",
    coverage: "OPD Dental, Conservative, Endodontic, Orthodontic & Maxillofacial Surgery",
    beneficiaries: ["Serving Central Govt Employees", "Pensioners", "Dependent Family Members", "Autonomous Bodies on CGHS"]
  },

  social: {
    whatsappDirect: "https://wa.me/919811234567?text=Hello%20Shivam%20Dental%20Centre,%20I%20would%20like%20to%20enquire%20about%20dental%20treatment",
    facebook: "#",
    instagram: "#",
    youtube: "#"
  }
};

// Freeze object to avoid accidental mutations at runtime
if (typeof Object.freeze === 'function') {
  Object.freeze(CLINIC_CONFIG);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
