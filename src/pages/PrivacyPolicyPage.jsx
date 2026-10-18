import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Clock, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import SEOHead from '../components/seo/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 bg-canvas-light dark:bg-obsidian-canvas min-h-screen text-slate-800 dark:text-slate-200">
      <SEOHead
        title="Privacy Policy | MB Natural Safety Nets Hyderabad"
        description="Privacy policy and data protection charter for MB Natural Safety Nets Hyderabad under Indian DPDP Act 2023 & GDPR baselines."
        canonicalPath="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">Privacy Policy</span>
        </div>

        {/* Header with Last Updated Badge */}
        <div className="pb-8 border-b border-slate-200 dark:border-white/10 mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DPDP ACT 2023 & GDPR ALIGNED</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>Last Updated: October 2026</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <strong>Operating Entity:</strong> {brandConfig.legalEntity} • <strong>Proprietor:</strong> {brandConfig.proprietor} • <strong>Website:</strong> <a href="https://mbnaturalsafetynets.com" className="text-brand-600 dark:text-brand-400 hover:underline">mbnaturalsafetynets.com</a>
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-500" />
              <span>1. Introduction & Statutory Framework</span>
            </h2>
            <p>
              At <strong>{brandConfig.brandName}</strong> (also registered and doing business as <em>{brandConfig.legalEntity}</em>), we are committed to upholding transparency, data minimization, and user privacy in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, India)</strong>, the <strong>Information Technology Act, 2000</strong>, and global <strong>General Data Protection Regulation (GDPR)</strong> baselines.
            </p>
            <p>
              This Privacy Policy applies to personal data collected when you visit our website (<code>https://mbnaturalsafetynets.com</code>), utilize our Balcony Cost Estimator, request a 30-minute doorstep laser measurement, or correspond with our central dispatch desk in Hyderabad via telephone or WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-500" />
              <span>2. Data We Collect & Collection Methods</span>
            </h2>
            <p>We collect only the minimum data essential to provide rapid on-site safety netting quotes, scheduling, and warranty registrations:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 space-y-1.5">
                <strong className="text-slate-900 dark:text-white block text-sm">Direct Customer Submissions</strong>
                <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-500 dark:text-slate-400">
                  <li><strong>Full Name:</strong> For customer identification and warranty certificate issuance.</li>
                  <li><strong>Phone Number:</strong> 10-digit Indian mobile number for technician call and WhatsApp coordination.</li>
                  <li><strong>Apartment & Locality:</strong> Gated community name and Hyderabad locality (e.g., Gachibowli, HITEC City, Kondapur, Balanagar) for van routing.</li>
                  <li><strong>Balcony Specifications:</strong> Approximate square footage, net type (Pigeon, Child Safety, SS 316 Grills, Bird Spikes), and appointment slot.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 space-y-1.5">
                <strong className="text-slate-900 dark:text-white block text-sm">Automated Technical & Device Data</strong>
                <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-500 dark:text-slate-400">
                  <li><strong>Local Storage:</strong> Storing user theme preference (<code>theme: dark/light</code>) and cookie consent status (<code>cookie_consent</code>).</li>
                  <li><strong>Network Telemetry:</strong> Standard IP address, browser type, and referrer header to serve responsive mobile CSS.</li>
                  <li><strong>Zero Tracking Trackers:</strong> We do not deploy third-party behavioural ad tracking or sell user search histories.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>Under Indian DPDP Act standards and GDPR Article 6 principles, we process data based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Performance of Service (Contractual Necessity):</strong> Calculating balcony perimeter estimates, dispatching certified safety riggers, and performing physical on-site installation.</li>
              <li><strong>Legitimate Interests:</strong> Registering and validating your <strong>5-Year Stamped Physical Warranty Certificate</strong>, ensuring zero-cost re-tensioning support during monsoon or extreme weather cycles.</li>
              <li><strong>Explicit Consent:</strong> Initiating bi-directional WhatsApp chat handoffs requested through our mobile bottom sheet quote engine.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              4. Cookies & Local Storage Notice
            </h2>
            <p>
              Our website uses strictly necessary and functional cookies and HTML5 local storage:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><code>theme</code>: Remembers your dark mode / light mode visual preference across page reloads.</li>
              <li><code>cookie_consent</code>: Stores whether you have accepted or customized your privacy banner preference.</li>
              <li><strong>Session Form Cache:</strong> Temporarily retains your selected netting solution during step-by-step cost calculations.</li>
            </ul>
            <p>
              You can control or clear local storage items at any time through your browser's settings without disabling core site functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              5. Data Sharing, FormSubmit & Non-Disclosure
            </h2>
            <p>
              <strong>We do NOT sell, lease, monetize, or disclose your personal data to third parties.</strong>
            </p>
            <p>
              Lead form submissions are securely processed through FormSubmit AJAX endpoints directly transmitting encrypted form payloads to our administrative inbox (<a href={`mailto:${brandConfig.email}`} className="text-brand-600 dark:text-brand-400 hover:underline"><code>{brandConfig.email}</code></a>) and customer WhatsApp API handoffs. Our field technicians operate under strict non-disclosure obligations regarding customer residential addresses and floor plans.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              6. Your Rights Under Indian DPDP Act & GDPR
            </h2>
            <p>You have statutory rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li><strong>Right to Access & Confirmation:</strong> Request details of personal data held about you.</li>
              <li><strong>Right to Correction & Erasure:</strong> Request correction of inaccurate phone numbers or deletion of non-warranty customer records.</li>
              <li><strong>Right to Withdraw Consent:</strong> Opt out of future warranty follow-ups or telephone confirmations at any time.</li>
              <li><strong>Right to Grievance Redressal:</strong> Direct complaints directly to our Grievance Officer below.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              7. Data Retention Policy
            </h2>
            <p>
              Customer quotation requests that do not proceed to installation are expunged from active dispatch logs within 90 days. Completed installation records (names, phone numbers, warranty certificates) are retained for 5 years to honor doorstep warranty claims and free annual re-tensioning inspections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              8. Grievance Officer & Headquarters Contact
            </h2>
            <p>For inquiries, warranty verification, or data privacy requests, contact:</p>
            
            <div className="p-5 rounded-3xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 shadow-lg space-y-2.5 text-sm">
              <div className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                {brandConfig.legalEntity}
              </div>
              <div className="text-xs text-slate-500">
                Grievance Officer: <strong className="text-slate-800 dark:text-slate-200">{brandConfig.proprietor}</strong> (Proprietor & Director)
              </div>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{brandConfig.hubAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${brandConfig.phoneRaw}`} className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                  {brandConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <a href={`mailto:${brandConfig.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                  {brandConfig.email}
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
