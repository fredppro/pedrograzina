import React from 'react';

interface BrandLogoProps {
  className?: string;
  showPhone?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Unmodified rendering of the user's `public/logo.svg` file.
 * Includes explicit width, height, decoding, and descriptive alt text for Core Web Vitals (zero CLS) & Brand SEO.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions =
    size === 'sm'
      ? { width: 160, height: 90, className: 'h-11 sm:h-12' }
      : size === 'lg'
        ? { width: 285, height: 160, className: 'h-20 sm:h-24' }
        : { width: 214, height: 120, className: 'h-13 sm:h-15' };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="./logo.svg"
        alt="Pedro Grazina — Pintura Automóvel (+351 911 044 842)"
        width={dimensions.width}
        height={dimensions.height}
        decoding="async"
        fetchPriority={size === 'md' ? 'high' : 'auto'}
        className={`${dimensions.className} w-auto object-contain rounded-sm`}
      />
    </div>
  );
};
