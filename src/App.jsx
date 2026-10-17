import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileDrawer from './components/layout/MobileDrawer';
import UnifiedMobileDock from './components/mobile/UnifiedMobileDock';
import MobileBottomSheet from './components/mobile/MobileBottomSheet';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CalculatorPage from './pages/CalculatorPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

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
        <div className="flex flex-col min-h-screen bg-canvas-light text-slate-900 dark:bg-obsidian-canvas dark:text-slate-100 transition-colors duration-200">
          
          {/* Header Navigation */}
          <Navbar
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
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/services" element={<ServicesPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/services/:id" element={<ServiceDetailPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/calculator" element={<CalculatorPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/gallery" element={<GalleryPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/reviews" element={<ReviewsPage onOpenQuoteSheet={handleOpenQuoteSheet} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
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

        </div>
      </Router>
    </ThemeProvider>
  );
}
