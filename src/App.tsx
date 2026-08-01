import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileFloatingCTA } from './components/MobileFloatingCTA';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { MovingProcessPage } from './pages/MovingProcessPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('Home Relocation');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('home-relocation');

  // Dynamic Document Title based on Active Page for SEO
  useEffect(() => {
    switch (activePage) {
      case 'home':
        document.title = "Best Route Relocation Services | #1 Moving Company in Dubai & UAE";
        break;
      case 'about':
        document.title = "About Us | Best Route Relocation Services UAE";
        break;
      case 'services':
        document.title = "Relocation Services | Home, Villa, Office & Packing Dubai UAE";
        break;
      case 'why-choose-us':
        document.title = "Why Choose Us | Certified Movers & Transparent Pricing UAE";
        break;
      case 'process':
        document.title = "Moving Process & Checklist | 7-Stage Relocation UAE";
        break;
      case 'faq':
        document.title = "Moving FAQ | Pricing, Permits & Packing Standards UAE";
        break;
      case 'contact':
        document.title = "Contact Us | Get Free Moving Quote UAE (+971 58 140 1608)";
        break;
      default:
        document.title = "Best Route Relocation Services";
    }
  }, [activePage]);

  const handleOpenQuoteModal = (defaultService: string = 'Home Relocation') => {
    setQuoteDefaultService(defaultService);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow pb-16 lg:pb-0">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenQuoteModal={handleOpenQuoteModal}
            setSelectedServiceId={setSelectedServiceId}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenQuoteModal={handleOpenQuoteModal}
            selectedServiceId={selectedServiceId}
          />
        )}

        {activePage === 'why-choose-us' && (
          <WhyChooseUsPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activePage === 'process' && (
          <MovingProcessPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activePage === 'faq' && (
          <FAQPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activePage === 'contact' && (
          <ContactPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Action Bar for Mobile Conversions */}
      <MobileFloatingCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={quoteDefaultService}
      />
    </div>
  );
}
