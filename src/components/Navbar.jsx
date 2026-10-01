import React, { useState, useEffect } from 'react'
import { BRAND_INFO } from '../data/weddingData'
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ onOpenEstimate, onReplayGate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Kenapa Kami', href: '#keunggulan' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Kalkulator Biaya', href: '#kalkulator' },
    { name: 'Paket Wedding', href: '#paket' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
  ]

  const waQuickUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rose Decor, saya ingin konsultasi mengenai paket pernikahan impian kami.'
  )}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 navbar-textured-grey transition-all duration-300 ${
        isScrolled
          ? 'py-3 shadow-lg shadow-black/20 border-b border-white/10'
          : 'py-4 shadow-md shadow-black/10 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full rose-gold-gradient flex items-center justify-center text-white shadow-md shadow-[#C46D7D]/25 transition-transform duration-300 group-hover:scale-105">
              <span className="text-xl">🌹</span>
            </div>
            <div>
              <img
                src="/assets/font-logo.png"
                alt="Rose Decor"
                className="h-7 sm:h-8 w-auto object-contain block brightness-0 invert"
              />
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mt-0.5">
                Wedding & Event Styling
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#E3DDD8] hover:text-[#F3E5AB] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white rose-gold-gradient shadow-md shadow-[#C46D7D]/30 hover:brightness-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden navbar-textured-grey border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#E3DDD8] hover:text-[#F3E5AB] px-3 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={waQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white rose-gold-gradient shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
