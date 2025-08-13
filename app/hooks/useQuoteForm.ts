import { useState } from 'react'

export function useQuoteForm() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  const openQuoteForm = () => setIsQuoteFormOpen(true)
  const closeQuoteForm = () => setIsQuoteFormOpen(false)

  return {
    isQuoteFormOpen,
    openQuoteForm,
    closeQuoteForm
  }
}
