# Sebastian Portfolio - React Implementation

This is a React implementation of the Figma design for Sebastian's portfolio website - a full desktop layout.

## Features

- **Desktop Layout**: Full 1366px wide desktop design
- **Dark Theme**: Professional dark color scheme
- **Typography**: Uses Fira Code font family for a developer aesthetic
- **Component-Based**: Modular React components for maintainability
- **CSS Custom Properties**: Design system with CSS variables for consistency
- **Pixel-Perfect**: Matches the original Figma design exactly

## Design System

### Colors
- Background: `#282c33`
- White: `#ffffff`
- Gray: `#abb2bf`
- Primary (Purple): `#c778dd`
- Accent: `#d9d9d9`

### Typography
- Font Family: Fira Code (monospace)
- Font Sizes: 14px, 16px, 18px, 24px, 32px
- Font Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px

## Components

- **Header**: Logo and desktop navigation menu with language switcher
- **SideMedia**: Vertical social media links on the left side
- **Hero**: Main introduction section with title, description, and visual elements
- **Quote**: Inspirational quote section with decorative elements
- **Projects**: Featured projects grid with live/demo links
- **Skills**: Technical skills organized by category with decorative elements
- **About**: About me section with image and description
- **Contact**: Contact information and methods
- **Footer**: Site footer with branding and social links
- **Logo**: Reusable logo component
- **Dots**: Decorative dot pattern grid

## Layout Structure

The desktop layout is 1366px wide and includes:
- Fixed header with navigation
- Left sidebar with social media links
- Main content sections stacked vertically
- Decorative background elements
- Footer at the bottom

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── SideMedia.js & SideMedia.css
│   ├── Hero.js & Hero.css
│   ├── Quote.js & Quote.css
│   ├── Projects.js & Projects.css
│   ├── Skills.js & Skills.css
│   ├── About.js & About.css
│   ├── Contact.js & Contact.css
│   ├── Footer.js & Footer.css
│   ├── Logo.js & Logo.css
│   └── Dots.js & Dots.css
├── App.js & App.css
├── index.js
└── index.css
```

## Notes

- Images are loaded from Figma's asset URLs (valid for 7 days)
- The design is pixel-perfect to match the original Figma desktop design
- All components follow the desktop layout specifications
- CSS is organized with component-specific stylesheets
- Layout uses absolute positioning to match Figma's exact specifications