/**
 * Lightweight UTM & Marketing Attribution Utility
 * Captures query parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid)
 * on landing and persists them in sessionStorage for lead form and WhatsApp attribution.
 */

const UTM_STORAGE_KEY = 'mb_marketing_utm';

export function captureUtmParams() {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    const captured = {};

    let hasUtm = false;
    utmKeys.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        captured[key] = val.trim();
        hasUtm = true;
      }
    });

    if (hasUtm) {
      // Append timestamp
      captured.captured_at = new Date().toISOString();
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
    }

    return getUtmParams();
  } catch {
    return {};
  }
}

export function getUtmParams() {
  if (typeof window === 'undefined') return {};

  try {
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

/**
 * Appends campaign reference tag to WhatsApp messages for ad attribution
 */
export function formatUtmForWhatsApp(baseText) {
  const utm = getUtmParams();
  if (!utm || !utm.utm_source) return baseText;

  const tag = ` [Ref: ${utm.utm_source}${utm.utm_campaign ? ` / ${utm.utm_campaign}` : ''}]`;
  return `${baseText}${tag}`;
}
