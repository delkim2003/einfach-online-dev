import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const faqs = [
  {
    id: 'faq-1',
    question: 'Was kostet eine Website bei Ihnen?',
    answer:
      'Meine Pakete starten bei €1.490 für eine schlanke Einseiten-Website (Digital Start) bis €4.490 für eine flexible Drupal-CMS-Lösung (Digital Flex+). Jedes Projekt ist individuell — im kostenlosen Erstgespräch besprechen wir Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot.',
  },
  {
    id: 'faq-2',
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'Eine professionelle Website ist in der Regel innerhalb von 2–4 Wochen umgesetzt. Der genaue Zeitrahmen hängt vom Umfang ab: Digital Start ist in etwa 1–2 Wochen fertig, ein Drupal-Projekt (Digital Flex/Flex+) kann 3–6 Wochen in Anspruch nehmen.',
  },
  {
    id: 'faq-3',
    question: 'Brauche ich technisches Wissen, um die Website zu betreiben?',
    answer:
      'Nein. Ich liefere Ihre Website komplett eingerichtet aus — Hosting, Domain, SSL, alles dabei. Bei Drupal-Projekten erhalten Sie eine kurze Einführung ins Backend. Bei Astro-Seiten biete ich auf Wunsch einen einfachen Redaktionszugang oder übernehme Änderungen für Sie.',
  },
  {
    id: 'faq-4',
    question: 'Was ist GEO und warum ist das wichtig?',
    answer:
      'GEO (Generative Engine Optimization) ist die Optimierung Ihrer Website für KI-Suchmaschinen wie ChatGPT, Perplexity und Google Gemini. Während SEO Sie in Google sichtbar macht, sorgt GEO dafür, dass KI-Assistenten Ihre Inhalte korrekt zitieren und empfehlen. Beides ist heute essenziell für Ihre Online-Sichtbarkeit.',
  },
  {
    id: 'faq-5',
    question: 'Arbeiten Sie auch mit WordPress?',
    answer:
      'Nein. Ich setze bewusst auf modernere und sicherere Technologien: Astro als statischen Site-Generator für maximale Geschwindigkeit und Drupal als flexibles Enterprise-CMS. Beide sind sicherer, schneller und zukunftssicherer als WordPress — und machen auf Dauer weniger Ärger.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" aria-labelledby="faq-title" style={{ background: '#F8FAFC' }}>
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
            FAQ
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="faq-title"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: '1.15',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Häufig gestellte Fragen
        </motion.h2>

        {/* FAQ List */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <div
                className="faq-item"
                style={{
                  borderBottom: '1px solid #E2E8F0',
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="faq-question"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: openId === faq.id ? '#4D7CFF' : '#0F172A',
                    lineHeight: '1.4',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      color: openId === faq.id ? '#4D7CFF' : '#94A3B8',
                      transition: 'color 0.2s ease',
                    }}
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          paddingBottom: '1.25rem',
                          fontSize: '1rem',
                          color: '#475569',
                          lineHeight: '1.65',
                          maxWidth: '65ch',
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .section-container { opacity: 1 !important; transform: none !important; }
        .faq-question:hover {
          color: #4D7CFF !important;
        }
        .faq-question:hover svg {
          color: #4D7CFF !important;
        }
      `}</style>
    </section>
  );
}
