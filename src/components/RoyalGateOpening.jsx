import React, { useState, useEffect } from 'react'
import { Sparkles, Key, Volume2, VolumeX, Eye } from 'lucide-react'

// Web Audio API Synthesizer for royal harp chime
function playRoyalHarpChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    const notes = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25, 783.99, 1046.5] // C maj chord arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12)

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12)
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.12 + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.12 + 1.8)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime + idx * 0.12)
      osc.stop(ctx.currentTime + idx * 0.12 + 2.0)
    })
  } catch (err) {
    console.log('Audio ambient autoplay prevented or unavailable', err)
  }
}

export default function RoyalGateOpening({ onFinish, isOpen, setIsOpen }) {
  const [animating, setAnimating] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const handleOpenGate = () => {
    if (soundEnabled) {
      playRoyalHarpChime()
    }
    setAnimating(true)

    // Gate opens in 2.2 seconds, then reveals website smoothly
    setTimeout(() => {
      setIsOpen(true)
      if (onFinish) onFinish()
    }, 2200)
  }

  // If already opened and not animating, do not render overlay
  if (isOpen && !animating) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        animating ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{
        perspective: '1400px',
        backgroundColor: '#1E1B18',
      }}
    >
      {/* Background Garden Light Behind Gates */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(255, 235, 205, 0.45) 0%, rgba(26, 23, 20, 0.95) 80%), url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop")',
        }}
      >
        {/* Divine Light Beam emanating from center crack */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF7E6] to-transparent mix-blend-screen transition-opacity duration-1000 ${
            animating ? 'opacity-90 scale-125' : 'opacity-20 animate-pulse'
          }`}
        />
      </div>

      {/* LEFT GATE LEAF */}
      <div
        className="absolute top-0 left-0 bottom-0 w-1/2 origin-left transition-all ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transitionDuration: animating ? '2200ms' : '0ms',
          transform: animating ? 'rotateY(-110deg)' : 'rotateY(0deg)',
          boxShadow: '15px 0 50px rgba(0,0,0,0.8)',
          background: 'linear-gradient(135deg, #1C1917 0%, #2A2522 50%, #151311 100%)',
          borderRight: '4px solid #D4AF37',
        }}
      >
        {/* Left Gate Filigree Pattern */}
        <div className="absolute inset-0 opacity-80 p-6 flex flex-col justify-between border-r-2 border-[#B3874B]/40">
          {/* Top Arch Filigree */}
          <svg className="w-full h-40 text-[#D4AF37]/50" viewBox="0 0 200 100" fill="none">
            <path
              d="M0,80 Q50,10 100,50 T200,20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,50 Q100,0 200,80"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="100" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="160" cy="35" r="8" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Vertical Wrought Iron Bars */}
          <div className="flex-1 flex justify-around items-stretch my-4 px-4 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-b from-[#B3874B] via-[#4A423A] to-[#B3874B] rounded-full relative"
              >
                <div className="absolute top-1/4 -left-2 w-5 h-5 rounded-full border border-[#D4AF37] opacity-60" />
                <div className="absolute top-3/4 -left-2 w-5 h-5 rounded-full border border-[#D4AF37] opacity-60" />
              </div>
            ))}
          </div>

          {/* Botanical Rose Vines on Left Gate */}
          <div className="absolute bottom-10 left-6 text-[#C46D7D]/70 text-4xl">
            🌹 <span className="text-xl text-[#B3874B]">🌿</span> 🌹
          </div>
        </div>
      </div>

      {/* RIGHT GATE LEAF */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 origin-right transition-all ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transitionDuration: animating ? '2200ms' : '0ms',
          transform: animating ? 'rotateY(110deg)' : 'rotateY(0deg)',
          boxShadow: '-15px 0 50px rgba(0,0,0,0.8)',
          background: 'linear-gradient(225deg, #1C1917 0%, #2A2522 50%, #151311 100%)',
          borderLeft: '4px solid #D4AF37',
        }}
      >
        {/* Right Gate Filigree Pattern */}
        <div className="absolute inset-0 opacity-80 p-6 flex flex-col justify-between border-l-2 border-[#B3874B]/40">
          {/* Top Arch Filigree */}
          <svg className="w-full h-40 text-[#D4AF37]/50" viewBox="0 0 200 100" fill="none">
            <path
              d="M200,80 Q150,10 100,50 T0,20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M200,50 Q100,0 0,80"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="100" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="35" r="8" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Vertical Wrought Iron Bars */}
          <div className="flex-1 flex justify-around items-stretch my-4 px-4 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-b from-[#B3874B] via-[#4A423A] to-[#B3874B] rounded-full relative"
              >
                <div className="absolute top-1/4 -left-2 w-5 h-5 rounded-full border border-[#D4AF37] opacity-60" />
                <div className="absolute top-3/4 -left-2 w-5 h-5 rounded-full border border-[#D4AF37] opacity-60" />
              </div>
            ))}
          </div>

          {/* Botanical Rose Vines on Right Gate */}
          <div className="absolute bottom-10 right-6 text-[#C46D7D]/70 text-4xl">
            🌹 <span className="text-xl text-[#B3874B]">🌿</span> 🌹
          </div>
        </div>
      </div>

      {/* CENTER ORNATE MEDALLION & ENTRANCE TRIGGER */}
      <div
        className={`relative z-20 text-center max-w-lg px-6 transition-all duration-700 ${
          animating ? 'opacity-0 scale-150 blur-md' : 'opacity-100 scale-100'
        }`}
      >
        {/* Sound toggle on corner */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="absolute -top-16 right-4 sm:right-0 p-2.5 rounded-full bg-black/60 text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-black/80 transition-all flex items-center gap-1.5 text-xs cursor-pointer"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          <span className="hidden sm:inline">{soundEnabled ? 'Suara Royal Aktif' : 'Mute'}</span>
        </button>

        {/* Golden Wax Seal Crest */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#996F33] via-[#F3E5AB] to-[#B3874B] shadow-[0_0_50px_rgba(212,175,55,0.4)] mb-8 flex items-center justify-center animate-pulse">
          <div className="w-full h-full rounded-full bg-[#1C1815] border-2 border-[#D4AF37] flex flex-col items-center justify-center p-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-[#C46D7D]/20 to-transparent" />
            <span className="text-3xl sm:text-4xl block leading-none">🌹</span>
            <span className="font-serif text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mt-1">
              Rose Decor
            </span>
            <span className="text-[8px] text-[#A89887] tracking-wider uppercase">
              Haute Event Styling
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3 mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            The Royal Botanical Entrance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Gerbang Pernikahan <span className="italic font-normal text-[#E8A5B0]">Impian</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#C9BFB5] max-w-sm mx-auto leading-relaxed">
            Melangkahlah masuk ke dalam mahakarya visual pernikahan mewah dan tak terlupakan.
          </p>
        </div>

        {/* Primary Interactive Open Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleOpenGate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-sm font-bold text-[#1C1815] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C59B27] shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
          >
            <Key className="w-4 h-4 text-[#523A10] group-hover:rotate-45 transition-transform duration-300" />
            <span>Buka Gerbang Impian</span>
            <Sparkles className="w-4 h-4 text-[#523A10]" />
          </button>

          <button
            onClick={() => {
              setIsOpen(true)
              if (onFinish) onFinish()
            }}
            className="text-xs text-[#A89887] hover:text-white px-4 py-2 transition underline underline-offset-4 cursor-pointer"
          >
            Lewati Intro Langsung
          </button>
        </div>
      </div>
    </div>
  )
}
