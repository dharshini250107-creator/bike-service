import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Verified Customer Feedback</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Riders Say</span>
          </h2>
          <p>
            Rated 4.9/5 stars by over 25,000 two-wheeler owners across Gurugram & Cyber City.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-2 testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="glass-card testimonial-card">
              <Quote size={36} className="quote-watermark" />

              <div className="testimonial-top">
                <div className="stars-row">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d97706" color="#d97706" />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>

              <p className="review-comment">"{review.comment}"</p>

              <div className="reviewer-info">
                <div className="avatar-circle">
                  {review.name.charAt(0)}
                </div>
                <div className="reviewer-details">
                  <div className="reviewer-name-row">
                    <strong className="reviewer-name">{review.name}</strong>
                    {review.verified && (
                      <span className="verified-badge">
                        <CheckCircle size={13} /> Verified Owner
                      </span>
                    )}
                  </div>
                  <span className="reviewer-bike">{review.bike}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
