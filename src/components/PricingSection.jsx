import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const plans = [
  {
    id: 'start',
    name: 'Digital Start',
    price: '1.490',
    period: 'einmalig',
    description: 'Die schnelle, schlanke Lösung für kleine Unternehmen und Selbstständige.',
    featured: false,
    features: [
      '1-seitige Website (Astro SSG)',
      'Responsive Design',
      'SEO & GEO Grundoptimierung',
      'Kontaktformular',
      'Hosting & Domain (1 Jahr)',
      'DSGVO-konform',
    ],
    cta: 'Anfragen',
  },
  {
    id: 'flex',
    name: 'Digital Flex',
    price: '2.990',
    period: 'einmalig',
    description: 'Die flexible Lösung für Unternehmen mit Redaktionsbedarf.',
    featured: true,
    features: [
      'Mehrseitige Drupal-CMS-Website',
      'Responsive Design',
      'SEO & GEO Optimierung',
      'Kontaktformular (mit CAPTCHA)',
      'Hosting & Domain (1 Jahr)',
      'DSGVO-konform',
      'Redaktionseinführung (1h)',
      '3 Monate Änderungsservice',
    ],
    cta: 'Anfragen',
  },
  {
    id: 'flexplus',
    name: 'Digital Flex+',
    price: '4.490',
    period: 'einmalig',
    description: 'Die Komplettlösung für anspruchsvolle Projekte mit vollem Service.',
    featured: false,
    features: [
      'Drupal-CMS mit erweiterten Funktionen',
      'Responsive Design',
      'SEO & GEO Premium-Optimierung',
      'Individuelles Design',
      'Hosting & Domain (1 Jahr)',
      'DSGVO-konform',
      'Redaktionseinführung (2h)',
      '6 Monate Änderungsservice',
      'Performance-Optimierung',
    ],
    cta: 'Anfragen',
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

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" style={{ background: '#FFFFFF' }}>
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
            Preise
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="pricing-title"
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
          Transparente Preise
        </motion.h2>

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
          Faire Preise für echte Ergebnisse. Keine versteckten Kosten, keine
          Abofallen — Sie zahlen einmalig und erhalten eine professionelle Website.
        </motion.p>

        {/* Pricing Grid */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {plans.map((plan, i) => (
            <motion.article
              key={plan.id}
              custom={i}
              variants={cardVariants}
              initial="visible"
              className="pricing-card"
              style={{
                background: plan.featured
                  ? 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)'
                  : '#FFFFFF',
                border: plan.featured
                  ? '2px solid #4D7CFF'
                  : '1px solid #F1F5F9',
                borderRadius: '16px',
                padding: '2.5rem',
                position: 'relative',
                transition: 'box-shadow 0.3s ease',
              }}
              whileHover={{
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              }}
            >
              {/* Badge */}
              {plan.featured && (
                <div
                  className="pricing-badge"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#22d3ee',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.35rem 1rem',
                    borderRadius: '20px',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Am beliebtesten
                </div>
              )}

              {/* Plan Name */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '0.25rem',
                }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#64748B',
                  lineHeight: '1.5',
                  marginBottom: '1.5rem',
                  maxWidth: 'none',
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.02em',
                  }}
                >
                  €{plan.price}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748B',
                    marginLeft: '0.4rem',
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '2rem',
                }}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: '#334155',
                      lineHeight: '1.4',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <circle cx="8" cy="8" r="6" fill="#22d3ee" fillOpacity="0.2" />
                      <path
                        d="M5 8.5L7 10.5L11 6"
                        stroke="#22d3ee"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className="pricing-cta"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.875rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: plan.featured ? '#FFFFFF' : '#4D7CFF',
                  background: plan.featured ? '#4D7CFF' : 'transparent',
                  border: plan.featured ? 'none' : '1.5px solid #4D7CFF',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {plan.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .section-container { opacity: 1 !important; transform: none !important; }
        .pricing-cta:hover {
          background: ${'#3B6BF5'} !important;
          color: #FFFFFF !important;
          border-color: ${'#3B6BF5'} !important;
        }
        .pricing-card:hover .pricing-cta:not([style*="background: #4D7CFF"]) {
          background: rgba(77,124,255,0.06);
        }

        @media (max-width: 639px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
