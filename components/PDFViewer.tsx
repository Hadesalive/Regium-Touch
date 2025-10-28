'use client'

import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PDFViewerProps {
  pdfUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function PDFViewer({ pdfUrl, isOpen, onClose }: PDFViewerProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80"
          />
          
          {/* Main Container */}
          <div className="absolute inset-0 p-8">
            <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  PDF Document
                </span>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* PDF Viewer */}
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

