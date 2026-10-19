import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

/**
 * Reusable EmptyState component for lists, category filters, and search results.
 * Renders an accessible, informative UI when an array has length 0.
 */
export default function EmptyState({
  icon: Icon = SearchX,
  title = "No results found",
  description = "We couldn't find any items matching your active filter criteria. Try clearing the filter or choosing another category.",
  actionLabel = "Reset Filters",
  onAction,
  className = ""
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`text-center py-16 px-6 rounded-3xl bg-white dark:bg-obsidian-card border border-dashed border-slate-300 dark:border-white/10 ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
        {description}
      </p>

      {onAction && actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-glow-azure transition-transform active:scale-95 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
}
