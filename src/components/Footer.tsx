import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO, Language, Translations } from '../i18n/translations';

interface FooterProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export const Footer: React.FC<FooterProps> = ({ lang, setLang, t }) => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.floating.prefilledWhatsappText
  )}`;

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D5D5D5]/12 py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#D5D5D5]/10">
          {/* Brand Logo + Tagline + Address */}
          <div className="space-y-2.5">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
            >
              <BrandLogo size="sm" />
            </a>
            <p className="text-xs sm:text-sm text-[#D5D5D5]/70 max-w-md">
              {t.footer.tagline}
            </p>
            <a
              href={CONTACT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#D5D5D5]/65 hover:text-[#F26A21] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F26A21] shrink-0" />
              <span>{CONTACT_INFO.fullAddress}</span>
            </a>
          </div>

          {/* Primary Contacts & Social Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#D5D5D5]">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded px-1 py-0.5"
            >
              <Phone className="w-4 h-4 text-[#F26A21]" />
              <span className="font-mono-num">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded px-1 py-0.5"
            >
              <Mail className="w-4 h-4 text-[#F26A21]" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded px-1 py-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#F26A21]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#F26A21] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded px-1 py-0.5"
            >
              <Instagram className="w-4 h-4 text-[#F26A21]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Language Switcher */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#D5D5D5]/55">
          <p>
            © {currentYear} {CONTACT_INFO.companyName} —{' '}
            {CONTACT_INFO.specialty}. {t.footer.rights}
          </p>

          {/* Footer Language Selector PT · EN · FR */}
          <div
            role="group"
            aria-label={t.nav.languageLabel}
            className="flex items-center gap-1.5"
          >
            {LANGUAGES.map((item, idx) => (
              <React.Fragment key={item.code}>
                <button
                  type="button"
                  onClick={() => setLang(item.code)}
                  aria-pressed={lang === item.code}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
                    lang === item.code
                      ? 'text-white font-semibold underline decoration-[#F26A21] decoration-2 underline-offset-4'
                      : 'text-[#D5D5D5]/60 hover:text-white'
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
    </footer>
  );
};
