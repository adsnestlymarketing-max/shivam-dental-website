import React from 'react';
import { clinicStats } from '../data/clinicData';

export default function StatsCounter() {
  return (
    <section className="stats-section-wrap">
      <div className="container">
        <div className="stats-grid-3">
          {clinicStats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-title">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
