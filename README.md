# Regium Touch Portfolio

A modern, dark-themed portfolio website showcasing graphic design, video production, photography, branding, and web design work.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
├── about/              # About page
├── contact/            # Contact page
└── portfolio/          # Portfolio pages
    ├── graphics/       # Graphic design work
    ├── videos/         # Video production work
    ├── photos/         # Photography
    ├── branding/       # Branding projects
    └── websites/       # Web design projects

components/
├── Header.tsx          # Navigation header
├── Footer.tsx          # Site footer
├── Hero.tsx            # Hero section
├── ProjectCard.tsx     # Individual project card
└── ProjectGrid.tsx     # Portfolio grid layout

lib/
└── projects.ts         # Project data

public/
└── projects/           # Project images
```

## Customization

### Adding Projects

Edit `lib/projects.ts` to add or modify projects. Each project includes:
- Title
- Category
- Thumbnail image path
- Description
- Link

### Updating Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Dark backgrounds: `dark`, `dark-100`, `dark-200`
- Accent colors: `accent-purple`, `accent-blue`

### Adding Placeholder Images

Add your images to `public/projects/` and reference them in the project data.

## Build

```bash
npm run build
```

## Deploy

The site can be deployed on Vercel, Netlify, or any hosting platform that supports Next.js.

## License

© 2024 Regium Touch. All rights reserved.

