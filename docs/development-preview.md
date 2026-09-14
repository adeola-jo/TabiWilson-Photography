# Development preview

This branch (`development-preview`) contains the source for the temporary client review site:

https://adeola-jo.github.io/TabiWilson-Photography/

GitHub Pages publishes the static build from the `gh-pages` branch. The preview is publicly accessible by URL and has `noindex, nofollow` metadata. The contact form and social buttons are currently placeholders.

To build an updated preview:

```sh
npm ci
npx eslint components/TabiWilsonPortfolio.js app/layout.js app/page.js
NEXT_PUBLIC_BASE_PATH=/TabiWilson-Photography npm run build
```

Publish the contents of `out/` (including a `.nojekyll` file) to the root of the `gh-pages` branch. Source pushes alone do not update the preview. Keep this preview configuration separate from the final hosting setup; remove the noindex metadata when preparing the final launch.
