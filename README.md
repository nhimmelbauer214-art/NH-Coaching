# NH Coaching – statische Website

Dateien: `index.html`, `styles.css`, `script.js` (Texte DE im HTML, EN oben in `script.js`), `assets/images/`, `legal/*.html`, `IMAGE-SELECTION.md`.

- **Bilder:** `assets/images/` (WebP); Pfade sind relativ und funktionieren auch unter einem GitHub-Pages-Unterpfad.
- **Preis/Angebot:** Abschnitt `#angebot` in `index.html` (+ EN-Texte `o_*` in `script.js`). USt.-Hinweis ist ein sichtbarer **PLATZHALTER**.
- **Formular:** In `script.js` `FORM_ENDPOINT` mit dem Endpunkt eures Formulardienstes füllen (z. B. Formspree). **Solange leer, wird nichts gesendet** und das Formular meldet das offen. Danach mit echter Testanfrage prüfen und den Dienst in der Datenschutzinformation nennen.
- **GitHub Pages:** Ordnerinhalt in ein Repository hochladen → Settings → Pages → Branch `main`, Ordner `/ (root)`.
- **Rechtstexte:** `legal/*.html` sind **Platzhalter, keine geprüften Texte**. Impressum, Datenschutz, AGB, Haftungshinweise ausfüllen und prüfen lassen (AT/DE/CH, Ernährungs-Gewerbeumfang, USt.).
- **Offen/nicht umgesetzt:** Canonical-URL, Favicon (auskommentierte Platzhalter), englische Rechtsseiten, Open-Graph-Bild.
- **Getestet:** Rendering in Chromium (390 px und 1360 px Breite), alle 10 Bilder laden, keine Konsolenfehler, kein horizontales Scrollen. Nicht getestet: echter Formularversand, andere Browser, echte Geräte.
