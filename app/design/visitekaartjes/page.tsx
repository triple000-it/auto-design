'use client'

import Link from 'next/link'
import QuoteRequestForm from '../../components/QuoteRequestForm'
import { useQuoteForm } from '../../hooks/useQuoteForm'
import { ArrowRight, CheckCircle, Palette, CreditCard, Users, Star, Zap } from 'lucide-react'

export default function VisitekaartjesPage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionele Visitekaartjes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Maak een blijvende indruk met professionele visitekaartjes. Van klassiek tot modern - wij creëren visitekaartjes die uw bedrijf laten opvallen.
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
              Wij bieden verschillende formaten, materialen en stijlen voor uw visitekaartjes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Business Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Klassiek</h3>
              <p className="text-gray-600 mb-6">
                Tijdloze en elegante visitekaartjes die zeker een indruk zullen maken bij uw klanten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Elegant design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Premium papier
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Professionele uitstraling
                </li>
              </ul>
            </div>

            {/* Modern Business Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern</h3>
              <p className="text-gray-600 mb-6">
                Creatieve en innovatieve designs met een moderne en opvallende uitstraling.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Creatief design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Unieke materialen
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Opvallende uitstraling
                </li>
              </ul>
            </div>

            {/* Premium Business Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                Luxe visitekaartjes met speciale effecten en materialen voor een zeer unieke indruk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Speciale effecten
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Luxe materialen
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Unieke uitstraling
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
              Waarom kiezen voor onze visitekaartjes?
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
                Opvallend en uniek ontwerp
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoge kwaliteit</h3>
              <p className="text-gray-600">
                Premium afwerking en papier
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Snelle levering</h3>
              <p className="text-gray-600">
                Binnen 3-5 werkdagen geleverd
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verschillende formaten</h3>
              <p className="text-gray-600">
                Aangepast of standaard
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
                We bespreken uw wensen en stijl
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                We ontwikkelen het perfecte design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drukwerk</h3>
              <p className="text-gray-600">
                Kwaliteitsdrukwerk met premium papier
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Afwerking</h3>
              <p className="text-gray-600">
                Professionele afwerking en snijden
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Levering</h3>
              <p className="text-gray-600">
                Snelle levering op uw adres
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