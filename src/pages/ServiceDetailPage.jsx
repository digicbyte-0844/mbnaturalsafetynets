import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, Phone, Sparkles, Check, Clock, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { brandConfig } from '../data/brandConfig';
import Badge from '../components/ui/Badge';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getDirectWhatsAppUrl } from '../utils/generateWhatsAppUrl';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';

export default function ServiceDetailPage({ onOpenQuoteSheet }) {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const sameCategory = servicesData.filter(s => s.id !== service.id && s.category === service.category);
  const otherCategory = servicesData.filter(s => s.id !== service.id && s.category !== service.category);
  const relatedServices = [...sameCategory, ...otherCategory].slice(0, 3);

  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title={`${service.title} Hyderabad | MB Safety Nets`}
        description={`${service.fullDescription.slice(0, 145)}... 5-Year Stamped Doorstep Warranty in Hyderabad.`}
        canonicalPath={`/services/${service.id}`}
        ogImage={service.heroImage}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-brand-600 transition-colors">Our Services</Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">{service.shortTitle}</span>
        </div>

        {/* Cinematic Hero: Image First, Content Next */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* 1. FIRST: Visual Image Showcase Card (5 cols on desktop, 1st on mobile) */}
          <div className="order-1 lg:col-span-5 relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 dark:border-white/10 group select-none">
            <img
              src={service.heroImage}
              alt={service.title}
              width="800"
              height="550"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              draggable={false}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
              onError={(e) => {
                e.currentTarget.src = '/images/hero-balcony.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating Top Price Tag */}
            <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-lg">
              {service.priceRange}
            </div>

            {/* Floating Top Right Warranty Badge */}
            <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-emerald-500/90 text-white text-xs font-bold flex items-center gap-1 shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </div>

            {/* Bottom Floating Rating Strip */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
              <span className="font-bold text-amber-300">
                ★ {service.rating} ({service.reviewsCount} verified reviews)
              </span>
              <span className="text-[11px] font-mono text-slate-300">
                Turnaround: {service.turnaround}
              </span>
            </div>
          </div>

          {/* 2. NEXT: High-Impact Typography & Specifications (7 cols on desktop, 2nd on mobile) */}
          <div className="order-2 lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-7 flex items-center justify-center shrink-0">
                <img
                  src={logoEmblem}
                  alt="MB Natural Safety Nets"
                  width="40"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpeg';
                  }}
                />
              </div>
              <Badge variant="azure" size="sm">
                {service.eyebrow}
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg font-bold text-brand-600 dark:text-brand-400">
              {service.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 py-2">
              <div className="p-3 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Price Baseline</span>
                <span className="text-base font-display font-extrabold text-slate-900 dark:text-white">{service.priceRange}</span>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Turnaround Time</span>
                <span className="text-base font-display font-extrabold text-emerald-500">{service.turnaround}</span>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Warranty</span>
                <span className="text-base font-display font-extrabold text-brand-500">{service.badge}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteSheet(service.id)}
                className="min-h-[48px] px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-sky-400 hover:from-brand-500 hover:to-sky-300 text-white font-extrabold text-sm shadow-glow-azure flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Laser Measurement & Estimate</span>
              </button>

              <a
                href={getDirectWhatsAppUrl(`Hi MB Natural Safety Nets, I would like a quote for ${service.title} in Hyderabad.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold text-xs flex items-center gap-2 border border-[#25D366]/30 transition-colors touch-target"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 border border-slate-200/80 dark:border-white/10 transition-colors touch-target"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Call {brandConfig.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Installation Showcase */}
        <div className="my-16 p-6 sm:p-10 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="emerald" size="sm" className="mb-2">
              VERIFIED ARCHITECTURAL & SPORTS INSTALLATION
            </Badge>
            <h2 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              {service.title} in Real Site Installations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Precision tensioned across high-rise apartments, villas, sports academies, and grounds in Hyderabad. Certified 5-Year Stamped Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl select-none">
              <img
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                src={service.heroImage}
                alt={service.title}
                draggable={false}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-balcony.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white font-mono text-xs font-bold border border-white/20 shadow-md">
                {service.priceRange}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-emerald-500/90 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{service.badge}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold text-white drop-shadow-md">
                  {service.tagline}
                </span>
                <span className="text-[11px] text-amber-400 font-bold hidden sm:inline">
                  ★ {service.rating} ({service.reviewsCount} reviews)
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Key Engineering Highlights
              </h3>
              <div className="space-y-2.5">
                {service.coreFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => onOpenQuoteSheet(service.id)}
                  className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-xs shadow-md shadow-brand-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Book Free Laser Inspection & Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Structured Engineering Specifications */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="azure" size="sm" className="mb-2">
              RIGGING TOLERANCES
            </Badge>
            <h2 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Technical & Material Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.technicalSpecs.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Workflow */}
        <div className="my-16 p-6 sm:p-10 rounded-3xl bg-slate-900 text-white border border-white/10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
              PRECISION RIGGING PROTOCOL
            </span>
            <h2 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              5-Step Certified Installation Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.workflow.map((wf) => (
              <div key={wf.step} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-xs mb-3 shadow-glow-azure">
                    {wf.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{wf.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Tier Packages */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="amber" size="sm" className="mb-2">
              TRANSPARENT PRICING TIERS
            </Badge>
            <h2 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Select Your {service.shortTitle} Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  pkg.recommended
                    ? 'bg-white dark:bg-obsidian-card border-brand-500 shadow-2xl ring-2 ring-brand-500/20'
                    : 'bg-white dark:bg-obsidian-card border-slate-200 dark:border-white/10 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {pkg.mesh}
                    </span>
                    {pkg.recommended && (
                      <span className="px-2.5 py-1 rounded-full bg-brand-500 text-white text-[10px] font-extrabold uppercase shadow-glow-azure">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white">
                    {pkg.name}
                  </h3>

                  <div className="my-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                      ₹{pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {pkg.unit}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6">
                    {pkg.life}
                  </span>

                  <ul className="space-y-2.5 border-t border-slate-100 dark:border-white/5 pt-4 text-xs text-slate-700 dark:text-slate-300">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteSheet(service.id)}
                    className={`w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 ${
                      pkg.recommended
                        ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-glow-azure'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Select {pkg.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            Complementary Netting & Protection Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 hover:border-brand-500 transition-all flex items-center gap-4 group"
              >
                <img
                  src={rel.heroImage}
                  alt={rel.title}
                  width="64"
                  height="64"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-balcony.jpg';
                  }}
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                    {rel.shortTitle}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {rel.priceRange}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
