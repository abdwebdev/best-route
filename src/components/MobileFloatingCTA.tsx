import React from 'react';
import { COMPANY_CONTACT } from '../types';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

interface MobileFloatingCTAProps {
  onOpenQuoteModal: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-white active:scale-95 transition-transform"
          id="floating-cta-call"
        >
          <Phone className="w-4 h-4 text-orange-400 mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        <a
          href={COMPANY_CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 transition-transform shadow-md shadow-emerald-600/20"
          id="floating-cta-whatsapp"
        >
          <MessageSquare className="w-4 h-4 text-white fill-white/20 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold active:scale-95 transition-transform shadow-md shadow-orange-500/20"
          id="floating-cta-quote"
        >
          <Calculator className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[11px] font-extrabold">Free Quote</span>
        </button>
      </div>
    </div>
  );
};
