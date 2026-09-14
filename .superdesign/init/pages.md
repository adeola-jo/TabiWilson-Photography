# Pages
## /
Entry: app/page.js
- components/TabiWilsonPortfolio.js
  - React hooks (external)
  - lucide-react icons (external)
Layout: app/layout.js
- app/globals.css
Config: tailwind.config.js; duplicate tailwind.config.mjs has inconsistent content globs. No local helpers or nested components.
Desktop renders fixed 80px navigation, 100vh hero, 3-column gallery, 2-column about, 3 services, 2-column contact, footer. Mobile uses toggle menu and stacked content.
