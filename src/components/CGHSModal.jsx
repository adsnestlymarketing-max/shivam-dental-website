import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { X, ShieldCheck, CheckCircle2, FileText, Phone, Calendar } from 'lucide-react';

export default function CGHSModal({ isOpen, onClose, onBookAppointment }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
        <div className="modal-header" style={{ background: '#f0fdf4', borderBottom: '1px solid #bbf7d0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#064e3b' }}>CGHS Panel Empanelment Guide</h3>
              <p style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>Authorized Central Government Dental & Maxillofacial Centre</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Welcome CGHS Beneficiaries & Pensioners
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              <strong>Shivam Dental and Maxillofacial Centre</strong> in Yamuna Vihar, Delhi is officially empanelled under the Central Government Health Scheme (CGHS). We provide premier specialist dental care following all standard approved CGHS rate lists.
            </p>
          </div>

          <div style={{
            background: '#f8faff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '20px'
          }}>
            <h5 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1e293b', marginBottom: '10px' }}>
              📋 Mandatory Documents to Bring:
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Original CGHS Plastic Card / Valid E-Card of patient</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Valid Government Doctor Referral Slip (if applicable for specialized procedures)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Aadhaar Card / Government Photo ID</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Pensioner / Serving Employee ID photocopy</span>
              </div>
            </div>
          </div>

          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '10px',
            padding: '14px',
            marginBottom: '24px'
          }}>
            <div style={{ fontWeight: 800, color: '#065f46', fontSize: '0.88rem', marginBottom: '4px' }}>
              🎯 Direct Front Desk Assistance:
            </div>
            <p style={{ fontSize: '0.82rem', color: '#047857', lineHeight: '1.5' }}>
              Our front desk helps you prepare accurate itemized diagnosis bills, stamped clinical summaries, and pre/post treatment digital X-rays to ensure 100% smooth reimbursement or direct authorization.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onBookAppointment(null, null);
              }}
              className="btn btn-primary btn-block btn-lg"
              style={{ background: '#059669' }}
            >
              <Calendar size={18} /> Book CGHS Consultation Slot
            </button>
            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="btn btn-outline"
            >
              <Phone size={18} /> Call Front Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
