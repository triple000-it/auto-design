'use client'

import { Check, Star, Zap, Crown, Diamond, Shield, Users, BarChart3, Search, Smartphone, Database, Sparkles, Trophy, Gem, Instagram, Facebook, Twitter, Linkedin, Youtube, MessageCircle, Image, Palette, Target, TrendingUp, Share2, Heart, Eye, MousePointer, Smartphone as Mobile, Monitor, Tablet, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import QuoteRequestForm from '../components/QuoteRequestForm'

export default function SocialMediaPage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Social Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Professionele designs die uw merk laten opvallen en betrokkenheid verhogen
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van profielafbeeldingen tot advertentiecampagnes - wij creëren alles wat u nodig heeft voor een sterke Social Media aanwezigheid.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Pictures & Avatars */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Profielafbeeldingen & Avatars
              </h3>
              <p className="text-gray-600 mb-4">
                Professionele profielfoto's en avatars voor alle social media platformen
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  LinkedIn profielfoto's
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Instagram avatars
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Facebook profielbeelden
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Twitter profielfoto's
                </li>
              </ul>
            </div>

            {/* Social Media Banners */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Social Media Banners
              </h3>
              <p className="text-gray-600 mb-4">
                Opvallende header afbeeldingen voor alle social media platformen
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  LinkedIn company banners
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Facebook cover foto's
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Twitter header afbeeldingen
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  YouTube channel art
                </li>
              </ul>
            </div>

            {/* Advertisement Designs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advertentie Designs
              </h3>
              <p className="text-gray-600 mb-4">
                Krachtige advertentie afbeeldingen voor alle social media advertentieplatformen
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Facebook Ads
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Instagram Ads
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  LinkedIn Ads
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Google Display Ads
                </li>
              </ul>
            </div>

            {/* Product Images */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Product Afbeeldingen
              </h3>
              <p className="text-gray-600 mb-4">
                Professionele productfoto's en lifestyle beelden voor social media
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Product showcases
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Lifestyle beelden
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Product collages
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Infographics
                </li>
              </ul>
            </div>

            {/* Story & Reel Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stories & Reels Content
              </h3>
              <p className="text-gray-600 mb-4">
                Verticale content voor Instagram Stories, Facebook Stories en TikTok
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Instagram Stories
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Facebook Stories
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  TikTok content
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  YouTube Shorts
                </li>
              </ul>
            </div>

            {/* Brand Identity */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Merk Identiteit
              </h3>
              <p className="text-gray-600 mb-4">
                Consistente merkstijl voor alle social media platformen
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Kleurenschema's
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Typografie
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Visuele elementen
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-accent-500 mr-2" />
                  Stijlhandleidingen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform-Specific Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform-specifieke oplossingen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ieder Social Media platform heeft eigen vereisten en mogelijkheden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Posts (1:1, 4:5, 16:9)</li>
                <li>• Stories (9:16)</li>
                <li>• Reels (9:16)</li>
                <li>• IGTV thumbnails</li>
                <li>• Carousel posts</li>
              </ul>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Facebook</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Posts (1.91:1)</li>
                <li>• Cover foto's (2.7:1)</li>
                <li>• Stories (9:16)</li>
                <li>• Advertenties</li>
                <li>• Event afbeeldingen</li>
              </ul>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Posts (1.91:1)</li>
                <li>• Company banners</li>
                <li>• Profielfoto's</li>
                <li>• Advertenties</li>
                <li>• Event afbeeldingen</li>
              </ul>
            </div>

            {/* Twitter/X */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center mb-4">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Twitter/X</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Posts (16:9)</li>
                <li>• Header afbeeldingen</li>
                <li>• Profielfoto's</li>
                <li>• Advertenties</li>
                <li>• Moment afbeeldingen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor onze Social Media designs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionele kwaliteit die uw merk laat opvallen en engagement verhoogt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zichtbaarheid</h3>
              <p className="text-gray-600">
                Opvallende designs die uw content laten opvallen in drukke social media feeds
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement</h3>
              <p className="text-gray-600">
                Visueel aantrekkelijke content die likes, shares en comments stimuleert
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Groei</h3>
              <p className="text-gray-600">
                Consistente merkstijl die uw volgersaantal en bereik verhoogt
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Viral Potentieel</h3>
              <p className="text-gray-600">
                Shareable content die de kans op virale verspreiding vergroot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Responsive Social Media designs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle designs zijn geoptimaliseerd voor alle apparaten en schermformaten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mobile className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobiel</h3>
              <p className="text-gray-600">
                Geoptimaliseerd voor smartphones en tablets voor de beste mobiele ervaring
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Desktop</h3>
              <p className="text-gray-600">
                Scherpe weergave op desktop computers en laptops
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tablet className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tablet</h3>
              <p className="text-gray-600">
                Perfecte weergave op alle tablet formaten en oriëntaties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om uw Social Media een boost te geven?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Neem vandaag nog contact op voor een vrijblijvend gesprek over alle mogelijkheden.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setIsQuoteFormOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Offerte aanvragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Expertise</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                12+ jaar ervaring in Social Media
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">15.000+</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
              Social media designs gepost op platforms
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                Support en snelle levering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Modal */}
      <QuoteRequestForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </div>
  )
}
