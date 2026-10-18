import React from 'react';
import { ShieldCheck, Compass, Sun, UserCheck } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import Badge from '../ui/Badge';
import logoEmblem from '../../assets/logo-emblem.png';

export default function EngineeringSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "SS 316 Marine Hardware",
      subtitle: "Zero Rust Balcony Fittings",
      desc: "Every fastener, turnbuckle, and guide wire is forged from 316 Marine Grade stainless steel with molybdenum reinforcement against Hyderabad rain and humidity."
    },
    {
      icon: Compass,
      title: "Laser Precision Calibration",
      subtitle: "1mm Balcony Tolerance",
      desc: "Our technicians calibrate anchor points with digital laser levels along balcony parapets and ceilings to ensure zero net sag and perfectly uniform cable spacing."
    },
    {
      icon: Sun,
      title: "UV-Stabilized Monomers",
      subtitle: "-40°C to +85°C Thermal Life",
      desc: "Virgin high-density copolymer twines are injected with UV stabilizers to withstand scorching Deccan plateau summer heat without becoming brittle or discolored."
    },
    {
      icon: UserCheck,
      title: "Certified Altitude Riggers",
      subtitle: "High-Rise Balcony Specialists",
      desc: "Our installation personnel hold verified high-altitude safety certifications, equipped with full-body harnesses, shock absorbers, and specialized anchoring tools."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-obsidian-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-20 h-14 mx-auto mb-3 flex items-center justify-center">
            <img
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
            BALCONY RIGGING STANDARDS & SAFETY ASSURANCE
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            The 4 Pillars of <span className="text-brand-600 dark:text-brand-400">Balcony Safety Engineering</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Why over 12,500+ high-rise families and luxury apartment societies across Hyderabad trust MB Natural Safety Nets.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border hover:border-brand-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-display font-extrabold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 block mt-0.5 mb-2">
                    {p.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Technician Rigging Showcase */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian-surface shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] bg-slate-900 overflow-hidden">
            <img
              src="/images/technician-install.jpg"
              alt="Certified Balcony Rigging Technician with Laser Measure"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-bold text-emerald-400 block">✓ Digital Laser Millimeter Calibration</span>
              <span className="text-[11px] text-slate-300">Free Doorstep Inspection across 25+ Hyderabad Localities</span>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-eyebrow text-emerald-600 dark:text-emerald-400">
              HIGH-ALTITUDE SAFETY PROTOCOL
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              Installed Exclusively by Certified Riggers & Laser Calibrators
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every balcony installation is executed by our full-time, background-verified technicians equipped with EN-certified full-body harnesses, Hilti rotary drills, and digital red-beam laser distance meters. Zero wall cracking, zero aesthetic damage to your balcony tiles, and zero sagging.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                100% Background-Verified Staff
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                30-Min Rapid Hyderabad Arrival
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Free Net Samples Handover
              </span>
            </div>
          </div>
        </div>

        {/* Comparative Matrix Section */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Comparative Balcony Safety Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              How MB Natural Safety Nets compares with cheap local net contractors and traditional iron grills.
            </p>
          </div>

          <div className="overflow-x-auto w-full no-scrollbar">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-4">Feature / Balcony Specification</th>
                  <th className="py-3 px-4 text-brand-400 font-bold bg-white/5 rounded-t-xl">MB Natural Safety Nets</th>
                  <th className="py-3 px-4 text-slate-400">Cheap Local Net Contractors</th>
                  <th className="py-3 px-4 text-slate-400">Conventional Iron Grills</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Load Bearing Capacity</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-white/5">180kg - 400kg+ Certified</td>
                  <td className="py-3.5 px-4 text-slate-400">40 - 60 kg (Unrated Twines)</td>
                  <td className="py-3.5 px-4 text-slate-400">250 kg (Welds Rust)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Skyline View Preservation</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-white/5">0% - 2% (Virtually Invisible)</td>
                  <td className="py-3.5 px-4 text-slate-400">15% - 25% (Visible green twines)</td>
                  <td className="py-3.5 px-4 text-red-400">65% (Heavy Cage Bars)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Official Warranty</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-white/5">5-Year Stamped Doorstep Card</td>
                  <td className="py-3.5 px-4 text-red-400">Verbal Only (No guarantee)</td>
                  <td className="py-3.5 px-4 text-slate-400">None (Requires repaint)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Emergency Fire Escape</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-white/5">Quick-Cut Safe with Wire Cutter</td>
                  <td className="py-3.5 px-4 text-emerald-400">Cuttable</td>
                  <td className="py-3.5 px-4 text-red-400">Fatal Trap (Impassable)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Rust & Weather Guarantee</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-white/5">10-Year Rust-Free (SS 316)</td>
                  <td className="py-3.5 px-4 text-red-400">GI Hooks Rust in 1 Year</td>
                  <td className="py-3.5 px-4 text-red-400">Severe Rust Flakes</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
