import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Key, Sun, Moon, Sunset, Wind, Volume2, VolumeX, ArrowRight, MessageCircle, RotateCcw } from 'lucide-react'
import { BRAND_INFO } from '../data/weddingData'

// Web Audio API Synthesizer for royal harp chime
function playRoyalHarpChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    if (ctx.state === 'suspended') ctx.resume()

    const notes = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25, 783.99, 1046.5] // C maj chord arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1)

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1)
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.1 + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.1 + 1.8)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime + idx * 0.1)
      osc.stop(ctx.currentTime + idx * 0.1 + 1.9)
    })
  } catch (err) {
    console.log('Audio ambient error', err)
  }
}

export default function RoyalGate3DModal({ isOpen, onClose }) {
  // Gate angle: 0 (closed) to 105 (fully open)
  const [gateAngle, setGateAngle] = useState(0)
  const [isGateOpen, setIsGateOpen] = useState(false)
  const [timeOfDay, setTimeOfDay] = useState('sunset') // 'morning', 'sunset', 'midnight'
  const [dryIceActive, setDryIceActive] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Auto trigger gate opening when modal first opens
  useEffect(() => {
    if (isOpen) {
      setGateAngle(0)
      setIsGateOpen(false)
      const timer = setTimeout(() => {
        handleToggleGate(true)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleToggleGate = (forceOpenState) => {
    const nextState = forceOpenState !== undefined ? forceOpenState : !isGateOpen
    setIsGateOpen(nextState)
    setGateAngle(nextState ? 105 : 0)
    if (soundEnabled && nextState) {
      playRoyalHarpChime()
    }
  }

  const handleSliderChange = (e) => {
    const val = Number(e.target.value)
    setGateAngle(val)
    setIsGateOpen(val > 45)
  }

  // Lighting backdrops
  const backgrounds = {
    morning: {
      bg: 'linear-gradient(to bottom, #A1C4FD 0%, #C2E9FB 50%, #FAF7F5 100%)',
      garden: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      lightColor: 'rgba(255, 255, 230, 0.45)',
      badge: '🌅 Cahaya Pagi Berseri (Morning Aura)',
    },
    sunset: {
      bg: 'linear-gradient(to bottom, #FA709A 0%, #FEE140 100%)',
      garden: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop',
      lightColor: 'rgba(255, 215, 0, 0.55)',
      badge: '🌇 Senja Keemasan (Golden Sunset Hour)',
    },
    midnight: {
      bg: 'linear-gradient(to bottom, #0F2027 0%, #203A43 50%, #2C5364 100%)',
      garden: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1600&auto=format&fit=crop',
      lightColor: 'rgba(200, 220, 255, 0.35)',
      badge: '🌌 Malam Fairy Lights (Starlight Romance)',
    },
  }

  const currentBg = backgrounds[timeOfDay] || backgrounds.sunset

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Top Navigation Bar */}
      <div className="relative z-30 flex items-center justify-between px-6 py-4 bg-[#1A1715]/80 backdrop-blur-md border-b border-[#D4AF37]/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#B3874B] to-[#F3E5AB] flex items-center justify-center text-black font-bold">
            🌹
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <span>Simulasi 3D Gerbang Pernikahan Impian</span>
              <span className="text-[10px] font-sans uppercase px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/40">
                Interactive Studio
              </span>
            </h2>
            <p className="text-xs text-[#A89887]">
              Visualisasi gerbang welcoming gate eksklusif Rose Decor dengan kontrol pencahayaan & sudut rotasi
            </p>
          </div>
        </div>

        {/* Right close and sound toggles */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:text-[#D4AF37] hover:bg-white/20 transition cursor-pointer"
            title={soundEnabled ? 'Matikan Suara Harpa' : 'Nyalakan Suara Harpa'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D4AF37]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Tutup Simulasi</span>
          </button>
        </div>
      </div>

      {/* Main 3D Viewport Stage */}
      <div className="relative flex-1 overflow-hidden flex items-center justify-center">
        {/* Background Garden Image & Dynamic Lighting */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${currentBg.garden})`,
          }}
        >
          {/* Lighting Overlay */}
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{
              background: currentBg.bg,
              opacity: 0.75,
              mixBlendMode: timeOfDay === 'midnight' ? 'multiply' : 'screen',
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Divine Light Shaft emanating through the gate */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at center, ${currentBg.lightColor} 0%, transparent 70%)`,
            opacity: gateAngle / 105,
            transform: `scale(${1 + (gateAngle / 105) * 0.4})`,
          }}
        />

        {/* 3D GATE APPARATUS CONTAINER */}
        <div
          className="relative w-full max-w-4xl h-[480px] sm:h-[560px] flex items-center justify-center"
          style={{
            perspective: '1300px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ARCH FRAME & PILLARS */}
          {/* Left Stone Pillar */}
          <div className="absolute left-6 sm:left-16 top-4 bottom-8 w-10 sm:w-16 bg-gradient-to-r from-[#4A423A] via-[#8C7D70] to-[#36302A] rounded-t-lg shadow-2xl border-t-4 border-[#D4AF37] z-20 flex flex-col justify-between py-6 items-center">
            <span className="text-xl sm:text-2xl">🌹</span>
            <div className="w-full flex-1 flex flex-col justify-around items-center opacity-70">
              <span className="text-xs">🌿</span>
              <span className="text-xs">🌸</span>
              <span className="text-xs">🌿</span>
            </div>
            <span className="text-xl sm:text-2xl">🌹</span>
          </div>

          {/* Right Stone Pillar */}
          <div className="absolute right-6 sm:right-16 top-4 bottom-8 w-10 sm:w-16 bg-gradient-to-l from-[#4A423A] via-[#8C7D70] to-[#36302A] rounded-t-lg shadow-2xl border-t-4 border-[#D4AF37] z-20 flex flex-col justify-between py-6 items-center">
            <span className="text-xl sm:text-2xl">🌹</span>
            <div className="w-full flex-1 flex flex-col justify-around items-center opacity-70">
              <span className="text-xs">🌿</span>
              <span className="text-xs">🌸</span>
              <span className="text-xs">🌿</span>
            </div>
            <span className="text-xl sm:text-2xl">🌹</span>
          </div>

          {/* Top Arch Floral Beam */}
          <div className="absolute top-2 left-6 right-6 sm:left-16 sm:right-16 h-12 bg-gradient-to-b from-[#2A2420] via-[#5C5046] to-[#1C1815] rounded-t-2xl shadow-xl z-20 border-b-2 border-[#D4AF37] flex items-center justify-between px-6">
            <span className="text-sm font-serif font-bold text-[#F3E5AB] tracking-widest uppercase">
              ✨ Rose Decor Grand Welcome Gate
            </span>
            <div className="flex items-center gap-1 text-sm">
              <span>🌸</span>
              <span>🌿</span>
              <span>🌹</span>
              <span>🌿</span>
              <span>🌸</span>
            </div>
          </div>

          {/* Hanging Chandelier in Center Arch */}
          <div className="absolute top-14 z-10 flex flex-col items-center">
            <div className="w-0.5 h-8 bg-[#D4AF37]" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B3874B] to-[#F3E5AB] shadow-[0_0_30px_#D4AF37] flex items-center justify-center animate-pulse text-xs">
              💎
            </div>
          </div>

          {/* GROUND: Red Carpet & Rose Petals */}
          <div className="absolute bottom-0 left-10 right-10 sm:left-24 sm:right-24 h-24 bg-gradient-to-t from-[#751B2A] to-[#A3283B] rounded-t-3xl shadow-inner border-t border-[#D4AF37]/50 flex items-center justify-center overflow-hidden">
            <span className="text-xs text-[#F8D7DA]/60 uppercase tracking-widest font-serif">
              Lorong Karpet Pengantin (Bridal Path)
            </span>
            {/* Scattered petal icons */}
            <div className="absolute inset-0 flex justify-around items-center opacity-75">
              <span>🌸</span>
              <span>🌹</span>
              <span>🌸</span>
              <span>🌹</span>
              <span>🌸</span>
            </div>
          </div>

          {/* DRY ICE MIST EFFECT */}
          {dryIceActive && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/70 via-white/30 to-transparent pointer-events-none z-30 blur-md animate-pulse" />
          )}

          {/* LEFT WROUGHT IRON GATE LEAF */}
          <div
            className="absolute left-16 sm:left-32 top-14 bottom-10 w-[calc(50%-4rem)] sm:w-[calc(50%-8rem)] origin-left transition-transform ease-out shadow-2xl z-10"
            style={{
              transitionDuration: '700ms',
              transform: `rotateY(-${gateAngle}deg)`,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(135deg, rgba(28,24,21,0.95) 0%, rgba(46,39,34,0.95) 50%, rgba(20,18,16,0.95) 100%)',
              border: '3px solid #D4AF37',
              borderRadius: '8px 0 0 4px',
            }}
          >
            {/* Gate Pattern & Filigree */}
            <div className="w-full h-full p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Golden Arch Top */}
              <div className="w-full h-20 border-b-2 border-[#D4AF37]/60 flex items-center justify-center">
                <svg className="w-full h-full text-[#D4AF37]" viewBox="0 0 100 50">
                  <path d="M0,50 Q25,0 50,25 T100,0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Vertical Bars with Gold Accents */}
              <div className="flex-1 flex justify-around items-stretch my-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 bg-[#D4AF37] relative flex flex-col justify-around items-center">
                    <div className="w-3 h-3 rounded-full border border-[#D4AF37] bg-[#2E2722]" />
                    <div className="w-3 h-3 rounded-full border border-[#D4AF37] bg-[#2E2722]" />
                  </div>
                ))}
              </div>

              {/* Bottom Floral Medallion */}
              <div className="h-16 border-t-2 border-[#D4AF37]/60 flex items-center justify-center text-2xl">
                🌹 <span className="text-xs text-[#D4AF37] ml-2">ROSE DECOR</span>
              </div>

              {/* Door Handle */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-lg border border-black/40" />
            </div>
          </div>

          {/* RIGHT WROUGHT IRON GATE LEAF */}
          <div
            className="absolute right-16 sm:right-32 top-14 bottom-10 w-[calc(50%-4rem)] sm:w-[calc(50%-8rem)] origin-right transition-transform ease-out shadow-2xl z-10"
            style={{
              transitionDuration: '700ms',
              transform: `rotateY(${gateAngle}deg)`,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(225deg, rgba(28,24,21,0.95) 0%, rgba(46,39,34,0.95) 50%, rgba(20,18,16,0.95) 100%)',
              border: '3px solid #D4AF37',
              borderRadius: '0 8px 4px 0',
            }}
          >
            {/* Gate Pattern & Filigree */}
            <div className="w-full h-full p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Golden Arch Top */}
              <div className="w-full h-20 border-b-2 border-[#D4AF37]/60 flex items-center justify-center">
                <svg className="w-full h-full text-[#D4AF37]" viewBox="0 0 100 50">
                  <path d="M100,50 Q75,0 50,25 T0,0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Vertical Bars with Gold Accents */}
              <div className="flex-1 flex justify-around items-stretch my-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 bg-[#D4AF37] relative flex flex-col justify-around items-center">
                    <div className="w-3 h-3 rounded-full border border-[#D4AF37] bg-[#2E2722]" />
                    <div className="w-3 h-3 rounded-full border border-[#D4AF37] bg-[#2E2722]" />
                  </div>
                ))}
              </div>

              {/* Bottom Floral Medallion */}
              <div className="h-16 border-t-2 border-[#D4AF37]/60 flex items-center justify-center text-2xl">
                <span className="text-xs text-[#D4AF37] mr-2">EST. 2018</span> 🌹
              </div>

              {/* Door Handle */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-12 rounded-full bg-gradient-to-l from-[#D4AF37] to-[#F3E5AB] shadow-lg border border-black/40" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SIMULATION CONTROL CONSOLE */}
      <div className="relative z-30 bg-[#161311] border-t border-[#D4AF37]/30 px-6 py-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Gate Angle & Status */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-white">
              <span className="font-semibold text-[#F3E5AB] flex items-center gap-1.5">
                <Key className="w-4 h-4 text-[#D4AF37]" />
                <span>Posisi Bukaan Pintu:</span>
              </span>
              <span className="font-bold text-[#D4AF37]">{gateAngle}° ({gateAngle === 0 ? 'Tertutup Rapat' : gateAngle >= 100 ? 'Terbuka Penuh' : 'Terbuka Sebagian'})</span>
            </div>
            <input
              type="range"
              min="0"
              max="105"
              value={gateAngle}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[#2D2A26] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] text-[#A89887]">
              <span>0° (Tertutup)</span>
              <span>50°</span>
              <span>105° (Terbuka Sempurna)</span>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="md:col-span-4 flex items-center justify-center gap-3">
            <button
              onClick={() => handleToggleGate()}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer ${
                isGateOpen
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  : 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] text-[#1C1815] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGateOpen ? 'Tutup Pintu Gerbang' : 'Buka Gerbang Impian'}</span>
            </button>

            {/* Dry Ice Toggle */}
            <button
              onClick={() => setDryIceActive(!dryIceActive)}
              className={`p-3 rounded-full border text-xs transition cursor-pointer ${
                dryIceActive ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#F3E5AB]' : 'bg-white/10 border-white/20 text-white/60'
              }`}
              title="Aktifkan / Matikan Efek Asap Dry Ice"
            >
              <Wind className="w-4 h-4" />
            </button>
          </div>

          {/* Lighting Mode Selector & Direct Booking CTA */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-end gap-3">
            {/* Time of Day Lighting Mode */}
            <div className="flex items-center gap-1.5 p-1 bg-black/50 rounded-full border border-white/10">
              <button
                onClick={() => setTimeOfDay('morning')}
                className={`p-2 rounded-full transition cursor-pointer ${timeOfDay === 'morning' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60 hover:text-white'}`}
                title="Pencahayaan Pagi (Morning)"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTimeOfDay('sunset')}
                className={`p-2 rounded-full transition cursor-pointer ${timeOfDay === 'sunset' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60 hover:text-white'}`}
                title="Pencahayaan Senja (Sunset)"
              >
                <Sunset className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTimeOfDay('midnight')}
                className={`p-2 rounded-full transition cursor-pointer ${timeOfDay === 'midnight' ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/60 hover:text-white'}`}
                title="Pencahayaan Malam (Midnight)"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct WhatsApp Inquiry for this Gate Design */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Halo Rose Decor! Saya telah mencoba simulator 3D Gerbang Impian di website dan sangat tertarik untuk memasukkan konsep Welcoming Gate / Pergola megah ini ke dalam paket pernikahan kami.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] transition shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan Konsep Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
