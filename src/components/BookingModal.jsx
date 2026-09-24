import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Bike, Wrench, Shield, Phone, User } from 'lucide-react';
import { SERVICES, SERVICE_PACKAGES, BUSINESS_INFO } from '../data/mockData';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: 'scooter',
    brand: 'Honda',
    model: 'Activa 6G',
    regNumber: '',
    serviceName: 'General Service',
    pickupType: 'pickup',
    address: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:00 AM - 12:00 PM',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: initialData.vehicleType || prev.vehicleType,
        serviceName: initialData.services ? initialData.services.join(', ') : (initialData.title || prev.serviceName),
        pickupType: initialData.pickupRequested ? 'pickup' : 'dropoff'
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    const randomRef = 'APEX-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(3); // Confirmation step
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingRef(null);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="glass-card modal-container">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {step < 3 ? (
          <>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-badge">
                <Calendar size={14} className="text-blue" /> ONLINE SERVICE BOOKING
              </div>
              <h2 className="modal-title">Schedule Your Bike Service</h2>
              <p className="modal-subtitle">Step {step} of 2 - Instant Confirmation & Doorstep Pickup</p>

              {/* Progress steps indicator */}
              <div className="step-bar">
                <div className={`step-item ${step >= 1 ? 'step-active' : ''}`}>
                  <span>1. Bike & Service</span>
                </div>
                <div className={`step-item ${step >= 2 ? 'step-active' : ''}`}>
                  <span>2. Schedule & Address</span>
                </div>
              </div>
            </div>

            {/* Step 1: Vehicle & Service details */}
            {step === 1 && (
              <div className="modal-step-body">
                <div className="form-grid-2">
                  <div className="form-field">
                    <label>Vehicle Brand / Make</label>
                    <select name="brand" value={formData.brand} onChange={handleChange} className="form-input">
                      <option value="Honda">Honda</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="TVS">TVS</option>
                      <option value="Royal Enfield">Royal Enfield</option>
                      <option value="Bajaj">Bajaj</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Hero">Hero</option>
                      <option value="KTM">KTM</option>
                      <option value="Vespa">Vespa</option>
                      <option value="Other">Other / Electric</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Bike / Scooter Model</label>
                    <input
                      type="text"
                      name="model"
                      placeholder="e.g. Classic 350 / Activa / R15"
                      value={formData.model}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2 mt-3">
                  <div className="form-field">
                    <label>Registration Number (Optional)</label>
                    <input
                      type="text"
                      name="regNumber"
                      placeholder="e.g. HR 26 AB 1234"
                      value={formData.regNumber}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label>Select Required Service / Package</label>
                    <select name="serviceName" value={formData.serviceName} onChange={handleChange} className="form-input">
                      <option value="General Service">General Service (₹499)</option>
                      <option value="Engine Service & Tuning">Engine Service & Tuning (₹1,499)</option>
                      <option value="Oil Change & Filter">Synthetic Oil Change & Filter (₹299)</option>
                      <option value="Basic Express Care Package">Basic Express Care Package (₹499)</option>
                      <option value="Standard Pro Maintenance Package">Standard Pro Maintenance (₹899)</option>
                      <option value="Master Performance Tune Package">Master Performance Tune (₹1,499)</option>
                      <option value="Brake Overhaul">Brake Service & Overhaul (₹349)</option>
                      <option value="Washing & 3M Polish">Washing, Cleaning & Polish (₹299)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field mt-3">
                  <label>Service Type Preference</label>
                  <div className="pickup-options-grid">
                    <div
                      className={`pickup-card ${formData.pickupType === 'pickup' ? 'pickup-card-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, pickupType: 'pickup' })}
                    >
                      <CheckCircle2 size={18} className={formData.pickupType === 'pickup' ? 'text-green' : 'text-muted'} />
                      <div>
                        <strong>Free Doorstep Pickup & Drop</strong>
                        <span>We pick up from your home or office</span>
                      </div>
                    </div>

                    <div
                      className={`pickup-card ${formData.pickupType === 'dropoff' ? 'pickup-card-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, pickupType: 'dropoff' })}
                    >
                      <CheckCircle2 size={18} className={formData.pickupType === 'dropoff' ? 'text-green' : 'text-muted'} />
                      <div>
                        <strong>Self Workshop Drop-off</strong>
                        <span>Drop your bike at Sector 18 workshop</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-actions mt-4">
                  <button className="btn btn-primary w-full" onClick={() => setStep(2)}>
                    Next: Pick Date & Time Slot →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date, Time & Address */}
            {step === 2 && (
              <form onSubmit={handleCompleteBooking} className="modal-step-body">
                <div className="form-grid-2">
                  <div className="form-field">
                    <label>Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Preferred Time Slot</label>
                    <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} className="form-input">
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2 mt-3">
                  <div className="form-field">
                    <label>Your Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Mobile Number (For WhatsApp Updates)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {formData.pickupType === 'pickup' && (
                  <div className="form-field mt-3">
                    <label>Doorstep Pickup Address (Optional)</label>
                    <textarea
                      name="address"
                      rows="2"
                      placeholder="House/Flat No., Street, Colony, Landmark (Optional)..."
                      value={formData.address}
                      onChange={handleChange}
                      className="form-input"
                    ></textarea>
                  </div>
                )}

                <div className="form-field mt-3">
                  <label>Special Mechanic Instructions (Optional)</label>
                  <input
                    type="text"
                    name="notes"
                    placeholder="e.g. Check front disc brake noise, replace spark plug..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="modal-actions mt-4 flex-gap">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="submit" className="btn btn-primary flex-1 pulse-blue">
                    Confirm & Complete Booking
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          /* Step 3: Success Confirmation State */
          <div className="modal-success-state">
            <div className="success-icon-box pulse-blue">
              <CheckCircle2 size={48} className="text-white" />
            </div>

            <span className="badge badge-green mb-2">BOOKING CONFIRMED</span>
            <h2 className="success-title">Service Request Received!</h2>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName || 'Valued Rider'}</strong>. Your service appointment has been scheduled successfully.
            </p>

            <div className="booking-ref-card">
              <span className="ref-label">BOOKING ID REFERENCE:</span>
              <strong className="ref-number">{bookingRef}</strong>
              <div className="ref-details">
                <span>Vehicle: {formData.brand} {formData.model}</span>
                <span>Date: {formData.date} ({formData.timeSlot})</span>
                <span>Type: {formData.pickupType === 'pickup' ? 'Free Pickup & Drop' : 'Self Workshop Drop'}</span>
              </div>
            </div>

            <p className="sms-note">
              📲 We've sent a WhatsApp confirmation & live driver tracking link to <strong>{formData.phone || BUSINESS_INFO.phone}</strong>.
            </p>

            <div className="modal-actions mt-4">
              <button className="btn btn-primary w-full" onClick={resetAndClose}>
                Done & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
