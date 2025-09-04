# Modernis - German Kitchen Website

A modern, responsive website for Modernis German Kitchens built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop experiences
- **Performance Optimized**: Built for Core Web Vitals excellence
- **Reusable Components**: Modular component architecture for easy maintenance
- **SEO Ready**: Optimized for search engines with proper meta tags and structure

## Homepage Sections

1. **Hero Section**: Compelling value proposition with strong CTAs
2. **Social Proof**: Customer testimonials and trust indicators
3. **Gallery Showcase**: Interactive portfolio with hover effects
4. **Process Overview**: 3-step German-engineered process
5. **Why German Kitchens**: Benefits and quality indicators

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── layout/         # Header, Footer components
│   ├── sections/       # Homepage sections
│   └── ui/            # Reusable UI components
└── lib/               # Utilities and helpers
```

## Component Architecture

- **UI Components**: Button, Card (reusable design system)
- **Layout Components**: Header with mobile menu, Footer with navigation
- **Section Components**: Hero, SocialProof, GalleryShowcase, ProcessOverview, WhyGermanKitchens
- **Responsive**: All components are mobile-first and fully responsive

## Development Notes

- Uses Next.js 14 App Router for optimal performance
- Tailwind CSS with custom design tokens for brand consistency
- TypeScript for type safety
- Optimized images with Next.js Image component
- Hover effects and animations for enhanced UX

## Next Steps

1. Add actual kitchen images to `/public/images/`
2. Implement contact forms with validation
3. Add more pages (Gallery, Services, About, Contact)
4. Integrate CMS for content management
5. Add analytics and tracking
6. Implement SEO optimizations