# 🏔️ ALPINE PREMIUM — Komplett-Relaunch einfach-online.dev

## Philosophie

Kein Terminal-Spielzeug. **Echte alpine Premium-Ästhetik.** Die Website fühlt sich an wie ein Wochenende in einer luxuriösen Almhütte – warm, hochwertig, handgemacht, mit Blick auf die Berge. 

Jede Sektion ist ein **eigenes Erlebnis** mit eigenem Layout, eigener Textur, eigener Persönlichkeit. Keine zwei Sektionen sehen gleich aus. Keine Standard-1200px-Boxen.

---

## 🎨 Farbsystem

```
--primary: #1A3A5C        (Tiefblau – Almhimmel)
--primary-light: #4D7CFF  (Akzentblau – Enzian)
--accent: #E8D5B5         (Warmbeige – Almbutter)
--accent-warm: #D4A76A    (Honiggold – Sonnenuntergang)
--surface: #F7F4EF        (Cremig – Leinen)
--surface-alt: #EDE8E0    (Wärmerer Leinen-Ton)
--text: #1A1614           (Fast Schwarz – Tinte)
--text-soft: #5C5348      (Weichbraun)
--stone: #8B8580          (Steingrau)
--pine: #2D5A27           (Tannengrün – dezent)
--snow: #FFFFFF           (Schneeweiß)
```

Verläufe zwischen diesen Tönen, nie knallig. Alles fühlt sich **geerdet** an.

---

## 📐 Layout-Philosophie

- **KEINE einheitliche Breite.** Jede Sektion entscheidet selbst: manche 100vw (Hero), manche schmal (Über mich wie ein Tagebuch), manche asymmetrisch.
- **Viel Weißraum.** Atmen lassen. Nichts ist gequetscht.
- **Jede Sektion hat einen "Moment".** Eine Überraschung. Ein Detail, bei dem man stehen bleibt.
- **Mobile-First** – alles muss auf 390px genauso atmen.

---

## 🏔️ SEKTION 1 — HERO (TOPGRAPHIE)

### Layout
- **100vw Höhe, split:** Links 50% Text, rechts 50% Topographie-Karte
- Die Karte ist **echte SVG-Höhenlinien** inkl. des Wortes "STEIERMARK" in großer, leichter Schrift als Wasserzeichen
- Karte ist interaktiv: Beim Scrollen bewegen sich die Höhenlinien leicht (Parallaxe, CSS-only)

### Textur
- Die linke Hälfte hat einen **hauchdünnen Stoff-Überlag** (`background: repeating-linear-gradient` mit minimalem Muster, das an Leinen erinnert)
- Die Topographie ist in **#4D7CFF und #1A3A5C** gehalten

### Typografie
- **"Einfach online."** – riesig, schwebend, fast editorial
- **"Webdesign aus der Steiermark. Mit Herz, Hand und Gipfelblick."** – darunter, in warmem Beige

### Wow
- Die Höhenlinien reagieren auf Mausbewegung (CSS `transform: perspective()` + `rotate` – subtil)
- Beim Laden **baut sich die Karte auf** – Linien erscheinen nacheinander (CSS-Animation mit `stroke-dashoffset`)

### UX
- Scroll-Indikator: Ein **kleiner Berg** (😄 SVG) der wandert, oder ein Pfeil, der aussieht wie eine **Wegmarkierung**
- CTA "Gratis Erstgespräch" – gestaltet wie ein **Gipfelkreuz** (kleines Icon)

---

## 🧗 SEKTION 2 — LEISTUNGEN (GIPFEL-WAHL)

### Layout
- **Nicht Cards!** Sondern: **Vier Berge** nebeneinander, wie eine Bergkette
- Jeder Berg ist eine **asymmetrische SVG-Silhouette** – unterschiedliche Höhen, unterschiedliche Formen
- Unter jedem Berg steht der Name der Dienstleistung

### Interaktion
- **Hover:** Der Berg wird farbig (Akzent), ein "Weg" erscheint vom Fuß zum Gipfel, am Gipfel erscheint ein kleines Kreuz
- **Klick/Scroll:** Die Details "wandern" wie eine **Wanderung durch den Berg** – von unten nach oben
- Auf Mobile: Swipe durch die Bergkette

### Textur
- Jeder Berg hat eine eigene Farbe aus der Palette (Tiefblau, Tannengrün, Steingrau, Schnee)
- Die Berge sind nicht flach – sie haben **leichte Schattierungen**, die an Felsstruktur erinnern

### Detail-Panel (bei Klick)
- Öffnet sich **von unten** wie eine **Schutzhütte** – mit warmem Beige-Hintergrund
- Enthält: Was genau, Preis ab, Dauer, Beispiel
- Schließen-Button: Kleines "🚩" – Gipfelfahne

---

## 🏡 SEKTION 3 — ÜBER MICH (PANORAMA-FENSTER)

### Layout
- **80vw breit, zentriert** – wie ein **großes Fenster in einer Almhütte**
- Der obere Teil (60%) ist ein **Panorama-Foto** (ein großes, horizontales Bild der Steirischen Alpen)
- Der untere Teil (40%) ist der Text – wie ein **Tagebuch auf einem Holztisch**
- Der Text ist **schräg gestellt** (wie ein hingeworfenes Notizbuch)

### Textur
- Eine **leichte Holzmaserung** als Background-Overlay des Textbereichs
- Der Bildbereich hat einen **Vignetten-Effekt** (CSS box-shadow inset)

### Typografie
- **"Wer ich bin."** – in großer, serifenbetonter Schrift (wie eine Überschrift in einem Gästebuch)
- **Fließtext** (40-60 Wörter) – warm, persönlich, mit Handschrift-Flair durch leichtes `letter-spacing`

### Wow
- Das Bild hat einen **saisionalen Filter** – je nach Tageszeit (CSS `@media (prefers-color-scheme)` – aber für Sommer/Winter? Oder einfach eine subtile Animation)
- **"Ein echter Steirer. Mit Laptop statt Sense."** – Highlight im Text

---

## 🗺️ SEKTION 4 — PROZESS (BERGTOUR)

### Layout
- **100vw, horizontales Scrolling** (nur per Intersection-Observer/Klick – kein echtes Scroll-Snapping, das nervt)
- Eine **Wanderkarte** von links nach rechts: **5 Etappen**
- Jede Etappe ist ein **Marker auf der Karte**:
  1. 🏁 **Talstation** – Kennenlernen ($0, 0 HM)
  2. 🧭 **Route planen** – Konzept ($300, 200 HM)
  3. 🏔️ **Aufstieg** – Entwicklung ($800, 800 HM)
  4. ⛰️ **Gipfel** – Launch ($1500, 1500 HM)
  5. 🚩 **Abstieg + Einkehr** – Wartung/Support (ongoing)

### Interaktion
- Jeder Marker ist **klickbar** – zeigt ein Popover mit Details
- Die Verbindungslinien zwischen den Markern sind **gestrichelte Wanderwege** (SVG `stroke-dasharray`)
- Aktuelle Etappe leuchtet in **Enzianblau** (#4D7CFF)

### Textur
- Hintergrund: **Leichte Topographie** (SVG), die in die Ferne verschwimmt (opacity fade)
- Die Linien haben einen **Schatten** (filter: drop-shadow)

### Wow
- Wenn man von links nach rechts schaut, **steigt die Linie sanft an** – wie eine echte Höhenprofil-Karte
- Beim Hovern über einen Marker erscheint: **"Etappe X: Name" + Höhenmeter + Preis** auf einer kleinen **Wegtafel**

---

## 💬 SEKTION 5 — FAQ (HÜTTENBUCH)

### Layout
- **Schmales Format (800px), zentriert** – wie ein **altes Gästebuch in einer Hütte**
- Jede FAQ ist ein **Hüttenbuch-Eintrag**:
  - **"Gast X fragt:"** – die Frage in kursiver, handschriftähnlicher Typo
  - **"Der Hüttenwirt antwortet:"** – die Antwort in normaler Schrift

### Textur
- Hintergrund: **Cremiges Papier** (#F7F4EF) mit einer **hauchdünnen Linienstruktur** (ruled paper)
- Leichter **Schatten um das Buch** (box-shadow)

### Interaktion
- **Akkordeon, aber langsam** – wie ein dickes Buch, das sich öffnet
- Der Eintrag "klappt auf" wie eine Buchseite (CSS 3D-Rotation auf der Y-Achse)

### "Gäste-Einträge":
1. "Braucht man wirklich eine Website?" → "Ja, dein digitales Gipfelkreuz."
2. "Was kostet ein Gipfelkreuz?" → Fair, transparent, gratis Erstgespräch.
3. "Kann ich meine Website selbst pflegen?" → Ja, oder ich mach's für dich.
4. "Wie lange dauert der Aufstieg?" → 3-6 Wochen, je nach Wetter. 😉

---

## 💰 SEKTION 6 — PRICING (AUSRÜSTUNGS-VERGLEICH)

### Layout
- **Drei nebeneinander** – wie **Skiausrüstung auf einem Regal**
- Jedes "Paket" ist eine **Ausrüstungskombination**:
  - **BASIC** – Der Tourenrucksack (1-5 Seiten Astro)
  - **FLEX** – Die Komplettausrüstung (Drupal mit CMS)
  - **ALL-IN** – Das Premium-Paket (Alles inklusive, Monatsabo)

### Visual
- Jedes Paket hat ein **Illustrations-Element** (Emoji/Icon als Stilmittel):
  - BASIC: 🎒
  - FLEX: 🧗
  - ALL-IN: 🏔️

### Textur
- Die Pakete sind auf **Holzbrettern** (CSS `background` mit Holzmaserung via Gradient)
- Ein Paket ist **hervorgehoben** (Schatten, etwas größer) – das "empfohlene"

### Details
- Nach einem **Toggle "Kaufen vs. Mieten"** wechselt ALL-IN zwischen Einmalzahlung und Monatsabo
- Jedes Paket hat einen **"Ausrüstungs-Check"** – was ist dabei (Liste mit Haken)

---

## 📬 SEKTION 7 — KONTAKT (BERGFUNK)

### Layout
- **Split:** Links eine **alte Karte mit Wegmarkierung** (SVG – "Hier bist du"), rechts das Formular
- Oder: **Ganze Breite** – das Formular ist eine **Postkarte** aus den Bergen

### Formular-Stil
- Felder sehen aus wie **Eintragungen auf einer Postkarte**:
  - Name – "Absender"
  - Email – "Rückantwort an"
  - Nachricht – "Was soll auf der Karte stehen?"
- Submit-Button: **"📮 Abschicken"** – wie ein Briefkasten

### Textur
- Die Postkarte hat **abgerundete Ecken**, einen **dünnen Rand** (wie eine echte Karte)
- Hintergrund: **Leichte Bergsilhouette** im Wasserzeichen

### Wow
- Beim Absenden: Eine **kurze Animation** – die Karte **fliegt aus dem Bild** (CSS-Animation, `transform: translateY(-200px) + rotate`)

---

## 👣 FOOTER

### Layout
- **Dunkel (#1A3A5C)**, vollbreit, wie der **Sockel einer Hütte**
- Einfach:
  - Logo
  - 3 Spalten: Schnelllinks, Kontakt, Rechtliches
  - Ganz unten: **"🏔️ Gebaut in der Steiermark, mit Gipfelblick und Leidenschaft."**

### Light/Dark Mode
- Footer bleibt immer dunkel
- Aber wenn der User Dark Mode hat, werden die Akzente etwas heller

---

## 🌐 Übergreifend

### Header
- **Transparent**, wie eine **Wegtafel** am Rand
- Links: Logo (klein)
- Rechts: Navigation – gestaltet wie **Wegweiser** (kleine Dreiecke/Pfeile)
- CTA: "Gratis Erstgespräch" – in **Akzent (#D4A76A)** mit kleinem 🏔️

### Übergänge
- JEDE Sektion hat einen **Übergang** beim Scrollen:
  - Hero → Leistungen: Ein **Bergrücken** (SVG) als Trenner
  - Über mich → Prozess: Ein **Wanderweg** der sich ins Bild schlängelt
  - FAQ → Pricing: Ein **Tannenzweig-Muster** als Trenner
  - Kontakt → Footer: Ein **sanfter Farbverlauf** ins Dunkle

### Scroll-Animationen
- `@keyframes fadeInUp` – sanft, aber mit Charakter (leichtes Rotieren)
- CSS `@media (prefers-reduced-motion: no-preference)` – nur für Leute ohne Motion-Sensitivity

### Responsive Mobile (390px)
- **Hero:** Topographie wird kleiner, Text steht jetzt **oben auf der Karte** – die Karte wird zum Background
- **Gipfel-Wahl:** Die Bergkette wird **horizontal scrollbar** (overflow-x: auto)
- **Panorama:** Das Fenster wird kleiner – das Bild **nimmt weniger Raum** ein, Text mehr
- **Prozess:** Die Karte wird **vertikal** (oben→unten wie ein echter Aufstieg)
- **Kontakt:** Postkarte wird **vollbreit** – kein Split mehr

---

## ⚙️ Technische Vorgaben

- **Framework:** Astro SSG (static, kein Server)
- **CSS:** PostCSS/Native CSS in global.css – **KEIN Tailwind** wenn nicht schon da; lieber schönes, klares CSS
- **SVGs:** Alle Illustrationen inline oder als .astro-Komponenten – **keine externen Dateien** für die wichtigen Grafiken
- **Performance:** Lighthouse >95 (Desktop), >90 (Mobile)
- **Kein JavaScript für Animationen** – alles CSS `@keyframes`, `transition`, `transform`. JS nur für: Akkordeon, Formular-Submit, Toggle
- **Honeypot** im Kontaktformular
- **Cookie-Banner** behalten (aus bestehender Component)
- **DSGVO/Impressum/AGB** – bestehende Seiten behalten, nur ggf. Link-Anpassung
- **Build:** `npm run build` muss funktionieren

---

## 🎯 Qualitätskriterien

- Jede Sektion muss für sich allein stehen können
- Keine Sektion darf sich wie eine "Standard-Komponente" anfühlen
- Jede Sektion hat mindestens einen "Wow-Moment" – eine Animation, eine Textur, ein Layout-Bruch
- **Mobil muss genauso besonders sein** – nicht nur "gestapelt"

---

**Alle bestehenden Components in `src/components/` werden ERSATZLOS ÜBERSCHRIEBEN oder gelöscht.** 
**Die `src/pages/index.astro` importiert die neuen Komponenten.**

Starte nach Build: `npx http-server dist -p 4321` zum Testen. 
Nach erfolgreichem Build: Screenshot machen (Desktop 1280px + Mobile 390px).
