import React from 'react'
import { PACKAGES, BRAND_INFO } from '../data/weddingData'
import { Check, MessageCircle, Star, Sparkles, ArrowRight } from 'lucide-react'

export default function PackagesSection() {
  const getWaPackageUrl = (pkgName, price) => {
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Halo Rose Decor! Kami tertarik untuk booking konsultasi dan menanyakan ketersediaan tanggal untuk "${pkgName}" (${price}). Mohon informasi jadwal temu atau survei venue.`
    )}`
  }

  return (
    <section id="paket" className="py-20 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
            Pilihan Paket Pernikahan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Paket Kurasi Sempurna Sesuai Kebutuhan Anda
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A]">
            Diformulasikan khusus untuk memberikan pengalaman hari bahagia yang megah, tertata rapi, dan bebas rasa khawatir dengan harga transparan.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  pkg.isPopular
                    ? 'bg-white border-2 border-[#C46D7D] shadow-2xl scale-100 md:-translate-y-3'
                    : 'bg-white/80 border border-[#EADAD6] shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rose-gold-gradient text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {!pkg.isPopular && pkg.badge && (
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#B3874B] bg-[#F7EEDF]">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2D2A26] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#786E65] mb-4 min-h-[32px]">{pkg.target}</p>

                  {/* Price */}
                  <div className="py-4 border-y border-[#EADAD6] mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7E74] block font-semibold">
                      Investasi Mulai Dari:
                    </span>
                    <div className="font-serif text-3xl font-extrabold text-[#C46D7D] tracking-tight">
                      {pkg.priceDisplay}
                    </div>
                    <span className="text-[11px] text-[#786E65] block mt-0.5">
                      Sudah termasuk seluruh item tertera
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#4A453F] mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2D2A26]">
                      Item Termasuk Dalam Paket:
                    </p>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#4A453F]">
                        <div className="w-4 h-4 rounded-full bg-[#FAF0F2] text-[#C46D7D] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-[#EADAD6]">
                  <a
                    href={getWaPackageUrl(pkg.name, pkg.priceDisplay)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                      pkg.isPopular
                        ? 'rose-gold-gradient text-white shadow-md shadow-[#C46D7D]/30 hover:brightness-105 active:scale-95'
                        : 'bg-[#FAF7F5] border border-[#EADAD6] text-[#2D2A26] hover:bg-[#FAF0F2] hover:text-[#C46D7D] hover:border-[#C46D7D]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pilih {pkg.name}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Bespoke Banner */}
        <div className="rounded-3xl p-8 sm:p-10 rose-gold-gradient text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#FDEBEF] font-bold">
              Bespoke & A La Carte Concept
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Punya Anggaran Khusus atau Konsep Adat Spesifik?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7D8DF] leading-relaxed">
              Tim desainer kami siap membuat proposal visual 3D dan rincian biaya yang 100% dipersonalisasi sesuai venue, impian, dan budget Anda.
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Halo Rose Decor, saya ingin request konsultasi paket pernikahan custom / bespoke dengan konsep khusus.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-[#8B3045] bg-white shadow-lg hover:bg-[#FAF7F5] active:scale-95 transition-all"
          >
            <span>Konsultasi Paket Custom</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
