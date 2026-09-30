import React, { useState } from 'react';
import { clinicInfo, doctorsList, servicesList } from '../data/clinicData';
import { X, CheckCircle2, Calendar, Clock, User, Phone, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentModal({ isOpen, onClose, preselectedDoctor, preselectedService }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM - 12:00 PM',
    doctorId: preselectedDoctor?.id || 'dr-sp-singh',
    serviceId: preselectedService?.id || 'maxillofacial',
    isCGHS: false,
    cghsCardNo: '',
    notes: ''
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

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM'
  ];

  const handleWhatsAppDirect = () => {
    const doc = doctorsList.find(d => d.id === formData.doctorId);
    const srv = servicesList.find(s => s.id === formData.serviceId);
    const msg = `*Appointment Request - Shivam Dental Centre*%0A` +
      `*Patient Name:* ${formData.patientName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Doctor:* ${doc?.name || 'Any Doctor'}%0A` +
      `*Treatment:* ${srv?.title || 'General Consultation'}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Time Slot:* ${formData.timeSlot}%0A` +
      `*CGHS Beneficiary:* ${formData.isCGHS ? 'Yes (Card: ' + formData.cghsCardNo + ')' : 'No'}`;
    window.open(`https://wa.me/919811234567?text=${msg}`, '_blank');
  };

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
              <Calendar size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Book an Appointment</h3>
              <p style={{ fontSize: '0.78rem', color: '#64748b' }}>Shivam Dental & Maxillofacial Centre (CGHS Panel)</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 24px rgba(5, 150, 105, 0.2)'
              }}>
                <CheckCircle2 size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d1b3e', marginBottom: '8px' }}>
                Appointment Confirmed!
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.patientName}</strong>! We have reserved your consultation for <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>. Our front desk team will verify details.
              </p>

              <div style={{
                background: '#f8faff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '24px',
                fontSize: '0.88rem'
              }}>
                <div style={{ marginBottom: '6px' }}><strong>📍 Location:</strong> {clinicInfo.address}</div>
                <div style={{ marginBottom: '6px' }}><strong>📞 Helpline:</strong> {clinicInfo.phone}</div>
                {formData.isCGHS && (
                  <div style={{ color: '#059669', fontWeight: 700 }}>
                    🛡️ Please carry your original CGHS plastic card & referral slip.
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button onClick={handleWhatsAppDirect} className="btn btn-primary btn-sm">
                  <MessageSquare size={16} /> Open in WhatsApp
                </button>
                <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-outline btn-sm">
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Patient Full Name *</label>
                  <input
                    type="text"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98112 34567"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Select Specialist Doctor</label>
                  <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} - {doc.role}
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
                    {servicesList.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Slot *</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CGHS Checkbox Option */}
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '14px 16px',
                marginBottom: '18px'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 700, color: '#166534', fontSize: '0.9rem' }}>
                  <input
                    type="checkbox"
                    name="isCGHS"
                    checked={formData.isCGHS}
                    onChange={handleChange}
                    style={{ width: '18px', height: '18px', accentColor: '#16a34a' }}
                  />
                  <span>I am a CGHS Beneficiary (Central Govt / Pensioner)</span>
                </label>

                {formData.isCGHS && (
                  <div style={{ marginTop: '12px' }}>
                    <input
                      type="text"
                      name="cghsCardNo"
                      value={formData.cghsCardNo}
                      onChange={handleChange}
                      placeholder="Enter CGHS Beneficiary ID / Card No. (Optional)"
                      className="form-input"
                      style={{ background: '#ffffff' }}
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Additional Symptoms / Notes (Optional)</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Describe any pain, dental history, or question..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  <CheckCircle2 size={18} /> Confirm & Reserve Slot
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
