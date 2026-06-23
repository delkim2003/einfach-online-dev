import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function VisualSicher() {
  return (
    <div className="relative w-full max-w-[240px] aspect-square mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full aspect-square">
        <svg
          width="100%" height="100%" viewBox="0 0 240 240" fill="none"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Glow */}
          <motion.circle
            cx="120" cy="110" fill="url(#greenGlow)"
            animate={{ r: [60, 80, 60] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* EU Shield */}
          <path d="M120 40 L60 60 C60 120 120 160 120 160 C120 160 180 120 180 60 L120 40Z" fill="#4D7CFF" />

          {/* Lock Icon */}
          <rect fill="#4D7CFF" height="25" rx="2" width="30" x="105" y="85" />
          <path
            d="M110 85 V75 A10 10 0 0 1 130 75 V85"
            fill="none"
            stroke="#4D7CFF"
            strokeWidth="4"
          />

          {/* 12 EU-Sterne im Schild-Inneren — langsame Kreisbewegung wie EU-Flagge */}
          <motion.g
            style={{ transformOrigin: '120px 100px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
              const r = 32;
              return (
                <circle
                  key={i}
                  cx={120 + Math.cos(angle) * r}
                  cy={100 + Math.sin(angle) * r}
                  fill="#FACC15"
                  r="3.5"
                />
              );
            })}
          </motion.g>

          {/* Animating Checkmark */}
          <g transform="translate(100, 165)">
            <motion.circle
              cx="20" cy="20" fill="#10B981"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              r="18"
            />
            <motion.path
              d="M10 20 L17 27 L30 13"
              fill="none"
              stroke="white"
              strokeDasharray="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              animate={{ strokeDashoffset: [40, 0, 0, 40] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        </svg>
      </div>

      {/* Badge "DSGVO-konform" */}
      <motion.div
        className="mt-4 bg-emerald-500/10 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-500/20"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        DSGVO-konform
      </motion.div>
    </div>
  );
}
