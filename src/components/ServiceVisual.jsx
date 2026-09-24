import React from 'react';
import {
  Wrench, Cpu, Droplets, ShieldAlert, Disc, Zap, Repeat, Activity,
  Sparkles, Crosshair, Hammer, Calendar, Truck
} from 'lucide-react';

export default function ServiceVisual({ serviceId, title, iconName }) {
  // Return clean, light blue + medium blue styled custom visual representations for each service
  switch (serviceId) {
    case 'general-service':
      return (
        <div className="service-visual-badge visual-general">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad1)" />
            <path d="M42 22L36 28L28 20L34 14C35.5 12.5 38 12.5 39.5 14L42 16.5C43.5 18 43.5 20.5 42 22Z" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 20L18 30C16.5 31.5 16.5 34 18 35.5L20.5 38C22 39.5 24.5 39.5 26 38L36 28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="44" cy="44" r="6" stroke="#93c5fd" strokeWidth="2" />
            <path d="M20 44H26" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="blueGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">32-Pt Check</span>
        </div>
      );

    case 'engine-service':
      return (
        <div className="service-visual-badge visual-engine">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad2)" />
            <rect x="18" y="20" width="28" height="24" rx="4" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M26 14V20M38 14V20M26 44V50M38 44V50" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="32" r="5" stroke="#ffffff" strokeWidth="2" />
            <path d="M32 20V24M32 40V44" stroke="#93c5fd" strokeWidth="2" />
            <defs>
              <linearGradient id="blueGrad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">ECU & Valve</span>
        </div>
      );

    case 'oil-change':
      return (
        <div className="service-visual-badge visual-oil">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad3)" />
            <path d="M32 16C32 16 20 30 20 38C20 44.6 25.4 50 32 50C38.6 50 44 44.6 44 38C44 30 32 16 32 16Z" fill="#e0f2fe" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M28 38C28 35.8 29.8 34 32 34" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="blueGrad3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Synthetic Oil</span>
        </div>
      );

    case 'brake-service':
      return (
        <div className="service-visual-badge visual-brake">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad4)" />
            <circle cx="32" cy="32" r="16" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="6" stroke="#93c5fd" strokeWidth="2" />
            <circle cx="26" cy="24" r="1.5" fill="#ffffff" />
            <circle cx="38" cy="24" r="1.5" fill="#ffffff" />
            <circle cx="38" cy="40" r="1.5" fill="#ffffff" />
            <circle cx="26" cy="40" r="1.5" fill="#ffffff" />
            <path d="M16 28H24V36H16V28Z" fill="#93c5fd" />
            <defs>
              <linearGradient id="blueGrad4" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Disc & Pad</span>
        </div>
      );

    case 'tyre-replacement':
      return (
        <div className="service-visual-badge visual-tyre">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad5)" />
            <circle cx="32" cy="32" r="18" stroke="#ffffff" strokeWidth="3" />
            <circle cx="32" cy="32" r="8" stroke="#93c5fd" strokeWidth="2.5" />
            <path d="M32 14V24M32 40V50M14 32H24M40 32H50" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="blueGrad5" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284c7" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Balancing</span>
        </div>
      );

    case 'battery-service':
      return (
        <div className="service-visual-badge visual-battery">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad6)" />
            <rect x="18" y="24" width="28" height="24" rx="3" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M24 18V24M40 18V24" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 32L28 37H34L32 42" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="blueGrad6" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">12V Voltage</span>
        </div>
      );

    case 'chain-sprocket':
      return (
        <div className="service-visual-badge visual-chain">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad7)" />
            <circle cx="22" cy="32" r="8" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="42" cy="32" r="6" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M22 24H42M22 40H42" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 3" />
            <defs>
              <linearGradient id="blueGrad7" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Motul Lube</span>
        </div>
      );

    case 'electrical-repair':
      return (
        <div className="service-visual-badge visual-electrical">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad8)" />
            <path d="M34 14L20 34H32L30 50L44 30H32L34 14Z" fill="#e0f2fe" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
            <defs>
              <linearGradient id="blueGrad8" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Wiring Scan</span>
        </div>
      );

    case 'washing-cleaning':
      return (
        <div className="service-visual-badge visual-wash">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad9)" />
            <path d="M32 18L35 25L42 26L37 31L38 38L32 34L26 38L27 31L22 26L29 25L32 18Z" fill="#e0f2fe" stroke="#ffffff" strokeWidth="2" />
            <circle cx="18" cy="44" r="3" fill="#93c5fd" />
            <circle cx="46" cy="44" r="4" fill="#93c5fd" />
            <defs>
              <linearGradient id="blueGrad9" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284c7" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">3M Polish</span>
        </div>
      );

    case 'puncture-repair':
      return (
        <div className="service-visual-badge visual-puncture">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad10)" />
            <circle cx="32" cy="32" r="16" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M32 18V46M18 32H46" stroke="#93c5fd" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="#ffffff" />
            <defs>
              <linearGradient id="blueGrad10" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Tubeless Patch</span>
        </div>
      );

    case 'accident-repair':
      return (
        <div className="service-visual-badge visual-accident">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad11)" />
            <path d="M22 22L36 36M36 22L22 36" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <rect x="34" y="34" width="14" height="14" rx="2" stroke="#93c5fd" strokeWidth="2" />
            <defs>
              <linearGradient id="blueGrad11" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Frame & Paint</span>
        </div>
      );

    case 'periodic-maintenance':
      return (
        <div className="service-visual-badge visual-periodic">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad12)" />
            <rect x="18" y="20" width="28" height="28" rx="4" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M18 28H46" stroke="#ffffff" strokeWidth="2" />
            <path d="M24 16V22M40 16V22" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="26" cy="35" r="2" fill="#93c5fd" />
            <circle cx="38" cy="35" r="2" fill="#93c5fd" />
            <defs>
              <linearGradient id="blueGrad12" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">50-Pt Health</span>
        </div>
      );

    case 'pickup-drop':
      return (
        <div className="service-visual-badge visual-pickup">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGrad13)" />
            <rect x="16" y="24" width="22" height="18" rx="2" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M38 29H44L48 35V42H38V29Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="24" cy="44" r="4" fill="#93c5fd" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="42" cy="44" r="4" fill="#93c5fd" stroke="#ffffff" strokeWidth="1.5" />
            <defs>
              <linearGradient id="blueGrad13" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
            </defs>
          </svg>
          <span className="visual-mini-label">Free Towing</span>
        </div>
      );

    default:
      return (
        <div className="service-visual-badge visual-default">
          <svg viewBox="0 0 64 64" fill="none" className="service-svg-art">
            <rect width="64" height="64" rx="14" fill="url(#blueGradDefault)" />
            <circle cx="32" cy="32" r="12" stroke="#ffffff" strokeWidth="2.5" />
            <defs>
              <linearGradient id="blueGradDefault" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1d4ed8" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
  }
}
