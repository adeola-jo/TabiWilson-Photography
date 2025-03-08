
# TabiWilson Photography Portfolio

A modern, responsive photography portfolio website built with Next.js and TailwindCSS.

![Demo of the TabiWilson Photography Portfolio](docs/demo.gif)

## Overview

This project is a professional photography portfolio website for TabiWilson Photography. It features a clean, elegant design with a focus on showcasing photography work through a responsive image gallery with category filtering.

## Features

- 📱 **Fully responsive design** - Optimized for all devices from mobile to desktop
- 🌓 **Dark/Light mode toggle** - With system preference detection
- 🔍 **Category-based portfolio filtering** - Sort works by portrait, wedding, commercial, or event
- 🖼️ **Interactive image gallery** - Elegant hover effects and image descriptions
- 📊 **Show more/less functionality** - Control the number of displayed images
- 🔄 **Smooth transitions** - Polished UI with thoughtful animations
- ⚡ **Static site generation** - Fast page loads with Next.js export
- 🎨 **Modern styling** - Clean aesthetics with TailwindCSS

## Tech Stack

- **Framework**: Next.js 15.1
- **UI Library**: React 19
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Deployment**: Static site export

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://0.0.0.0:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout component
│   └── page.js          # Main page component
├── components/          # React components
│   └── TabiWilsonPortfolio.js # Main portfolio component
├── docs/                # Documentation and demo assets
│   └── demo.gif         # Demo animation
├── public/              # Static assets
└── next.config.mjs      # Next.js configuration
```

## Customization

### Portfolio Items

To add, remove, or modify portfolio items, edit the `portfolioItems` array in `components/TabiWilsonPortfolio.js`:

```javascript
const portfolioItems = [
  {
    category: "portrait",
    image: "https://your-image-url.com/image.jpg",
    title: "Your Portfolio Item",
    description: "Description of your work",
  },
  // Add more items...
];
```

### Categories

To change the filtering categories, modify the `portfolioCategories` array:

```javascript
const portfolioCategories = [
  { id: "all", label: "All Work" },
  { id: "your-category", label: "Your Category" },
  // Add more categories...
];
```

### Photographer Information

Update the about section, services, and contact information in the component to reflect your own details.

## Key Components

The main `TabiWilsonPortfolio` component includes the following sections:

- **Navigation** - Responsive header with mobile menu and dark mode toggle
- **Hero Section** - Full-screen background with title overlay
- **Portfolio** - Filterable image gallery with category navigation
- **About** - Photographer biography and image
- **Services** - Service offerings with pricing information
- **Contact** - Contact form and social media links
- **Footer** - Copyright information

## Deployment on Replit

This project is configured for easy deployment on Replit:

1. Click the "Run" button to start the development server
2. Use the "Deployments" tab to publish your site

## Performance Optimization

- Static site generation for improved performance
- Responsive images for faster loading on mobile devices
- Dark mode implementation with system preference detection
- Lazy loading of images outside the viewport

## Browser Support

The portfolio is optimized for modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 TabiWilson Photography. All rights reserved.
