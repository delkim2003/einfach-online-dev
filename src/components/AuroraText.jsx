"use client";

/**
 * AuroraText – Magic UI Exakt 1:1
 * linear-gradient(135deg) + rotate/scale Animation
 */
export default function AuroraText({
  children,
  className = '',
  colors = ['#4D7CFF', '#22d3ee', '#818cf8', '#3b82f6'],
  speed = 1,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="aurora-text-animate"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .aurora-text-animate {
          position: relative;
          background-size: 200% auto;
          color: transparent;
          animation: aurora 8s ease-in-out infinite alternate;
        }

        @keyframes aurora {
          0% {
            background-position: 0% 50%;
            transform: rotate(-5deg) scale(0.9);
          }
          25% {
            background-position: 50% 100%;
            transform: rotate(5deg) scale(1.1);
          }
          50% {
            background-position: 100% 50%;
            transform: rotate(-3deg) scale(0.95);
          }
          75% {
            background-position: 50% 0%;
            transform: rotate(3deg) scale(1.05);
          }
          100% {
            background-position: 0% 50%;
            transform: rotate(-5deg) scale(0.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-text-animate {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </span>
  );
}
