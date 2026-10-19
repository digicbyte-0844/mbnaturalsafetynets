import React from 'react';
import Hero from '../components/interactive/Hero';
import BalconyVisualShowcase from '../components/interactive/BalconyVisualShowcase';
import ServicesSection from '../components/sections/ServicesSection';
import InteractiveCalculator from '../components/interactive/InteractiveCalculator';
import HyderabadLocationsSection from '../components/sections/HyderabadLocationsSection';
import TensileSimulator from '../components/interactive/TensileSimulator';
import EngineeringSection from '../components/sections/EngineeringSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import GoogleMapsSection from '../components/sections/GoogleMapsSection';
import Badge from '../components/ui/Badge';
import { Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import logoEmblem from '../assets/logo-emblem.png';

import SEOHead from '../components/seo/SEOHead';

export default function HomePage({ onOpenQuoteSheet }) {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Balcony Safety Nets Hyderabad | MB Natural Safety Nets"
        description="Hyderabad's top certified specialist in high-rise balcony safety nets, bird spikes & SS 316 invisible grills. 30-min doorstep inspection & 5-yr stamped warranty."
        canonicalPath="/"
      />

      {/* 1. Hero with Interactive Changeable Balcony Views */}
      <Hero onOpenQuoteSheet={onOpenQuoteSheet} />

      {/* 2. Interactive Changeable Balcony Visual Showcase */}
      <BalconyVisualShowcase onOpenQuoteSheet={onOpenQuoteSheet} />

      {/* 3. Core 5 Balcony Safety Solutions */}
      <ServicesSection onOpenQuoteSheet={onOpenQuoteSheet} />

      {/* 4. Instant Balcony Cost Estimator Preview */}
      <section className="py-16 sm:py-24 bg-canvas-muted dark:bg-[#070b14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveCalculator onOpenQuoteSheet={onOpenQuoteSheet} />
        </div>
      </section>

      {/* 5. Hyderabad 30-Min Balcony Service Network */}
      <HyderabadLocationsSection onOpenQuoteSheet={onOpenQuoteSheet} />

      {/* 6. High-Rise Balcony Tensile Load & Wind Simulator */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TensileSimulator />
        </div>
      </section>

      {/* 7. Architectural Balcony Engineering Standards */}
      <EngineeringSection />

      {/* 8. Verified Hyderabad Customer Testimonials */}
      <ReviewsSection />

      {/* 9. High-Intent FAQ Accordion */}
      <FAQSection onOpenQuoteSheet={onOpenQuoteSheet} />

      {/* 10. Google Maps & Central Hub */}
      <GoogleMapsSection />

      {/* Final Action Band */}
      <section className="py-16 bg-gradient-to-r from-brand-600 via-sky-600 to-emerald-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-20 h-14 mb-4 flex items-center justify-center">
            <img
              loading="lazy"
              decoding="async"
              src={logoEmblem}
              alt="MB Natural Safety Nets"
              className="w-full h-full object-contain filter drop-shadow"
              width="80"
              height="56"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4">
            Protect Your High-Rise Balcony Today
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-8">
            Certified balcony pigeon nets, child fall-protection barriers, and SS 316 invisible grills dispatched to your doorstep within 30 minutes across Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenQuoteSheet()}
              className="w-full sm:w-auto min-h-[50px] px-8 py-3 rounded-2xl bg-white text-slate-900 font-extrabold text-sm shadow-2xl hover:bg-slate-100 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Book 30-Min Free Balcony Measurement</span>
            </button>
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="w-full sm:w-auto min-h-[50px] px-8 py-3 rounded-2xl bg-white/15 border border-white/30 text-white font-extrabold text-sm hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {brandConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
