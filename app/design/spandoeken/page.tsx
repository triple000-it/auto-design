'use client'

import Link from 'next/link'
import QuoteRequestForm from '../../components/QuoteRequestForm'
import { useQuoteForm } from '../../hooks/useQuoteForm'
import { ArrowRight, CheckCircle, Palette, Building, Truck, Sun, Wind } from 'lucide-react'

export default function SpandoekenPage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionele Spandoeken
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Duurzame en opvallende spandoeken voor maximale zichtbaarheid. Van bouwplaatsen tot evenementen - wij leveren kwaliteit.
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
              Wij bieden verschillende maten en soorten spandoeken voor elke toepassing en locatie!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Event Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evenementen</h3>
              <p className="text-gray-600 mb-6">
                Opvallende spandoeken voor evenementen, festivals en bijeenkomsten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Event-specifiek design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Snelle installatie
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Herbruikbaar
                </li>
              </ul>
            </div>

            {/* Outdoor Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outdoor</h3>
              <p className="text-gray-600 mb-6">
                Professionele outdoor spandoeken voor permanente en tijdelijke toepassingen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Weerbestendig
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Verschillende formaten
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Duurzame materialen
                </li>
              </ul>
            </div>

            {/* Privacy Banners */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy</h3>
              <p className="text-gray-600 mb-6">
                Spandoeken voor afscherming en privacy. Duurzaam en vooral uniek.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Eigen ontwerpen mogelijk!
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  UV-bestendige prints
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Langdurige zichtbaarheid
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
              Waarom kiezen voor onze spandoeken?
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
                Unieke en opvallende designs die aandacht trekken
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installatie service</h3>
              <p className="text-gray-600">
                Professionele installatie en montage service
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

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weerbestendig</h3>
              <p className="text-gray-600">
                Duurzame materialen voor alle weersomstandigheden
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
              Van concept tot installatie in 5 eenvoudige stappen
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultatie</h3>
              <p className="text-gray-600">
                We bespreken uw wensen en locatie
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Productie</h3>
              <p className="text-gray-600">
                Kwaliteitsproductie met premium materialen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Levering</h3>
              <p className="text-gray-600">
                Snelle levering op uw adres
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installatie</h3>
              <p className="text-gray-600">
                Professionele installatie en montage
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