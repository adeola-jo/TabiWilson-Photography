# Routes
`/` → app/page.js → TabiWilsonPortfolio. Layout: app/layout.js. Anchor sections: home, portfolio, about, services, contact. GitHub Pages uses /TabiWilson-Photography basePath.
## app/page.js
```
import TabiWilsonPortfolio from '@/components/TabiWilsonPortfolio';

export default function Home() {
  return <TabiWilsonPortfolio />;
};
```
