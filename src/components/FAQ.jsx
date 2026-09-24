import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p>
            Everything you need to know about our two-wheeler servicing, pickup policies, spare parts warranty, and pricing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="faq-search-wrapper">
          <Search size={18} className="faq-search-icon" />
          <input
            type="text"
            placeholder="Search questions (e.g. warranty, pickup, duration, payment)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card faq-item ${isOpen ? 'faq-item-open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-question-text">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <h3>{faq.question}</h3>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`}
                  />
                </div>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                    <span className="faq-category-tag">Category: {faq.category}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="faq-support-box mt-4">
          <p>Still have questions or need a custom price quote for your bike?</p>
          <a
            href={BUSINESS_INFO.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} /> Chat directly with Lead Mechanic
          </a>
        </div>
      </div>
    </section>
  );
}
