export interface SiteSettings {
  siteName: string
  description: string
  bookingLink: string
  social: {
    instagram: string
    linkedin: string
    twitter: string
    email: string
  }
}

export interface HeroContent {
  title: string
  subtitle: string
  subline?: string
  availability: string
  primaryCTA: {
    label: string
    link: string
  }
  secondaryCTA: {
    label: string
    link: string
  }
  portraitAlt: string
  portraitImage?: string
}

export interface PhilosophyItem {
  id: string
  title: string
  summary: string
  reelUrl?: string
}

export interface WorkStep {
  id: string
  number: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  typeTag: string
  summary: string
  image: string
  link?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar?: string
}

export interface AboutContent {
  photo: string
  photoAlt: string
  bioShort: string
  bullets: string[]
  ctaLabel: string
  ctaLink: string
}

export interface CTAContent {
  heading: string
  primaryLabel: string
  primaryLink: string
  secondaryLabel: string
  secondaryLink: string
}

export interface NewsletterContent {
  heading: string
  subheading?: string
  placeholder: string
  buttonLabel: string
}

export interface ExperienceSkillCategory {
  period: string
  category: string
  skills: { name: string }[]
}

