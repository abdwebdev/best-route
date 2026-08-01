import React, { useState, useEffect } from 'react';
import { PageId, COMPANY_CONTACT } from '../types';
import { Phone, MessageSquare, Mail, Menu, X, Truck, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'process', label: 'Moving Process' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Banner Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              100% Verified UAE Relocation
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              24/7 Moving Across All 7 Emirates
            </span>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a 
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
            
            <a 
              href={COMPANY_CONTACT.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium text-emerald-400"
              id="top-bar-whatsapp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
            
            <a 
              href={`mailto:${COMPANY_CONTACT.email}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-400 transition-colors text-slate-300"
              id="top-bar-email"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3' : 'bg-slate-900 py-4'} border-b-4 border-orange-500 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-button"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center font-extrabold text-xl text-slate-950 tracking-tighter shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
              BR
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  BEST ROUTE
                </span>
                <span className="bg-orange-500 text-slate-950 text-[10px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider">
                  UAE
                </span>
              </div>
              <p className="text-[10px] text-orange-400 tracking-[0.2em] font-medium -mt-0.5 uppercase">
                RELOCATION SERVICES
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30 font-bold' 
                      : 'text-slate-200 hover:text-orange-400 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              id="header-call-btn"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              id="header-get-quote-btn"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform active:scale-95"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs"
              id="mobile-header-quote-btn"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-hamburger-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 font-bold' 
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 text-white font-semibold text-sm border border-slate-700 active:bg-slate-700"
              id="mobile-drawer-call-btn"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>

            <a
              href={COMPANY_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm active:bg-emerald-700"
              id="mobile-drawer-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-sm shadow-lg text-center"
            id="mobile-drawer-quote-modal-btn"
          >
            Request Instant Free Quote
          </button>
        </div>
      )}
    </header>
  );
};
