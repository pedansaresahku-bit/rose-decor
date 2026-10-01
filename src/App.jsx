import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LuxuryHeroCarousel from './components/LuxuryHeroCarousel'
import ValueProps from './components/ValueProps'
import ServicesSection from './components/ServicesSection'
import Calculator from './components/Calculator'
import PackagesSection from './components/PackagesSection'
import PortfolioGallery from './components/PortfolioGallery'
import TestimonialCarousel from './components/TestimonialCarousel'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import EditorialIntroTransition from './components/EditorialIntroTransition'
import PetalCanvas from './components/PetalCanvas'
import AudioAmbiance from './components/AudioAmbiance'

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('botanical')

  const themeClasses = {
    botanical: 'bg-[#FAF7F5] text-[#2D2A26]',
    royal: 'bg-[#FAF6EF] text-[#24211D]',
    starlight: 'bg-[#F7F5FA] text-[#26232D]',
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ${themeClasses[currentTheme] || 'bg-[#FAF7F5]'}`}>
      {/* Editorial Luxury Curtain Intro Reveal (1.5s seamless opening) */}
      <EditorialIntroTransition />

      {/* Atmospheric Floating Rose Petals & Golden Stardust Canvas */}
      <PetalCanvas />

      {/* Ambient Romantic Music Synthesizer Player */}
      <AudioAmbiance />

      {/* Fixed Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Cinematic Haute Couture Hero Carousel */}
        <LuxuryHeroCarousel
          currentTheme={currentTheme}
          onChangeTheme={setCurrentTheme}
        />

        {/* 2. Value Proposition (Kenapa Rose Decor) */}
        <ValueProps />

        {/* 3. Core Services Breakdown (Interactive Tabs) */}
        <ServicesSection />

        {/* 4. Interactive Budget Estimator / Package Calculator */}
        <Calculator />

        {/* 5. Curated Package Tiers */}
        <PackagesSection />

        {/* 6. Motion-Powered Filterable Portfolio Gallery & Lightbox */}
        <PortfolioGallery />

        {/* 7. Cinematic Testimonial Carousel with Staggered Motion */}
        <TestimonialCarousel />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  )
}
