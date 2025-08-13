'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Palette, Monitor, Smartphone, Truck } from 'lucide-react'
import QuoteRequestForm from '../../components/QuoteRequestForm'
import { useQuoteForm } from '../../hooks/useQuoteForm'

export default function BannersPage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionele Banners
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Maak indruk met opvallende banners die uw merk laten schitteren. Van digitale displays tot outdoor banners - wij creëren impactvolle designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openQuoteForm}
                className="bg-white text-[#3c2774] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Offerte aanvragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bieden een complete range aan banner oplossingen voor elke behoefte en locatie!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digitaal</h3>
              <p className="text-gray-600 mb-6">
                Dynamische digitale displays voor websites, social media en online campagnes. Perfect voor het bereiken van uw doelgroep online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Responsive design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Animaties en interactiviteit
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  A/B testing mogelijkheden
                </li>
              </ul>
            </div>

            {/* Mobile Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobiel</h3>
              <p className="text-gray-600 mb-6">
                Geoptimaliseerde banners voor mobiele apparaten. Perfect voor het bereiken van gebruikers onderweg.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mobiel-geoptimaliseerd
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Touch-friendly design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Snelle laadtijden
                </li>
              </ul>
            </div>

            {/* Outdoor Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outdoor</h3>
              <p className="text-gray-600 mb-6">
                Duurzame outdoor banners voor maximale zichtbaarheid. Weerbestendig materiaal voor langdurige impact.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Weerbestendig materiaal
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  UV-bestendige prints
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Verschillende formaten
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor onze banners?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionele kwaliteit, snelle levering en uitstekende resultaten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creatief design</h3>
              <p className="text-gray-600">
                Unieke en opvallende designs die uw merk laten schitteren
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digitale oplossingen</h3>
              <p className="text-gray-600">
                Moderne digitale banners voor online campagnes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoge kwaliteit</h3>
              <p className="text-gray-600">
                Premium materialen en professionele afwerking
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Snelle levering</h3>
              <p className="text-gray-600">
                Binnen 3-5 werkdagen geleverd op uw adres
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ons werkproces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van concept tot levering in 5 eenvoudige stappen
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultatie</h3>
              <p className="text-gray-600">
                We bespreken uw wensen en doelstellingen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Concept</h3>
              <p className="text-gray-600">
                We ontwikkelen creatieve concepten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Professionele uitwerking van het design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Productie</h3>
              <p className="text-gray-600">
                Kwaliteitsproductie met premium materialen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Levering</h3>
              <p className="text-gray-600">
                Snelle levering en installatie op locatie is mogelijk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tijd voor resultaat en verandering?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een gratis consultatie en ontvang direct een op maat gemaakte offerte voor uw project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openQuoteForm}
              className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Offerte aanvragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
          </div>
        </div>
      </section>

      {/* Quote Request Form Modal */}
      <QuoteRequestForm 
        isOpen={isQuoteFormOpen} 
        onClose={closeQuoteForm} 
      />
    </div>
  )
} 