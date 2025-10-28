'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-20 bg-white">
      {/* Subtle purple accent blur */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[150px] animate-pulse hidden sm:block" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-purple/5 rounded-full blur-[150px] hidden sm:block" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              We Create{' '}
              <span className="text-accent-purple">Stunning</span>
              <br />
              Visual Experiences
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Crafting exceptional brand identities, digital experiences, and creative content 
              that captivates audiences and drives results.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center justify-center gap-2 bg-accent-purple text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base hover:bg-accent-purple/95 transition-all duration-200 shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 hover:-translate-y-0.5"
              >
                <span>View Our Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base bg-white hover:border-accent-purple hover:text-accent-purple hover:bg-accent-purple/5 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats or Services */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 sm:gap-8 pt-4 flex-wrap"
            >
              <div className="border-l border-gray-200 pl-3 sm:pl-4">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects</div>
              </div>
              <div className="border-l border-gray-200 pl-3 sm:pl-4">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">5</div>
                <div className="text-xs sm:text-sm text-gray-600">Services</div>
              </div>
              <div className="border-l border-gray-200 pl-3 sm:pl-4">
                <div className="text-xl sm:text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Real Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                <Image
                  src="/projects/regium touch/trainings/1753530291413.jpeg.jpg"
                  alt="Training session"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square"
                  unoptimized
                />
                <Image
                  src="/projects/regium touch/trainings/1753530291711.jpeg.jpg"
                  alt="Training session"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square"
                  unoptimized
                />
                <Image
                  src="/projects/regium touch/trainings/1753530291732.jpeg.jpg"
                  alt="Training session"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square"
                  unoptimized
                />
                <Image
                  src="/projects/regium touch/trainings/1753530292233.jpeg.jpg"
                  alt="Training session"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-purple/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

