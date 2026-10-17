import React, { useState } from 'react';
import { MapPin, Clock, Navigation, ChevronRight, Building, Sparkles } from 'lucide-react';
import { locationsZones } from '../../data/locationsData';
import Badge from '../ui/Badge';

export default function HyderabadLocationsSection({ onOpenQuoteSheet }) {
  const [activeZoneId, setActiveZoneId] = useState('west-hyderabad');
  const [selectedLocality, setSelectedLocality] = useState(null);

  const activeZone = locationsZones.find(z => z.id === activeZoneId) || locationsZones[0];

  const handleCardClick = (loc) => {
    setSelectedLocality(loc);
    onOpenQuoteSheet(null, loc.name);
  };

  return (
    <section id="locations" className="py-16 sm:py-24 bg-canvas-muted dark:bg-[#070b14] border-y border-canvas-border dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Badge variant="emerald" size="sm" className="mb-3">
            HYDERABAD & SECUNDERABAD LOCAL SEO NETWORK
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Balcony Safety Nets Across <span className="text-emerald-500">25+ Hyderabad Localities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            MB Natural Safety Nets operates roving mobile rigging vans carrying digital laser meters, net cross-sections, and SS 316 invisible grill hardware for 30-minute doorstep service.
          </p>
        </div>

        {/* Zone Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {locationsZones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActiveZoneId(zone.id)}
              className={`min-h-[48px] px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeZoneId === zone.id
                  ? 'bg-brand-600 text-white shadow-glow-azure'
                  : 'bg-white dark:bg-obsidian-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              <Navigation className="w-4 h-4 text-brand-300" />
              <span>{zone.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeZoneId === zone.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {zone.sla}
              </span>
            </button>
          ))}
        </div>

        {/* Zone Info Banner */}
        <div className="bg-white dark:bg-obsidian-card p-4 rounded-2xl border border-slate-200 dark:border-white/10 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                {activeZone.name} Dispatch SLA: <strong className="text-emerald-500">{activeZone.sla}</strong>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {activeZone.description}
              </span>
            </div>
          </div>

          <span className="text-xs text-brand-600 dark:text-brand-400 font-bold hidden sm:inline">
            Tap your apartment neighborhood to book free measurement →
          </span>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {activeZone.locations.map((loc) => (
            <div
              key={`${loc.name}-${loc.pincode}`}
              onClick={() => handleCardClick(loc)}
              className="group p-4 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 shadow-sm hover:shadow-card-hover transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {loc.name}
                    </h3>
                  </div>
                  {loc.popular && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400">
                      High Demand
                    </span>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  PIN: <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{loc.pincode}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  Near: {loc.landmark}
                </div>

                {loc.topSocieties && loc.topSocieties.length > 0 && (
                  <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-white/5 flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-400 truncate">
                    <Building className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{loc.topSocieties.join(', ')}</span>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>ETA: {loc.sla}</span>
                </span>
                <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  <span>Balcony Quote</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
