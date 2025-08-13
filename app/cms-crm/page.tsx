import { Database, Car, Settings, BarChart3, Users, FileText, Calendar, Shield, Zap, Target, Clock, CheckCircle, TrendingUp, Package, Wrench, DollarSign } from 'lucide-react'

export default function CmsCrmPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              CMS & CRM Systemen
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Beheer inkoop, klanten, onderdelen, verkoop en voorraad vanuit één krachtig platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financieel Beheer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Financieel Beheer
              </h3>
              <p className="text-gray-600 mb-4">
                Complete boekhouding, facturering en financiële rapportages. 
                Track inkomsten, uitgaven en winstmarges per voertuig.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Automatische facturering
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Winstmarge berekening
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Financiële rapportages
                </li>
              </ul>
            </div>

            {/* Klantbeheer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Klantbeheer (CRM)
              </h3>
              <p className="text-gray-600 mb-4">
                Complete klantprofielen met aankoopgeschiedenis, service records en 
                communicatie. Verhoog klanttevredenheid en verkoopkansen.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Klantprofielen en geschiedenis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Service planning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Automatische herinneringen
                </li>
              </ul>
            </div>

             {/* Onderdelenbeheer */}
             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Onderdelenbeheer
              </h3>
              <p className="text-gray-600 mb-4">
                Uitgebreide catalogus van auto-onderdelen met prijzen, leveranciers 
                en compatibiliteit. Eenvoudig zoeken en bestellen.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Onderdelen catalogus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Leverancier integratie
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Compatibiliteitscheck
                </li>
              </ul>
            </div>

            {/* Service Beheer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Beheer
              </h3>
              <p className="text-gray-600 mb-4">
                Plan en beheer service afspraken, onderhoud en reparaties. 
                Automatische herinneringen en service geschiedenis.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Service planning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Onderhoudsherinneringen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Reparatie tracking
                </li>
              </ul>
            </div>

            {/* Verkoopbeheer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Verkoopbeheer
              </h3>
              <p className="text-gray-600 mb-4">
                Beheer verkoopprocessen van offerte tot factuur. Track leads, 
                verkoopkansen en automatiseer verkoopworkflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Lead management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Offerte generatie
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Verkooprapportages
                </li>
              </ul>
            </div>
            
            {/* Voorraadbeheer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Voorraadbeheer
              </h3>
              <p className="text-gray-600 mb-4">
                Beheer uw complete occasionpark en onderdelenvoorraad. Real-time updates, 
                automatische voorraadwaarschuwingen en uitgebreide rapportages.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Automatische voorraadupdates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Onderdelen catalogus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                  Voorraadwaarschuwingen
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor een CMS/CRM systeem?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Real-time Data */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Data
              </h3>
              <p className="text-gray-600">
                Altijd actuele informatie over inkoop, klanten, verkoop en voorraad
              </p>
            </div>

            {/* Veiligheid */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Veilige Cloud Opslag
              </h3>
              <p className="text-gray-600">
                Uw data is veilig opgeslagen met een back-up en altijd toegankelijk
              </p>
            </div>

            {/* Automatisering */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Volledige Automatisering
              </h3>
              <p className="text-gray-600">
                Automatiseer repetitieve taken en focus op wat echt belangrijk is
              </p>
            </div>

            {/* Support */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Wij zijn altijd bereikbaar voor advies en ondersteuning, zelfs &apos;s nachts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technische Kenmerken
              </h2>
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API integratie</h3>
                    <p className="text-gray-600">Eenvoudige integratie met bestaande systemen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatische backups</h3>
                    <p className="text-gray-600">Uw data wordt dagelijks veilig opgeslagen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud opslag</h3>
                    <p className="text-gray-600">Toegankelijk vanaf elke locatie en alle apparaten</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Geschikt voor mobiel</h3>
                    <p className="text-gray-600">Beheer uw bedrijf onderweg</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Starten met CMS/CRM
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Klaar om uw autobedrijf naar het volgende niveau te tillen? 
                Wij helpen bij de implementatie en bieden de nodige ondersteuning plus uitleg.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Gratis advies en demo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Ondersteuning en uitleg</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Persoonlijke implementatie</span>
                </li>
                
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Updates en verbeteringen</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Vraag een demo aan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Matching Homepage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Expertise</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
              20+ jaar ervaring in design en development.
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">500+</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                Projecten succesvol afgerond
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                Online klantenservice en ondersteuning.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 