import type {
  SiteSettings,
  HeroContent,
  PhilosophyItem,
  WorkStep,
  Project,
  Testimonial,
  AboutContent,
  CTAContent,
  NewsletterContent,
  ExperienceSkillCategory,
} from './types'

export const siteSettings: SiteSettings = {
  siteName: 'Sam Rodriguez',
  description: 'I write and coach to help leaders slow down, see clearer, and lead with presence.',
  bookingLink: '#contact',
  social: {
    instagram: 'https://instagram.com/samrodriguez.official',
    linkedin: 'https://linkedin.com/in/samrodriguez',
    twitter: 'https://twitter.com/samrodriguez',
    email: 'hello@samrodriguez.business',
  },
}

export const heroContent: HeroContent = {
  title: 'Your Work is Fine.',
  subtitle: 'But is Your Life Actually Yours?',
  subline: 'You built the systems. Now build the stillness to lead them.',
  availability: 'Available for new opportunities',
  primaryCTA: {
    label: 'Start the Conversation',
    link: siteSettings.bookingLink,
  },
  secondaryCTA: {
    label: 'See the moments',
    link: '#moments',
  },
  portraitAlt: 'Person with arms outstretched facing mountain landscape',
  portraitImage: '/images/placeholder-portrait.jpg',
}

export const philosophyItems: PhilosophyItem[] = [
  {
    id: 'leadership-coaching',
    title: 'Leadership Coaching',
    summary: '1:1 sessions to help you lead with clarity, not control.',
  },
  {
    id: 'team-development',
    title: 'Team Development',
    summary: 'Turn teams into systems that lead themselves.',
  },
  {
    id: 'systems-focus',
    title: 'Systems & Focus',
    summary: 'Design habits that protect your focus, not drain it.',
  },
  {
    id: 'remote-leadership',
    title: 'Remote Leadership',
    summary: 'Learn to lead from anywhere — with presence, not burnout.',
  },
  {
    id: 'executive-development',
    title: 'Executive Development',
    summary: 'Navigate complexity with clarity. Build decision-making frameworks that scale.',
  },
  {
    id: 'workshop-facilitation',
    title: 'Workshop Facilitation',
    summary: 'Group sessions that transform how teams work together.',
  },
]

export const workSteps: WorkStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'Quick audit and honest goals. We map where you are, where you want to go, and what\'s actually stopping you.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description: 'The plan, the habits, the system. We build a framework that fits your life and leverages your strengths.',
  },
  {
    id: 'deliver',
    number: '03',
    title: 'Deliver',
    description: 'Weekly check-ins and proof of progress. Accountability that keeps you moving and adjustments that keep you honest.',
  },
]

export const projects: Project[] = [
  {
    id: 'discomfort-seek',
    title: 'Discomfort is your compass.',
    typeTag: 'Post',
    summary: 'Growth lives outside your comfort zone. Learn to lean into uncertainty instead of running from it.',
    image: '/images/placeholder-project-1.jpg',
  },
  {
    id: 'focus-routine',
    title: 'Momentum beats motivation.',
    typeTag: 'Post',
    summary: 'How to protect deep work and eliminate distraction debt. Practical systems that actually work.',
    image: '/images/placeholder-project-2.jpg',
  },
  {
    id: 'remote-work-truth',
    title: 'Presence over performance.',
    typeTag: 'Post',
    summary: 'Field notes from building distributed teams. What actually works when leading remote teams.',
    image: '/images/placeholder-project-3.jpg',
  },
  {
    id: 'presence-over-performance',
    title: 'Presence over performance.',
    typeTag: 'Post',
    summary: 'Being fully here matters more than being everywhere. Quality of attention beats quantity of output.',
    image: '/images/placeholder-project-4.jpg',
  },
  {
    id: 'travel-perspective',
    title: 'Travel rewires perspective.',
    typeTag: 'Post',
    summary: 'What I learned about leadership, loneliness, and clarity while working remotely across Europe.',
    image: '/images/placeholder-project-5.jpg',
  },
  {
    id: 'systems-over-goals',
    title: 'Run systems, not moods.',
    typeTag: 'Post',
    summary: 'Why your goals keep failing and how to build systems that don\'t need motivation to work.',
    image: '/images/placeholder-project-6.jpg',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Sam doesn\'t give you answers. He helps you find your own.',
    author: 'Marcus Chen',
    role: 'TechFlow',
  },
  {
    id: 'testimonial-2',
    quote: 'Most coaches talk mindset. Sam builds systems.',
    author: 'Sarah Mitchell',
    role: 'VP Product, Safe',
  },
  {
    id: 'testimonial-3',
    quote: 'No fluff. Just real tools that work.',
    author: 'David Okonkwo',
    role: 'Studio Eight',
  },
]

export const aboutContent: AboutContent = {
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
  photoAlt: 'Sam Rodriguez black and white portrait',
  bioShort: 'I\'ve spent a decade building teams, systems, and clarity for leaders who want to do meaningful work without burning out. My approach blends practical frameworks with honest reflection - no hype, no shortcuts, just what actually works.',
  bullets: [
    '10 years building and leading distributed teams',
    'Coaching focus: systems thinking, deep work, sustainable momentum',
    'Week one: audit your environment, identify one keystone habit, implement immediate wins',
  ],
  ctaLabel: 'Read my story',
  ctaLink: '/about',
}

export const ctaContent: CTAContent = {
  heading: "Let's make it happen",
  primaryLabel: 'Book a call',
  primaryLink: siteSettings.bookingLink,
  secondaryLabel: 'Message me',
  secondaryLink: `mailto:${siteSettings.social.email}`,
}

export const newsletterContent: NewsletterContent = {
  heading: 'Notes that keep you moving',
  subheading: 'Weekly reflections on systems, focus, and leadership. No fluff, just signal.',
  placeholder: 'your@email.com',
  buttonLabel: 'Join the list',
}

export const credibilityLogos: string[] = [
  'TechFlow',
  'Slate',
  'Studio Eight',
  'Momentum Lab',
  'Remote First',
  'System Builders',
]

export const services = [
  {
    number: '01',
    title: 'Leadership Coaching',
    description: 'One-on-one sessions to help you find rhythm in chaos. Not about systems — about what\'s stopping you.',
  },
  {
    number: '02',
    title: 'Team Development',
    description: 'Training leaders to listen, whilst still being heard. Build teams that communicate clearly across distances.',
  },
  {
    number: '03',
    title: 'Systems & Focus',
    description: 'Frameworks that work on your worst days. Protect deep work and eliminate distraction debt.',
  },
  {
    number: '04',
    title: 'Remote Leadership',
    description: 'Field notes from building distributed teams across 12 time zones. What actually works.',
  },
]

export const stats = [
  { number: '43', label: 'Posts' },
  { number: '280', label: 'Followers' },
  { number: '242', label: 'Following' },
]

export const experienceSkills = [
  {
    period: '2015-25',
    category: 'Leadership',
    skills: [
      { name: 'Team Building' },
      { name: 'Remote Leadership' },
      { name: 'Systems Thinking' },
      { name: 'Communication' },
      { name: 'Strategic Planning' },
    ],
  },
  {
    period: '2020-25',
    category: 'Coaching',
    skills: [
      { name: '1-on-1 Mentoring' },
      { name: 'Workshop Facilitation' },
      { name: 'Group Coaching' },
      { name: 'Executive Development' },
    ],
  },
  {
    period: '2018-25',
    category: 'Tools & Methods',
    skills: [
      { name: 'Deep Work Systems' },
      { name: 'Focus Frameworks' },
      { name: 'Momentum Building' },
      { name: 'Presence Practice' },
    ],
  },
]
