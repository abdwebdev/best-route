import React from 'react';
import { PageId, COMPANY_CONTACT } from '../types';
import { Truck, Phone, MessageSquare, Mail, ShieldCheck, Clock, CheckCircle2, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    setActivePage(page);
    scrollToTop();
  };

  const seoKeywords = [
    'Movers in Dubai', 'Moving Company Dubai', 'House Movers UAE', 
    'Villa Movers Dubai', 'Office Relocation Dubai', 'Furniture Movers UAE', 
    'Packing and Moving Services Dubai', 'Apartment Movers Dubai', 
    'Professional Relocation Services UAE', 'Best Moving Company UAE'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="bg-slate-900/80 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">Covering All 7 Emirates</h4>
              <p className="text-xs text-slate-400">Dubai, Abu Dhabi, Sharjah & all UAE</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">100% Safe & Insured</h4>
              <p className="text-xs text-slate-400">Export materials & zero damage policy</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">24/7 Fast Support</h4>
              <p className="text-xs text-slate-400">Instant quotes via Call & WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center font-extrabold text-xl text-slate-950 tracking-tighter shadow-md">
              BR
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold text-white tracking-tight">BEST ROUTE</span>
              <p className="text-[10px] text-orange-400 uppercase tracking-[0.2em] font-medium -mt-1">RELOCATION SERVICES</p>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            Best Route Relocation Services is the UAE’s premier residential and commercial moving specialist. Providing safe packing, timely transportation, and seamless moving across all 7 Emirates.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs transition-all shadow-md shadow-orange-500/20"
              id="footer-get-quote-btn"
            >
              Request Free Quote Now
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
            Quick Navigation
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {([
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Our Company' },
              { id: 'services', label: 'Moving Services' },
              { id: 'why-choose-us', label: 'Why Choose Us' },
              { id: 'process', label: 'Our 4-Step Process' },
              { id: 'faq', label: 'Frequently Asked Questions' },
              { id: 'contact', label: 'Contact & Quotes' },
            ] as const).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  id={`footer-nav-${item.id}`}
                >
                  <span className="text-amber-500 font-mono">›</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
            Relocation Services
          </h3>
          <ul className="space-y-2 text-xs text-slate-400">
            {[
              'Home Relocation',
              'Apartment Moving',
              'Villa Relocation',
              'Office Relocation',
              'Furniture Moving',
              'Packing & Unpacking',
              'Loading & Unloading',
              'Storage Solutions',
              'International Relocation'
            ].map((sName) => (
              <li key={sName}>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>{sName}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (No Physical Address per prompt instructions) */}
        <div>
          <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
            Direct Contact
          </h3>
          
          <div className="space-y-3 text-xs">
            <a 
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
              id="footer-contact-phone"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Direct Phone Call</p>
                <p className="font-bold text-white group-hover:text-amber-400">{COMPANY_CONTACT.phone}</p>
              </div>
            </a>

            <a 
              href={COMPANY_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              id="footer-contact-whatsapp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 fill-emerald-500/20" />
              <div>
                <p className="text-[10px] text-slate-400 font-medium">24/7 WhatsApp Chat</p>
                <p className="font-bold text-emerald-400 group-hover:underline">{COMPANY_CONTACT.whatsapp}</p>
              </div>
            </a>

            <a 
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors group"
              id="footer-contact-email"
            >
              <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Official Email</p>
                <p className="font-bold text-slate-200 group-hover:text-blue-400 break-all">{COMPANY_CONTACT.email}</p>
              </div>
            </a>
          </div>

          <p className="text-[11px] text-slate-500 mt-4 leading-normal">
            Service available across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah & Umm Al Quwain.
          </p>
        </div>
      </div>

      {/* SEO Keywords Tag Cloud */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
            Popular Service Search Categories in UAE
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {seoKeywords.map((kw) => (
              <span 
                key={kw} 
                className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-800 bg-slate-900 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 <span className="text-white font-medium">Best Route Relocation Services</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-400">Active Today:</span>
              <a href={`tel:${COMPANY_CONTACT.phoneFormatted}`} className="text-white hover:text-orange-400 transition-colors">
                +971 58 140 1608
              </a>
            </div>
            <div className="text-slate-400 italic font-medium">
              No Hidden Fees
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors bg-slate-950 px-3 py-1.5 rounded border border-slate-800"
              id="footer-back-to-top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
