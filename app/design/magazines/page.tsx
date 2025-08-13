'use client'

import Link from 'next/link'
import QuoteRequestForm from '../../components/QuoteRequestForm'
import { useQuoteForm } from '../../hooks/useQuoteForm'
import { 
  FileText, 
  Palette, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Printer, 
  Eye,
  Zap,
  Calendar,
  Layers,
  Building,
  Package,
  Star
} from 'lucide-react'

export default function MagazinesPage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3c2774] to-[#2c5765] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professionele Magazines
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Van bedrijfsmagazines tot klantenmagazines - wij leveren kwaliteit en impact.
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
              Wij bieden verschillende soorten magazines voor elke behoefte en doelgroep!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Magazines */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfsmagazines</h3>
              <p className="text-gray-600 mb-6">
                Professionele bedrijfsmagazines die uw bedrijf en diensten presenteren.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Bedrijfsnieuws
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Medewerker interviews
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Project updates
                </li>
              </ul>
            </div>

            {/* Industry Magazines */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Branchemagazines</h3>
              <p className="text-gray-600 mb-6">
                Specialistische branchemagazines met diepgaande content en expert kennis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Expert artikelen
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Branche trends
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technische content
                </li>
              </ul>
            </div>

            {/* Customer Magazines */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Klantenmagazines</h3>
              <p className="text-gray-600 mb-6">
                Aantrekkelijke klantenmagazines met waardevolle informatie voor uw klanten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Klantverhalen
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tips en advies
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Aanbiedingen
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
              Waarom kiezen voor onze magazines?
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
                Unieke en opvallende designs die uw boodschap overbrengen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Doelgroepgericht</h3>
              <p className="text-gray-600">
                Magazines die uw specifieke doelgroep aanspreken
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoge kwaliteit</h3>
              <p className="text-gray-600">
                Premium papier en professionele drukwerk
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verschillende formaten</h3>
              <p className="text-gray-600">
                A4, A5, A6 en custom formaten beschikbaar
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drukwerk</h3>
              <p className="text-gray-600">
                Kwaliteitsdrukwerk met premium papier
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