import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, Zap, Lock, Rocket, HeartHandshake, BadgeCheck, Users } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#________';

/** Cryptic → Klartext Scramble-Effekt */
function useScrambleText(target: string, active: boolean, speed = 40) {
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    let raf = 0;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];

    const old = output;
    const max = Math.max(target.length, old.length);
    for (let i = 0; i < max; i++) {
      const from = old[i] || '';
      const to = target[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20) + 8;
      queue.push({ from, to, start, end });
    }

    const update = () => {
      let done = 0;
      let next = '';
      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i];
        let char = '';
        if (frame >= end) {
          done++;
          next += to;
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28) {
            queue[i].char = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
          char = queue[i].char!;
          next += `<span style="color:#22d3ee;opacity:0.9">${char}</span>`;
        } else {
          next += from;
        }
      }
      setOutput(next);
      if (done < queue.length) {
        frame++;
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, active]);

  return output;
}

const STATS = [
  { value: '100+', label: 'Projekte', icon: Rocket },
  { value: '100%', label: 'Zufriedenheit', icon: HeartHandshake },
  { value: 'DSGVO', label: 'konform', icon: BadgeCheck },
  { value: '50+', label: 'Kunden', icon: Users },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [scrambleActive, setScrambleActive] = useState(false);
  const scrambled = useScrambleText('für KMUs.', scrambleActive);

  useEffect(() => {
    const t = setTimeout(() => setScrambleActive(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-[#051424]"
      style={{ minHeight: '100vh' }}
    >
      {/* Ambient Background Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(59,130,246,0.12), transparent 60%)',
        }}
      />
      {/* Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-12 lg:pt-28">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ── LEFT: 7/12 ── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5"
              initial={{ opacity: 0, y: -8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a855f7] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a855f7]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                DSGVO-sicher · EU-Hosting · Fair
              </span>
            </motion.div>

            {/* H1 */}
            <h1
              id="hero-title"
              className="font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              Digitale Exzellenz{' '}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 60%, #22d3ee 100%)',
                }}
                dangerouslySetInnerHTML={{ __html: scrambleActive ? scrambled : 'für KMUs.' }}
              />
            </h1>

            {/* Subtext */}
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            >
              DSGVO-konform, blitzschnell und transparent. Wir bauen Webseiten, die
              nicht nur aussehen — sie arbeiten für Ihr Unternehmen.
            </motion.p>

            {/* Kerneffekt-Box */}
            <motion.blockquote
              className="relative mt-7 max-w-xl rounded-r-lg rounded-l-sm border-l-2 border-[#a855f7] bg-white/[0.03] py-4 pl-5 pr-4"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            >
              <span
                className="absolute -top-3 left-4 select-none text-4xl leading-none text-[#a855f7]/60"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-sm italic leading-relaxed text-slate-200 sm:text-base">
                Technologie dient dem Menschen — nicht umgekehrt. Wir reduzieren
                Komplexität bis nur noch das Wesentliche bleibt.
              </p>
            </motion.blockquote>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
            >
              {/* Shimmer Primary */}
              <a
                href="#leistungen"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[10px] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-px"
                style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                aria-label="Leistungen ansehen"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'eo-shimmer 2s linear infinite',
                  }}
                  aria-hidden="true"
                />
                <span className="relative">Leistungen ansehen</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              {/* Outline Secondary */}
              <a
                href="#philosophie"
                className="group inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-[#a855f7]/50 hover:text-white"
                aria-label="So arbeiten wir"
              >
                <Sparkles className="h-4 w-4 text-[#a855f7]" />
                So arbeiten wir
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            >
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col">
                    <Icon className="mb-2 h-4 w-4 text-[#a855f7]" />
                    <span
                      className="bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
                      style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #22d3ee)' }}
                    >
                      {s.value}
                    </span>
                    <span className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 5/12 — EO Logo mit Glow ── */}
          <motion.div
            className="flex items-center justify-center lg:col-span-5"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow Halo */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 scale-150"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <svg
                  viewBox="0 0 400 300"
                  className="h-auto w-[clamp(180px,32vw,320px)] drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                  aria-label="einfach-online.dev Logo"
                  role="img"
                >
                  <defs>
                    <linearGradient id="eoGradE" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="eoGradO" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <g>
                    <path
                      d="M 32.5 50 L 201.7 50 A 120 120 0 0 0 164.1 90 L 72.5 90 L 72.5 130 L 127.5 130 L 127.5 170 L 72.5 170 L 72.5 210 L 164.1 210 A 120 120 0 0 0 201.7 250 L 32.5 250 Z"
                      fill="url(#eoGradE)"
                    />
                    <path
                      d="M 268 50 A 100 100 0 1 1 268 250 A 100 100 0 1 1 268 50 Z M 268 85 A 65 65 0 1 0 268 215 A 65 65 0 1 0 268 85 Z"
                      fill="url(#eoGradO)"
                    />
                  </g>
                </svg>

                {/* Floating Trust Icons */}
                <motion.div
                  className="absolute -left-6 top-6 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0a1a2e]/80 px-3 py-1.5 backdrop-blur-md"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#22d3ee]" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                    Secure
                  </span>
                </motion.div>
                <motion.div
                  className="absolute -right-4 top-1/3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0a1a2e]/80 px-3 py-1.5 backdrop-blur-md"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Zap className="h-3.5 w-3.5 text-[#a855f7]" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                    Fast
                  </span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 left-1/4 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0a1a2e]/80 px-3 py-1.5 backdrop-blur-md"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <Lock className="h-3.5 w-3.5 text-[#3b82f6]" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                    EU-Host
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll-Indikator ── */}
        <motion.div
          className="pointer-events-none flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="#leistungen"
            className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-[#a855f7]"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Nach unten scrollen"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">Scrollen</span>
            <ChevronDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, #051424)' }}
      />
    </section>
  );
}
