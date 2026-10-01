import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AcceptedInsurances from './components/AcceptedInsurances';
import ClinicAdvantage from './components/ClinicAdvantage';
import ServicesShowcase from './components/ServicesShowcase';
import StatsCounter from './components/StatsCounter';
import DoctorsSection from './components/DoctorsSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

// Modals
import EnquiryModal from './components/EnquiryModal';
import DoctorDetailModal from './components/DoctorDetailModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import CGHSModal from './components/CGHSModal';
import BlogDetailModal from './components/views/BlogDetailModal';

// Dedicated 5 Core Pages
import AboutView from './components/views/AboutView';
import DoctorsView from './components/views/DoctorsView';
import ServicesView from './components/views/ServicesView';
import CGHSView from './components/views/CGHSView';

import { servicesList, clinicInfo } from './data/clinicData';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function App() {
  // Exactly 5 views: 'home' | 'about' | 'doctors' | 'services' | 'cghs'
  const [currentView, setCurrentView] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');

  // Modals state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isCGHSModalOpen, setIsCGHSModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenEnquiry = (doctor = null, service = null) => {
    setSelectedDoctor(doctor);
    setSelectedService(service);
    setIsEnquiryOpen(true);
  };

  const handleSelectFilter = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === 'cghs') {
      setCurrentView('cghs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const matchedService = servicesList.find(s => s.id === filterId);
    if (matchedService) {
      setSelectedService(matchedService);
    } else {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Universal 5-Page Header */}
      <Header
        onOpenEnquiry={() => handleOpenEnquiry()}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main Content Router / View Controller */}
      <main>
        {/* PAGE 1: HOME / LANDING */}
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section with Overlapping Contact & Quick Filters Bar */}
            <Hero
              onOpenEnquiry={() => handleOpenEnquiry()}
              onSelectFilter={handleSelectFilter}
              activeFilter={activeFilter}
            />

            {/* 2. List of Accepted Insurances & Panels */}
            <AcceptedInsurances
              onOpenCGHS={() => {
                setCurrentView('cghs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />

            {/* 3. With Shivam Dental Your Doctor it's a click Away */}
            <ClinicAdvantage
              onMeetStaff={() => {
                setCurrentView('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />

            {/* 4. Showcase Unique Services */}
            <ServicesShowcase
              onSelectService={(srv) => setSelectedService(srv)}
              onOpenAllServices={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Stats Counter (22+ Health Sections, 145+ Services, 15000+ Satisfied) */}
            <StatsCounter />

            {/* 6. Meet Our Doctors (Circular Avatars & Cards) */}
            <DoctorsSection
              onSelectDoctor={(doc) => setSelectedDoctor(doc)}
              onViewAllDoctors={() => {
                setCurrentView('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onEnquireDoctor={(doc) => handleOpenEnquiry(doc, null)}
            />

            {/* 7. From Our Blog */}
            <BlogSection
              onSelectBlog={(post) => setSelectedBlog(post)}
              onViewAllBlogs={() => {
                // Keep on home and open top post
                setSelectedBlog(post => post);
              }}
            />

            {/* 8. Customers About Us */}
            <TestimonialsSection />

            {/* 9. Interested in Consultation / Send Enquiry Banner */}
            <CtaBanner
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
          </>
        )}

        {/* PAGE 2: ABOUT US */}
        {currentView === 'about' && (
          <AboutView
            onOpenEnquiry={() => handleOpenEnquiry()}
            onOpenCGHS={() => {
              setCurrentView('cghs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* PAGE 3: DOCTORS */}
        {currentView === 'doctors' && (
          <DoctorsView
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
            onEnquireDoctor={(doc) => handleOpenEnquiry(doc, null)}
          />
        )}

        {/* PAGE 4: SERVICES */}
        {currentView === 'services' && (
          <ServicesView
            onSelectService={(srv) => setSelectedService(srv)}
            onEnquireService={(srv) => handleOpenEnquiry(null, srv)}
            initialCategory={activeFilter}
          />
        )}

        {/* PAGE 5: CGHS PANEL */}
        {currentView === 'cghs' && (
          <CGHSView
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenCGHS={() => {
          setCurrentView('cghs');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Global Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedDoctor={selectedDoctor}
        preselectedService={selectedService}
      />

      <DoctorDetailModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor && !isEnquiryOpen}
        onClose={() => setSelectedDoctor(null)}
        onEnquireDoctor={(doc) => handleOpenEnquiry(doc, null)}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService && !isEnquiryOpen}
        onClose={() => setSelectedService(null)}
        onEnquireService={(srv) => handleOpenEnquiry(null, srv)}
      />

      <CGHSModal
        isOpen={isCGHSModalOpen}
        onClose={() => setIsCGHSModalOpen(false)}
        onBookAppointment={() => handleOpenEnquiry()}
      />

      <BlogDetailModal
        post={selectedBlog}
        isOpen={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
        onBookAppointment={() => handleOpenEnquiry()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <aside className="mobile-floating-bar" aria-label="Quick Mobile Actions">
        <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="mobile-bar-btn mobile-bar-call">
          <Phone size={15} />
          <span>Call Desk</span>
        </a>
        <a href={clinicInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-bar-btn mobile-bar-whatsapp">
          <MessageSquare size={15} />
          <span>WhatsApp</span>
        </a>
        <button onClick={() => handleOpenEnquiry()} className="mobile-bar-btn mobile-bar-enquire">
          <Send size={15} />
          <span>Book Slot</span>
        </button>
      </aside>
    </div>
  );
}
