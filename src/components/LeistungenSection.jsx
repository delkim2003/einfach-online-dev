import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const services = [
  {
    id: 'webdesign',
    title: 'Webdesign',
    description:
      'Moderne, editorielle Websites mit Fokus auf Benutzerführung, Ästhetik und Konversion. Gebaut mit Astro, Tailwind und Framer Motion — schnell, leicht, suchmaschinenfreundlich.',
    link: '#kontakt',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="40" height="30" rx="4" stroke="#4D7CFF" strokeWidth="2" fill="none" />
        <line x1="4" y1="38" x2="44" y2="38" stroke="#4D7CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="44" x2="30" y2="44" stroke="#4D7CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="44" stroke="#4D7CFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="19" r="3" fill="#22d3ee" />
        <circle cx="27" cy="15" r="2" fill="#4D7CFF" />
        <circle cx="35" cy="22" r="2.5" fill="#22d3ee" />
        <line x1="19" y1="19" x2="25" y2="15" stroke="#CBD5E1" strokeWidth="1.5" />
        <line x1="27" y1="17" x2="33" y2="22" stroke="#CBD5E1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'webentwicklung',
    title: 'Webentwicklung',
    description:
      'Massgeschneiderte Webentwicklung mit Drupal, Astro und modernen JavaScript-Frameworks. Von der Landingpage bis zum komplexen CMS — stabil, skalierbar und wartbar.',
    link: '#kontakt',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6L4 24L16 42" stroke="#4D7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 6L44 24L32 42" stroke="#4D7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="6" x2="20" y2="42" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'seo-geo',
    title: 'SEO & GEO',
    description:
      'Search Engine Optimization und Generative Engine Optimization. Damit Ihre Website nicht nur in Google, sondern auch in KI-Suchmaschinen wie ChatGPT, Perplexity und Gemini gefunden wird.',
    link: '#kontakt',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#4D7CFF" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="8" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="3" fill="#4D7CFF" />
        <line x1="24" y1="6" x2="24" y2="14" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="42" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="24" x2="14" y2="24" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="34" y1="24" x2="42" y2="24" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: EASE,
    },
  }),
};

export default function LeistungenSection() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div
            style={{
              width: '32px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #4D7CFF, #22d3ee)',
            }}
          />
          <span
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#4D7CFF',
            }}
          >
            Leistungen
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="leistungen-title"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: '1.15',
            marginBottom: '1rem',
          }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Was ich für Sie tun kann
        </motion.h2>

        {/* Subline */}
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
            color: '#64748B',
            maxWidth: '65ch',
            marginBottom: '3rem',
            lineHeight: '1.65',
          }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          Von der ersten Idee bis zur fertigen Website — ich begleite Sie durch
          den gesamten Prozess. Maßgeschneidert, transparent und mit viel
          Leidenschaft fürs Detail.
        </motion.p>

        {/* Cards Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #F1F5F9',
                borderRadius: '16px',
                padding: '2rem',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              custom={i}
              variants={cardVariants}
              initial="visible"
              whileHover={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  fontWeight: 600,
                  color: '#0F172A',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.3',
                  marginBottom: '0.75rem',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  color: '#334155',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem',
                  maxWidth: 'none',
                }}
              >
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#4D7CFF',
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '0.7rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.4rem';
                }}
              >
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.2s ease' }}>
                  <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .section-container { opacity: 1 !important; transform: none !important; }
        .service-card {
          cursor: default;
        }
        .service-card:hover {
          border-color: #4D7CFF !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04) !important;
        }
        .service-card:hover a svg {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
