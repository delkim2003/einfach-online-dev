import { motion } from 'framer-motion';

export default function VisualSchnell() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-56 md:h-56">
        {/* Definitions */}
        <defs>
          <radialGradient id="cyanGlow">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background Glow */}
        <circle cx="120" cy="120" fill="url(#cyanGlow)" opacity={0.2} r="80" />

        {/* Speed Gauge Arc – Background */}
        <path d="M50 160 A80 80 0 1 1 190 160" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="12" />

        {/* Speed Gauge Arc – Animated Fill */}
        <motion.path
          d="M50 160 A80 80 0 1 1 190 160"
          fill="none"
          stroke="#22d3ee"
          strokeLinecap="round"
          strokeWidth="12"
          strokeDasharray="350"
          initial={{ strokeDashoffset: 350 }}
          animate={{ strokeDashoffset: [350, 17, 17, 350] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Gauge Text: "95" */}
        <text
          fill="#0F172A"
          fontFamily="sans-serif"
          fontSize="48"
          fontWeight="bold"
          textAnchor="middle"
          x="120"
          y="145"
        >
          <tspan>95</tspan>
        </text>

        {/* Gauge Text: "SCORE" */}
        <text
          fill="#94A3B8"
          fontFamily="sans-serif"
          fontSize="12"
          fontWeight="bold"
          letterSpacing="2"
          textAnchor="middle"
          x="120"
          y="165"
        >
          SCORE
        </text>

        {/* Lightning Bolt */}
        <motion.path
          d="M120 40 L105 75 H120 L115 110 L135 70 H115 L125 40 Z"
          fill="#22d3ee"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Metric Bars */}
        <g transform="translate(70, 185)">
          {/* FCP */}
          <text fill="#94A3B8" fontFamily="sans-serif" fontSize="8" x="0" y="10">
            FCP
          </text>
          <rect fill="#E2E8F0" height="6" rx="3" width="70" x="25" y="4" />
          <motion.rect
            fill="#10B981"
            height="6"
            rx="3"
            x="25"
            y="4"
            initial={{ width: 0 }}
            animate={{ width: 65 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* LCP */}
          <text fill="#94A3B8" fontFamily="sans-serif" fontSize="8" x="0" y="22">
            LCP
          </text>
          <rect fill="#E2E8F0" height="6" rx="3" width="70" x="25" y="16" />
          <motion.rect
            fill="#10B981"
            height="6"
            rx="3"
            x="25"
            y="16"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
          />

          {/* TBT */}
          <text fill="#94A3B8" fontFamily="sans-serif" fontSize="8" x="0" y="34">
            TBT
          </text>
          <rect fill="#E2E8F0" height="6" rx="3" width="70" x="25" y="28" />
          <motion.rect
            fill="#10B981"
            height="6"
            rx="3"
            x="25"
            y="28"
            initial={{ width: 0 }}
            animate={{ width: 68 }}
            transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
          />
        </g>

        {/* Particles */}
        <motion.circle
          cx="60"
          cy="80"
          fill="#22d3ee"
          r="2"
          animate={{ cy: [80, 70, 80], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="180"
          cy="100"
          fill="#22d3ee"
          r="2"
          animate={{ cy: [100, 90, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Badge */}
      <div className="mt-4 bg-cyan-500/10 text-cyan-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-cyan-500/20">
        Lighthouse 95+
      </div>
    </div>
  );
}
