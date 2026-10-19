import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileDrawer from './components/layout/MobileDrawer';
import UnifiedMobileDock from './components/mobile/UnifiedMobileDock';
import MobileBottomSheet from './components/mobile/MobileBottomSheet';
import CookieBanner from './components/ui/CookieBanner';
import AnalyticsLoader from './components/analytics/AnalyticsLoader';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import BackToTop from './components/ui/BackToTop';

// Lazy-loaded Pages for Maximum Performance & Code Splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteLoadingFallback() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="w-9 h-9 rounded-full border-2 border-brand-500/20 border-t-brand-600 animate-spin mb-3" />
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
        Loading MB Natural Safety Nets...
      </span>
    </div>
  );
}

export default function App() {
  const [isQuoteSheetOpen, setIsQuoteSheetOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState('');
  const [initialLocality, setInitialLocality] = useState('');

  const handleOpenQuoteSheet = (serviceId = '', locality = '') => {
    setInitialServiceId(serviceId || '');
    setInitialLocality(locality || '');
    setIsQuoteSheetOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnalyticsLoader />
        <ScrollProgressBar />
        <div className="flex flex-col min-h-screen bg-canvas-light text-slate-900 dark:bg-obsidian-canvas dark:text-slate-100 transition-colors duration-200">
          
          {/* Skip to Content Accessible Link (WCAG 2.1 AA) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-brand-600 focus:text-white focus:font-bold focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none transition-all"
          >
            Skip to main content
          </a>

          {/* Header Navigation */}
          <Navbar
            isMobileDrawerOpen={isMobileDrawerOpen}
            onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
            onOpenQuoteSheet={() => handleOpenQuoteSheet()}
          />

          {/* Mobile App Navigation Drawer */}
          <MobileDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            onOpenQuoteSheet={handleOpenQuoteSheet}
          />

          {/* Main Routing Outlet */}
          <main id="main-content" className="flex-1 outline-none" tabIndex="-1">
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/services" element={<ServicesPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/services/:id" element={<ServiceDetailPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/calculator" element={<CalculatorPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/gallery" element={<GalleryPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/reviews" element={<ReviewsPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
                <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
                <Route path="*" element={<NotFoundPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Deep SEO Footer */}
          <Footer onOpenQuoteSheet={handleOpenQuoteSheet} />

          {/* Unified Floating Island Dock (Mobile Only) */}
          <UnifiedMobileDock
            onOpenQuoteSheet={() => handleOpenQuoteSheet()}
          />

          {/* Gesture Bottom Sheet Modal (Global) */}
          <MobileBottomSheet
            isOpen={isQuoteSheetOpen}
            onClose={() => setIsQuoteSheetOpen(false)}
            initialServiceId={initialServiceId}
            initialLocality={initialLocality}
          />

          {/* Context-Aware Privacy & Cookie Consent Banner */}
          <CookieBanner />

          {/* Floating Back-to-Top Button */}
          <BackToTop />

        </div>
      </Router>
    </ThemeProvider>
  );
}
