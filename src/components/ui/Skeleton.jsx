import React from 'react';

/**
 * Reusable Shimmer Skeleton Placeholder Component
 * Used for async data grids, images, and card loading states.
 */
export default function Skeleton({ className = "", variant = "rect" }) {
  const baseClasses = "relative overflow-hidden bg-slate-200 dark:bg-white/[0.06] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.8s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-white/10 before:to-transparent";

  if (variant === "circle") {
    return <div className={`rounded-full ${baseClasses} ${className}`} />;
  }

  if (variant === "text") {
    return <div className={`h-4 rounded-md ${baseClasses} ${className}`} />;
  }

  return <div className={`rounded-2xl ${baseClasses} ${className}`} />;
}
