import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already set cookie preference
    const consent = localStorage.getItem('cookie_consent') || localStorage.getItem('cookie_consent_accepted');
    if (!consent) {
      // Delay display slightly for smooth entrance without jarring initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_consent_accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.setItem('cookie_consent_accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent Banner"
      className="fixed bottom-0 inset-x-0 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md z-40 p-3 sm:p-0 no-print animate-fade-in"
    >
      <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/95 dark:bg-obsidian-card/95 backdrop-blur-2xl border border-white/15 text-white shadow-2xl flex flex-col gap-3.5 ring-1 ring-white/10">
        
        {/* Banner Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/30">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-display font-extrabold text-white leading-tight">
                Privacy & Cookie Preferences
              </h4>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 inline" />
                DPDP Act & GDPR Baseline
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDecline}
            aria-label="Dismiss cookie notice"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-xs text-slate-300 leading-relaxed">
          We use essential local storage to save your visual theme preference and facilitate rapid 30-minute technician dispatch in Hyderabad. We do not sell your personal data.{' '}
          <Link
            to="/privacy-policy"
            className="text-brand-300 hover:text-brand-200 underline font-semibold transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 min-h-[40px] px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-xs shadow-md shadow-brand-600/30 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Accept All</span>
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="min-h-[40px] px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white font-bold text-xs border border-white/15 active:scale-95 transition-all cursor-pointer"
          >
            <span>Essential Only</span>
          </button>
        </div>

      </div>
    </div>
  );
}
