import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_ITEMS, BRAND_INFO } from '../data/weddingData'
import { Filter, Eye, X, MapPin, Calendar, MessageCircle, LayoutGrid, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'

export default function PortfolioGallery() {
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [viewMode, setViewMode] = useState('carousel') // 'carousel' or 'grid'
  const [carouselIndex, setCarouselIndex] = useState(0)

  const categories = [
    { id: 'all', label: 'Semua Portofolio' },
    { id: 'dekorasi', label: 'Dekorasi & Tenda' },
    { id: 'mua', label: 'MUA & Gaun' },
    { id: 'video', label: 'Dokumentasi' },
    { id: 'hiburan', label: 'Hiburan Musik' },
  ]

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter)

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section id="portofolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
              Galeri Portofolio Nyata
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Karya Estetik yang Berbicara Lewat Keindahan
            </h2>
            <p className="text-sm sm:text-base text-[#6B635A]">
              Eksplorasi dokumentasi autentik dari pernikahan megah yang telah kami desain dengan presisi tinggi.
            </p>
          </div>

          {/* View Mode Toggle (Carousel vs Grid) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F5] rounded-full border border-[#EADAD6] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-white text-[#C46D7D] shadow-sm font-bold'
                  : 'text-[#6B635A] hover:text-[#2D2A26]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Motion Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#C46D7D] shadow-sm font-bold'
                  : 'text-[#6B635A] hover:text-[#2D2A26]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id)
                setCarouselIndex(0)
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'rose-gold-gradient text-white shadow-md shadow-[#C46D7D]/25 scale-105'
                  : 'bg-[#FAF7F5] text-[#4A453F] hover:bg-[#EADAD6] border border-[#EADAD6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MOTION CAROUSEL VIEW */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Main Stage Card Carousel */}
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex gap-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -((filteredItems.length - 1) * 380), right: 0 }}
                animate={{ x: -carouselIndex * 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedItem(item)}
                    className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl overflow-hidden bg-[#FAF7F5] border border-[#EADAD6] shadow-lg cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2D2A26] bg-white/90 backdrop-blur-md shadow-xs">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/30 backdrop-blur-md border border-white/50 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Detail</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h3 className="font-serif text-lg font-bold text-[#2D2A26] group-hover:text-[#C46D7D] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#786E65]">
                        <MapPin className="w-3.5 h-3.5 text-[#B3874B] shrink-0" />
                        <span className="line-clamp-1">{item.venue}</span>
                      </div>
                      <p className="text-xs text-[#6B635A] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#EADAD6]">
              <span className="text-xs text-[#786E65] font-medium">
                Geser (Drag / Swipe) kartu atau gunakan tombol navigasi:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-[#EADAD6] bg-white hover:bg-[#FAF0F2] text-[#2D2A26] hover:text-[#C46D7D] flex items-center justify-center transition-all active:scale-90 shadow-xs cursor-pointer"
                  aria-label="Portofolio sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-[#EADAD6] bg-white hover:bg-[#FAF0F2] text-[#2D2A26] hover:text-[#C46D7D] flex items-center justify-center transition-all active:scale-90 shadow-xs cursor-pointer"
                  aria-label="Portofolio selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* STANDARD GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF7F5] border border-[#EADAD6] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/30 backdrop-blur-md border border-white/50 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Detail</span>
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2D2A26] bg-white/90 backdrop-blur-md shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-serif text-base font-bold text-[#2D2A26] group-hover:text-[#C46D7D] transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-[#786E65]">
                    <MapPin className="w-3 h-3 text-[#B3874B] shrink-0" />
                    <span className="line-clamp-1">{item.venue}</span>
                  </div>

                  <p className="text-xs text-[#6B635A] line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-white/20 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="aspect-[16/10] overflow-hidden bg-black relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-[#8B3045] bg-[#F7E5E8]">
                      {selectedItem.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#786E65]">
                      <Calendar className="w-3.5 h-3.5 text-[#B3874B]" />
                      <span>Tahun Dokumentasi: {selectedItem.year}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2D2A26] mb-1">
                      {selectedItem.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#786E65]">
                      <MapPin className="w-3.5 h-3.5 text-[#C46D7D]" />
                      <span>{selectedItem.venue}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A453F] leading-relaxed">
                    {selectedItem.desc}
                  </p>

                  <div className="pt-4 border-t border-[#EADAD6] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#786E65]">
                      Tertarik dengan karya dan konsep pernikahan ini?
                    </span>
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Halo Rose Decor, saya sangat tertarik dengan karya portofolio "${selectedItem.title}" di ${selectedItem.venue}. Bisakah kami mendiskusikan konsep serupa?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white rose-gold-gradient shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Tanya Konsep Serupa di WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
