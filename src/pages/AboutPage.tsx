import React from 'react';
import { COMPANY_CONTACT } from '../types';
import { EMIRATES_COVERAGE } from '../data/companyData';
import { ShieldCheck, Target, Eye, Heart, Award, Users, Truck, CheckCircle2, Phone, MessageSquare, MapPin } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            About Our Relocation Company
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Best Route Relocation Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The UAE’s premier moving and relocation specialist, built on reliability, safety, transparent pricing, and 100% customer satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years of Experience in UAE' },
            { number: '12,500+', label: 'Projects Completed' },
            { number: '99.8%', label: 'Happy Customers' },
            { number: '7 Emirates', label: 'Complete Coverage' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-center space-y-1">
              <p className="font-heading font-black text-3xl sm:text-4xl text-orange-400">{stat.number}</p>
              <p className="text-xs font-semibold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20">
            <Award className="w-4 h-4" />
            <span>Our Journey & Heritage</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Delivering Peace of Mind with Every Move Across the Emirates
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Best Route Relocation Services was founded with a singular purpose: to remove the stress, hassle, and uncertainty from residential and commercial moving in the UAE. Moving home or office is a major life event, and our goal is to make the transition as smooth and seamless as possible.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether moving a studio apartment in Dubai Marina, a luxury villa in Arabian Ranches, or a corporate headquarters to Abu Dhabi, our uniformed team handles every item with white-glove care.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-colors"
              id="about-call-btn"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call Us Direct</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-xs transition-colors"
              id="about-quote-btn"
            >
              Request Free Survey & Quote
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Best Route Relocation Services professional team at work"
            className="w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl border border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Our Mission, Vision & Core Values
            </h2>
            <p className="text-slate-400 text-sm">
              The guiding principles that drive our team every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Our Mission</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                To provide safe, reliable, and affordable relocation services across the UAE by combining trained professionals, high-grade export packaging, and transparent pricing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Our Vision</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                To be recognized as the most trusted and customer-focused relocation company in the Middle East, setting the industry standard for care, speed, and integrity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Our Core Values</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Punctuality, complete honesty with zero hidden charges, respect for client property, continuous crew training, and round-the-clock support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS TRUST US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Why Customers Trust Us
          </h2>
          <p className="text-slate-300 text-sm">
            Here is what sets Best Route Relocation Services apart from generic movers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Trained & Uniformed Moving Crew', desc: 'Every mover undergoes rigorous training in lifting ergonomics, fragile packing, and furniture dismantling.' },
            { title: 'Export-Grade Packing Supplies', desc: 'We never compromise on quality. We use double-walled boxes, 50-micron bubble wrap, and heavy-duty corner guards.' },
            { title: 'Modern Padded Enclosed Trucks', desc: 'Our fleet consists of fully covered box trucks equipped with hydraulic tail-lifts and interior anchoring straps.' },
            { title: 'In-House Skilled Carpenters', desc: 'Expert carpentry specialists for IKEA, Italian, and complex modular wardrobe & bed dismantling.' },
            { title: 'Strict Zero Hidden Fee Policy', desc: 'The price quoted is the exact price you pay. No unexpected surcharge on moving day.' },
            { title: 'Building NOC & Permit Assistance', desc: 'We assist with Emaar, Nakheel, DAMAC, and Abu Dhabi municipality building move permits.' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white">{item.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE COVERAGE ACROSS ALL 7 EMIRATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white space-y-8 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Coverage Across UAE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
              Moving Services in All 7 Emirates
            </h2>
            <p className="text-slate-400 text-sm">
              We provide local and inter-emirate moving between any city in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMIRATES_COVERAGE.map((em) => (
              <div key={em.name} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <MapPin className="w-4 h-4" />
                  <h3 className="font-heading text-lg text-white">{em.name}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{em.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
