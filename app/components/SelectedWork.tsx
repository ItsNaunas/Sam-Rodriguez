import Image from 'next/image'
import type { Project } from '@/lib/types'

interface SelectedWorkProps {
  projects: Project[]
}

export default function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Selected work
          </h2>
          <p className="text-text-80 text-lg">
            Systems, workshops, and reflections that create real change.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="group cursor-pointer"
            >
              <div className="card-dark p-0 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] bg-bg-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={project.image.startsWith('http')}
                  />
                  
                  {/* Tag overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-bg-900/80 backdrop-blur-sm border border-gold-500/30 rounded-full text-xs font-medium text-gold-500">
                      {project.typeTag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-80 text-sm leading-relaxed flex-1">
                    {project.summary}
                  </p>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-gold-500 text-sm font-medium hover:text-gold-600 transition-colors"
                    >
                      Learn more
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

