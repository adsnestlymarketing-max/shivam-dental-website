import React from 'react';
import { clinicInfo } from '../../data/clinicData';
import { ShieldCheck, Award, Users, CheckCircle2, MapPin, Phone, Send } from 'lucide-react';

export default function AboutView({ onOpenEnquiry, onOpenCGHS }) {
  return (
    <div className="section-padding bg-offwhite">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-tag" style={{ marginBottom: '10px' }}>About Shivam Dental</span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            20+ Years of Dental & Maxillofacial Excellence
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b', fontSize: '1.05rem' }}>
            Delivering advanced oral healthcare and maxillofacial surgical solutions with 7 senior MDS specialists under one roof in Yamuna Vihar, Delhi.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="insurance-grid" style={{ marginBottom: '60px' }}>
          <div className="advantage-visual-wrap">
            <div className="advantage-photo-box" style={{ width: '100%', height: '420px' }}>
              <img src="/images/feature-doctor.jpg" alt="Shivam Dental Team" />
            </div>
          </div>

          <div>
            <div className="section-icon-badge">
              <Award size={24} />
            </div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Committed to Patient Comfort, Ethics & Precision
            </h2>
            <p className="section-desc">
              Founded with the vision to provide painless, world-class dental care, Shivam Dental and Maxillofacial Centre is equipped with computerized apex locators, rotary endodontic systems, high-definition digital radiography, and dedicated surgical operatory for maxillofacial trauma and impactions.
            </p>

            <div className="checklist-wrap">
              <div className="check-item">
                <CheckCircle2 size={20} color="#386bf6" />
                <span>Empanelled on Official CGHS Panel for Central Govt Employees</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} color="#386bf6" />
                <span>Team of 7 Senior MDS Specialists with 10-20+ Years Experience</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} color="#386bf6" />
                <span>Strict 6-Step Autoclave Sterilization & Bio-Safe Protocols</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} color="#386bf6" />
                <span>Fully Air-Conditioned Modern Operatories & Friendly Reception</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
              <button onClick={onOpenEnquiry} className="btn btn-primary btn-pill">
                <Send size={15} /> Send Quick Enquiry
              </button>
              <button onClick={onOpenCGHS} className="btn btn-outline btn-pill">
                CGHS Panel Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
