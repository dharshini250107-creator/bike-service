import React from 'react';
import { Shield, Wrench, Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';
import { BUSINESS_INFO } from '../data/mockData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid-4 footer-top">
          {/* Col 1: Brand Info & Social Media */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-brand">
              <div className="logo-icon-wrapper">
                <Shield className="logo-shield" size={24} />
                <Wrench className="logo-wrench" size={16} />
              </div>
              <div className="logo-text-group">
                <span className="logo-title">{BUSINESS_INFO.name}</span>
                <span className="logo-subtitle">BIKE SERVICE HUB</span>
              </div>
            </a>
            <p className="footer-desc">
              Gurugram's premier state-of-the-art multi-brand motorcycle and scooter service workshop. Offering dealership-quality engine diagnostics, synthetic oil swaps, and free doorstep pickup.
            </p>

            <div className="social-section">
              <span className="social-header-title">Connect & View Us On:</span>
              {/* Social Media Links Row */}
              <div className="social-links-row">
                {/* Instagram */}
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Follow us on Instagram (@apexmotopro_official)"
                  className="social-icon-btn social-instagram"
                >
                  <InstagramIcon size={18} />
                </a>

                {/* Facebook */}
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Follow us on Facebook (facebook.com/apexmotopro)"
                  className="social-icon-btn social-facebook"
                >
                  <FacebookIcon size={18} />
                </a>

                {/* YouTube */}
                <a
                  href={BUSINESS_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="Subscribe on YouTube (@apexmotopro)"
                  className="social-icon-btn social-youtube"
                >
                  <YoutubeIcon size={18} />
                </a>

                {/* Twitter / X */}
                <a
                  href={BUSINESS_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  title="Follow us on Twitter/X (@apexmotopro)"
                  className="social-icon-btn social-twitter"
                >
                  <TwitterIcon size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href={BUSINESS_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                  className="social-icon-btn social-linkedin"
                >
                  <LinkedinIcon size={18} />
                </a>

                {/* WhatsApp */}
                <a
                  href={BUSINESS_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                  className="social-icon-btn social-whatsapp"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Workshop</a></li>
              <li><a href="#services">Our 13 Services</a></li>
              <li><a href="#packages">Service Packages</a></li>
              <li><a href="#estimator">Cost Estimator</a></li>
              <li><a href="#vehicles">Brands Serviced</a></li>
              <li><a href="#offers">Offers & Promos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="footer-col">
            <h4 className="footer-title">Popular Services</h4>
            <ul className="footer-links">
              <li><a href="#services">General Maintenance</a></li>
              <li><a href="#services">Engine Overhaul & Tuning</a></li>
              <li><a href="#services">Synthetic Oil Change</a></li>
              <li><a href="#services">Brake Pad Replacement</a></li>
              <li><a href="#services">Motul Chain Clean & Lube</a></li>
              <li><a href="#services">Tubeless Tyre Fitting</a></li>
              <li><a href="#services">3M Foam Wash & Polish</a></li>
              <li><a href="#services">Emergency Roadside Towing</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-title">Workshop Hours & Contact</h4>
            <div className="footer-contact-info">
              <p><MapPin size={15} className="text-blue" /> {BUSINESS_INFO.address}, Gurugram</p>
              <p><Phone size={15} className="text-blue" /> {BUSINESS_INFO.phone}</p>
              <p><Mail size={15} className="text-blue" /> {BUSINESS_INFO.email}</p>
              <div className="hours-box mt-2">
                <strong>Operating Hours:</strong>
                <span>{BUSINESS_INFO.hours.weekdays}</span>
                <span>{BUSINESS_INFO.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 {BUSINESS_INFO.name}. All Rights Reserved. Designed for two-wheeler excellence.</p>
          <button className="btn-back-to-top" onClick={scrollToTop}>
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
