import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: Bergfoto bewegt sich sanft beim Scrollen (5-10%)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative w-full"
      style={{
        height: '100vh',
        minHeight: '600px',
        maxHeight: '1080px',
      }}
    >
      {/* LAYER 1 — GRIMMING FOTO (Full-Bleed Background) */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          scale: 1.08,
          willChange: 'transform',
        }}
      >
        <img
          src="/images/hero-berg.jpg"
          alt="Grimming im Morgenlicht — Steiermark"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '50% 30%',
          }}
        />
      </motion.div>

      {/* LAYER 2 — SANFTES WEISS-BLAUES OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.70) 50%, rgba(255,255,255,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle EO blue-ish overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(77,124,255,0.04) 0%, rgba(34,211,238,0.02) 100%)',
          zIndex: 2,
        }}
      />

      {/* LAYER 3 — CONTENT */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          zIndex: 20,
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div
          className="mx-auto h-full flex flex-col"
          style={{
            maxWidth: '1200px',
            padding: '0 clamp(16px, 4vw, 48px)',
          }}
        >
          {/* EO Logo (oben links) */}
          <motion.div
            className="pt-6 md:pt-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <svg
              viewBox="0 0 400 300"
              className="h-8 md:h-9 w-auto"
              aria-label="Einfach Online Logo"
            >
              <defs>
                <linearGradient id="heroGradE" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4D7CFF" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="heroGradO" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <g>
                {/* E Shape */}
                <path
                  d="M 32.5 50 L 201.7 50 A 120 120 0 0 0 164.1 90 L 72.5 90 L 72.5 130 L 127.5 130 L 127.5 170 L 72.5 170 L 72.5 210 L 164.1 210 A 120 120 0 0 0 201.7 250 L 32.5 250 Z"
                  fill="url(#heroGradE)"
                />
                {/* O Shape */}
                <path
                  d="M 268 50 A 100 100 0 1 1 268 250 A 100 100 0 1 1 268 50 Z M 268 85 A 65 65 0 1 0 268 215 A 65 65 0 1 0 268 85 Z"
                  fill="url(#heroGradO)"
                />
              </g>
            </svg>
          </motion.div>

          {/* Zentrierter Content-Bereich */}
          <div
            className="flex-1 flex flex-col justify-center hero-content-wrapper"
            style={{
              paddingBottom: 'clamp(3rem, 6vh, 5rem)',
            }}
          >
            <div
              className="hero-content-inner"
              style={{
                maxWidth: 'clamp(400px, 50%, 580px)',
              }}
            >
              {/* Headline — per Briefing: clamp(3.5rem, 7vw, 6rem) */}
              <motion.h1
                id="hero-title"
                className="font-extrabold leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 6rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  color: '#0F172A',
                  marginBottom: '1.2rem',
                }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              >
                Einfach{' '}
                <span style={{ color: '#4D7CFF' }}>online.</span>
              </motion.h1>

              {/* Subline */}
              <motion.p
                className="text-base md:text-lg"
                style={{
                  color: '#334155',
                  lineHeight: '1.65',
                  maxWidth: '65ch',
                  marginBottom: '2.5rem',
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              >
                Webdesign aus der Steiermark. Persönlich. Digital. Gipfelklar.
              </motion.p>

              {/* CTAs — nebeneinander */}
              <motion.div
                className="flex flex-wrap gap-3 hero-ctas"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              >
                {/* Primary CTA */}
                <motion.a
                  href="#kontakt"
                  className="group relative inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    background: '#4D7CFF',
                    border: '1.5px solid #4D7CFF',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    overflow: 'hidden',
                  }}
                  whileHover={{
                    background: '#3B6BF5',
                    borderColor: '#3B6BF5',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Gratis Erstgespräch</span>
                  <motion.svg
                    className="relative z-10"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ color: 'currentColor' }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M3 9H15M15 9L9 3M15 9L9 15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="#leistungen"
                  className="group relative inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#64748B',
                    background: 'transparent',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  whileHover={{
                    color: '#1E293B',
                    borderColor: '#1E293B',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Leistungen ansehen</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LAYER 4 — SCROLL INDIKATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 pointer-events-none"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: EASE }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-medium"
            style={{ color: '#64748B' }}
          >
            Scrollen
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: '#64748B' }}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* LAYER 5 — BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          zIndex: 5,
          background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
        }}
      />

      {/* Responsive: Mobile - zentrierter Text */}
      <style>{`
        @media (max-width: 639px) {
          #hero-title {
            text-align: center;
            font-size: clamp(2.2rem, 10vw, 3.5rem) !important;
          }
          .hero-content-wrapper {
            align-items: center;
            text-align: center;
          }
          .hero-content-wrapper p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-content-inner {
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-ctas {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .hero-ctas a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
