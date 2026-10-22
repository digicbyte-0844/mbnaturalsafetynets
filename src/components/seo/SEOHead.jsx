import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://mbnaturalsafetynets.in';
const DEFAULT_IMAGE = `${BASE_URL}/og-preview.jpg`;

/**
 * Reusable SEO & Head Manager for React SPA
 * Dynamically synchronizes document.title, meta descriptions, canonical URLs,
 * Open Graph, Twitter Cards, and robots meta tags per route.
 */
export default function SEOHead({
  title = "MB Natural Safety Nets — #1 Balcony Safety Nets Hyderabad",
  description = "Certified Balcony Safety Nets, Pigeon Nets, Bird Spikes & SS 316 Invisible Grills in Hyderabad. 30-Min Rapid Inspection, 180kg+ load, 5-Year Stamped Warranty.",
  canonicalPath,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Synchronize Document Title
    document.title = title;

    // Helper to find or create meta tag
    const setMetaTag = (attribute, nameOrProperty, content) => {
      let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to find or create link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Canonical URL
    const targetPath = canonicalPath || location.pathname;
    const cleanCanonical = targetPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${targetPath}`;
    setLinkTag('canonical', cleanCanonical);

    // 3. Primary Meta Description
    setMetaTag('name', 'description', description);

    // 4. Robots Meta Tag
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', cleanCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'MB Natural Safety Nets');
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // 6. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

  }, [title, description, canonicalPath, ogImage, ogType, noindex, location.pathname]);

  return null;
}
