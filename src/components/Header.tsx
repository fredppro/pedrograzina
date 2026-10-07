import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO, Language, Translations } from '../i18n/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  t,
  isDrawerOpen,
  setIsDrawerOpen,
  isScrolled,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and manage Escape + focus trap when full-screen drawer is open
  useEffect(() => {
    if (!isDrawerOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen, setIsDrawerOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.floating.prefilledWhatsappText
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled || isDrawerOpen
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D5D5D5]/10'
            : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setIsDrawerOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] shrink-0"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Desktop Navigation Links (Switch to hamburger before it gets tight) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('servicos');
              }}
              className="text-sm font-medium text-[#D5D5D5] hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F26A21] hover:after:w-full after:transition-all after:duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded-sm px-1"
            >
              {t.nav.services}
            </a>
            <a
              href="#galeria"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('galeria');
              }}
              className="text-sm font-medium text-[#D5D5D5] hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F26A21] hover:after:w-full after:transition-all after:duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded-sm px-1"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('orcamento');
              }}
              className="text-sm font-medium text-[#D5D5D5] hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F26A21] hover:after:w-full after:transition-all after:duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded-sm px-1"
            >
              {t.nav.quote}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D5D5D5] hover:text-[#F26A21] transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded-sm px-1 py-1"
            >
              <span>{t.nav.whatsapp}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F26A21]" />
            </a>
          </nav>

          {/* Zone 3: Desktop Actions & Language Switcher + Mobile Hamburger */}
          <div className="flex items-center gap-4 lg:gap-5">
            {/* Discreet Language Selector (Desktop) */}
            <div
              role="group"
              aria-label={t.nav.languageLabel}
              className="hidden lg:flex items-center gap-1 text-xs font-medium tracking-wider"
            >
              {LANGUAGES.map((item, idx) => (
                <React.Fragment key={item.code}>
                  <button
                    type="button"
                    onClick={() => setLang(item.code)}
                    aria-pressed={lang === item.code}
                    className={`px-1.5 py-1 rounded transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
                      lang === item.code
                        ? 'text-white font-semibold underline decoration-[#F26A21] decoration-2 underline-offset-4'
                        : 'text-[#D5D5D5]/65 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {idx < LANGUAGES.length - 1 && (
                    <span aria-hidden="true" className="text-[#D5D5D5]/30 select-none">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Primary CTA Button (Desktop) */}
            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('orcamento');
              }}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white btn-primary-orange whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span>{t.nav.requestQuote}</span>
            </a>

            {/* Tablet & Smartphone Classic 3-Line Hamburger Toggle */}
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              aria-expanded={isDrawerOpen}
              aria-controls="fullscreen-navigation-drawer"
              aria-label={isDrawerOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="lg:hidden relative inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#1C1C1C]/90 border border-[#D5D5D5]/15 text-white hover:border-[#F26A21]/60 hover:bg-[#242424] active:scale-95 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
            >
              <span className="sr-only">
                {isDrawerOpen ? t.nav.closeMenu : t.nav.openMenu}
              </span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-transform duration-200 ease-out origin-center ${
                    isDrawerOpen ? 'translate-y-[7px] rotate-45 bg-[#F26A21]' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-opacity duration-150 ease-out ${
                    isDrawerOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-transform duration-200 ease-out origin-center ${
                    isDrawerOpen ? '-translate-y-[7px] -rotate-45 bg-[#F26A21]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Drawer (Tablet & Smartphone) */}
      <div
        id="fullscreen-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-40 lg:hidden bg-[#0B0B0B] transition-all duration-200 ease-out flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto ${
          isDrawerOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        {/* Subtle decorative background line */}
        <div
          aria-hidden="true"
          className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F26A21]/30 to-transparent"
        />

        {/* Primary Numbered Navigation List */}
        <nav aria-label="Mobile Menu Links" className="my-auto py-4">
          <ul className="space-y-4 sm:space-y-5">
            {[
              { num: '01', label: t.nav.services, id: 'servicos' },
              { num: '02', label: t.nav.gallery, id: 'galeria' },
              { num: '03', label: t.nav.requestQuote, id: 'orcamento', highlight: true },
              { num: '04', label: t.nav.contact, id: 'contacto-direto' },
            ].map((item, index) => (
              <li
                key={item.id}
                style={{
                  transitionDelay: isDrawerOpen ? `${45 * (index + 1)}ms` : '0ms',
                }}
                className={`transition-all duration-200 ${
                  isDrawerOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-3'
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`group flex items-baseline gap-4 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
                    item.highlight
                      ? 'text-[#F26A21]'
                      : 'text-white hover:text-[#F26A21]'
                  } transition-colors duration-150`}
                >
                  <span className="font-mono-num text-sm sm:text-base text-[#D5D5D5]/50 group-hover:text-[#F26A21] transition-colors">
                    {item.num} —
                  </span>
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Highlighted Primary CTA Button inside Drawer */}
          <div
            style={{ transitionDelay: isDrawerOpen ? '220ms' : '0ms' }}
            className={`mt-8 pt-6 border-t border-[#D5D5D5]/10 transition-all duration-200 ${
              isDrawerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('orcamento');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white btn-primary-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Bottom Drawer Footer: Direct Links & Language Selector */}
        <div
          style={{ transitionDelay: isDrawerOpen ? '260ms' : '0ms' }}
          className={`pt-6 border-t border-[#D5D5D5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-200 ${
            isDrawerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Quick Social & Direct Links */}
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#D5D5D5]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded"
            >
              <MessageCircle className="w-4 h-4 text-[#F26A21]" />
              <span>{t.nav.whatsapp}</span>
            </a>
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded"
            >
              <Phone className="w-4 h-4 text-[#F26A21]" />
              <span className="font-mono-num">{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded"
            >
              <Instagram className="w-4 h-4 text-[#F26A21]" />
              <span>{t.nav.instagram}</span>
            </a>
          </div>

          {/* Language Selector PT · EN · FR */}
          <div
            role="group"
            aria-label={t.nav.languageLabel}
            className="flex items-center gap-2 text-sm font-medium"
          >
            {LANGUAGES.map((item, idx) => (
              <React.Fragment key={item.code}>
                <button
                  type="button"
                  onClick={() => setLang(item.code)}
                  aria-pressed={lang === item.code}
                  className={`px-2.5 py-1.5 rounded transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
                    lang === item.code
                      ? 'bg-[#1C1C1C] text-white font-semibold border border-[#F26A21]/60'
                      : 'text-[#D5D5D5]/65 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
                {idx < LANGUAGES.length - 1 && (
                  <span aria-hidden="true" className="text-[#D5D5D5]/30 select-none">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
