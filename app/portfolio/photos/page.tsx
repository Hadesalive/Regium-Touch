'use client'

import ProjectGrid from '@/components/ProjectGrid'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PhotosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <span className="text-emerald-600 font-semibold text-sm">Photography</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
                <span className="text-emerald-600">Capturing Moments</span>
                <br />
                That Matter
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional photography that tells your story through stunning visuals and 
                compelling imagery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ProjectGrid category="Photography" />
        </div>
      </section>
    </>
  )
}

