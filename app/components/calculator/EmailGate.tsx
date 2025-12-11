'use client'

/**
 * Email Gate Component
 * Collects email before calculation, stores in Supabase
 */

import { useState } from 'react'

interface EmailGateProps {
  onSubmit: (email: string) => void
  isLoading: boolean
}

export default function EmailGate({ onSubmit, isLoading }: EmailGateProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Email is required')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setError('')
    onSubmit(email)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-playfair text-2xl font-bold mb-2 text-gold-500">Get Your Report</h3>
        <p className="text-gold-400/80 font-inter">
          Enter your email to receive your personalized opportunity cost analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            placeholder="your@email.com"
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
            required
          />
          {error && (
            <p className="text-sm text-red-400 mt-1 font-inter">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-forest-500 hover:bg-forest-600 text-white font-inter font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Calculating...
            </span>
          ) : (
            'Calculate My Opportunity Cost'
          )}
        </button>

        <p className="text-xs text-center text-gold-500/60 font-inter">
          We respect your privacy. Your email will only be used to send you the report.
        </p>
      </form>
    </div>
  )
}

