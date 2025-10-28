'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eye, FileText, Video, ImageIcon, ExternalLink } from 'lucide-react'
import { Project } from '@/lib/projects'
import PDFThumbnail from './PDFThumbnail'

interface ProjectCardProps {
  project: Project
  onOpenGallery: (project: Project) => void
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const { title, category, thumbnail } = project
  const isPdf = thumbnail.endsWith('.pdf')
  const isVideo = project.video
  const isImage = !isPdf && !isVideo && thumbnail
  
  // Get badge type
  let badge = null
  let badgeColor = ''
  
  if (project.demoUrl) {
    badge = 'Live'
    badgeColor = 'bg-emerald-500'
  } else if (isPdf) {
    badge = 'PDF'
    badgeColor = 'bg-red-500'
  } else if (isVideo) {
    badge = 'Video'
    badgeColor = 'bg-orange-500'
  } else if (project.images && project.images.length > 1) {
    badge = `${project.images.length} Photos`
    badgeColor = 'bg-blue-500'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-2xl border border-gray-200/50 cursor-pointer h-full"
      onClick={() => onOpenGallery(project)}
    >
      {/* Colored border based on gradient - Matching Homepage */}
      {project.gradient && (
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 opacity-70 group-hover:opacity-100 transition-opacity shadow-sm"
          style={{
            background: `linear-gradient(90deg, ${
              project.gradient === 'from-purple-500 via-blue-500 to-cyan-500' ? '#a855f7, #3b82f6, #06b6d4' :
              project.gradient === 'from-gray-900 via-gray-800 to-black' ? '#111827, #1f2937, #000' :
              project.gradient === 'from-pink-500 via-purple-500 to-indigo-500' ? '#ec4899, #a855f7, #6366f1' :
              project.gradient === 'from-orange-500 via-red-500 to-pink-500' ? '#f97316, #ef4444, #ec4899' :
              project.gradient === 'from-emerald-500 via-teal-500 to-cyan-500' ? '#10b981, #14b8a6, #06b6d4' :
              project.gradient === 'from-blue-500 via-cyan-500 to-teal-500' ? '#3b82f6, #06b6d4, #14b8a6' :
              project.gradient === 'from-green-500 via-emerald-500 to-teal-500' ? '#22c55e, #10b981, #14b8a6' :
              project.gradient === 'from-yellow-400 via-orange-500 to-red-500' ? '#facc15, #f97316, #ef4444' :
              '#facc15, #f97316, #ef4444'
            })`
          }}
        />
      )}
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {isPdf ? (
          <PDFThumbnail pdfUrl={thumbnail} className="w-full h-full" />
        ) : isVideo ? (
          <>
            <video
              src={thumbnail}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                <Video className="w-8 h-8 text-gray-900" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              unoptimized
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        )}
      </div>
      
      {/* Content - Matching Homepage */}
      <div className="relative bg-gradient-to-b from-white to-gray-50/50 p-4 sm:p-6 z-20 border-t border-gray-100">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
          <div className="text-xs text-accent-purple uppercase tracking-wider font-semibold">
            {category}
          </div>
          {project.demoUrl && (
            <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-xs font-semibold flex items-center gap-1">
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span className="hidden sm:inline">Live</span>
              <span className="sm:hidden">✓</span>
            </div>
          )}
          {project.images && project.images.length > 1 && (
            <div className="px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-xs font-semibold flex items-center gap-1">
              <Eye className="w-3 h-3 flex-shrink-0" />
              {project.images.length} Items
            </div>
          )}
          <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-accent-purple/20 to-transparent" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent-purple transition-colors line-clamp-2">
          {title}
        </h3>
        {project.description && (
          <p className="text-sm text-gray-600 font-normal line-clamp-2 mb-3 sm:mb-4">
            {project.description}
          </p>
        )}
        
        {/* Tech Stack Icons - Matching Homepage */}
        {project.techStack && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200/50">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg hover:border-accent-purple/30 hover:bg-white transition-all group/tech"
              >
                {tech.svgIcon ? (
                  <img 
                    src={tech.svgIcon} 
                    alt={tech.name} 
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  />
                ) : (
                  <span className="text-xs text-gray-600">{tech.name[0]}</span>
                )}
                <span className="text-xs font-medium text-gray-600 hidden sm:inline">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
