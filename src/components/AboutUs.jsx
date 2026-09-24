import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, UserCheck, Video, Clock } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    {
      src: "/images/engine-service.png",
      alt: "Apex Moto Pro Workshop Engine Diagnostic",
      label: "Diagnostic Bay & ECU Scan"
    },
    {
      src: "/images/workshop-bay.jpg",
      alt: "State-of-the-art Hydraulic Lift Service Bays",
      label: "Multi-Bay Hydraulic Servicing"
    }
  ];

  const pillars = [
    {
      icon: UserCheck,
      title: "Certified Master Techs",
      desc: "Our mechanics are factory-trained with 10+ years of hands-on experience in sports bikes, commuters, and scooters."
    },
    {
      icon: ShieldCheck,
      title: "100% Genuine OEM Spares",
      desc: "We source authentic parts directly from OEM distributors (Honda, RE, Yamaha, TVS, Bajaj) with full manufacturer warranty."
    },
    {
      icon: Video,
      title: "Transparent Video Inspection",
      desc: "Receive live HD video updates & photo reports of worn-out parts before any replacement is initiated."
    },
    {
      icon: Clock,
      title: "30-Day Service Warranty",
      desc: "Enjoy complete peace of mind with our 30-day or 1,000 km warranty on labor and service workmanship."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="grid-2 about-grid">
          {/* Left Column: Visual Showcase Gallery */}
          <div className="about-visual-group">
            <div className="about-image-wrapper">
              <img
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                className="about-main-img"
              />
              <div className="img-caption-tag">{images[activeImageIndex].label}</div>
              <div className="experience-badge animate-float">
                <span className="exp-years">15+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="gallery-thumbs">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${activeImageIndex === idx ? 'thumb-active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={img.src} alt={img.alt} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="about-content">
            <span className="badge badge-blue mb-2">About Apex Moto Pro</span>
            <h2 className="section-title">
              Crafting Engineering Precision For <span className="gradient-text">Two-Wheeler Riders</span>
            </h2>

            <p className="about-lead">
              Established in 2011, <strong>APEX MOTO PRO</strong> has grown into Gurugram’s premier state-of-the-art two-wheeler service hub. We bridge the gap between expensive authorized brand service centers and unreliable roadside mechanics.
            </p>

            <p className="about-description">
              Our 4,500 sq. ft. workshop is equipped with hydraulic lifts, computerized ECU scanners, ultrasonic fuel-injector cleaners, and automated tire changers. Whether it’s a daily commuting scooter or a 1000cc superbike, our team delivers dealership-quality care at up to 40% lower costs.
            </p>

            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Multi-brand diagnostic computer scanner</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Eco-friendly water wash & oil disposal</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-blue" />
                <span>Air-conditioned customer waiting lounge with Wi-Fi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="pillars-grid grid-4 mt-5">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <div key={index} className="glass-card pillar-card">
                <div className="pillar-icon-box">
                  <IconComp size={24} className="pillar-icon" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
