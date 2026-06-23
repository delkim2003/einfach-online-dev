# 🚀 KOMPLETT REBUILD – einfach-online.dev (SaaS-Interface Concept A)

## Ziel
Verwandle die aktuelle Website in ein **SaaS-Interface Design** wie Linear/Stripe/Vercel. Die Seite soll aussehen wie ein **Produkt-Dashboard**, nicht wie eine Marketing-Broschüre. Mobile-first.

## Design-Prinzipien
- **Dashboard-Ästhetik**: Status-Indikatoren, Metriken, saubere Grids
- **Dark Theme**: #12121d Background, Blau #4D7CFF als einzige Akzentfarbe, Cyan #29C5F6 als Highlight
- **Kein Violett, kein Lila** – alles auf Blau/Cyan reduziert
- **Glassmorphism**: backdrop-blur auf Karten, semi-transparente Hintergründe
- **Mobile perfekt**: 1-Spalte auf Handy, 2/3/4-Spalten auf Desktop

## Content-Struktur (Reihenfolge)

### 1. HEADER (Header.astro)
- Logo "EO" + einfach-online.dev
- Navigation: Startseite, Leistungen, Blog, Über mich, Kontakt
- CTA "Beratung" Button (rechts)
- **Mobile**: Hamburger-Menü

### 2. HERO (HeroSection.astro)
- **Kinetic Typography**: 4 Zeilen, kommen nacheinander
  - "Ihre Website in der"
  - "Steiermark,"
  - "sichtbar für Google und KI."
  - "Persönlich betreut."
- Subtext: Persönliche Webentwicklung aus der Steiermark
- 2 Buttons: "Projekt starten" (blau) + "Leistungen ansehen" (outline)
- Bento-Badge: "Digital & Flex – Persönlich betreut"
- **Hintergrund**: Morphing Gradient (Blau→Dunkelblau langsam) + Noise Overlay
- **Mobile**: Button-Stack untereinander, Badge bleibt

### 3. LIVE STATUS BAR (NEU – zwischen Hero und Leistungen)
Eine **Status-Leiste** wie bei Linear/Stripe:
```
● SYSTEM ONLINE | EU-HOSTING | KEIN CDN | 100% DSGVO
```
Nur eine Zeile, horizontal scrollend auf mobile. Zeigt sofort: Diese Website ist anders.

### 4. SERVICE-KPI-DASHBOARD (LeistungenSection NEU)
Statt 3 Karten: **4 KPI-Kacheln im Dashboard-Stil**

| Kachel | Inhalt |
|--------|--------|
| 🖥️ **Website erstellen** | Astro/Drupal/Tailwind – Icon + Text + Tags |
| 📈 **SEO & GEO** | Sichtbar in Google + ChatGPT – Icon + Text + Tags |
| 🛡️ **DSGVO & Security** | EU-Hosting, keine US-Dienste – Icon + Text + Tags |
| 🔧 **Wartung & Support** | Monitoring, Updates, 24h – Icon + Text + Tags |

Layout: 2×2 auf Desktop, 2×1 auf Tablet, 1×1 auf Mobile.

### 5. SYSTEM-STATUS-DASHBOARD (SystemStatus.astro)
6 Kacheln im 3×2 Grid:
1. Lokal gehostet ✅
2. Kein Google ✅  
3. EU-Hosting (IONOS) ✅
4. Kein CDN ✅
5. 0% Extern ✅
6. 100% DSGVO ✅
+ Footer-Zeile: SEC_SEED | STANDORT: DE

### 6. PREISE (PricingCards.astro – NEU: Toggle + 4 Karten)
- **Toggle**: "Kaufen & Pflegen" / "Mieten · ALL-IN"
- **Kaufen**: Digital Start (€1.490) + Digital Flex (€2.990) + Online Guardian/Care
- **Mieten**: ALL-IN SMART Start (€149/Monat) + ALL-IN SMART Flex (€199/Monat)
- **Mobile**: Cards untereinander statt nebeneinander

### 7. FAQ (FaqSection.astro)
5 Fragen als details/summary Accordion:
1. Warum Local First?
2. Was kostet eine Website?
3. Wie lange dauert ein Projekt?
4. Brauche ich technische Kenntnisse?
5. Was ist GEO-Optimierung?

### 8. PROCESS TIMELINE (SoLauftEsSection.astro)
Vier Schritte als Timeline (horizontal Desktop, vertikal Mobile):
1. Consultation – Kostenloses Erstgespräch
2. Design – Individueller Entwurf
3. SEO Setup – Optimierung vor Livegang
4. Launch & Growth – Überwachung + Optimierung

### 9. ÜBER MICH (UeberMichSection.astro)
Split-Screen: Links Text, rechts EO-Logo-Visual
- "Persönliche Betreuung statt Callcenter"
- Philipp Schlemmer – Webentwickler & SEO aus Gleisdorf
- Tags: Astro, Drupal, Tailwind, SEO & GEO

### 10. KONTAKT (KontaktSection.astro)
- Split: Links Kontaktinfos (E-Mail, Telefon), Rechts Kontaktformular
- Formular: Name, Email, Betreff, Nachricht + Honeypot + DSGVO-Checkbox

### 11. FOOTER (Footer.astro)
- Brand + Beschreibung
- Navigation
- Rechtliches: Impressum, Datenschutz, AGB
- © 2026 + Hosting/Email Hinweis

### 12. STICKY MOBILE CTA (Layout.astro)
- Fixed unten auf Mobile: "Kostenloses Erstgespräch" Button
- Nur sichtbar auf < lg (Mobile/Tablet)

### 13. COOKIE BANNER (CookieBanner.astro)
- Fixed bottom-center Modal
- "Nur notwendige" + "Alle akzeptieren"
- Hinweis auf Plausible Analytics Opt-in

## Technische Umsetzung

### Dateien die überschrieben werden MÜSSEN:
1. `src/pages/index.astro` – Komplette Seite mit allen Imports
2. `src/layouts/Layout.astro` – Noise-Overlay, Sticky CTA, Meta-Tags
3. `src/components/HeroSection.astro` – Komplett neu
4. `src/components/Header.astro` – Mobile Menu optimieren  
5. `src/components/Footer.astro` – Unverändert lassen
6. `src/components/LeistungenSection.astro` – 4 KPI-Kacheln statt 3
7. `src/components/SystemStatus.astro` – Bestehen lassen (schon gut)
8. `src/components/FaqSection.astro` – Bestehen lassen (schon gut)
9. `src/components/PricingCards.astro` – Toggle verbessern
10. `src/components/SoLauftEsSection.astro` – Timeline verbessern
11. `src/components/UeberMichSection.astro` – Optimieren
12. `src/components/KontaktSection.astro` – Optimieren
13. `src/styles/global.css` – Alle Styles konsolidieren

### Neue Dateien:
- `src/components/StatusBar.astro` – Live Status Bar (NEU)

### Wichtig: KEINEN Content vergessen!
- Alle Texte bleiben erhalten
- Nur Layout+Design ändern sich
- Impressum, Datenschutz, AGB Seiten bleiben unverändert (bereits aktualisiert)

### Mobile-first Umsetzung:
- Default: 1 Spalte
- sm (640px): 2 Spalten
- md (768px): 2-3 Spalten  
- lg (1024px): 3-4 Spalten
- Tailwind: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Abstände: `gap-4 sm:gap-6 lg:gap-8`

### WICHTIGE REGELN:
1. **KEIN Violett (#9B59F6 o.ä.)** – nur Blau #4D7CFF + Cyan #29C5F6
2. **Mobile zuerst denken** – alles muss auf 390px funktionieren
3. **Glassmorphism**: `backdrop-filter: blur(12px)` + semi-transparent backgrounds
4. **Kein Inline-CSS** – alles über global.css + Tailwind-Klassen
5. **Animationen**: Nur CSS @keyframes + IntersectionObserver (kein schweres JS)

## Vorgehen
1. `opencode run` für JEDE einzelne Datei
2. Erst globale Änderungen (CSS, Layout), dann Komponenten
3. `npm run build` am Ende
