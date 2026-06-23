# ATHENA BRIEFING — "Wofür wir stehen" Sektion (Prinzipien)

## PROJEKT-KONTEXT

**Projekt:** einfach-online.dev — Eigenständiger Relaunch der 1-Person-Agentur-Webseite von Philipp Schlemmer.

**Tech-Stack:**
- Astro SSG (Static Site Generation)
- React + Framer Motion für interaktive Komponenten
- Tailwind CSS (Alpine EO-Theme)
- IONOS Webhosting (kein Docker, kein CDN)

**Design-System (Alpine EO):**
- **Hintergrund:** #F0F4F8 (hell, alpin)
- **Primärfarbe:** #4D7CFF (EO-Blau)
- **Sekundärfarbe:** #22d3ee (Cyan, für Akzente/Speed)
- **Text:** #0F172A (dunkel), #475569 (mittel), #94A3B8 (hell)
- **Cards/Container:** white (#FFFFFF), border #E2E8F0, shadow-[0_4px_24px_rgba(0,0,0,0.06)]
- **Schrift:** Geist (eigengehostet, kein Google Fonts)
- **Stil:** Clean, hell, großzügiges Whitespace, abgerundete Ecken (rounded-xl), minimale Schatten
- **Vibe:** Stripe/Linear/Apple Niveau — **nicht kindisch, nicht verspielt**

## SEKTION: "Wofür wir stehen" (Philosophie/Prinzipien)

**Location:** Auf der Startseite, direkt nach der Hero-Section.
**ID:** `#philosophie`
**Layout:** 3 Tabs (Tab-Navigation oben, Inhalt darunter)

### Tab-Struktur

Jeder Tab hat ein **2-Spalten-Layout:**
- **Links (lg:col-span-3):** Textblock (Überschrift + Beschreibung + 4 Bulletpoints) in weißer Card
- **Rechts (lg:col-span-2):** Animiertes Visual in weißer Card (zentriert, ca. 240x240px)

### Tab 1: Unabhängig

**Text-Content:**
- Überschrift: "Unabhängig"
- Subtext: "Ihre Website läuft ohne Google, Amazon & Co. – echte digitale Souveränität für Ihr Unternehmen."
- 4 Bulletpoints: (1) Lokale Fonts – kein Google Fonts CDN (2) Kein CDN – alle Ressourcen vom eigenen Server (3) Kein Google-Tracking (4) Puristisches CSS – kein jQuery, kein Bootstrap

**Visual-Konzept:**
- Zentraler Server (Rechteck mit Rack-Linien + Status-LEDs)
- Leuchtend blaue Pulse/Ringe um den Server (Daten fließen nach innen)
- 4 äußere Knoten (Cloud, Globe, API, Tracking) — **rot durchgestrichen**, Verbindungslinien rot/dashed
- Geschlossener Kreis-Pfeil-Orbit um den Server (Autarkie-Symbol)
- Badge unten: "100% autark"

**Farben:** Server=#4D7CFF, Pulse=#22d3ee, Verboten=#EF4444

### Tab 2: Sicher

**Text-Content:**
- Überschrift: "Sicher"
- Subtext: "Ihre Kundendaten bleiben in Europa. DSGVO-konform von Grund auf."
- 4 Bulletpoints: (1) DSGVO by Design (2) EU-Rechenzentrum – Österreich (3) Cookie-frei (4) Kein US-Transfer

**Visual-Konzept:**
- EU-Schild mit 12 goldenen Sternen im Kreis (Sternenkranz rotiert langsam)
- Schloss (Bügel + Körper) auf dem Schild
- Grün pulsierender Glow (#10B981) — Sicherheit
- Checkmark-Haken der sich animiert einblendet (#10B981)
- Sanfte Wellen (Vertrauen)
- Badge unten: "DSGVO-konform"

**Farben:** Schild=#4D7CFF, Glow=#10B981, Goldsterne=#E8B84B/#F4D58A

### Tab 3: Schnell

**Text-Content:**
- Überschrift: "Schnell"
- Subtext: "Performantes Hosting in deutschen Rechenzentren – für höchste Ladegeschwindigkeit."
- 4 Bulletpoints: (1) Schnelle Ladezeit <1s (2) Statisches Rendering/SSG (3) Mobil optimiert (4) CDN-frei

**Visual-Konzept:**
- Speed-Gauge (Tachometer/Halbkreis) der sich von 0 auf ~95% füllt
- Zentrale große Ziffer "95" + "SCORE" darunter
- Blitz-Symbol (#4D7CFF → #22d3ee) über dem Gauge, pulsierend
- Kleine Metrik-Balken darunter (FCP, LCP, TBT)
- Funken/Performance-Partikel (#22d3ee)
- Badge unten: "Lighthouse 95+"

**Farben:** Gauge=#4D7CFF→#22d3ee→#67E8F9, Blitz=#4D7CFF→#22d3ee, Partikel=#22d3ee

### Tab-Wechsel-Verhalten

- CSS-only Tab-Wechsel mit Fade-In-Animation (0.4s cubic-bezier(0.22, 1, 0.36, 1))
- Aktiver Tab: blaue Schrift (#4D7CFF) + hellblauer Hintergrund (rgba(77,124,255,0.08))
- Inaktive Tabs: graue Schrift (#94A3B8)
- Tastatur-Navigation (Pfeiltasten) funktioniert im bestehenden Code

## AKTUELLER ZUSTAND DER VISUALS (was ersetzt werden soll)

**Die existierenden 3 Visuals (`VisualUnabhaengig.jsx`, `VisualSicher.jsx`, `VisualSchnell.jsx`) sind reine SVG + Framer Motion — keine externen Assets/Bilder. Der Kunde fand sie "kindisch" und will professionellere Alternativen.**

Mögliche Ansätze für Google Stitch:
1. **SVG-basierte Illustrationen** (wie bisher, aber hochwertiger — Stripe/Linear-Niveau)
2. **Mini-3D/Isometrische Grafiken** (z.B. isometrischer Server, isometrisches EU-Schild)
3. **Abstrakte geometrische Animationen** (geometrische Formen, Linien, Punkte, die die Konzepte darstellen)
4. **Data-Visualisierungs-Style** (Sicher = Zertifikat-artig, Schnell = Dashboard-Gauge)

**WICHTIG:** Die Visuals müssen als animierte SVG/React-Komponenten exportierbar sein (Framer Motion ready). Stitch liefert das Layout/Design — die Animation wird nachgelagert via Framer Motion umgesetzt.

## ZIELPERSONA

- KMU-Betreiber (50+ Jahre)
- Wertet: Sicherheit, Zuverlässigkeit, regionale Nähe
- Misstraut: Google, US-Konzerne, Tracking, Cookie-Banner
- Entscheidungskriterium: "Macht der das für mich persönlich?"

## BRAND-VOICE

- **Ton:** Vertrauensvoll, klar, bodenständig
- **Keine:** Superlative, Jugendsprache, übertriebene Metaphern
- **Stattdessen:** Präzise beschreiben was anders ist

## GEWÜNSCHTER STITCH-OUTPUT

Bitte gib mir:
1. **Google Stitch Prompt** — copy-paste-fähig für Google Stitch
2. **JSON-Design-Briefing** — für Code-Export
3. **Nach Export:** Lege die Dateien unter `01_Design/Philosophie/` ab

Der Stitch Prompt sollte beschreiben:
- 3 visuelle Konzepte nebeneinander oder als Tabs (pro Tab ein Visual)
- Alpine EO-Design: hell, sauber, viel Whitespace
- Card-basiert mit weißen Boxen, leichten Schatten
- Farbpalette wie oben definiert
- **Keine Cartoons, keine kindischen Grafiken, keine Emojis**
