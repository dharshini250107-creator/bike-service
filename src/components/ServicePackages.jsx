import React from 'react';
import { Check, Calendar, Star, Sparkles } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/mockData';
import './ServicePackages.css';

export default function ServicePackages({ onSelectPackage }) {
  return (
    <section id="packages" className="section packages-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Transparent Pricing</span>
          <h2 className="section-title">
            Curated Service <span className="gradient-text">Packages</span>
          </h2>
          <p>
            Choose from all-inclusive scheduled maintenance tiers designed for long-term engine performance and smooth city rides.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid-3 packages-grid">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-card package-card ${pkg.popular ? 'package-popular' : ''}`}
            >
              {pkg.popular && (
                <div className="popular-ribbon">
                  <Star size={12} fill="#fff" /> {pkg.badge}
                </div>
              )}

              <div className="package-top">
                <span className="pkg-target">{pkg.target}</span>
                <h3 className="pkg-title">{pkg.title}</h3>
                <div className="pkg-pricing">
                  <span className="pkg-currency">₹</span>
                  <span className="pkg-price-amount">{pkg.price}</span>
                  <span className="pkg-original-price">₹{pkg.originalPrice}</span>
                </div>
                <span className="pkg-tax-note">Inclusive of all taxes & free wash</span>
              </div>

              <div className="pkg-body">
                <h4 className="pkg-features-title">
                  <Sparkles size={14} className="text-blue" /> Package Checklist:
                </h4>
                <ul className="pkg-checklist">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx}>
                      <Check size={16} className="pkg-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pkg-footer">
                <button
                  className={`btn w-full ${pkg.popular ? 'btn-primary pulse-blue' : 'btn-secondary'}`}
                  onClick={() => onSelectPackage(pkg)}
                >
                  <Calendar size={16} /> Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
