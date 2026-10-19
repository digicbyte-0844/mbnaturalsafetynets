import React, { useState } from 'react';
import { Calculator, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { brandConfig } from '../../data/brandConfig';
import TouchStepperInput from '../mobile/TouchStepperInput';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { generateWhatsAppUrl } from '../../utils/generateWhatsAppUrl';

export default function InteractiveCalculator({ onOpenQuoteSheet }) {
  const [selectedServiceId, setSelectedServiceId] = useState('balcony-pigeon-net');
  const [lengthFt, setLengthFt] = useState(16);
  const [heightFt, setHeightFt] = useState(8);
  const [balconiesCount, setBalconiesCount] = useState(1);
  const [includeSanitization, setIncludeSanitization] = useState(true);

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const isLinear = activeService.unit === 'running ft';

  // Area & Cost Calculation
  const totalUnits = isLinear ? lengthFt * balconiesCount : lengthFt * heightFt * balconiesCount;
  const baseCost = totalUnits * activeService.basePrice;
  const sanitizationCost = includeSanitization && (activeService.category === 'bird-control' || activeService.category === 'safety-nets')
    ? (activeService.id === 'balcony-duct-shaft-net' ? 0 : 499) 
    : 0;
  const totalEstimate = Math.round(baseCost + sanitizationCost);
  const lowerRange = Math.round(totalEstimate * 0.92);
  const upperRange = Math.round(totalEstimate * 1.08);

  const handleWhatsAppSend = () => {
    const summary = `${lengthFt}ft length ${!isLinear ? `x ${heightFt}ft height` : ''} (${balconiesCount} Unit/Area), Total: ${totalUnits} ${activeService.unit}, Est: ₹${totalEstimate}`;
    const url = generateWhatsAppUrl({
      service: activeService.title,
      dimensions: summary,
      notes: includeSanitization ? "Includes High-Pressure Balcony Chemical Sanitization" : "Standard Installation"
    });
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-white dark:bg-obsidian-card rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-white/10 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>MB NATURAL HYDERABAD RATE CALCULATOR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
            Instant Netting & Protection Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time price transparency for balcony safety nets, pigeon nets, bird spikes, cricket practice nets, and invisible grills across Hyderabad.
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold shrink-0">
          <ShieldCheck className="w-4 h-4" />
          <span>Includes 5-Year Stamped Warranty</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6">
        
        {/* Left Inputs Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Service Picker Pills */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Select Safety or Sports Solution
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[220px] overflow-y-auto no-scrollbar p-1">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`min-h-[48px] p-2.5 rounded-xl text-left border text-xs font-bold transition-all flex flex-col justify-between cursor-pointer ${
                    selectedServiceId === service.id
                      ? 'bg-brand-600 text-white border-brand-600 shadow-glow-azure'
                      : 'bg-canvas-muted dark:bg-obsidian-surface text-slate-700 dark:text-slate-300 border-canvas-border dark:border-obsidian-border hover:border-brand-500/50'
                  }`}
                >
                  <span className="truncate">{service.shortTitle}</span>
                  <span className={`text-[10px] font-mono mt-0.5 ${selectedServiceId === service.id ? 'text-brand-100' : 'text-slate-400'}`}>
                    ₹{service.basePrice}/{service.unit}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Stepper: Length / Width */}
          <TouchStepperInput
            label={isLinear ? "Running Length (Ledges / Parapets / Sills)" : "Area Length / Width (Wall to Wall or Pitch)"}
            value={lengthFt}
            min={4}
            max={isLinear ? 150 : 80}
            step={isLinear ? 5 : 1}
            unit="ft"
            onChange={setLengthFt}
            helperText={isLinear ? "Window sills & ledges: 10ft – 50ft" : "Average apartment balcony: 12ft – 25ft"}
          />

          {/* Stepper: Height (Only for 2D square-foot installations) */}
          {!isLinear && (
            <TouchStepperInput
              label="Height (Floor / Railing to Ceiling Slab or Turf Cage)"
              value={heightFt}
              min={3}
              max={30}
              step={1}
              unit="ft"
              onChange={setHeightFt}
              helperText="Standard ceiling height: 8ft – 12ft • Sports cage: 15ft – 25ft"
            />
          )}

          {/* Stepper: Number of Units / Sections */}
          <TouchStepperInput
            label="Number of Balconies / Sections / Areas"
            value={balconiesCount}
            min={1}
            max={8}
            step={1}
            unit="unit"
            onChange={setBalconiesCount}
            helperText="Multi-unit society and academy discounts auto-applied"
          />

          {/* Add-on: Deep Balcony Chemical Sanitization (For bird/balcony nets) */}
          {(activeService.category === 'bird-control' || activeService.category === 'safety-nets') && (
            <div
              onClick={() => setIncludeSanitization(!includeSanitization)}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border cursor-pointer select-none active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                  includeSanitization 
                    ? 'bg-brand-600 border-brand-600 text-white' 
                    : 'bg-white dark:bg-obsidian-card border-slate-300 dark:border-slate-600 text-transparent'
                }`}>
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                    Include High-Pressure Chemical Sanitization
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pre-wash & enzymatic cleaning to eradicate pigeon droppings, odor, and bird mites (+₹499)
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Output Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 text-white p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-eyebrow font-extrabold text-brand-400">
                ESTIMATE BREAKDOWN
              </span>
              <span className="text-xs font-mono text-slate-300">
                {activeService.shortTitle}
              </span>
            </div>

            {/* Area & Specifications breakdown */}
            <div className="py-4 space-y-2 text-xs text-slate-300 border-b border-white/10">
              <div className="flex justify-between">
                <span>Calculated {isLinear ? 'Running Length' : 'Covered Area'}:</span>
                <span className="font-mono font-bold text-white">
                  {totalUnits} {isLinear ? 'Running Ft' : 'Sq.Ft'} {!isLinear && `(${lengthFt}ft × ${heightFt}ft)`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Base Unit Rate:</span>
                <span className="font-mono font-bold text-white">
                  ₹{activeService.basePrice} / {activeService.unit}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Number of Sections / Units:</span>
                <span className="font-mono font-bold text-white">
                  {balconiesCount} Unit(s)
                </span>
              </div>
              {(activeService.category === 'bird-control' || activeService.category === 'safety-nets') && (
                <div className="flex justify-between">
                  <span>Pre-Installation Sanitization:</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {includeSanitization ? (activeService.id === 'balcony-duct-shaft-net' ? 'Free (Included)' : '₹499') : '₹0'}
                  </span>
                </div>
              )}
            </div>

            {/* Big Price Display */}
            <div className="py-5 text-center">
              <span className="text-xs text-slate-400 block mb-1">Estimated Doorstep Cost Range</span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand-400 to-safety-300">
                ₹{lowerRange.toLocaleString('en-IN')} – ₹{upperRange.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                * Zero hidden fees. Includes SS 316 rigging hardware, hooks & labor.
              </span>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteSheet(activeService.id)}
              className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-sm shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Book 30-Min Free Laser Measurement</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 border border-[#25D366]/30 active:scale-95 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Send Estimate to WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
