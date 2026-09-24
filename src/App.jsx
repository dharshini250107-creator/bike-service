import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ServicePackages from './components/ServicePackages';
import PriceEstimator from './components/PriceEstimator';
import Vehicles from './components/Vehicles';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';
import EmergencyBar from './components/EmergencyBar';
import BookingModal from './components/BookingModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingInitialData(null);
  };

  return (
    <div className="app-main-wrapper">
      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 3. About Us & Core Pillars */}
      <AboutUs />

      {/* 4. Detailed Services Section (13 services) */}
      <Services onSelectService={(service) => handleOpenBooking(service)} />

      {/* 5. Service Packages */}
      <ServicePackages onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

      {/* 6. Instant Price Estimator */}
      <PriceEstimator onOpenBookingWithItems={(itemsData) => handleOpenBooking(itemsData)} />

      {/* 7. Vehicles We Service */}
      <Vehicles onOpenBooking={() => handleOpenBooking()} />

      {/* 8. Special Offers & Discounts */}
      <SpecialOffers onOpenBooking={() => handleOpenBooking()} />

      {/* 9. 24/7 Roadside Emergency Breakdown Bar */}
      <EmergencyBar />

      {/* 10. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* 11. FAQ Accordion */}
      <FAQ />

      {/* 12. Workshop Location & Google Map */}
      <LocationMap />

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Modal & Floating Action Widgets */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />

      <WhatsAppWidget />
    </div>
  );
}
