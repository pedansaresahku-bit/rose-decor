import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../data/weddingData'
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const current = TESTIMONIALS[currentIndex]

  return (
    <section id="testimoni" className="py-24 bg-[#FAF7F5] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#F4D9DC]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#EFE0C9]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-[#8B3045] bg-[#F7E5E8]">
            <Heart className="w-3.5 h-3.5 fill-[#C46D7D] text-[#C46D7D]" />
            <span>Kisah Nyata Cinta & Kepercayaan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2A26] tracking-tight">
            Sentuhan Keindahan yang Membekas di Hati
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A] max-w-xl mx-auto">
            Senyum kebahagiaan dan kepuasan kedua mempelai serta keluarga adalah mahakarya terbaik kami.
          </p>
        </div>

        {/* Cinematic Testimonial Stage */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#EADAD6] shadow-2xl relative"
            >
              {/* Quote Mark Background */}
              <div className="absolute top-8 right-8 text-[#FAF0F2]">
                <Quote className="w-20 h-20 text-[#C46D7D]/15" />
              </div>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 text-amber-500 mb-8">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#786E65] ml-2">5.0 / 5.0 Rating Sempurna</span>
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif text-lg sm:text-2xl text-[#2D2A26] leading-relaxed italic mb-10">
                "{current.quote}"
              </blockquote>

              {/* Author Footer */}
              <div className="flex items-center justify-between border-t border-[#EADAD6] pt-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.names}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-md"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#2D2A26]">
                      {current.names}
                    </h4>
                    <p className="text-xs text-[#786E65]">{current.venue}</p>
                    <span className="text-[11px] text-[#B3874B] font-semibold">{current.date}</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-[#EADAD6] bg-white hover:bg-[#FAF0F2] text-[#2D2A26] hover:text-[#C46D7D] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer"
                    aria-label="Testimoni sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-[#EADAD6] bg-white hover:bg-[#FAF0F2] text-[#2D2A26] hover:text-[#C46D7D] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer"
                    aria-label="Testimoni selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#C46D7D]' : 'w-2 bg-[#D9C3BE] hover:bg-[#C46D7D]/60'
                }`}
                aria-label={`Lihat ulasan ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
