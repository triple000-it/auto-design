'use client'

import { useState } from 'react'
import { X, Send, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react'

interface QuoteRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

const designServices = [
  'Adverteren',
  'CMS en CRM',
  'Banners',
  'Brochures',
  'Flyers',
  'Logo\'s',
  'Magazines',
  'Marketing',
  'Posters',
  'Relatiegeschenken',
  'Social Media',
  'Spandoeken',
  'Stickers',
  'Visitekaartjes',
  'Vlaggen',
  'Webshop',
  'Website'
]

export default function QuoteRequestForm({ isOpen, onClose }: QuoteRequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedServices: [] as string[],
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in'
    }

    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = 'Selecteer minimaal één service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Bedankt voor uw offerteaanvraag! We nemen binnen 24 uur contact met u op.')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          selectedServices: [],
          projectDescription: '',
          budget: '',
          timeline: '',
          additionalInfo: ''
        })
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage('Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3c2774] to-[#2c5765] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Offerte aanvragen</h2>
              <p className="text-sm text-gray-600">Vul het formulier in voor een op maat gemaakte offerte</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Client Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2 text-[#3c2774]" />
              Klantgegevens
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Naam <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Uw volledige naam"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="uw@email.nl"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                  placeholder="06 12345678"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                  placeholder="Uw bedrijfsnaam"
                />
              </div>
            </div>
          </div>

          {/* Services Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-[#3c2774]" />
              Selecteer gewenste services
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {designServices.map((service) => (
                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.selectedServices.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-4 h-4 text-[#3c2774] border-gray-300 rounded focus:ring-[#3c2774]"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            {errors.selectedServices && (
              <p className="text-red-500 text-sm">{errors.selectedServices}</p>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 text-left">Projectdetails</h3>
            
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Projectbeschrijving
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                placeholder="Beschrijf uw project, doelstellingen en specifieke wensen..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Budget (indien bekend)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                >
                  <option value="">Selecteer budget</option>
                  <option value="<1000">Minder dan €1.000</option>
                  <option value="1000-2500">€1.000 - €2.500</option>
                  <option value="2500-5000">€2.500 - €5.000</option>
                  <option value="5000-10000">€5.000 - €10.000</option>
                  <option value=">10000">Meer dan €10.000</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Gewenste leverdatum
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                >
                  <option value="">Selecteer timeline</option>
                  <option value="urgent">Zo spoedig mogelijk</option>
                  <option value="1-2weeks">1-2 weken</option>
                  <option value="1month">1 maand</option>
                  <option value="2-3months">2-3 maanden</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Aanvullende informatie
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c2774] focus:border-transparent"
                placeholder="Eventuele extra opmerkingen of specifieke vereisten..."
              />
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">{submitMessage}</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <X className="w-5 h-4 text-red-500 mr-2" />
                <p className="text-red-800 font-medium">{submitMessage}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Annuleren
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-gradient-to-br from-[#3c2774] to-[#2c5765] text-white rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-gray-900 hover:to-black'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Versturen...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Offerte aanvragen</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
