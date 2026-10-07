import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, Translations } from '../i18n/translations';

interface GalleryProps {
  t: Translations;
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'paint' | 'bodywork' | 'polish'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredItems: GalleryItem[] = t.gallery.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.toLowerCase() === activeFilter;
  });

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation & body scroll lock when Lightbox is open
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  const currentLightboxItem =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-[#D5D5D5]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span
                aria-hidden="true"
                className="w-6 h-[2px] bg-[#F26A21] shrink-0"
              />
              <span className="text-xs font-semibold tracking-[0.14em] text-[#D99A16] uppercase">
                {t.gallery.kicker}
              </span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {t.gallery.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#D5D5D5]/80 leading-relaxed">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Segmented Filter Control (Functional Interactive Buttons) */}
          <div
            role="group"
            aria-label="Filter portfolio items"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-[#1C1C1C] border border-[#D5D5D5]/10 rounded-lg self-start lg:self-auto"
          >
            {[
              { id: 'all', label: t.gallery.filterAll },
              { id: 'paint', label: t.gallery.filterPaint },
              { id: 'bodywork', label: t.gallery.filterBodywork },
              { id: 'polish', label: t.gallery.filterPolish },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(null);
                    setActiveFilter(tab.id as typeof activeFilter);
                  }}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
                    isActive
                      ? 'bg-[#F26A21] text-white shadow-sm'
                      : 'text-[#D5D5D5]/75 hover:text-white hover:bg-[#0B0B0B]/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {filteredItems.map((item, idx) => {
            const hasFailed = failedImages[item.id];
            const spanClass =
              activeFilter === 'all' ? item.spanClass : 'md:col-span-6';

            return (
              <div
                key={item.id}
                className={`${spanClass} group relative rounded-xl overflow-hidden bg-[#1C1C1C] border border-[#D5D5D5]/10 hover:border-[#F26A21]/50 transition-all duration-200`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  aria-label={`${t.gallery.viewLarger}: ${item.title}`}
                  className="w-full h-full text-left block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F26A21]"
                >
                  <div className="relative w-full h-72 sm:h-80 lg:h-96 overflow-hidden bg-[#141414]">
                    {!hasFailed ? (
                      <img
                        src={item.imageUrl}
                        alt={item.alt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1C1C1C] via-[#121212] to-[#0B0B0B] text-center">
                        <span className="font-display text-lg font-bold text-white">
                          {item.title}
                        </span>
                        <span className="mt-1 text-xs text-[#D5D5D5]/60">
                          {item.processTag}
                        </span>
                      </div>
                    )}

                    {/* Measured Gradient Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-200"
                    />

                    {/* Top Right Expand Affordance Icon */}
                    <div
                      aria-hidden="true"
                      className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#0B0B0B]/80 border border-[#D5D5D5]/20 flex items-center justify-center text-white opacity-85 group-hover:opacity-100 group-hover:border-[#F26A21] group-hover:text-[#F26A21] transition-all duration-150"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom Caption Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      {/* Quiet Unboxed Metadata */}
                      <p className="text-xs font-medium text-[#D99A16] tracking-wide mb-1.5">
                        {item.processTag}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#D5D5D5]/85 line-clamp-2 max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label={t.gallery.closeLightbox}
            className="fixed top-5 right-5 z-50 w-11 h-11 rounded-lg bg-[#1C1C1C] border border-[#D5D5D5]/20 flex items-center justify-center text-white hover:border-[#F26A21] hover:text-[#F26A21] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label={t.gallery.previousImage}
              className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-lg bg-[#1C1C1C]/90 border border-[#D5D5D5]/20 flex items-center justify-center text-white hover:border-[#F26A21] hover:text-[#F26A21] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label={t.gallery.nextImage}
              className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-lg bg-[#1C1C1C]/90 border border-[#D5D5D5]/20 flex items-center justify-center text-white hover:border-[#F26A21] hover:text-[#F26A21] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Lightbox Inner Content */}
          <div
            className="max-w-5xl w-full bg-[#1C1C1C] border border-[#D5D5D5]/15 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#0B0B0B] max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.alt}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1C1C1C]">
              <div>
                <p className="text-xs font-medium text-[#D99A16] mb-1">
                  {currentLightboxItem.processTag}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#D5D5D5]/85 max-w-2xl">
                  {currentLightboxItem.description}
                </p>
              </div>
              <div className="font-mono-num text-xs text-[#D5D5D5]/50 shrink-0">
                {String((selectedIndex ?? 0) + 1).padStart(2, '0')} /{' '}
                {String(filteredItems.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
