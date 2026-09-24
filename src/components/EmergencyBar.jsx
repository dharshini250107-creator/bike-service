import React from 'react';
import { ShieldAlert, Phone, Wrench, Clock, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import './EmergencyBar.css';

export default function EmergencyBar() {
  return (
    <section className="emergency-section">
      <div className="container">
        <div className="emergency-card">
          <div className="emergency-left">
            <div className="emergency-icon-box pulse-blue">
              <ShieldAlert size={28} className="text-white" />
            </div>
            <div className="emergency-text">
              <span className="emergency-tag">24/7 BREAKDOWN & TOWING HOTLINE</span>
              <h3>Stranded on the road or facing a sudden breakdown?</h3>
              <p>Our emergency mobile towing team will dispatch to your location in Gurugram within 30-45 minutes.</p>
            </div>
          </div>

          <div className="emergency-right">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg pulse-blue">
              <Phone size={20} /> Call Breakdown Hotline: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
