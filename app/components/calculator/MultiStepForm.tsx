'use client'

/**
 * Multi-Step Form Component
 * Manages form state and navigation through steps
 */

import { useState } from 'react'
import Step1Pricing from './steps/Step1Pricing'
import Step2Rates from './steps/Step2Rates'
import Step3Volume from './steps/Step3Volume'
import EmailGate from './EmailGate'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import OpportunityResult from './OpportunityResult'
import type { CalculatorInputs, APIResponse } from '@/lib/calculator/types'

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<APIResponse | null>(null)
  
  const [formData, setFormData] = useState<CalculatorInputs>({
    main_price: 0,
    upsell_price: 0,
    renewal_price: 0,
    currency: 'USD',
    upsell_rate: 0,
    renewal_rate: 0,
    result_rate: 0,
    referral_rate: 0,
    new_clients: 0,
    churn_clients: 0,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.main_price > 0
      case 2:
        return true // Rates can be 0
      case 3:
        return formData.new_clients >= 0
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleEmailSubmit = async (email: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Call API to calculate opportunity cost (email storage happens on server)
      const response = await fetch('/api/opportunity-cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...formData,
        }),
      })

      const data: APIResponse = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Calculation failed')
      }

      setResult(data)
      setCurrentStep(5) // Move to results view
    } catch (err) {
      console.error('Error:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    setCurrentStep(4) // Go back to email gate
  }

  // Show results
  if (currentStep === 5 && result) {
    return <OpportunityResult data={result} />
  }

  // Show error
  if (error) {
    return <ErrorState message={error} onRetry={handleRetry} />
  }

  // Show loading
  if (isLoading) {
    return <LoadingState />
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      {currentStep <= 3 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gold-400 font-inter">
              Step {currentStep} of 3
            </span>
            <span className="text-sm text-gold-500/70 font-inter">
              {Math.round((currentStep / 3) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-charcoal-800 rounded-full h-2">
            <div
              className="bg-gold-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Form Steps */}
      <div className="bg-charcoal-800 rounded-xl p-8 shadow-lg border border-gold-500/20">
        {currentStep === 1 && (
          <Step1Pricing formData={formData} onChange={updateFormData} />
        )}
        
        {currentStep === 2 && (
          <Step2Rates formData={formData} onChange={updateFormData} />
        )}
        
        {currentStep === 3 && (
          <Step3Volume formData={formData} onChange={updateFormData} />
        )}
        
        {currentStep === 4 && (
          <EmailGate onSubmit={handleEmailSubmit} isLoading={isLoading} />
        )}

        {/* Navigation Buttons */}
        {currentStep <= 3 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-gold-500/20">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gold-500/30 text-gold-500 rounded-lg font-inter font-medium hover:bg-gold-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!validateStep(currentStep)}
              className="px-6 py-3 bg-forest-500 hover:bg-forest-600 text-white font-inter font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {currentStep === 3 ? 'Continue to Email' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

