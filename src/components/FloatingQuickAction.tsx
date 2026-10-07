import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Phone,
  Instagram,
  Mail,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_INFO, Translations } from '../i18n/translations';

interface FloatingQuickActionProps {
  t: Translations;
  hidden?: boolean;
}

/**
 * Floating Quick Action button in the bottom-right corner.
 * STRICT REQUIREMENT: Never use WhatsApp green. Uses strictly #0B0B0B, #1C1C1C, #F26A21, and #FFFFFF.
 * Remains closed by default; provides direct access to WhatsApp, Phone, Instagram, and Email.
 */
export const FloatingQuickAction: React.FC<FloatingQuickActionProps> = ({
  t,
  hidden = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (hidden) return null;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.floating.prefilledWhatsappText
  )}`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end"
    >
      {/* Expandable Quick Action Menu (Closed by default) */}
      <div
        id="floating-quick-menu"
        role="menu"
        aria-label={t.floating.menuTitle}
        className={`mb-3 w-64 rounded-xl bg-[#0B0B0B] border border-[#D5D5D5]/18 shadow-2xl overflow-hidden transition-all duration-150 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-2.5 bg-[#1C1C1C] border-b border-[#D5D5D5]/10 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#D5D5D5]/80">
            {t.floating.menuTitle}
          </span>
          <span className="font-mono-num text-[11px] text-[#F26A21]">
            {CONTACT_INFO.companyName}
          </span>
        </div>

        <div className="p-1.5 space-y-1">
          {/* Primary Action: WhatsApp (Brand Orange highlight, zero green) */}
          <a
            role="menuitem"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F26A21] text-white font-semibold text-sm hover:brightness-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-white shrink-0" />
              <span>{t.floating.whatsappLabel}</span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>

          {/* Phone */}
          <a
            role="menuitem"
            href={CONTACT_INFO.phoneHref}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#D5D5D5] hover:text-white hover:bg-[#1C1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
          >
            <span className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#F26A21] shrink-0" />
              <span>{t.floating.phoneLabel}</span>
            </span>
            <span className="font-mono-num text-xs text-[#D5D5D5]/60">
              911 044 842
            </span>
          </a>

          {/* Instagram */}
          <a
            role="menuitem"
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#D5D5D5] hover:text-white hover:bg-[#1C1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
          >
            <span className="flex items-center gap-2.5">
              <Instagram className="w-4 h-4 text-[#F26A21] shrink-0" />
              <span>{t.floating.instagramLabel}</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D5D5D5]/50" />
          </a>

          {/* Email */}
          <a
            role="menuitem"
            href={`mailto:${CONTACT_INFO.email}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#D5D5D5] hover:text-white hover:bg-[#1C1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
          >
            <span className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F26A21] shrink-0" />
              <span>{t.floating.emailLabel}</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D5D5D5]/50" />
          </a>
        </div>
      </div>

      {/* Main Floating Action Button Combo: Direct WhatsApp link + Menu Toggle */}
      <div className="flex items-center rounded-xl p-1 bg-[#0B0B0B]/95 border border-[#D5D5D5]/20 shadow-xl">
        {/* Direct 1-Click WhatsApp Action in Brand Orange (#F26A21) & White */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white btn-primary-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Toggle Quick Contact Menu */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="floating-quick-menu"
          aria-label={t.floating.buttonAria}
          className="ml-1 w-9 h-9 rounded-lg flex items-center justify-center text-[#D5D5D5] hover:text-white hover:bg-[#1C1C1C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
        >
          {isOpen ? (
            <X className="w-4 h-4 text-[#F26A21]" />
          ) : (
            <Phone className="w-4 h-4 text-[#D5D5D5]" />
          )}
        </button>
      </div>
    </div>
  );
};
