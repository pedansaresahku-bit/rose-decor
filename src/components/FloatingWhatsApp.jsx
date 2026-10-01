import React, { useState, useEffect } from 'react'
import { BRAND_INFO } from '../data/weddingData'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const waFloatUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rose Decor, saya ingin konsultasi kilat mengenai paket pernikahan dan cek ketersediaan tanggal.'
  )}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-2xl border border-[#E8C5C8] max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#8A7E74] hover:text-[#2D2A26] p-1"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-4">
            <span className="text-xl">🌹</span>
            <div>
              <p className="text-xs font-bold text-[#2D2A26]">
                Butuh Bantuan Konsultasi?
              </p>
              <p className="text-[11px] text-[#6B635A] mt-0.5 leading-snug">
                Customer Wedding Planner kami siap menjawab pertanyaan Anda sekarang.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl shadow-[#25D366]/35 active:scale-95 transition-all duration-300"
        aria-label="Hubungi via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat WhatsApp
        </span>
      </a>
    </div>
  )
}
