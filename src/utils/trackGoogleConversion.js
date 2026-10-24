/**
 * Google Ads Conversion Tracker
 * Conversion ID: AW-18532384612
 * Event Label: A4TxCO_CpKgdEOT-9oRF
 * Conversion Goal: Contact / Lead Form Submission
 */
export function trackGoogleConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18532384612/A4TxCO_CpKgdEOT-9oRF'
      });
      return true;
    } catch (err) {
      console.warn('Google Ads conversion tracking exception:', err);
      return false;
    }
  }
  return false;
}
