'use client'

/**
 * CTA Section Component
 * Displays after results with book a call CTA
 */

export default function CTASection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book-call'

  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Want me to fix this for you?
      </h2>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        Let's turn these insights into revenue. Book a strategy call and we'll create a custom plan to close your opportunity gaps.
      </p>
      
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        Book a Strategy Call
      </a>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        30-minute strategy session • No pressure, just solutions
      </p>
    </div>
  )
}

