import React, { useState } from 'react';
import { PageId, COMPANY_CONTACT } from '../types';
import { SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, WHY_CHOOSE_US_CARDS, MOVING_PROCESS_STEPS, EMIRATES_COVERAGE } from '../data/companyData';
import { CostEstimatorWidget } from '../components/CostEstimatorWidget';
import { 
  Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Star, 
  Users, Tag, Truck, Clock, Smile, ChevronDown, ChevronUp, MapPin, 
  Sparkles, Award, Home, Building, Crown, Briefcase, Armchair, 
  PackageCheck, Warehouse, Globe, HelpCircle 
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onOpenQuoteModal: (defaultService?: string) => void;
  setSelectedServiceId: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onOpenQuoteModal, setSelectedServiceId }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedEmirate, setSelectedEmirate] = useState('Dubai');

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

  const getWhyChooseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-amber-400" />;
      case 'Tag': return <Tag className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-amber-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-400" />;
      case 'Smile': return <Smile className="w-6 h-6 text-amber-400" />;
      default: return <CheckCircle2 className="w-6 h-6 text-amber-400" />;
    }
  };

  const handleLearnMoreService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* HERO SECTION */}
      <section className="relative pt-8 lg:pt-16 pb-12 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        {/* Glow ambient background graphics */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-orange-500/20">
                Premium Moving Agency • UAE Wide
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
                Reliable Relocation <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200">Across the UAE</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Moving doesn't have to be stressful. Best Route Relocation Services provides professional home, office, and furniture moving with secure packing and timely delivery throughout Dubai, Abu Dhabi, and beyond.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-3"
                  id="hero-call-now-btn"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call Now</span>
                  <span className="text-xs text-slate-950/70 font-normal border-l border-slate-950/30 pl-3">+971 58 140 1608</span>
                </a>

                <a
                  href={COMPANY_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold transition-all flex items-center justify-center gap-2.5"
                  id="hero-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
                  id="hero-get-quote-btn"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-center lg:text-left">
                <div>
                  <div className="text-3xl font-black text-white">12+</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">5K+</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Happy Moves</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Insured Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Aside Content Sidebar */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
              {/* Services Selection */}
              <div>
                <h3 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Our Specialties</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => handleLearnMoreService('home-relocation')}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-orange-500/40 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded bg-slate-900 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-sm text-white">Home Relocation</div>
                    <div className="text-[11px] text-slate-400">Villa & Apartments</div>
                  </div>

                  <div 
                    onClick={() => handleLearnMoreService('office-relocation')}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-orange-500/40 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded bg-slate-900 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                      <Building className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-sm text-white">Office Moving</div>
                    <div className="text-[11px] text-slate-400">Corporate Setup</div>
                  </div>

                  <div 
                    onClick={() => handleLearnMoreService('packing-services')}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-orange-500/40 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded bg-slate-900 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                      <PackageCheck className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-sm text-white">Secure Packing</div>
                    <div className="text-[11px] text-slate-400">Premium Wrapping</div>
                  </div>

                  <div 
                    onClick={() => handleLearnMoreService('international-relocation')}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-orange-500/40 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded bg-slate-900 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-sm text-white">International</div>
                    <div className="text-[11px] text-slate-400">Global Shipping</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Feature */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex text-orange-400 gap-1 mb-2 text-xs">★★★★★</div>
                  <p className="italic text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    "The team arrived exactly on time in Dubai Marina. They packed my entire 3-bedroom villa in just 4 hours and delivered it to Abu Dhabi without a single scratch. Truly professional."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-orange-400 border border-slate-700">AR</div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Ahmed R.</div>
                      <div className="text-slate-400 text-[10px] uppercase">Villa Move (Dubai to Abu Dhabi)</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-3 opacity-10 text-5xl font-serif text-white">"</div>
              </div>

              {/* Coverage Badge */}
              <div className="pt-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-2">Coverage Area</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-medium text-slate-300">Dubai</span>
                  <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-medium text-slate-300">Abu Dhabi</span>
                  <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-medium text-slate-300">Sharjah</span>
                  <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-medium text-slate-300">Ajman</span>
                  <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] font-medium text-slate-300">Ras Al Khaimah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Instant Estimator Widget */}
          <div className="mt-12 lg:mt-16">
            <CostEstimatorWidget onOpenQuoteModal={onOpenQuoteModal} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - 6 PREMIUM CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Unmatched Quality & Care
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Why Choose Best Route Relocation Services?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We combine trained professionals, export-grade materials, and modern equipment to make moving across the UAE effortless and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_CARDS.map((card) => (
            <div 
              key={card.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-orange-500 transition-colors">
                {getWhyChooseIcon(card.iconName)}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setActivePage('why-choose-us');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 hover:underline"
            id="home-why-choose-more-btn"
          >
            <span>Read full details on our guarantees & safety standards</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SERVICES PREVIEW - 9 SERVICE CARDS */}
      <section className="bg-slate-900 py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Full-Spectrum Solutions
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3">
                Our Moving & Relocation Services
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Comprehensive relocation services designed for residences, corporate offices, single furniture items, and international shipping.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 self-start md:self-auto"
              id="home-all-services-btn"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-slate-950 border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-amber-400 border border-slate-800 shadow-md">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-900/80">
                  <button
                    onClick={() => handleLearnMoreService(service.id)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                    id={`service-card-learn-${service.id}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/20"
                    id={`service-card-quote-${service.id}`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS - 4 MODERN STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Simple & Transparent
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            How Our Moving Process Works
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From your initial call to unpacking the last box in your new home, our streamlined 4-step process ensures complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {MOVING_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl relative flex flex-col justify-between hover:border-orange-500/40 transition-colors"
            >
              <div>
                <span className="font-heading text-4xl font-black text-orange-500/30 block mb-2">
                  {step.number}
                </span>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setActivePage('process');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center gap-2 border border-slate-800 shadow-md"
            id="home-view-full-process-btn"
          >
            <span>Explore Complete 7-Stage Process & Checklist</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      </section>

      {/* UAE EMIRATES COVERAGE MAP SECTION */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              UAE Coverage Area
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Relocation Services Across All 7 Emirates
            </h2>
            <p className="text-slate-400 text-sm">
              We operate dedicated moving fleets stationed across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {EMIRATES_COVERAGE.map((em) => (
              <button
                key={em.name}
                onClick={() => setSelectedEmirate(em.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedEmirate === em.name
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {em.name}
              </button>
            ))}
          </div>

          {/* Selected Emirate Card */}
          {(() => {
            const current = EMIRATES_COVERAGE.find((e) => e.name === selectedEmirate) || EMIRATES_COVERAGE[0];
            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white">{current.name} Moving Services</h3>
                      <p className="text-xs text-slate-400">{current.activeFleetCount} active moving trucks assigned in this area</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(`${current.name} Move`)}
                    className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs"
                  >
                    Book Move in {current.name}
                  </button>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{current.tagline}</p>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Popular Neighborhoods Served:</p>
                  <div className="flex flex-wrap gap-2">
                    {current.popularAreas.map((area) => (
                      <span key={area} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                        ✓ {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* TESTIMONIALS - REALISTIC UAE REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            Real Customer Reviews
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            What Our UAE Clients Say About Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Over 12,500 happy families and corporate clients trust Best Route Relocation Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-orange-500/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[11px] text-slate-400">{t.location}</p>
                </div>
                <span className="text-[10px] bg-orange-500/10 text-orange-400 font-bold px-2 py-0.5 rounded border border-orange-500/20">
                  Verified {t.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION - 10 DETAILED QUESTIONS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Got Questions?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about pricing, packing, insurance, and moving day procedures.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                    id={`faq-home-toggle-${idx}`}
                  >
                    <span className="font-heading font-bold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-900 text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                setActivePage('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline"
              id="home-view-all-faqs-btn"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Have more questions? Visit our full FAQ center</span>
            </button>
          </div>
        </div>
      </section>

      {/* FINAL HIGH-CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-12 lg:p-16 text-slate-950 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">
              Ready for a Stress-Free Move?
            </h2>
            <p className="text-slate-950/90 font-medium text-base sm:text-lg leading-relaxed">
              Get an instant upfront moving estimate today. Professional packing, insured trucks, and expert carpenters ready across Dubai and all UAE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_CONTACT.phoneFormatted}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl active:scale-95 transition-all"
                id="cta-banner-call-btn"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now (+971 58 140 1608)</span>
              </a>

              <a
                href={COMPANY_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl active:scale-95 transition-all"
                id="cta-banner-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm shadow-xl active:scale-95 transition-all"
                id="cta-banner-get-quote-btn"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
