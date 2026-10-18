import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle, ChevronDown } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import { servicesData } from '../data/servicesData';
import { allLocationsFlat } from '../data/locationsData';
import GoogleMapsSection from '../components/sections/GoogleMapsSection';
import Badge from '../components/ui/Badge';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { generateWhatsAppUrl } from '../utils/generateWhatsAppUrl';
import { sendEmailInquiry } from '../utils/sendEmailInquiry';
import confetti from 'canvas-confetti';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';
import CopyButton from '../components/ui/CopyButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: servicesData[0].title,
    locality: 'Gachibowli',
    preferredDate: 'Earliest Available (Today / Tomorrow)',
    dimensions: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length < 10) {
      alert('Please fill out your name and a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    const payload = {
      ...formData,
      source: "Contact Page Dedicated Form (MB Natural Safety Nets)"
    };

    // 1. Send FormSubmit AJAX in background to mahimanohar47@gmail.com
    sendEmailInquiry(payload);

    // 2. Confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    setIsSubmitting(false);
    setIsSuccess(true);

    // 3. Open WhatsApp after short delay
    setTimeout(() => {
      const url = generateWhatsAppUrl(payload);
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title="Contact MB Natural Safety Nets Hyderabad | Balanagar Hub"
        description="Contact MB Natural Safety Nets at i-Tech City, Gagillapur, Balanagar, Hyderabad. Call +91 77024 54046 for 30-min doorstep laser inspection & estimate."
        canonicalPath="/contact"
        image="/images/hero-balcony.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-20 h-14 mx-auto mb-4 flex items-center justify-center">
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
          <Badge variant="azure" size="sm" className="mb-3">
            FAST 30-MIN BALCONY DISPATCH
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule a Free <span className="text-brand-600 dark:text-brand-400">Balcony Laser Inspection</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            MB Natural Safety Nets rigging specialists arrive within 30 minutes anywhere in Hyderabad with physical net samples, laser calibrators, and transparent quotations.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Proprietor:</span>
            <strong className="text-slate-900 dark:text-white">{brandConfig.proprietor}</strong>
            <span className="text-slate-400">•</span>
            <span className="text-brand-600 dark:text-brand-400 font-bold">12,500+ Balconies Protected</span>
          </div>
        </div>

        {/* 4 Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <a
            href={`tel:${brandConfig.phoneRaw}`}
            className="p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-slate-400">Direct Helpline</span>
                <CopyButton textToCopy={brandConfig.phone} label="Copy phone number" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{brandConfig.phone}</h3>
            </div>
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 mt-3">One-Tap Call Now →</span>
          </a>

          <a
            href={`https://wa.me/${brandConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-3">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-slate-400">WhatsApp Desk</span>
                <CopyButton textToCopy={brandConfig.phone} label="Copy WhatsApp number" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{brandConfig.phone}</h3>
            </div>
            <span className="text-xs font-bold text-emerald-500 mt-3">Start WhatsApp Chat →</span>
          </a>

          <a
            href={`mailto:${brandConfig.email}`}
            className="p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm hover:border-sky-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-slate-400">Official Admin Email</span>
                <CopyButton textToCopy={brandConfig.email} label="Copy email address" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 break-all">{brandConfig.email}</h3>
            </div>
            <span className="text-[11px] text-sky-500 mt-3">Direct Inquiries & Quotations →</span>
          </a>

          <a
            href={brandConfig.hubMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-slate-400">Headquarters Office</span>
                <CopyButton textToCopy={brandConfig.hubAddress} label="Copy office address" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                i-Tech City, Gagillapur, Balanagar
              </h3>
            </div>
            <span className="text-[11px] text-brand-600 dark:text-brand-400 font-bold mt-3">Open in Google Maps →</span>
          </a>
        </div>

        {/* Form and Inspection Guarantee Container */}
        <div className="bg-white dark:bg-obsidian-card rounded-3xl p-6 sm:p-12 border border-slate-200 dark:border-white/10 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-eyebrow text-brand-600 dark:text-brand-400 block mb-1">
                ONLINE BALCONY INSPECTION BOOKING
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
                Request Free Doorstep Balcony Measurement
              </h2>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Balcony Inspection Request Dispatched!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                    Our rigging supervisor in <strong>{formData.locality}</strong> is connecting with you now. Notification sent to <strong>{brandConfig.email}</strong>, and opening WhatsApp!
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
                  >
                    Submit Another Balcony Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Reddy"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))}
                        placeholder="10-digit mobile"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base font-mono focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                        <span>Balcony Safety Solution *</span>
                        <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">5-Yr Warranty</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer appearance-none shadow-sm"
                        >
                          {servicesData.map(s => (
                            <option key={s.id} value={s.title}>{s.title} ({s.priceRange})</option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                        <span>Hyderabad Locality *</span>
                        <span className="text-[10px] text-emerald-500 font-semibold">30-Min SLA Hub</span>
                      </label>
                      <div className="relative">
                        <select
                          name="locality"
                          value={formData.locality}
                          onChange={handleChange}
                          className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer appearance-none shadow-sm"
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Preferred Inspection Slot
                      </label>
                      <div className="relative">
                        <select
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer appearance-none shadow-sm"
                        >
                          <option value="Earliest Available (Today / Tomorrow)">Earliest Available (Today / Tomorrow)</option>
                          <option value="Today Morning (9 AM - 1 PM)">Today Morning (9 AM - 1 PM)</option>
                          <option value="Today Evening (3 PM - 7 PM)">Today Evening (3 PM - 7 PM)</option>
                          <option value="Tomorrow Morning">Tomorrow Morning</option>
                          <option value="Weekend Slot">Weekend Slot</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Balcony Count / Dimensions (Optional)
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g. 2 Balconies, 18ft length"
                        className="w-full px-4 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Apartment Community Name / Special Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. My Home Bhooja, Tower 5. Need child fall safety on balcony railing."
                      className="w-full px-4 py-3 rounded-xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-sky-400 hover:from-brand-500 hover:to-sky-300 text-white font-extrabold text-sm shadow-glow-azure flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Balcony Request...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Free Doorstep Balcony Measurement</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Trust & Guarantee Sidebar (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-white">5-Year Stamped Guarantee</h3>
                  <p className="text-xs text-slate-400">Zero-cost replacement against tears, rust, or sagging.</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  <span><strong>100% Free Balcony Inspection:</strong> Zero travel or quotation charges across all Hyderabad localities.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  <span><strong>Physical Material Kit:</strong> Rigger brings SS 316 cable cross-sections and net samples to your living room.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  <span><strong>Same-Day Installation:</strong> Balcony netting can typically be completed on the same day if requested.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                  NEED URGENT BALCONY ASSISTANCE?
                </span>
                <p className="text-xs text-slate-300 mb-3">
                  Call our senior field rigger directly for 30-minute priority dispatch.
                </p>
                <a
                  href={`tel:${brandConfig.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-white text-slate-900 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call {brandConfig.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Google Maps & Headquarters Details */}
        <GoogleMapsSection />

      </div>
    </div>
  );
}
