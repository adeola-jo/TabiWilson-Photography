# Routes
`/` renders app/page.js and TabiWilsonPortfolio under app/layout.js. Anchors: home, work, approach, commissions, contact. Preview base path: /TabiWilson-Photography.
## app/page.js
```
import TabiWilsonPortfolio from '@/components/TabiWilsonPortfolio';

export default function Home() {
  return <TabiWilsonPortfolio />;
};
```
