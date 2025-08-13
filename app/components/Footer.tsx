'use client'

import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Link from 'next/link'

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'X (Twitter)', icon: XIcon, href: '#' },
    { name: 'TikTok', icon: TikTokIcon, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="text-white bg-gradient-to-br from-[#3c2774] to-[#2c5765]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Social Links and Copyright */}
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-white hover:text-gray-200 transition-all duration-200 p-2 hover:bg-white/10 rounded-lg min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white text-sm sm:text-base text-center">
            <b>Auto Design © {currentYear} </b><br /><span className="text-xs">Alle rechten voorbehouden.</span>
          </div>
        </div>

        {/* Created by */}
        <div className="text-center mt-4 pt-4 border-t border-white/20">
          <p className="text-white text-sm">
            <i>Made with ❤️ by: <b><a href="https://000.it.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors focus:outline-none focus:ring-0 border-0" style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>000.it.com</a></b></i>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 