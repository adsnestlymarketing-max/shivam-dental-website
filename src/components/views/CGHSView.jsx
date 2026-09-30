import React from 'react';
import { clinicInfo } from '../../data/clinicData';
import { ShieldCheck, CheckCircle2, FileText, Phone, MessageSquare, Award, ArrowRight, UserCheck } from 'lucide-react';

export default function CGHSView({ onOpenEnquiry }) {
  return (
    <div className="section-padding bg-offwhite">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-tag badge-cghs" style={{ marginBottom: '10px' }}>
            <ShieldCheck size={14} /> Official Government Panel Empanelment
          </span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            CGHS Empanelled Dental & Maxillofacial Centre
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b', fontSize: '1.05rem' }}>
            Dedicated high-standard oral surgery and dental care for Central Government employees, pensioners, and eligible dependents in Yamuna Vihar, Delhi.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="insurance-grid" style={{ marginBottom: '50px' }}>
          <div className="panel-card-stack-bg" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '16px' }}>
              CGHS Panel Overview & Coverage
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.65', marginBottom: '24px' }}>
              <strong>Shivam Dental & Maxillofacial Centre</strong> strictly complies with all official CGHS guidelines and rate schedules. Our centre is equipped for both non-surgical routine dental care and complex oral maxillofacial surgical admissions.
            </p>

            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '12px',
              padding: '18px',
              marginBottom: '20px'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#065f46', marginBottom: '10px' }}>
                ⭐ Key Benefits for CGHS Beneficiaries:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#047857' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> <span>100% adherence to standard CGHS approved rate list</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> <span>Direct treatment by Senior MDS Surgeons & Endodontists</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> <span>Assistance with referral slips, permission letters & bill formats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> <span>Priority desk for senior citizen pensioners</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-block btn-lg"
            >
              Send CGHS Enquiry
            </button>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '16px' }}>
              Required Documents Checklist
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '26px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '38px', height: '38px', background: '#ecfdf5', color: '#059669' }}>
                  <FileText size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0d1b3e' }}>1. Valid CGHS Card</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Original Plastic Card / Downloaded DigiLocker E-Card of patient.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '38px', height: '38px', background: '#ecfdf5', color: '#059669' }}>
                  <UserCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0d1b3e' }}>2. Doctor Referral Slip</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Referral from CGHS Wellness Centre Medical Officer (for specialized surgery).</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '38px', height: '38px', background: '#ecfdf5', color: '#059669' }}>
                  <Award size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0d1b3e' }}>3. Government Photo ID</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Aadhaar card or Pensioner identity document photocopy.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="btn btn-outline btn-block btn-sm"
              >
                <Phone size={16} /> Call CGHS Desk ({clinicInfo.phone})
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
