import React, { useState, useEffect } from 'react';
import { clinicInfo } from '../data/clinicData';
import { Phone, ShieldCheck, Clock, MapPin, Menu, X, ChevronDown, Send, MessageSquare } from 'lucide-react';

export default function Header({ onOpenEnquiry, currentView, setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 5 clean pages as requested
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'services', label: 'Services' },
    { id: 'cghs', label: 'CGHS Panel' }
  ];

  const handleNavClick = (id) => {
    setMobileOpen(false);
    setCurrentView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <aside className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-cghs-pill" onClick={() => handleNavClick('cghs')} style={{ cursor: 'pointer' }}>
              <ShieldCheck size={14} /> On CGHS Panel Empanelled
            </span>
            <span className="top-link">
              <Clock size={14} /> {clinicInfo.hoursWeekday}
            </span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="top-link">
              <Phone size={14} /> {clinicInfo.phone}
            </a>
            <a href={clinicInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="top-link top-whatsapp">
              <MessageSquare size={14} /> WhatsApp
            </a>
            <a href={clinicInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="top-link">
              <MapPin size={14} /> Yamuna Vihar, Delhi
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="brand-logo">
            <div className="logo-symbol">
              <span>+</span>
            </div>
            <div className="brand-text">
              <span className="brand-main">Doctorology</span>
              <span className="brand-sub">SHIVAM DENTAL & MAXILLOFACIAL</span>
            </div>
          </a>

          {/* Desktop Navigation Links - Exactly 5 Pages */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link-item ${currentView === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <ChevronDown size={13} className="nav-chevron" />
              </button>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="header-right-actions">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-sm btn-pill"
            >
              <Send size={15} />
              <span>Send Enquiry</span>
            </button>

            <button
              className="mobile-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-btn ${currentView === item.id ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.id === 'cghs' && <span className="top-cghs-pill">CGHS</span>}
                </button>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onOpenEnquiry(); }}
                className="btn btn-primary btn-block"
                style={{ marginTop: '8px' }}
              >
                <Send size={16} /> Send Quick Enquiry
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
