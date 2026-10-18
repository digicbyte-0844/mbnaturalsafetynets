import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, ArrowRight, ArrowLeft, Send, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { servicesData } from '../../data/servicesData';
import { allLocationsFlat } from '../../data/locationsData';
import { brandConfig } from '../../data/brandConfig';
import { generateWhatsAppUrl } from '../../utils/generateWhatsAppUrl';
import { sendEmailInquiry } from '../../utils/sendEmailInquiry';
import logoEmblem from '../../assets/logo-emblem.png';

export default function MobileBottomSheet({ isOpen, onClose, initialServiceId = '', initialLocality = '' }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(initialServiceId || servicesData[0].title);
  const [selectedLocality, setSelectedLocality] = useState(initialLocality || 'Gachibowli');
  const [preferredDate, setPreferredDate] = useState('Earliest Available (Today / Tomorrow)');
  const [dimensions, setDimensions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sheetRef = useRef(null);

  // Sync initial props
  useEffect(() => {
    if (initialServiceId) {
      const match = servicesData.find(s => s.id === initialServiceId);
      if (match) setSelectedService(match.title);
    }
    if (initialLocality) {
      setSelectedLocality(initialLocality);
    }
  }, [initialServiceId, initialLocality]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setStep(1);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close bottom sheet on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle Touch Pull-down to Dismiss
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY;
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 100) {
      onClose();
    }
    setDragOffset(0);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name,
      phone,
      locality: selectedLocality,
      service: selectedService,
      preferredDate,
      dimensions: dimensions || "Standard Balcony Netting",
      source: "Mobile Bottom Sheet Modal (MB Natural Safety Nets)"
    };

    // 1. Send FormSubmit AJAX in background to mahimanohar47@gmail.com
    sendEmailInquiry(leadData);

    // 2. Trigger Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0284c7', '#38bdf8', '#10b981', '#f59e0b']
      });
    } catch {}

    setIsSubmitting(false);
    setIsSuccess(true);

    // 3. Open WhatsApp after short delay
    setTimeout(() => {
      const waUrl = generateWhatsAppUrl(leadData);
      window.open(waUrl, '_blank');
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 no-print">
      
      {/* Backdrop overlay dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Sheet / Modal Container */}
      <div
        ref={sheetRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateY(${dragOffset}px)`,
          transition: dragOffset === 0 ? 'transform 0.25s ease-out' : 'none'
        }}
        className="relative z-10 w-full max-w-lg bg-white dark:bg-[#0c1424] text-slate-900 dark:text-white rounded-t-sheet md:rounded-3xl shadow-sheet border border-slate-200/80 dark:border-white/10 max-h-[92vh] overflow-y-auto no-scrollbar"
      >
        {/* Top Tactile Drag Handle (Mobile only) */}
        <div className="pt-3 pb-1 flex justify-center md:hidden cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-5 pt-3 pb-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-10 flex items-center justify-center shrink-0">
              <img
                src={logoEmblem}
                alt="MB Natural Safety Nets"
                className="w-full h-full object-contain filter drop-shadow-sm"
                width="48"
                height="40"
                onError={(e) => {
                  e.currentTarget.src = '/logo.jpeg';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-eyebrow text-brand-600 dark:text-brand-400">
                  MB NATURAL SAFETY NETS • 30-MIN SLA
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">
                Book Free Balcony Laser Inspection
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
                Balcony Inspection Confirmed!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-6">
                Thank you, <strong>{name}</strong>. Our senior rigger in <strong>{selectedLocality}</strong> has received your request. An email notification has been dispatched to <strong>{brandConfig.email}</strong>, and we are connecting via WhatsApp!
              </p>
              
              <div className="p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-left mb-6 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Solution:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Locality:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedLocality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-bold text-emerald-500">5-Year Stamped Doorstep Guarantee</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Done
                </button>
                <a
                  href={generateWhatsAppUrl({ name, phone, locality: selectedLocality, service: selectedService, preferredDate })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center justify-center gap-1.5 shadow-glow-emerald"
                >
                  <Send className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-brand-600 text-white' : 'bg-emerald-500 text-white'}`}>
                    1
                  </span>
                  <span className={step === 1 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-400'}>Contact Info</span>
                </div>
                <span className="text-slate-400">→</span>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    2
                  </span>
                  <span className={step === 2 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-400'}>Balcony & Area</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Reddy"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="77024 54046"
                        className="w-full pl-14 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-mono focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Used strictly for technician dispatch and quotation estimate.
                    </span>
                  </div>

                  {/* Trust highlight chips */}
                  <div className="grid grid-cols-2 gap-2 py-1">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-[11px] text-slate-700 dark:text-slate-300">5-Yr Stamped Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                      <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                      <span className="text-[11px] text-slate-700 dark:text-slate-300">Free Laser Measurement</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm shadow-glow-azure flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer mt-2"
                  >
                    <span>Continue to Balcony & Locality Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Select Balcony Safety Solution *</span>
                      <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">5-Yr Stamped Warranty</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer appearance-none shadow-sm"
                      >
                        {servicesData.map(s => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.priceRange})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Hyderabad Locality / Apartment Community *</span>
                      <span className="text-[10px] text-emerald-500 font-semibold">30-Min SLA Hub</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedLocality}
                        onChange={(e) => setSelectedLocality(e.target.value)}
                        className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer appearance-none shadow-sm"
                      >
                        {allLocationsFlat.map(l => (
                          <option key={`${l.name}-${l.pincode}`} value={l.name}>
                            {l.name} ({l.pincode}) — SLA: {l.sla}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Preferred Inspection Date
                      </label>
                      <div className="relative">
                        <select
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full pl-3 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none shadow-sm cursor-pointer"
                        >
                          <option value="Earliest Available (Today / Tomorrow)">Earliest Available</option>
                          <option value="Today Morning (9 AM - 1 PM)">Today Morning</option>
                          <option value="Today Evening (3 PM - 7 PM)">Today Evening</option>
                          <option value="Tomorrow Morning">Tomorrow Morning</option>
                          <option value="Weekend Slot">This Weekend</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Balconies Count / Size
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        placeholder="e.g. 2 Balconies"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-surface border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="min-h-[48px] px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 min-h-[48px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-glow-emerald flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Dispatch...</span>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4" />
                          <span>Confirm Free Doorstep Inspection</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
