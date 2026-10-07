import React from 'react';

interface BrandLogoProps {
  className?: string;
  showPhone?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Vector preservation of the authentic "PEDRO GRAZINA pintura automóvel" black & white logo.
 * Depicts the HVLP spray gun on the left spraying dynamic paint lines over a coupe roofline silhouette,
 * with bold italic uppercase "PEDRO GRAZINA" and clean "pintura automóvel" subtitle below.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showPhone = false,
  size = 'md',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-9 sm:h-10'
      : size === 'lg'
        ? 'h-16 sm:h-20'
        : 'h-11 sm:h-12';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox={showPhone ? '0 0 560 265' : '0 0 560 215'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto`}
        role="img"
        aria-label="Pedro Grazina — Pintura Automóvel"
      >
        {/* Dynamic Paint Splash & Roofline Silhouette */}
        {/* Upper paint droplets */}
        <path
          d="M362 42C374 24 388 12 396 16C404 20 392 40 374 56C364 64 355 52 362 42Z"
          fill="#FFFFFF"
        />
        <path
          d="M210 78C226 64 244 54 252 58C258 61 242 76 222 89C212 95 202 85 210 78Z"
          fill="#FFFFFF"
        />
        <path
          d="M492 58C506 48 524 44 529 51C534 58 517 69 500 74C490 77 484 64 492 58Z"
          fill="#FFFFFF"
        />

        {/* Main continuous spray arc from nozzle over car roof */}
        <path
          d="M112 128C168 102 246 72 328 58C375 50 426 24 444 34C454 40 422 60 404 70C438 62 480 48 492 60C500 68 468 82 454 88C486 84 518 82 522 92C526 102 496 106 484 112C512 112 544 118 542 130C540 140 508 136 498 144C510 156 516 178 504 190C494 198 486 182 484 166C480 142 466 124 442 114C392 94 316 90 242 104C192 113 146 124 112 128Z"
          fill="#FFFFFF"
        />

        {/* Car Side Windows Silhouette (Negative Space Cutouts / White Window Shapes) */}
        <path
          d="M242 118C272 106 310 100 342 100L335 138H232C228 132 234 122 242 118Z"
          fill="#FFFFFF"
        />
        <path
          d="M352 100C382 101 412 106 434 115L430 138H345L352 100Z"
          fill="#FFFFFF"
        />
        <path
          d="M444 119C456 124 466 130 470 138H440L444 119Z"
          fill="#FFFFFF"
        />

        {/* HVLP Spray Gun Silhouette (Left) */}
        {/* Gravity Cup */}
        <path
          d="M24 62C22 54 32 48 46 46C60 44 72 48 74 56L80 94C81 102 74 108 64 112L66 122L54 124L52 114C40 112 32 106 30 96L24 62Z"
          fill="#FFFFFF"
        />
        {/* Cup internal liquid level cutout */}
        <path
          d="M30 64C30 58 38 54 48 53C58 52 67 55 68 61L70 72C56 75 44 72 32 74L30 64Z"
          fill="#0B0B0B"
        />
        {/* Spray Gun Body, Nozzle, Trigger & Handle */}
        <path
          d="M52 122L88 114L96 108L108 112L104 120L110 124L100 132L92 130L86 140L68 146L82 174C84 178 82 182 78 182C74 182 70 178 68 172L56 150L48 154L58 192L72 204L90 196L94 202L74 212C72 228 64 242 50 246C36 250 26 240 28 226C30 214 40 206 50 202L42 188L34 162L22 146L26 136L46 126L52 122Z"
          fill="#FFFFFF"
        />
        {/* Bottom Hose Loop Cutout */}
        <path
          d="M52 212C44 216 38 222 37 229C36 235 42 239 48 237C56 234 62 224 63 214L52 212Z"
          fill="#0B0B0B"
        />

        {/* Main Brand Typography: PEDRO GRAZINA */}
        <text
          x="128"
          y="174"
          fill="#FFFFFF"
          fontFamily="'Outfit', sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="43"
          letterSpacing="1.5"
        >
          PEDRO GRAZINA
        </text>

        {/* Subtitle: pintura automóvel */}
        <text
          x="248"
          y="204"
          fill="#D5D5D5"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="500"
          fontSize="25"
          letterSpacing="0.8"
        >
          pintura automóvel
        </text>

        {/* Optional Phone Row */}
        {showPhone && (
          <g transform="translate(185, 222)">
            <path
              d="M8 2C5 4 3 9 5 16C7 23 13 31 20 35C25 38 30 37 33 34L28 26L23 29C19 26 15 21 13 16L18 13L13 4L8 2Z"
              fill="#FFFFFF"
            />
            <text
              x="44"
              y="29"
              fill="#FFFFFF"
              fontFamily="'Outfit', sans-serif"
              fontWeight="700"
              fontSize="28"
              letterSpacing="1"
            >
              +351 911 044 842
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
