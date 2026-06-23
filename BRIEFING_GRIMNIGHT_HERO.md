# 🏔️ BRIEFING: HeroSection "Nacht über dem Grimming"

## Übergeordnetes Konzept
Die Seite ist **kein UI-Layout, sondern eine Nachtlandschaft.** Typografie ist der Held. Der Grimming (2.351m, Pyramidenform, Ennstal) ist das Markenzeichen. Alles passiert in der Abenddämmerung.

## Farbpalette (EXAKT)
- Tiefste Nacht: `#0F172A` – oberer Himmel
- Mitternachtsblau: `#1E3A8A` – mittlerer Himmel  
- Enzianblau (Logo): `#4D7CFF` – Haupt-Typografie
- Gletschercyan (Logo): `#22d3ee` – Lichtakzente, Highlights
- Berg-Silhouette: `#020617` – fast Schwarz
- Eisweiß: `#E2E8F0` – Subline, Navigation
- Dunst: `#334155` – Nebelschleier

**KEIN Marineblau (#1A3A5C), KEIN Gold/Beige, KEIN Weiss (#FFFFFF) als Hintergrund**

## Layout (100vh, kein Split, kein Card)
Der Hero ist **ein einziges Bild** – keine Card, keine Box, kein Split-Screen.

### Ebenen (von hinten nach vorne):
1. **Hintergrund:** Radialer Verlauf `#0F172A` außen → `#1E3A8A` Mitte → ganz unten ein schmaler `#22d3ee` Horizont (10px)
2. **Sterne:** 50-80 kleine Lichtpunkte (CSS `box-shadow` auf pseudo-element), unregelmäßig verteilt, einige funkeln via CSS-Animation
3. **Grimming-Silhouette:** Eine SVG-Pfad-Silhouette des Grimming in `#020617`. Der Berg ist eine markante Pyramide mit steiler Nordwand (links) und sanfterem Südgrat (rechts). Position: mittig/unten, ca. 60% der Viewport-Höhe.
4. **Nebelschleier:** Ein `::before` mit Verlauf von transparent → `#334155` bei 10% opacity auf Höhe des Bergfußes
5. **Typografie:** Riesiges "einfach-online.dev" das VOR dem Berg schwebt
6. **Logo-Reflexion:** Das EO-Logo als Lichtreflexion in der Nordwand

## Typografie (DAS WICHTIGSTE)
- **Headline:** "einfach-online.dev" – in **#4D7CFF** (Enzianblau), gefüllt (kein Outline)
- **Schriftart:** Eine kräftige Sans-Serif (Inter Bold oder DM Sans Bold)
- **Grösse:** `clamp(2.5rem, 8vw, 6rem)` 
- **Position:** Linksbündig, ca. 30% vom linken Rand, 40% von oben
- **Subline:** "Webdesign aus der Steiermark · Modern · Alpin · Digital" in `#E2E8F0`, `font-size: clamp(0.9rem, 1.5vw, 1.2rem)`, darunter oder rechts neben der Headline
- **Ein Teil der Headline** sollte hinter dem Berg hervorlugen und vor dem Sternenhimmel schweben – erzeugt Tiefe

## Grimming-Silhouette (SVG)
Der Grimming ist eine markante, alleinstehende Pyramide (2.351m).
- **Charakteristik:** Steile Nordwand (links, fast senkrecht), sanfter abfallender Südgrat (rechts), ein markanter, leicht abgeflachter Gipfel
- **SVG-Pfad:** Ungefähr von (0, 400) → (120, 40) → (180, 35) → (250, 80) → (400, 400) – aber mit echten Grimming-Proportionen: die linke Seite ist steiler als die rechte, der Gipfel ist eine kurze flache Plateaulinie
- **Füllung:** `#020617`
- **Position:** Horizontal zentriert, vertikal am unteren Rand (wie ein Berg der im Dunkeln verschwindet)
- **Grösse:** ca. 60-70% der Viewport-Breite

## Parallaxe (4 Ebenen)
Beim Scrollen bewegen sich die Ebenen mit unterschiedlichen Geschwindigkeiten:
1. **Sterne:** Langsam (0.1x Scroll)
2. **Grimming:** Mittel (0.3x Scroll)  
3. **Typografie:** Schnell (0.6x Scroll)
4. **Nebel:** Sehr langsam (0.05x Scroll)

Umsetzung: Kleines JS-Snippet (Intersection Observer oder Scroll-Listener mit transform: translateY())

## Logo-Integration (ENDLICH RICHTIG!)
Das EO-Logo wird NICHT oben links platziert. Stattdessen:

1. **Lichtreflexion in der Nordwand:** Die Buchstaben "E" (in #4D7CFF) und "O" (in #22d3ee) erscheinen als **leuchtende Einprägung auf der Nordwand des Grimming**. Der Farbverlauf folgt dem Lichteinfall von oben links (blau) nach unten rechts (cyan). Das Logo hat `opacity: 0.7` und einen leichten `text-shadow`-Glow.

2. **Fixed Siegel (beim Scrollen):** Sobald gescrollt wird, erscheint das Logo (klein, 28px, mit leichtem Cyan-Glow) in der **linken unteren Ecke** – wie ein eingeprägtes Siegel. Es bleibt dort fixiert, solange die Hero-Sektion sichtbar ist.

3. **Als Wasserzeichen:** Das EO erscheint extrem dezent (`opacity: 0.03`, 200px gross) im Hintergrund hinter den Sternen.

## CTA
- **Ein einziger Button:** "Gratis Erstgespräch" 
- **Stil:** Transparent (`background: transparent`), `border: 1px solid #22d3ee`, Text in `#22d3ee`
- **Hover:** Der Button leuchtet auf: `background: rgba(34, 211, 238, 0.1)`, `box-shadow: 0 0 20px rgba(34, 211, 238, 0.3)`
- **Position:** Unterhalb der Subline, linksbündig

## Navigation
- **Unsichtbar** im Hero (keine sichtbare Nav-Bar)
- Erst beim Scrollen erscheint eine **hauchdünne, transparente Nav**:
  - `backdrop-filter: blur(12px)`, `background: rgba(15, 23, 42, 0.6)`
  - Links: Logo (klein, mit Orbit-Animation – die Buchstaben kreisen umeinander)
  - Rechts: Home · Leistungen · Über mich · Kontakt in #94A3B8
  - CTA: "Projekt starten" in #22d3ee

## Animationen beim Laden
1. **Berg erscheint** aus der Dunkelheit (0s → 1.5s: `opacity: 0 → 1`, leichtes `translateY(20px) → 0`)
2. **Sterne erscheinen** gestaffelt (0.3s → 2s, jede 0.05s delay, `opacity: 0 → 1`)
3. **Headline** fadeIn von unten (1.2s delay, `translateY(40px) → 0`, `opacity: 0 → 1`, Dauer 0.8s)
4. **Logo-Reflexion** glowt auf der Nordwand auf (2s delay, `opacity: 0 → 0.7`, Dauer 1s)
5. **CTA** erscheint als letztes (2.5s delay)

## Mobile (390px)
- Berg wird kleiner (40% Viewport-Breite)
- Headline: `clamp(2rem, 10vw, 2.5rem)`, zentriert statt linksbündig
- Subline unter der Headline
- Keine Sterne (spart Performance)
- Logo-Reflexion bleibt, aber kleiner

## Technische Regeln
- **KEINE Card, KEIN box-shadow, KEIN border-radius** auf der Hero-Section
- **KEINE Emojis** – alles saubere SVGs
- CSS-Animationen bevorzugt, JS nur für Parallaxe + Nav-Einblendung
- `npm run build` testen
- Server: `npx http-server dist -p 4321`
- Playwright Screenshots: Desktop 1280px + Mobile 390px

## TL;DR für GLM
"Baue einen Hero in Nachtstimmung. Dunkelblauer Himmel (#0F172A → #1E3A8A), Sterne, der Grimming als Silhouette (#020617), riesiges 'einfach-online.dev' in #4D7CFF davor. EO-Logo als Lichtreflexion in der Nordwand. Parallaxe beim Scrollen. Keine Card, kein Weiss, kein Gold. Das ist eine NACHTLANDSCHAFT, kein Website-Layout."
