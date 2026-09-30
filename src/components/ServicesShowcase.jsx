import React from 'react';
import { servicesList } from '../data/clinicData';
import { ArrowRight, ShieldAlert, Sparkles, CheckCircle2, Smile, HeartPulse, Baby, Layers, ShieldCheck } from 'lucide-react';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2,
  Smile: Smile,
  HeartPulse: HeartPulse,
  Baby: Baby,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

export default function ServicesShowcase({ onSelectService, onOpenAllServices }) {
  // Let's take 6 main services for the showcase grid
  const displayServices = servicesList.slice(0, 6);

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container">
        {/* Section Header Row */}
        <div className="section-header-row">
          <div>
            <h2 className="section-title" style={{ marginBottom: '6px' }}>
              Showcase Unique Services
            </h2>
            <div className="title-underline"></div>
          </div>

          <button
            onClick={onOpenAllServices}
            className="btn btn-outline btn-sm btn-pill"
          >
            <span>All Features & Services</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Services 3-Column Grid matching theme screenshots */}
        <div className="services-cards-grid">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            // Make the 2nd card featured royal blue matching the screenshot
            const isBlueFeatured = index === 1;

            return (
              <div
                key={service.id}
                className={`service-card-item ${isBlueFeatured ? 'featured-blue-card' : ''}`}
                onClick={() => onSelectService(service)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className="service-icon-box">
                    <IconComponent size={26} />
                  </div>

                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <p className="service-desc">
                    {service.summary}
                  </p>
                </div>

                <div className="service-action-link">
                  <span>Learn more details</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
