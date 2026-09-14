# Redesign validation

Validated the static GitHub Pages build on 14 September 2026.

- `NEXT_PUBLIC_BASE_PATH=/TabiWilson-Photography npm run build`: passed, including standalone ESLint with no lint warnings or errors.
- Browser checks passed at widths 320, 390, 768, 1024 and 1440px with no horizontal overflow.
- Gallery filters, next/previous wrapping, Escape, modal Tab/Shift+Tab focus loop, focus return and scroll lock passed.
- Mobile menu opening, closing, Escape, anchor navigation and reset on desktop breakpoint passed.
- Local photographs loaded; smaller image variants were selected on mobile.
- Instagram links, noindex metadata and removal of inactive forms and unconfirmed claims verified.
- Axe checks for WCAG 2 A/AA and 2.1 AA returned no violations on the desktop page, mobile page and open photo viewer. This automated check is not a full accessibility certification.
- No JavaScript exceptions or failed local assets were recorded.
- Desktop, gallery and mobile screenshots were visually inspected.

Photographs remain explicitly labelled samples. Real portfolio assets and final business details still need client confirmation.

## Stock gallery expansion — 14 September 2026

- Added eight stock photographs with photographer credits in `stock-photo-credits.md`; the gallery now has 12 images (six portraits and six stories).
- The production build and ESLint passed.
- Browser checks verified all 12 full-size images, all 12 mobile variants, category counts, fullscreen next/previous wrapping and no browser or asset errors.
- No horizontal overflow at 320, 390, 768 or 1440px; desktop and mobile crops were visually inspected.
