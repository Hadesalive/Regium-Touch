'use client'

import Image from 'next/image'
import { FileText } from 'lucide-react'

interface PDFThumbnailProps {
  pdfUrl: string
  className?: string
}

export default function PDFThumbnail({ pdfUrl, className }: PDFThumbnailProps) {
  return (
    <div className={`relative bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center ${className}`}>
      <div className="text-center p-8">
        <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <div className="bg-white px-4 py-2 rounded-lg shadow-md">
          <p className="text-sm font-semibold text-gray-800 truncate max-w-xs">
            {pdfUrl.split('/').pop()?.replace('.pdf', '') || 'PDF Document'}
          </p>
        </div>
      </div>
    </div>
  )
}

