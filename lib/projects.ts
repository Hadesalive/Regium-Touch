export interface TechStack {
  name: string
  icon?: string
  svgIcon?: string
  color: string
}

export interface Project {
  id: string
  title: string
  category: string
  thumbnail: string
  slug: string
  description?: string
  images?: string[]
  video?: string
  pdfs?: string[]
  techStack?: TechStack[]
  gradient?: string
  demoUrl?: string
}

// BRANDING - Logo Designs
const brandingProjects: Project[] = [
  {
    id: 'branding-1',
    title: 'Logo Design Portfolio',
    category: 'Branding',
    thumbnail: '/projects/regium touch/Logo Designs/Portfolio OG.psbArtboard 5.jpg',
    slug: '/portfolio/branding',
    description: 'Comprehensive collection of modern logo designs showcasing creative brand identities.',
    images: [
      '/projects/regium touch/Logo Designs/Portfolio OG.psbArtboard 5.jpg',
      '/projects/regium touch/Logo Designs/Portfolio OG.psbArtboard 6.jpg',
      '/projects/regium touch/Logo Designs/Portfolio OG.psbArtboard 7.jpg'
    ],
    techStack: [
      { name: 'Adobe Illustrator', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobeillustrator.svg', color: 'from-purple-500/20 to-purple-600/20' },
      { name: 'Photoshop', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobephotoshop.svg', color: 'from-blue-500/20 to-cyan-500/20' }
    ],
    gradient: 'from-purple-500 via-blue-500 to-cyan-500'
  },
  {
    id: 'branding-2',
    title: 'Brand Identity Manuals',
    category: 'Branding',
    thumbnail: '/projects/regium touch/Brand design/MANO RIVER UNION BRAND MANUAL 20223103 S.pdf',
    slug: '/portfolio/branding',
    description: 'Comprehensive brand manuals and identity documentation for organizations.',
    pdfs: [
      '/projects/regium touch/Brand design/MANO RIVER UNION BRAND MANUAL 20223103 S.pdf',
      '/projects/regium touch/Brand design/Brand Identity SLEWRC updated.pdf'
    ],
    techStack: [
      { name: 'InDesign', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobeindesign.svg', color: 'from-pink-500/20 to-purple-500/20' },
      { name: 'Illustrator', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobeillustrator.svg', color: 'from-purple-500/20 to-purple-600/20' }
    ],
    gradient: 'from-purple-500 via-indigo-500 to-blue-500'
  }
]

// GRAPHIC DESIGN - Flyers & Posters
const flyerImages = [
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.46 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.47 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.47.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.48.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.49.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.50.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.53.53.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.05 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.05 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.05.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.06 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.07 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.08 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.09 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.09.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.55.10.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.40 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.40.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.41 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.41.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.42 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.42 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.42.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.43 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.56.43.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.14 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.14.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.15.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.16 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.16.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 17.59.17.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.00.30 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.00.30.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.00.32 (2).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.00.32.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.00.33.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.01.14 (1).jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.01.14.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.01.53.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.07.36.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.08.19.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.09.52.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.09.53.jpeg.jpg',
  '/projects/regium touch/Flyers & Poster/WhatsApp Image 2025-10-26 at 18.09.55.jpeg.jpg'
]

const graphicDesignProjects: Project[] = [
  {
    id: 'graphic-1',
    title: 'Marketing Flyers & Posters',
    category: 'Graphic Design',
    thumbnail: flyerImages[0],
    slug: '/portfolio/graphics',
    description: 'A stunning collection of creative event flyers and promotional materials designed to capture attention and drive engagement.',
    images: flyerImages,
    techStack: [
      { name: 'Photoshop', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobephotoshop.svg', color: 'from-blue-500/20 to-cyan-500/20' },
      { name: 'InDesign', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobeindesign.svg', color: 'from-pink-500/20 to-purple-500/20' }
    ],
    gradient: 'from-pink-500 via-purple-500 to-indigo-500'
  },
  {
    id: 'graphic-2',
    title: 'Tax Perception Report',
    category: 'Graphic Design',
    thumbnail: '/projects/regium touch/reports/FINAL TAX PERCEPTION REPORT.pdf',
    slug: '/portfolio/graphics',
    description: 'Professional report design with comprehensive data visualization and analysis.',
    pdfs: ['/projects/regium touch/reports/FINAL TAX PERCEPTION REPORT.pdf'],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500'
  }
]

// VIDEO PRODUCTION
const videoProjects: Project[] = [
  {
    id: 'video-1',
    title: 'Orange Social Venture Prize',
    category: 'Video Production',
    thumbnail: '/projects/regium touch/video/orange social venture prize project.mp4',
    slug: '/portfolio/videos',
    description: 'Professional video production highlighting social impact initiatives and community engagement.',
    video: '/projects/regium touch/video/orange social venture prize project.mp4',
    techStack: [
      { name: 'Premiere Pro', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobepremierepro.svg', color: 'from-purple-500/20 to-purple-600/20' },
      { name: 'After Effects', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobeaftereffects.svg', color: 'from-indigo-500/20 to-purple-500/20' }
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  },
  {
    id: 'video-2',
    title: 'Client Testimonial',
    category: 'Video Production',
    thumbnail: '/projects/regium touch/video/client tesimonial video.mp4',
    slug: '/portfolio/videos',
    description: 'Client testimonial video showcasing project outcomes and client satisfaction.',
    video: '/projects/regium touch/video/client tesimonial video.mp4',
    gradient: 'from-purple-500 via-indigo-500 to-pink-500'
  }
]

// PHOTOGRAPHY - Training & Trainings
const trainingImages = [
  '/projects/regium touch/training/WhatsApp Image 2025-10-26 at 18.22.46_b44466d2.jpg',
  '/projects/regium touch/training/WhatsApp Image 2025-10-26 at 18.22.46_ae1ec2ab.jpg',
  '/projects/regium touch/training/WhatsApp Image 2025-10-26 at 18.22.46_43bae320.jpg',
  '/projects/regium touch/training/WhatsApp Image 2025-10-26 at 18.22.45_5ee53dce.jpg',
  '/projects/regium touch/training/WhatsApp Image 2025-10-26 at 18.22.45_0d6f8477.jpg',
  '/projects/regium touch/trainings/1753530293654.jpeg.jpg',
  '/projects/regium touch/trainings/1753530292233.jpeg.jpg',
  '/projects/regium touch/trainings/1753530291732.jpeg.jpg',
  '/projects/regium touch/trainings/1753530291711.jpeg.jpg',
  '/projects/regium touch/trainings/1753530291413.jpeg.jpg'
]

const photographyProjects: Project[] = [
  {
    id: 'photo-1',
    title: 'Training Documentation',
    category: 'Photography',
    thumbnail: trainingImages[0],
    slug: '/portfolio/photos',
    description: 'Professional photography documenting training sessions and workshops.',
    images: trainingImages,
    techStack: [
      { name: 'Lightroom', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobelightroomclassic.svg', color: 'from-blue-500/20 to-indigo-500/20' },
      { name: 'Photoshop', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobephotoshop.svg', color: 'from-blue-500/20 to-cyan-500/20' }
    ],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  }
]

// WEB DESIGN - Websites (Grouped into one card)
const websiteProjects: Project[] = [
  {
    id: 'web-all',
    title: 'Web Development Portfolio',
    category: 'Web Design',
    thumbnail: '/projects/regium touch/website/ups-system-rescue.vercel.app_ (1).png',
    slug: '/portfolio/websites',
    description: 'A collection of modern, responsive websites including e-commerce platforms, business services, job portals, and school websites built with cutting-edge technologies.',
    images: [
      '/projects/regium touch/website/ups-system-rescue.vercel.app_ (1).png',
      '/projects/regium touch/website/www.coolcarautorepairgarage.com_(Hd Screenshot).png',
      '/projects/regium touch/website/job-konect-ebon.vercel.app_(Hd Screenshot).png',
      '/projects/regium touch/website/wamagriso.vercel.app_(Hd Screenshot).png'
    ],
    techStack: [
      { name: 'Next.js', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/nextdotjs.svg', color: 'from-gray-900 to-black' },
      { name: 'React', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/react.svg', color: 'from-cyan-400 to-cyan-500' },
      { name: 'TypeScript', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/typescript.svg', color: 'from-blue-500 to-blue-600' },
      { name: 'Tailwind CSS', svgIcon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tailwindcss.svg', color: 'from-cyan-400 to-blue-500' }
    ],
    gradient: 'from-blue-500 via-purple-500 to-pink-500'
  }
]

// Combine all projects
export const projects: Project[] = [
  ...brandingProjects,
  ...graphicDesignProjects,
  ...videoProjects,
  ...photographyProjects,
  ...websiteProjects
]

// Featured projects for homepage
export const featuredProjects: Project[] = [
  brandingProjects[0],
  graphicDesignProjects[0],
  videoProjects[0],
  photographyProjects[0],
  websiteProjects[0]
]
