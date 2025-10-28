'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import { featuredProjects, Project } from '@/lib/projects'
import ImageGallery from '@/components/ImageGallery'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Send, Mail, Phone } from 'lucide-react'

export default function Home() {
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
      <Hero />
      
      {/* Image Gallery Modal */}
      <ImageGallery 
        project={selectedProject}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
      
      {/* Featured Work Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Background Pattern Image */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            src="/projects/regium touch/v880-techi-12-a.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-accent-purple mb-3">
              Featured Work
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Showcasing excellence across design, branding, and digital innovation
            </p>
          </div>

          {/* Colorful Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.filter(p => p).slice(0, 6).map((project) => (
              <div
                key={project.id}
                onClick={() => openGallery(project)}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-2xl border border-gray-200/50 cursor-pointer"
              >
                {/* Colored border based on gradient */}
                {project?.gradient && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-70 group-hover:opacity-100 transition-opacity shadow-sm"
                    style={{
                      background: `linear-gradient(90deg, ${
                        project.gradient === 'from-purple-500 via-blue-500 to-cyan-500' ? '#a855f7, #3b82f6, #06b6d4' :
                        project.gradient === 'from-gray-900 via-gray-800 to-black' ? '#111827, #1f2937, #000' :
                        project.gradient === 'from-pink-500 via-purple-500 to-indigo-500' ? '#ec4899, #a855f7, #6366f1' :
                        project.gradient === 'from-orange-500 via-red-500 to-pink-500' ? '#f97316, #ef4444, #ec4899' :
                        project.gradient === 'from-emerald-500 via-teal-500 to-cyan-500' ? '#10b981, #14b8a6, #06b6d4' :
                        '#facc15, #f97316, #ef4444'
                      })`
                    }}
                  />
                )}
                
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={project?.thumbnail || '/placeholder.svg'}
                    alt={project?.title || 'Project'}
                    fill
                    className="object-cover transition-transform duration-500 ease-out"
                    style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    unoptimized
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative bg-gradient-to-b from-white to-gray-50/50 p-6 z-20 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-xs text-accent-purple uppercase tracking-wider font-semibold">
                      {project?.category}
                    </div>
                    {project?.demoUrl && (
                      <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-xs font-semibold flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </div>
                    )}
                    <div className="flex-1 h-px bg-gradient-to-r from-accent-purple/20 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent-purple transition-colors">
                    {project?.title}
                  </h3>
                  {project?.description && (
                    <p className="text-sm text-gray-600 font-normal line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  )}
                  
                  {/* Tech Stack Icons */}
                  {project?.techStack && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200/50">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg hover:border-accent-purple/30 hover:bg-white transition-all group/tech"
                        >
                          {tech.svgIcon ? (
                            <Image 
                              src={tech.svgIcon} 
                              alt={tech.name} 
                              width={14}
                              height={14}
                              className="w-3.5 h-3.5"
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
                          ) : tech.icon && (
                            <span className="text-xs group-hover/tech:scale-110 transition-transform">{tech.icon}</span>
                          )}
                          <span className="text-xs font-medium text-gray-600">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-purple text-white rounded-2xl font-semibold text-base hover:bg-accent-purple/90 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1"
            >
              <span>View all work</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/projects/regium touch/v880-techi-12-a.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-purple mb-3">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Real feedback from those we&apos;ve worked with
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Video - Full Width at Top */}
            <div className="relative w-full">
              <video
                src="/projects/regium touch/video/client tesimonial video.mp4"
                className="w-full aspect-video object-cover"
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="/projects/regium touch/logo.jpg"
              />
            </div>
            
            {/* Content - Below Video */}
            <div className="p-10 md:p-14">
              {/* Quote */}
              <div className="mb-8">
                <svg className="w-12 h-12 text-accent-purple/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.464-10.681v3.459c-2.15.241-3.814 1.451-4.996 3.339v2.293h5.532v7.391h-9.46zm-14.017 0v-7.391c0-5.704 3.748-9.57 9.483-10.681v3.459c-2.152.241-3.817 1.451-5 3.339v2.293h5.532v7.391h-9.046z"/>
                </svg>
                <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light max-w-4xl">
                  &ldquo;Regium Touch is giving hope to anyone who has a story to tell that that story will be told in the best way possible.&rdquo;
                </blockquote>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-900 text-xl">
                    Francis Stevens George
                  </h4>
                  <p className="text-accent-purple font-semibold">
                    CEO, Innovation SL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-96 flex-shrink-0">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
                <Image
                  src="/projects/regium touch/logo.jpg"
                  alt="Regium Touch"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-accent-purple mb-6">
                About Us
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Regium Touch is a creative digital marketing agency based in Freetown, Sierra Leone, 
                  dedicated to helping brands grow and empowering the next generation of digital marketers.
                </p>
                <p>
                  We provide a full range of digital services — from brand identity design, web development, 
                  and content creation to social media management, paid advertising, and digital strategy — 
                  helping startups and small businesses connect meaningfully with their audiences and achieve 
                  measurable results.
                </p>
                <p>
                  Beyond client work, we are passionate about training and equipping aspiring digital marketers 
                  through workshops, bootcamps, and short courses that blend creativity, strategy, and hands-on 
                  learning. Our mission is to raise a new wave of skilled professionals who can transform 
                  Africa&apos;s digital economy.
                </p>
                <p className="font-medium text-accent-purple">
                  At Regium Touch, creativity meets purpose. We don&apos;t just create campaigns; we build 
                  stories that inspire, educate, and drive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/projects/regium touch/v880-techi-12-a.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-accent-purple mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
              Comprehensive creative services to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Graphic Design', 
                icon: '🎨', 
                desc: 'Creating stunning visual identities, logos, and print materials that capture your brand\'s essence',
                color: 'from-pink-500 to-rose-600'
              },
              { 
                title: 'Video Production', 
                icon: '🎬', 
                desc: 'Professional video content including commercials, testimonials, and documentary-style productions',
                color: 'from-purple-500 to-indigo-600'
              },
              { 
                title: 'Photography', 
                icon: '📸', 
                desc: 'Capturing moments and telling stories through high-quality photography and visual narratives',
                color: 'from-blue-500 to-cyan-600'
              },
              { 
                title: 'Branding', 
                icon: '✨', 
                desc: 'Complete brand identity development from concept to execution across all touchpoints',
                color: 'from-emerald-500 to-teal-600'
              },
              { 
                title: 'Web Design', 
                icon: '💻', 
                desc: 'Modern, responsive websites that deliver exceptional digital experiences for your audience',
                color: 'from-orange-500 to-amber-600'
              },
              { 
                title: 'Visual Storytelling', 
                icon: '📖', 
                desc: 'Crafting compelling narratives through multimedia content that connects with audiences',
                color: 'from-violet-500 to-purple-600'
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-purple/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-accent-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-accent-purple mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-500 font-light">
              Let&apos;s discuss your next project
            </p>
          </div>

          {/* Two Card Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-purple focus:bg-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-purple focus:bg-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-purple focus:bg-white transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value || ''
                      const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value || ''
                      const message = (document.querySelector('textarea')?.value || '')
                      const subject = encodeURIComponent('Contact from Portfolio')
                      const body = encodeURIComponent(
                        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                      )
                      window.location.href = `mailto:info@regiumtouch.com?subject=${subject}&body=${body}`
                    }}
                    className="flex-1 bg-accent-purple hover:bg-accent-purple/90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent-purple/30 hover:shadow-xl hover:shadow-accent-purple/40 hover:-translate-y-1 group"
                  >
                    <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Email</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value || ''
                      const message = document.querySelector('textarea')?.value || ''
                      const whatsappMessage = encodeURIComponent(
                        `*Contact from Portfolio*\n\nName: ${name}\n\nMessage: ${message}`
                      )
                      window.open(`https://wa.me/23279279027?text=${whatsappMessage}`, '_blank')
                    }}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.967-.944 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Logo & Info Card */}
            <div className="bg-gradient-to-br from-accent-purple to-indigo-600 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl">
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <div className="mb-8">
                  <Image
                    src="/projects/regium touch/logo.jpg"
                    alt="Regium Touch"
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
                    unoptimized
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">
                  Ready to bring your vision to life?
                </h3>
                <p className="text-white/90 text-center leading-relaxed mb-8">
                  Whether it&apos;s graphic design, video production, or web development, we&apos;re here to help turn your ideas into reality.
                </p>
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Mail size={20} />
                    <span className="text-sm">info@regiumtouch.com</span>
                  </div>
                  <a 
                    href="tel:+23279279027"
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/20 transition-all"
                  >
                    <Phone size={20} />
                    <span className="text-sm">+232 79 279027</span>
                  </a>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

