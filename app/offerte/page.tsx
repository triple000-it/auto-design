'use client'

import QuoteRequestForm from '../components/QuoteRequestForm'
import { useQuoteForm } from '../hooks/useQuoteForm'

export default function OffertePage() {
  const { isQuoteFormOpen, openQuoteForm, closeQuoteForm } = useQuoteForm()

  return (
    <>
      {/* Hero Section - Same as homepage */}
      <section className="relative bg-gradient-to-br from-[#3c2774] to-[#2c5765] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Offerte Aanvragen
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Vul het onderstaande formulier in om een vrijblijvende offerte aan te vragen voor uw project. 
              Ons team neemt binnen 24 uur contact met u op.
            </p>
            
            {/* Center the quote form */}
            <div className="flex justify-center">
              <QuoteRequestForm isOpen={true} onClose={() => {}} />
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </section>


    </>
  )
}
