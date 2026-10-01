import React from 'react';
import { clinicInfo, quickFilters } from '../data/clinicData';
import { Mail, MapPin, Clock, Activity, Heart, Shield, Dna, ArrowRight, Send } from 'lucide-react';

export default function Hero({ onOpenEnquiry, onSelectFilter, activeFilter }) {
  return (
    <section className="hero-wrap" id="home">
      <div className="container">
        {/* Upper Hero Grid */}
        <div className="hero-grid">
          {/* Left Text */}
          <div className="hero-left-content">
            <div className="hero-cghs-badge">
              <Shield size={14} color="#386bf6" />
              <span>On CGHS Panel • 7 Senior MDS Specialists</span>
            </div>

            <h1 className="hero-heading">
              Complete Dental & Maxillofacial Care for Your Perfect Smile
            </h1>
            <p className="hero-subtext">
              Experience advanced painless root canals, invisible clear aligners, dental implants and expert oral maxillofacial surgery — delivered with gentle care in Yamuna Vihar, Delhi.
            </p>

            <div className="hero-btn-row">
              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary btn-pill btn-lg"
              >
                <Send size={18} />
                <span>Send Quick Enquiry</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Doctor Graphic in Blue Aura with Orbiting Badges */}
          <div className="hero-right-visual">
            <div className="hero-blue-blob">
              <img
                src="/images/hero-doctor.jpg"
                alt="Shivam Dental Expert Doctor"
                className="hero-doctor-img"
              />

              {/* Orbiting medical icon badges */}
              <div className="orbit-icon orbit-1" title="Cardiac & Vital Monitoring">
                <Heart size={20} />
              </div>
              <div className="orbit-icon orbit-2" title="Sterilization & Infection Shield">
                <Shield size={20} />
              </div>
              <div className="orbit-icon orbit-3" title="Advanced Diagnostic Biology">
                <Dna size={20} />
              </div>
              <div className="orbit-icon orbit-4" title="Microscopic Precision">
                <Activity size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Info Box Card Overlapping Hero Bottom */}
        <div className="hero-floating-card-wrap">
          <div className="hero-floating-card">
            {/* 3 Columns Information */}
            <div className="info-cards-grid">
              {/* Col 1: Contact */}
              <div className="info-col-item">
                <div className="info-col-icon">
                  <Mail size={24} />
                </div>
                <div className="info-col-content">
                  <h4>Contact us</h4>
                  <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="info-col-link">
                    {clinicInfo.phone}
                  </a>
                  <p>{clinicInfo.email}</p>
                </div>
              </div>

              {/* Col 2: Location */}
              <div className="info-col-item">
                <div className="info-col-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-col-content">
                  <h4>Location</h4>
                  <p>{clinicInfo.address}</p>
                </div>
              </div>

              {/* Col 3: Open Hours */}
              <div className="info-col-item">
                <div className="info-col-icon">
                  <Clock size={24} />
                </div>
                <div className="info-col-content">
                  <h4>Oper hours</h4>
                  <p>{clinicInfo.hoursWeekday}</p>
                  <p>{clinicInfo.hoursSunday}</p>
                </div>
              </div>
            </div>

            {/* Blue Attached Sub-Bar with Quick Filter Pills */}
            <div className="looking-for-bar">
              <div className="looking-for-title">You may be looking for:</div>
              <div className="pill-filters-row">
                {quickFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => onSelectFilter(filter.id)}
                    className={`filter-pill-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
