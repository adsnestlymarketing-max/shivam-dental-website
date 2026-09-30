import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileText, ArrowRight, Send } from 'lucide-react';

export default function AcceptedInsurances({ onOpenCGHS, onOpenEnquiry }) {
  return (
    <section className="section-padding bg-offwhite" id="insurances">
      <div className="container">
        <div className="insurance-grid">
          {/* Left Floating Stacked Cards */}
          <div className="insurance-left-cards">
            <div className="panel-card-stack-bg">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px' }}>
                <span style={{ fontWeight: 800, color: '#0d1b3e', fontSize: '1.1rem' }}>Panel Network</span>
                <span className="badge-tag badge-cghs">Active 2026</span>
              </div>

              <div className="panel-logos-row">
                <div className="panel-item-box">
                  <ShieldCheck size={20} />
                  <span>CGHS Panel</span>
                </div>
                <div className="panel-item-box">
                  <Award size={20} />
                  <span>ECHS Scheme</span>
                </div>
                <div className="panel-item-box">
                  <FileText size={20} />
                  <span>Delhi Govt</span>
                </div>
                <div className="panel-item-box">
                  <CheckCircle2 size={20} />
                  <span>PSU / TPA</span>
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: '#64748b' }}>
                Official rates & verified documentation support for all Central & State government beneficiaries.
              </p>
            </div>

            {/* Overlapping Float Card */}
            <div className="panel-float-card">
              <div className="float-card-header">
                <span className="float-card-title">MODUS.02</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }}></span>
                  <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }}></span>
                  <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }}></span>
                </div>
              </div>

              <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', width: '80%', marginBottom: '8px' }}></div>
              <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', width: '60%', marginBottom: '16px' }}></div>

              <div className="verified-badge-pill">
                <CheckCircle2 size={16} /> Verified Authorization
              </div>

              <button
                onClick={onOpenCGHS}
                className="btn btn-primary btn-block btn-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="insurance-right-content">
            <div className="section-icon-badge">
              <ShieldCheck size={24} />
            </div>

            <h2 className="section-title">
              List of Accepted Insurances in our Clinic
            </h2>

            <p className="section-desc">
              Shivam Dental and Maxillofacial Centre is officially empanelled under the CGHS scheme and accepts all major government health programs and private dental claim insurances.
            </p>

            <div className="insurance-features-columns">
              <div className="ins-feat-item">
                <h4>Bridge To Medicare & CGHS</h4>
                <p>
                  Specialized rates for consultations, painless root canals, maxillofacial surgery, and dentures for pensioners.
                </p>
              </div>

              <div className="ins-feat-item">
                <h4>Collectible Insurance & TPA</h4>
                <p>
                  Comprehensive assistance with itemized billing, pre-authorization, and claim reimbursement forms.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenCGHS} className="btn btn-primary btn-pill">
                <span>View CGHS Panel Page</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={onOpenEnquiry} className="btn btn-outline-dark btn-pill">
                <Send size={15} />
                <span>Send Panel Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
