import type { CTAContent } from '@/lib/types'

interface PrimaryCTAProps {
  content: CTAContent
}

export default function PrimaryCTA({ content }: PrimaryCTAProps) {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Wave accent top edge */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 128" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,32 720,48 C960,64 1200,96 1440,64 L1440,128 L0,128 Z"
            fill="url(#goldGradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E1C85C" />
              <stop offset="50%" stopColor="#F3E59E" />
              <stop offset="100%" stopColor="#E1C85C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark text-center space-y-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial from-gold-200/5 via-transparent to-transparent blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {content.heading}
              </h2>

              <p className="text-text-80 text-lg max-w-2xl mx-auto">
                Ready to build systems that work? Let&apos;s start with an honest conversation about where you are and where you want to go.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href={content.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  {content.primaryLabel}
                </a>
                <a
                  href={content.secondaryLink}
                  className="btn-ghost text-center"
                >
                  {content.secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

