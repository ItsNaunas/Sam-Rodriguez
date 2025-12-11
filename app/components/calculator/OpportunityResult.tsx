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
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className="mb-2">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        )
      }
      
      // List items
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-1">{line.slice(2)}</li>
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>
      }
      
      // Regular paragraphs
      return <p key={index} className="mb-2">{line}</p>
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-4">
          ✓ Analysis Complete
        </div>
        <h2 className="text-3xl font-bold">Your Opportunity Cost Report</h2>
      </div>

      {/* Report Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          {formatReport(data.report)}
        </div>
      </div>

      {/* Quick Metrics Summary */}
      {data.metrics && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
              Monthly Opportunity Cost
            </div>
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              ${data.metrics.total_oc_month.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
              Yearly Opportunity Cost
            </div>
            <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              ${data.metrics.total_oc_year.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
              Per Client Opportunity
            </div>
            <div className="text-3xl font-bold text-green-900 dark:text-green-100">
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

