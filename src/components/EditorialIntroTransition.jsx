import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EditorialIntroTransition() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Automatically lift the curtain after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#181513] text-white cursor-pointer select-none"
        >
          {/* Subtle radial gold aura */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[#D4AF37]/15 to-transparent blur-3xl pointer-events-none" />

          {/* Monogram Crest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-4 relative z-10"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-3xl sm:text-4xl shadow-[0_0_30px_rgba(212,175,55,0.25)] bg-[#1F1B18]">
              🌹
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
                The Art of Celebration
              </span>
              <img
                src="/assets/font-logo.png"
                alt="Rose Decor"
                className="h-9 sm:h-12 w-auto object-contain block brightness-0 invert"
              />
              <p className="text-xs text-[#A89887] tracking-widest uppercase">
                Wedding Organizer & Haute Event Styling
              </p>
            </div>

            {/* Delicate gold loading hairline */}
            <div className="w-36 sm:w-48 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#B3874B] via-[#F3E5AB] to-[#D4AF37]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
