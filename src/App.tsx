/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language, translations } from './i18n/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { QuoteContact } from './components/QuoteContact';
import { Footer } from './components/Footer';
import { FloatingQuickAction } from './components/FloatingQuickAction';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  // Sync document title and lang attribute when language changes
  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : lang;
  }, [lang, t.meta.title]);

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
      <main className="flex-grow">
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
