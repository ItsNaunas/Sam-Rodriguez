import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-warm-surface relative overflow-hidden">
      {/* Golden background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-forest-500/5" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-charcoal-400 vignette">
              <Image
                src="/images/placeholder-contact.jpg"
                alt="Sam Rodriguez writing or thinking in golden-hour light"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="font-inter text-lg text-charcoal-400 mb-4 italic">
                Clarity starts with a conversation.
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-500 mb-6">
                If something here resonated, let's talk.
              </h2>
              <p className="font-playfair italic text-xl md:text-2xl text-charcoal-400 mb-8">
                Not about systems — about what's stopping you.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="btn-primary inline-block"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

