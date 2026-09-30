import React, { useState } from 'react';
import { servicesList } from '../../data/clinicData';
import { Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServicesView({ onSelectService, onEnquireService, initialCategory }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'surgery', label: 'Maxillofacial Surgery' },
    { id: 'endodontics', label: 'Root Canal (RCT)' },
    { id: 'prostho', label: 'Dental Implants' },
    { id: 'ortho', label: 'Braces & Aligners' },
    { id: 'cghs', label: 'CGHS Panel Covered' },
    { id: 'kids', label: 'Pediatric Care' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : activeCategory === 'cghs'
      ? servicesList.filter(s => s.cghsCovered)
      : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-tag" style={{ marginBottom: '10px' }}>Specialized Treatments</span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            Comprehensive Dental & Maxillofacial Care
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#64748b', fontSize: '1rem' }}>
            From routine checkups and invisible aligners to complex maxillofacial bone trauma reconstructions.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              style={{
                background: activeCategory === cat.id ? '#386bf6' : '#f8faff',
                color: activeCategory === cat.id ? '#ffffff' : '#1e293b',
                border: '1px solid #e2e8f0'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card-item"
              onClick={() => onSelectService(service)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="service-icon-box">
                    <Sparkles size={24} />
                  </div>
                  {service.cghsCovered && (
                    <span className="badge-tag badge-cghs">
                      <ShieldCheck size={12} /> CGHS
                    </span>
                  )}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.summary}</p>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); onSelectService(service); }}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  Details
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onEnquireService(service); }}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Send size={14} /> Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
