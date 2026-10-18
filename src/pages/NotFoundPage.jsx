import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Phone, 
  Sparkles, 
  ShieldAlert, 
  Layers, 
  Calculator, 
  Image, 
  MapPin, 
  Star 
} from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';

export default function NotFoundPage({ onOpenQuoteSheet }) {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-canvas-light dark:bg-obsidian-canvas text-slate-900 dark:text-white transition-colors">
      <SEOHead
        title="Page Not Found (404) | MB Natural Safety Nets"
        description="The requested safety netting page or locality guide was not found."
        noindex={true}
      />
      
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        
        {/* Brand Emblem & 404 Graphic Badge */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-14 flex items-center justify-center">
            <img
              src={logoEmblem}
              alt={brandConfig.brandName}
              className="w-full h-full object-contain filter drop-shadow"
              width="64"
              height="48"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-extrabold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>404 — Route Not Found</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Oops! Netting Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            The page, safety netting specification, or locality guide you are looking for has been relocated or does not exist in our Hyderabad network.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="min-h-[48px] px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-extrabold text-sm shadow-glow-azure flex items-center gap-2 active:scale-95 transition-all touch-target"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          {onOpenQuoteSheet && (
            <button
              type="button"
              onClick={() => onOpenQuoteSheet()}
              className="min-h-[48px] px-6 py-3 rounded-2xl bg-white dark:bg-obsidian-card text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-bold text-sm hover:border-brand-500 active:scale-95 transition-all flex items-center gap-2 cursor-pointer touch-target shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Book 30-Min Free Inspection</span>
            </button>
          )}
        </div>

        {/* Quick Recovery Navigation Grid */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-4">
            Popular Netting Solutions & Tools
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <Link
              to="/services"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 transition-all flex flex-col items-center gap-1.5 group"
            >
              <Layers className="w-4 h-4 text-brand-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">All 11 Services</span>
            </Link>

            <Link
              to="/calculator"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 transition-all flex flex-col items-center gap-1.5 group"
            >
              <Calculator className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">Cost Estimator</span>
            </Link>

            <Link
              to="/gallery"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 transition-all flex flex-col items-center gap-1.5 group"
            >
              <Image className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">Photo Portfolio</span>
            </Link>

            <Link
              to="/contact"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 transition-all flex flex-col items-center gap-1.5 group"
            >
              <MapPin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">Hyderabad Hub</span>
            </Link>
          </div>
        </div>

        {/* Direct Helpline Band */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Need urgent balcony assistance in Hyderabad?
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="px-4 py-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold hover:bg-brand-500/20 transition-colors flex items-center gap-1.5 touch-target"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {brandConfig.phone}</span>
            </a>

            <a
              href={`https://wa.me/${brandConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#25D366]/15 text-[#25D366] font-bold hover:bg-[#25D366]/25 transition-colors flex items-center gap-1.5 touch-target"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
