import React from 'react'
import { BRAND_INFO } from '../data/weddingData'
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react'

export default function Hero({ currentTheme, onChangeTheme, onReplayGate }) {
  const waHeroUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rose Decor, saya ingin booking konsultasi dan menanyakan ketersediaan tanggal pernikahan kami.'
  )}`

  // Theme-specific imagery
  const themeImages = {
    botanical: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    royal: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    starlight: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
  }

  const themeBadges = {
    botanical: '✨ Lush Botanical Floral Art',
    royal: '👑 Grand Royal Ballroom Ambiance',
    starlight: '✨ Starry Fairy Lights Romance',
  }

  const activeImage = themeImages[currentTheme] || themeImages.botanical
  const activeBadge = themeBadges[currentTheme] || themeBadges.botanical

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-pattern transition-colors duration-700">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F4D9DC]/60 via-[#EFE0C9]/40 to-[#F4D9DC]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-48 right-10 w-72 h-72 bg-[#E8C5C8]/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Gate Replay Trigger */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
          <button
            onClick={onReplayGate}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#8B3045] bg-white border border-[#E8C5C8] hover:bg-[#FAF0F2] shadow-xs active:scale-95 transition-all cursor-pointer"
            title="Klik untuk membuka simulasi animasi 3D Gerbang Kerajaan"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B3874B]" />
            <span>Simulasi Gerbang Kerajaan 3D</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-[#8B3045] bg-[#F7E5E8] border border-[#E8C5C8] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B3874B]" />
              <span>One-Stop Wedding Organizer & Event Styling</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2A26] tracking-tight leading-[1.15]">
              Wujudkan Pernikahan{' '}
              <span className="italic font-normal text-[#C46D7D]">Impian Indah</span>{' '}
              Tanpa Beban & Transparan
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#615A52] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dari kemegahan <strong>Dekorasi & Tenda Berkelas</strong>, <strong>Tata Rias MUA Flawless</strong>, <strong>Foto & Video Sinematik</strong>, hingga <strong>Alunan Musik Romantis</strong>. Semua dirancang teliti dan terkoordinasi rapi di bawah satu tim terpercaya.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#kalkulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white rose-gold-gradient shadow-lg shadow-[#C46D7D]/30 hover:brightness-105 active:scale-95 transition-all group"
              >
                <span>Hitung Estimasi Biaya</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={waHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#4A453F] bg-white border border-[#E2D2CE] shadow-sm hover:bg-[#FAF7F5] hover:text-[#C46D7D] active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat WhatsApp Kami</span>
              </a>
            </div>

            {/* Trust Bullet Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#6B635A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B3874B]" />
                <span>100% Tanpa Hidden Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B3874B]" />
                <span>Free Survei Lokasi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B3874B]" />
                <span>Desain 3D Preview</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B3874B]" />
                <span>MoU Resmi & Amanah</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#C46D7D]/30 blur-lg" />

              {/* Main Visual Image with Dynamic Mood Switch */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] object-cover group">
                <img
                  src={activeImage}
                  alt="Rose Decor Luxury Wedding Stage and Event Styling"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  key={activeImage}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md border border-white/30 mb-2">
                    {activeBadge}
                  </span>
                  <p className="font-serif text-xl font-bold">
                    Momen Sakral, Kenangan Abadi Seumur Hidup
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Klien Puas */}
              <div className="absolute -bottom-6 -left-6 sm:left-4 glass-panel p-3.5 rounded-xl shadow-xl border border-white/80 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#C46D7D]">
                  <Heart className="w-5 h-5 fill-[#C46D7D]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-[#2D2A26]">500+ Pasangan</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-[#786E65]">Telah Mempercayakan Momen Bahagia</p>
                </div>
              </div>

              {/* Floating Card 2: Top WO */}
              <div className="absolute -top-4 -right-4 glass-panel py-2 px-3.5 rounded-xl shadow-lg border border-white/80 hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B3874B]" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2D2A26]">Vendor Terverifikasi</p>
                  <p className="text-[10px] text-[#786E65]">Garansi Pelayanan Prima</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E8DCD9]/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2D2A26]">
              500+
            </span>
            <p className="text-xs uppercase tracking-wider text-[#8A7E74] font-medium">Acara Terselenggara</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#C46D7D]">
              99.4%
            </span>
            <p className="text-xs uppercase tracking-wider text-[#8A7E74] font-medium">Kepuasan Pengantin</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#B3874B]">
              8+ Tahun
            </span>
            <p className="text-xs uppercase tracking-wider text-[#8A7E74] font-medium">Pengalaman Teruji</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2D2A26]">
              Rp 0
            </span>
            <p className="text-xs uppercase tracking-wider text-[#8A7E74] font-medium">Biaya Tersembunyi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
