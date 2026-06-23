# 🏔️ BRIEFING: HeroSection V2 – RICHTIG WOW

## ❌ WAS FALSCH WAR (V1)
- **Card-Layout!** Der Hero war eine Box mit Schatten – killt die Wucht. 
- **Berge zu klein und blass** – sie müssen VISUELL DOMINIEREN
- **Logo-Cyan fehlt im Design** – klebt nur oben links
- **"Bergkette ansehen" Link** – unklar, verwirrt Nutzer

## ✅ WAS V2 ANDERS MACHT

### Layout: FULL-SCREEN SPLIT (100vh)
Links 55%, Rechts 45% – **KEINE Card, KEIN Schatten, KEINE Box.**
- Links: Text auf schneeweißem Grund (#F0F4F8)
- Rechts: **GROSSE, FARBSTARKE BERG-WELT** – kein blasser Hintergrund mehr

### Farbsystem (MUSS durchgesetzt werden)
Logo-Farben MÜSSEN im ganzen Hero sichtbar sein, nicht nur im Logo:
- **#4D7CFF** (Enzianblau) → Hauptfarbe Berge + CTAs
- **#22d3ee** (Gletschercyan) → Akzente, Highlights, Hover-States
- **#3b82f6** (Mittelblau) → Zweite Bergkette, Icons
- **#F0F4F8** (Schneeweiß) → Linke Seite Hintergrund
- **#1E293B** (Schiefer) → Titel "Einfach"
- **#8B8580** (Felsgrau) → Subtile Texte, Badge

### DIE BERGE – NEUES KONZEPT (Das Wichtigste!)

Rechte Seite = **NUR BERGE.** Nichts anderes. Drei Ebenen:

**Ebene 1 – Hintergrund (Himmel):**
- Verlauf von #4D7CFF (oben) → #22d3ee (unten, 20% opacity)
- Wie ein strahlender Morgenhimmel in den Alpen

**Ebene 2 – Große Bergkette (dominant):**
- EINE einzige, große, durchgehende Berglinie
- `stroke="#4D7CFF" stroke-width="4"` – DICK, FARBSTARK, SICHTBAR
- Füllung: `fill="#4D7CFF"` mit 15% opacity
- Die Berge nehmen **70% der rechten Fläche** ein
- Animation: `stroke-dashoffset` – die Linie zeichnet sich in 2s

**Ebene 3 – Kleine Bergkette (vorne):**
- Zweite Linie, näher am Betrachter
- `stroke="#1E293B" stroke-width="2"` mit `fill="#1E293B"` bei 8% opacity
- Leicht nach rechts versetzt für Tiefe

**Ebene 4 – Tannen (Vordergrund):**
- 3-4 Tannen-Silhouetten am unteren Rand der Berge
- CSS clip-path polygon für Tannenform
- Farbe: #1E293B mit 30% opacity

### WOW-MOMENTE (MÜSSEN SICHTBAR SEIN)

#### 1. BERGE ZEICHNEN SICH AUF
```css
@keyframes drawMountains {
  from { stroke-dashoffset: 3000; }
  to { stroke-dashoffset: 0; }
}
.mountain-line {
  stroke-dasharray: 3000;
  animation: drawMountains 2.5s ease-out forwards;
}
```
- `stroke-width` MINDESTENS 3px – sonst sieht man es nicht!
- Die Berge müssen NACH dem Zeichnen auch FILLED werden (Fill-Animation mit 0.5s delay)

#### 2. MAUS-PARALLAXE (SPÜRBAR!)
```js
document.querySelector('.mountains-layer').addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  layer.style.transform = `translate(${x}px, ${y}px)`;
});
```
- Hintere Berge: 5px max Verschiebung
- Vordere Berge: 15px max Verschiebung  
- Tannen: 25px max Verschiebung
- `transition: transform 0.1s ease-out` für Smoothness

#### 3. TEXT-REVEAL (GESTAFFELT)
- Badge: opacity 0→1, 0s delay
- "Einfach": translateY(30px)→0, 0.3s delay
- "online.": translateY(30px)→0 + cyan glow, 0.6s delay
- Subline: translateY(20px)→0, 0.9s delay
- CTA: translateY(20px)→0, 1.2s delay
- JEDER Schritt: `animation: fadeUp 0.6s ease-out forwards`

#### 4. GLOW AUF "ONLINE."
```css
@keyframes glowPulse {
  0%, 100% { text-shadow: 0 0 8px rgba(77, 124, 255, 0.3); }
  50% { text-shadow: 0 0 25px rgba(77, 124, 255, 0.6), 0 0 50px rgba(34, 211, 238, 0.3); }
}
```
- Das "online." PULSIERT sanft in blau+cyan

### HEADLINE DESIGN
- **"Einfach"** → #1E293B (Schiefer), `font-size: clamp(3.5rem, 7vw, 6rem)`, serifenbetont
- **"online."** → #4D7CFF (Enzianblau), kursiv, leicht italic, mit glow-Animation

### BADGE
- Oben links über der Headline
- "WEBDESIGN · STEIERMARK" in #8B8580 (Felsgrau), `font-size: 0.8rem`, `letter-spacing: 0.2em`
- Kleiner Punkt (•) in #22d3ee als Trenner

### SUBLINE
- "Webdesign aus der Steiermark. **Mit Herz, Hand und Gipfelblick.**"
- Die Keywords "Herz", "Hand", "Gipfelblick" in #4D7CFF (oder #22d3ee)
- Leichter Unterstrich (CSS border-bottom) in #22d3ee unter den Keywords

### CTA
- Button: `background: #4D7CFF`, `color: white`, `border-radius: 12px`
- Hover: Wechsel zu #3b82f6 + leichter Scale (1.02)
- Icon: Brief-SVG aus src/icons/MailIcon.astro
- Pfeil: ChevronRight-Icon am Ende
- Button-Text: "Gratis Erstgespräch"

### ZWEIT-LINK
- "Meine Gipfel →" in #8B8580
- Keine Box, kein Rahmen – nur Text mit Hover-Effekt (Farbe wechselt zu #4D7CFF)
- KEIN "Bergkette ansehen" mehr – verwirrt Nutzer

### STATISTIKEN (unter dem Text, links)
Drei Fakten nebeneinander:
```
3–6    │  20+    │  1
Wochen │  Projekte│ Steirer
bis zum│  betreut │ kein Callcenter
Gipfel │         │
```
- Zahlen: #4D7CFF, fett, groß (1.5rem)
- Beschriftung: #8B8580, klein (0.75rem)
- Leichte vertikale Trennstriche (1px, #E2E8F0) zwischen den Blöcken

### SCROLL-INDIKATOR
- Ganz unten, zentriert oder rechts
- Drei kleine Berg-Silhouetten die nacheinander aufleuchten
- Oder: Einfacher Pfeil (ChevronDownIcon aus src/icons/) der sanft wippt
- Text "SCROLL" in #8B8580, 0.6rem

### MOBILE (390px)
- **KEIN Split** – Berge werden zum dezenten Hintergrund (10% opacity)
- Text zentriert, "Einfach online." kleiner (clamp(2.2rem, 10vw, 3rem))
- CTA full-width
- Statistiken untereinander statt nebeneinander
- Parallaxe DEAKTIVIERT (kein Maus-Event auf Mobile)
- Berge-Animation läuft trotzdem (einmalig beim Laden)

### CRITICAL REGELN
1. **KEINE Card!** Kein `box-shadow`, kein `border-radius`, keine Box um den Inhalt
2. Berge MÜSSEN gross sein – nicht nur angedeutet
3. Farben MÜSSEN sichtbar sein – #4D7CFF und #22d3ee überall
4. Animationen MÜSSEN sichtbar sein – stroke-width mindestens 3px
5. "Meine Gipfel" statt "Bergkette ansehen"
6. KEINE Emojis – SVGs aus src/icons/
7. `npm run build` testen
8. `npx http-server dist -p 4321` starten
9. Playwright Screenshots Desktop 1280px + Mobile 390px
10. Screenshot-Pfade im Summary nennen

### TL;DR für GLM 5.2
"Mach die Berge GROSS. KEINE Card. 100vh Split-Screen. Farben: #4D7CFF, #22d3ee, #F0F4F8, #1E293B. Animationen müssen sichtbar sein. Maus-Parallaxe spürbar. 'Meine Gipfel' statt 'Bergkette'. Build. Screenshot."
