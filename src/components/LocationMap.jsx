import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, ShieldCheck, Map, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import './LocationMap.css';

export default function LocationMap() {
  const [activeMapView, setActiveMapView] = useState('visual'); // 'visual' | 'interactive'

  return (
    <section id="location" className="section location-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Visit Our Workshop</span>
          <h2 className="section-title">
            Workshop Location & <span className="gradient-text">Directions</span>
          </h2>
          <p>
            Conveniently located near Cyber City Hub on Ring Road, Sector 18. Equipped with customer waiting lounge and express bays.
          </p>
        </div>

        <div className="grid-2 location-grid">
          {/* Left Column: Workshop Info */}
          <div className="glass-card location-info-card">
            <div className="location-card-header">
              <div className="map-pin-icon-box">
                <MapPin size={24} className="pin-icon" />
              </div>
              <div>
                <h3>APEX MOTO PRO Hub</h3>
                <span className="location-status-badge">● Open Today (8 AM - 8 PM)</span>
              </div>
            </div>

            <div className="info-list">
              <div className="info-item">
                <MapPin size={18} className="info-icon text-blue" />
                <div>
                  <strong>Workshop Address:</strong>
                  <p>{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={18} className="info-icon text-blue" />
                <div>
                  <strong>Working Hours:</strong>
                  <p>{BUSINESS_INFO.hours.weekdays}</p>
                  <p>{BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={18} className="info-icon text-gold" />
                <div>
                  <strong>Contact Phones:</strong>
                  <p>{BUSINESS_INFO.phone} (Main Line)</p>
                  <p>1800-APEX-MOTO (Toll Free Hotline)</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={18} className="info-icon text-green" />
                <div>
                  <strong>Email Inquiry:</strong>
                  <p>{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full pulse-blue"
              >
                <Navigation size={18} /> Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map Visualizer & Image Card */}
          <div className="map-visualizer-card glass-card">
            <div className="map-frame-header">
              <div className="map-view-switcher">
                <button
                  className={`view-tab-btn ${activeMapView === 'visual' ? 'view-tab-active' : ''}`}
                  onClick={() => setActiveMapView('visual')}
                >
                  <Map size={13} /> Visual Map Card
                </button>
                <button
                  className={`view-tab-btn ${activeMapView === 'interactive' ? 'view-tab-active' : ''}`}
                  onClick={() => setActiveMapView('interactive')}
                >
                  <Compass size={13} /> Interactive Map
                </button>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="open-external-link"
              >
                Open Fullscreen <ExternalLink size={12} />
              </a>
            </div>

            {/* Custom Styled Map Frame Container */}
            <div className="map-canvas-container">
              {activeMapView === 'visual' ? (
                <div className="map-image-wrapper">
                  <img
                    src="/images/map-location.jpg"
                    alt="Apex Moto Pro Cyber City Location Map"
                    className="map-image"
                  />
                  <div className="map-image-overlay">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm map-nav-btn"
                    >
                      <Navigation size={14} /> Start GPS Navigation
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  title="Apex Moto Pro Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.126487220267!2d77.07842!3d28.48911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1916eb9f3fb7%3A0xc3b8364b7fa6f455!2sCyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}

              {/* Custom Overlay Pin Badge */}
              <div className="map-pin-overlay animate-float">
                <div className="pin-pulse-dot"></div>
                <div className="pin-box">
                  <strong>APEX MOTO PRO</strong>
                  <span>Sector 18 Workshop</span>
                </div>
              </div>
            </div>

            <div className="map-landmark-notes">
              <ShieldCheck size={16} className="text-green" />
              <span>Landmark: Opposite Speedcraft Gas Station, Sector 18 Highway Exit.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
