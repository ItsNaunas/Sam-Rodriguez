import type { WorkStep } from '@/lib/types'

interface HowItWorksProps {
  steps: WorkStep[]
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="section-padding bg-bg-800/50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            How it works
          </h2>
          <p className="text-text-80 text-lg">
            A simple, proven process for building clarity and momentum.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Arrow connector (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-6 lg:-right-8 z-10">
                  <svg 
                    className="w-12 lg:w-16 h-8 text-gold-500/30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 64 32"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2 16h56m0 0l-12-12m12 12l-12 12" 
                    />
                  </svg>
                </div>
              )}

              {/* Step card */}
              <div className="card-dark h-full space-y-4">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30">
                  <span className="font-playfair text-xl font-bold text-gold-500">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

