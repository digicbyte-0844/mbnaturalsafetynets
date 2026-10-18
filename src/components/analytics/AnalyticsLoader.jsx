import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureUtmParams } from '../../utils/utmTracker';

/**
 * Environment-Gated Analytics & UTM Initialization Loader
 * Automatically captures UTM campaign parameters on landing
 * and loads Google Analytics 4 only in production when a Measurement ID is configured.
 */
export default function AnalyticsLoader() {
  const location = useLocation();

  // 1. Capture UTM query params on every route change or landing
  useEffect(() => {
    captureUtmParams();
  }, [location.search]);

  // 2. Production Analytics Loader
  useEffect(() => {
    const isProd = import.meta.env.PROD && !window.location.hostname.includes('localhost');
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    // Check cookie consent
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'declined') return;

    if (isProd && gaMeasurementId && !window.dataLayer) {
      // Inject GA4 script tag
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', gaMeasurementId, {
        page_path: location.pathname + location.search
      });
      window.gtag = gtag;
    } else if (window.gtag && isProd) {
      // Send page view on route changes
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
  }, [location.pathname, location.search]);

  return null;
}
