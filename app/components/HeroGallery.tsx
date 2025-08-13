'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { createPortal } from 'react-dom'

const HeroGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)

  // Function to check if an image exists
  const checkImageExists = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = src
    })
  }

  // Function to find the first available image quickly
  const findFirstImage = async (): Promise<string | null> => {
    // Check common formats for the first few images
    const formats = ['png', 'jpg', 'jpeg']
    const maxCheck = 10 // Only check first 10 images for initial load
    
    for (let i = 1; i <= maxCheck; i++) {
      for (const format of formats) {
        const imagePath = `/images/${i}.${format}`
        const exists = await checkImageExists(imagePath)
        if (exists) {
          return imagePath
        }
      }
    }
    return null
  }

  // Function to load all images in background
  const loadAllImages = async (firstImage: string) => {
    const availableImages: string[] = [firstImage] // Start with the first image
    
    // Load the rest of the images in background
    for (let i = 1; i <= 100; i++) {
      const formats = ['png', 'jpg', 'jpeg']
      for (const format of formats) {
        const imagePath = `/images/${i}.${format}`
        if (imagePath !== firstImage) { // Skip the first image we already have
          const exists = await checkImageExists(imagePath)
          if (exists) {
            availableImages.push(imagePath)
          }
        }
      }
    }

    setGalleryImages(availableImages)
    setIsFullyLoaded(true)
  }

  // Load first image quickly, then load rest in background
  useEffect(() => {
    const initializeGallery = async () => {
      setIsLoading(true)
      
      // Find first image quickly
      const firstImage = await findFirstImage()
      
      if (firstImage) {
        // Show first image immediately
        setGalleryImages([firstImage])
        setIsLoading(false)
        
        // Load all images in background
        loadAllImages(firstImage)
      } else {
        // No images found
        setGalleryImages([])
        setIsLoading(false)
        setIsFullyLoaded(true)
      }
    }

    initializeGallery()
  }, [])

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLightboxOpen])

  // Auto-play functionality (only if multiple images exist and fully loaded)
  useEffect(() => {
    if (galleryImages.length <= 1 || !isFullyLoaded) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length, isFullyLoaded])

  const nextSlide = () => {
    if (galleryImages.length <= 1) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    if (galleryImages.length <= 1) return
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="relative w-full aspect-[16/9] scale-125">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-lg">Laden...</div>
        </div>
      </div>
    )
  }

  // Show message if no images found
  if (galleryImages.length === 0) {
    return (
      <div className="relative w-full aspect-[16/9] scale-125">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-lg">Geen afbeeldingen gevonden</div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Gallery Trigger Button */}
      <div className="relative w-full aspect-[16/9] scale-125">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={galleryImages[currentIndex]}
            alt=""
            className="w-full h-full object-contain transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => {
              console.log('Image clicked, opening full-screen gallery')
              setIsLightboxOpen(true)
            }}
          />
          
          {/* Clickable overlay for better text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={() => {
              console.log('Overlay clicked, opening full-screen gallery')
              setIsLightboxOpen(true)
            }}
          />
        </div>

        {/* Navigation Arrows - only show if multiple images and fully loaded */}
        {galleryImages.length > 1 && isFullyLoaded && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Volgende afbeelding"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Loading indicator for background loading */}
        {!isFullyLoaded && galleryImages.length === 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            Laden...
          </div>
        )}
      </div>

      {/* Full-Screen Gallery Overlay */}
      {isLightboxOpen && createPortal(
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            width: '100vw',
            height: '100vh'
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsLightboxOpen(false)
              }}
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/70 hover:bg-black/90 rounded-full p-3 focus:outline-none focus:ring-0 border-0"
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              aria-label="Sluiten"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Gallery Navigation - only show if multiple images and fully loaded */}
            {galleryImages.length > 1 && isFullyLoaded && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex((prevIndex) => 
                      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
                    )
                  }}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 border-0"
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                  aria-label="Vorige afbeelding"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
                  }}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 border-0"
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                  aria-label="Volgende afbeelding"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Full-Screen Image */}
            <img
              src={galleryImages[currentIndex]}
              alt=""
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter - only show if multiple images and fully loaded */}
            {galleryImages.length > 1 && isFullyLoaded && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-lg font-medium">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default HeroGallery 