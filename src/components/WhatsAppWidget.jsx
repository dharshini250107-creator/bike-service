import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('Hi Apex Moto Pro, I want to inquire about bike servicing.');

  const handleSend = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  return (
    <div className="wa-widget-container">
      {/* Expanded Popup Bubble */}
      {open && (
        <div className="wa-popup-card animate-float">
          <div className="wa-popup-header">
            <div className="wa-avatar-group">
              <div className="wa-avatar">
                <span>AP</span>
              </div>
              <div>
                <strong>Apex Moto Lead Mechanic</strong>
                <span className="wa-status-text">● Online (Replies in 2 mins)</span>
              </div>
            </div>
            <button className="wa-close-btn" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          <div className="wa-popup-body">
            <div className="wa-chat-bubble">
              Hello! 🛠️ Need quick cost estimate or breakdown towing support for your bike? Type your question below!
            </div>
          </div>

          <form onSubmit={handleSend} className="wa-popup-footer">
            <input
              type="text"
              className="wa-input"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type message..."
            />
            <button type="submit" className="wa-send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        className="wa-trigger-btn"
        onClick={() => setOpen(!open)}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
        <span className="wa-badge-pulse"></span>
      </button>
    </div>
  );
}
