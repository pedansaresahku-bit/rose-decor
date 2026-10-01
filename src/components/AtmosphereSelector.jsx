import React from 'react'
import { Sparkles, Moon, Sun, Flower2 } from 'lucide-react'

export const ATMOSPHERES = [
  {
    id: 'botanical',
    label: 'Botanical Garden',
    subtitle: 'Blush & Fresh Flora',
    icon: Flower2,
    gradient: 'from-[#FAF7F5] via-[#FFF9FA] to-[#FAF7F5]',
    accentColor: '#C46D7D',
    badgeColor: 'bg-[#F7E5E8] text-[#8B3045]',
  },
  {
    id: 'royal',
    label: 'Royal Champagne',
    subtitle: 'Gold & Grand Ballroom',
    icon: Sparkles,
    gradient: 'from-[#FAF6EF] via-[#FFFDF7] to-[#FAF6EF]',
    accentColor: '#B3874B',
    badgeColor: 'bg-[#F7EEDF] text-[#7A551E]',
  },
  {
    id: 'starlight',
    label: 'Midnight Romance',
    subtitle: 'Fairy Lights & Starlight',
    icon: Moon,
    gradient: 'from-[#F6F4FA] via-[#FAF8FF] to-[#F6F4FA]',
    accentColor: '#7C5EA0',
    badgeColor: 'bg-[#EFE8F7] text-[#58397D]',
  },
]

export default function AtmosphereSelector({ currentTheme, onChangeTheme }) {
  return (
    <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EADAD6] shadow-sm">
      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A7E74] px-2.5 hidden sm:inline-block">
        Tema Visual:
      </span>
      {ATMOSPHERES.map((atm) => {
        const Icon = atm.icon
        const isActive = currentTheme === atm.id
        return (
          <button
            key={atm.id}
            onClick={() => onChangeTheme(atm.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isActive
                ? 'bg-[#2D2A26] text-white shadow-xs scale-105'
                : 'text-[#6B635A] hover:bg-[#FAF7F5]'
            }`}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: isActive ? '#D4AF37' : atm.accentColor }} />
            <span>{atm.label}</span>
          </button>
        )
      })}
    </div>
  )
}
