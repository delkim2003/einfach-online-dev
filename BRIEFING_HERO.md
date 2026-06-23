# 🏔️ BRIEFING: HeroSection – Alpine Premium

## Basisfarben (angepasst an Logo)
```
--brand-e: #4D7CFF      (Logo E – Enzianblau)
--brand-o: #22d3ee      (Logo O – Gletschercyan)
--brand-mid: #3b82f6    (Mittelblau)
--snow: #F0F4F8         (Schneeweiß – Hintergrund)
--stone: #8B8580        (Felsgrau – Texturen)
--slate: #1E293B        (Schiefer – tiefe Töne)
--pine: #5B8C4A         (Tannengrün – dezent)
--zirbe: #8C6E4A        (Zirbenholz – warme Akzente)
--text: #0F172A         (Fast Schwarz)
```

## Layout (100vh, Split-Screen)

Links (55%):
- Oben ein kleiner Badge "WEBDESIGN · STEIERMARK" in dezentem Grau
- **"Einfach online."** – Riesig (clamp(3rem, 8vw, 6rem)), leichtes Letter-Spacing
  - "Einfach" in Schiefer (#1E293B)
  - "online." in Enzianblau (#4D7CFF) + kursiv
- Subline: "Webdesign aus der Steiermark. Mit Herz, Hand und Gipfelblick."
- CTA: Button "📩 Gratis Erstgespräch" in Logo-Blau mit weißem Text, abgerundet
- Zweiter Link: "Meine Gipfel →" in dezentem Grau

Rechts (45%):
- **Nichts Flaches.** Echte Tiefe mit CSS Layers:
  - Hintergrund: Himmel-Verlauf (#4D7CFF → #F0F4F8)
  - Mittelschicht: Bergkette (SVG inline) in #3b82f6 mit 20% Opacity
  - Vordergrund: Zweite Bergkette (dunkler, #1E293B, 40% Opacity)
  - Ganz vorne: Einzelne Tannen-Bäume als Silhouetten (CSS clip-path)

## Wow-Momente

### 1. Berge bauen sich auf (Beim Laden)
Die Berg-SVGs haben `stroke-dasharray` + `stroke-dashoffset` Animation:
- Die Berge "zeichnen sich" von links nach rechts
- Dauer: 1.5s, delay: 0.3s nach Seitenload
- CSS-only über `@keyframes drawMountains`

### 2. Parallaxe bei Mausbewegung
Die Berg-Layers reagieren auf Mausbewegung:
- Hintere Bergkette: bewegt sich 5% der Mausbewegung
- Vordere Bergkette: bewegt sich 15%
- Gibt echte 3D-Tiefe
- CSS `transform: translate()` mit `transition: transform 0.1s ease-out`
- Ein kleines JS-Snippet (max 10 Zeilen) für Maus-Tracking

### 3. Text-Reveal
"Einfach online." erscheint nicht einfach da, sondern:
- "Einfach" fadeIn von unten (0.6s)
- "online." erscheint 0.3s später mit einem leichten Blau-Glow (text-shadow Animation)
- Der CTA Button erscheint als letztes mit einem sanften Slide-Up

### 4. Alpine Scroll-Indikator
Kein Standard-Pfeil! Stattdessen:
- Ein kleiner **Tannenzweig** (CSS-gezeichnet) der sanft auf und ab wippt
- Oder: Drei kleine Berg-Silhouetten die nacheinander aufleuchten (wie Wegmarkierungen)
- Unten rechts, dezent

## Alpine Texturen
- Der linke Bereich bekommt eine **hauchdünne Stein-Textur**: 
  `background: linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 100%)` mit einem leichten Noise-Overlay
- Der rechte Bereich ist der Himmel-Verlauf

## Responsive Mobile (390px)
- **Kein Split:** Die Berge werden zum Hintergrund (Opacity 15%)
- "Einfach online." zentriert, kleiner
- CTA full-width
- Die Parallaxe entfällt auf Mobile (Performance)

## Animationen (CSS-only + 1 kleines JS)
```css
@keyframes drawMountain {
  from { stroke-dashoffset: 2000; }
  to { stroke-dashoffset: 0; }
}
@keyframes fadeReveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glowPulse {
  0%, 100% { text-shadow: 0 0 10px rgba(77, 124, 255, 0.3); }
  50% { text-shadow: 0 0 20px rgba(77, 124, 255, 0.6); }
}
```

JS nur für: Maus-Parallaxe (max 15 Zeilen, Event Listener)

## Konkrete Umsetzung

### Datei: `src/components/HeroSection.astro`
- Vollständig neuschreiben
- Importiere KEINE alten Styles – alles inline/scope
- SVGs für Bergen inline (keine externen Dateien)
- Tannen-Silhouetten via CSS clip-path: `clip-path: polygon(...)` für Tannenform

### Berg-SVG (inline, für die Bergkette rechts):
```svg
<svg viewBox="0 0 600 400" class="mountains-back">
  <path d="M0 400 L80 150 L160 280 L240 100 L320 250 L400 80 L480 200 L560 120 L600 400 Z" 
        fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"
        class="mountain-path" />
  <path d="M0 400 L50 250 L120 320 L200 180 L300 300 L380 160 L460 280 L520 220 L600 350 L600 400 Z" 
        fill="none" stroke="#1E293B" stroke-width="1.5" opacity="0.2"
        class="mountain-path" />
</svg>
```

## Verifikation
1. `npm run build` erfolgreich
2. `npx http-server dist -p 4321` starten
3. Playwright Screenshots: Desktop 1280px full, Mobile 390px full
4. Screenshot-Pfade im Summary nennen

## Extra-Regeln
- **KEINE Emojis als Icons** – saubere SVGs (Icon-Komponenten aus `src/icons/` nutzen wenn vorhanden)
- **KEIN Tailwind** – reines CSS
- **Kein schweres JS** – max 15 Zeilen für Parallaxe
- **Lighthouse-freundlich**
- **ALLE Änderungen via opencode run --model openrouter/z-ai/glm-5.2**
