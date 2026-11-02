/**
 * Google Ads Conversion Tracker
 * Conversion ID: AW-18532384612 & AW-7869112687
 * Primary Conversion Label: rpEPCJftoqgdEOT-9oRF (Contact 1)
 * Secondary Conversion Label: A4TxCO_CpKgdEOT-9oRF (Contact)
 * Conversion Goal: Contact (1) / Lead Form Submission / Phone Call / WhatsApp
 */
export const GOOGLE_CONVERSION_ID = 'AW-18532384612';
export const GOOGLE_CONVERSION_ID_ALT = 'AW-7869112687';
export const GOOGLE_CONVERSION_LABEL = 'rpEPCJftoqgdEOT-9oRF'; // Active label for Contact (1)
export const GOOGLE_CONVERSION_LABEL_LEGACY = 'A4TxCO_CpKgdEOT-9oRF'; // Active label for Contact

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

    // 3. Fire Google Ads conversion events across active IDs and action labels
    // AW-18532384612 / rpEPCJftoqgdEOT-9oRF [Contact (1)]
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID}/${GOOGLE_CONVERSION_LABEL}`,
      event_category: 'Contact',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR',
      ...extraData
    });

    // AW-18532384612 / A4TxCO_CpKgdEOT-9oRF [Contact]
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID}/${GOOGLE_CONVERSION_LABEL_LEGACY}`,
      event_category: 'Contact',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR',
      ...extraData
    });

    // AW-7869112687 / A4TxCO_CpKgdEOT-9oRF [Contact Verified]
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID_ALT}/${GOOGLE_CONVERSION_LABEL_LEGACY}`,
      event_category: 'Contact',
      event_label: conversionType,
      value: 1.0,
      currency: 'INR',
      ...extraData
    });

    // AW-7869112687 / rpEPCJftoqgdEOT-9oRF [Contact (1)]
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_CONVERSION_ID_ALT}/${GOOGLE_CONVERSION_LABEL}`,
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
