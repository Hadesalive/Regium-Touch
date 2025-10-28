'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProjectGrid from '@/components/ProjectGrid'
import ImageGallery from '@/components/ImageGallery'
import { Project } from '@/lib/projects'
import { useCategory } from './layout'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const { activeCategory, setActiveCategory } = useCategory()

  const openGallery = (project: Project) => {
    setSelectedProject(project)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      {/* Image Gallery Modal */}
      <ImageGallery 
        project={selectedProject}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />

      {/* Clean Apple-Style Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/projects/regium touch/7.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        
        {/* Smooth transition to projects */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold text-accent-purple tracking-tight">
                Our Work
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light max-w-2xl mx-auto">
                Showcasing excellence across design, branding, and digital innovation
              </p>
            </motion.div>
          </div>

          {/* Category Filter - Minimal */}
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-0">
              {[
                { id: 'All', label: 'All Work' },
                { id: 'Branding', label: 'Branding' },
                { id: 'Graphic Design', label: 'Graphics' },
                { id: 'Video Production', label: 'Videos' },
                { id: 'Photography', label: 'Photos' },
                { id: 'Web Design', label: 'Websites' },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-500 hover:bg-accent-purple/10 hover:text-accent-purple'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <ProjectGrid category={activeCategory} onOpenGallery={openGallery} />
        </div>
      </section>
    </>
  )
}
