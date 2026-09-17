# ~/blog — Tokyo Night Terminal Theme für Jekyll

Ein minimalistischer Tech-Blog im Terminal-Look (Tokyo-Night-Farbpalette), gebaut mit
[Jekyll](https://jekyllrb.com) für GitHub Pages. Posts werden als Markdown-Dateien
gepflegt, kein Build-Schritt, kein CMS.

## Voraussetzungen

- Ruby (>= 3.0) — `ruby -v`
- Bundler — `gem install bundler`

## Lokal starten

```bash
bundle install
bundle exec jekyll serve --livereload
```

Die Seite läuft dann unter `http://localhost:4000`.

## Neuen Artikel schreiben

Neue Datei in `_posts/` nach dem Schema `JJJJ-MM-TT-titel-slug.md` anlegen:

```markdown
---
title: "Mein Artikel"
tags: [linux, docker]
---

Text in ganz normalem Markdown …
```

Das Datum im Dateinamen bestimmt Sortierreihenfolge und URL
(`/jahr/monat/titel-slug/`, konfigurierbar in `_config.yml` über `permalink`).

## Projektstruktur

```
.
├── _config.yml          # Site-Einstellungen (Titel, Tagline, Autor, Permalinks)
├── _layouts/
│   ├── default.html      # Terminal-Fenster-Rahmen, Nav, Footer
│   ├── home.html         # Startseite: Post-Liste im "ls -la" Stil
│   └── post.html         # Einzelner Artikel im "cat post.md" Stil
├── _posts/                # deine Artikel (Markdown)
├── assets/
│   ├── css/style.css      # Tokyo-Night-Farbvariablen + gesamtes Styling
│   └── js/terminal.js     # dezenter Typewriter-Effekt für die Tagline
├── about.md                # /about/
└── index.md                 # Startseite (nutzt layout: home)
```

## Anpassen

- **Name/Titel/Tagline/Autor**: in `_config.yml` (`title`, `tagline`, `author.*`)
- **Farben**: alle Werte oben in `assets/css/style.css` unter `:root`
- **Navigation**: `<nav class="cmds">` in `_layouts/default.html`
- **Kontaktdaten**: `about.md`

Überall, wo `DEIN-USERNAME` steht (`_config.yml`, `default.html`, `about.md`), durch
deinen GitHub-Benutzernamen ersetzen.

## Deployment auf GitHub Pages

1. Repo erstellen, das exakt `DEIN-USERNAME.github.io` heißt (für eine User-Page)
   — oder ein beliebiges Repo, wenn du ein Project-Page-Setup willst (dann `baseurl`
   in `_config.yml` auf `/repo-name` setzen).
2. Diesen Ordnerinhalt ins Repo pushen:
   ```bash
   git init
   git add .
   git commit -m "init: tokyo night terminal blog"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-USERNAME.github.io.git
   git push -u origin main
   ```
3. Im Repo unter **Settings → Pages** als Source „Deploy from a branch“, Branch `main`,
   Ordner `/ (root)` wählen.
4. Nach ein bis zwei Minuten ist die Seite unter `https://DEIN-USERNAME.github.io` live.
   GitHub Pages baut Jekyll automatisch — kein GitHub-Actions-Workflow nötig, solange
   nur die in `Gemfile`/`_config.yml` gelisteten, von GitHub Pages unterstützten
   Plugins verwendet werden.

## Eigene Domain (optional)

Datei `CNAME` mit deiner Domain (z. B. `blog.example.com`) im Root anlegen und beim
DNS-Provider einen CNAME-Eintrag auf `DEIN-USERNAME.github.io` setzen.

## Lizenz

Nutz es frei für deinen eigenen Blog.
