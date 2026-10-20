import React from 'react';
import ReviewsSection from '../components/sections/ReviewsSection';
import Badge from '../components/ui/Badge';
import { Building2, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';

export default function ReviewsPage({ onOpenQuoteSheet }) {
  const caseStudies = [
    {
      title: "Prestige High Fields RWA Balcony Safety Association Contract",
      units: "850+ Balcony Netting Installations",
      location: "Financial District, Hyderabad",
      summary: "Comprehensive bulk society contract for balcony pigeon nets and child fall safety barriers across 8 residential towers. Completed with zero facade disturbance and 100% resident satisfaction.",
      tag: "Residential Gated Society"
    },
    {
      title: "My Home Bhooja High-Rise Balcony Child Safety Initiative",
      units: "420+ Balcony Invisible Grills & Nets",
      location: "HITEC City & Madhapur Corridor",
      summary: "High-floor penthouse and balcony fall-proofing using SS 316 marine invisible grills and child safety mesh. Tension tested to exceed 400kg load with 10-year rust warranties.",
      tag: "Luxury High-Rise Balcony Project"
    }
  ];

  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title="Customer Reviews & Ratings | MB Safety Nets Hyderabad"
        description="Read 3,850+ verified customer reviews for balcony safety nets, pigeon nets, and invisible grills across Hyderabad high-rise apartments. 4.98-star rating."
        canonicalPath="/reviews"
        ogImage="/images/hero-balcony.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          <Badge variant="amber" size="sm" className="mb-3">
            VERIFIED BALCONY REVIEWS • HYDERABAD
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Over 3,850+ Five-Star Balcony Reviews <span className="text-amber-500">in Hyderabad</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Read authentic feedback from apartment owners, parents of young toddlers, and pet owners who trust MB Natural Safety Nets for their balcony safety.
          </p>
        </div>

        {/* Reviews Section Component */}
        <ReviewsSection />

        {/* Society & Facility Case Studies */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="azure" size="sm" className="mb-2">
              LARGE-SCALE BALCONY SOCIETY CONTRACTS
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Society Presidents & RWA Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-md">
                      {study.tag}
                    </span>
                    <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {study.units}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white">
                    {study.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5 mb-3">
                    {study.location}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">5-Year Stamped Doorstep Warranty</span>
                  <button
                    type="button"
                    onClick={() => onOpenQuoteSheet(null, study.location)}
                    className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline cursor-pointer"
                  >
                    Request Society Balcony Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
