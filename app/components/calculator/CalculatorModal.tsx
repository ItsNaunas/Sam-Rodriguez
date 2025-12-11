'use client'

/**
 * Calculator Modal Component
 * Modal wrapper for the opportunity cost calculator
 */

import { useEffect } from 'react'
import MultiStepForm from './MultiStepForm'

interface CalculatorModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-4xl bg-charcoal-900 rounded-2xl shadow-2xl overflow-hidden border border-gold-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-800 hover:bg-charcoal-700 border border-gold-500/30 transition-colors shadow-lg"
            aria-label="Close calculator"
          >
            <svg
              className="w-6 h-6 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border-b border-gold-500/30 px-8 py-6">
            <h2 className="font-playfair text-3xl font-bold mb-2 text-gold-500">
              Opportunity Cost Calculator
            </h2>
            <p className="text-gold-400/90 font-inter">
              Discover the hidden revenue you're leaving on the table
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 bg-charcoal-900">
            <MultiStepForm />
          </div>
        </div>
      </div>
    </div>
  )
}

