import React, { useState } from 'react';
import { Tag, Copy, Check, Calendar, Gift, Zap } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/mockData';
import './SpecialOffers.css';

export default function SpecialOffers({ onOpenBooking }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="offers" className="section offers-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Special Promotions</span>
          <h2 className="section-title">
            Exclusive Offers & <span className="gradient-text">Seasonal Discounts</span>
          </h2>
          <p>
            Save big on your next two-wheeler service with our limited-time promo codes and package discounts.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid-3 offers-grid">
          {SPECIAL_OFFERS.map((offer) => (
            <div key={offer.id} className="glass-card offer-card">
              <div className="offer-badge-row">
                <span className="badge badge-light-blue">
                  <Tag size={12} /> {offer.discount}
                </span>
                <span className="offer-validity">{offer.validity}</span>
              </div>

              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-desc">{offer.description}</p>

              <div className="offer-code-box">
                <div className="code-display">
                  <span className="code-label">PROMO CODE:</span>
                  <strong className="code-text">{offer.code}</strong>
                </div>
                <button
                  className="btn-copy-code"
                  onClick={() => handleCopy(offer.code)}
                  title="Copy code"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={14} className="text-green" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>

              <button
                className="btn btn-primary w-full btn-sm"
                onClick={onOpenBooking}
              >
                <Calendar size={14} /> Apply Code & Book Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
