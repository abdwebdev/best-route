import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import { 
  Home, Building, Crown, Briefcase, Armchair, PackageCheck, 
  Truck, Warehouse, Globe, CheckCircle2, ArrowRight, Phone, MessageSquare 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: (defaultService?: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal, selectedServiceId }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    if (selectedServiceId) {
      setActiveFilter(selectedServiceId);
      const el = document.getElementById(`service-detail-${selectedServiceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Building': return <Building className="w-6 h-6" />;
      case 'Crown': return <Crown className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Armchair': return <Armchair className="w-6 h-6" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      default: return <Truck className="w-6 h-6" />;
    }
  };

  const filteredServices = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === activeFilter);

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 rounded-3xl border border-slate-800 text-center px-4 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Professional Relocation Services
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white">
          Comprehensive Moving Solutions Across UAE
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From studio apartments to luxury multi-story villas and corporate office hubs, we deliver tailored moving solutions with certified movers and export-grade packing.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            All Services ({SERVICES_DATA.length})
          </button>

          {SERVICES_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveFilter(s.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === s.id
                  ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-8 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-md h-[300px]">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/90 text-orange-400 border border-slate-800 shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                      Service Details
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Suitable For Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">Ideal for:</span>
                    {service.suitableFor.map((item, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all"
                      id={`service-quote-btn-${service.id}`}
                    >
                      Request Quote for {service.title}
                    </button>

                    <a
                      href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
                      className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={COMPANY_CONTACT.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Benefits & Process Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                {/* Benefits */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="font-heading font-bold text-base text-white">Key Benefits & Features</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Workflow Steps */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="font-heading font-bold text-base text-orange-400">Step-by-Step Execution</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.processSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-orange-400 text-xs shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
