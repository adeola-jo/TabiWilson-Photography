# Theme
## Compact tokens
Tailwind defaults. Light: white, gray-50, gray-900. Dark: gray-900, gray-800, gray-300, white. Serif headings via system serif; sans-serif body via system sans. Main max width 80rem; 6rem section padding; 2rem grid gaps. Hero full viewport. Breakpoints md 768px, lg 1024px. Rounded-lg service cards and inputs.
## Source
## app/globals.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



```
## tailwind.config.mjs
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

```
