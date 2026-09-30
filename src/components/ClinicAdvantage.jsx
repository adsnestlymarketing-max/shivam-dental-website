import React from 'react';
import { Sparkles, CheckCircle, ArrowRight, Send } from 'lucide-react';

export default function ClinicAdvantage({ onMeetStaff, onOpenEnquiry }) {
  return (
    <section className="section-padding bg-white" id="advantage">
      <div className="container">
        <div className="advantage-grid">
          {/* Left Text */}
          <div className="advantage-left-content">
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-blue)',
              marginBottom: '16px'
            }}>
              <Sparkles size={24} />
            </div>

            <h2 className="section-title">
              With Shivam Dental Your Doctor it's a click Away
            </h2>

            <p className="section-desc">
              Experience prompt response to dental inquiries, digital diagnostics, and gentle treatment protocols tailored to your family's lifelong dental wellness.
            </p>

            <div className="checklist-wrap">
              <div className="check-item">
                <CheckCircle size={20} />
                <span>Always there to care for You</span>
              </div>
              <div className="check-item">
                <CheckCircle size={20} />
                <span>Count on our care & 7 Senior MDS Specialists</span>
              </div>
              <div className="check-item">
                <CheckCircle size={20} />
                <span>100% Strict Sterilization & Painless Rotary Tech</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onMeetStaff}
                className="btn btn-outline btn-pill"
              >
                <span>Meet Our Staff</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary btn-pill"
              >
                <Send size={15} />
                <span>Send Quick Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Doctor Image with Floating Donut Analytics Card */}
          <div className="advantage-visual-wrap">
            <div className="advantage-photo-box">
              <img
                src="/images/feature-doctor.jpg"
                alt="Shivam Dental Specialist Clinician"
              />

              {/* Floating Concentric Rings & Numbers Badge */}
              <div className="stats-donut-float">
                <div className="donut-graphic">
                  <span>99%</span>
                </div>
                <div className="donut-data-col">
                  <span>28,472 Consults</span>
                  <span>18,552 Surgeries</span>
                  <span>31,346 Happy Smiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
