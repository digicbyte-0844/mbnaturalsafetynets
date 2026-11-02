/**
 * Google Ads Conversion Tracker
 * Conversion ID: AW-18532384612
 * Primary Conversion Label: rpEPCJftoqgdEOT-9oRF (Contact 1 - verified in campaign)
 * Secondary Conversion Label: A4TxCO_CpKgdEOT-9oRF
 * Conversion Goal: Contact (1) / Lead Form Submission / Phone Call / WhatsApp
 */
export const GOOGLE_CONVERSION_ID = 'AW-18532384612';
export const GOOGLE_CONVERSION_LABEL = 'rpEPCJftoqgdEOT-9oRF'; // Verified active label for Contact (1)
export const GOOGLE_CONVERSION_LABEL_LEGACY = 'A4TxCO_CpKgdEOT-9oRF';

export function trackGoogleConversion(conversionType = 'contact_lead', extraData = {}) {
  if (typeof window === 'undefined') return false;

  try {
    // 1. Ensure dataLayer exists so event is NEVER dropped even if gtag.js is loading
    window.dataLayer = window.dataLayer || [];

    // 2. Ensure gtag function exists
    if (typeof window.gtag !== 'function') {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    // 3. Fire Google Ads conversion event for Contact (1) - Primary Active Label
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID}/${GOOGLE_CONVERSION_LABEL}`,
      event_category: 'Contact',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR',
      ...extraData
    });

    // Also fire legacy label so no conversion action is missed
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID}/${GOOGLE_CONVERSION_LABEL_LEGACY}`,
      event_category: 'Contact',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR',
      ...extraData
    });

    // 4. Also fire standard lead event for GA4 / Google Tag
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR'
    });

    return true;
  } catch (err) {
    console.warn('Google Ads conversion tracking exception:', err);
    return false;
  }
}

/**
 * Official Google Ads snippet helper (gtag_report_conversion)
 * Compatible with Google Tag Assistant & Google Ads Troubleshooter
 */
export function gtag_report_conversion(url) {
  trackGoogleConversion('click_conversion', { destination_url: url });
  if (typeof url !== 'undefined' && url) {
    setTimeout(() => {
      window.location = url;
    }, 250);
  }
  return false;
}

// Expose globally for Google Tag Assistant & diagnostic scanners
if (typeof window !== 'undefined') {
  window.trackGoogleConversion = trackGoogleConversion;
  window.gtag_report_conversion = gtag_report_conversion;
}


