import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Phone, 
  Shield, 
  Sparkles, 
  Navigation, 
  Sun, 
  Moon, 
  ArrowRight, 
  Mail,
  Home,
  Layers,
  Calculator,
  Image,
  Star,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { servicesData } from '../../data/servicesData';
import { useTheme } from '../../context/ThemeContext';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import logoEmblem from '../../assets/logo-emblem.png';

export default function MobileDrawer({ isOpen, onClose, onOpenQuoteSheet }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

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

  if (!isOpen) return null;

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home, badge: null },
    { name: '5 Balcony Services', path: '/services', icon: Layers, badge: '5-Yr Warranty' },
    { name: 'Balcony Cost Calculator', path: '/calculator', icon: Calculator, badge: 'Instant' },
    { name: 'High-Rise Gallery', path: '/gallery', icon: Image, badge: null },
    { name: 'Customer Reviews', path: '/reviews', icon: Star, badge: '4.98 ★' },
    { name: 'Contact & Hub', path: '/contact', icon: MapPin, badge: '30-Min SLA' }
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-obsidian-card text-slate-900 dark:text-white shadow-2xl flex flex-col justify-between z-10 overflow-y-auto no-scrollbar border-l border-slate-200 dark:border-white/10">
        
        {/* Drawer Header & Navigation Content */}
        <div>
          {/* Header Bar */}
          <div className="p-4 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-10 flex items-center justify-center shrink-0">
                <img
                  src={logoEmblem}
                  alt="MB Natural Safety Nets"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  width="48"
                  height="40"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpeg';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white block leading-tight">
                  MB NATURAL SAFETY NETS
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  Hyderabad Balcony Specialist
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Helpline & WhatsApp Row */}
          <div className="p-3.5 grid grid-cols-2 gap-2.5 border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.01]">
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="min-h-[46px] p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-bold text-slate-900 dark:text-white active:scale-95 shadow-sm transition-transform"
            >
              <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Call Helpline</span>
            </a>

            <a
              href={`https://wa.me/${brandConfig.whatsapp}?text=Hi%20MB%20Natural%20Safety%20Nets%2C%20I%20would%20like%20a%20free%20doorstep%20balcony%20inspection%20in%20Hyderabad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] p-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center gap-2 text-xs font-bold active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Primary Nav Links */}
          <div className="p-3.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 block mb-1">
              Menu Navigation
            </span>
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-500" />
                    <span>{link.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {link.badge}
                      </span>
                    )}
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 5 Balcony Services Quick List */}
          <div className="p-3.5 border-t border-slate-100 dark:border-white/10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 block mb-2">
              5 Balcony Solutions & Pricing
            </span>
            <div className="space-y-1">
              {servicesData.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 text-xs transition-colors group"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 truncate">
                      {svc.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0 ml-2">
                    {svc.priceRange.split(' ')[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Locality Links for Hyderabad */}
          <div className="p-3.5 border-t border-slate-100 dark:border-white/10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-1 block mb-2">
              30-Min Doorstep Service Zones
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Gachibowli', 'HITEC City', 'Kondapur', 'Kokapet', 'Madhapur', 'Kukatpally', 'Secunderabad', 'Financial District'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    onClose();
                    onOpenQuoteSheet(null, loc);
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold hover:bg-brand-600 hover:text-white transition-colors cursor-pointer"
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
            onClick={() => {
              onClose();
              onOpenQuoteSheet();
            }}
            className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Book 30-Min Free Balcony Inspection</span>
          </button>
        </div>

      </div>
    </div>
  );
}
