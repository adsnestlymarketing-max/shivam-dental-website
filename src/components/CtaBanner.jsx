import React from 'react';
import { clinicInfo } from '../data/clinicData';
import { Send, Phone, ArrowRight, MessageSquare } from 'lucide-react';

export default function CtaBanner({ onOpenEnquiry }) {
  return (
    <section className="cta-section-wrap" id="cta">
      <div className="container">
        {/* Top Review Rating */}
        <div className="cta-top-review-badge">
          <span>Rated 4.9/5 from over {clinicInfo.reviewsCount} reviews.</span>
          <span className="stars-gold">★★★★★</span>
        </div>

        {/* Center Main CTA */}
        <div className="cta-main-center">
          <h2 className="cta-title">
            Have a Question? Send an Enquiry Now
          </h2>

          <p className="cta-subtext">
            Get prompt answers from our senior dental surgeons and CGHS desk coordinators.
          </p>

          <button
            onClick={onOpenEnquiry}
            className="btn btn-primary btn-pill btn-lg cta-btn-schedule"
          >
            <Send size={18} />
            <span>Send Quick Enquiry</span>
          </button>

          <p className="cta-bottom-note">
            Feel free to <a href="#enquiry" onClick={(e) => { e.preventDefault(); onOpenEnquiry(); }}>contact us</a> if you have any questions
          </p>
        </div>

        {/* Deep Blue Bottom Banner Ribbon */}
        <div className="cta-bottom-banner-ribbon">
          <div className="ribbon-left">
            <h3>Get in Touch With Our Specialists</h3>
            <p>
              Direct CGHS empanelment assistance and expert consultation with 7 senior MDS specialists. Send your enquiry today.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenEnquiry}
              className="btn ribbon-btn"
            >
              <Send size={16} />
              <span>Send Enquiry</span>
            </button>
            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="btn"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <Phone size={16} /> Call {clinicInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
