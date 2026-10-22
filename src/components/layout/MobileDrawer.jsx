import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Sun, 
  Moon, 
  ArrowRight, 
  Home, 
  Layers, 
  Calculator, 
  Image, 
  Star, 
  MapPin, 
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { servicesData } from '../../data/servicesData';
import { useTheme } from '../../context/ThemeContext';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { getDirectWhatsAppUrl } from '../../utils/generateWhatsAppUrl';
import logoEmblem from '../../assets/logo-emblem.png';

export default function MobileDrawer({ isOpen, onClose, onOpenQuoteSheet }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(true);

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Blur focus when drawer closes to prevent aria-hidden accessibility warning
  useEffect(() => {
    if (!isOpen && typeof document !== 'undefined' && document.activeElement) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  }, [isOpen]);

  return (
    <div 
      id="mobile-drawer" 
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`} 
      role="dialog" 
      aria-modal="true"
      aria-hidden={!isOpen ? "true" : undefined}
      inert={!isOpen ? "" : undefined}
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose} 
      />

      {/* Drawer Panel */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-obsidian-card text-slate-900 dark:text-white shadow-2xl flex flex-col justify-between z-10 overflow-y-auto no-scrollbar border-l border-slate-200/80 dark:border-white/10 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Drawer Header & Content */}
        <div>
          {/* Header Bar */}
          <div className="p-4 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
            <Link to="/" onClick={onClose} aria-label="Go to Homepage" className="flex items-center gap-2.5 group">
              <div className="w-11 h-9 flex items-center justify-center shrink-0">
                <img
                  src={logoEmblem}
                  alt="MB Natural Safety Nets"
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  width="44"
                  height="36"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpeg';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white block leading-tight">
                  MB NATURAL SAFETY NETS
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                  Hyderabad Balcony Specialist
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer active:scale-95 transition-transform touch-target"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Helpline & WhatsApp Row */}
          <div className="p-3.5 grid grid-cols-2 gap-2.5 border-b border-slate-100 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.01]">
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="min-h-[46px] p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-bold text-slate-900 dark:text-white active:scale-95 shadow-sm transition-transform"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>Call Helpline</span>
            </a>

            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] p-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center gap-2 text-xs font-bold active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Main Menu Links & Interactive Accordion */}
          <div className="p-3.5 space-y-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 block mb-1">
              Navigation Menu
            </span>

            {/* 1. Home */}
            <Link
              to="/"
              className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors ${
                location.pathname === '/'
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-brand-500" />
                <span>Home</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {/* 2. Interactive Balcony Services Dropdown Accordion */}
            <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 overflow-hidden bg-slate-50/50 dark:bg-white/[0.01]">
              <button
                type="button"
                onClick={() => setIsServicesAccordionOpen(prev => !prev)}
                className="w-full flex items-center justify-between p-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-brand-500" />
                  <span>Safety & Sports Netting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    11 Solutions
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isServicesAccordionOpen ? 'rotate-180 text-brand-500' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Services List */}
              {isServicesAccordionOpen && (
                <div className="p-2 space-y-1 bg-white dark:bg-obsidian-surface border-t border-slate-100 dark:border-white/5 animate-fade-in max-h-[360px] overflow-y-auto no-scrollbar">
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.id}`}
                      className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 flex items-center justify-between text-xs transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                        <div className="truncate">
                          <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 block truncate">
                            {svc.shortTitle}
                          </span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                            {svc.turnaround} • {svc.badge.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0 ml-2">
                        {svc.priceRange.split(' ')[0]}
                      </span>
                    </Link>
                  ))}

                  <div className="pt-2 px-1 border-t border-slate-100 dark:border-white/5">
                    <Link
                      to="/services"
                      className="w-full py-2 px-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold flex items-center justify-between hover:bg-brand-500/20 transition-colors"
                    >
                      <span>Explore All 11 Services & Prices</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Balcony Cost Calculator */}
            <Link
              to="/calculator"
              className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors ${
                location.pathname === '/calculator'
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-4 h-4 text-brand-500" />
                <span>Balcony Cost Calculator</span>
              </div>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400">
                Instant
              </span>
            </Link>

            {/* 4. High-Rise Gallery */}
            <Link
              to="/gallery"
              className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors ${
                location.pathname === '/gallery'
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Image className="w-4 h-4 text-brand-500" />
                <span>Photo Portfolio</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {/* 5. Customer Reviews */}
            <Link
              to="/reviews"
              className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors ${
                location.pathname === '/reviews'
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Customer Reviews</span>
              </div>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-amber-400/10 text-amber-600 dark:text-amber-400">
                4.98 ★
              </span>
            </Link>

            {/* 6. Contact & Hub */}
            <Link
              to="/contact"
              className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors ${
                location.pathname === '/contact'
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>Contact & Hub</span>
              </div>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                30-Min SLA
              </span>
            </Link>
          </div>

          {/* Quick Locality Links for Hyderabad */}
          <div className="p-3.5 border-t border-slate-100 dark:border-white/10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-1 block mb-2">
              30-Min Doorstep Service Zones
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Gachibowli', 'HITEC City', 'Kondapur', 'Kokapet', 'Madhapur', 'Kukatpally', 'Secunderabad', 'Financial District'].map((loc) => (
                <button
                  type="button"
                  key={loc}
                  onClick={() => {
                    onClose();
                    onOpenQuoteSheet(null, loc);
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold hover:bg-brand-600 hover:text-white transition-colors cursor-pointer active:scale-95"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-100 dark:border-white/10 space-y-3 bg-slate-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-500">Theme Preference</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-bold cursor-pointer"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{isDark ? 'Light Theme' : 'Dark Theme'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuoteSheet();
            }}
            className="w-full min-h-[48px] py-3 px-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Book 30-Min Free Balcony Inspection</span>
          </button>
        </div>

      </div>
    </div>
  );
}
