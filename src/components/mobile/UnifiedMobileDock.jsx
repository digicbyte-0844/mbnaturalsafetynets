import React, { useState, useEffect } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { brandConfig } from '../../data/brandConfig';

export default function UnifiedMobileDock({ onOpenQuoteSheet }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hides on rapid downward scroll; reappears immediately on upward flick
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up or near top
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-3 inset-x-3 z-40 md:hidden max-w-md mx-auto transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0 pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="bg-slate-900/95 dark:bg-obsidian-card/95 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-1.5 shadow-2xl flex items-center justify-between gap-1.5 text-white">
        
        {/* Direct Phone Helpline */}
        <a
          href={`tel:${brandConfig.phoneRaw}`}
          aria-label={`Call ${brandConfig.brandName}`}
          className="flex-1 min-h-[46px] flex flex-col items-center justify-center py-1 px-1.5 rounded-xl bg-white/10 active:bg-white/20 active:scale-95 transition-all text-slate-100 hover:text-white"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={`https://wa.me/${brandConfig.whatsapp}?text=Hi%20MB%20Natural%20Safety%20Nets%2C%20I%20would%20like%20a%20free%20doorstep%20balcony%20inspection%20and%20quote%20in%20Hyderabad.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Quick Lead"
          className="flex-1 min-h-[46px] flex flex-col items-center justify-center py-1 px-1.5 rounded-xl bg-[#25D366]/20 text-[#25D366] active:bg-[#25D366]/30 active:scale-95 transition-all border border-[#25D366]/30"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Primary Booking Trigger */}
        <button
          onClick={onOpenQuoteSheet}
          aria-label="Open Balcony Quote Sheet"
          className="flex-[1.9] min-h-[46px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-xs shadow-lg shadow-brand-600/30 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="truncate">Free Inspection (30m)</span>
        </button>

      </div>
    </div>
  );
}
