<!-- b78f2b46-bf7d-49c3-95d5-645af993fb91 41425a1f-064f-459c-b841-8ccdfd910d58 -->
# Portfolio Website for Regium Touch

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Next.js Image optimization

## Project Structure

```
regium-touch-portfolio/
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (homepage/hero)
│   ├── about/
│   ├── portfolio/
│   │   ├── graphics/
│   │   ├── videos/
│   │   ├── photos/
│   │   ├── branding/
│   │   └── websites/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ImageGallery.tsx
│   └── VideoPlayer.tsx
├── public/
│   └── projects/ (placeholder images)
└── lib/
    └── projects.ts (project data)
```

## Key Features

1. **Dark Modern Theme**: Sleek dark color scheme with accent colors
2. **Responsive Grid Layouts**: Masonry-style portfolio grids
3. **Category Filtering**: Easy navigation between work types
4. **Smooth Animations**: Page transitions and hover effects
5. **Image Optimization**: Next.js Image component for performance
6. **SEO Ready**: Metadata and OpenGraph tags

## Pages to Build

1. **Homepage**: Hero section with featured work and call-to-action
2. **Portfolio Pages**: Separate galleries for each category (graphics, videos, photos, branding, websites)
3. **About Page**: Company information and services
4. **Contact Page**: Simple contact information display

## Design Approach

- Dark background (#0a0a0a - #1a1a1a)
- Accent colors for highlights (purple/blue gradient)
- Large imagery to showcase work
- Minimal text, maximum visual impact
- Smooth scroll and hover interactions

### To-dos

- [ ] Initialize Next.js project with TypeScript and Tailwind CSS
- [ ] Install dependencies (Framer Motion, icons, etc.)
- [ ] Configure Tailwind with dark theme colors and custom styles
- [ ] Create root layout with global styles and dark theme
- [ ] Build Header and Footer components with navigation
- [ ] Create homepage with hero section and featured work preview
- [ ] Build reusable ProjectCard, ProjectGrid, and Gallery components
- [ ] Create portfolio category pages (graphics, videos, photos, branding, websites)
- [ ] Create About page with company information
- [ ] Create Contact page with contact information display
- [ ] Add Framer Motion animations and transitions
- [ ] Add placeholder images and content for all portfolio sections