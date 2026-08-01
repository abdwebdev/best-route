import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../types';
import { X, Calculator, Send, MessageSquare, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = 'Home Relocation' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    movingFrom: 'Dubai',
    movingTo: 'Dubai',
    propertyType: '2 BHK Apartment',
    serviceRequired: defaultService,
    preferredDate: '',
    needPacking: true,
    needStorage: false,
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update default service if changed
  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Estimate calculation logic
  const calculateEstimate = () => {
    let basePrice = 750;
    const p = formData.propertyType;
    if (p.includes('Studio')) basePrice = 500;
    else if (p.includes('1 BHK')) basePrice = 650;
    else if (p.includes('2 BHK')) basePrice = 1100;
    else if (p.includes('3 BHK')) basePrice = 1600;
    else if (p.includes('Villa')) basePrice = 2400;
    else if (p.includes('Office')) basePrice = 1800;
    else if (p.includes('Single')) basePrice = 350;

    // Inter-emirate distance surge
    if (formData.movingFrom !== formData.movingTo) {
      basePrice += 400;
    }

    if (formData.needPacking) basePrice += 250;
    if (formData.needStorage) basePrice += 500;

    return { min: basePrice, max: Math.round(basePrice * 1.25) };
  };

  const estimate = calculateEstimate();

  const getWhatsAppPrefilledUrl = () => {
    const text = `Hello Best Route Relocation Services,%0A%0AI would like to request a moving quote:%0A- *Name:* ${encodeURIComponent(formData.fullName || 'Valued Customer')}%0A- *Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A- *Moving From:* ${encodeURIComponent(formData.movingFrom)}%0A- *Moving To:* ${encodeURIComponent(formData.movingTo)}%0A- *Property:* ${encodeURIComponent(formData.propertyType)}%0A- *Service:* ${encodeURIComponent(formData.serviceRequired)}%0A- *Estimated Price:* AED ${estimate.min} - ${estimate.max}%0A- *Packing:* ${formData.needPacking ? 'Yes' : 'No'}%0A- *Storage:* ${formData.needStorage ? 'Yes' : 'No'}%0A- *Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'As soon as possible')}%0A- *Notes:* ${encodeURIComponent(formData.additionalNotes || 'None')}`;
    return `https://wa.me/971581401608?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Directly launch WhatsApp with all prefilled details
    const waUrl = getWhatsAppPrefilledUrl();
    window.open(waUrl, '_blank');
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) handleModalClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg sm:text-xl">
                Get a Free Moving Quote
              </h3>
              <p className="text-xs text-slate-400">
                Instant price estimate across all UAE Emirates
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleModalClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            id="quote-modal-close-btn"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Submission Success View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-2xl text-white">Opening WhatsApp Chat...</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you <span className="font-semibold text-orange-400">{formData.fullName || 'Valued Customer'}</span>! Your quote details have been compiled and sent to WhatsApp.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto space-y-2">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Your Estimated Price Range:</p>
              <p className="font-heading text-2xl font-extrabold text-orange-400">
                AED {estimate.min} – {estimate.max} <span className="text-xs font-normal text-slate-400">(Approx. range)</span>
              </p>
              <p className="text-[11px] text-slate-400">Includes transport from {formData.movingFrom} to {formData.movingTo}. No hidden charges.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                id="modal-success-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Re-Open WhatsApp Chat</span>
              </a>

              <button
                type="button"
                onClick={handleModalClose}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700"
                id="modal-success-close-btn"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Instant Estimator Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-300 font-medium">Estimated Move Cost:</p>
                  <p className="font-heading text-xl sm:text-2xl font-extrabold text-orange-400">
                    AED {estimate.min} – {estimate.max}
                  </p>
                </div>
              </div>
              <span className="text-[11px] bg-slate-900/80 text-orange-300 px-3 py-1.5 rounded-lg border border-orange-500/20 font-semibold">
                Instant Calculation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed Al Mansoori"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-input-name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp <span className="text-orange-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-input-phone"
                />
              </div>

              {/* Moving From */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Moving From (Emirate)</label>
                <select
                  value={formData.movingFrom}
                  onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-select-from"
                >
                  {COMPANY_CONTACT.coverageEmirates.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
              </div>

              {/* Moving To */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Moving To (Emirate)</label>
                <select
                  value={formData.movingTo}
                  onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-select-to"
                >
                  {COMPANY_CONTACT.coverageEmirates.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property Type / Size</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-select-property"
                >
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="1 BHK Apartment">1 BHK Apartment</option>
                  <option value="2 BHK Apartment">2 BHK Apartment</option>
                  <option value="3 BHK Apartment">3 BHK Apartment</option>
                  <option value="3-4 BHK Villa">3-4 BHK Villa</option>
                  <option value="5+ BHK Villa">5+ BHK Villa / Mansion</option>
                  <option value="Office Commercial">Office / Commercial Space</option>
                  <option value="Single Furniture">Single Furniture Item / Small Load</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Moving Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  id="quote-input-date"
                />
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needPacking}
                  onChange={(e) => setFormData({ ...formData, needPacking: e.target.checked })}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-orange-500 focus:ring-0"
                />
                <span>Include Full Packing Service</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needStorage}
                  onChange={(e) => setFormData({ ...formData, needStorage: e.target.checked })}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-orange-500 focus:ring-0"
                />
                <span>Need Storage Facility</span>
              </label>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Notes / Special Instructions</label>
              <textarea
                rows={2}
                placeholder="e.g. Need IKEA wardrobe disassembly, floor 12 elevator move..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                id="quote-textarea-notes"
              ></textarea>
            </div>

            {/* Form Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-98 transition-all"
                id="quote-submit-btn"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Chat on WhatsApp</span>
              </button>

              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors text-center"
                id="quote-instant-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Direct WhatsApp Quote</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>100% Free Consultation. No payment required to get a quote.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

