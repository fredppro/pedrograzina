import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Translations } from '../i18n/translations';
import { HeroBackgroundLoop } from './HeroBackgroundLoop';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Seamless Atmospheric BMW E30 Rally & Pedro Grazina Studio Background Loop */}
      <HeroBackgroundLoop />

      {/* Main Content Container positioned in the generous dark negative space on the left */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-[40rem]">
          {/* Unboxed Kicker with subtle accent line */}
          <div className="flex items-center gap-3 mb-5">
            <span
              aria-hidden="true"
              className="w-8 h-[2px] bg-[#F26A21] shrink-0"
            />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#D5D5D5] uppercase">
              {t.hero.kicker}
            </p>
          </div>

          {/* Primary Hero Heading */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white tracking-tight leading-[1.06]"
            style={{ textWrap: 'balance' }}
          >
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#D5D5D5] font-normal leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('orcamento');
              }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg text-base font-semibold text-white btn-primary-orange whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </a>

            <a
              href="#galeria"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('galeria');
              }}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-base font-semibold text-white btn-secondary-dark whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ChevronDown className="w-4 h-4 text-[#D5D5D5] transition-transform duration-150 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Quiet Unboxed Technical Pillars (Zero-Pill Discipline) */}
          <div className="mt-14 pt-8 border-t border-[#D5D5D5]/15 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#D5D5D5]/85">
            <span>{t.hero.trustPillars.quality}</span>
            <span aria-hidden="true" className="text-[#F26A21] font-bold">
              ·
            </span>
            <span>{t.hero.trustPillars.precision}</span>
            <span aria-hidden="true" className="text-[#F26A21] font-bold">
              ·
            </span>
            <span>{t.hero.trustPillars.finish}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
