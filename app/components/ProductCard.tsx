'use client'

import { Heart, ShoppingBag, Eye } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    currency: string
    image: string
    category: string
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.currency,
    }).format(price)
  }

  return (
    <div className="product-card group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-100">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isWishlisted
                ? 'bg-accent-500 text-white hover:bg-accent-600 hover:scale-110'
                : 'bg-white text-gray-600 hover:text-accent-500 hover:bg-gray-50 hover:scale-110'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button 
            className="p-2 sm:p-3 rounded-full bg-white text-gray-600 hover:text-gray-900 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 sm:py-4 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Add to Cart</span>
          </button>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
                      <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg">
              SALE
            </div>
        )}

        {/* Discount Percentage */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">
          {product.category}
        </p>
        <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-accent-600 transition-colors line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm sm:text-base text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Quick Add Button for Mobile */}
        <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group-hover:hidden sm:hidden">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard 