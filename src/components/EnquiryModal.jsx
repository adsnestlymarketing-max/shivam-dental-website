import React, { useState } from 'react';
import { clinicInfo, doctorsList, servicesList } from '../data/clinicData';
import { X, Send, CheckCircle2, MessageSquare, Phone, ShieldCheck, Mail, User, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryModal({ isOpen, onClose, preselectedDoctor, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctorId: preselectedDoctor?.id || '',
    serviceId: preselectedService?.id || '',
    isCGHS: false,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const doc = doctorsList.find(d => d.id === formData.doctorId);
    const srv = servicesList.find(s => s.id === formData.serviceId);
    const text = `*New Clinic Enquiry - Shivam Dental Centre*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      (formData.email ? `*Email:* ${formData.email}%0A` : '') +
      (doc ? `*Doctor:* ${doc.name} (${doc.role})%0A` : '') +
      (srv ? `*Service:* ${srv.title}%0A` : '') +
      `*CGHS Cardholder:* ${formData.isCGHS ? 'Yes' : 'No'}%0A` +
      `*Message:* ${formData.message || 'I would like to get information regarding treatment.'}`;
    window.open(`https://wa.me/918527080186?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: '#eef5ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#386bf6'
            }}>
              <Send size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Send Quick Enquiry</h3>
              <p style={{ fontSize: '0.78rem', color: '#64748b' }}>Shivam Dental & Maxillofacial Centre (CGHS Panel)</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 8px 20px rgba(5, 150, 105, 0.15)'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '8px' }}>
                Enquiry Sent Successfully!
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '22px', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.name}</strong>. Our front desk medical team will call you back shortly at <strong>{formData.phone}</strong>.
              </p>

              <div style={{
                background: '#f8faff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '22px',
                fontSize: '0.86rem'
              }}>
                <div style={{ marginBottom: '6px' }}><strong>📍 Address:</strong> {clinicInfo.address}</div>
                <div style={{ marginBottom: '6px' }}><strong>📞 Helpline:</strong> {clinicInfo.phone}</div>
                <div><strong>🕒 Timings:</strong> {clinicInfo.hoursWeekday}</div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button onClick={handleWhatsAppSend} className="btn btn-primary btn-sm">
                  <MessageSquare size={16} /> Send via WhatsApp
                </button>
                <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-outline btn-sm">
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 08527080186"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Doctor (Optional)</label>
                  <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Any Specialist Doctor --</option>
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.role})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Treatment / Service</label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- General Dental Enquiry --</option>
                    {servicesList.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CGHS Checkbox Option */}
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '16px'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 700, color: '#166534', fontSize: '0.86rem' }}>
                  <input
                    type="checkbox"
                    name="isCGHS"
                    checked={formData.isCGHS}
                    onChange={handleChange}
                    style={{ width: '16px', height: '16px', accentColor: '#16a34a' }}
                  />
                  <span>I am a CGHS Beneficiary (Central Govt Employee / Pensioner)</span>
                </label>
              </div>

              <div className="form-group">
                <label className="form-label">Your Question / Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about treatment procedures, costs, timings, or CGHS approvals..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  <Send size={18} /> Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
