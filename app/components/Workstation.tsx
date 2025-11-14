import Image from 'next/image'

export default function Workstation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="font-inter font-black text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900">
            MY WORKSTATION
          </h2>
        </div>

        {/* Workstation images grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
              <Image
                src={`/images/placeholder-workstation-${item}.jpg`}
                alt={`Workstation ${item}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

