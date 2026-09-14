# TabiWilson Photography

An editorial photography portfolio built with Next.js, React and a static export. The temporary client preview is published on [GitHub Pages](https://adeola-jo.github.io/TabiWilson-Photography/).

## Features

- Responsive warm-paper and olive editorial design
- Locally hosted WebP images, with smaller variants for mobile
- Filterable gallery and photo viewer with keyboard navigation, focus management and scroll locking
- Accessible mobile navigation, skip link, visible focus styles and reduced-motion support
- Enquiry and social links to [@wlsnarchives](https://www.instagram.com/wlsnarchives/)
- No third-party feed embed, tracking scripts or nonfunctional enquiry form

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm run lint` checks the source. `npm run build` runs lint before producing the static site in `out/`.

For the GitHub Pages preview path:

```sh
NEXT_PUBLIC_BASE_PATH=/TabiWilson-Photography npm run build
```

See [preview publishing instructions](docs/development-preview.md).

## Content

`lib/portfolio.js` holds the gallery records and confirmed Instagram URL. Page copy is in `components/TabiWilsonPortfolio.js`; styling is in `app/globals.css`.

**The photographs are labelled layout samples, not the client's portfolio.** Source URLs are recorded in [sample-images.json](docs/sample-images.json). Replace the samples with the client's photographs and descriptive captions before final launch. The current site name remains TabiWilson Photography pending any requested rebrand.

The booking email, prices and location were not confirmed, so they are not published. Visitors can enquire through the confirmed Instagram profile. Preview metadata is set to `noindex, nofollow`; update it and final-domain metadata when preparing the final launch.

## Structure

- `app/` — route, document metadata and global styles
- `components/SiteHeader.js` — responsive navigation
- `components/PhotoGallery.js` — filters and accessible photo viewer
- `components/TabiWilsonPortfolio.js` — page composition and content
- `lib/portfolio.js` — portfolio data and social link
- `public/images/` — local sample photographs
- `.superdesign/` — approved design context and canvas reference
- `docs/` — review, image provenance and preview publishing notes
