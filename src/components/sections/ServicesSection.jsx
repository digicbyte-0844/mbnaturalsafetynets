import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { servicesData, serviceCategories } from '../../data/servicesData';
import Badge from '../ui/Badge';

export default function ServicesSection({ onOpenQuoteSheet }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSpecs, setExpandedSpecs] = useState({});

  const toggleSpecs = (id) => {
    setExpandedSpecs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredServices = servicesData.filter(svc => {
    if (activeCategory === 'all') return true;
    return svc.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-canvas-light dark:bg-obsidian-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="azure" size="sm" className="mb-3">
            11 CERTIFIED SAFETY, SPORTS & BIRD NETTING SOLUTIONS • HYDERABAD
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered Protection for Balconies, <span className="text-brand-600 dark:text-brand-400">Birds & Sports Enclosures</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            From high-rise residential pigeon nets and toddler safety barriers to rooftop cricket pitches, multi-sport turf grounds, and anti-drowning swimming pool nets. Installed by certified technicians across Hyderabad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar select-none">
          {serviceCategories.map(cat => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 min-h-[40px] px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-glow-azure scale-[1.02]'
                  : 'bg-white dark:bg-obsidian-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const isSpecsExpanded = !!expandedSpecs[service.id];

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-obsidian-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                      onError={(e) => {
                        e.currentTarget.src = '/images/hero-balcony.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Price Tag Pill */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold shadow-md">
                      {service.priceRange}
                    </div>

                    {/* Turnaround Time Pill */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-xl bg-brand-500/90 text-white text-[11px] font-bold flex items-center gap-1 shadow-md">
                      <Clock className="w-3 h-3" />
                      <span>{service.turnaround}</span>
                    </div>

                    {/* Warranty Tag */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {service.badge}
                      </span>
                      <span className="text-[11px] text-amber-400 font-bold">
                        ★ {service.rating} ({service.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-eyebrow text-brand-600 dark:text-brand-400 block mb-1">
                      {service.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Core Feature Bullet Points */}
                    <div className="mt-4 space-y-2 border-t border-slate-100 dark:border-white/5 pt-3">
                      {service.coreFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Collapsible Technical Specifications Accordion */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                      <button
                        type="button"
                        onClick={() => toggleSpecs(service.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 py-1 hover:underline cursor-pointer"
                      >
                        <span>{isSpecsExpanded ? 'Hide Specifications' : '+ View 6 Technical Rigging Specs'}</span>
                        {isSpecsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isSpecsExpanded && (
                        <div className="mt-2.5 p-3 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border space-y-1.5 text-xs animate-fade-in">
                          {service.technicalSpecs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex justify-between items-center text-[11px]">
                              <span className="text-slate-500 dark:text-slate-400">{spec.label}:</span>
                              <span className="font-bold text-slate-800 dark:text-slate-200 text-right">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteSheet(service.id)}
                    className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-xs shadow-glow-azure flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Doorstep Quote</span>
                  </button>

                  <Link
                    to={`/services/${service.id}`}
                    className="min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
