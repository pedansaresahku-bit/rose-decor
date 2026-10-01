import React from 'react'
import { BRAND_INFO } from '../data/weddingData'
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Camera } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#262320] text-[#D4C9C3] pt-16 pb-12 border-t border-[#3D3833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D3833]">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full rose-gold-gradient flex items-center justify-center text-white shadow-md">
                <span className="text-xl">🌹</span>
              </div>
              <div>
                <img
                  src="/assets/font-logo.png"
                  alt="Rose Decor"
                  className="h-7 sm:h-8 w-auto object-contain block brightness-0 invert"
                />
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mt-0.5">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89D95] leading-relaxed max-w-sm">
              One-stop wedding organizer & event stylist terpercaya. Kami memadukan seni dekorasi megah, riasan anggun, dokumentasi sinematik, dan alunan melodi berkelas untuk hari pernikahan tak terlupakan.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#35302B] hover:bg-[#C46D7D] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#35302B] hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-base">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-white transition">Beranda</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition">Kenapa Rose Decor</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition">Pilar Layanan</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition">Kalkulator Estimasi Biaya</a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white transition">Pilihan Paket Wedding</a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white transition">Galeri Portofolio</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-white font-bold text-base">Galeri & Kantor</h4>
            <div className="space-y-2.5 text-xs text-[#A89D95]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.operationalHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7068] gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved. Dirancang dengan penuh cinta.
          </p>
          <div className="flex items-center gap-1 text-[#9E928A]">
            <span>Crafted for unforgettable weddings</span>
            <Heart className="w-3.5 h-3.5 text-[#C46D7D] fill-[#C46D7D]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
