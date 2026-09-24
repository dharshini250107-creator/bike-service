import React, { useState } from 'react';
import { Shield, Bike, CheckCircle2 } from 'lucide-react';
import { VEHICLES } from '../data/mockData';
import './Vehicles.css';

export default function Vehicles({ onOpenBooking }) {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section id="vehicles" className="section vehicles-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Multi-Brand Expertise</span>
          <h2 className="section-title">
            Vehicles We <span className="gradient-text">Service</span>
          </h2>
          <p>
            We service all major motorcycle and scooter brands with specialized OEM tooling, diagnostic software, and certified mechanics.
          </p>
        </div>

        {/* Brands Matrix */}
        <div className="grid-4 vehicles-grid">
          {VEHICLES.map((vehicle, index) => {
            const isSelected = selectedBrand === vehicle.name;
            return (
              <div
                key={index}
                className={`glass-card vehicle-card ${isSelected ? 'vehicle-card-active' : ''}`}
                onClick={() => setSelectedBrand(isSelected ? null : vehicle.name)}
              >
                <div className="vehicle-card-top">
                  <div className="brand-logo-emblem">
                    <Bike size={20} className="brand-icon" />
                    <span className="brand-logo-name">{vehicle.logoText}</span>
                  </div>
                  <span className="badge badge-light-blue brand-badge">{vehicle.badge}</span>
                </div>

                <h3 className="brand-title">{vehicle.name}</h3>

                <div className="popular-models">
                  <span className="models-label">Popular Models:</span>
                  <p className="models-list">{vehicle.models}</p>
                </div>

                <div className="vehicle-card-footer">
                  <button
                    className="btn btn-secondary btn-sm w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                  >
                    <CheckCircle2 size={14} /> Service My {vehicle.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner note */}
        <div className="vehicles-footer-banner mt-4">
          <div className="banner-icon-box">
            <Shield size={24} className="text-blue" />
          </div>
          <div className="banner-text">
            <h4>Don't see your specific bike model listed above?</h4>
            <p>We service all two-wheelers including vintage classics, electric scooters (EVs), and imported superbikes! Contact us for a custom service estimate.</p>
          </div>
          <button className="btn btn-outline-blue btn-sm" onClick={onOpenBooking}>
            Book Custom Inspection
          </button>
        </div>
      </div>
    </section>
  );
}
