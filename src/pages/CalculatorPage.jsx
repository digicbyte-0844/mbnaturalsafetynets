import React from 'react';
import InteractiveCalculator from '../components/interactive/InteractiveCalculator';
import TensileSimulator from '../components/interactive/TensileSimulator';
import Badge from '../components/ui/Badge';
import { brandConfig } from '../data/brandConfig';
import { Ruler } from 'lucide-react';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';

export default function CalculatorPage({ onOpenQuoteSheet }) {
  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title="Balcony Safety Nets Cost Calculator Hyderabad | MB"
        description="Instant cost calculator for balcony safety nets, pigeon nets, bird spikes & SS 316 invisible grills in Hyderabad. Get accurate price estimates in seconds."
        canonicalPath="/calculator"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-20 h-14 mx-auto mb-4 flex items-center justify-center">
            <img
              loading="lazy"
              decoding="async"
              src={logoEmblem}
              alt="MB Natural Safety Nets"
              className="w-full h-full object-contain filter drop-shadow-sm"
              width="80"
              height="56"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>
          <Badge variant="azure" size="sm" className="mb-3">
            SAFETY & SPORTS NETTING ESTIMATION LAB
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Safety Nets, Sports & Invisible Grill <span className="text-brand-600 dark:text-brand-400">Cost Estimator</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Calculate exact pricing for balcony safety nets, pigeon exclusion, bird spikes, rooftop cricket practice pitches, and invisible grills across Hyderabad. Adjust dimensions and units below.
          </p>
        </div>

        {/* 1. Calculator Component */}
        <div className="mb-16">
          <InteractiveCalculator onOpenQuoteSheet={onOpenQuoteSheet} />
        </div>

        {/* 2. Tensile Simulator Component */}
        <div className="mb-16">
          <TensileSimulator />
        </div>

        {/* 3. Measurement Guide Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                How to Measure Your Apartment Balcony
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You do not need to be 100% exact — our technicians perform digital millimeter laser calibration free of charge at your doorstep.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
              <strong className="text-slate-900 dark:text-white block font-bold mb-1">1. Measure Balcony Length (Width)</strong>
              Measure with a tape along your balcony railing from side wall to side wall in feet.
            </div>
            <div className="p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
              <strong className="text-slate-900 dark:text-white block font-bold mb-1">2. Measure Balcony Height</strong>
              Measure vertically from the top of your railing or floor tile up to the ceiling slab.
            </div>
            <div className="p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
              <strong className="text-slate-900 dark:text-white block font-bold mb-1">3. Book Free Doorstep Measurement</strong>
              We dispatch a certified rigger with laser distance meters and physical net samples across Hyderabad.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
