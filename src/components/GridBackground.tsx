import { memo } from 'react';

export interface GridBackgroundProps {
  /** Opacity der Grid-Linien (0.0 – 1.0). Spec: 0.05–0.08 */
  opacity?: number;
  /** Zellengröße in px (default 40) */
  cellSize?: number;
  /** Akzentfarbe der Linien (default Lila) */
  color?: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
  /** Aurora-Glow im Hintergrund anzeigen (default true) */
  withGlow?: boolean;
}

/**
 * GridBackground — Dekoratives CSS-Grid-Linien-Hintergrund.
 * Zeichnet feine Linien (repeating-linear-gradient) mit opacity 0.05–0.08.
 * Optional mit dezentem Aurora-Glow. Pointer-Events aus, rein dekorativ.
 */
function GridBackground({
  opacity = 0.06,
  cellSize = 40,
  color = '168, 85, 247',
  className = '',
  withGlow = true,
}: GridBackgroundProps) {
  const clampedOpacity = Math.min(Math.max(opacity, 0), 0.2);
  const gap = cellSize - 1;
  const gridImage = `repeating-linear-gradient(0deg, transparent, transparent ${gap}px, rgba(${color}, ${clampedOpacity}) ${cellSize}px), repeating-linear-gradient(90deg, transparent, transparent ${gap}px, rgba(${color}, ${clampedOpacity}) ${cellSize}px)`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Grid-Linien */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: gridImage,
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 85%)',
        }}
      />

      {/* Aurora-Glow Akzente */}
      {withGlow && (
        <>
          <div
            className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }}
          />
          <div
            className="absolute right-1/4 bottom-0 h-[500px] w-[500px] translate-x-1/2 rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)' }}
          />
        </>
      )}
    </div>
  );
}

export default memo(GridBackground);
