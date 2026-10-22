import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, Mail, Phone, MapPin, ShieldCheck, CheckCircle2, Clock, AlertTriangle, Scale, Copyright } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import SEOHead from '../components/seo/SEOHead';

export default function TermsConditionsPage() {
  return (
    <div className="py-12 sm:py-16 bg-canvas-light dark:bg-obsidian-canvas min-h-screen text-slate-800 dark:text-slate-200">
      <SEOHead
        title="Terms of Service & Warranty | MB Natural Safety Nets"
        description="Terms of service and 5-Year Stamped Doorstep Warranty policy for residential and commercial safety netting installations in Hyderabad."
        canonicalPath="/terms-and-conditions"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">Terms of Service & Warranty</span>
        </div>

        {/* Header with Last Updated Badge */}
        <div className="pb-8 border-b border-slate-200 dark:border-white/10 mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>5-YEAR STAMPED DOORSTEP WARRANTY</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>Last Updated: October 2026</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Terms of Service & Warranty Charter
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <strong>Registered Entity:</strong> {brandConfig.legalEntity} • <strong>Managing Director:</strong> {brandConfig.proprietor} • <strong>Website:</strong> <a href="https://mbnaturalsafetynets.in" className="text-brand-600 dark:text-brand-400 hover:underline">mbnaturalsafetynets.in</a>
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-500" />
              <span>1. Agreement & Acceptance of Terms</span>
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement between you and <strong>{brandConfig.brandName}</strong> (<em>{brandConfig.legalEntity}</em>). By booking an on-site balcony laser measurement, utilizing our digital cost estimator, communicating via WhatsApp, or approving safety netting installation, you confirm that you accept these terms in full.
            </p>
            <p>
              Our operations cover 11 certified categories across Hyderabad: Balcony Safety Nets, Balcony Pigeon Nets, Bird Spikes, Utility Duct Area Nets, SS 316 Marine Invisible Grills, Child Safety Barriers, Pet Protection Nets, Cricket Practice Enclosures, Football Sports Turf Nets, Swimming Pool Safety Nets, and Construction Site Fall-Arrest Systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>2. Safety Engineering & Load Capacity Disclaimers</span>
            </h2>
            <p>
              All safety netting and invisible grill systems installed by {brandConfig.brandName} are fabricated to rigorous industrial safety specifications:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Balcony Copolymer Twine:</strong> Certified 180kg+ multi-point breaking load capacity engineered to prevent accidental human falls, child slips, and pet drops from high-rise balconies.</li>
              <li><strong>SS 316 Marine Invisible Grills:</strong> Certified 400kg+ tensile capacity per cable using high-grade stainless steel cables with DuPont nylon protective coating.</li>
              <li><strong>Proper Use Disclaimer:</strong> While engineered for extreme fall protection, safety netting and invisible grills must not be intentionally abused, used as monkey bars or gymnastics apparatus, or exposed to open fire, acid, or sharp edged tools.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>3. Official 5-Year Stamped Doorstep Warranty Conditions</span>
            </h2>
            <p>
              Every residential balcony installation includes an official <strong>5-Year Physical Stamped Warranty Certificate</strong> signed by Proprietor {brandConfig.proprietor} and handed over directly upon completion.
            </p>
            
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Scope of Warranty Coverage:
              </h3>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
                <li>Material degradation, cracking, or twine brittleness caused by Hyderabad UV solar exposure and monsoon humidity.</li>
                <li>Expansion bolt slippage, anchor hook displacement, or steel guide-rope tension slackening.</li>
                <li>Free doorstep technician inspection and zero-cost re-tensioning during the entire 5-year warranty period.</li>
              </ul>

              <h3 className="font-bold text-slate-900 dark:text-white text-sm pt-2">
                Warranty Exclusions:
              </h3>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <li>Physical cutting, deliberate shearing with blades/scissors, or burns caused by crackers/cigarettes.</li>
                <li>Severe structural civil masonry failure of host walls, ceiling slabs, or rusted existing iron railings.</li>
                <li>Unauthorized modification, dismantling, or reinstallations executed by third-party contractors.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              4. Doorstep Laser Inspections & Society Permissions
            </h2>
            <p>
              We provide 100% free doorstep inspection across covered Hyderabad localities. Our technicians arrive with digital red-laser distance meters to calculate exact square footage and verify structural ceiling slab integrity.
            </p>
            <p>
              <strong>Resident Welfare Association (RWA) Clearances:</strong> Clients residing in gated communities or high-rise societies (e.g., in Gachibowli, HITEC City, Kondapur, Kokapet) are responsible for informing society management of scheduled installation timings. Our technicians carry ID cards and comply with society entry protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Copyright className="w-5 h-5 text-brand-500" />
              <span>5. Intellectual Property & Brand Assets</span>
            </h2>
            <p>
              All trademarks, photographic installation portfolios, website design elements, calculation algorithms, and branding elements associated with {brandConfig.brandName} are the exclusive intellectual property of {brandConfig.legalEntity}. Unauthorized scraping, republication of site photos, or duplication of branding is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              6. Pricing Transparency & Payment Terms
            </h2>
            <p>
              Pricing is strictly calculated per square foot according to agreed package specifications (e.g., ₹18 – ₹26 / sq.ft for Copolymer Balcony Netting, ₹140 – ₹180 / sq.ft for SS 316 Marine Invisible Grills). There are zero hidden costs for standard anchor fasteners. Payment is due upon successful physical installation and warranty handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              7. Governing Law & Dispute Resolution
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising out of or in connection with these terms or installations shall be subject to the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              8. Central Hyderabad Headquarters & Warranty Claims
            </h2>
            <p>To register a warranty re-tensioning request or discuss terms, contact:</p>
            
            <div className="p-5 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-lg space-y-2.5 text-sm">
              <div className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                {brandConfig.legalEntity}
              </div>
              <div className="text-xs text-slate-500">
                Managing Director: <strong className="text-slate-800 dark:text-slate-200">{brandConfig.proprietor}</strong>
              </div>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{brandConfig.hubAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${brandConfig.phoneRaw}`} className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                  {brandConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <a href={`mailto:${brandConfig.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                  {brandConfig.email}
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
