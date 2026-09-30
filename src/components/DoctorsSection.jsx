import React from 'react';
import { doctorsList } from '../data/clinicData';
import { ArrowRight, Send } from 'lucide-react';

export default function DoctorsSection({ onSelectDoctor, onViewAllDoctors, onEnquireDoctor }) {
  const displayDoctors = doctorsList.slice(0, 3);

  return (
    <section className="section-padding bg-sky" id="doctors">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Meet Our Doctors</h2>
          <div className="title-underline" style={{ margin: '10px auto 0' }}></div>
        </div>

        {/* 3-Column Doctor Cards with Circular Avatars */}
        <div className="doctors-cards-grid">
          {displayDoctors.map((doc) => (
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

              <p className="doc-bio-text">
                {doc.bio}
              </p>

              <div style={{ display: 'flex', gap: '10px', width: '100%', marginTop: 'auto' }}>
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  View Profile
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

        {/* View All Doctors Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={onViewAllDoctors}
            className="btn btn-outline btn-pill"
          >
            <span>View all Doctors</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
