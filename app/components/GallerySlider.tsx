'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-11.jpg',
    '/images/gallery-12.jpg',
    '/images/gallery-13.jpg',
    '/images/gallery-14.jpg',
    '/images/gallery-15.jpg',
    '/images/gallery-16.jpg',
    '/images/gallery-17.jpg',
    '/images/gallery-18.jpg',
    '/images/gallery-19.jpg',
    '/images/gallery-20.jpg',
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, galleryImages.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Onze Galerij
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek onze collectie van prachtige afbeeldingen en projecten
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-square max-w-2xl mx-auto mb-8">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement
                  target.src = 'https://via.placeholder.com/600x600/4a4a4a/ffffff?text=Gallery+Image'
                }}
              />
              
              {/* Image overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label="Volgende afbeelding"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center">
            <div className="flex space-x-2 overflow-x-auto pb-4 max-w-full">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    index === currentIndex 
                      ? 'ring-2 ring-accent-500 scale-105' 
                      : 'ring-1 ring-gray-200 hover:ring-accent-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement
                      target.src = 'https://via.placeholder.com/64x64/4a4a4a/ffffff?text=Thumb'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Auto-play Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySlider 