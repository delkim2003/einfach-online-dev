# einfach-online.dev

**Webdesign aus der Steiermark — für KMUs mit Anspruch.**

Moderne, DSGVO-konforme Websites für kleine und mittlere Unternehmen. Local First. Performance Driven. Privacy Centric.

---

## Tech Stack

| Bereich | Technologie |
|---------|-------------|
| Framework | [Astro](https://astro.build) (Static Site Generation) |
| UI | React 19 + [Framer Motion](https://motion.dev) |
| Styling | Tailwind CSS v4 |
| Icons | [Lucide React](https://lucide.dev) |
| Hosting | IONOS Webhosting (EU) |
| Formular | Eigenes PHP-Backend (SMTP via Zoho) |

## Features

- **Aurora Text** — Magic UI inspirierten Farbverlaufseffekt auf Hero-Headline
- **Security Console** — Live-Übersicht aller geladenen Assets (lokal vs. extern)
- **Prinzipien-Tabs** — Interaktive Tab-Navigation für Unabhängig, Sicher, Schnell
- **Terminal-ÜberMich** — Stilisierte Terminal-Darstellung
- **Scroll-Animationen** — IntersectionObserver-basiertes Einblenden
- **Cookie-frei vor Opt-In** — Kein Tracking, keine externen CDNs
- **DSGVO-konform** — EU-Hosting, keine US-Tools, kein Google Fonts

## Seitenstruktur

```
/public          → Statische Assets (Bilder, Fonts, Scripts)
/src/
  components/    → Astro- & React-Komponenten
  layouts/       → Layout-Vorlagen
  pages/         → Routen (index, leistungen, faq, kontakt, …)
  styles/        → Globales CSS
  lib/           → Hilfsfunktionen
  icons/         → Eigene Icon-Komponenten
```

## Entwicklung

```bash
# Installieren
npm install

# Dev-Server starten
npm run dev

# Produktions-Build
npm run build

# Build lokal previewen
npm run preview
```

## Deployment

Build via `npm run build` → `dist/`-Ordner via FTP/SSH auf IONOS-Webspace hochladen.

## Über

Ein-Personen-Agentur von **Philipp Schlemmer** aus Gleisdorf, Steiermark.  
15+ Jahre Webentwicklung. Fokus auf DSGVO, Performance und persönliche Betreuung.

[info@einfach-online.dev](mailto:info@einfach-online.dev)
