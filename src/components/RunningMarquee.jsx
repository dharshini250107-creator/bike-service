import React from 'react';
import {
  Wrench, ShieldCheck, Zap, Award, Clock, Truck, Sparkles, CheckCircle2, Flame
} from 'lucide-react';
import './RunningMarquee.css';

const MARQUEE_ITEMS = [
  { icon: Wrench, text: "32-Point Precision Diagnostic Scan", badge: "Live Check" },
  { icon: ShieldCheck, text: "100% Genuine Manufacturer OEM Parts", badge: "Certified" },
  { icon: Clock, text: "Express 30-Min Synthetic Oil Change", badge: "Fast Track" },
  { icon: Truck, text: "Free Doorstep Pickup & Drop Anywhere in City", badge: "100% Free" },
  { icon: Award, text: "4.9 ★ Rated Top Two-Wheeler Workshop", badge: "Top Rated" },
  { icon: Zap, text: "Computerized ECU & EFI Fuel System Scan", badge: "High Tech" },
  { icon: Sparkles, text: "3M Hydrophobic Snow Foam Wash & Polish", badge: "Premium Finish" },
  { icon: CheckCircle2, text: "30 Days or 1,000 KM Full Labor Warranty", badge: "Guaranteed" },
];

export default function RunningMarquee() {
  return (
    <div className="running-marquee-section">
      <div className="running-marquee-track">
        {/* Double the list for infinite seamless running loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="running-marquee-box">
              <div className="running-icon-glow">
                <Icon size={16} />
              </div>
              <span className="running-text">{item.text}</span>
              <span className="running-pill">{item.badge}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
