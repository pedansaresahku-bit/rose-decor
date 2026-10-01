import React from 'react'
import { VALUE_PROPOSITIONS } from '../data/weddingData'
import { Sparkles, ShieldCheck, Clock, Palette } from 'lucide-react'

export default function ValueProps() {
  const iconMap = {
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    Palette: Palette,
  }

  return (
    <section id="keunggulan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
            Kenapa Memilih Rose Decor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Komitmen Kami untuk Momen Sakral Paling Berharga
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A] leading-relaxed">
            Kami memahami betapa berharganya hari pernikahan Anda. Inilah alasan ratusan pasangan mempercayakan momen sekali seumur hidupnya kepada Rose Decor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <div
                key={item.id}
                className="group relative p-8 rounded-2xl bg-[#FAF7F5] border border-[#EADAD6] hover:border-[#C46D7D]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EADAD6] flex items-center justify-center text-[#C46D7D] mb-6 shadow-xs group-hover:scale-110 group-hover:bg-[#FAF0F2] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#8B3045] bg-[#F7E5E8] mb-3">
                    {item.badge}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#2D2A26] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B635A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
