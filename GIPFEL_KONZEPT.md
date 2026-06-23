# 🏔️ GIPFEL — Design-Konzept für einfach-online.dev
### Athena | 23. Juni 2026

---

## 1. Vision — Was ist die Idee?

**«Gipfel» ist ein luftiges, editorielles Design, das die Klarheit eines steirischen Bergmorgens in die digitale Welt übersetzt.**

Der Berg ist nicht Dekoration, sondern **Bühne**. Als fotorealistisches Hero-Element verankert er die Marke visuell in der Steiermark — ohne Kitsch, ohne Pathos. Die EO-Farben Blau (#4D7CFF) und Cyan (#22d3ee) durchziehen das gesamte Design als primäre Akzente, während viel Weißraum, eine reduzierte Sans-Serif-Typografie (Inter/DM Sans) und ein klares Raster dem Ganzen eine professionelle, ruhige Autorität verleihen.

**Wie fühlt es sich an?** Wie der erste Kaffee auf einer Berghütte um 7 Uhr morgens: wach, klar, voller Vorfreude. Die Sonne scheint, die Luft ist frisch, der Gipfel ist nah. Nichts drückt, nichts blinkt, nichts lenkt ab. Hier wird gearbeitet — aber mit Leichtigkeit.

## 2. Was ist anders (vs. die 7 Fehlversuche)?

| Vorher (Fehler) | Nachher (Gipfel) |
|---|---|
| Dark Mode, nachtblau (#0F172A) | **Hell**, weiß + off-white |
| CSS-Polygon als Berg | **Fotorealistischer Berg** (Grimming/Hochschwab/Schöckl) |
| Sternenhimmel, Glow-Effekte, Partikel | **Klare Bergfotografie**, ruhiger Himmel |
| Text überlagert Berg (überlappend) | **Berg ist Hintergrund**, Text daneben (editorial) |
| Navigation in Blau/Grau | **Transparent → weißer Header bei Scroll** |
| Dekorative Berg-SVG-Sektionstrenner | **Nur Weißraum als Trenner** |
| Verspielt, atmosphärisch | **Reduziert, professionell, seriös** |

## 3. Farbpalette — Kern

| Rolle | Farbe | Hex |
|---|---|---|
| **Primär (E)** | EO-Blau | `#4D7CFF` |
| **Primär (O)** | EO-Cyan | `#22d3ee` |
| Hintergrund | Weiß | `#FFFFFF` |
| Sektions-Hintergrund | Off-White | `#F8FAFC` |
| Überschrift-Text | Dark | `#0F172A` |
| Fließtext | Slate | `#334155` |
| Muted/Secondary | Gray | `#64748B` |

## 4. Typografie

**Headings:** `Inter` (oder `DM Sans`), ExtraBold 800 / Bold 700
**Body:** `Inter`, Regular 400
**UI/Navigation:** `Inter`, Medium 500 / SemiBold 600

Hero-H1: `clamp(3.5rem, 7vw, 6rem)` — Linksbündig auf Desktop, zentriert auf Mobil
Section-H2: `clamp(2rem, 3.5vw, 2.75rem)` — Mit kurzem EO-Farbstrich als Eyebrow
Body: `clamp(1rem, 1.2vw, 1.125rem)` — Max-Breite 65 Zeichen

## 5. Layout

- **Hero:** 100vh. Bergfoto als Full-Bleed-Background. Links der Textblock (50% Breite), rechts der Gipfel. Sanftes weißlich-blaues Overlay (opacity ~0.85).
- **Leistungen:** 3 Cards, weiß, border-radius 16px, mit EO-farbigen Icons
- **Über mich:** Portraitfoto + Text, 50/50 Split, editorial
- **Prozess:** 4 Schritte horizontal (Desktop), vertikal (Mobil), EO-Blau als Schritt-Zahlen
- **Pricing:** 3 Spalten, mittlere Karte als «Empfohlen» mit EO-Cyan Badge
- **FAQ:** Accordion-Stil, offener Zustand mit EO-Blau Akzent
- **Kontakt:** 2-Spalte (Formular links, Info rechts)
- **Footer:** Dunkel (#0F172A), heller Text, 4 Spalten

## 6. Der Berg — konkret

**Empfohlenes Motiv:** Der **Grimming** im Morgenlicht — vom Ennstal aus fotografiert. Alternativ: **Schöckl** bei Graz (Nähe zum Standort des Kunden in Gleisdorf) oder **Hochschwab** mit grünen Almwiesen.

**Bildanforderung:**
- Hochsommer/Frühherbst, Morgensonne (goldene Stunde)
- Blauer Himmel mit leichten weißen Wolken
- Grüne Wiesen im Vordergrund
- Kein Nebel, kein Regen, keine Dämmerung
- Mindestens 1920x1080px, besser 3840x2160px
- Freie Nutzung (oder eigene Aufnahme von Philipp)

**Style:** Fotorealistisch mit sanftem EO-Overlay (nicht farbig, eher wie ein leichter Blaustich/Filter, der die Blautöne des Himmels betont). Die grünen Wiesen bleiben grün — das ist der einzige «Steiermark»-Farbhinweis.

## 7. Mobile-first Prinzip

- **390px:** Headline zentriert, 2.2rem. Berg auf den Gipfel fokussiert. Buttons gestapelt (full-width).
- **768px:** Text links, Buttons nebeneinander. Breiterer Bildausschnitt.
- **1024px+:** Volle editoriale Breite. Text 50%, Berg als heroische Kulisse.

---

*«Klar wie die Bergluft. Digital wie das EO.»*
— Philipps neuer Claim (Vorschlag)
