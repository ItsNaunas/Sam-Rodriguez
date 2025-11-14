import type { PhilosophyItem } from '@/lib/types'

interface PhilosophyGridProps {
  items: PhilosophyItem[]
}

export default function PhilosophyGrid({ items }: PhilosophyGridProps) {
  return (
    <section id="coaching" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            What I teach
          </h2>
          <p className="text-text-80 text-lg">
            Principles that transform how you work, think, and lead.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <article key={item.id} className="card-dark group">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gold-500 mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-text-80 leading-relaxed">
                {item.summary}
              </p>
              
              {item.reelUrl && (
                <a
                  href={item.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-gold-500 text-sm font-medium hover:text-gold-600 transition-colors"
                >
                  Watch reel
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

