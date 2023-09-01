# Webseite für den Stuckateurbetrieb Kreutzer GmbH

> 🌐 Webseite: [https://stuckateur-kreutzer.netlify.app/](https://stuckateur-kreutzer.netlify.app)

> 👷‍♀️In dieser README wird die Architektur des Projektes erklärt

## 💻 Tech Stack
- Die Basis bildet das Web-Framework [Astro](https://astro.build/)
- Die Komponenten werden entsprechend mit JavaScript und HTML umgesetzt
- Die Styles werden auf Basis von [TailwindCSS](https://tailwindcss.com/) geschrieben

## 🗂️ Übersicht über die Komponenten
- Die Komponenten befinden sich im Ordner `./src/components/`
- Diese werden in der Datei `./src/pages/index.astro` eingebunden
- Als Wrapper für die Hauptseite dient das Layout `./src/layouts/Layout.astro`
- Verwendete Icons werden als SVG-Tags im Ordner `./src/icons/` abgelegt
- Der Ordner `utils` enthält die Datei `CustomStyles.astro`, welches als Template-Klasse für Tailwind dient sowie die Datei `BasicScripts.astro`, die die Navbar stylisch anpasst, sobald im Browser gescrollt wird

## ⌘ Commands

| Command                   | Action                                             |
| :------------------------ |:---------------------------------------------------|
| `npm install`             | Abhängigkeiten installieren                        |
| `npm run dev`             | Startet lokalen Server `localhost:3000`            |
| `npm run build`           | Bauprozess für die Produktion zum Ordner `./dist/` |
| `npm run preview`         | Vorschau der gebauten App vor Deploy               |

## 🚀 Deployment
- Die Webseite wird mit dem Tool [Netlify](https://www.netlify.com/) deployed
- Das GitHub-Repository der Webseite ist mit einem Netlify-Konto verknüpft
- Wird ein neuer Commit auf den `master`-Branch gepusht, wird die Webseite automatisch neu gebaut und deployed

## 📈 Performance Score
Mit dem Tool Lighthouse von Google wurde die Performance der Webseite gemessen:

![img.png](img.png)

## 📝 License
[MIT](https://choosealicense.com/licenses/mit/)

## 📧 Kontakt
- [GitHub](https://github.com/kreutzermaik)
- [LinkedIn](https://linkedin.com/in/maik-kreutzer-889a79197)
