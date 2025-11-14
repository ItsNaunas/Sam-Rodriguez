interface CredibilityStripProps {
  logos: string[]
}

export default function CredibilityStrip({ logos }: CredibilityStripProps) {
  return (
    <section className="py-8 bg-bg-900/50">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Label - smaller and more subtle */}
          <p className="text-text-80/60 text-xs font-inter uppercase tracking-widest">
            Trusted by 500+ happy clients
          </p>

          {/* Logo grid - like Elian's horizontal layout */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-text-80 font-inter text-base md:text-lg font-semibold">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

