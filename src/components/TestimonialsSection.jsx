import React from 'react';
import { testimonialsList } from '../data/clinicData';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-offwhite" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Customers About Us</h2>
          <div className="title-underline" style={{ margin: '10px auto 0' }}></div>
        </div>

        {/* 3-Column Reviews Grid matching theme screenshot 4 */}
        <div className="testimonials-grid-3">
          {testimonialsList.map((testi) => (
            <div key={testi.id} className="testimonial-card-modern">
              <div>
                <div className="testi-header">
                  <div className="testi-avatar-box">
                    <span>{testi.avatar}</span>
                  </div>
                  <div>
                    <div className="testi-name">{testi.name}</div>
                    <div className="testi-badge">{testi.role}</div>
                  </div>
                </div>

                <p className="testi-comment">
                  "{testi.comment}"
                </p>
              </div>

              <div className="testi-rating-footer">
                <span>rated {testi.rating}/5</span>
                <span className="stars-gold">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
