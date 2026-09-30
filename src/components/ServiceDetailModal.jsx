import React from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onEnquireService }) {
  if (!isOpen || !service) return null;

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
              <Sparkles size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{service.title}</h3>
              <span className="badge-tag">{service.tag}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: '1.6', marginBottom: '20px' }}>
            {service.summary}
          </p>

          <div style={{
            background: '#f8faff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '18px',
            marginBottom: '20px'
          }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              What is Included in this Treatment:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {service.details?.map((detail, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                  <CheckCircle2 size={16} color="#386bf6" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {service.cghsCovered && (
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#065f46',
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '20px'
            }}>
              <ShieldCheck size={20} color="#059669" />
              <span>Covered under official CGHS panel rate schedule!</span>
            </div>
          )}

          <button
            onClick={() => {
              onClose();
              onEnquireService(service);
            }}
            className="btn btn-primary btn-block btn-lg"
          >
            <Send size={18} /> Enquire About {service.title}
          </button>
        </div>
      </div>
    </div>
  );
}
