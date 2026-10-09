# Sonamoyee United Football Club

A simple, responsive club website built with the Next.js App Router and plain CSS.

## Run locally

Install Node.js 20.9 or newer, then run:

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
```

The build exports the site to `out/` for static hosting.

## GitHub Pages

Live site: https://arpon-chowdhury.github.io/Sonamoyee-fc/

Every push to `main` runs `.github/workflows/deploy-pages.yml` to build and deploy
the site. The workflow sets `NEXT_PUBLIC_BASE_PATH=/Sonamoyee-fc` so scripts,
styles, and images load correctly at the repository URL. Local development uses
the root path as usual.

## Customize

- Edit `app/page.js` for club copy, fixtures, and news.
- Edit `app/globals.css` for colours and styles.
- Edit `app/layout.js` for the page title and description.
- Fixture dates, opponents, and news are sample content. Replace them before publishing.
- The join section is informational; add real club contact details when available.
- The crest and illustrations are CSS placeholders. Replace them with official club assets when available.
- Google Fonts is optional; system fonts are used if it is unavailable.

Dependency versions are pinned, and `package-lock.json` records the installed dependencies.

## Project-local Node.js

A Node.js runtime has been installed in the ignored `.runtime` directory for this workspace. To use it in a new terminal session:

```sh
export PATH="$PWD/.runtime/bin:$PATH"
npm run dev
```

# Sonamoyee-fc
