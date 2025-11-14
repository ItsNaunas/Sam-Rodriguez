import type { PhilosophyItem } from '@/lib/types'

interface AboutPhilosophyProps {
  items: PhilosophyItem[]
}

export default function AboutPhilosophy({ items }: AboutPhilosophyProps) {
  return (
    <section id="about" className="section-padding bg-warm-surface">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-inter text-lg text-charcoal-400 max-w-2xl mx-auto mb-6">
            After years of building teams and systems, I learned one thing:
            <br />
            <span className="italic">Growth only lasts if you slow down enough to see it.</span>
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-500 mb-6">
            How I Help Leaders Build Clarity
          </h2>
        </div>

        {/* Coaching solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gold-200/30 shadow-sm hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gold-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal-500 leading-tight">
                  {item.title}
                </h3>
                <p className="font-inter text-charcoal-400 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

