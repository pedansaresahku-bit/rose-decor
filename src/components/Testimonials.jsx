import React from 'react'
import { TESTIMONIALS } from '../data/weddingData'
import { Star, Quote, Heart } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-[#FAF7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
            Kata Pengantin Bahagia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Cerita Nyata dari Mereka yang Telah Membuktikan
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A]">
            Senyum kebahagiaan dan kepuasan kedua mempelai serta keluarga adalah apresiasi tertinggi bagi seluruh tim Rose Decor.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#EADAD6] shadow-lg flex flex-col justify-between relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF0F2] text-[#C46D7D] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#4A453F] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#EADAD6] flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.names}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E8C5C8]"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2D2A26]">
                    {t.names}
                  </h4>
                  <p className="text-[11px] text-[#786E65] line-clamp-1">{t.venue}</p>
                  <span className="text-[10px] text-[#B3874B] font-medium">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
