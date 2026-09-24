import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, Calendar, Sparkles, RefreshCw } from 'lucide-react';
import './PriceEstimator.css';

export default function PriceEstimator({ onOpenBookingWithItems }) {
  // Vehicle types
  const vehicleTypes = [
    { id: 'scooter', name: 'Scooter / Moped', multiplier: 1 },
    { id: 'commuter', name: 'Commuter (100-150cc)', multiplier: 1.1 },
    { id: 'performance', name: 'Sports / Cruiser (150-400cc)', multiplier: 1.3 },
    { id: 'superbike', name: 'Superbike (400cc+)', multiplier: 1.6 }
  ];

  // Base addon items
  const addonItems = [
    { id: 'gen-service', name: 'General Safety Service', basePrice: 499, checked: true },
    { id: 'synth-oil', name: '100% Synthetic Oil & Filter Replacement', basePrice: 450, checked: true },
    { id: 'brake-overhaul', name: 'Brake Pad Replacement & Fluid Flush', basePrice: 350, checked: false },
    { id: 'chain-lube', name: 'Motul Chain Deep Clean & Lubrication', basePrice: 249, checked: true },
    { id: 'carb-clean', name: 'Carburetor / Throttle Body Cleaning', basePrice: 299, checked: false },
    { id: 'foam-wash', name: '3M Hydrophobic Foam Wash & Polish', basePrice: 299, checked: false },
    { id: 'wheel-balance', name: 'Wheel Balancing & Nitrogen Fill', basePrice: 199, checked: false }
  ];

  const [selectedVehicle, setSelectedVehicle] = useState('commuter');
  const [items, setItems] = useState(addonItems);
  const [pickupRequested, setPickupRequested] = useState(true);

  const vehicleObj = vehicleTypes.find((v) => v.id === selectedVehicle) || vehicleTypes[1];

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  // Compute price
  const calculateTotal = () => {
    let base = items
      .filter((i) => i.checked)
      .reduce((sum, i) => sum + i.basePrice, 0);

    let total = Math.round(base * vehicleObj.multiplier);
    return total;
  };

  const totalCost = calculateTotal();
  const selectedCount = items.filter((i) => i.checked).length;

  const handleBook = () => {
    const selectedServiceNames = items.filter((i) => i.checked).map((i) => i.name);
    onOpenBookingWithItems({
      vehicleType: vehicleObj.name,
      services: selectedServiceNames,
      estimatedTotal: totalCost,
      pickupRequested
    });
  };

  return (
    <section id="estimator" className="section estimator-section">
      <div className="container">
        <div className="glass-card estimator-card">
          <div className="estimator-header">
            <span className="badge badge-blue">Instant Cost Estimator</span>
            <h2>
              Calculate Your Service <span className="gradient-text">Cost Instantly</span>
            </h2>
            <p>Select your vehicle category and pick desired services for a 100% transparent quote.</p>
          </div>

          <div className="grid-2 estimator-content">
            {/* Left: Selectors */}
            <div className="estimator-left">
              {/* Vehicle Type Selection */}
              <div className="form-group">
                <label className="form-label">Step 1: Select Vehicle Type</label>
                <div className="vehicle-selector-grid">
                  {vehicleTypes.map((v) => (
                    <button
                      key={v.id}
                      className={`v-btn ${selectedVehicle === v.id ? 'v-active' : ''}`}
                      onClick={() => setSelectedVehicle(v.id)}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addon Services Checklist */}
              <div className="form-group">
                <label className="form-label">Step 2: Pick Required Services ({selectedCount} selected)</label>
                <div className="addon-list">
                  {items.map((item) => {
                    const priceCalculated = Math.round(item.basePrice * vehicleObj.multiplier);
                    return (
                      <div
                        key={item.id}
                        className={`addon-item ${item.checked ? 'addon-checked' : ''}`}
                        onClick={() => toggleItem(item.id)}
                      >
                        <div className="addon-left">
                          {item.checked ? (
                            <CheckSquare size={18} className="text-blue" />
                          ) : (
                            <Square size={18} className="text-muted" />
                          )}
                          <span className="addon-name">{item.name}</span>
                        </div>
                        <span className="addon-price">₹{priceCalculated}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pickup Option */}
              <div className="pickup-toggle-box" onClick={() => setPickupRequested(!pickupRequested)}>
                <input
                  type="checkbox"
                  checked={pickupRequested}
                  onChange={() => {}}
                  className="pickup-checkbox"
                />
                <div>
                  <span className="pickup-title">Include Free Doorstep Pickup & Drop</span>
                  <span className="pickup-subtitle">Complimentary for all orders above ₹499</span>
                </div>
              </div>
            </div>

            {/* Right: Summary Box */}
            <div className="estimator-right">
              <div className="quote-summary-box">
                <div className="quote-badge">
                  <Sparkles size={14} /> LIVE ESTIMATE SUMMARY
                </div>

                <div className="quote-vehicle-type">
                  <span>Selected Category:</span>
                  <strong>{vehicleObj.name}</strong>
                </div>

                <div className="quote-items-breakdown">
                  {items
                    .filter((i) => i.checked)
                    .map((i) => (
                      <div key={i.id} className="breakdown-row">
                        <span>{i.name}</span>
                        <span>₹{Math.round(i.basePrice * vehicleObj.multiplier)}</span>
                      </div>
                    ))}
                </div>

                <div className="quote-pickup-row">
                  <span>Doorstep Pickup & Drop:</span>
                  <span className="text-green">FREE</span>
                </div>

                <div className="quote-total-row">
                  <span className="total-label">Estimated Bill:</span>
                  <span className="total-amount">₹{totalCost}</span>
                </div>

                <p className="quote-note">
                  * Final pricing includes labor, lubricants, taxes & free inspection report.
                </p>

                <button className="btn btn-primary w-full pulse-blue btn-lg" onClick={handleBook}>
                  <Calendar size={18} /> Book This Estimate (₹{totalCost})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
