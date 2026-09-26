import React from 'react';
import {
  Wrench, Cpu, Droplets, ShieldAlert, Disc, Zap, Repeat, Activity,
  Sparkles, Crosshair, Hammer, Calendar, Truck
} from 'lucide-react';

const iconMap = {
  Wrench,
  Cpu,
  Droplets,
  ShieldAlert,
  Disc,
  Zap,
  Repeat,
  Activity,
  Sparkles,
  Crosshair,
  Hammer,
  Calendar,
  Truck
};

const serviceImageMap = {
  'general-service': '/images/services/general-service.jpg',
  'engine-service': '/images/services/engine-service.jpg',
  'oil-change': '/images/services/oil-change.jpg',
  'brake-service': '/images/services/brake-service.jpg',
  'tyre-replacement': '/images/services/tyre-replacement.jpg',
  'battery-service': '/images/services/battery-service.jpg',
  'chain-sprocket': '/images/services/chain-sprocket.jpg',
  'electrical-repair': '/images/services/electrical-repair.jpg',
  'washing-cleaning': '/images/services/washing-cleaning.jpg',
  'puncture-repair': '/images/services/puncture-repair.jpg',
  'accident-repair': '/images/services/accident-repair.jpg',
  'periodic-maintenance': '/images/services/periodic-maintenance.jpg',
  'pickup-drop': '/images/services/pickup-drop.jpg'
};

export default function ServiceVisual({ serviceId, title, iconName, IconComponent }) {
  const imageSrc = serviceImageMap[serviceId] || '/images/services/general-service.jpg';
  const Icon = IconComponent || iconMap[iconName] || Wrench;

  return (
    <div className="service-visual-wrapper">
      <div className="service-visual-frame">
        <img
          src={imageSrc}
          alt={title || 'Service visual'}
          className="service-visual-img"
          loading="lazy"
        />
        <div className="service-visual-overlay" />
      </div>
      <div className="service-visual-icon-badge" title={title}>
        <Icon size={12} className="service-visual-icon" />
      </div>
    </div>
  );
}

