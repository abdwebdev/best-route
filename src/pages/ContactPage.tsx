import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../types';
import { CostEstimatorWidget } from '../components/CostEstimatorWidget';
import { Phone, MessageSquare, Mail, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface ContactPageProps {
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    movingFrom: 'Dubai',
    movingTo: 'Dubai',
    serviceRequired: 'Home Relocation',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Directly launch WhatsApp with all prefilled details
    const waUrl = getWhatsAppPrefilledUrl();
    window.open(waUrl, '_blank');
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = `Hello Best Route Relocation Services,%0A%0AContact Form Submission:%0A- *Name:* ${encodeURIComponent(formData.fullName || 'Customer')}%0A- *Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A- *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A- *Moving From:* ${encodeURIComponent(formData.movingFrom)}%0A- *Moving To:* ${encodeURIComponent(formData.movingTo)}%0A- *Service Required:* ${encodeURIComponent(formData.serviceRequired)}%0A- *Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Flexible')}%0A- *Message:* ${encodeURIComponent(formData.message || 'None')}`;
    return `https://wa.me/971581401608?text=${text}`;
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 text-center px-4 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
          Get in Touch
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
          Contact Best Route Relocation Services
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Request a free moving quote, ask questions about building permits, or schedule an on-site survey. We are available 24/7 across all 7 Emirates.
        </p>
      </section>

      {/* Direct Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <a
          href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-orange-500 transition-colors flex items-center gap-4 group"
          id="contact-card-phone"
        >
          <div className="p-4 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Call</p>
            <p className="font-heading font-bold text-white text-lg group-hover:text-orange-400">{COMPANY_CONTACT.phone}</p>
            <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">✓ 24/7 Hotline</p>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href={COMPANY_CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-emerald-500 transition-colors flex items-center gap-4 group"
          id="contact-card-whatsapp"
        >
          <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-6 h-6 fill-emerald-500/20" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Chat</p>
            <p className="font-heading font-bold text-emerald-400 text-lg">{COMPANY_CONTACT.whatsapp}</p>
            <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">✓ Instant Response</p>
          </div>
        </a>

        {/* Email Card */}
        <a
          href={`mailto:${COMPANY_CONTACT.email}`}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-blue-500 transition-colors flex items-center gap-4 group"
          id="contact-card-email"
        >
          <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</p>
            <p className="font-heading font-bold text-white text-sm break-all group-hover:text-blue-400">{COMPANY_CONTACT.email}</p>
            <p className="text-[11px] text-slate-400 font-medium mt-0.5">Reply within 1 hour</p>
          </div>
        </a>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-heading font-extrabold text-2xl text-white">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-400">
              Fill out your move details below for an official written quotation.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="font-heading font-bold text-xl text-emerald-300">Message Received!</h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Thank you, <span className="font-bold">{formData.fullName}</span>. Our relocation manager will contact you at <span className="font-bold">{formData.phone}</span> shortly.
              </p>
              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Send details via WhatsApp Now</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adnan Akhtar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-input-name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 58 140 1608"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-input-phone"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-input-email"
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Service Required</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-select-service"
                  >
                    <option value="Home Relocation">Home Relocation</option>
                    <option value="Apartment Moving">Apartment Moving</option>
                    <option value="Villa Relocation">Villa Relocation</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Furniture Moving">Furniture Moving</option>
                    <option value="Packing Services">Packing Services</option>
                    <option value="Storage Solutions">Storage Solutions</option>
                    <option value="International Relocation">International Relocation</option>
                  </select>
                </div>

                {/* Moving From */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Moving From</label>
                  <select
                    value={formData.movingFrom}
                    onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-select-from"
                  >
                    {COMPANY_CONTACT.coverageEmirates.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                {/* Moving To */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Moving To</label>
                  <select
                    value={formData.movingTo}
                    onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                    id="contact-select-to"
                  >
                    {COMPANY_CONTACT.coverageEmirates.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                  id="contact-input-date"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Message / Items Overview</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your items, elevators, or special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
                  id="contact-textarea-message"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="submit"
                  className="py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all"
                  id="contact-submit-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </button>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
                  className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 font-bold text-xs flex items-center justify-center gap-2 text-center transition-colors"
                  id="contact-call-now-btn"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppPrefilledUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 text-center transition-colors"
                  id="contact-whatsapp-now-btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
            <h3 className="font-heading font-bold text-xl text-white">Why Work With Us?</h3>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Fully Verified & Insured</p>
                  <p className="text-slate-400 text-xs">All cargo in transit is insured against accidental damage.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">24/7 Rapid Operations</p>
                  <p className="text-slate-400 text-xs">Overnight and weekend moves tailored for corporate schedules.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Building Permit NOC Guidance</p>
                  <p className="text-slate-400 text-xs">Assistance with Emaar, Nakheel, and DAMAC developer permits.</p>
                </div>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <p className="font-bold text-amber-400 uppercase tracking-wider">Direct Contact Details:</p>
              <p className="text-slate-300">📞 Phone: {COMPANY_CONTACT.phone}</p>
              <p className="text-slate-300">💬 WhatsApp: {COMPANY_CONTACT.whatsapp}</p>
              <p className="text-slate-300">✉️ Email: {COMPANY_CONTACT.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimator on Contact Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimatorWidget onOpenQuoteModal={onOpenQuoteModal} />
      </section>
    </div>
  );
};
