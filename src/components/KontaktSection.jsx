import { motion } from 'framer-motion';
import { useState } from 'react';

const EASE = [0.22, 1, 0.36, 1];

export default function KontaktSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honeypot check
    const honeypot = e.target.querySelector('input[name="hp_field"]');
    if (honeypot && honeypot.value) return; // Bot detected

    // In production: send via Formspree / Netlify Forms / API
    setSubmitted(true);
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" style={{ background: '#FFFFFF' }}>
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
            Kontakt
          </span>
        </motion.div>

        {/* 2-Spalte: Formular links, Info rechts */}
        <div
          className="kontakt-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Links: Formular */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2
              id="kontakt-title"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                marginBottom: '1rem',
              }}
            >
              Schreiben Sie mir
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: '#64748B',
                lineHeight: '1.65',
                maxWidth: '65ch',
                marginBottom: '2rem',
              }}
            >
              Bereit für Ihre neue Website? Einfach das Formular ausfüllen und
              ich melde mich innerhalb von 24 Stunden bei Ihnen.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{
                  padding: '2rem',
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: '0 auto 1rem' }}>
                  <circle cx="24" cy="24" r="20" fill="#22c55e" fillOpacity="0.1" />
                  <path d="M16 24L22 30L32 18" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#166534', marginBottom: '0.5rem' }}>
                  Nachricht gesendet!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#15803D', maxWidth: 'none' }}>
                  Vielen Dank für Ihre Nachricht. Ich melde mich schnellstmöglich bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="kontakt-form" noValidate>
                {/* Honeypot — unsichtbar für Menschen */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
                  <label htmlFor="hp_field">Nicht ausfüllen</label>
                  <input type="text" name="hp_field" id="hp_field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Ihr Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="form-input form-textarea"
                    placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  />
                </div>

                {/* DSGVO-Checkbox */}
                <div className="form-group dsgvo-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="dsgvo-label" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: '#64748B',
                    lineHeight: '1.5',
                  }}>
                    <input
                      type="checkbox"
                      name="dsgvo"
                      required
                      className="dsgvo-checkbox"
                      style={{
                        width: '18px',
                        height: '18px',
                        marginTop: '2px',
                        flexShrink: 0,
                        accentColor: '#4D7CFF',
                        border: '1.5px solid #E2E8F0',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    />
                    <span>
                      Ich stimme der{' '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer"
                        style={{
                          color: '#4D7CFF',
                          textDecoration: 'underline',
                          fontWeight: 500,
                        }}
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      zu. *
                    </span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="form-submit"
                  style={{
                    padding: '0.875rem 2.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    background: '#4D7CFF',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                  }}
                  whileHover={{ background: '#3B6BF5' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Nachricht senden
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Rechts: Info */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <div style={{ paddingTop: 'clamp(3.5rem, 5vw, 5rem)' }}>
              {/* Kontakt Karte */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid #F1F5F9',
                  marginBottom: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#0F172A',
                    marginBottom: '1.25rem',
                  }}
                >
                  Kontaktdaten
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Email */}
                  <a
                    href="mailto:info@einfach-online.dev"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: '#334155',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(77,124,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="1" y="3" width="16" height="12" rx="2" stroke="#4D7CFF" strokeWidth="1.5" />
                        <path d="M1 4L9 10L17 4" stroke="#4D7CFF" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    info@einfach-online.dev
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+4367645674567"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: '#334155',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(34,211,238,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16 12.5V15C16 15.55 15.55 16 15 16C7.82 16 2 10.18 2 3C2 2.45 2.45 2 3 2H5.5C5.85 2 6.15 2.22 6.27 2.55L7.42 5.45C7.53 5.78 7.43 6.15 7.17 6.37L5.84 7.57C7.28 10.26 9.74 12.72 12.43 14.16L13.63 12.83C13.85 12.57 14.22 12.46 14.55 12.58L17.45 13.73C17.78 13.85 18 14.15 18 14.5Z" stroke="#22d3ee" strokeWidth="1.5" />
                      </svg>
                    </div>
                    +43 664 567 4567
                  </a>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: '#64748B',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(77,124,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2C6.25 2 4 4.25 4 7C4 10.75 9 16 9 16C9 16 14 10.75 14 7C14 4.25 11.75 2 9 2Z" stroke="#4D7CFF" strokeWidth="1.5" />
                        <circle cx="9" cy="7" r="2" fill="#4D7CFF" />
                      </svg>
                    </div>
                    Ungerdorf 279/4, 8200 Gleisdorf
                  </div>
                </div>
              </div>

              {/* CTA Karte */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(77,124,255,0.06), rgba(34,211,238,0.04))',
                  borderRadius: '16px',
                  padding: '1.5rem 2rem',
                  border: '1px solid rgba(77,124,255,0.1)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#334155',
                    lineHeight: '1.6',
                    maxWidth: 'none',
                  }}
                >
                  <strong style={{ color: '#4D7CFF' }}>Gratis Erstgespräch:</strong>{' '}
                  Kein Risiko, keine Verpflichtung. Wir besprechen Ihr Projekt und
                  finden heraus, ob wir zusammenpassen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .section-container { opacity: 1 !important; transform: none !important; }
        .kontakt-grid {
          align-items: start;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #334155;
          margin-bottom: 0.4rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-family: 'Inter', system-ui, sans-serif;
          color: #0F172A;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus {
          border-color: #4D7CFF;
          box-shadow: 0 0 0 3px rgba(77,124,255,0.1);
        }
        .form-input::placeholder {
          color: #94A3B8;
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .kontakt-form {
          position: relative;
        }
        .dsgvo-checkbox {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 18px;
          height: 18px;
          border: 1.5px solid #E2E8F0;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: #FFFFFF;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .dsgvo-checkbox:checked {
          background: #4D7CFF;
          border-color: #4D7CFF;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
          background-size: 12px;
          background-position: center;
          background-repeat: no-repeat;
        }
        .dsgvo-checkbox:focus {
          border-color: #4D7CFF;
          box-shadow: 0 0 0 3px rgba(77,124,255,0.1);
        }
        .dsgvo-label:hover .dsgvo-checkbox {
          border-color: #4D7CFF;
        }

        @media (max-width: 767px) {
          .kontakt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
