'use client'

import Image from 'next/image'
import type { HeroContent } from '@/lib/types'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal-900">
      {/* Large landscape background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
            alt={content.portraitAlt}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main headline overlaid on image - centered */}
        <div className="flex-1 flex items-center justify-center pt-24">
          <div className="container-custom w-full text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="font-playfair font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-500 leading-[1.1] mb-2">
                Your Work is Fine.
              </h1>
              <h2 className="font-playfair font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-500 leading-[1.1] mb-2">
                But is Your Life
              </h2>
              <h2 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-500 leading-[1.1] mb-6">
                Actually Yours?
              </h2>
              {content.subline && (
                <p className="font-playfair italic text-xl md:text-2xl lg:text-3xl text-gold-400/90 font-light max-w-3xl mx-auto">
                  {content.subline}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom content boxes - positioned absolutely */}
        <div className="relative min-h-0 pb-12 md:pb-16">
          {/* Left box - Trust/Proof elements */}
          <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 max-w-xs bg-white rounded-2xl p-4 md:p-6 shadow-xl z-20">
            {/* Stats/Proof */}
            <div className="flex items-center gap-4 md:gap-6">
              <div>
                <div className="font-playfair text-xl md:text-2xl font-bold text-charcoal-900">10+</div>
                <div className="font-inter text-xs text-charcoal-500 uppercase tracking-wide">Years</div>
              </div>
              <div>
                <div className="font-playfair text-xl md:text-2xl font-bold text-charcoal-900">50+</div>
                <div className="font-inter text-xs text-charcoal-500 uppercase tracking-wide">Leaders</div>
              </div>
              <div>
                <div className="font-playfair text-xl md:text-2xl font-bold text-charcoal-900">12</div>
                <div className="font-inter text-xs text-charcoal-500 uppercase tracking-wide">Time Zones</div>
              </div>
            </div>
          </div>

          {/* Right box - CTA - Bottom right corner */}
          <div className="absolute bottom-12 md:bottom-16 right-6 md:right-12 max-w-sm bg-white rounded-2xl p-6 md:p-8 shadow-xl z-20">
            <div className="space-y-4">
              <a
                href={content.primaryCTA.link}
                className="inline-flex items-center gap-2 bg-forest-500 text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-forest-600 transition-all shadow-lg hover:shadow-xl w-full justify-center text-sm md:text-base"
              >
                {content.primaryCTA.label}
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
              </a>
              <p className="font-inter text-charcoal-600 leading-relaxed text-sm md:text-base italic text-center">
                No pitch. No pressure. Just clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
