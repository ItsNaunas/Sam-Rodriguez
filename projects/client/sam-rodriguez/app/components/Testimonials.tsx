import type { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonial" className="section-padding bg-warm-bg relative overflow-hidden">
      {/* Blurred golden background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-forest-500/5" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-500 mb-4">
            Stories from people I've walked with
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id} 
              className="space-y-6 bg-warm-surface p-8 rounded-2xl border border-gold-200/30 shadow-sm fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote in italic serif */}
              <blockquote className="pull-quote text-charcoal-500 mb-4">
                <span className="text-gold-500">"</span>
                {testimonial.quote}
                <span className="text-gold-500">"</span>
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-gold-200/20">
                <p className="font-inter font-medium text-charcoal-500">
                  {testimonial.author}
                </p>
                <p className="text-charcoal-400 text-sm italic">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

