import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import Badge from '../ui/Badge';

export default function GoogleMapsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-obsidian-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Badge variant="azure" size="sm" className="mb-3">
                CENTRAL HYDERABAD BALCONY SAFETY HUB
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                Visit Our Hub or Request 30-Min Balcony Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Centrally located along HITEC City and Gachibowli to provide rapid doorstep balcony laser measurement and same-day installation across Hyderabad.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Headquarters Address</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {brandConfig.hubAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Operating Hours</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {brandConfig.workingHours}
                  </p>
                  <span className="text-[11px] text-emerald-500 font-semibold">
                    * Emergency toddler balcony protection & pigeon removal teams on standby.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-muted dark:bg-obsidian-surface border border-canvas-border dark:border-obsidian-border">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Helpline & Email</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    <a href={`tel:${brandConfig.phoneRaw}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                      {brandConfig.phone}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <a href={`mailto:${brandConfig.email}`} className="text-sky-500 hover:underline">
                      {brandConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=HITEC+City+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
            >
              <span>Open in Google Maps Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Embed Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <iframe
                title="MB Natural Safety Nets Hyderabad Hub"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60906.94539169651!2d78.34898165702283!3d17.447753177721598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Pin Card Over Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl bg-slate-900/90 text-white backdrop-blur-md border border-white/20 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white">Mobile Balcony Riggers Active</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  14 mobile technician units active now in Gachibowli, HITEC City, Kondapur, Kokapet & Kukatpally.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
