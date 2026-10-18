import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { brandConfig } from '../../data/brandConfig';

/**
 * Mobile Right-Side Vertically-Centered Action Dock
 * Displays identical-sized rounded icons at the vertical center of the screen on the right edge.
 */
export default function UnifiedMobileDock({ onOpenQuoteSheet }) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://mbnaturalsafetynets.com';
  const whatsappUrl = `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(`Hi MB Natural Safety Nets, I am inquiring about balcony safety netting from: ${currentUrl}`)}`;

  return (
    <aside
      id="unified-mobile-dock"
      aria-label="Quick Balcony Contact"
      className="fixed right-2 sm:right-3 top-1/2 -translate-y-1/2 z-40 md:hidden flex flex-col items-center gap-2.5 p-1.5 rounded-full bg-slate-950/60 dark:bg-obsidian-card/75 backdrop-blur-xl border border-white/15 shadow-2xl pointer-events-auto select-none transition-all duration-300 no-print"
    >
      {/* 1. WhatsApp Button (Identical Size w-12 h-12, w-5.5 h-5.5 icon) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (30-Min SLA)"
        className="group relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 border border-white/30 active:scale-90 transition-all cursor-pointer"
      >
        {/* Active Online Status Beacon */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-white"></span>
        </span>

        <WhatsAppIcon className="w-5.5 h-5.5 fill-white" />

        {/* Floating Tooltip Label */}
        <span className="absolute right-14 px-2.5 py-1 rounded-xl bg-slate-900/95 text-white text-[10px] font-bold whitespace-nowrap shadow-xl border border-white/15 opacity-0 pointer-events-none group-hover:opacity-100 group-active:opacity-100 transition-opacity">
          WhatsApp 24/7
        </span>
      </a>

      {/* 2. Phone Helpline Button (Identical Size w-12 h-12, w-5.5 h-5.5 icon) */}
      <a
        href={`tel:${brandConfig.phoneRaw}`}
        aria-label={`Call ${brandConfig.brandName} helpline`}
        className="group relative w-12 h-12 rounded-full bg-slate-900/90 dark:bg-obsidian-surface/90 text-white flex items-center justify-center shadow-lg shadow-slate-950/40 border border-white/20 active:scale-90 transition-all cursor-pointer"
      >
        <Phone className="w-5.5 h-5.5 text-emerald-400" />

        {/* Floating Tooltip Label */}
        <span className="absolute right-14 px-2.5 py-1 rounded-xl bg-slate-900/95 text-white text-[10px] font-bold whitespace-nowrap shadow-xl border border-white/15 opacity-0 pointer-events-none group-hover:opacity-100 group-active:opacity-100 transition-opacity">
          Call: {brandConfig.phone}
        </span>
      </a>

      {/* 3. Free Balcony Inspection FAB (Identical Size w-12 h-12, w-5.5 h-5.5 icon) */}
      <button
        type="button"
        onClick={onOpenQuoteSheet}
        aria-label="Book 30-Min Free Balcony Inspection"
        className="group relative w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 via-brand-500 to-safety-500 text-white flex items-center justify-center shadow-lg shadow-brand-600/35 border border-white/25 active:scale-90 transition-all cursor-pointer"
      >
        <Sparkles className="w-5.5 h-5.5 text-amber-300 animate-pulse" />

        {/* Floating Tooltip Label */}
        <span className="absolute right-14 px-2.5 py-1 rounded-xl bg-slate-900/95 text-white text-[10px] font-bold whitespace-nowrap shadow-xl border border-white/15 opacity-0 pointer-events-none group-hover:opacity-100 group-active:opacity-100 transition-opacity">
          Free 30-Min Quote
        </span>
      </button>
    </aside>
  );
}
