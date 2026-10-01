import React, { useState } from 'react'
import { FAQS, BRAND_INFO } from '../data/weddingData'
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold">
            Tanya Jawab Seputar Layanan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm text-[#6B635A]">
            Transparansi adalah prioritas kami. Temukan jawaban seputar teknis kerja sama, sistem pembayaran, dan pelaksanaan hari H.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#EADAD6] overflow-hidden transition-all bg-[#FAF7F5]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#2D2A26] hover:text-[#C46D7D] transition cursor-pointer"
                >
                  <span className="font-serif">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#EADAD6] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C46D7D]' : 'text-[#8A7E74]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5C554D] leading-relaxed border-t border-[#EADAD6]/60 pt-4 bg-white/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF0F2] border border-[#E8C5C8] text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-[#C46D7D] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#2D2A26]">
            Punya Pertanyaan Spesifik Lainnya?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B635A] max-w-lg mx-auto">
            Tim konsultan wedding Rose Decor siap membantu menjelaskan detail teknis, rundown, hingga rekomendasi venue yang pas untuk Anda.
          </p>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Halo Rose Decor, saya ingin bertanya hal spesifik seputar paket pernikahan yang belum terjawab di FAQ.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white rose-gold-gradient shadow-md shadow-[#C46D7D]/25 hover:brightness-105 active:scale-95 transition-all mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanyakan Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
