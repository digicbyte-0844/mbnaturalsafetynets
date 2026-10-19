import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  ArrowUp, 
  Sparkles, 
  Code2, 
  Heart, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { servicesData } from '../../data/servicesData';
import { locationsZones } from '../../data/locationsData';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import logoEmblem from '../../assets/logo-emblem.png';

export default function Footer({ onOpenQuoteSheet }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-white/10 relative overflow-hidden pb-28 md:pb-14">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Pre-Footer Callout Action Band */}
      <div className="border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-eyebrow text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                RAPID 30-MINUTE DOORSTEP SERVICE
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Protect Your High-Rise Balcony in Hyderabad Today
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Certified SS 316 invisible grills and transparent balcony pigeon netting. 100% free doorstep laser measurement with material samples.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onOpenQuoteSheet()}
                className="min-h-[46px] px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-extrabold text-xs shadow-glow-azure active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Measurement</span>
              </button>

              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="min-h-[46px] px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                <span>Call {brandConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Proprietor Card (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex" aria-label="Go to Homepage">
              <div className="h-12 w-16 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={logoEmblem}
                  alt={brandConfig.brandName}
                  className="w-full h-full object-contain filter drop-shadow"
                  width="64"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpeg';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white block leading-tight">
                  {brandConfig.brandName}
                </span>
                <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                  <span>★</span> Hyderabad's #1 Balcony Safety Specialist
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-xs">
              Specializing in high-density UV copolymer balcony netting, child fall-prevention barriers, and SS 316 architectural invisible grills. Serving over 12,500+ high-rise families with zero view blockage.
            </p>

            {/* Proprietor Information Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block">
                    Proprietor / Director
                  </span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    {brandConfig.proprietor}
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                      Verified
                    </span>
                  </span>
                </div>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            </div>

            {/* Warranty Certificate Badge */}
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-[11px]">
                <strong className="text-white block font-bold">5-Year Stamped Doorstep Guarantee</strong>
                <span className="text-slate-400">Official certificate handed over upon balcony installation.</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home Landing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors">Cost Estimator</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Installation Photos</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Customer Reviews (3,850+)</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Headquarters</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Warranty Policy</Link></li>
            </ul>
          </div>

          {/* 11 Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Safety & Sports Solutions
            </h4>
            <ul className="space-y-2">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link to={`/services/${svc.id}`} className="hover:text-white transition-colors block text-slate-400 hover:translate-x-1 transition-transform">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hyderabad Desk & Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hyderabad Central Desk
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <a href={`tel:${brandConfig.phoneRaw}`} className="flex items-center gap-2 hover:text-white group">
                <div className="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{brandConfig.phone}</span>
              </a>

              <a href={`https://wa.me/${brandConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 group">
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>WhatsApp: {brandConfig.whatsapp}</span>
              </a>

              <a href={`mailto:${brandConfig.email}`} className="flex items-center gap-2 text-sky-400 hover:text-sky-300 break-all group">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{brandConfig.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] leading-tight">{brandConfig.hubAddress}</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <span>{brandConfig.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Deep SEO Locality Links */}
        <div className="py-8 border-b border-white/10 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
            Rapid 30-Minute Balcony Netting Dispatch Across All Hyderabad Localities:
          </span>
          <div className="space-y-3">
            {locationsZones.map((zone) => (
              <div key={zone.id} className="text-[11px] leading-relaxed">
                <strong className="text-white font-bold">{zone.name}: </strong>
                {zone.locations.map((loc, lIdx) => (
                  <span key={loc.name}>
                    <button
                      type="button"
                      onClick={() => onOpenQuoteSheet(null, loc.name)}
                      className="hover:text-brand-300 underline decoration-slate-700 underline-offset-2 transition-colors cursor-pointer"
                    >
                      Balcony Safety Nets in {loc.name} ({loc.pincode})
                    </button>
                    {lIdx < zone.locations.length - 1 && <span className="text-slate-600 mx-1.5">•</span>}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Signature & Developer Credit Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          
          {/* Copyright & Proprietor */}
          <div className="text-center md:text-left space-y-1">
            <div>
              © {new Date().getFullYear()} <strong className="text-white font-bold">{brandConfig.brandName}</strong>. All rights reserved.
            </div>
            <div className="text-[11px] text-slate-500 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <span>Registered Entity: {brandConfig.legalEntity} • Prop: <strong className="text-slate-300">{brandConfig.proprietor}</strong></span>
              <span>•</span>
              <Link to="/privacy-policy" className="hover:text-white underline decoration-slate-700 underline-offset-2 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms-and-conditions" className="hover:text-white underline decoration-slate-700 underline-offset-2 transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Designed & Developed by Prabhuteja Koda (Premium Developer Credit Badge) */}
          <div className="flex items-center gap-3">
            <div className="p-2 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/15 text-slate-300 shadow-xl flex items-center gap-2 hover:border-brand-400/50 transition-all group">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] leading-tight text-left">
                <span className="text-slate-400 text-[10px] block">Crafted with precision</span>
                <span className="font-bold text-white group-hover:text-brand-300 transition-colors flex items-center gap-1">
                  Designed & Developed by <strong className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-sky-300 to-emerald-300">{brandConfig.designerDeveloper}</strong>
                </span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
