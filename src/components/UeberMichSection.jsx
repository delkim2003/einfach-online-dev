import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function UeberMichSection() {
  return (
    <section id="ueber-mich" aria-labelledby="uebermich-title" style={{ background: '#F8FAFC' }}>
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
            Über mich
          </span>
        </motion.div>

        {/* 50/50 Split */}
        <div
          className="uebermich-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Links: Porträtfoto (Platzhalter) */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            >
              <div
                className="portrait-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1/1',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(77,124,255,0.08), rgba(34,211,238,0.06))',
              }}
            >
              {/* Platzhalter-Icon */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1',
                }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="28" r="14" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 74C12 56.7 24.5 46 40 46C55.5 46 68 56.7 68 74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ marginTop: '0.75rem', fontSize: '0.8125rem', color: '#94A3B8' }}>
                  Porträtfoto folgt
                </span>
              </div>
            </div>
          </motion.div>

          {/* Rechts: Text */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            >
            <h2
              id="uebermich-title"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                marginBottom: '1rem',
              }}
            >
              Hallo, ich bin Philipp.
            </h2>

            {/* Akzentlinie */}
            <div
              style={{
                width: '48px',
                height: '3px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #4D7CFF, #22d3ee)',
                marginBottom: '1.5rem',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  color: '#334155',
                  lineHeight: '1.65',
                  maxWidth: '65ch',
                }}
              >
                Seit über 15 Jahren entwickle ich Websites und digitale Lösungen für Unternehmen,
                die im Netz sichtbar sein wollen — und nicht einfach nur „irgendeine“ Homepage brauchen.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  color: '#334155',
                  lineHeight: '1.65',
                  maxWidth: '65ch',
                }}
              >
                Von Gleisdorf in der Steiermark aus betreue ich Kunden in ganz Österreich.
                Mein Fokus: klare Architektur, sauberer Code und ein Design, das Ihre Marke
                authentisch nach vorne bringt. Ob Astro-SSG für maximale Geschwindigkeit oder
                Drupal-CMS für flexible Redaktionssysteme — ich finde das richtige Werkzeug
                für Ihr Projekt.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  color: '#334155',
                  lineHeight: '1.65',
                  maxWidth: '65ch',
                }}
              >
                Und weil mir Ehrlichkeit wichtig ist: Nicht jedes Projekt braucht das volle
                15-Seiten-Programm. Manchmal reicht eine kluge, schlanke Seite, die genau das
                tut, was sie soll. Das nenne ich „einfach online“.
              </p>
            </div>

            {/* Standort */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #F1F5F9',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C6.25 2 4 4.25 4 7C4 10.75 9 16 9 16C9 16 14 10.75 14 7C14 4.25 11.75 2 9 2Z" stroke="#4D7CFF" strokeWidth="1.5" />
                <circle cx="9" cy="7" r="2" fill="#4D7CFF" />
              </svg>
              <span style={{ fontSize: '0.9rem', color: '#64748B' }}>
                Ungerdorf 279/4, <strong style={{ color: '#334155' }}>8200 Gleisdorf</strong>, Steiermark
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .section-container { opacity: 1 !important; transform: none !important; }
        @media (max-width: 767px) {
          .uebermich-grid {
            grid-template-columns: 1fr !important;
          }
          .portrait-wrapper {
            max-width: 280px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
