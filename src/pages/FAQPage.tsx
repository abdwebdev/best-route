import React, { useState } from 'react';
import { FAQ_DATA } from '../data/companyData';
import { COMPANY_CONTACT } from '../types';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Phone } from 'lucide-react';

interface FAQPageProps {
  onOpenQuoteModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenQuoteModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Rates' },
    { id: 'packing', label: 'Packing & Boxes' },
    { id: 'insurance', label: 'Insurance & Safety' },
    { id: 'office', label: 'Office Moving' },
    { id: 'furniture', label: 'Furniture & Carpentry' },
    { id: 'booking', label: 'Booking & Permits' },
    { id: 'storage', label: 'Storage Solutions' },
    { id: 'international', label: 'International Relocation' },
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 text-center px-4 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
          Knowledge Base & Support
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Clear, honest answers regarding moving costs, packing standards, building permits, furniture dismantling, and transit safety.
        </p>

        {/* Search Input */}
        <div className="max-w-xl mx-auto pt-4 relative">
          <input
            type="text"
            placeholder="Search questions (e.g., pricing, packing, storage, office)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-xl"
            id="faq-search-input"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
            No questions matched your search query. Try typing a different keyword or contact our support directly.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 shadow-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-850/60 transition-colors"
                  id={`faq-accordion-toggle-${idx}`}
                >
                  <span className="font-heading font-bold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-orange-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-bold text-2xl text-white">Still Have Unanswered Questions?</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Our move managers are available 24/7 to discuss your specific moving needs, building NOC requirements, or special item care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call (+971 58 140 1608)</span>
            </a>

            <a
              href={COMPANY_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
