'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Work' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4' 
        : 'py-6'
    }`}>
      {/* Background */}
      <motion.div 
        className="absolute inset-0 border-b"
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
          borderColor: scrolled ? 'rgba(229, 231, 235, 1)' : 'rgba(229, 231, 235, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      <nav className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 z-10 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-accent-purple transition-all">
              <Image
                src="/projects/regium touch/logo.jpg"
                alt="Regium Touch"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-light text-gray-900">
                Regium
              </span>
              <span className="text-xl font-bold text-accent-purple">
                Touch
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-purple rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block z-10">
            <a
              href="/#contact"
              className="text-sm font-semibold px-6 py-2.5 bg-accent-purple hover:bg-accent-purple/90 text-white rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} className="text-gray-900" /> : <Menu size={22} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-6 relative"
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col py-2">
                  {links.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-6 py-3 text-sm font-semibold transition-colors ${
                          isActive
                            ? 'text-accent-purple bg-gray-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                  <div className="px-6 py-3 pt-4 border-t border-gray-200">
                    <a
                      href="/#contact"
                      className="block w-full text-center text-sm font-semibold px-6 py-2.5 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
