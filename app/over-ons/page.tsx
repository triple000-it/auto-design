import { Check, Car, BarChart3, Search, Smartphone, Users, Zap, Shield, Target, Clock } from 'lucide-react'

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Over Auto Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Wij zijn gespecialiseerd in het creëren van krachtige online platformen voor de automotive sector. 
              Als toonaangevende webdevelopers helpen wij autobedrijven, autodealers, garages en handelaren om 
              hun digitale aanwezigheid en naamsbekendheid te optimaliseren en meer te kopen en/of verkopen.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse maatwerkoplossingen voor de moderne autobranche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Branchespecifieke websites */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Branchespecifieke websites
              </h3>
              <p className="text-gray-600">
                Specifiek ontworpen voor de unieke behoeften van autobedrijven, autodealers, garages en handelaren.
              </p>
            </div>

            {/* Geavanceerde voorraadsystemen */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Geavanceerde voorraadsystemen
              </h3>
              <p className="text-gray-600">
                Voor een eenvoudig beheer van al uw accessoires, auto onderdelen, banden, producten, velgen en/of voertuigen.
              </p>
            </div>

            {/* Leadgeneratietools */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Leadgeneratietools
              </h3>
              <p className="text-gray-600">
                Op doelgroep gebaseerde leads leveren meer aanmeldingen voor testritten, extra bestellingen en meer inkoop/verkoop deals.
              </p>
            </div>

            {/* Moderne techniek */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Moderne techniek
              </h3>
              <p className="text-gray-600">
              Geautomatiseerde, intelligente, snelle, toekomstbestendige en veilige apps, webshops en websites.
              </p>
            </div>

            {/* SEO-optimalisatie */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO-optimalisatie
              </h3>
              <p className="text-gray-600">
                Meer naamsbekendheid en betere vindbaarheid in zoekmachines, zowel lokaal, landelijk als internationaal.
              </p>
            </div>

            {/* Volledig responsive */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Volledig responsive
              </h3>
              <p className="text-gray-600">
                Automatisch aanpassen aan alle apparaten, dus altijd een perfecte weergave op desktop, laptop, mobiel en tablet.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Waarom partners kiezen Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor Auto-website.nl?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branchekennis */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Branchekennis
              </h3>
              <p className="text-gray-600">
                Diepgaand inzicht en jarenlange ervaring in de automotive markt.
              </p>
            </div>

            {/* Conversiefocus */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Conversiefocus
              </h3>
              <p className="text-gray-600">
                Elk element is gericht op het verhogen van de conversie en uw omzet.
              </p>
            </div>

            {/* Persoonlijke aanpak */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Persoonlijke aanpak
              </h3>
              <p className="text-gray-600">
              Alle projecten zijn maatwerk en altijd één vast contactpersoon.
              </p>
            </div>

            {/* Veilig */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Veiligheid
              </h3>
              <p className="text-gray-600">
              Antivirus, Backups, Firewall, SSL en de nodige beveiliging tegen hackers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Onze Belofte Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze expertise
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Wij geloven dat een autowebsite meer moet zijn dan een digitale showroom - 
              het moet een inkoop en/of verkoopmachine zijn. Onze oplossingen combineren aantrekkelijk 
              design met slimme functionaliteiten (bijvoorbeeld door AI technologie) die daadwerkelijk resultaat opleveren.
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Klaar om te starten?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Neem vandaag nog contact op voor een vrijblijvend adviesgesprek.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Clock className="w-5 h-5 mr-2" />
                Aanvragen
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