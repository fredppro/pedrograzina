/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Language, translations } from './i18n/translations';
import { SeoHead } from './components/SeoHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { QuoteContact } from './components/QuoteContact';
import { Footer } from './components/Footer';
import { FloatingQuickAction } from './components/FloatingQuickAction';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang')?.toLowerCase();
  if (queryLang === 'en' || queryLang === 'fr' || queryLang === 'pt') {
    return queryLang;
  }
  return 'pt';
}

export default function App() {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  // Update URL query parameter (?lang=en / ?lang=fr) cleanly for crawlable hreflang URLs
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const url = new URL(window.location.href);
      if (newLang === 'pt') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', newLang);
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  // Listen for browser back/forward navigation on language parameter
  useEffect(() => {
    const handlePopState = () => {
      setLangState(getInitialLanguage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle sticky header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#F26A21] selection:text-white">
      {/* Dynamic SEO Metadata, Canonical, hreflang & Schema.org JSON-LD */}
      <SeoHead lang={lang} t={t} />

      {/* Accessibility & SEO Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#F26A21] focus:text-white focus:font-semibold focus:shadow-lg"
      >
        Saltar para o conteúdo principal
      </a>

      {/* Sticky Header + Full-screen Mobile Drawer */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isScrolled={isScrolled}
      />

      {/* Main Conversion-Focused Flow: Hero -> Services -> Gallery -> Quote/Contact */}
      <main id="main-content" className="flex-grow">
        <Hero t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <QuoteContact t={t} />
      </main>

      {/* Minimalist Footer */}
      <Footer lang={lang} setLang={setLang} t={t} />

      {/* Brand-Integrated Floating WhatsApp & Quick Contact Action */}
      <FloatingQuickAction t={t} hidden={isDrawerOpen} />
    </div>
  );
}
