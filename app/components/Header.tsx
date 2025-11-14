'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HeaderProps {
  bookingLink: string
}

export default function Header({ bookingLink }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'How I Help', href: '#services' },
    { label: 'Lessons', href: '#moments' },
    { label: 'Stories', href: '#testimonial' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-warm-bg/98 backdrop-blur-md shadow-lg border-b border-gold-200/30' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Sam Rodriguez */}
          <Link 
            href="/" 
            className={`font-inter text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
              isScrolled 
                ? 'text-charcoal-500 hover:text-gold-500' 
                : 'text-white hover:text-gold-400'
            }`}
          >
            <span className="underline decoration-rose-300 decoration-2 underline-offset-4">Sam</span>
            {' '}Rodriguez.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-inter text-sm font-medium focus:outline-none gold-underline ${
                  isScrolled 
                    ? 'text-charcoal-500 hover:text-gold-500' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-forest-500 text-white px-6 py-2.5 font-inter font-medium text-sm transition-all duration-300 hover:bg-forest-600 rounded-lg shadow-sm"
          >
            <span>Let's Talk</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

