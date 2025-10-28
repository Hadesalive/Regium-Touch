'use client'

import { useState, useEffect } from 'react'
import { projects, Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectGridProps {
  category?: string
  limit?: number
  onOpenGallery?: (project: Project) => void
}

const PROJECTS_PER_PAGE = 9

export default function ProjectGrid({ category, limit, onOpenGallery }: ProjectGridProps) {
  const [currentPage, setCurrentPage] = useState(1)

  let filteredProjects = category && category !== 'All'
    ? projects.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : projects

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  const handleOpenGallery = (project: Project) => {
    if (onOpenGallery) {
      onOpenGallery(project)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Results count - Minimal way to show what's filtered */}
      {category && category !== 'All' && (
        <div className="mb-4 sm:mb-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600 px-4">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''} in <span className="font-semibold text-accent-purple">{category}</span>
          </p>
        </div>
      )}

      {/* Grid matching Homepage Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {paginatedProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onOpenGallery={handleOpenGallery}
          />
        ))}
      </div>

      {/* Pagination */}
      {filteredProjects.length > PROJECTS_PER_PAGE && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 sm:p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border transition-all ${
                    currentPage === page
                      ? 'bg-accent-purple text-white border-accent-purple shadow-lg shadow-purple-500/30'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              )
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="px-1.5 sm:px-2 text-gray-400 text-sm">...</span>
            }
            return null
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 sm:p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </div>
  )
}

