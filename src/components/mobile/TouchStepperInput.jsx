import React from 'react';
import { Minus, Plus } from 'lucide-react';

export default function TouchStepperInput({ 
  id,
  label, 
  value, 
  min, 
  max, 
  step = 1, 
  unit = 'ft', 
  onChange,
  helperText
}) {
  const inputId = id || `stepper-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  const handleDecrement = (e) => {
    e.preventDefault();
    if (value > min) onChange(Math.max(min, value - step));
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (value < max) onChange(Math.min(max, value + step));
  };

  return (
    <div className="bg-canvas-muted dark:bg-obsidian-surface p-3.5 sm:p-4 rounded-2xl border border-canvas-border dark:border-obsidian-border transition-colors">
      <div className="flex items-center justify-between mb-2.5">
        <div>
          <label htmlFor={inputId} className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block cursor-pointer">
            {label}
          </label>
          {helperText && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {helperText}
            </span>
          )}
        </div>
        <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-obsidian-card text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700 shadow-sm">
          {value} {unit}
        </span>
      </div>

      {/* Stepper + Slider Row */}
      <div className="flex items-center gap-3">
        {/* Minus Button - Minimum 48px touch target */}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
          className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-sm hover:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <Minus className="w-5 h-5" />
        </button>

        {/* Range Slider Track */}
        <div className="flex-1 px-1">
          <input
            id={inputId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            aria-label={label}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuetext={`${value} ${unit}`}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600 dark:accent-brand-400 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
            <span>{min} {unit}</span>
            <span>{max} {unit}</span>
          </div>
        </div>

        {/* Plus Button - Minimum 48px touch target */}
        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
          className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-sm hover:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
