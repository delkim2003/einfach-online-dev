# QA-Report: einfach-online.dev Homepage

**Datum:** 23.06.2026  
**Geprüft von:** Athena (Design-QA Agent)  
**Getestete URL:** http://localhost:4321  
**Viewports:** Desktop 1280×720 | Mobile 390×844  
**Build:** Astro SSG (dist)

---

## 🟢 Bestandene Prüfungen (✅)

### 1. Header / Navigation (Desktop)
| Prüfung | Status |
|---|---|
| Navigationslinks (Leistungen, Über mich, Kontakt) sichtbar | ✅ 3 Links |
| CTA-Button "Gratis Erstgespräch" sichtbar | ✅ |
| Logo vorhanden und verlinkt | ✅ |
| Hamburger auf Desktop ausgeblendet | ✅ `display: none` |
| Mobile-Panel auf Desktop ausgeblendet | ✅ `display: none` |

### 2. Hero-Bereich
| Prüfung | Status |
|---|---|
| Bergfoto geladen (`/images/hero-berg.jpg`) | ✅ |
| Headline "Einfach online." mit farbigem "online." | ✅ |
| Subtext "Webdesign aus der Steiermark..." | ✅ |
| 2 CTAs: "Gratis Erstgespräch" + "Leistungen ansehen" | ✅ |
| Scroll-Indikator (Pfeil + "Scrollen") | ✅ |
| Hero-Höhe = Viewport (100vh, min 600px) | ✅ 720px |

### 3. Leistungen-Sektion
| Prüfung | Status |
|---|---|
| 3 Cards: Webdesign, Webentwicklung, SEO & GEO | ✅ |
| 3-Spalten-Grid auf Desktop (`352px 352px 352px`) | ✅ |
| Icons pro Card vorhanden | ✅ |
| Hover-Effekte (Border + Shadow) | ✅ |

### 4. Über mich-Sektion
| Prüfung | Status |
|---|---|
| 2-Spalten-Layout auf Desktop (`520px 520px`) | ✅ |
| Platzhalter für Porträtfoto | ✅ (SVG + Hinweistext) |
| Überschrift "Hallo, ich bin Philipp." | ✅ |
| Gradient-Linie unter Überschrift | ✅ |
| Hintergrundfarbe `#F8FAFC` (slate-50) | ✅ |

### 5. Prozess-Sektion
| Prüfung | Status |
|---|---|
| 4 Schritte im 4-Spalten-Grid auf Desktop | ✅ |
| Verbindungslinie zwischen Schritten | ✅ (2px, slate-200) |
| "So einfach geht's"-Überschrift | ✅ |
| Überschrift + Beschreibungstext | ✅ |

### 6. FAQ-Sektion
| Prüfung | Status |
|---|---|
| 5 FAQ-Items vorhanden | ✅ |
| Accordion-Funktionalität per Klick | ✅ (Toggle funktioniert) |
| Nur ein Item gleichzeitig offen | ✅ |
| Erste Frage vorab geöffnet | ✅ |
| Chevron-Icons rotieren bei Open/Close | ✅ |

### 7. Pricing-Sektion
| Prüfung | Status |
|---|---|
| 3 Tarife: Digital Start, Digital Flex, Digital Flex+ | ✅ |
| "Empfohlen"-Badge vorhanden | ✅ 1 Badge |
| Preise + Leistungsliste | ✅ |

### 8. Kontakt-Sektion
| Prüfung | Status |
|---|---|
| Kontaktformular vorhanden | ✅ |
| Felder: Name, E-Mail, Nachricht | ✅ |
| Honeypot-Spamschutz | ✅ (off-screen position) |
| Submit-Button "Nachricht senden" | ✅ |
| Formular-Layout sauber | ✅ |

### 9. Footer
| Prüfung | Status |
|---|---|
| Footer existiert | ✅ |
| Hintergrundfarbe dunkel (`#0F172A` = slate-900) | ✅ |
| 14 Links (Logo, Start, Leistungen, Über mich, Kontakt, Services, Blog, Kontaktdaten, Impressum, Datenschutz, AGB) | ✅ |
| Kontaktdaten (E-Mail + Telefon) | ✅ |

### 10. Technische Prüfungen
| Prüfung | Status |
|---|---|
| Console-Fehler | ✅ **Keine Fehler** |
| Alle Sektionen sichtbar (opacity:1) | ✅ Alle 7 Sektionen |
| Build erfolgreich | ✅ (dist existiert) |
| Anchor-Links (#) alle gültig | ✅ 16/16 |
| H1-Tag vorhanden | ✅ "Einfach online." |
| Meta-Description vorhanden | ✅ |
| OG-Tags vorhanden | ✅ |
| Robots-Tag: index, follow | ✅ |
| Canonical-Link | ✅ |

### 11. Responsive (Mobile 390px)
| Prüfung | Status |
|---|---|
| Hamburger-Menü sichtbar (Desktop-Nav versteckt) | ✅ |
| Hamburger öffnet Mobile-Panel | ✅ (CSS-Checkbox-Toggle) |
| Mobile-Panel mit 4 Links (inkl. CTA) | ✅ |
| Alle Sektionen passen in Viewport (kein Overflow) | ✅ |
| Hero: Zentrierte Ausrichtung | ✅ |
| Leistungen: Single-Column | ✅ |
| Über mich: Single-Column | ✅ |
| Prozess: Single-Column | ✅ |
| Pricing: Single-Column | ✅ |
| Cookie-Banner: Im DOM vorhanden | ✅ |

---

## 🔴 Nicht bestandene Prüfungen (❌)

### ❌ KRITISCH: Cookie-Banner nicht sichtbar
**Problem:** Der Cookie-Banner (`#cookie-banner`) ist im DOM vorhanden, aber **unsichtbar** (`opacity: 0`, `transform: translate(-50%) translateY(20px)`). Die Klasse `.is-visible` wird nie hinzugefügt.

**Ursache:** Das Script `cookie-banner.js` versucht, die Sichtbarkeit über Tailwind-Klassen (`translate-y-0`, `opacity-100`) zu steuern. Die scoped Component-CSS (`.alp-cookie[data-astro-cid-fzbxxtek]`) hat jedoch **höhere Spezifität** (0,2,0 vs 0,1,0) und definiert den Basis-State mit `transform: translate(-50%) translateY(20px)`. Die Tailwind-Klassen können nicht überschreiben.

**Auswirkung:** Besucher der Website sehen **niemals** den Cookie-Consent-Banner. DSGVO-Verstoß!

### ❌ KRITISCH: Keine DSGVO-Checkbox im Kontaktformular
**Problem:** Das Kontaktformular hat **keine Checkbox** zur Zustimmung der Datenschutzerklärung. Nach DSGVO Art. 6 Abs. 1 lit. a und § 13 TMG ist eine aktive Einwilligung zur Datenverarbeitung erforderlich.

**Formularfelder:** Name, E-Mail, Nachricht, Submit — aber kein `input[type=checkbox]` für "Datenschutzerklärung zur Kenntnis genommen".

**Auswirkung:** Rechtsunsicherheit bei der Verarbeitung personenbezogener Daten. Potenziell abmahnfähig.

### ❌ KRITISCH: SEO-Title enthält "einfach-online.dev" doppelt
**Problem:** `<title>einfach-online.dev | Webdesign aus der Steiermark | einfach-online.dev</title>`  
Der Domain-Name kommt sowohl am Anfang als auch am Ende vor.

**Sollte sein:** `Webdesign aus der Steiermark | einfach-online.dev` oder `einfach-online.dev | Webdesign aus der Steiermark`

### ❌ FAQ: Antworten bei geschlossenen Items aus DOM entfernt
**Problem:** Wenn ein FAQ-Item geschlossen ist, wird das Antwort-`<div>` komplett aus dem DOM entfernt (nicht nur per CSS versteckt).

**Auswirkungen:**
- **SEO:** Suchmaschinen indexieren nur die erste (offene) FAQ-Antwort
- **Performance:** DOM wird bei jedem Klick neu aufgebaut
- **Accessibility:** Screenreader können geschlossene Inhalte nicht erfassen

**Besser:** Antworten per CSS aus-/einblenden (max-height, opacity), aber im DOM belassen.

### ❌ Kosmetisch: Porträt-Platzhalter statt Foto
**Problem:** In der "Über mich"-Sektion wird nur ein SVG-Platzhalter mit "Porträtfoto folgt" angezeigt. Kein echtes Porträtfoto.

**Auswirkung:** Vertrauensbildendes Element fehlt. Personal Branding leidet.

---

## ⚡ Kritische Mängel (Sofort fixen)

| # | Problem | Priorität | Fix-Aufwand |
|---|---|---|---|
| 1 | **Cookie-Banner unsichtbar** (Spezifitätskonflikt CSS) | 🔴 Hoch | Gering (CSS-Fix oder JS-Anpassung) |
| 2 | **Keine DSGVO-Checkbox** im Kontaktformular | 🔴 Hoch | Gering (HTML-Input hinzufügen) |
| 3 | **SEO-Title doppelt** (Domain 2x genannt) | 🟡 Mittel | Gering (Meta-Title anpassen) |

## 🟡 Kosmetische Mängel (Später fixen)

| # | Problem | Priorität | Fix-Aufwand |
|---|---|---|---|
| 4 | **FAQ-Antworten** bei geschlossenen Items aus DOM entfernt | 🟡 Mittel | Mittel (JS-Logik anpassen) |
| 5 | **Kein Porträtfoto** (nur SVG-Platzhalter) | 🟡 Niedrig | Mittel (Foto schießen + einbinden) |

---

## 📊 Gesamteindruck

| Kriterium | Bewertung |
|---|---|
| **Layout / Design** | ⭐⭐⭐⭐⭐ (1) |
| **Responsive** | ⭐⭐⭐⭐⭐ (1) |
| **Inhalt / Text** | ⭐⭐⭐⭐ (2) |
| **DSGVO / Rechtliches** | ⭐⭐ (4) |
| **Technik / Performance** | ⭐⭐⭐⭐ (2) |
| **Gesamtnote** | **2–3** |

### Stärken
- Sehr sauberes, modernes Design mit konsistentem Farbschema
- Durchdachte Typografie und Abstände
- Exzellentes responsive Verhalten (alle Sektionen stacken korrekt)
- Keine Console-Fehler, schnelle Ladezeit
- Honeypot-Spamschutz implementiert
- Semantisch korrektes HTML (Sections, Überschriften-Hierarchie)

### Schwächen
- **DSGVO-Mängel** (Cookie-Banner unsichtbar + keine Checkbox im Formular) sind die schwerwiegendsten Probleme
- SEO-Title doppelt (einfach zu fixen)
- FAQ-Antworten für SEO optimierbar

### Fazit
Die Homepage ist **visuell und technisch sehr gut umgesetzt**. Das Design ist professionell, das responsive Verhalten einwandfrei. **ABER:** Die DSGVO-Probleme (Cookie-Banner unsichtbar, fehlende Checkbox) müssen **vor dem Livegang** behoben werden — hier drohen rechtliche Konsequenzen. Mit diesen Fixes ist die Seite bereit für die Auslieferung.

---

## 📸 Screenshots (in `qa_screenshots/`)
- `desktop_fullpage_1280.png` — Desktop-Komplettansicht
- `mobile_fullpage_390.png` — Mobile-Komplettansicht
- `mobile_viewport_390.png` — Mobile-Viewport
