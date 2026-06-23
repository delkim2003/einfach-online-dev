import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];
const PULSE = 2.4;

export default function VisualUnabhaengig() {
  return (
    <div className="relative w-full max-w-[240px] aspect-square mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full aspect-square">
        <svg
          width="100%" height="100%" viewBox="0 0 240 240" fill="none"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4D7CFF" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#4D7CFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#4D7CFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background glow — pulsierend */}
          <motion.circle
            cx="120" cy="110" r="60" fill="url(#blueGlow)"
            animate={{ r: [55, 65, 55] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Central Server Rack — Farbe #4D7CFF statt #0F172A */}
          <motion.g
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: PULSE, ease: EASE, repeat: Infinity }}
            style={{ originX: '120px', originY: '110px' }}
          >
            {/* Server-Gehäuse */}
            <rect x="90" y="70" width="60" height="80" rx="6" fill="#4D7CFF" opacity="0.15" />
            <rect x="90" y="70" width="60" height="80" rx="6" stroke="#4D7CFF" strokeWidth="1.5" fill="none" opacity="0.4" />

            {/* Rack-Einheiten (Server-Blöcke) — animiertes Pulsieren */}
            <motion.rect
              x="95" y="80" width="50" height="6" rx="2" fill="#4D7CFF"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, ease: EASE, repeat: Infinity }}
            />
            <motion.rect
              x="95" y="92" width="50" height="6" rx="2" fill="#4D7CFF"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, ease: EASE, repeat: Infinity, delay: 0.4 }}
            />
            <motion.rect
              x="95" y="104" width="50" height="6" rx="2" fill="#4D7CFF"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, ease: EASE, repeat: Infinity, delay: 0.8 }}
            />

            {/* Status-LEDs */}
            <motion.circle cx="99" cy="83" r="1.5" fill="#22d3ee"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, ease: EASE, repeat: Infinity }}
            />
            <motion.circle cx="99" cy="95" r="1.5" fill="#22d3ee"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, ease: EASE, repeat: Infinity, delay: 0.33 }}
            />
            <motion.circle cx="99" cy="107" r="1.5" fill="#22d3ee"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, ease: EASE, repeat: Infinity, delay: 0.66 }}
            />
          </motion.g>

          {/* === Äußere Nodes (verbotene Dienste) mit roten, durchgestrichenen Verbindungen === */}

          {/* Cloud Node (oben links) */}
          <g transform="translate(32, 45)">
            {/* Verbindungslinie zum Server — gestrichelt rot */}
            <line x1="25" y1="30" x2="58" y2="40" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            {/* Animierter Strike-Strich */}
            <motion.line
              x1="25" y1="30" x2="58" y2="40"
              stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity }}
            />
            {/* X-Markierung auf der Leitung */}
            <motion.g
              transform="translate(42, 35)"
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity }}
              style={{ transformBox: 'fill-box' }}
            >
              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
            {/* Cloud Icon */}
            <motion.g
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, ease: EASE, repeat: Infinity }}
            >
              <circle cx="18" cy="22" r="16" fill="white" stroke="#CBD5E1" strokeWidth="1.2" />
              <path d="M10 20 a5 5 0 0 1 10 0 a7 7 0 0 1 14 0 a5 5 0 0 1 -9 10 h-14 a5 5 0 0 1 -1 -10z" fill="#94A3B8" opacity="0.7" />
            </motion.g>
          </g>

          {/* Globe Node (oben rechts) */}
          <g transform="translate(180, 50)">
            <line x1="5" y1="15" x2="-30" y2="40" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <motion.line
              x1="5" y1="15" x2="-30" y2="40"
              stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 0.4 }}
            />
            <motion.g
              transform="translate(-12, 28)"
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 0.4 }}
              style={{ transformBox: 'fill-box' }}
            >
              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
            <motion.g
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, ease: EASE, repeat: Infinity, delay: 0.4 }}
            >
              <circle cx="15" cy="15" r="14" fill="white" stroke="#CBD5E1" strokeWidth="1.2" />
              <circle cx="15" cy="15" r="10" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
              <ellipse cx="15" cy="15" rx="4" ry="10" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="5" y1="15" x2="25" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
            </motion.g>
          </g>

          {/* API Node (unten links) */}
          <g transform="translate(40, 150)">
            <line x1="25" y1="10" x2="50" y2="-10" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <motion.line
              x1="25" y1="10" x2="50" y2="-10"
              stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 0.8 }}
            />
            <motion.g
              transform="translate(37, 0)"
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 0.8 }}
              style={{ transformBox: 'fill-box' }}
            >
              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
            <motion.g
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, ease: EASE, repeat: Infinity, delay: 0.8 }}
            >
              <circle cx="15" cy="15" r="14" fill="white" stroke="#CBD5E1" strokeWidth="1.2" />
              <rect x="6" y="7" width="18" height="16" rx="2" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="10" y1="11" x2="20" y2="11" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="10" y1="15" x2="20" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="10" y1="19" x2="18" y2="19" stroke="#94A3B8" strokeWidth="1.5" />
            </motion.g>
          </g>

          {/* Tracking Node (unten rechts) */}
          <g transform="translate(180, 150)">
            <line x1="5" y1="10" x2="-30" y2="-10" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <motion.line
              x1="5" y1="10" x2="-30" y2="-10"
              stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 1.2 }}
            />
            <motion.g
              transform="translate(-12, 0)"
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.8, ease: EASE, repeat: Infinity, delay: 1.2 }}
              style={{ transformBox: 'fill-box' }}
            >
              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
            <motion.g
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, ease: EASE, repeat: Infinity, delay: 1.2 }}
            >
              <circle cx="15" cy="15" r="14" fill="white" stroke="#CBD5E1" strokeWidth="1.2" />
              <circle cx="15" cy="15" r="9" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
              <circle cx="15" cy="15" r="2" fill="#94A3B8" />
              <line x1="15" y1="6" x2="15" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="15" y1="20" x2="15" y2="24" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="6" y1="15" x2="10" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="20" y1="15" x2="24" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
            </motion.g>
          </g>

        </svg>
      </div>

      {/* Badge "100% autark" */}
      <motion.div
        className="mt-4 bg-[#4D7CFF]/10 text-[#4D7CFF] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#4D7CFF]/20"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        100% autark
      </motion.div>
    </div>
  );
}
