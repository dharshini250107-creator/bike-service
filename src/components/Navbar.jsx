import React, { useState, useEffect } from 'react';
import { Wrench, Phone, Calendar, Menu, X, Shield, MapPin, MessageSquare } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { BUSINESS_INFO } from '../data/mockData';
import './Navbar.css';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Price Estimator', href: '#estimator' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Offers', href: '#offers' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top emergency announcement bar with social links */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <span className="live-dot pulse"></span>
            <span>Workshop Open Today | Free Doorstep Pickup & Drop within 10 km</span>
          </div>

          <div className="announcement-right">
            {/* Social Media Quick Links */}
            <div className="top-social-group">
              <span className="social-label">Follow Us:</span>
              <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" title="Instagram" className="top-social-btn">
                <InstagramIcon size={13} />
              </a>
              <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" title="Facebook" className="top-social-btn">
                <FacebookIcon size={13} />
              </a>
              <a href={BUSINESS_INFO.socials.youtube} target="_blank" rel="noreferrer" title="YouTube" className="top-social-btn">
                <YoutubeIcon size={13} />
              </a>
              <a href={BUSINESS_INFO.socials.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp" className="top-social-btn">
                <MessageSquare size={13} />
              </a>
            </div>

            <span className="divider">|</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="top-link">
              <Phone size={13} /> {BUSINESS_INFO.phone}
            </a>
            <span className="divider">|</span>
            <a href="#location" className="top-link">
              <MapPin size={13} /> Cyber Hub, Gurugram
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-brand">
            <div className="logo-icon-wrapper">
              <Shield className="logo-shield" size={24} />
              <Wrench className="logo-wrench" size={16} />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">{BUSINESS_INFO.name}</span>
              <span className="logo-subtitle">BIKE SERVICE HUB</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-call-quick" title="Call Us">
              <Phone size={16} className="text-blue" />
              <span className="btn-call-text">{BUSINESS_INFO.phone}</span>
            </a>
            <button className="btn btn-primary nav-cta pulse-blue" onClick={onOpenBooking}>
              <Calendar size={16} />
              <span>Book Service</span>
            </button>
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
          <div className="drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Social Media Links */}
            <div className="drawer-socials">
              <span className="drawer-social-title">Connect with us on Social Media:</span>
              <div className="drawer-social-icons">
                <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="drawer-social-btn">
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="drawer-social-btn">
                  <FacebookIcon size={16} /> Facebook
                </a>
                <a href={BUSINESS_INFO.socials.youtube} target="_blank" rel="noreferrer" className="drawer-social-btn">
                  <YoutubeIcon size={16} /> YouTube
                </a>
              </div>
            </div>

            <div className="drawer-cta-group">
              <button className="btn btn-primary w-full" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
                <Calendar size={18} /> Book a Service Now
              </button>
              <a href={BUSINESS_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp w-full">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
