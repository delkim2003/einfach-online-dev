# 🎨 Design Refresh – einfach-online.dev (2026 Dark Editorial Tech)

**Konzept:** Dark Premium trifft Editorial Design – präzise, persönlich, performant.
**Tool:** OpenCode mit `openrouter/z-ai/glm-5.2`

---

## 1. Farb-Konsolidierung

**ALT:** 3 Akzentfarben (Blau #4D7CFF, Violett #9B59F6, Cyan #29C5F6)
**NEU:** 1 Hauptfarbe + 1 Highlight

| Rolle | Farbe | Hex | Einsatz |
|-------|-------|-----|---------|
| **Primary** | Blau | `#4D7CFF` | Buttons, Links, Icons, CTAs |
| **Highlight** | Cyan | `#29C5F6` | Nur für Badges, "NEU"-Marker, besondere Highlights |
| **Background** | Dark | `#12121d` | Bleibt |
| **Surface** | Darker | `#1A1A2E` | Bento-Tiles, Karten |
| **Text Primary** | White | `#FFFFFF` | Überschriften |
| **Text Secondary** | Grey | `text-gray-400` | Fließtexte |

**Violett (#9B59F6) komplett entfernen** – alles auf Blau umstellen.

---

## 2. Glassmorphism für Bento-Tiles

Alle `.bento-tile` Klassen bekommen einen **Glas-Effekt**:

```css
.bento-tile {
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(77, 124, 255, 0.08);
  transition: all 0.3s ease;
}

.bento-tile:hover {
  border-color: rgba(77, 124, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(77, 124, 255, 0.08);
}
```

---

## 3. Kinetic Typography in Hero

Die Hero-Headline ("Ihre Website in der Steiermark, sichtbar für Google und KI. Persönlich betreut.") wird animiert:

- Jeder Satz erscheint nacheinander (Stagger)
- Wörter gleiten von unten herein (translateY 20px → 0)
- `gradient-text` (`span.gradient-text`) pulsiert sanft

**Kein schweres JS – CSS @keyframes + IntersectionObserver.**

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-line { animation: slideUp 0.6s ease forwards; opacity: 0; }
.hero-line:nth-child(1) { animation-delay: 0.1s; }
.hero-line:nth-child(2) { animation-delay: 0.3s; }
.hero-line:nth-child(3) { animation-delay: 0.5s; }
.hero-line:nth-child(4) { animation-delay: 0.7s; }
```

---

## 4. Noise/Grain Texture Overlay

Ein **unsichtbares SVG-Filter-Overlay** über dem gesamten Background:

```html
<!-- In Layout.astro, direkt nach <body> -->
<svg class="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-[0.03]" aria-hidden="true">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)"/>
</svg>
```

⚠️ Wichtig: `z-index` so setzen, dass es über dem Background aber UNTER allem Content liegt.

---

## 5. DSGVO/System-Status-Dashboard (Neue Sektion)

Nach den Leistungen, vor "So läuft's" – eine **kompakte Status-Ansicht**:

```
┌──────────────────────────────────────────┐
│  🛡️ SYSTEM // AKTIV                      │
│                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ ✅ Lokal │ │ ✅ Kein  │ │ ✅ EU-   │ │
│  │   hostet │ │   CDN    │ │   Hosting│ │
│  └──────────┘ └──────────┘ └──────────┘ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ ✅ Kein  │ │ ✅ 0%    │ │ ✅ 100%  │ │
│  │   Google │ │  extern  │ │  DSGVO   │ │
│  └──────────┘ └──────────┘ └──────────┘ │
│                                          │
│  SEC_SEED: 0x4A8E55  |  STANDORT: DE    │
└──────────────────────────────────────────┘
```

6 kleine Bento-Kacheln im 3×2 Grid. Zeigt live, dass die Seite keine externen Abhängigkeiten hat. **Das ist der Wow-Faktor.**

---

## 6. Preis-Toggle (Kaufen/Mieten) auf /leistungen

Die PricingCards.astro bekommt einen Toggle-Button über den Preisen:

**ALT:** Nur "Kaufen"-Ansicht  
**NEU:** Zwei Buttons "Kaufen & Pflegen" / "Mieten · ALL-IN"

- **Kaufen:** zeigt die aktuellen Einmalpreise + Online Guardian/Care
- **Mieten:** zeigt ALL-IN SMART: €149–199/Monat + €399 Bereitstellung

Einfacher CSS-Toggle (active-Klasse), kein JS-State nötig.

---

## 7. FAQ-Accordion auf Startseite

Komponente `FaqSection.astro` mit 5 Fragen/Antworten:

1. **"Warum Local First?"** – Keine Google-Schriften, kein CDN, keine Tracker
2. **"Was kostet eine Website?"** – €1.490–€4.490 je nach Paket
3. **"Wie lange dauert ein Projekt?"** – 2–4 Wochen je nach Umfang
4. **"Brauche ich technische Kenntnisse?"** – Nein, ich kümmere mich um alles
5. **"Was ist GEO-Optimierung?"** – Sichtbarkeit in KI-Suchmaschinen

Einfaches Accordion per details/summary HTML-Element – kein JS nötig, barrierefrei.

---

## 8. Sticky Mobile CTA

In `Layout.astro`, ein **fixierter Button** der nur auf mobile (< lg) erscheint:

```html
<div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#12121d] via-[#12121d]/90 to-transparent z-50 lg:hidden">
  <a href="/kontakt" class="w-full block text-center py-3 bg-[#4D7CFF] hover:bg-[#3d6aee] text-white font-semibold rounded-xl transition-all">
    Kostenloses Erstgespräch
  </a>
</div>
```

⚠️ Body-Padding unten auf mobile erhöhen (pb-20 oder pb-24) damit Content nicht hinter dem Button verschwindet.

---

## 9. Scroll-Animationen verbessern

Bestehende `.animate-on-scroll` Klassen verbessern:

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

Statt einfachem Fade-in: **Scale + TranslateY** für einen "Wachsen"-Effekt.

---

## 10. Asymmetrische Layouts

Hero-Container: Text links (+Bento-Badge), kein zentrierter Text. Mehr Whitespace auf großen Screens.

**Sektionen abwechseln:** Text|Bild – Bild|Text – Vollbreite – Text|Bild. Rhythmus reinbringen.

---

## 🎯 Priorisierung (muss in den Build)

| # | Feature | Datei(en) | Aufwand |
|---|---------|-----------|:-------:|
| 1 | Glassmorphism CSS | `global.css` | Gering |
| 2 | Noise Texture | `Layout.astro` + CSS | Gering |
| 3 | Kinetic Typography | `HeroSection.astro` + CSS | Mittel |
| 4 | DSGVO/System-Dashboard | Neue `SystemStatus.astro` + `index.astro` | Mittel |
| 5 | FAQ-Accordion | Neue `FaqSection.astro` + `index.astro` | Mittel |
| 6 | Sticky Mobile CTA | `Layout.astro` + CSS | Gering |
| 7 | Farb-Konsolidierung | Alle Komponenten | Gering |
| 8 | Preis-Toggle | `PricingCards.astro` + `leistungen.astro` | Mittel |
| 9 | Scroll-Animationen | `global.css` + JS | Gering |
| 10 | Hero asymmetrisch | `HeroSection.astro` + CSS | Gering |

---

## 📁 Projektstruktur

```
src/
├── components/
│   ├── HeroSection.astro      ← Kinetic Typography
│   ├── LeistungenSection.astro ← Glassmorphism
│   ├── SystemStatus.astro     ← NEU: DSGVO-Dashboard
│   ├── FaqSection.astro       ← NEU: FAQ-Accordion
│   ├── SoLauftEsSection.astro ← Glassmorphism
│   ├── UeberMichSection.astro ← Glassmorphism
│   ├── KontaktSection.astro   ← Glassmorphism
│   ├── PricingCards.astro     ← Preis-Toggle
│   ├── Header.astro           ← Farb-Konsolidierung
│   ├── Footer.astro           ← Farb-Konsolidierung
│   ├── CookieBanner.astro     ← unverändert
├── layouts/
│   └── Layout.astro           ← Noise Texture, Sticky CTA, globale Styles
├── pages/
│   ├── index.astro            ← SystemStatus + FaqSection einbinden
│   └── leistungen.astro       ← Pricing-Toggle
└── styles/
    └── global.css             ← Glassmorphism, Kinetic-Typography, Animationen
```

---

## ✅ Nach der Implementierung

1. `npm run build` ausführen
2. Prüfen ob `dist/` sauber generiert wurde
3. Kurze Zusammenfassung hinterlassen
