# Portfolio design and completion review

## Current problems

- Full-screen stock camera image delays visitors reaching the photography and offers no primary action.
- Gallery repeats photos and forces every subject into the same portrait crop. Captions only appear on hover; images cannot be opened.
- The biography labels an Unsplash model as Tabitha Wilson and claims a decade of experience without confirmation.
- Service prices, location and booking email have not been confirmed by the client.
- Contact form has no submit handler, required fields, field names or linked labels. It currently cannot send enquiries.
- Instagram and Facebook are placeholder links. The user has confirmed Instagram: https://www.instagram.com/wlsnarchives/.
- Mobile menu and theme controls lack accessible names and expanded state. There is no skip link or reduced-motion handling.
- Content and styling are mixed in a 700-line page component. Duplicate Tailwind configs have inconsistent content paths.

## Proposed direction

A contemporary editorial portfolio: warm paper background, near-black text, muted olive details, serif display typography, simple sans-serif interface, generous spacing and fine dividing rules. Keep TabiWilson Photography as the working site name until the user confirms branding.

1. Compact navigation with Work, Approach, Contact and a clear enquiry action.
2. Split editorial hero: strong headline and a large selected photograph, followed by a visible work link.
3. Curated gallery with mixed image proportions, captions, accessible filters and a keyboard-operable lightbox.
4. Short approach section that avoids unverified personal claims and a false portrait.
5. Enquiry-led services without unconfirmed prices or invented deliverables.
6. A genuine Instagram callout linking to @wlsnarchives; no fabricated live feed.
7. A functional contact route. Instagram is confirmed; email and any form destination need confirmation.
8. Accessible mobile navigation, focus styles, image alt text, reduced-motion support and responsive layouts.

## Content needed before final launch

- Confirm public brand name.
- Client-owned portfolio photographs, titles and category selection. Existing Unsplash images are layout samples, not client work.
- Confirm booking email, actual location, services and any prices shown.
- Decide whether direct enquiries through Instagram/email suffice or a hosted form service is needed.

## Validation after implementation

Production build and standalone lint; desktop/mobile layout and overflow; navigation keyboard access; lightbox open/close/previous/next and focus restoration; gallery filtering; real Instagram URL; contact validation and honest delivery state; image loading; no browser errors; deployed asset paths; preview noindex retained.

## Reviewable draft

[Editorial redesign](https://p.superdesign.dev/draft/50ae77f2-fbf3-47a3-be3d-83c6a842d205) — version 3, awaiting approval before implementation. The confirmed Instagram link is already live on the existing GitHub Pages preview.
