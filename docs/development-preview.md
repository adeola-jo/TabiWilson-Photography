# Development preview

URL: https://adeola-jo.github.io/TabiWilson-Photography/

Source: `development-preview` branch. Published static files: `gh-pages` branch, served from its root by GitHub Pages. This is a publicly accessible client preview with `noindex, nofollow` metadata and clearly labelled sample photographs. Enquiries link to the confirmed Instagram profile.

## Build and publish an update

1. Work on `development-preview`, install dependencies with `npm ci`, and commit the source changes.
2. Build with `NEXT_PUBLIC_BASE_PATH=/TabiWilson-Photography npm run build`. The build runs lint first.
3. Validate the built page, gallery controls, keyboard navigation, mobile menu and Instagram links.
4. Fetch `origin/gh-pages` and use a separate worktree for that branch. Replace only its published files with the contents of `out/`, preserving the worktree's `.git` file, and add `.nojekyll`.
5. Commit and push the publishing worktree to `gh-pages` without force-pushing. GitHub runs its Pages deployment automatically.
6. Wait for the Pages workflow to succeed, then verify the live URL and assets.

Source pushes alone do not update this preview. Do not put a Git checkout inside `out/`, because Next.js replaces that directory on subsequent builds. Keep custom domains and final-launch configuration separate from this temporary setup.

## Final-launch content

Supply the client-owned photographs and confirm the brand name, services, booking contact and location. The site currently routes enquiries to Instagram; add a hosted form only once its destination and delivery service are confirmed. Remove preview-only noindex metadata when launching the final site.
