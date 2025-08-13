'use client'

import { useState, useEffect } from 'react'
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'CMS en CRM', href: '/cms-crm' },
    { 
      name: 'Design', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Banners', href: '/design/banners' },
        { name: 'Brochures', href: '/design/brochures' },
        { name: 'Flyers', href: '/design/flyers' },
        { name: 'Logo\'s', href: '/design/logos' },
        { name: 'Magazines', href: '/design/magazines' },
        { name: 'Posters', href: '/design/posters' },
        { name: 'Relatiegeschenken', href: '/design/relatiegeschenken' },
        { name: 'Spandoeken', href: '/design/spandoeken' },
        { name: 'Stickers', href: '/design/stickers' },
        { name: 'Visitekaartjes', href: '/design/visitekaartjes' },
        { name: 'Vlaggen', href: '/design/vlaggen' },
      ]
    },
    { name: 'Domeinnamen', href: 'https://auto-domein.nl' },
    { name: 'Prijzen', href: '/prijzen' },
    { name: 'Contact', href: '/contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
      if (isDesignDropdownOpen && !target.closest('.design-dropdown')) {
        setIsDesignDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen, isDesignDropdownOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
            >
              <img
                src="/WEBLOGO-AutoWebsites.png"
                alt="Auto Websites"
                className="h-14 lg:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="design-dropdown relative group/design">
                    <button
                      onClick={() => setIsDesignDropdownOpen(!isDesignDropdownOpen)}
                      className="inline-flex items-center text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium focus:outline-none focus:ring-0 border-0"
                      style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDesignDropdownOpen ? 'rotate-180' : ''} lg:group-hover/design:rotate-180`} />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 ${
                        isDesignDropdownOpen ? 'block' : 'hidden'
                      } lg:group-hover/design:block`}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-accent-500 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsDesignDropdownOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium focus:outline-none focus:ring-0 border-0"
                    style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 lg:p-3 text-gray-600 hover:text-accent-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Zoeken"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button 
              className="p-2 lg:p-3 text-gray-600 hover:text-accent-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Winkelwagen"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </button>

            {/* User */}
            <button 
              className="p-2 lg:p-3 text-gray-600 hover:text-accent-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Gebruikersaccount"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-accent-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Mobiel menu openen"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Zoek naar producten..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-0 focus:border-gray-200 text-base"
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 mobile-menu">
            <nav className="py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDesignDropdownOpen(!isDesignDropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:text-accent-500 hover:bg-gray-50 rounded-lg transition-colors text-base font-medium focus:outline-none focus:ring-0 border-0"
                        style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDesignDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDesignDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-accent-500 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsDesignDropdownOpen(false)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-3 text-gray-600 hover:text-accent-500 hover:bg-gray-50 rounded-lg transition-colors text-base font-medium focus:outline-none focus:ring-0 border-0"
                      style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 