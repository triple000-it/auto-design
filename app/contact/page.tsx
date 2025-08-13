import { Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Klaar om uw autobedrijf naar het volgende niveau te tillen?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                      placeholder="Uw voornaam"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                      placeholder="Uw achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                    placeholder="uw@email.nl"
                  />
                </div>



                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Onderwerp *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    
                    <option value="website">Website ontwikkeling</option>
                    <option value="cms">CMS/CRM systeem</option>
                    <option value="design">Design</option>
                    <option value="seo">SEO optimalisatie</option>
                    <option value="support">Technische support</option>
                    <option value="quote">Offerte aanvraag</option>
                    <option value="other">Overige</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Vertel ons meer over uw project of vraag..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold py-4 px-6 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Verstuur bericht
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informatie</h3>
                <p className="text-gray-600 mb-8">
                  
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600 mb-2">info@auto-websites.nl</p>
                    <p className="text-sm text-gray-500">Reactie binnen 12-24 uur</p>
                  </div>
                </div>



                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">+31687999505</p>
                    <p className="text-sm text-gray-500">Reactie binnen 4-8 uur, ook buiten kantooruren</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Adres</h4>
                    <p className="text-gray-600 mb-2">
                      Auto Design<br />
                      Zuid-Holland<br />
                      Nederland
                    </p>
                    <p className="text-sm text-gray-500">Op afspraak</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Openingstijden</h4>
                    <p className="text-gray-600 mb-2">
                      Maandag - Vrijdag: 8:00 - 20:00 uur<br />
                      Zaterdag: 8:00 - 20:00 uur<br />
                      Zondag: Gesloten
                    </p>
                    <p className="text-sm text-gray-500">24/7 online support beschikbaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor Auto Design?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gratis consultatie</h3>
              <p className="text-gray-600">
                Wij maken graag een afspraak voor een vrijblijvend adviesgesprek om uw ideeën, mogelijkheden en wensen te bespreken.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Persoonlijke aanpak</h3>
              <p className="text-gray-600">
                Contact met één vaste persoon gedurende de volledige looptijd van uw project. Wij zijn een team, maar geen call center.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Snelle reactie</h3>
              <p className="text-gray-600">
                Altijd binnen 12-24 uur een reactie op al uw aanvragen en vragen. Ook buiten kantooruren en in het weekend.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tijd voor resultaat en verandering?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Neem vandaag nog contact op voor een vrijblijvend gesprek over uw project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/31687999505" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp ons direct
            </a>
            <a 
              href="mailto:info@auto-websites.nl" 
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Stuur een e-mail
            </a>
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