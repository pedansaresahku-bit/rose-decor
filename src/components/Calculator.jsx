import React, { useState, useMemo } from 'react'
import { BRAND_INFO } from '../data/weddingData'
import { Calculator as CalcIcon, MessageCircle, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react'

export default function Calculator() {
  // Form states
  const [venue, setVenue] = useState('gedung')
  const [guestCount, setGuestCount] = useState(300)
  const [decorTier, setDecorTier] = useState('elegance')
  const [tendaTier, setTendaTier] = useState('none')
  const [muaTier, setMuaTier] = useState('family')
  const [docTier, setDocTier] = useState('cinema')
  const [musicTier, setMusicTier] = useState('organ')
  const [addons, setAddons] = useState({
    photobooth: true,
    woCrew: false,
    dryIce: true,
  })

  // Options configuration
  const venueOptions = [
    { id: 'rumah', label: 'Rumah Mempelai', note: 'Direkomendasikan tambah tenda dekorasi' },
    { id: 'gedung', label: 'Gedung / Ballroom', note: 'Fokus pada dekorasi pelaminan megah' },
    { id: 'outdoor', label: 'Semi-Outdoor / Garden', note: 'Nuansa alam dengan ambient lighting' },
  ]

  const decorOptions = [
    { id: 'intimate', label: 'Pelaminan Intimate Minimalist (3-4m)', price: 7500000, desc: 'Cocok untuk akad atau rumah ukuran compact' },
    { id: 'elegance', label: 'Pelaminan Luxury Elegance (6-8m)', price: 14500000, desc: 'Pilihan terpopuler dengan fresh flower melimpah' },
    { id: 'grand', label: 'Grand Royal 3D Pelaminan (10-14m)', price: 24000000, desc: 'Kemegahan kelas istana dengan pilar ukir & instalasi artistik' },
  ]

  const tendaOptions = [
    { id: 'none', label: 'Tanpa Tenda', price: 0, desc: 'Biasanya untuk acara di dalam gedung' },
    { id: 'plafon', label: 'Tenda Serut Plafon VVIP (100 m²)', price: 6500000, desc: 'Kain serut rapi dengan lampu gantung & tirai samping' },
    { id: 'clear', label: 'Tenda Transparan / Clear Tent Eksklusif', price: 12000000, desc: 'Estetika premium tembus pandang dengan fairy light bertabur' },
  ]

  const muaOptions = [
    { id: 'akad', label: 'Rias Pengantin Akad Saja (Sepasang)', price: 3500000, desc: 'Flawless makeup tahan 12 jam + busana akad' },
    { id: 'akad-resepsi', label: 'Akad + Resepsi Pengantin + 2 Ibu & 2 Bapak', price: 7500000, desc: 'Termasuk busana ganti 2x dan aksesori lengkap' },
    { id: 'family', label: 'All-In Family: Pengantin + Ortu + 4 Bridesmaid', price: 10500000, desc: 'Paket rias terpadu untuk pengantin dan seluruh keluarga inti' },
  ]

  const docOptions = [
    { id: 'basic', label: 'Dokumentasi Standar (1 Foto + 1 Video)', price: 4000000, desc: 'Liputan akad & resepsi + master file' },
    { id: 'cinema', label: 'Cinema & Reels (2 Foto + 1 Video + Teaser 60s)', price: 7500000, desc: 'Termasuk album magnetik kolase & teaser viral' },
    { id: 'complete', label: 'Master Cinema 4K + Drone Aerial + 2 Video + Album Mewah', price: 12500000, desc: 'Liputan terlengkap ala film bioskop' },
  ]

  const musicOptions = [
    { id: 'none', label: 'Tanpa Hiburan Musik', price: 0, desc: 'Hanya menggunakan playlist mandiri' },
    { id: 'organ', label: 'Organ Tunggal + 1 Singer + Sound 3.000W', price: 3500000, desc: 'Penyanyi merdu membawakan lagu pop romantis' },
    { id: 'akustik', label: 'Band Akustik Romantis (3 Musisi + Singer + Sound 4.000W)', price: 6500000, desc: 'Sentuhan elegan gitar, cajon, keyboard & vokal lembut' },
  ]

  const addonList = [
    { key: 'photobooth', label: 'Photo Booth Tematik 3D + Properti Foto', price: 2500000 },
    { key: 'woCrew', label: 'Wedding Organizer (WO) On-The-Day (5 Personil)', price: 4500000 },
    { key: 'dryIce', label: 'Efek Dry Ice Kabut Pelaminan & Cold Sparkler', price: 1500000 },
  ]

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Calculate total
  const calculation = useMemo(() => {
    const selectedDecor = decorOptions.find((d) => d.id === decorTier)?.price || 0
    const selectedTenda = tendaOptions.find((t) => t.id === tendaTier)?.price || 0
    const selectedMua = muaOptions.find((m) => m.id === muaTier)?.price || 0
    const selectedDoc = docOptions.find((d) => d.id === docTier)?.price || 0
    const selectedMusic = musicOptions.find((m) => m.id === musicTier)?.price || 0

    let addonTotal = 0
    addonList.forEach((a) => {
      if (addons[a.key]) addonTotal += a.price
    })

    const subtotal = selectedDecor + selectedTenda + selectedMua + selectedDoc + selectedMusic + addonTotal

    // Estimated bonus discount for bundled items (>= 3 core items)
    const isBundled = (selectedDecor > 0 ? 1 : 0) + (selectedMua > 0 ? 1 : 0) + (selectedDoc > 0 ? 1 : 0) + (selectedMusic > 0 ? 1 : 0) >= 3
    const promoDiscount = isBundled ? 1500000 : 0
    const total = Math.max(0, subtotal - promoDiscount)

    return {
      subtotal,
      promoDiscount,
      total,
      isBundled,
    }
  }, [decorTier, tendaTier, muaTier, docTier, musicTier, addons])

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  // Generate WhatsApp dynamic URL
  const waCalculatorUrl = useMemo(() => {
    const venueName = venueOptions.find((v) => v.id === venue)?.label
    const decorName = decorOptions.find((d) => d.id === decorTier)?.label
    const tendaName = tendaOptions.find((t) => t.id === tendaTier)?.label
    const muaName = muaOptions.find((m) => m.id === muaTier)?.label
    const docName = docOptions.find((d) => d.id === docTier)?.label
    const musicName = musicOptions.find((m) => m.id === musicTier)?.label
    
    const activeAddons = addonList
      .filter((a) => addons[a.key])
      .map((a) => a.label)
      .join(', ') || 'Tidak ada'

    const message = `Halo Rose Decor! Saya telah mencoba kalkulator estimasi di website untuk pernikahan impian kami:

📍 Lokasi Venue: ${venueName}
👥 Estimasi Tamu: ${guestCount} Undangan
🌸 Dekorasi: ${decorName}
🎪 Tenda: ${tendaName}
💄 Rias & Busana (MUA): ${muaName}
📸 Dokumentasi: ${docName}
🎵 Hiburan: ${musicName}
✨ Add-on Tambahan: ${activeAddons}

💰 Total Estimasi Biaya: ${formatRupiah(calculation.total)}

Mohon info ketersediaan tanggal dan jadwal konsultasi langsung / survei lokasi. Terima kasih banyak!`

    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
  }, [venue, guestCount, decorTier, tendaTier, muaTier, docTier, musicTier, addons, calculation])

  return (
    <section id="kalkulator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-[#8B3045] bg-[#F7E5E8]">
            <CalcIcon className="w-3.5 h-3.5 text-[#B3874B]" />
            <span>Interactive Budget Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Kalkulator Estimasi Biaya Pernikahan Custom
          </h2>
          <p className="text-sm sm:text-base text-[#6B635A]">
            Atur sendiri komposisi layanan yang Anda butuhkan secara transparan. Klik dan sesuaikan opsi di bawah untuk melihat kalkulasi instan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8 bg-[#FAF7F5] p-6 sm:p-8 rounded-3xl border border-[#EADAD6]">
            {/* Step 1: Venue */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                1. Pilih Tipe Lokasi / Venue Pernikahan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {venueOptions.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVenue(v.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      venue === v.id
                        ? 'bg-white border-[#C46D7D] shadow-md ring-2 ring-[#C46D7D]/20'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <p className={`font-semibold text-sm ${venue === v.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                      {v.label}
                    </p>
                    <p className="text-[11px] text-[#786E65] mt-1">{v.note}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A7E74]">
                  2. Estimasi Jumlah Tamu Undangan
                </label>
                <span className="font-bold text-sm text-[#C46D7D] bg-[#FAF0F2] px-3 py-1 rounded-full border border-[#E8C5C8]">
                  {guestCount} Orang Tamu
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-[#EADAD6] rounded-lg appearance-none cursor-pointer accent-[#C46D7D]"
              />
              <div className="flex justify-between text-[11px] text-[#8A7E74] mt-1">
                <span>50 Tamu (Intimate)</span>
                <span>500 Tamu</span>
                <span>1.500 Tamu (Grand)</span>
              </div>
            </div>

            {/* Step 3: Dekorasi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                3. Tingkat Kemegahan Dekorasi Pelaminan
              </label>
              <div className="space-y-2">
                {decorOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setDecorTier(opt.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      decorTier === opt.id
                        ? 'bg-white border-[#C46D7D] shadow-xs ring-1 ring-[#C46D7D]'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${decorTier === opt.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-[#786E65]">{opt.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#2D2A26] ml-4 shrink-0">
                      {formatRupiah(opt.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Tenda */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                4. Kebutuhan Tenda Dekorasi
              </label>
              <div className="space-y-2">
                {tendaOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setTendaTier(opt.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      tendaTier === opt.id
                        ? 'bg-white border-[#C46D7D] shadow-xs ring-1 ring-[#C46D7D]'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${tendaTier === opt.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-[#786E65]">{opt.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#2D2A26] ml-4 shrink-0">
                      {opt.price === 0 ? 'Rp 0' : formatRupiah(opt.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 5: MUA & Busana */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                5. Paket Rias Pengantin (MUA) & Busana
              </label>
              <div className="space-y-2">
                {muaOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setMuaTier(opt.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      muaTier === opt.id
                        ? 'bg-white border-[#C46D7D] shadow-xs ring-1 ring-[#C46D7D]'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${muaTier === opt.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-[#786E65]">{opt.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#2D2A26] ml-4 shrink-0">
                      {formatRupiah(opt.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 6: Dokumentasi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                6. Paket Foto & Video Dokumentasi
              </label>
              <div className="space-y-2">
                {docOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setDocTier(opt.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      docTier === opt.id
                        ? 'bg-white border-[#C46D7D] shadow-xs ring-1 ring-[#C46D7D]'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${docTier === opt.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-[#786E65]">{opt.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#2D2A26] ml-4 shrink-0">
                      {formatRupiah(opt.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 7: Hiburan Musik */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                7. Hiburan Musik & Sound System
              </label>
              <div className="space-y-2">
                {musicOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setMusicTier(opt.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                      musicTier === opt.id
                        ? 'bg-white border-[#C46D7D] shadow-xs ring-1 ring-[#C46D7D]'
                        : 'bg-white/60 border-[#EADAD6] hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${musicTier === opt.id ? 'text-[#C46D7D]' : 'text-[#2D2A26]'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[11px] text-[#786E65]">{opt.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#2D2A26] ml-4 shrink-0">
                      {opt.price === 0 ? 'Rp 0' : formatRupiah(opt.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 8: Add-on */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A7E74] mb-3">
                8. Opsi Fasilitas Tambahan (Add-On Spesial)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {addonList.map((a) => (
                  <button
                    key={a.key}
                    type="button"
                    onClick={() => toggleAddon(a.key)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      addons[a.key]
                        ? 'bg-[#FAF0F2] border-[#C46D7D] text-[#8B3045] font-medium ring-1 ring-[#C46D7D]'
                        : 'bg-white border-[#EADAD6] text-[#4A453F]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{addons[a.key] ? '✓ Terpilih' : '+ Tambah'}</span>
                      <span className="text-xs font-bold">{formatRupiah(a.price)}</span>
                    </div>
                    <p className="text-xs leading-snug">{a.label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Summary & WhatsApp CTA Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#EADAD6] shadow-xl space-y-6">
              <div className="border-b border-[#EADAD6] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B3874B] font-bold block mb-1">
                  Rangkuman Estimasi
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">
                  Paket Custom Anda
                </h3>
                <p className="text-xs text-[#786E65] mt-1">
                  Estimasi awal siap dikonsultasikan langsung ke tim Rose Decor.
                </p>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 text-xs text-[#4A453F]">
                <div className="flex justify-between">
                  <span className="text-[#786E65]">Venue & Tamu:</span>
                  <span className="font-medium text-right capitalize">{venue} ({guestCount} Org)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786E65]">Dekorasi Pelaminan:</span>
                  <span className="font-medium text-right capitalize">{decorTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786E65]">Tenda:</span>
                  <span className="font-medium text-right capitalize">{tendaTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786E65]">MUA & Busana:</span>
                  <span className="font-medium text-right capitalize">{muaTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786E65]">Dokumentasi:</span>
                  <span className="font-medium text-right capitalize">{docTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786E65]">Hiburan Musik:</span>
                  <span className="font-medium text-right capitalize">{musicTier}</span>
                </div>

                {calculation.promoDiscount > 0 && (
                  <div className="flex justify-between text-[#25D366] font-semibold pt-2 border-t border-dashed border-[#EADAD6]">
                    <span>Bonus Bundle Paket:</span>
                    <span>- {formatRupiah(calculation.promoDiscount)}</span>
                  </div>
                )}
              </div>

              {/* Total Card */}
              <div className="bg-[#FAF0F2] p-5 rounded-2xl border border-[#E8C5C8] text-center space-y-1">
                <span className="text-xs font-semibold uppercase text-[#8B3045]">
                  Estimasi Total Investasi
                </span>
                <div className="font-serif text-3xl font-extrabold text-[#C46D7D]">
                  {formatRupiah(calculation.total)}
                </div>
                <p className="text-[11px] text-[#786E65]">
                  *Harga fleksibel sesuai hasil survei & kebutuhan spesifik Anda.
                </p>
              </div>

              {/* WhatsApp Conversion Trigger */}
              <div>
                <a
                  href={waCalculatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold text-white rose-gold-gradient shadow-lg shadow-[#C46D7D]/30 hover:brightness-105 active:scale-98 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Kirim Estimasi ke WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#8A7E74] mt-2.5">
                  ⚡ Respons cepat 5-15 menit pada jam operasional
                </p>
              </div>

              {/* Guarantee badge */}
              <div className="pt-2 border-t border-[#EADAD6] flex items-center gap-2 text-[11px] text-[#6B635A]">
                <CheckCircle2 className="w-4 h-4 text-[#B3874B] shrink-0" />
                <span>Konsultasi dan sesi survei lokasi Jabodetabek tidak dipungut biaya.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
