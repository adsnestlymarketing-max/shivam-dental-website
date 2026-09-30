import React from 'react';
import { X, Send, CheckCircle2, Award, Stethoscope, GraduationCap } from 'lucide-react';

export default function DoctorDetailModal({ doctor, isOpen, onClose, onEnquireDoctor }) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#eef5ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#386bf6'
            }}>
              <Stethoscope size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{doctor.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#386bf6', fontWeight: 700 }}>{doctor.role}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
            <img
              src={doctor.image}
              alt={doctor.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #386bf6',
                boxShadow: '0 6px 16px rgba(56,107,246,0.2)'
              }}
              onError={(e) => { e.target.src = '/images/hero-doctor.jpg'; }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#1e293b', fontWeight: 700, marginBottom: '4px' }}>
                <GraduationCap size={16} color="#386bf6" /> {doctor.qualification}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: '#059669', fontWeight: 700, marginBottom: '6px' }}>
                <Award size={16} color="#059669" /> {doctor.experience}
              </div>
              <span className="badge-tag">{doctor.highlight}</span>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Specialist Profile & Expertise</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              {doctor.bio}
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>Key Clinical Treatments:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {doctor.specialties?.map((spec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#386bf6" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onEnquireDoctor(doctor);
              }}
              className="btn btn-primary btn-block btn-lg"
            >
              <Send size={18} /> Send Enquiry for {doctor.name.split(' ')[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
