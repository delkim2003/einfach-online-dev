import { useEffect, useRef } from 'react';
import { Search, Edit, Zap, Rocket } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: '01',
    title: 'Analyse',
    description:
      'Gemeinsam definieren wir Ihre Ziele, Zielgruppe und Anforderungen. Klartext statt Fachchinesisch.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Konzept',
    description:
      'Design und Struktur für Ihre Marke. Wireframes, Informationsarchitektur und ein klares Konzept.',
    Icon: Edit,
  },
  {
    number: '03',
    title: 'Umsetzung',
    description:
      'Moderne Technologien für maximale Performance. DSGVO-konform, schnell und suchmaschinenoptimiert.',
    Icon: Zap,
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Go Live mit voller Unterstützung. Hosting, Domain und die erste Sichtbarkeit inklusive.',
    Icon: Rocket,
  },
];

export default function ProzessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.prozess-card, .prozess-step--mobile');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay) || 0;
            setTimeout(() => {
              entry.target.classList.add('prozess-revealed');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="prozess"
      aria-labelledby="prozess-title"
      className="py-20 lg:py-28"
      style={{ background: '#F0F4F8' }}
      ref={sectionRef}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2
            id="prozess-title"
            className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: '#0F172A', letterSpacing: '-0.02em' }}
          >
            So einfach geht's
          </h2>
          <p
            className="mx-auto max-w-xl text-base sm:text-lg"
            style={{ color: '#475569' }}
          >
            Vom ersten Gespräch zum fertigen Projekt.
          </p>
        </div>

        {/* Mobile / Tablet Timeline (< 1024px): vertical timeline with left line */}
        <div className="prozess-timeline lg:hidden">
          <div className="prozess-timeline__line" aria-hidden="true" />
          <ul className="m-0 list-none space-y-6 p-0">
            {steps.map((step, i) => {
              const { Icon } = step;
              return (
                <li
                  key={step.number}
                  data-delay={i * 150}
                  className="prozess-step--mobile flex items-start gap-4"
                  style={{ padding: '1rem' }}
                >
                  {/* Marker on the line */}
                  <div
                    className="prozess-marker relative z-10 flex shrink-0 items-center justify-center rounded-full"
                    style={{
                      width: 64,
                      height: 64,
                      background: '#4D7CFF',
                      color: '#FFFFFF',
                    }}
                  >
                    <Icon size={22} strokeWidth={2} />
                    <span
                      className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold"
                      style={{ background: '#0F172A', color: '#FFFFFF' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content right */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="mb-1 text-base font-bold sm:text-lg"
                      style={{ color: '#0F172A', letterSpacing: '-0.01em' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#475569' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop (>= 1024px): 4 cards in a row with connecting line */}
        <div className="prozess-desktop relative hidden lg:block">
          {/* Connecting line (subtle) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0"
            style={{
              top: 'calc(2rem + 1.5rem)',
              left: '12.5%',
              right: '12.5%',
              height: 2,
              background:
                'linear-gradient(90deg, transparent, #CBD5E1 15%, #CBD5E1 85%, transparent)',
              zIndex: 0,
            }}
          />

          <div className="prozess-grid relative z-10 grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const { Icon } = step;
              return (
                <article
                  key={step.number}
                  data-delay={i * 150}
                  className="prozess-card group flex flex-col items-center rounded-xl bg-white p-6 text-center"
                  style={{
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Big number */}
                  <span
                    className="prozess-number block leading-none"
                    style={{
                      fontSize: '2.75rem',
                      fontWeight: 800,
                      color: '#4D7CFF',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Icon in round container */}
                  <div
                    className="my-4 flex items-center justify-center rounded-full"
                    style={{
                      width: 56,
                      height: 56,
                      background: 'rgba(77,124,255,0.10)',
                    }}
                  >
                    <Icon size={24} strokeWidth={2} style={{ color: '#4D7CFF' }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: '#0F172A', letterSpacing: '-0.01em' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description (max 2 lines) */}
                  <p
                    className="prozess-text text-sm leading-relaxed"
                    style={{ color: '#475569' }}
                  >
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .prozess-timeline { position: relative; }
        .prozess-timeline__line {
          position: absolute;
          top: 1rem;
          bottom: 1rem;
          left: calc(1rem + 32px);
          width: 2px;
          background: #4D7CFF;
          transform: translateX(-1px);
          z-index: 0;
        }
        .prozess-step--mobile {
          background: transparent !important;
          box-shadow: none !important;
          border-radius: 12px;
        }
        .prozess-step--mobile .prozess-marker {
          margin-left: 0;
        }

        /* --- SCROLL REVEAL ANIMATION (CSS + IntersectionObserver) --- */
        .prozess-card, .prozess-step--mobile {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(${EASE.join(',')}),
                      transform 0.6s cubic-bezier(${EASE.join(',')}),
                      box-shadow 0.25s ease;
        }
        .prozess-card.prozess-revealed,
        .prozess-step--mobile.prozess-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover effect (only on cards, not mobile) */
        .prozess-card {
          cursor: default;
          transition: opacity 0.6s cubic-bezier(${EASE.join(',')}),
                      transform 0.6s cubic-bezier(${EASE.join(',')}),
                      box-shadow 0.25s ease;
        }
        .prozess-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(0,0,0,0.10) !important;
        }

        /* Tablet: switch to 2x2 grid, hide left timeline line */
        @media (min-width: 768px) and (max-width: 1023px) {
          .prozess-timeline__line { display: none; }
          .prozess-timeline ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .prozess-step--mobile {
            background: #FFFFFF !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06) !important;
            border-radius: 12px;
          }
        }

        /* Description clamp to 2 lines on desktop */
        @media (min-width: 1024px) {
          .prozess-text {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .prozess-card,
          .prozess-step--mobile {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: none !important;
          }
          .prozess-card:hover {
            transform: none !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06) !important;
          }
        }
      `}</style>
    </section>
  );
}
