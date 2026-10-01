import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, ArrowRight, Play, Pause, MapPin } from 'lucide-react'
import { BRAND_INFO } from '../data/weddingData'

export const HERO_SLIDES = [
  {
    id: 1,
    category: "Haute Event Styling",
    title: "The Royal Champagne Garden",
    subtitle: "Kemegahan Pelaminan Asimetris Berpadu Sentuhan Clear Tent & Chandelier Kristal",
    venue: "Plataran Cilandak, Jakarta",
    guestCount: "400 - 800 Tamu",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
    color: "#C46D7D",
    accent: "Blush Rose & Warm Champagne",
  },
  {
    id: 2,
    category: "Traditional & Modern Fusion",
    title: "Symphony of Adat & Modern Glamour",
    subtitle: "Harmoni Gebyok Ukir Kontemporer dengan Instalasi Fresh Flower Amaranth Merah Marun",
    venue: "Ballroom Balai Kartini, Jakarta",
    guestCount: "500 - 1.200 Tamu",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop",
    color: "#B3874B",
    accent: "Imperial Gold & Deep Crimson",
  },
  {
    id: 3,
    category: "Masterpiece MUA & Attire",
    title: "Anggun Sunda Siger & Kebaya Payet",
    subtitle: "Riasan Flawless Anti-Crack 12 Jam yang Memancarkan Aura Memikat Pengantin",
    venue: "Hotel Mulia Senayan, Jakarta",
    guestCount: "Intimate to Grand Ballroom",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop",
    color: "#C46D7D",
    accent: "Soft Pearl & Rose Gold",
  },
  {
    id: 4,
    category: "Intimate Cinematic Romance",
    title: "Sunset Serenade & Fairy Light Arch",
    subtitle: "Suasana Sakral Khidmat Berlatar Langit Senja dan Alunan Musik Akustik Lembut",
    venue: "Villa Rumah Putih, Bogor",
    guestCount: "100 - 250 Tamu",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1920&auto=format&fit=crop",
    color: "#7C5EA0",
    accent: "Twilight Purple & Starlight",
  },
]

export default function LuxuryHeroCarousel({ currentTheme, onChangeTheme, onReplayGate }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  const currentSlide = HERO_SLIDES[currentIndex]

  // Auto advancement timer (6.5 seconds)
  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [isAutoPlay, currentIndex])

  const paginate = (newDirection) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    }
  }

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.08,
      x: dir > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 7, ease: "linear" }, // Gentle Ken Burns slow zoom
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.96,
      x: dir > 0 ? -80 : 80,
      transition: {
        opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    }),
  }

  const textVariants = {
    initial: { opacity: 0, y: 35 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  }

  const waSlideUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Halo Rose Decor! Saya terpesona dengan konsep panggung "${currentSlide.title}" (${currentSlide.venue}) di website. Mohon info ketersediaan tanggal dan proposal biayanya.`
  )}`

  return (
    <section id="beranda" className="relative h-screen min-h-[580px] sm:min-h-[660px] max-h-[960px] w-full overflow-hidden bg-[#181513]">
      {/* Background Image Carousel with Ken Burns Motion */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
          }}
        >
          {/* Multi-layered cinematic shadows & vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Grain Overlay for Editorial Film Feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content Layout */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-10">
        {/* Top Floating Controls */}
        <div className="flex items-center justify-end">
          {/* Autoplay Pause / Play Toggle & Slide Counter */}
          <div className="flex items-center gap-2.5 glass-panel-dark px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 text-xs text-white">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="hover:text-[#D4AF37] transition cursor-pointer"
              title={isAutoPlay ? "Jeda rotasi otomatis" : "Lanjutkan rotasi otomatis"}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="h-3 w-px bg-white/20" />
            <span className="font-serif tracking-widest text-[#D4AF37] font-bold">
              0{currentIndex + 1}
            </span>
            <span className="text-white/40">/</span>
            <span className="text-white/60">0{HERO_SLIDES.length}</span>
          </div>
        </div>

        {/* Center / Lower Center Editorial Typography */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 my-auto sm:my-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              className="space-y-2 sm:space-y-3.5"
            >
              {/* Category & Venue Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#F3E5AB] border border-[#D4AF37]/40">
                  {currentSlide.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] sm:text-xs text-white/80 font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{currentSlide.venue}</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
                {currentSlide.title}
              </h1>

              {/* Sub-headline */}
              <p className="text-xs sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl drop-shadow-sm line-clamp-2 sm:line-clamp-none">
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
            <a
              href="#kalkulator"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#1C1815] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all group"
            >
              <span>Kalkulasi Biaya Konsep Ini</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={waSlideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Strip & Carousel Timeline */}
        <div className="pt-3 sm:pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Thumbnails */}
          <div className="flex items-center gap-2.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-300 text-left shrink-0 cursor-pointer ${
                    isActive
                      ? 'w-36 sm:w-44 ring-2 ring-[#D4AF37] scale-105 shadow-lg'
                      : 'w-20 sm:w-28 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="h-14 sm:h-16 relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    
                    <div className="absolute inset-0 p-2 flex flex-col justify-end">
                      <span className="text-[10px] font-bold text-white line-clamp-1">
                        {slide.title}
                      </span>
                    </div>

                    {/* Active Animated Progress Bar */}
                    {isActive && isAutoPlay && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6.5, ease: "linear" }}
                      />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation Prev / Next Pill Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-full glass-panel-dark text-white hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/20 flex items-center justify-center transition-all active:scale-90 cursor-pointer"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-full glass-panel-dark text-white hover:text-[#D4AF37] hover:border-[#D4AF37] border border-white/20 flex items-center justify-center transition-all active:scale-90 cursor-pointer"
              aria-label="Slide berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
