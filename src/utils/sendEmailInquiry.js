import { brandConfig } from '../data/brandConfig';
import { getUtmParams } from './utmTracker';

/**
 * Caches customer booking inquiries locally in localStorage as a resilient offline backup.
 */
function cacheLeadLocally(leadRecord) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existing = JSON.parse(window.localStorage.getItem('mb_safety_leads') || '[]');
      existing.unshift({
        ...leadRecord,
        cachedAt: new Date().toISOString()
      });
      window.localStorage.setItem('mb_safety_leads', JSON.stringify(existing.slice(0, 50)));
    }
  } catch (err) {
    console.warn('Could not cache lead in localStorage:', err);
  }
}

/**
 * Resilient Multi-Tier Lead Dispatcher.
 * 1. Immediately preserves customer booking in local storage.
 * 2. Attempts background dispatch to FormSubmit with a 3.5s timeout.
 * 3. Returns success consistently so the customer's booking request is NEVER rejected
 *    or stalled, guaranteeing instant handoff to WhatsApp and phone helpline.
 */
export async function sendEmailInquiry(formData = {}) {
  // 1. Immediately cache lead record locally
  cacheLeadLocally(formData);

  try {
    const utm = getUtmParams();

    // Clean payload without special emojis or formatting that can trip mail parsers
    const payload = {
      _subject: `MB Natural Safety Nets Lead: ${formData.name || 'Resident'} - ${formData.locality || 'Hyderabad'}`,
      _template: "table",
      _captcha: "false",
      customer_name: formData.name || "Resident",
      phone_number: formData.phone || "N/A",
      hyderabad_locality: formData.locality || "Hyderabad",
      safety_solution: formData.service || "Balcony Safety Netting",
      preferred_inspection_date: formData.preferredDate || "Earliest Available",
      balcony_specifications: formData.dimensions || "Standard Balcony",
      customer_notes: formData.notes || "None provided",
      submission_channel: formData.source || "Website Booking Form",
      utm_source: utm.utm_source || "Direct / Organic",
      utm_campaign: utm.utm_campaign || "None",
      recipient_mailbox: brandConfig.email,
      submitted_at_ist: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    // 2. Abort controller with 3500ms timeout
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), 3500) : null;

    let emailDelivered = false;
    let endpointStatus = null;

    try {
      const response = await fetch(brandConfig.formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      });

      if (timeoutId) clearTimeout(timeoutId);
      endpointStatus = response.status;
      if (response.ok) {
        emailDelivered = true;
      }
    } catch (fetchErr) {
      if (timeoutId) clearTimeout(timeoutId);
      console.warn("Background email dispatch timed out or endpoint unavailable; lead safely bridged to WhatsApp.", fetchErr?.message);
    }

    // 3. Return success consistently so customer booking flow is never blocked
    return {
      success: true,
      emailDelivered,
      status: endpointStatus,
      formData
    };
  } catch (err) {
    console.error("sendEmailInquiry error:", err);
    // Even on unexpected error, the lead was cached locally and success is returned for WhatsApp bridge
    return {
      success: true,
      emailDelivered: false,
      error: err.message,
      formData
    };
  }
}

