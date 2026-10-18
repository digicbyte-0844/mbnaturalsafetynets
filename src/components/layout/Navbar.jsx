import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Sparkles, 
  Menu, 
  Sun, 
  Moon, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { brandConfig } from '../../data/brandConfig';
import { servicesData } from '../../data/servicesData';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import logoEmblem from '../../assets/logo-emblem.png';

export default function Navbar({ isMobileDrawerOpen = false, onOpenMobileDrawer, onOpenQuoteSheet }) {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Cost Calculator', path: '/calculator' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact & Hub', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 w-full">
      
      {/* 1. Top High-Trust Utility Bar (Desktop / Tablet) */}
      <div className="hidden md:block bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white text-[11px] py-1.5 px-4 border-b border-white/10 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Hyderabad Trust Highlights */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>30-Min Laser Measurement Across Hyderabad</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-slate-300 hidden lg:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>5-Year Official Stamped Warranty</span>
            </span>
            <span className="text-white/20 hidden lg:inline">•</span>
            <span className="text-slate-300 hidden xl:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Office: i-Tech City, Gagillapur, Balanagar</span>
            </span>
          </div>

          {/* Right: Direct Helplines */}
          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${brandConfig.email}`}
              className="text-slate-300 hover:text-white transition-colors hidden lg:flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-brand-400" />
              <span>{brandConfig.email}</span>
            </a>
            <span className="text-white/20 hidden lg:inline">•</span>
            <a 
              href={`tel:${brandConfig.phoneRaw}`}
              className="text-white font-bold flex items-center gap-1.5 hover:text-brand-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>Helpline: {brandConfig.phone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Glass Sticky Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-obsidian-card/95 backdrop-blur-xl shadow-lg border-b border-slate-200/80 dark:border-white/10 py-2 sm:py-2.5'
            : 'bg-white/90 dark:bg-obsidian-canvas/90 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Hyderabad Tag */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="Go to Homepage">
              <div className="relative h-10 sm:h-11 w-14 sm:w-16 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
                <img
                  src={logoEmblem}
                  alt="MB Natural Safety Nets"
                  className="h-full w-full object-contain filter drop-shadow-sm"
                  width="64"
                  height="44"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.jpeg";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                    MB NATURAL
                  </span>
                  <span className="font-display font-light text-sm sm:text-base tracking-tight text-brand-600 dark:text-brand-400">
                    SAFETY NETS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                  <span className="font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Hyderabad
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span>Balcony Specialist</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links (Clean & Proportionate) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                          isActive
                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10'
                            : 'text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-brand-500' : ''}`} />
                      </Link>

                      {/* Services Mega Dropdown (Elevated 2-Column UX) */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 w-[580px] pt-2 z-50">
                          <div className="p-4 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200/90 dark:border-white/10 shadow-2xl space-y-2 animate-fade-in backdrop-blur-2xl">
                            
                            {/* Header */}
                            <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                              <span>11 Certified Safety, Sports & Bird Netting Solutions</span>
                              <span className="text-emerald-500 font-bold flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" />
                                5-Yr Stamped Warranty
                              </span>
                            </div>

                            {/* Service Items Grid (2 Columns) */}
                            <div className="grid grid-cols-2 gap-1.5 pt-1 max-h-[380px] overflow-y-auto no-scrollbar">
                              {servicesData.map((svc) => (
                                <Link
                                  key={svc.id}
                                  to={`/services/${svc.id}`}
                                  className="p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/70 flex items-center justify-between transition-all group/item border border-transparent hover:border-slate-200/60 dark:hover:border-white/5"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <div className="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xs shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                                      {svc.shortTitle.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                      <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors truncate">
                                        {svc.shortTitle}
                                      </span>
                                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block truncate">
                                        {svc.priceRange}
                                      </span>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:text-brand-500 group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                                </Link>
                              ))}
                            </div>

                            {/* Footer Callout */}
                            <div className="pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between px-2">
                              <Link
                                to="/services"
                                className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                              >
                                <span>Explore All 11 Solutions & Packages</span>
                                <span>→</span>
                              </Link>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsServicesOpen(false);
                                  onOpenQuoteSheet();
                                }}
                                className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
                              >
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                <span>Book Free Measurement</span>
                              </button>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10'
                        : 'text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center gap-2 shrink-0">
              
              {/* Dark / Light Mode Switcher */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Dark / Light theme"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/60 dark:border-white/5 active:scale-95"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Direct Phone Dial (Desktop) */}
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-white/5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{brandConfig.phone}</span>
              </a>

              {/* Primary High-Impact CTA Button (Desktop) */}
              <button
                type="button"
                onClick={() => onOpenQuoteSheet()}
                className="hidden sm:flex min-h-[40px] px-3.5 lg:px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-xs shadow-md shadow-brand-500/20 active:scale-95 transition-all items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Free Inspection</span>
              </button>

              {/* Mobile / Tablet Hamburger Drawer Trigger */}
              <button
                type="button"
                onClick={onOpenMobileDrawer}
                aria-label={isMobileDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileDrawerOpen}
                aria-controls="mobile-drawer"
                className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 flex items-center justify-center cursor-pointer active:scale-95 border border-slate-200/60 dark:border-white/5 touch-target"
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
