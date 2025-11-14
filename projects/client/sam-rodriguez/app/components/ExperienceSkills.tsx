interface Skill {
  name: string
}

interface SkillCategory {
  period: string
  category: string
  skills: Skill[]
}

interface ExperienceSkillsProps {
  categories: SkillCategory[]
}

export default function ExperienceSkills({ categories }: ExperienceSkillsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="font-inter font-black text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-8">
            EXPERIENCE & SKILLS
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category header */}
              <div className="space-y-2">
                <div className="font-inter font-bold text-lg text-gray-900">
                  {category.period}
                </div>
                <div className="font-inter font-bold text-xl text-gray-900">
                  {category.category}
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-600 font-inter">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

