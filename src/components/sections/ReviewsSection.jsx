import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData, trustMetrics } from '../../data/reviewsData';
import { brandConfig } from '../../data/brandConfig';
import Badge from '../ui/Badge';
import logoEmblem from '../../assets/logo-emblem.png';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-canvas-light dark:bg-obsidian-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
          <Badge variant="amber" size="sm" className="mb-3">
            VERIFIED HYDERABAD CUSTOMER STORIES
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Families in <span className="text-amber-500">10,000+ Luxury Homes</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Read real installation feedback from residents across Prestige, My Home, Aparna, and Lanco Hills communities.
          </p>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200/80 dark:border-white/10 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-600 dark:text-brand-400 mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified chip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-4">
                  "{review.reviewText}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {review.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-canvas-muted dark:bg-obsidian-surface text-slate-600 dark:text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {review.community}
                  </p>
                  <p className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">
                    {review.service}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
