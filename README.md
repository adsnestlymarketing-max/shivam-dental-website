# 🦷 Shivam Dental & Maxillofacial Centre — Enterprise Web Platform

> **Empanelled on CGHS Panel (Central Government Health Scheme)**  
> Premier Multi-Specialty Dental & Oral Maxillofacial Surgical Hospital  
> 📍 C-1/23, First Floor, Block C, Yamuna Vihar, Delhi 110053

---

## 🏛️ System Architecture Overview

This project has been engineered following **Clean Architecture** principles for modern, ultra-fast, high-converting static healthcare web applications. It eliminates build-step dependencies while maintaining enterprise modularity, zero layout shifts, strict SEO standards, and high-conversion lead funnels.

```
SHIVAM DENTAL AND MAXILLOFACIAL CENTRE/
│
├── index.html                  # Homepage (Hero, USP metrics, Doctors preview, Services, CGHS badge, FAQ)
├── about.html                  # About Us (Clinical philosophy, 4-tier sterilization, infrastructure)
├── doctors.html                # Team Directory (Full credential cards for 7 Senior MDS specialists)
├── services.html               # Treatments Catalogue (Endodontics, Orthodontics, Surgery, Implants, Pedodontics)
├── cghs-panel.html             # CGHS Empanelment Guide (Cashless flow, eligibility, documents, FAQ)
├── contact.html                # Contact & Booking Hub (Interactive form, Google Maps, emergency numbers)
│
├── assets/                     # Encapsulated Static Assets
│   ├── css/
│   │   └── style.css           # Design tokens, responsive grid, micro-animations, glassmorphic UI
│   ├── js/
│   │   ├── config.js           # Single source of truth (Phone, WhatsApp, Timings, Coordinates, CGHS codes)
│   │   └── main.js             # Modular application runtime (Off-canvas drawer, URL routing, toast notifications)
│   └── images/
│       └── doctors/            # High-resolution optimized doctor portraits
│           ├── dr-amit-raj.jpg
│           ├── dr-deepak-tomar.jpg
│           ├── dr-kunal-babbar.jpg
│           ├── dr-ram-gopal.jpg
│           ├── dr-sp-singh.jpg
│           ├── dr-sufana-singh.jpg
│           └── dr-tanvi-aggarwal.jpg
│
├── manifest.json               # Progressive Web App (PWA) manifest
├── robots.txt                  # Search engine crawl directives & sitemap location
├── sitemap.xml                 # XML Sitemap with page priorities & canonical URLs
├── .gitignore                  # Production Git ignore rules
└── README.md                   # System documentation & developer guide
```

---

## ⚙️ Architecture Highlights & Technical Decisions

### 1. Centralized Clinic Configuration (`assets/js/config.js`)
All critical business coordinates, telephone lines, WhatsApp endpoints, operational timings, and CGHS codes are abstracted into a single frozen immutable configuration layer (`CLINIC_CONFIG`). Changing a phone number or clinic timing in `config.js` instantly reflects across forms, lead triggers, and scripts without touching HTML markup.

### 2. Lead Generation & Smart Parameter Routing
- **Doctor / Service Context Passing**: Any *"Book Consultation"* click across `doctors.html` or `services.html` passes URL query parameters (`contact.html?doctor=Dr.+SP+Singh`) which are automatically resolved and selected in the booking form.
- **WhatsApp Webhook Bridge**: Form submissions sanitize inputs, format an instant clinical intake message, and open an encrypted WhatsApp chat channel directly with the reception desk.

### 3. Enterprise SEO & Rich Structured Snippets (JSON-LD)
- **Schema.org Standard**: Embedded `Dentist` and `MedicalBusiness` structured data with Geo-coordinates (`28.6989, 77.2736`), weekly opening hours, and accepted medical specialties for local Google Maps 3-Pack visibility.
- **Social Graph Optimization**: Complete Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags for rich card previews when links are shared on WhatsApp, Facebook, LinkedIn, or Twitter.
- **Full Search Indexing**: `robots.txt` and `sitemap.xml` with priority indices up to `1.0`.

### 4. Performance & Core Web Vitals (CWV)
- **Zero CLS (Cumulative Layout Shift)**: Aspect ratios and lazy-loading boundaries (`loading="lazy"`, `decoding="async"`) applied across all doctor portraits.
- **Passive Scroll Listeners**: Throttled using `requestAnimationFrame` for stutter-free 60fps navbar transitions and scroll elevation.
- **Security Hardening**: Strict `rel="noopener noreferrer"` attributes on all outgoing targets.

---

## 👨‍⚕️ Medical Specialist Team (7 Senior MDS)

| Specialist | Qualification | Department / Specialty |
| :--- | :--- | :--- |
| **Dr. Sufana Singh** | BDS | Chief Dental Surgeon & Clinical Director |
| **Dr. SP Singh** | BDS, MDS | Oral & Maxillofacial Surgery & Facial Trauma |
| **Dr. Deepak Tomar** | BDS, MDS | Endodontics (Painless Single-Sitting RCT) |
| **Dr. Kunal Babbar** | BDS, MDS | Orthodontics (Invisible Aligners & Braces) |
| **Dr. Ram Gopal** | BDS, MDS | Orthodontics & Dentofacial Orthopedics |
| **Dr. Amit Raj** | BDS, MDS | Prosthodontics, Dental Implants & Dentures |
| **Dr. Tanvi Aggarwal** | BDS, MDS | Pedodontics (Specialized Child Dental Care) |

---

## 🚀 Deployment & Web Server Configuration

### 1. Zero-Config Static Hosting (Netlify / Vercel / GitHub Pages)
- Simply point your deployment to the root directory. No compilation or `npm run build` is required.

### 2. Apache (`.htaccess` optional optimizations)
```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. Nginx Server Block
```nginx
server {
    listen 80;
    server_name shivamdentalcentre.com www.shivamdentalcentre.com;
    root /var/www/shivam-dental;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 🩺 Maintenance & Updating Guide

- **Changing Clinic Contact Numbers or Timings**: Edit `assets/js/config.js`.
- **Adding a New Doctor**: Add profile photo in `assets/images/doctors/`, append card in `doctors.html`, and add dropdown option in `contact.html`.
- **Modifying Color Palette or Brand Tokens**: Edit CSS custom properties `:root` at the top of `assets/css/style.css`.

---

© 2026 **Shivam Dental and Maxillofacial Centre**. All Rights Reserved.  
*Empanelled on CGHS Panel | Yamuna Vihar, Delhi 110053*
