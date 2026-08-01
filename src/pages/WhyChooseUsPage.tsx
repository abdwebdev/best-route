import React from 'react';
import { ShieldCheck, Users, Tag, Clock, Headphones, Truck, Lock, Heart, Check, X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '../types';

interface WhyChooseUsPageProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: 'Experienced Movers',
      desc: 'Our moving crews consist of fully trained, background-checked moving technicians and experienced carpenters with extensive knowledge of UAE building guidelines, elevator access, and furniture handling.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: 'Professional Packing Materials',
      desc: 'We utilize multi-layer export-grade bubble wrap, corrugated cardboard sheets, edge guards, stretch wrapping, and specialized wardrobe cartons to protect every single piece of furniture and decor.'
    },
    {
      icon: <Tag className="w-6 h-6 text-amber-500" />,
      title: 'Affordable & Transparent Pricing',
      desc: 'We offer upfront itemized quotes with zero hidden charges. What we quote before your move is the exact amount you pay upon completion. No surcharges on moving day.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: 'Timely Delivery Guarantee',
      desc: 'Punctuality is our core commitment. We show up on time at your old property and execute the transfer to your new destination according to the agreed schedule.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-500" />,
      title: '24/7 Reliable Customer Support',
      desc: 'Our move coordinators are available around the clock on Phone and WhatsApp to answer questions, send updates, and coordinate building move permits.'
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: 'Modern Moving Equipment',
      desc: 'We maintain a fleet of clean, padded, enclosed moving trucks equipped with hydraulic tail-lifts, furniture dollies, stair trolleys, and heavy-duty lifting straps.'
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-500" />,
      title: 'Secure & Insured Transportation',
      desc: 'Your belongings are fully covered by goods-in-transit liability coverage during loading, road transit across Emirates, and unloading.'
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      title: 'Customer-First Service Philosophy',
      desc: 'We treat your home and belongings with the same care as our own. Our job isn’t done until your furniture is arranged to your complete satisfaction.'
    }
  ];

  const comparisonRows = [
    { feature: 'Trade License & Company Registration', bestRoute: true, others: false },
    { feature: 'Written Upfront Price Guarantee (No Hidden Costs)', bestRoute: true, others: false },
    { feature: 'Certified Carpenters for IKEA & Modular Furniture', bestRoute: true, others: false },
    { feature: 'Export-Grade Double-Walled Boxes & Bubble Wrap', bestRoute: true, others: false },
    { feature: 'Fully Covered Enclosed Box Trucks', bestRoute: true, others: false },
    { feature: 'Goods-in-Transit Liability Insurance', bestRoute: true, others: false },
    { feature: '24/7 WhatsApp & Phone Move Coordination', bestRoute: true, others: false },
    { feature: 'Building Permit & NOC Document Support', bestRoute: true, others: false },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 text-center px-4 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          The Best Route Difference
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
          Why Choose Best Route Relocation Services?
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover why thousands of residents and business owners in Dubai and across the UAE trust us with their valuable belongings.
        </p>
      </section>

      {/* 8 Core Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3 flex flex-col justify-between hover:border-orange-500/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-orange-400">
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-white">{p.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl">
              Best Route Relocation vs. Unlicensed Movers
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              See why hiring a professional registered company saves you money and stress.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-amber-400">
                  <th className="py-4 px-4 font-bold">Service Standard</th>
                  <th className="py-4 px-4 font-bold text-center bg-amber-500/10 rounded-t-xl text-amber-300">
                    Best Route Relocation
                  </th>
                  <th className="py-4 px-4 font-bold text-center text-slate-400">
                    Unlicensed Local Movers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-850/50">
                    <td className="py-3.5 px-4 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center bg-amber-500/5">
                      <div className="flex items-center justify-center text-emerald-400 font-bold">
                        <Check className="w-5 h-5 bg-emerald-500/20 rounded-full p-0.5" />
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center text-rose-500">
                        <X className="w-5 h-5 bg-rose-500/20 rounded-full p-0.5" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-sm shadow-lg"
              id="why-choose-cta-quote"
            >
              Get Your Guaranteed Quote Now
            </button>

            <a
              href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Us Direct (+971 58 140 1608)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
