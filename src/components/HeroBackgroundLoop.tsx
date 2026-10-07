import React, { useEffect, useRef, useState } from 'react';

interface HeroBackgroundLoopProps {
  customVideoUrl?: string | null;
}

const KEYFRAMES = [
  {
    id: 'painter-back',
    src: '/src/assets/images/hero_e30_painter_back_1791120439154.jpg',
    alt: 'Pedro Grazina (+351 911 044 842) spraying crimson red BMW E30 rally bodywork in a dark studio',
    animationClass: 'hero-motion-seq-1',
  },
  {
    id: 'spray-macro',
    src: '/src/assets/images/hero_e30_spray_macro_1791120450842.jpg',
    alt: 'Close-up macro of HVLP spray gun applying fine clear-coat mist onto BMW E30 box-flared fender',
    animationClass: 'hero-motion-seq-2',
  },
  {
    id: 'rollcage-contour',
    src: '/src/assets/images/hero_e30_rollcage_contour_1791120462550.jpg',
    alt: 'High-gloss crimson red BMW E30 coupe with gloss black tubular roll cage under linear studio lights',
    animationClass: 'hero-motion-seq-3',
  },
];

const SEQUENCE_DURATION_MS = 6500;

interface MistParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
}

/**
 * Seamless atmospheric hero background.
 * Supports playing a real HTML5 <video> (.mp4 / .webm) placed at `/hero-video.mp4` or passed via `customVideoUrl`,
 * with a fallback to the multi-plane BMW E30 Rally + interactive WebGL/Canvas physical paint-mist simulation.
 */
export const HeroBackgroundLoop: React.FC<HeroBackgroundLoopProps> = ({
  customVideoUrl,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [localVideoAvailable, setLocalVideoAvailable] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Check if a static `/hero-video.mp4` file has been placed in `/public`
  useEffect(() => {
    if (customVideoUrl) return;
    let cancelled = false;
    fetch('/hero-video.mp4', { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && res.ok && res.headers.get('content-type')?.includes('video')) {
          setLocalVideoAvailable(true);
        }
      })
      .catch(() => {
        // Fallback to real-time canvas + studio keyframe sequence
      });
    return () => {
      cancelled = true;
    };
  }, [customVideoUrl]);

  // Cycle camera angles smoothly
  useEffect(() => {
    if (customVideoUrl || localVideoAvailable) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % KEYFRAMES.length);
    }, SEQUENCE_DURATION_MS);
    return () => window.clearInterval(interval);
  }, [customVideoUrl, localVideoAvailable]);

  // Real-time 60fps HTML5 Canvas physical spray-mist & volumetric studio light simulation
  useEffect(() => {
    if (customVideoUrl || localVideoAvailable) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const PARTICLE_COUNT = 55;
    const particles: MistParticle[] = [];

    const createParticle = (): MistParticle => {
      // Originate primarily from the right half where the HVLP spray gun and BMW E30 are located
      const originX = width * (0.52 + Math.random() * 0.38);
      const originY = height * (0.35 + Math.random() * 0.45);
      const maxLife = 180 + Math.random() * 180;
      return {
        x: originX,
        y: originY,
        vx: -0.25 - Math.random() * 0.45,
        vy: -0.15 + (Math.random() - 0.5) * 0.3,
        radius: 35 + Math.random() * 85,
        alpha: 0,
        maxAlpha: 0.018 + Math.random() * 0.028,
        life: Math.random() * maxLife,
        maxLife,
      };
    };

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Subtle moving cold-white linear studio light reflection across the right side
      const beamX = width * (0.68 + Math.sin(time * 0.7) * 0.14);
      const beamGrad = ctx.createLinearGradient(
        beamX - 240,
        0,
        beamX + 240,
        height
      );
      beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      beamGrad.addColorStop(0.5, 'rgba(225, 238, 255, 0.045)');
      beamGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // Render volumetric fine HVLP clear-coat mist particles catching studio light
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        if (progress < 0.25) {
          p.alpha = (progress / 0.25) * p.maxAlpha;
        } else if (progress > 0.75) {
          p.alpha = ((1 - progress) / 0.25) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }

        if (p.life >= p.maxLife) {
          particles[i] = createParticle();
          particles[i].life = 0;
          continue;
        }

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        grad.addColorStop(0, `rgba(240, 246, 255, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(213, 213, 213, ${p.alpha * 0.45})`);
        grad.addColorStop(1, 'rgba(11, 11, 11, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [customVideoUrl, localVideoAvailable]);

  const activeVideoSrc =
    customVideoUrl || (localVideoAvailable ? '/hero-video.mp4' : null);

  if (activeVideoSrc) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B0B0B]">
        <video
          src={activeVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-right"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/70"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B0B0B] select-none pointer-events-none">
      {/* Multi-shot Seamless Cross-Dissolve Camera Sequence */}
      {KEYFRAMES.map((frame, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={frame.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out will-change-[opacity,transform] ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className={`w-full h-full ${frame.animationClass}`}>
              <img
                src={frame.src}
                alt={frame.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[70%_center] sm:object-right filter contrast-[1.06] brightness-[0.92]"
              />
            </div>
          </div>
        );
      })}

      {/* 60fps HTML5 Canvas Volumetric Spray Mist & Studio Light Reflections */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-20 w-full h-full mix-blend-screen pointer-events-none"
      />

      {/* Measured Negative-Space Scrims for Website Typography & CTA Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/88 via-[46%] to-[#0B0B0B]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-[#0B0B0B]/75"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 shadow-[inset_0_0_120px_rgba(11,11,11,0.95)]"
      />
    </div>
  );
};
