import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureUtmParams } from '../../utils/utmTracker';
import { trackGoogleConversion } from '../../utils/trackGoogleConversion';

/**
 * Environment-Gated Analytics & UTM Initialization Loader
 * Automatically captures UTM campaign parameters on landing,
 * sends route changes to GA/Google Tag,
 * and intercepts all Click-to-Call (tel:) and WhatsApp interactions
 * as Google Ads conversions (Contact 1).
 */
export default function AnalyticsLoader() {
  const location = useLocation();

  // 1. Capture UTM query params on every route change or landing
  useEffect(() => {
    captureUtmParams();
  }, [location.search]);

  // 2. Global Click-to-Call & WhatsApp Conversion Dispatcher
  useEffect(() => {
    const handleGlobalInteraction = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackGoogleConversion('phone_call_click', {
          phone_number: '+918106974046',
          page_path: location.pathname
        });
      } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackGoogleConversion('whatsapp_click', {
          recipient: '918106974046',
          page_path: location.pathname
        });
      }
    };

    document.addEventListener('click', handleGlobalInteraction, { passive: true });
    return () => {
      document.removeEventListener('click', handleGlobalInteraction);
    };
  }, [location.pathname]);

  // 3. Production Analytics Loader & Virtual Pageviews
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
