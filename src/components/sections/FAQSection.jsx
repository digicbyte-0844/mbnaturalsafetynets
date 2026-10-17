import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { faqsData } from '../../data/faqsData';
import { brandConfig } from '../../data/brandConfig';
import Badge from '../ui/Badge';

export default function FAQSection({ onOpenQuoteSheet }) {
  const [openId, setOpenId] = useState('faq-1');

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-canvas-muted dark:bg-[#070b14] border-t border-canvas-border dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="azure" size="sm" className="mb-3">
            CLEAR ANSWERS • ZERO AMBIGUITY
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Everything you need to know about balcony net transparency, SS 316 invisible grill safety, and our 5-year warranty.
          </p>
        </div>

        {/* Hairline Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-obsidian-card rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen 
                      ? 'bg-brand-600 text-white' 
                      : 'bg-slate-100 dark:bg-obsidian-surface text-slate-600 dark:text-slate-300'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Height Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-brand-600 to-sky-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Have a specific balcony inquiry?</h3>
              <p className="text-xs text-white/80">Speak directly with our senior rigging supervisor in Hyderabad.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="flex-1 sm:flex-none min-h-[44px] px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenQuoteSheet()}
              className="flex-1 sm:flex-none min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-900/40 border border-white/30 text-white font-extrabold text-xs hover:bg-slate-900/60 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Inspection</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
