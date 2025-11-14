interface Service {
  number: string
  title: string
  description: string
}

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section id="services" className="section-padding bg-warm-bg">
      <div className="container-custom">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-500 mb-4">
            Here's what I've learned to help others build
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative bg-warm-surface border border-gold-200/30 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 shadow-sm fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 border border-gold-300 text-gold-600 font-inter font-bold text-sm">
                  {service.number}
                </span>
              </div>

              {/* Service content */}
              <div className="space-y-4">
                <h3 className="font-playfair font-bold text-2xl md:text-3xl text-charcoal-500 leading-tight pr-12">
                  {service.title}
                </h3>
                <p className="font-inter text-charcoal-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gold-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

