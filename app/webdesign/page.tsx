import { Check, Star, Zap, Crown, Diamond, Shield, Users, BarChart3, Search, Smartphone, Database, Sparkles, Trophy, Gem } from 'lucide-react'

export default function WebdesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Webdesign
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Van eenvoudige website tot complete business oplossing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
           
          </div>

          {/* Starter Pack Row */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative max-w-2xl">
              <div className="text-center mb-8">
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">€ 399,00</div>
                <p className="text-gray-600 text-sm">Binnen 24-48 uur online!</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Responsive design</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Maximaal 10 pagina&apos;s</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Basis SEO</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Content beheer (CMS)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Webhosting (1 jaar)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">.NL domeinnaam (1 jaar)</span>
                </div>
              </div>

              <a 
                href="/contact" 
                className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-br hover:from-[#3c2774] hover:to-[#2c5765] hover:text-white transition-all duration-200 text-center block"
              >
                Aanvragen
              </a>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brons Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">€ 699,00</div>
                <p className="text-gray-600 text-sm">Google Business + SEO</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Responsive design</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Maximaal 100 pagina&apos;s</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">SEO Basis</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Content beheer (CMS)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google Business setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google Search Console</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Social Media connect</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Cloud Hosting (1 jaar)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">.NL domeinnaam (1 jaar)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">24/7 online support</span>
                </li>
              </ul>

              <a 
                href="/contact" 
                className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-br hover:from-[#3c2774] hover:to-[#2c5765] hover:text-white transition-all duration-200 text-center block"
              >
                Aanvragen
              </a>
            </div>

            {/* Silver Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-accent-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populair
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">€ 1.249,00</div>
                <p className="text-gray-600 text-sm">Google Ads + Meta Ads + Pixel</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Alles van Business</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Onbeperkte pagina&apos;s</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">SEO Standaard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google Ads setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Meta Ads setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Meta Business Suite</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Meta Campaign advies</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Meta Pixel setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">ROAS analyse</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">2 talen ( NL + EN )</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Wekelijkse rapportages</span>
                </li>
                
              </ul>

              <a 
                href="/contact" 
                className="w-full bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold py-3 px-6 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 text-center block"
              >
                Aanvragen
              </a>
            </div>

            {/* Goud Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">€ 1.699,00</div>
                <p className="text-gray-600 text-sm">CRM + E-commerce + Talen</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Alles van Expert</span>
                </li>
                
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Telefonische support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">SEO Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Boekingssysteem</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">CRM systeem</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">E-commerce</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Klantbeheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Planning</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">To-Do List</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Voorraadbeheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">6 talen ( naar keuze )</span>
                </li>
                
              </ul>

              <a 
                href="/contact" 
                className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-br hover:from-[#3c2774] hover:to-[#2c5765] hover:text-white transition-all duration-200 text-center block"
              >
                Aanvragen
              </a>
            </div>

            {/* Diamant Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">VIP</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Op aanvraag</div>
                <p className="text-gray-600 text-sm">Alleen mogelijk in goed overleg</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Alles van Pro</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Community beheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Dagelijkse rapportages</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Extra talen</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google #1 ranking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Google Ads beheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Meta Ads beheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">TikTok Ads beheer</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Video Chat Helpdesk</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-gray-700">Persoonlijke accountmanager</span>
                </li>
              </ul>

              <a 
                href="/contact" 
                className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-br hover:from-[#3c2774] hover:to-[#2c5765] hover:text-white transition-all duration-200 text-center block"
              >
                Aanvragen
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Alle prijzen zijn exclusief 21% BTW.
            </p>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wat is inbegrepen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle pakketten bevatten essentiële functies voor uw online succes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive</h3>
              <p className="text-gray-600">
                Perfecte weergave op alle apparaten: desktop, tablet en mobiel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Ready</h3>
              <p className="text-gray-600">
                Geoptimaliseerd voor zoekmachines voor betere vindbaarheid
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Technische ondersteuning en regelmatige updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Veiligheid</h3>
              <p className="text-gray-600">
              Antivirus, Backups, Firewall, SSL en de nodige beveiliging tegen hackers
              </p>
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
