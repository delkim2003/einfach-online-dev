# ATHENA DESIGN-BRIEFING — einfach-online.dev Relaunch

## Auftrag: Jede Sektion neu stylen

**Ziel:** Die Offline-Relaunch-Version (Astro + React, helles Design) mit dem Content und der visuellen Kraft der Online-Version (dark/Tech) kombinieren. Kein 1:1-Kopie — sondern das Beste aus beiden Welten.

**WICHTIG:** GLM 5.2 setzt deine Design-Vorgaben um. KEIN DeepSeek für Design-Code.

---

## 1. HERO — Animierter Glitch-Text

### Online-Content:
- Badge: `DSGVO-sicher · EU-Hosting · Fair`
- Headline: `Digitale Exzellenz für KMUs.` (mit Buchstaben-Animations-Effekt)
- Subtext: `Wir bauen Ihre digitale Präsenz – DSGVO-konform, blitzschnell und persönlich betreut. Transparente Kosten, faire Konditionen und keinerlei Lock-in-Effekte.`
- Kerneffekt-Zitat: `"Messbar. Performant. Sicher. – DSGVO-konform, blitzschnell und persönlich betreut."`
- CTA1: `Leistungen ansehen`
- CTA2: `So arbeiten wir`

### Design-Vorgaben:
- **Animierter Glitch-Text:** "Digitale Exzellenz" erscheint Buchstabe für Buchstabe
- "für KMUs." hat den Cryptic-Animation-Effekt ($0DOM → KMUs)
- **Farben:** Lila (#a855f7) + Cyan (#22d3ee) + Blau (#3b82f6) Gradient-Akzente
- **Hintergrund:** Dark mit subtle Grid-BG, optional Particle-Effekt (Canvas)
- **Layout:** Links Text, rechts Logo/EO-Marke (wie Online)
- **Kerneffekt-Zitat** in einer lila akzentuierten Box mit Border-Left

---

## 2. HEADER-NAVIGATION

### Menüpunkte (aus Online):
- Logo (einfach-online.dev Brand)
- LEISTUNGEN | PHILOSOPHIE | FAQ
- Sprachumschalter: DE / EN
- CTA-Button: KONTAKT (mit Shimmer-Effekt)

---

## 3. PRINZIPIEN-SEKTION — "Wofür wir stehen"

### Online-Content:
```
Wofür wir stehen
Drei Prinzipien. Eine Haltung.
Eine Website ist kein Selbstzweck. Sie soll Ihr Geschäft voranbringen – sicher, schnell und ohne Abhängigkeiten.
```

**3 Tabs:**
| # | Prinzip | Detailtext | Tags |
|---|---------|-----------|------|
| 01 | Unabhängig | Ihre Website läuft ohne Google, Amazon & Co. Wir hosten alle Dateien direkt bei uns – keine externen Skripte, keine versteckten Datenabflüsse, keine Abhängigkeiten von Dritten. Ihre Seite gehört Ihnen, technisch und rechtlich. | Lokale Fonts, Kein CDN, Kein Google-Tracking, Puristisches CSS |
| 02 | Sicher | Ihre Kundendaten bleiben in Europa. DSGVO ist für uns kein Formular, das man abhäkt, sondern Bauprinzip. Kein Cookie-Banner nötig, weil wir gar nicht erst tracken. Kein US-Tool, kein Datenleck. | DSGVO by Design, EU-Rechenzentrum, Cookie-frei, Kein US-Transfer |
| 03 | Schnell | Performantes Hosting in deutschen Rechenzentren. Statisch generierte Seiten laden besonders schnell – auch bei schwachem Handy-Empfang. | Schnelle Ladezeit, Statisches Rendering, Mobil optimiert, CDN-frei |

### Zusätzlich: **SECURITY CONSOLE** (System-Status-Box)
```
SYSTEM // AKTIV
SEC_SEED: 0x[random]
STANDORT: DEUTSCHLAND
Prüfung
LOKAL GEHOSTET – NULL EXTERNE ABHÄNGIGKEITEN

Dateien-Liste (simuliert):
✓ /fonts/outfit-bold.woff2    12ms [74KB]
✓ /images/logo.png            22ms [75KB]
✓ /js/core-bundle.min.js      34ms [112KB]
✓ /css/globals.css             8ms [24KB]

Statistiken:
0% Externe Abhängigkeiten
Minimiert Daten bei Dritten
100% Lokale Assets
```

---

## 4. LEISTUNGEN — "Was ich für Sie tun kann"

### Content (Offline + angepasst):
Die 3 Karten aus der Offline-Version behalten, aber im Online-Stil:

| Karte | Icon | Beschreibung |
|-------|------|-------------|
| **Webdesign & Entwicklung** | Code/Laptop | Maßgeschneiderte Websites mit modernem Design, optimaler Performance und vollständiger DSGVO-Konformität. |
| **CMS & Redaktionssysteme** | Layers/Drupal | Flexible Content-Management-Systeme mit Drupal – für Unternehmen, die Inhalte selbst pflegen wollen. |
| **SEO & GEO** | BarChart/Search | Search Engine Optimization und Generative Engine Optimization – für Google, ChatGPT, Perplexity & Co. |

---

## 5. PREISE — "Investition & Transparenz"

### WICHTIG: Toggle zwischen Einmalzahlung und Monats-Modell

Es gibt einen **Toggle-Schalter** (z.B. "Einmalig kaufen" | "Monatlich mieten"), der die gesamte Pricing-Ansicht umschaltet.

---

### Toggle-Position 1: "EINMALIG KAUFEN"

| Feature | Digital Start | Digital Flex | Digital Flex+ |
|---------|--------------|-------------|--------------|
| **Preis (netto)** | **€1.490–2.490** | **€2.990–4.490** | **€4.490** |
| Seiten | 1-seitig (Astro SSG) | Mehrseitig (CMS) | Individuell (CMS+) |
| Responsive | ✅ | ✅ | ✅ |
| SEO & GEO | Basis | Optimierung | Premium |
| Hosting & Domain | 1 Jahr | 1 Jahr | 1 Jahr |
| DSGVO | ✅ | ✅ | ✅ |
| CMS | — | ✅ Drupal | ✅ Drupal |
| Extra | — | Redaktionseinführung | Individuelles Design + Performance |

> *Einmalzahlung, keine Mindestlaufzeit. Kleinunternehmer gemäß §6 Abs. 1 Z 27 UStG.*

---

### Toggle-Position 2: "MONATLICH MIETEN"

Hier werden die Pakete als monatliche All-Inclusive-Modelle dargestellt:

#### ALL-IN SMART (Für Neugründungen)
- **€149–199/Monat** + €399 Bereitstellung
- Komplettpaket: Website + Hosting + Wartung + Support
- Ideal für Start-ups und Einsteiger

#### ONLINE CARE (Rundum-Sorglos)
- **€99–149/Monat**
- Wartung, Updates, Inhaltspflege & priorisierter Support
- Inkl. monatlicher Lighthouse-Garantie
- Ideal für Unternehmen mit CMS (Digital Flex)

#### ONLINE GUARDIAN (Basis-Schutz)
- **€39–59/Monat**
- Sicherheits-Updates, Monitoring & technischer Support
- Ideal für statische Websites (Digital Start)

---

### Visuelle Darstellung:
- Der **Toggle** sitzt prominent über den Preiskarten
- Beide Positionen haben klar unterscheidbare Farben (z.B. Lila für Kaufen, Cyan für Mieten)
- Die Extra-Pakete (Guardian/Care/All-In) sind nicht versteckt, sondern als eigene Karten sichtbar
- Bei Position "Monatlich" wechseln die 3 Hauptkarten zu den Monats-Modellen
- Ein kleiner Hinweis unter dem Toggle: *"Bindung: 24 Monate (Miet-Modell)"*

---

## 6. FAQ — "Häufige Fragen – direkt beantwortet"

### 6 Fragen aus Online (angepasst):
1. Warum "Local First" – und was bedeutet das?
2. Was kostet eine Website bei Ihnen?
3. Kümmere ich mich selbst um Updates?
4. Was passiert, wenn mal etwas nicht funktioniert?
5. Bin ich danach an Sie gebunden?
6. Übernehmen Sie auch Domain und Hosting?

---

## 7. KONTAKT — "Lassen Sie uns reden."

### Formular-Felder:
- Name (required)
- E-Mail (required)
- Welches Paket interessiert Sie? (Dropdown: Noch unklar / Digital Start / Digital Flex / Digital Flex+)
- Nachricht (required)
- Privacy-Checkbox: "Ich habe die Datenschutzerklärung gelesen und stimme zu."
- Submit: "Nachricht senden"

### Kontaktdaten:
- E-Mail: info@einfach-online.dev
- Telefon: +43 664 567 4567
- Adresse: Ungerdorf 279/4, 8200 Gleisdorf, Steiermark

---

## 8. COOKIE-BANNER — Kräftiger/Weniger Lasch

- **Overlay-Stil:** Wie Online (nicht nur dezentes Banner)
- **Hintergrund:** Dark mit backdrop-blur
- **Buttons:** "Nur notwendige" + "Alle akzeptieren" klar unterscheidbar
- **Text:** "Wir nutzen ausschließlich technisch notwendige Cookies. Statistiken (Plausible) werden nur nach Ihrer Zustimmung aktiviert. Keine Datenweitergabe an Dritte."

---

## 9. FOOTER

### Footer-Links (vollständig):
- **Brand:** einfach-online.dev
- **E-Mail:** info@einfach-online.dev
- **Tagline:** DSGVO-konform. EU-gehostet. Unabhängig.
- **Social Icons:** GitHub, Twitter/X, LinkedIn (wie Online)
- **Rechtliches:** Datenschutz | Cookie-Einstellungen | AGB | Impressum
- **Copyright:** © 2026 einfach-online.dev

### NEU: Cookie-Einstellungen-Link
Ein Button/Link im Footer, der das Cookie-Banner wieder öffnet — damit User ihre Einwilligung jederzeit ändern können.

---

## DESIGN-TOKEN

### Farbpalette (Online + Offline hybrid):
- **Background:** #051424 (dark navy, von Online)
- **Surface:** #0a1a2e (für Cards)
- **Text Primary:** #ffffff
- **Text Secondary:** #94a3b8 / #e8eaf6 mit opacity
- **Akzent Lila:** #a855f7
- **Akzent Blau:** #3b82f6
- **Akzent Cyan:** #22d3ee / #06b6d4
- **Border:** rgba(255,255,255,0.05–0.10)

### Typografie:
- **Headlines:** Inter / Geist (Font-Black, tracking-tight)
- **Body:** Inter
- **Monospace/Akzente:** JetBrains Mono / Fira Code
- **Größen:** h1: 88px, h2: 48px, h3: 24px, body: 16px

### Effekte:
- **Glow:** box-shadow mit Neon-Farben
- **Shimmer-Buttons:** conic-gradient Shimmer-Animation
- **Glassmorphism:** backdrop-blur + semi-transparent BG
- **Grid-BG:** subtile Grid-Linien im Hintergrund
- **Neon-Pulse:** Pulsierende Punkte für Badges

---

## UMSETZUNGSHINWEISE FÜR GLM

- **Framework:** Astro + React + Tailwind CSS v4
- **Animationen:** Framer Motion (für React-Komponenten), CSS-Animations (für einfache Effekte)
- **Icons:** lucide-react
- **Glitch-Animation:** CSS @keyframes + React State für Buchstaben-Cryptic
- **Security Console:** Tailwind+React (simulierte Daten, nicht live)
- **Cookie-Banner:** React-Component mit LocalStorage-Persistenz
- **KEIN DeepSeek Code!** Ausschließlich GLM 5.2 für Design-Umsetzung
