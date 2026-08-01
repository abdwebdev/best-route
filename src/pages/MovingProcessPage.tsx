import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../types';
import { CheckCircle2, Phone, MessageSquare, ArrowRight, ClipboardList, CheckSquare, Square } from 'lucide-react';

interface MovingProcessPageProps {
  onOpenQuoteModal: () => void;
}

export const MovingProcessPage: React.FC<MovingProcessPageProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Free Consultation & Survey',
      desc: 'We start by discussing your move requirements via phone, WhatsApp, or video call. For large villas or corporate offices, a supervisor can conduct an on-site survey to inspect item volume, access elevators, and parking facilities.'
    },
    {
      step: 'Step 2',
      title: 'Transparent Quotation',
      desc: 'You receive a detailed written quotation outlining total cost, required crew size, vehicle type, packing material breakdown, and proposed timeline. Zero hidden fees.'
    },
    {
      step: 'Step 3',
      title: 'Professional Packing & Labeling',
      desc: 'On moving day, our crew arrives with double-walled boxes, bubble wrap, and stretch film. Furniture is dismantled by expert carpenters, wrapped securely, and every box is labeled by room.'
    },
    {
      step: 'Step 4',
      title: 'Safe & Strategic Loading',
      desc: 'Our heavy-lifting crew uses lifting straps, trolleys, and ramps to load your items systematically into covered, padded moving trucks equipped with tail-lifts.'
    },
    {
      step: 'Step 5',
      title: 'Monitored Transportation',
      desc: 'Your belongings are driven by licensed commercial drivers familiar with all highways and routes across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates.'
    },
    {
      step: 'Step 6',
      title: 'Careful Delivery & Placement',
      desc: 'Upon arrival at your new location, we unload items with extreme care, placing each piece of furniture and box into its designated room.'
    },
    {
      step: 'Step 7',
      title: 'Unpacking & Furniture Reassembly',
      desc: 'Our carpenters reassemble beds, wardrobes, and dining tables. We unpack boxes, help arrange essential furniture, and haul away all used packing materials leaving your home clean.'
    }
  ];

  // Moving Day Checklist Interactive State
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    'item-1': true,
    'item-2': true,
    'item-3': false,
    'item-4': false,
    'item-5': false,
    'item-6': false,
  });

  const toggleCheck = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistItems = [
    { id: 'item-1', label: 'Apply for Building Move-Out Permit / NOC from building management' },
    { id: 'item-2', label: 'Book Best Route Relocation Services at least 2-3 days prior' },
    { id: 'item-3', label: 'Clear utility bills (DEWA / SEWA / FEWA / Empower) and disconnect internet' },
    { id: 'item-4', label: 'Pack personal documents, jewelry, passports, and cash in a personal carry bag' },
    { id: 'item-5', label: 'Apply for Move-In Permit NOC for the new destination building' },
    { id: 'item-6', label: 'Reserve elevator space with building security on moving day' },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 text-center px-4 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
          Our Seamless Workflow
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
          The 7-Stage Best Route Moving Process
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          How we ensure your move across the UAE is executed smoothly, safely, and right on schedule.
        </p>
      </section>

      {/* 7 Detailed Steps List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {steps.map((s, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start gap-6 hover:border-orange-500/50 transition-colors"
          >
            <div className="px-4 py-2 rounded-xl bg-slate-950 text-orange-400 font-heading font-black text-sm shrink-0 border border-slate-800">
              {s.step}
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-white">{s.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* INTERACTIVE MOVING DAY CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-white">Your Moving Day Prep Checklist</h3>
              <p className="text-xs text-slate-400">Interactive checklist to help you stay organized before moving day</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {checklistItems.map((item) => {
              const isChecked = checklist[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border transition-colors cursor-pointer flex items-center gap-3 ${
                    isChecked ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                  <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-slate-400' : ''}`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-800">
            <p className="text-xs text-slate-400">Need help with building permits or scheduling?</p>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs"
              id="process-checklist-quote-btn"
            >
              Book Your Move Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
