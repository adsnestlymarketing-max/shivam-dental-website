import React, { useState } from 'react';
import { doctorsList } from '../../data/clinicData';
import { Send, Stethoscope, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function DoctorsView({ onSelectDoctor, onEnquireDoctor }) {
  const [selectedDept, setSelectedDept] = useState('all');

  const departments = [
    { id: 'all', label: 'All Specialists' },
    { id: 'surgery', label: 'Maxillofacial Surgery', match: 'Oral & Maxillofacial Surgery' },
    { id: 'general', label: 'Aesthetic & General', match: 'General & Aesthetic Dentistry' },
    { id: 'ortho', label: 'Orthodontics & Braces', match: 'Orthodontics & Braces' },
    { id: 'rct', label: 'Root Canal Specialists', match: 'Root Canal & Conservative Dentistry' },
    { id: 'prostho', label: 'Implants & Prosthetics', match: 'Dental Implants & Prosthetics' },
    { id: 'kids', label: 'Pediatric Dentistry', match: 'Pediatric Dentistry' }
  ];

  const filteredDoctors = selectedDept === 'all'
    ? doctorsList
    : doctorsList.filter(d => {
        const dept = departments.find(x => x.id === selectedDept);
        return d.department === dept?.match;
      });

  return (
    <div className="section-padding bg-offwhite">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-tag" style={{ marginBottom: '10px' }}>Medical Team</span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            Meet Our 7 Senior MDS Specialists
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#64748b', fontSize: '1rem' }}>
            Distinguished team of specialized dental and maxillofacial surgeons offering comprehensive oral care under one roof.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`filter-pill-btn ${selectedDept === dept.id ? 'active' : ''}`}
              style={{
                background: selectedDept === dept.id ? '#386bf6' : '#ffffff',
                color: selectedDept === dept.id ? '#ffffff' : '#1e293b',
                border: '1px solid #e2e8f0'
              }}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="doctors-cards-grid">
          {filteredDoctors.map(doc => (
            <div key={doc.id} className="doc-card-modern">
              <div className="doc-avatar-circle-wrap">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="doc-avatar-img"
                  onError={(e) => { e.target.src = '/images/hero-doctor.jpg'; }}
                />
              </div>

              <h3 className="doc-name-heading">{doc.name}</h3>
              <div className="doc-spec-badge">{doc.department}</div>
              <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700, marginBottom: '8px' }}>
                🎓 {doc.qualification}
              </div>

              <p className="doc-bio-text">
                {doc.bio}
              </p>

              <div style={{ display: 'flex', gap: '10px', width: '100%', marginTop: 'auto' }}>
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  Full Bio
                </button>
                <button
                  onClick={() => onEnquireDoctor(doc)}
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
