import React, { useState } from 'react';
import { ShieldCheck, Truck, Clock, Award, Calendar, MessageSquare, Search, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import './Hero.css';

export default function Hero({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');

  const quickPills = [
    { label: "General Service", hash: "#services" },
    { label: "Synthetic Oil Change", hash: "#services" },
    { label: "Engine Overhaul", hash: "#services" },
    { label: "Brake Pads", hash: "#services" },
    { label: "Chain Lube", hash: "#services" }
  ];

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Light Blue Overlay */}
      <div className="hero-bg-overlay"></div>
      <div className="hero-bg-image" style={{ backgroundImage: `url('/images/hero-workshop.png')` }}></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge-wrapper animate-float">
            <span className="badge badge-blue">
              <Award size={14} /> Gurugram's #1 Rated Bike Workshop
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Reliable Bike Service, <span className="gradient-text">Every Ride.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle">
            {BUSINESS_INFO.subheadline}
          </p>

          {/* Main Action CTAs */}
          <div className="hero-cta-group">
            <button className="btn btn-primary btn-lg pulse-blue" onClick={onOpenBooking}>
              <Calendar size={20} />
              <span>Book a Service</span>
            </button>
            <a
              href={BUSINESS_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Highlight Value Props */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <ShieldCheck size={18} className="highlight-icon text-blue" />
              <span>100% Genuine Parts</span>
            </div>
            <div className="highlight-item">
              <Truck size={18} className="highlight-icon text-blue" />
              <span>Free Pickup & Drop</span>
            </div>
            <div className="highlight-item">
              <Award size={18} className="highlight-icon text-gold" />
              <span>Certified Techs</span>
            </div>
            <div className="highlight-item">
              <Clock size={18} className="highlight-icon text-green" />
              <span>90-Min Express Care</span>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="hero-search-card">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="hero-search-input"
                placeholder="Search service e.g. Oil change, Engine, Brake, Wash..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const el = document.querySelector('#services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
              <button
                className="btn btn-primary btn-search"
                onClick={() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Find Service <ChevronRight size={16} />
              </button>
            </div>
            <div className="quick-pills">
              <span className="pill-title">Popular:</span>
              {quickPills.map((pill, index) => (
                <a key={index} href={pill.hash} className="quick-pill">
                  {pill.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right Visual Stats Card */}
        <div className="hero-visual">
          <div className="hero-card-featured glass-card">
            <div className="card-top-tag">
              <CheckCircle2 size={16} className="text-green" />
              <span>WORKSHOP STATUS: ONLINE</span>
            </div>

            <div className="hero-stats-grid">
              {BUSINESS_INFO.stats.map((stat, i) => (
                <div key={i} className="hero-stat-box">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="card-promo-banner">
              <div className="promo-text">
                <span className="promo-badge">LIMITED OFFER</span>
                <h4>Get 25% OFF on Monsoon Care Package</h4>
                <p>Anti-rust coating + brake inspection + full synthetic oil tune-up</p>
              </div>
              <button className="btn btn-outline-blue btn-sm" onClick={onOpenBooking}>
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
