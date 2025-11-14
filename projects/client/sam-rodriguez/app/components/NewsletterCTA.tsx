'use client'

import { useState, FormEvent } from 'react'
import type { NewsletterContent } from '@/lib/types'

interface NewsletterCTAProps {
  content: NewsletterContent
}

export default function NewsletterCTA({ content }: NewsletterCTAProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Connect to newsletter service (Mailchimp, ConvertKit, etc.)
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('success')
    setEmail('')
    
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="notes" className="section-padding relative overflow-hidden">
      {/* Gold gradient halo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-gradient-radial from-gold-200/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Header */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {content.heading}
            </h2>
            {content.subheading && (
              <p className="text-text-80 text-lg">
                {content.subheading}
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.placeholder}
              required
              disabled={status === 'loading'}
              className="flex-1 px-6 py-3 bg-bg-800 border border-gold-500/30 rounded-lg text-text-100 placeholder:text-text-80/50 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : content.buttonLabel}
            </button>
          </form>

          {/* Status messages */}
          {status === 'success' && (
            <p className="text-gold-500 text-sm">
              Success! Check your inbox to confirm.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

