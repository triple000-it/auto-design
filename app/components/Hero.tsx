'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import HeroGallery from './HeroGallery'

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#3c2774] to-[#2c5765] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Een website nodig
                <span className="text-white block">voor uw autohandel?</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 max-w-lg leading-relaxed">
                Bijvoorbeeld voor een autobanden service, een dealership, een garage, export, import, inkoop, veiling, verkoop of een andere vorm van autohandel... Volledig op maat ontwikkelen wij zeer complete, interactieve en moderne projecten.
              </p>
              <p className="text-lg sm:text-xl text-gray-100 max-w-lg leading-relaxed">
                Onze apps, websites en webshops zijn slimmer dan de meeste websites, soms geautomatiseerd en werken samen met AI technologieën. Alle projecten zijn ontwikkeld met de laatste technologieën en worden op alle apparaten of web browsers altijd correct weergegeven.
              </p>
              <p className="text-lg sm:text-xl text-gray-100 max-w-lg leading-relaxed">
                Tevens bieden wij oplossingen voor CMS en CRM, maar ook voor design. Denk hierbij aan banners, brochures, flyers, logo&apos;s, magazines, posters, relatiegeschenken, spandoeken, stickers, visitekaartjes, vlaggen etc.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center text-base px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Neem vrijblijvend contact met ons op
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>


          </div>

          {/* Gallery */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <HeroGallery />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => {
          const statsSection = document.querySelector('section[class*="py-16 bg-white"]')
          if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-0 border-0"
        style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
        aria-label="Scroll naar beneden"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-gray-200 transition-colors">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse hover:bg-gray-200 transition-colors"></div>
        </div>
      </button>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Expertise</div>
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
              20+ jaar ervaring in design en development.
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">500+</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                Projecten succesvol afgerond
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                Online klantenservice en ondersteuning.
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero 