import React from 'react';
import { ServiceItem, Translations } from '../i18n/translations';

interface ServicesProps {
  t: Translations;
}

const ServiceIcon: React.FC<{ type: ServiceItem['iconType'] }> = ({ type }) => {
  switch (type) {
    case 'spray':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#F26A21]"
          aria-hidden="true"
        >
          <path d="M3 7h5l2 4H4L3 7Z" />
          <path d="M6 11v4l-2 5h4l1-5" />
          <path d="M10 9h4l2-2v6l-2-2h-4" />
          <path d="M19 6l2-1" />
          <path d="M19 10h3" />
          <path d="M19 14l2 1" />
        </svg>
      );
    case 'bodywork':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#F26A21]"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'polish':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#F26A21]"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
        </svg>
      );
    case 'headlights':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#F26A21]"
          aria-hidden="true"
        >
          <path d="M11 6C6.5 6 3 8.5 3 12s3.5 6 8 6c1.4 0 2.5-1.1 2.5-2.5v-7C13.5 7.1 12.4 6 11 6Z" />
          <path d="M17 8h4" />
          <path d="M17 12h4" />
          <path d="M17 16h4" />
        </svg>
      );
  }
};

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-[#D5D5D5]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span
              aria-hidden="true"
              className="w-6 h-[2px] bg-[#F26A21] shrink-0"
            />
            <span className="text-xs font-semibold tracking-[0.14em] text-[#D99A16] uppercase">
              {t.services.kicker}
            </span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D5D5D5]/80 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Main Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.services.items.map((service) => (
            <article
              key={service.id}
              className="industrial-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Top row: Icon & Editorial Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0B0B0B] border border-[#D5D5D5]/10 flex items-center justify-center group-hover:border-[#F26A21]/40 transition-colors">
                    <ServiceIcon type={service.iconType} />
                  </div>
                  <span className="font-mono-num text-sm font-medium text-[#D5D5D5]/45 group-hover:text-[#F26A21] transition-colors">
                    {service.number}.
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Short Concise Description */}
                <p className="text-sm sm:text-[15px] text-[#D5D5D5]/85 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Quiet Unboxed Technical Specification Footer */}
              <div className="mt-6 pt-4 border-t border-[#D5D5D5]/10 text-xs text-[#D5D5D5]/65">
                {service.details}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
