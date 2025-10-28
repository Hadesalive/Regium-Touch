'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn, ZoomOut, FileText, Video as VideoIcon } from 'lucide-react'
import { Project } from '@/lib/projects'
import PDFViewer from './PDFViewer'

interface ImageGalleryProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ImageGallery({ project, isOpen, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; url: string }>({ isOpen: false, url: '' })
  const thumbnailScrollRef = useRef<HTMLDivElement>(null)
  
  // Combine images, PDFs, and videos into one navigable array
  const allContent = project ? [
    ...(project.images || [project.thumbnail]),
    ...(project.pdfs || []),
    ...(project.video ? [project.video] : [])
  ] : []
  const hasMultiple = allContent.length > 1
  const pdfs = project?.pdfs || []

  // Auto-scroll thumbnail to center
  const scrollThumbnailToCenter = useCallback((index: number) => {
    if (thumbnailScrollRef.current) {
      const thumbnailWidth = 80 // w-20 = 80px on desktop
      const scrollPosition = index * (thumbnailWidth + 8) - (thumbnailScrollRef.current.offsetWidth / 2) + (thumbnailWidth / 2)
      thumbnailScrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const nextImage = useCallback(() => {
    setIsZoomed(false)
    const newIndex = (currentIndex + 1) % allContent.length
    setCurrentIndex(newIndex)
    // Disable zoom for videos and PDFs
    if (allContent[newIndex]?.endsWith('.mp4') || allContent[newIndex]?.endsWith('.mov') || allContent[newIndex]?.endsWith('.pdf')) {
      setIsZoomed(false)
    }
    if (hasMultiple) {
      scrollThumbnailToCenter(newIndex)
    }
  }, [allContent.length, currentIndex, hasMultiple, scrollThumbnailToCenter])

  const prevImage = useCallback(() => {
    setIsZoomed(false)
    const newIndex = (currentIndex - 1 + allContent.length) % allContent.length
    setCurrentIndex(newIndex)
    // Disable zoom for videos and PDFs
    if (allContent[newIndex]?.endsWith('.mp4') || allContent[newIndex]?.endsWith('.mov') || allContent[newIndex]?.endsWith('.pdf')) {
      setIsZoomed(false)
    }
    if (hasMultiple) {
      scrollThumbnailToCenter(newIndex)
    }
  }, [allContent.length, currentIndex, hasMultiple, scrollThumbnailToCenter])

  const goToImage = useCallback((index: number) => {
    setIsZoomed(false)
    setCurrentIndex(index)
    // Disable zoom for videos and PDFs
    if (allContent[index]?.endsWith('.mp4') || allContent[index]?.endsWith('.mov') || allContent[index]?.endsWith('.pdf')) {
      setIsZoomed(false)
    }
    scrollThumbnailToCenter(index)
  }, [allContent, scrollThumbnailToCenter])
  
  useEffect(() => {
    if (isOpen && project) {
      setCurrentIndex(0)
      setIsZoomed(false)
      setShowInfo(true)
    }
  }, [isOpen, project])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        if (hasMultiple) nextImage()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (hasMultiple) prevImage()
      }
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, nextImage, prevImage, hasMultiple])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/98"
          />
          
          {/* Main Container */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full flex flex-col">
              
              {/* Top Header Bar */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="border-b border-gray-100 bg-white"
              >
                <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <span className="text-accent-purple font-bold text-xs uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-2xl md:text-4xl font-light text-gray-900 tracking-tight truncate">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    {hasMultiple && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{currentIndex + 1}</span>
                        <span>/</span>
                        <span className="text-gray-400">{allContent.length}</span>
                      </div>
                    )}
                    <button
                      onClick={() => setShowInfo(!showInfo)}
                      className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Main Content Area */}
              <div className="flex-1 flex overflow-hidden">
                
                {/* Image Display - Left Side */}
                <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative bg-gradient-to-br from-gray-50 to-white overflow-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: isZoomed ? 1.2 : 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full flex items-center justify-center group"
                    >
                      {(() => {
                        const currentItem = allContent[currentIndex]
                        const isVideo = currentItem?.endsWith('.mp4') || currentItem?.endsWith('.mov')
                        const isPdf = currentItem?.endsWith('.pdf')
                        
                        if (isPdf) {
                          return (
                            <div className="max-w-4xl w-full h-full">
                              <iframe
                                src={currentItem}
                                className="w-full h-[85vh] rounded-3xl shadow-2xl border-2 border-gray-200"
                                title="PDF Viewer"
                              />
                            </div>
                          )
                        }
                        
                        if (isVideo) {
                          return (
                            <div className="relative max-w-6xl w-full">
                              <video
                                src={currentItem}
                                controls
                                className="w-full max-h-[85vh] rounded-3xl shadow-2xl"
                                preload="metadata"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          )
                        }
                        
                        // Regular image
                        if (isZoomed) {
                          return (
                            <Image
                              src={allContent[currentIndex]}
                              alt={`${project.title} - Image ${currentIndex + 1}`}
                              width={2000}
                              height={2000}
                              className="max-w-[95%] max-h-[95vh] w-auto h-auto object-contain rounded-3xl cursor-zoom-out shadow-2xl"
                              unoptimized
                              priority
                              onClick={() => setIsZoomed(false)}
                            />
                          )
                        } else {
                          return (
                            <div className="relative max-w-6xl">
                              <Image
                                src={allContent[currentIndex]}
                                alt={`${project.title} - Image ${currentIndex + 1}`}
                                width={1400}
                                height={1400}
                                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-3xl cursor-zoom-in shadow-xl transition-all group-hover:shadow-2xl"
                                unoptimized
                                priority
                                onClick={() => setIsZoomed(true)}
                              />
                              
                              {/* Floating zoom hint */}
                              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="px-4 py-2 bg-white/90 backdrop-blur-xl border-2 border-gray-200 rounded-2xl shadow-lg">
                                  <div className="flex items-center gap-2">
                                    <ZoomIn className="w-4 h-4 text-gray-700" />
                                    <span className="text-gray-700 text-sm font-semibold">Click to zoom</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })()}
                    </motion.div>
                  </AnimatePresence>

                  {/* Zoom Indicator - Only for images */}
                  {!allContent[currentIndex]?.endsWith('.pdf') && !allContent[currentIndex]?.endsWith('.mp4') && !allContent[currentIndex]?.endsWith('.mov') && (
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="absolute bottom-12 left-12 p-3.5 bg-white hover:bg-gray-50 shadow-xl rounded-2xl transition-all hover:scale-105 border border-gray-200"
                    >
                      {isZoomed ? (
                        <ZoomOut className="w-5 h-5 text-gray-700" />
                      ) : (
                        <ZoomIn className="w-5 h-5 text-gray-700" />
                      )}
                    </button>
                  )}

                  {/* Navigation Arrows */}
                  {hasMultiple && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white hover:bg-gray-50 shadow-xl rounded-full md:rounded-2xl transition-all hover:scale-110 border border-gray-200 group"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-gray-700 group-hover:text-accent-purple transition-colors" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white hover:bg-gray-50 shadow-xl rounded-full md:rounded-2xl transition-all hover:scale-110 border border-gray-200 group"
                      >
                        <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-gray-700 group-hover:text-accent-purple transition-colors" />
                      </button>
                    </>
                  )}
                </div>

                      {/* Info Panel - Right Side */}
                      {showInfo && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          className="hidden lg:block w-[400px] border-l border-gray-100 bg-white overflow-y-auto"
                        >
                    <div className="p-8 space-y-8">
                      
                      {/* Description */}
                      {project.description && (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-accent-purple" />
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                              About
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      )}

                      {/* Additional Details */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-12 bg-accent-purple" />
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                            Details
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between py-1.5 border-b border-gray-100">
                            <span className="text-gray-500">Category</span>
                            <span className="text-gray-900 font-medium">{project.category}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-gray-100">
                            <span className="text-gray-500">Items</span>
                            <span className="text-gray-900 font-medium">{allContent.length}</span>
                          </div>
                          {project.demoUrl && (
                            <div className="flex justify-between py-1.5">
                              <span className="text-gray-500">Status</span>
                              <span className="text-emerald-600 font-medium">Live</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Demo Button */}
                      {project.demoUrl && (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-accent-purple" />
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                              Live Site
                            </div>
                          </div>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all font-medium text-sm w-full"
                          >
                            <ExternalLink className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                            Visit Live Site
                          </a>
                        </div>
                      )}

                      {/* PDF Documents */}
                      {pdfs.length > 0 && (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-accent-purple" />
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                              Documents
                            </div>
                          </div>
                          <div className="space-y-2">
                            {pdfs.map((pdf, idx) => {
                              const fileName = pdf.split('/').pop()?.replace('.pdf', '') || 'Document'
                              return (
                                <button
                                  key={idx}
                                  onClick={() => setPdfViewer({ isOpen: true, url: pdf })}
                                  className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 hover:border-accent-purple/50 rounded-lg transition-all cursor-pointer group"
                                >
                                  <FileText className="w-5 h-5 text-red-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-700 font-medium truncate text-left">{fileName}</span>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent-purple ml-auto flex-shrink-0" />
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack - Enhanced to match card style */}
                      {project.techStack && project.techStack.length > 0 && (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-accent-purple" />
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                              Tech Stack
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <div
                                key={idx}
                                className="group/tech flex items-center gap-1.5 px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg hover:border-accent-purple/30 hover:bg-white transition-all cursor-pointer"
                              >
                                {tech.svgIcon ? (
                                  <img 
                                    src={tech.svgIcon} 
                                    alt={tech.name} 
                                    className="w-4 h-4 transition-transform group-hover/tech:scale-110"
                                    style={{
                                      filter: tech.name === 'Adobe Illustrator' ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' :
                                                 tech.name === 'Photoshop' ? 'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(0%) contrast(100%)' :
                                                 tech.name === 'InDesign' ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' :
                                                 tech.name === 'Premiere Pro' ? 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(286deg) brightness(118%) contrast(119%)' :
                                                 tech.name === 'After Effects' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'Lightroom' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'Next.js' ? 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' :
                                                 tech.name === 'React' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'TypeScript' ? 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'Tailwind CSS' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'Vite' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(30deg) brightness(1.2) contrast(1.2)' :
                                                 tech.name === 'Supabase' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(120deg) brightness(1.2) contrast(1.2)' :
                                                 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'
                                    }}
                                  />
                                ) : (
                                  <span className="text-xs text-gray-600">{tech.name[0]}</span>
                                )}
                                <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Minimal Thumbnail Strip - Bottom */}
              {hasMultiple && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="h-16 md:h-20 border-t border-gray-100 bg-white px-4 md:px-6 py-2"
                >
                  <div 
                    ref={thumbnailScrollRef}
                    className="flex gap-1.5 md:gap-2 h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                  >
                    {allContent.map((item, index) => {
                      const isVideo = item.endsWith('.mp4') || item.endsWith('.mov') || project?.video
                      const isPdf = item.endsWith('.pdf')
                      
                      return (
                        <motion.button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`relative h-full w-16 md:w-20 rounded-lg overflow-hidden transition-all flex-shrink-0 snap-center ${
                            index === currentIndex
                              ? 'ring-2 ring-accent-purple shadow-md'
                              : 'opacity-50 hover:opacity-75'
                          }`}
                          whileHover={{ scale: index === currentIndex ? 1 : 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isPdf ? (
                            <div className="absolute inset-0 bg-red-50 flex items-center justify-center">
                              <FileText className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                            </div>
                          ) : isVideo ? (
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                              <VideoIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                          ) : (
                            <Image
                              src={item}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                              unoptimized
                              sizes="80px"
                            />
                          )}
                          {/* Minimal indicator for active */}
                          {index === currentIndex && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple" />
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Mobile Info Drawer */}
              {showInfo && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden fixed inset-x-0 bottom-0 h-2/3 bg-white border-t-2 border-gray-200 rounded-t-3xl shadow-2xl overflow-y-auto z-50"
                >
                  <div className="p-6 pb-20 space-y-6">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowInfo(false)}
                      className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Description */}
                    {project.description && (
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-px w-12 bg-accent-purple" />
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                            About
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    )}

                    {/* Demo Button */}
                    {project.demoUrl && (
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-px w-12 bg-accent-purple" />
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                            Live Site
                          </div>
                        </div>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all font-medium text-sm"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                          Visit Live Site
                        </a>
                      </div>
                    )}

                    {/* Tech Stack - Mobile */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-px w-12 bg-accent-purple" />
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                            Tech Stack
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <div
                              key={idx}
                              className="group/tech flex items-center gap-1.5 px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg hover:border-accent-purple/30 hover:bg-white transition-all"
                            >
                              {tech.svgIcon ? (
                                <img 
                                  src={tech.svgIcon} 
                                  alt={tech.name} 
                                  className="w-4 h-4 transition-transform group-hover/tech:scale-110"
                                  style={{
                                    filter: tech.name === 'Adobe Illustrator' ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' :
                                               tech.name === 'Photoshop' ? 'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(0%) contrast(100%)' :
                                               tech.name === 'InDesign' ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' :
                                               tech.name === 'Premiere Pro' ? 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(286deg) brightness(118%) contrast(119%)' :
                                               tech.name === 'After Effects' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'Lightroom' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'Next.js' ? 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' :
                                               tech.name === 'React' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'TypeScript' ? 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'Tailwind CSS' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'Vite' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(30deg) brightness(1.2) contrast(1.2)' :
                                               tech.name === 'Supabase' ? 'brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(1000%) hue-rotate(120deg) brightness(1.2) contrast(1.2)' :
                                               'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'
                                  }}
                                />
                              ) : (
                                <span className="text-xs text-gray-600">{tech.name[0]}</span>
                              )}
                              <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      <PDFViewer
        pdfUrl={pdfViewer.url}
        isOpen={pdfViewer.isOpen}
        onClose={() => setPdfViewer({ isOpen: false, url: '' })}
      />
    </AnimatePresence>
  )
}
