import Image from 'next/image'
import type { Project } from '@/lib/types'

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  // Show first 6 projects as "Moments & Lessons"
  const moments = projects.slice(0, 6)
  
  return (
    <section id="moments" className="section-padding bg-forest-500 relative overflow-hidden">
      {/* Blurred golden background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-forest-500 to-forest-600 opacity-50" />
      
      <div className="container-custom relative z-10">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Lessons
          </h2>
          <p className="font-inter text-lg text-gold-200 max-w-2xl mx-auto">
            These aren't just posts. They're lessons from the field — where clarity was earned, not taught.
          </p>
        </div>

        {/* Moments grid - Instagram-style square cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {moments.map((moment, index) => (
            <div 
              key={moment.id} 
              className="group relative aspect-square rounded-lg overflow-hidden bg-charcoal-400 vignette fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded text-xs font-medium text-gold-200 mb-2">
                    {moment.typeTag}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-white">
                    {moment.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

