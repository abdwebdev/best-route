import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../types';
import { Calculator, ArrowRight, MessageSquare, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CostEstimatorWidgetProps {
  onOpenQuoteModal: () => void;
}

export const CostEstimatorWidget: React.FC<CostEstimatorWidgetProps> = ({ onOpenQuoteModal }) => {
  const [property, setProperty] = useState('2 BHK Apartment');
  const [fromEmirate, setFromEmirate] = useState('Dubai');
  const [toEmirate, setToEmirate] = useState('Dubai');
  const [packing, setPacking] = useState(true);
  const [disassembly, setDisassembly] = useState(true);

  // Price Calculation Engine
  const getCalculatedPrice = () => {
    let price = 800;

    if (property === 'Studio Apartment') price = 500;
    else if (property === '1 BHK Apartment') price = 650;
    else if (property === '2 BHK Apartment') price = 1100;
    else if (property === '3 BHK Apartment') price = 1600;
    else if (property === '3-4 BHK Villa') price = 2400;
    else if (property === '5+ BHK Luxury Villa') price = 3200;
    else if (property === 'Office / Commercial Space') price = 1900;
    else if (property === 'Furniture / Single Item') price = 350;

    if (fromEmirate !== toEmirate) {
      price += 400;
    }

    if (packing) price += 250;
    if (disassembly) price += 150;

    const max = Math.round(price * 1.25);
    return { min: price, max };
  };

  const currentPrice = getCalculatedPrice();

  const getWhatsAppBookingUrl = () => {
    const text = `Hello Best Route Relocation Services,%0A%0AI used your Instant Estimator on the website and want to book my move:%0A- *Property:* ${encodeURIComponent(property)}%0A- *Route:* ${encodeURIComponent(fromEmirate)} to ${encodeURIComponent(toEmirate)}%0A- *Estimated Price:* AED ${currentPrice.min} - ${currentPrice.max}%0A- *Includes:* ${packing ? 'Full Packing, ' : ''}${disassembly ? 'Furniture Disassembly/Assembly' : ''}%0A%0APlease confirm availability for my preferred move date.`;
    return `https://wa.me/971581401608?text=${text}`;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-white text-xl sm:text-2xl">
                Instant Moving Cost Calculator
              </h3>
              <p className="text-xs text-slate-400">
                Select your move details for an immediate upfront UAE price estimate
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold self-start sm:self-center">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Hidden Fees
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Property Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              1. Property / Move Type
            </label>
            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium text-sm focus:outline-none focus:border-amber-500 transition-colors"
              id="estimator-select-property"
            >
              <option value="Studio Apartment">Studio Apartment</option>
              <option value="1 BHK Apartment">1 BHK Apartment</option>
              <option value="2 BHK Apartment">2 BHK Apartment</option>
              <option value="3 BHK Apartment">3 BHK Apartment</option>
              <option value="3-4 BHK Villa">3-4 BHK Villa</option>
              <option value="5+ BHK Luxury Villa">5+ BHK Luxury Villa</option>
              <option value="Office / Commercial Space">Office / Commercial Space</option>
              <option value="Furniture / Single Item">Single Heavy Furniture Item</option>
            </select>
          </div>

          {/* From Emirate */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Moving From
            </label>
            <select
              value={fromEmirate}
              onChange={(e) => setFromEmirate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium text-sm focus:outline-none focus:border-amber-500 transition-colors"
              id="estimator-select-from"
            >
              {COMPANY_CONTACT.coverageEmirates.map((em) => (
                <option key={em} value={em}>{em}</option>
              ))}
            </select>
          </div>

          {/* To Emirate */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Moving To
            </label>
            <select
              value={toEmirate}
              onChange={(e) => setToEmirate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium text-sm focus:outline-none focus:border-amber-500 transition-colors"
              id="estimator-select-to"
            >
              {COMPANY_CONTACT.coverageEmirates.map((em) => (
                <option key={em} value={em}>{em}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Add-ons Checkboxes */}
        <div className="flex flex-wrap items-center gap-6 pt-1 text-sm text-slate-300">
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={packing}
              onChange={(e) => setPacking(e.target.checked)}
              className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
              id="estimator-check-packing"
            />
            <span className="font-semibold text-slate-200">Include Export Packing (Boxes & Bubble Wrap)</span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={disassembly}
              onChange={(e) => setDisassembly(e.target.checked)}
              className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
              id="estimator-check-carpentry"
            />
            <span className="font-semibold text-slate-200">Include Carpenter Furniture Disassembly & Reassembly</span>
          </label>
        </div>

        {/* Estimate Result Display */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Estimated Total Price Range
            </p>
            <div className="flex items-baseline gap-2 justify-center lg:justify-start">
              <span className="font-heading text-3xl sm:text-4xl font-black text-orange-400">
                AED {currentPrice.min} – {currentPrice.max}
              </span>
              <span className="text-xs text-slate-400 font-medium">approx.</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Includes enclosed padded truck, uniformed loaders, and insurance coverage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all text-center"
              id="estimator-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Book via WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
              id="estimator-detailed-quote-btn"
            >
              <span>Request Detailed Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
