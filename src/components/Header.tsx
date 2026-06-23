import React, { useEffect, useState, useCallback, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

type Lang = 'DE' | 'EN';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'LEISTUNGEN', href: '#leistungen' },
  { label: 'PHILOSOPHIE', href: '#philosophie' },
  { label: 'FAQ', href: '#faq' },
];

const SCROLL_THRESHOLD = 60;

/**
 * Header — Fixierte Navigation (Athena Relaunch).
 * Transparent → Dark (#051424) bei Scroll, backdrop-blur-xl.
 * CTA mit rotierendem Conic-Gradient-Border + Shimmer.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('DE');

  // Scroll-Zustand überwachen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body-Scroll sperren wenn Mobile-Menü offen
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Escape schließt Mobile-Menü
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMobileOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown as never);
    return () => window.removeEventListener('keydown', onKeyDown as never);
  }, [onKeyDown]);

  const toggleLang = () => setLang((l) => (l === 'DE' ? 'EN' : 'DE'));

  return (
    <>
      {/* Skip-Link für Tastaturnutzer */}
      <a
        href="#main"
        className="skip-link"
      >
        Zum Inhalt springen
      </a>

      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/5 bg-[#051424]/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-5 px-4 sm:px-6 lg:px-12">
          {/* ── Logo ── */}
          <a
            href="/"
            className="group flex shrink-0 items-center transition-transform duration-300 hover:-translate-y-px"
            aria-label="einfach-online.dev — zur Startseite"
          >
            <span className="font-mono text-lg font-bold tracking-tight text-white sm:text-xl">
              <span className="text-slate-300">einfach-online</span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #22d3ee 100%)',
                }}
              >
                .dev
              </span>
            </span>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav
            className="ml-auto hidden items-center gap-6 md:flex"
            aria-label="Hauptnavigation"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium uppercase tracking-[0.15em] text-slate-400 transition-colors duration-200 hover:text-[#a855f7]"
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 bg-[#a855f7] transition-all duration-300 group-hover:w-full"
                  style={{ boxShadow: '0 0 8px rgba(168,85,247,0.6)' }}
                />
              </a>
            ))}
          </nav>

          {/* ── Sprachumschalter DE/EN ── */}
          <div
            className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] md:flex"
            role="group"
            aria-label="Sprache wählen"
          >
            <button
              type="button"
              onClick={toggleLang}
              aria-pressed={lang === 'DE'}
              className="transition-colors duration-200 hover:text-[#a855f7]"
              style={lang === 'DE' ? { color: '#a855f7' } : { color: '#64748b' }}
            >
              DE
            </button>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={toggleLang}
              aria-pressed={lang === 'EN'}
              className="transition-colors duration-200 hover:text-[#a855f7]"
              style={lang === 'EN' ? { color: '#a855f7' } : { color: '#64748b' }}
            >
              EN
            </button>
          </div>

          {/* ── CTA-Button mit Conic-Gradient-Border + Shimmer ── */}
          <a
            href="#kontakt"
            className="group relative hidden shrink-0 overflow-hidden rounded-[10px] p-px md:block"
            aria-label="Kontakt aufnehmen"
          >
            {/* Rotierender Conic-Gradient-Border */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-[10px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'conic-gradient(from 0deg, #a855f7, #3b82f6, #22d3ee, #a855f7)',
                animation: 'eo-conic-spin 4s linear infinite',
              }}
            />
            <span
              className="relative flex items-center gap-1.5 rounded-[9px] px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 group-hover:-translate-y-px"
              style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
            >
              <span
                className="absolute inset-0 rounded-[9px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'eo-shimmer 2s linear infinite',
                }}
              />
              <span className="relative">Kontakt</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile Panel (AnimatePresence) ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/5 bg-[#0a1a2e] backdrop-blur-xl md:hidden"
              aria-label="Mobile Navigation"
            >
              <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-[#a855f7]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

                {/* Sprachumschalter mobil */}
                <li className="flex items-center gap-3 py-3 text-xs font-semibold uppercase tracking-[0.15em]">
                  <button
                    type="button"
                    onClick={toggleLang}
                    style={lang === 'DE' ? { color: '#a855f7' } : { color: '#64748b' }}
                    className="transition-colors hover:text-[#a855f7]"
                  >
                    DE
                  </button>
                  <span className="text-slate-600">·</span>
                  <button
                    type="button"
                    onClick={toggleLang}
                    style={lang === 'EN' ? { color: '#a855f7' } : { color: '#64748b' }}
                    className="transition-colors hover:text-[#a855f7]"
                  >
                    EN
                  </button>
                </li>

                {/* CTA mobil */}
                <li className="pt-2">
                  <a
                    href="#kontakt"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-px"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                  >
                    Kontakt
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
