import React, { useState, useEffect, useRef } from 'react'
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react'

export default function AudioAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContextRef = useRef(null)
  const timerRef = useRef(null)

  const stopMusic = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {})
      audioContextRef.current = null
    }
    setIsPlaying(false)
  }

  const startMusic = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      audioContextRef.current = ctx

      // Romantic pentatonic chord progression (F major, A minor, D minor, Bb major)
      const chordProgressions = [
        [174.61, 220.0, 261.63, 349.23, 440.0],  // F maj
        [220.0, 261.63, 329.63, 440.0, 523.25],  // A min
        [146.83, 220.0, 261.63, 293.66, 349.23], // D min
        [116.54, 174.61, 233.08, 293.66, 349.23] // Bb maj
      ]

      let chordIndex = 0

      const playChordArpeggio = () => {
        if (!ctx || ctx.state === 'closed') return
        const currentChord = chordProgressions[chordIndex % chordProgressions.length]
        chordIndex++

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()

          osc.type = 'sine'
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.28)

          gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.28)
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + i * 0.28 + 0.08)
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.28 + 2.4)

          osc.connect(gain)
          gain.connect(ctx.destination)

          osc.start(ctx.currentTime + i * 0.28)
          osc.stop(ctx.currentTime + i * 0.28 + 2.5)
        })
      }

      playChordArpeggio()
      timerRef.current = setInterval(playChordArpeggio, 2200)
      setIsPlaying(true)
    } catch (err) {
      console.log('Error initializing ambient synthesizer', err)
    }
  }

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic()
    } else {
      startMusic()
    }
  }

  useEffect(() => {
    return () => {
      stopMusic()
    }
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-xl border backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-[#2D2A26]/90 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
            : 'bg-white/90 border-[#EADAD6] text-[#4A453F] hover:bg-white hover:text-[#C46D7D]'
        }`}
        title={isPlaying ? 'Heningkan Musik Ambiance' : 'Putar Musik Ambiance Romantic Harp'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-1 bg-[#D4AF37] rounded-full animate-bounce h-2.5" style={{ animationDelay: '0ms' }} />
              <span className="w-1 bg-[#D4AF37] rounded-full animate-bounce h-4" style={{ animationDelay: '150ms' }} />
              <span className="w-1 bg-[#D4AF37] rounded-full animate-bounce h-3" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs font-semibold tracking-wide">Romantic Ambiance</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#C46D7D]" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">
              Ambiance Wedding Music
            </span>
          </>
        )}
      </button>
    </div>
  )
}
