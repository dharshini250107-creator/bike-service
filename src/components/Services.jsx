import React, { useState } from 'react';
import {
  Wrench, Cpu, Droplets, ShieldAlert, Disc, Zap, Repeat, Activity,
  Sparkles, Crosshair, Hammer, Calendar, Truck, Clock, Check, ArrowRight, Search
} from 'lucide-react';
import ServiceVisual from './ServiceVisual';
import { SERVICES } from '../data/mockData';
import './Services.css';

// Map icon strings to Lucide components
const iconMap = {
  Wrench,
  Cpu,
  Droplets,
  ShieldAlert,
  Disc,
  Zap,
  Repeat,
  Activity,
  Sparkles,
  Crosshair,
  Hammer,
  Calendar,
  Truck
};

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Routine', 'Engine & Brakes', 'Washing & Paint'];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-blue">Complete Two-Wheeler Care</span>
          <h2 className="section-title">
            Our Professional <span className="gradient-text">Bike Services</span>
          </h2>
          <p>
            From 15-minute quick fixes to complete engine overhauls, we offer end-to-end multi-brand motorcycle and scooter maintenance.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="services-toolbar">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'tab-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Services (13)' : cat}
              </button>
            ))}
          </div>

          <div className="service-search-box">
            <Search size={16} className="search-box-icon" />
            <input
              type="text"
              placeholder="Search service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <div key={service.id} className="glass-card service-card">
                {/* Header row: Service Visual Image Badge, Icon & time badge */}
                <div className="service-card-top">
                  <div className="service-card-brand-group">
                    <ServiceVisual serviceId={service.id} title={service.title} iconName={service.icon} />
                    <div className="service-icon-box">
                      <IconComponent size={20} className="service-icon" />
                    </div>
                  </div>
                  <span className="service-time-badge">
                    <Clock size={12} /> {service.time}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                {/* Key Inclusions Checklist */}
                <ul className="inclusions-list">
                  {service.inclusions.slice(0, 4).map((inc, i) => (
                    <li key={i}>
                      <Check size={14} className="inc-check" />
                      <span>{inc}</span>
                    </li>
                  ))}
                  {service.inclusions.length > 4 && (
                    <li className="inc-more">+{service.inclusions.length - 4} more checklists</li>
                  )}
                </ul>

                {/* Footer: Price & CTA */}
                <div className="service-card-footer">
                  <div className="price-group">
                    <span className="current-price">{service.price}</span>
                    {service.originalPrice && service.originalPrice !== 'On Quote' && (
                      <span className="original-price">{service.originalPrice}</span>
                    )}
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onSelectService(service)}
                  >
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="no-services-found">
            <p>No services matched "{searchTerm}". Try another search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
