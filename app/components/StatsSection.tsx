import Image from 'next/image'

interface Stat {
  number: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  title: string
}

export default function StatsSection({ stats, title }: StatsSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and Stats */}
          <div>
            {/* Title */}
            <div className="mb-12">
              <h2 className="font-inter font-black text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-gray-600 text-lg">Building leaders, systems, and clarity for real growth.</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <span className="font-inter font-black text-5xl md:text-6xl text-gray-900">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-inter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Desk setup image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
              <Image
                src="/images/placeholder-workstation.jpg"
                alt="Workstation desk setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

