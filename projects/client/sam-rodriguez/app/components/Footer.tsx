import type { SiteSettings } from '@/lib/types'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'How I Help', href: '#services' },
    { label: 'Moments', href: '#moments' },
    { label: 'Stories', href: '#testimonial' },
  ]

  const serviceLinks = [
    { label: 'Leadership Coaching', href: '#services' },
    { label: 'Team Development', href: '#services' },
    { label: 'Systems & Focus', href: '#services' },
    { label: 'Remote Leadership', href: '#services' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: settings.social.instagram },
    { label: 'LinkedIn', href: settings.social.linkedin },
    { label: 'Twitter', href: settings.social.twitter },
  ]

  return (
    <footer className="bg-forest-500 text-white border-t border-forest-600">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              {settings.siteName}.
            </h3>
            <p className="text-gold-200 text-sm leading-relaxed">
              {settings.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-gold-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gold-100 hover:text-gold-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-gold-200 mb-4">
              How I Help
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gold-100 hover:text-gold-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-gold-200 mb-4">
              Connect
            </h4>
            <ul className="space-y-2 mb-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-100 hover:text-gold-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${settings.social.email}`}
              className="text-gold-200 hover:text-gold-300 text-sm transition-colors"
            >
              {settings.social.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-forest-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gold-200">
            <p>
              © {currentYear} {settings.siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

