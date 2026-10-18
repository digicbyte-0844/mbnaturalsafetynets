import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';
import { brandConfig } from '../data/brandConfig';
import Badge from '../components/ui/Badge';
import EngineeringSection from '../components/sections/EngineeringSection';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';

export default function ServicesPage({ onOpenQuoteSheet }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = servicesData.filter(svc => {
    if (activeCategory === 'all') return true;
    return svc.category === activeCategory;
  });

  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title="11 Certified Safety Nets & Invisible Grills Hyderabad | MB"
        description="Explore 11 certified high-rise safety nets, SS 316 invisible grills, bird spikes, cricket & football nets in Hyderabad. 30-min laser measurement & 5-yr warranty."
        canonicalPath="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-20 h-14 mx-auto mb-4 flex items-center justify-center">
            <img
              src={logoEmblem}
              alt="MB Natural Safety Nets"
              className="w-full h-full object-contain filter drop-shadow-sm"
              width="80"
              height="56"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>
          <Badge variant="azure" size="sm" className="mb-3">
            11 CERTIFIED SAFETY, SPORTS & BIRD SOLUTIONS • HYDERABAD
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certified Safety Nets, Invisible Grills & <span className="text-brand-600 dark:text-brand-400">Sports Enclosures</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            From high-rise residential balcony protection and humane pigeon exclusion to international standard cricket practice pitches, multi-sport turf arenas, and swimming pool safety nets. Installed by certified rope-riggers across Hyderabad with a 5-Year Stamped Doorstep Guarantee.
          </p>
        </div>

        {/* Category Filter Tabs (Smooth horizontal scroll on mobile, centered on desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar select-none">
          {serviceCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 min-h-[42px] px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-glow-azure scale-[1.02]'
                  : 'bg-white dark:bg-obsidian-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white dark:bg-obsidian-card rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Photo & Quick Badges (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    draggable={false}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero-balcony.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-900/90 text-white font-mono text-xs font-bold shadow-md">
                    {service.priceRange}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {service.badge}
                    </span>
                    <span className="font-bold text-amber-400">
                      ★ {service.rating} ({service.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Details & Packages (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-eyebrow text-brand-600 dark:text-brand-400 block mb-1">
                      {service.eyebrow}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                      {service.technicalSpecs.slice(0, 6).map((spec, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-[11px]">
                          <span className="text-slate-400 block text-[10px]">{spec.label}</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* 3-Tier Packages Horizontal Scroll / Grid */}
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                        Available Packages & Specifications:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {service.packages.map((pkg, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-3 rounded-xl border text-xs flex flex-col justify-between ${
                              pkg.recommended
                                ? 'bg-brand-500/10 border-brand-500/40 text-brand-900 dark:text-brand-200'
                                : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="font-bold truncate">{pkg.name}</span>
                                {pkg.recommended && (
                                  <span className="text-[9px] font-extrabold uppercase bg-brand-500 text-white px-1.5 py-0.2 rounded">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="text-sm font-display font-extrabold mt-1 text-slate-900 dark:text-white">
                                ₹{pkg.price} <span className="text-[10px] font-normal text-slate-500">{pkg.unit}</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                              {pkg.life}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenQuoteSheet(service.id)}
                      className="min-h-[44px] px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-xs shadow-glow-azure flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Book Free Doorstep Inspection</span>
                    </button>

                    <Link
                      to={`/services/${service.id}`}
                      className="min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-brand-500 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Comparative Standards */}
      <div className="mt-16">
        <EngineeringSection />
      </div>
    </div>
  );
}
