'use client'

/**
 * Opportunity Result Component
 * Displays the LLM-generated report and metrics
 */

import CTASection from './CTASection'
import type { APIResponse } from '@/lib/calculator/types'

interface OpportunityResultProps {
  data: APIResponse
}

export default function OpportunityResult({ data }: OpportunityResultProps) {
  if (!data.success || !data.report) {
    return null
  }

  // Parse markdown-style report for basic formatting
  const formatReport = (text: string) => {
    const lines = text.split('\n')
    
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="font-playfair text-3xl font-bold mt-8 mb-4 text-gold-500">{line.slice(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-playfair text-2xl font-bold mt-6 mb-3 text-gold-500">{line.slice(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="font-playfair text-xl font-semibold mt-4 mb-2 text-gold-400">{line.slice(4)}</h3>
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className="mb-2 font-inter text-gold-200">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-gold-400">{part}</strong> : part
            )}
          </p>
        )
      }
      
      // List items
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-1 font-inter text-gold-200">{line.slice(2)}</li>
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>
      }
      
      // Regular paragraphs
      return <p key={index} className="mb-2 font-inter text-gold-200">{line}</p>
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pb-6 border-b border-gold-500/20">
        <div className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 rounded-full text-sm font-medium mb-4 font-inter">
          ✓ Analysis Complete
        </div>
        <h2 className="font-playfair text-3xl font-bold text-gold-500">Your Opportunity Cost Report</h2>
      </div>

      {/* Report Content */}
      <div className="max-w-none">
        <div className="bg-charcoal-800 rounded-xl p-8 border border-gold-500/20 text-gold-200">
          {formatReport(data.report)}
        </div>
      </div>

      {/* Quick Metrics Summary */}
      {data.metrics && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gold-500/10 rounded-lg p-6 border border-gold-500/30">
            <div className="text-sm text-gold-400 font-medium mb-1 font-inter">
              Monthly Opportunity Cost
            </div>
            <div className="font-playfair text-3xl font-bold text-gold-500">
              ${data.metrics.total_oc_month.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-gold-500/10 rounded-lg p-6 border border-gold-500/30">
            <div className="text-sm text-gold-400 font-medium mb-1 font-inter">
              Yearly Opportunity Cost
            </div>
            <div className="font-playfair text-3xl font-bold text-gold-500">
              ${data.metrics.total_oc_year.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-gold-500/10 rounded-lg p-6 border border-gold-500/30">
            <div className="text-sm text-gold-400 font-medium mb-1 font-inter">
              Per Client Opportunity
            </div>
            <div className="font-playfair text-3xl font-bold text-gold-500">
              ${data.metrics.oc_per_new_client.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  )
}

