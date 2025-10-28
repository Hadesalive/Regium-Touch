'use client'

import { useState } from 'react'
import ProjectGrid from '@/components/ProjectGrid'
import ImageGallery from '@/components/ImageGallery'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'

export default function GraphicsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <Image
            src="/projects/regium touch/v880-techi-12-a.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-6">
                <span className="text-pink-600 font-semibold text-sm">Graphic Design</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
                <span className="text-pink-600">Visual Identity</span>
                <br />
                That Stands Out
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creating stunning visual designs, branding, and print materials that capture attention 
                and communicate your message effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ProjectGrid category="Graphic Design" onOpenGallery={openGallery} />
        </div>
      </section>
    </>
  )
}

