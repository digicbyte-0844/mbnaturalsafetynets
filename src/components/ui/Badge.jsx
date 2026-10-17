import React from 'react';

export default function Badge({ children, variant = "azure", size = "sm", className = "" }) {
  const variants = {
    azure: "bg-brand-500/10 text-brand-600 dark:bg-brand-400/15 dark:text-brand-300 border-brand-500/20",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300 border-amber-500/20",
    obsidian: "bg-slate-900/10 text-slate-800 dark:bg-white/10 dark:text-slate-200 border-slate-700/20",
    glow: "bg-brand-600 text-white shadow-glow-azure border-transparent"
  };

  const sizes = {
    xs: "text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider",
    sm: "text-xs px-2.5 py-1 font-semibold",
    md: "text-sm px-3 py-1.5 font-bold"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${variants[variant] || variants.azure} ${sizes[size] || sizes.sm} ${className}`}>
      {children}
    </span>
  );
}
