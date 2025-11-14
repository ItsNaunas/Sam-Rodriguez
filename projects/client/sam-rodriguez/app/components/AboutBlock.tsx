import Image from 'next/image'
import type { AboutContent } from '@/lib/types'

interface AboutBlockProps {
  content: AboutContent
}

export default function AboutBlock({ content }: AboutBlockProps) {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Portrait */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-bg-800 border border-gold-500/20">
              <Image
                src={content.photo}
                alt={content.photoAlt}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={content.photo.startsWith('http')}
              />
            </div>
            
            {/* Gold accent border */}
            <div className="absolute -inset-4 border border-gold-500/10 rounded-3xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                About Sam
              </h2>
              <p className="text-text-80 text-lg leading-relaxed">
                {content.bioShort}
              </p>
            </div>

            {/* Bullets */}
            <ul className="space-y-4">
              {content.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5" />
                  <span className="text-text-80 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <a 
                href={content.ctaLink}
                className="btn-ghost inline-block"
              >
                {content.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

