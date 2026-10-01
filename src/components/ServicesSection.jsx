import React, { useState } from 'react'
import { CORE_SERVICES, BRAND_INFO } from '../data/weddingData'
import { Check, MessageCircle, Sparkles, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const currentService = CORE_SERVICES[activeTab]

  const getWaServiceUrl = (serviceTitle) => {
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Halo Rose Decor, saya tertarik untuk konsultasi khusus mengenai layanan "${serviceTitle}". Mohon informasi portofolio dan price list detailnya.`
    )}`
  }

  return (
    <section id="layanan" className="py-20 bg-[#FAF7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
            Pilar Layanan Utama
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Harmoni Sempurna untuk Hari Bahagia Anda
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A]">
            Empat pilar utama yang dirancang terintegrasi agar persiapan pernikahan Anda berjalan mulus tanpa kerumitan koordinasi multi-vendor.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CORE_SERVICES.map((service, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'rose-gold-gradient text-white shadow-md shadow-[#C46D7D]/25 scale-105'
                    : 'bg-white text-[#4A453F] hover:bg-[#F2E5E2] border border-[#EADAD6]'
                }`}
              >
                <span>{service.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#EADAD6] transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3] group">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  key={currentService.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Highlight badges on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {currentService.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#2D2A26] backdrop-blur-md shadow-xs"
                    >
                      ✨ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold block mb-1">
                  Detail Spesifikasi Layanan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26] mb-2">
                  {currentService.title}
                </h3>
                <p className="text-sm font-medium text-[#C46D7D] mb-3">
                  {currentService.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#6B635A] leading-relaxed">
                  {currentService.shortDesc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A453F]">
                  Cakupan Fasilitas & Deliverables:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A453F]">
                      <div className="w-4 h-4 rounded-full bg-[#FAF0F2] text-[#C46D7D] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Service CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWaServiceUrl(currentService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white rose-gold-gradient shadow-md shadow-[#C46D7D]/25 hover:brightness-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasikan {currentService.title}</span>
                </a>

                <a
                  href="#kalkulator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#4A453F] hover:text-[#C46D7D] transition"
                >
                  <span>Simulasi Biaya</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
