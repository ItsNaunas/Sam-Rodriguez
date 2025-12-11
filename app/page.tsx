'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutPhilosophy from './components/AboutPhilosophy'
import ProjectShowcase from './components/ProjectShowcase'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SkipToContent from './components/SkipToContent'
import CalculatorModal from './components/calculator/CalculatorModal'

import {
  siteSettings,
  heroContent,
  philosophyItems,
  projects,
  testimonials,
} from '@/lib/data'

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <>
      <SkipToContent />
      <Header bookingLink={siteSettings.bookingLink} />
      
      <main id="main-content" className="relative">
        <Hero content={heroContent} onCalculatorOpen={() => setIsCalculatorOpen(true)} />
        
        <AboutPhilosophy items={philosophyItems} />
        
        <ProjectShowcase projects={projects} />
        
        <Testimonials testimonials={testimonials} />
        
        <ContactSection />
      </main>
      
      <Footer settings={siteSettings} />
      
      {/* Calculator Modal */}
      <CalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </>
  )
}

