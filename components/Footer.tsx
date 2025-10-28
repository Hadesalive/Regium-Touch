import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/projects/regium touch/logo.jpg"
                alt="Regium Touch"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="flex items-baseline gap-1 sm:gap-1.5">
              <span className="text-lg sm:text-xl font-light text-gray-900">
                Regium
              </span>
              <span className="text-lg sm:text-xl font-bold text-accent-purple">
                Touch
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
            <a
              href="mailto:info@regiumtouch.com"
              className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-accent-purple transition-colors text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">info@regiumtouch.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href="tel:+23279279027"
              className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-accent-purple transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">+232 79 279027</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-500 text-xs sm:text-sm">
            &copy; {currentYear} Regium Touch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

