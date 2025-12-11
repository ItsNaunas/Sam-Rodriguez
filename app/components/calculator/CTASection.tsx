'use client'

/**
 * CTA Section Component
 * Displays after results with book a call CTA
 */

export default function CTASection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#book-call'

  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gold-500/10 to-gold-600/10 rounded-2xl border border-gold-500/30 text-center">
      <h2 className="font-playfair text-3xl font-bold mb-4 text-gold-500">
        Want me to fix this for you?
      </h2>
      
      <p className="text-lg text-gold-200 mb-6 max-w-2xl mx-auto font-inter">
        Let's turn these insights into revenue. Book a strategy call and we'll create a custom plan to close your opportunity gaps.
      </p>
      
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-forest-500 hover:bg-forest-600 text-white font-inter font-semibold text-lg rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        Book a Strategy Call
      </a>
      
      <p className="text-sm text-gold-400/70 mt-4 font-inter">
        30-minute strategy session • No pressure, just solutions
      </p>
    </div>
  )
}

