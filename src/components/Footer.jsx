import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { ShieldCheck, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

// Crisp custom branded SVG Icons for YouTube, Instagram & WhatsApp
const YouTubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer({ setCurrentView, onOpenCGHS, onOpenEnquiry }) {
  const handleNav = (id) => {
    setCurrentView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { socialLinks } = clinicInfo;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid-4">
          {/* Col 1: Brand & Empanelment */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: '#386bf6',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.2rem'
              }}>
                +
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800 }}>
                Shivam Dental
              </h3>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Premier multi-specialty dental and oral maxillofacial surgery centre in Yamuna Vihar, Delhi. Trusted for over 20 years with 7 senior MDS specialists.
            </p>

            <div className="footer-cghs-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.86rem', marginBottom: '4px' }}>
                <ShieldCheck size={18} /> Empanelled on CGHS Panel
              </div>
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                Cashless & standardized approved rates for Central Government beneficiaries.
              </p>
            </div>

            {/* Social Media Links: YouTube, WhatsApp, Instagram */}
            <div className="footer-social-wrap" style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '10px' }}>
                Follow & Connect With Us:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* YouTube */}
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn social-youtube"
                  title="Watch on YouTube"
                  aria-label="YouTube Channel"
                >
                  <YouTubeIcon size={20} />
                </a>

                {/* WhatsApp */}
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn social-whatsapp"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsAppIcon size={19} />
                </a>

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn social-instagram"
                  title="Follow on Instagram"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: 5 Pages Navigation Links */}
          <div className="footer-col">
            <h4>Quick Pages</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>1. Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>2. About Us</a></li>
              <li><a href="#doctors" onClick={(e) => { e.preventDefault(); handleNav('doctors'); }}>3. Doctors (7 MDS)</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>4. Services & Specialties</a></li>
              <li><a href="#cghs" onClick={(e) => { e.preventDefault(); handleNav('cghs'); }}>5. CGHS Panel</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="footer-col">
            <h4>Specialties</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Oral & Maxillofacial Surgery</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Painless Root Canal (RCT)</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Dental Implants & Fixed Teeth</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Clear Aligners & Braces</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Laser Gum Treatment</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Pediatric Kids Dentistry</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Enquiry */}
          <div className="footer-col">
            <h4>Clinic Contacts</h4>
            <ul className="footer-links-list" style={{ gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: '#386bf6', flexShrink: 0, marginTop: '3px' }} />
                <span>{clinicInfo.address}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: '#386bf6', flexShrink: 0 }} />
                <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}>{clinicInfo.phone}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <WhatsAppIcon size={18} />
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e', fontWeight: 600, marginLeft: '6px' }}>WhatsApp Enquiry</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} style={{ color: '#386bf6', flexShrink: 0 }} />
                <span>{clinicInfo.hoursWeekday}</span>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="btn btn-primary btn-sm btn-block"
                  style={{ marginTop: '8px' }}
                >
                  <Send size={14} /> Send Quick Enquiry
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {clinicInfo.name}. All Rights Reserved.
          </div>

          {/* Footer Social & Policy Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ef4444' }}>
              <YouTubeIcon size={16} /> YouTube
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#22c55e' }}>
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ec4899' }}>
              <InstagramIcon size={16} /> Instagram
            </a>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
