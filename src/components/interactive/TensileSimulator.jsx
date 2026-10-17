import React, { useState } from 'react';
import { Shield, Wind, Weight, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';
import TouchStepperInput from '../mobile/TouchStepperInput';

export default function TensileSimulator() {
  const [impactLoadKg, setImpactLoadKg] = useState(80);
  const [windVelocityKmh, setWindVelocityKmh] = useState(120);

  // Quick Presets for Balcony Safety
  const applyPreset = (load, wind) => {
    setImpactLoadKg(load);
    setWindVelocityKmh(wind);
  };

  // Comparative Stress Analysis for High-Rise Balconies
  const ss316Status = impactLoadKg <= 450 && windVelocityKmh <= 240 ? 'SAFE' : 'LIMIT EXCEEDED';
  const copolymerStatus = impactLoadKg <= 180 && windVelocityKmh <= 160 ? 'SAFE' : impactLoadKg <= 220 ? 'HIGH STRESS' : 'FAIL';

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-5 sm:p-8 border border-white/10 shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>BALCONY STRESS & FALL SIMULATION LAB</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
            High-Rise Balcony Tensile Load & Monsoon Wind Simulator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate real forces on high-rise apartment balconies (10th to 50th floor) comparing MB Natural Balcony Nets vs Invisible Grills.
          </p>
        </div>

        {/* Quick mobile presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-slate-400 font-bold mr-1">Presets:</span>
          <button
            type="button"
            onClick={() => applyPreset(30, 60)}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-colors cursor-pointer"
          >
            Toddler Lean (30kg)
          </button>
          <button
            type="button"
            onClick={() => applyPreset(80, 120)}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-colors cursor-pointer"
          >
            Adult Slip (80kg)
          </button>
          <button
            type="button"
            onClick={() => applyPreset(120, 200)}
            className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-bold transition-colors cursor-pointer"
          >
            Monsoon Gale (200km/h)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6">
        
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <TouchStepperInput
            label="Simulated Sudden Balcony Impact Load"
            value={impactLoadKg}
            min={20}
            max={500}
            step={10}
            unit="kg"
            onChange={setImpactLoadKg}
            helperText="Toddler push: 20-30kg | Adult slip: 70-90kg"
          />

          <TouchStepperInput
            label="Simulated High-Rise Balcony Wind Velocity"
            value={windVelocityKmh}
            min={30}
            max={240}
            step={10}
            unit="km/h"
            onChange={setWindVelocityKmh}
            helperText="Normal breeze: 30km/h | Monsoon thunderstorm: 120-160km/h"
          />

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-brand-400 font-bold">
              <Info className="w-4 h-4 shrink-0" />
              <span>Balcony Safety Standards in Hyderabad</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Modern high-rise societies in Gachibowli, Kondapur, and Kokapet experience severe wind tunnels. Our balcony netting and SS 316 cables are tensioned to exceed safety factors by 300%.
            </p>
          </div>
        </div>

        {/* Visual Comparison Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Card 1: SS 316 Invisible Grill */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-brand-500/60 shadow-glow-azure flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-400">BALCONY LUXURY SPEC</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {ss316Status}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Balcony SS 316 Invisible Grills</h4>
              <p className="text-[11px] text-slate-400 leading-tight mb-3">
                DuPont Teflon-sheathed 316 marine stainless steel with 400kg+ capacity.
              </p>
              
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>Load Capacity:</span>
                  <span className="font-mono font-bold text-emerald-400">450 kg</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Wind Resistance:</span>
                  <span className="font-mono font-bold text-emerald-400">240 km/h</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>View Blockage:</span>
                  <span className="font-mono font-bold text-emerald-400">0% (Unblocked)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fire Evacuation:</span>
                  <span className="font-mono font-bold text-emerald-400">Quick-Cut Safe</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <span className="text-[11px] text-brand-300 font-extrabold">Best for Kids, Pets & Penthouses</span>
            </div>
          </div>

          {/* Card 2: Balcony Child & Pigeon Net */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">NATURAL COPOLYMER SPEC</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                  copolymerStatus === 'SAFE' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {copolymerStatus === 'SAFE' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  {copolymerStatus}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">MB Natural Balcony Safety Net</h4>
              <p className="text-[11px] text-slate-400 leading-tight mb-3">
                Virgin UV-stabilized copolymer with child-proof railing gap seal.
              </p>
              
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>Load Capacity:</span>
                  <span className="font-mono font-bold text-white">180 kg Grid</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Wind Resistance:</span>
                  <span className="font-mono font-bold text-white">160 km/h</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>View Blockage:</span>
                  <span className="font-mono font-bold text-emerald-400">2% (Invisible 10ft)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Pest Protection:</span>
                  <span className="font-mono font-bold text-cyan-300">100% Pigeon Proof</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <span className="text-[11px] text-slate-300 font-extrabold">Complete Balcony Hygiene</span>
            </div>
          </div>

          {/* Card 3: Traditional Iron Grills */}
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-white/5 opacity-80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">HEAVY IRON BARS</span>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  HIGH RISK
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-300 mb-2">Outdated Balcony Iron Bars</h4>
              <p className="text-[11px] text-slate-400 leading-tight mb-3">
                Welded mild steel bars that rust, flake, and trap residents in fires.
              </p>
              
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Load Capacity:</span>
                  <span className="font-mono font-bold text-slate-300">300 kg (Welds Rust)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>View Blockage:</span>
                  <span className="font-mono font-bold text-red-400">65% (Cage Effect)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Fire Evacuation:</span>
                  <span className="font-mono font-bold text-red-400">Blocked (Fatal Trap)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Maintenance:</span>
                  <span className="font-mono font-bold text-red-400">Annual Rust Paint</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <span className="text-[11px] text-red-400 font-bold">Property Resale Depreciator</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
