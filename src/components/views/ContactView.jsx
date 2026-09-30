import React, { useState } from 'react';
import { clinicInfo } from '../../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function ContactView({ onOpenAppointment }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', panel: 'general' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="section-padding bg-offwhite">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-tag" style={{ marginBottom: '10px' }}>Reach Our Centre</span>
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            Contact & Clinic Location
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#64748b', fontSize: '1rem' }}>
            Located conveniently in Yamuna Vihar, Delhi. Walk-ins and pre-booked appointments welcome.
          </p>
        </div>

        <div className="insurance-grid">
          {/* Left Contact Info & Map Card */}
          <div className="panel-card-stack-bg" style={{ padding: '34px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '20px' }}>
              Clinic Address & Coordinates
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '42px', height: '42px' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b3e', marginBottom: '3px' }}>Location</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>{clinicInfo.address}</p>
                  <span style={{ fontSize: '0.8rem', color: '#386bf6', fontWeight: 600 }}>{clinicInfo.landmark}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '42px', height: '42px' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b3e', marginBottom: '3px' }}>Phone & WhatsApp</h4>
                  <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.9rem', color: '#386bf6', fontWeight: 700, display: 'block' }}>
                    {clinicInfo.phone}
                  </a>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Emergency / CGHS Desk: {clinicInfo.altPhone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div className="info-col-icon" style={{ width: '42px', height: '42px' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b3e', marginBottom: '3px' }}>Working Timings</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>{clinicInfo.hoursWeekday}</p>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>{clinicInfo.hoursSunday}</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={clinicInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-block btn-sm"
              >
                <Navigation size={16} /> Get Driving Directions (Google Maps)
              </a>
            </div>
          </div>

          {/* Right Contact Enquiry Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '10px' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '24px' }}>
              Have a question about treatment costs, doctor availability or CGHS approvals? Fill this quick form:
            </p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={46} color="#059669" style={{ margin: '0 auto 14px' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '6px' }}>Message Received!</h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '20px' }}>
                  Thank you for reaching out. Our clinical coordinator will respond shortly on your phone number.
                </p>
                <button onClick={() => setSent(false)} className="btn btn-outline btn-sm">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Anjali Gupta"
                    className="form-input"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98112 34567"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      value={form.panel}
                      onChange={(e) => setForm({ ...form, panel: e.target.value })}
                      className="form-select"
                    >
                      <option value="general">General Patient</option>
                      <option value="cghs">CGHS Cardholder</option>
                      <option value="insurance">Private Insurance</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Requirement</label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Please explain your question or required treatment..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  <Send size={18} /> Send Instant Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
