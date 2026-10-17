import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Sparkles, 
  Award, 
  Star, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Eye,
  Layers
} from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import logoEmblem from '../../assets/logo-emblem.png';

export default function Hero({ onOpenQuoteSheet }) {
  // Changeable Hero Balcony Views
  const heroViews = [
    {
      id: 'invisible-grill',
      title: 'SS 316 Invisible Grills',
      tag: '400kg+ Tensile Load',
      subtitle: 'DuPont Teflon 316 Marine Stainless Steel',
      image: '/images/hero-balcony.jpg',
      stat: '0% View Blockage'
    },
    {
      id: 'pigeon-net',
      title: 'Pigeon Safety Nets',
      tag: '100% Invisible from 10ft',
      subtitle: 'UV-Stabilized Copolymer Monofilament',
      image: '/images/balcony-pigeon-net.jpg',
      stat: 'Zero Droppings'
    },
    {
      id: 'child-safety',
      title: 'Child Balcony Nets',
      tag: '180kg Impact Certified',
      subtitle: 'Zero Railing-Bottom Crawl Gap Seal',
      image: '/images/invisible-grill-toddler.jpg',
      stat: 'Toddler Safe'
    }
  ];

  const [activeHeroViewIndex, setActiveHeroViewIndex] = useState(0);
  const activeView = heroViews[activeHeroViewIndex];

  // Auto-cycle through views every 6 seconds unless user interacts
  const [userInteracted, setUserInteracted] = useState(false);
  useEffect(() => {
    if (userInteracted) return;

    const interval = setInterval(() => {
      setActiveHeroViewIndex((prev) => (prev + 1) % heroViews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [userInteracted, heroViews.length]);

  return (
    <section className="relative min-h-[92svh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-obsidian-canvas pt-24 sm:pt-28 md:pt-36 pb-14 sm:pb-20">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-safety-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-950/40 via-transparent to-obsidian-canvas pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: High-Impact Typography & Conversion (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* High-Trust Animated Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 backdrop-blur-md mb-4 shadow-lg shadow-amber-950/40">
              <img
                src={logoEmblem}
                alt="MB Natural Safety Nets"
                className="w-5 h-5 object-contain filter drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = '/logo.jpeg';
                }}
              />
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-400"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-eyebrow text-slate-200">
                HYDERABAD'S #1 BALCONY SAFETY NETS INSTALLER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tightest leading-[1.1] mb-4">
              Certified Balcony Safety{' '}
              <span className="block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-brand-400 to-safety-300">
                With 100% Unblocked Skyline Views.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-6 leading-relaxed font-normal">
              <strong className="text-white font-bold">{brandConfig.brandName}</strong> (Led by <strong className="text-slate-100">{brandConfig.proprietor}</strong>) delivers high-tensile balcony pigeon nets, child fall-prevention barriers, and SS 316 invisible grills across 25+ Hyderabad high-rise hubs. Backed by a <strong className="text-safety-400 font-bold">5-Year Stamped Doorstep Guarantee</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenQuoteSheet}
                className="min-h-[50px] sm:min-h-[52px] px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>Book 30-Min Free Laser Measurement</span>
              </button>

              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="min-h-[50px] sm:min-h-[52px] px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Helpline: {brandConfig.phone}</span>
              </a>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 pt-2 border-t border-white/10 w-full">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <strong className="text-white font-bold ml-1">4.98 / 5.0</strong>
              </div>
              <span className="text-white/20">•</span>
              <span className="text-slate-300">
                <strong className="text-white font-bold">12,500+</strong> Balconies Protected
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold hidden sm:inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>RWA Preferred Contractor</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Changeable Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden group">
              
              {/* Main Image Frame with Smooth Ken Burns Effect */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={activeView.image}
                  alt={activeView.title}
                  key={activeView.id}
                  className="w-full h-full object-cover object-center animate-fade-in group-hover:scale-105 transition-transform duration-700"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badge: Strength Certified */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeView.tag}</span>
                </div>

                {/* Floating Top Right Badge: View Status */}
                <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-xl bg-brand-600/90 text-white text-[11px] font-mono font-bold shadow-lg">
                  {activeView.stat}
                </div>

                {/* Bottom Overlay Title & Subtitle */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <span className="text-xs font-display font-extrabold block drop-shadow-md">
                    {activeView.title}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium block">
                    {activeView.subtitle}
                  </span>
                </div>
              </div>

              {/* Interactive Changeable Tabs (Tap to change view instantly) */}
              <div className="mt-2.5 pt-2 grid grid-cols-4 gap-1.5">
                {heroViews.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => {
                      setUserInteracted(true);
                      setActiveHeroViewIndex(idx);
                    }}
                    className={`py-2 px-1 rounded-xl text-center transition-all cursor-pointer ${
                      activeHeroViewIndex === idx
                        ? 'bg-gradient-to-r from-brand-600 to-safety-600 text-white font-extrabold shadow-md scale-[1.02]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[10px] font-semibold border border-white/5'
                    }`}
                  >
                    <span className="text-[10px] leading-tight block truncate">
                      {view.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* 4 Trust Metric Cards at Bottom of Hero */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-10 pt-6 border-t border-white/10">
          <div className="p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex flex-col items-center hover:border-brand-500/40 transition-colors">
            <Clock className="w-5 h-5 text-brand-400 mb-1" />
            <span className="text-base sm:text-lg font-display font-extrabold text-white">30 Minutes</span>
            <span className="text-[11px] text-slate-400 font-medium">Hyderabad Balcony Dispatch</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex flex-col items-center hover:border-safety-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-safety-400 mb-1" />
            <span className="text-base sm:text-lg font-display font-extrabold text-white">5-Year Stamped</span>
            <span className="text-[11px] text-slate-400 font-medium">Doorstep Warranty</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex flex-col items-center hover:border-cyan-400/40 transition-colors">
            <Award className="w-5 h-5 text-cyan-400 mb-1" />
            <span className="text-base sm:text-lg font-display font-extrabold text-white">180kg - 450kg</span>
            <span className="text-[11px] text-slate-400 font-medium">Certified Breaking Load</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex flex-col items-center hover:border-amber-400/40 transition-colors">
            <div className="flex items-center text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-extrabold text-xs ml-1">4.98 / 5.0</span>
            </div>
            <span className="text-base sm:text-lg font-display font-extrabold text-white">3,850+ Reviews</span>
            <span className="text-[11px] text-slate-400 font-medium">12,500+ Balconies Safe</span>
          </div>
        </div>

      </div>
    </section>
  );
}
