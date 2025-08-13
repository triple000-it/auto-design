'use client'

import Link from 'next/link'
import QuoteRequestForm from '../../components/QuoteRequestForm'
import { useQuoteForm } from '../../hooks/useQuoteForm'
import { ArrowRight, CheckCircle, Palette, Gift, Users, Heart, Award } from 'lucide-react'

export default function RelatiegeschenkenPage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Relatiegeschenken
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Persoonlijke en vooral unieke relatiegeschenken die uw merk laten leven. Van gepersonaliseerde items tot premium cadeaus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openQuoteForm} className="bg-white text-[#3c2774] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">Offerte aanvragen<ArrowRight className="ml-2 w-5 h-5" /></button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bieden een complete range aan mogelijke relatiegeschenken voor elke gelegenheid!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office Items */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gadgets</h3>
              <p className="text-gray-600 mb-6">
                Praktische artikelen met uw bedrijfslogo. Gepersonaliseerd, opvallend en uniek.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Aanstekers / pennen / sleutelhangers
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Notitieblokken / Planners / Schrijfblokken
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  GPS-tags / USB-sticks 
                </li>
              </ul>
            </div>

            {/* Clothing & Accessories */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kleding en Accessoires</h3>
              <p className="text-gray-600 mb-6">
                Comfortabele en stijlvolle accessoires en kleding met uw bedrijfslogo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Bedrijfspolo&apos;s
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Caps en petten
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tassen en rugzakken
                </li>
              </ul>
            </div>

            {/* Premium Gifts */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Cadeaus</h3>
              <p className="text-gray-600 mb-6">
                Luxe relatiegeschenken voor speciale gelegenheden en belangrijke relaties.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Champagne / Wijn
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Chocolade / Gourmet / Kerst pakketten
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  VIP geschenken
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
              Waarom kiezen voor onze relatiegeschenken?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kwaliteitsproducten, snelle levering en uitstekende service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gepersonaliseerd</h3>
              <p className="text-gray-600">
                Elk item wordt gepersonaliseerd met uw logo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoge kwaliteit</h3>
              <p className="text-gray-600">
                Premium materialen en duurzame producten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Relatieversterking</h3>
              <p className="text-gray-600">
                Versterk uw relaties met persoonlijke aandacht
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uitgebreid assortiment</h3>
              <p className="text-gray-600">
                Van praktisch tot luxe - voor elke gelegenheid
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selectie</h3>
              <p className="text-gray-600">
                We kiezen de perfecte producten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalisation</h3>
              <p className="text-gray-600">
                Uw logo wordt toegevoegd aan de producten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Productie</h3>
              <p className="text-gray-600">
                Kwaliteitsproductie van uw items in grote aantallen
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
            <button onClick={openQuoteForm} className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">Offerte aanvragen<ArrowRight className="ml-2 w-5 h-5" /></button>
            
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