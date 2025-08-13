'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'home', name: 'Home & Living' },
    { id: 'beauty', name: 'Beauty' },
  ]

  const products = [
    {
      id: '1',
      name: 'LIGHT CLOTH TAUPE BRIGHT',
      price: 139.00,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80',
      category: 'clothing',
    },
    {
      id: '2',
      name: 'BEANIE - GREY',
      price: 59.00,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'accessories',
    },
    {
      id: '3',
      name: 'KASCHMIR PULLOVER PATENT V-NECK - GRAU WOMEN',
      price: 279.00,
      originalPrice: 349.00,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80',
      category: 'clothing',
    },
    {
      id: '4',
      name: 'LORCAN',
      price: 69.95,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'accessories',
    },
    {
      id: '5',
      name: 'LAUREN',
      price: 89.95,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80',
      category: 'clothing',
    },
    {
      id: '6',
      name: 'LULABY',
      price: 64.95,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'accessories',
    },
    {
      id: '7',
      name: 'LEXA Denim Blue Bleach',
      price: 59.95,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80',
      category: 'clothing',
    },
    {
      id: '8',
      name: 'EFISIO Block Blue',
      price: 49.95,
      currency: 'EUR',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'accessories',
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium products that combine style, quality, and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] flex items-center justify-center ${
                activeCategory === category.id
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25 transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Load More Products
          </button>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="text-gray-400 text-6xl sm:text-8xl mb-4">📦</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try selecting a different category or check back later for new products.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts 