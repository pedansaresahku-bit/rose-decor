# 🌹 Rose Decor — Wedding Organizer & Event Styling

Spesifikasi arsitektur, struktur halaman, dan panduan teknis pengembangan website resmi **Rose Decor**.

---

## 1. Project Overview & Positioning

- **Brand Name:** Rose Decor
- **Core Industry:** Wedding Organizer (WO) & Event Planner
- **Target Audience:** Calon pengantin, keluarga, dan event planner yang mencari paket pernikahan lengkap (one-stop wedding solution) dengan sentuhan elegan, rapi, dan transparan.
- **Primary Goal:** Memberikan impresi visual premium, mempermudah calon klien melihat portofolio/paket, dan mengonversi kunjungan menjadi prospek WhatsApp konsultasi.

---

## 2. Core Services Breakdown

Website ini menonjolkan 4 pilar layanan utama yang saling terintegrasi:

1. **Decoration & Tend (Tenda & Dekorasi):**
   - Backdrop pelaminan (Modern Rustic, Minimalist Glam, Tradisional/Adat).
   - Tenda dekorasi plafon, semi-dekorasi, kain juntai, hingga *clear tent* (tenda transparan).
   - Pencahayaan (lighting ambiance, fairy lights, chandelier), standing flower, dan welcoming gate.

2. **Makeup Artist & Attire (MUA):**
   - Rias akad nikah, resepsi, siraman, dan pre-wedding.
   - Pilihan busana pengantin (kebaya modern, adat Nusantara, gaun internasional).
   - Makeup & busana untuk orang tua, bridesmaid, dan keluarga inti.

3. **Documentation (Photo & Videography):**
   - Liputan akad & resepsi (multi-camera photo & video cinema).
   - Pre-wedding photo session (indoor/outdoor concept).
   - Deliverables: Cinematic teaser video (1 menit untuk Reels/TikTok), full documentary video, album cetak premium, dan link cloud gallery.

4. **Entertainment (Musik & Organ Tunggal):**
   - Paket Solo / Duet Keyboard (Organ Tunggal) + Singer.
   - Opsi Akustik Band / Full Band Pop-Romantis.
   - Sound system standard wedding, mic wireless, dan penataan rundown musik live.

---

## 3. Recommended Tech Stack

Untuk performa tinggi, animasi visual halus, dan skor SEO optimal:

- **Framework:** React / Next.js / Vite React
- **Styling:** Tailwind CSS (skema warna: warm off-white, blush rose, champagne gold, dan deep charcoal)
- **Micro-Interactions & Motion:** Lucide Icons, animasi transisi lembut pada galeri dan hero section
- **Form & Contact:** Direct WhatsApp API link generator dengan *pre-filled message* dinamis sesuai paket yang dipilih
- **Deployment:** Vercel / Cloudflare Pages / Static Hosting

---

## 4. Site Architecture & Section Blueprint

Website dirancang dengan model **One-Page Hybrid** (Single page utama untuk alur konversi cepat, dilengkapi modal portofolio):

```
[ Navbar ]
├── Brand Logo & Tagline
├── Menu: Beranda, Layanan, Paket, Portofolio, Testimoni, FAQ
└── CTA Button: "Konsultasi Gratis" (WhatsApp)

[ Hero Section ]
├── Headline: "Wujudkan Pernikahan Impian Tanpa Beban Bersama Rose Decor"
├── Sub-headline & Tagline Elegan
├── Dual CTA: "Lihat Paket Pernikahan" & "Chat WhatsApp"
└── Visual Banner & Key Stats (100+ Acara Sukses, 99% Puas, Vendor Terpercaya)

[ Value Proposition / Why Choose Us ]
├── One-Stop Wedding Solution (Semua kebutuhan dalam satu tim terkoordinasi)
├── Transparansi Biaya (Tanpa biaya tersembunyi / hidden cost)
├── Tim Profesional & Tepat Waktu
└── Konsep Fleksibel & Custom (Adat, Modern, Rustic, Minimalist Glam)

[ Detailed Services (Interactive Tabs / Grid System) ]
├── Tab 1: Dekorasi & Tenda Eksklusif
├── Tab 2: Rias Pengantin (MUA) & Busana
├── Tab 3: Dokumentasi Foto & Video Sinematik
└── Tab 4: Hiburan Musik & Sound System

[ Interactive Budget Estimator & Package Selector ]
├── Pilih Jenis Venue (Rumah / Gedung / Outdoor)
├── Pilih Layanan (Dekorasi, Tenda, Rias MUA, Dokumentasi, Musik)
├── Estimasi Jumlah Undangan & Add-ons
└── Tombol "Konsultasikan Estimasi ke WhatsApp" dengan format pesan otomatis

[ Curated Package Options (Tabel Paket Pernikahan) ]
├── Paket Akad / Intimate (50 - 100 Undangan)
├── Paket Signature Silver (Gedung / Rumah)
├── Paket Grand Rose Gold (All-In Full Coverage)
└── Opsi Custom / A La Carte

[ Filterable Portfolio & Gallery ]
├── Filter Kategori: All | Dekorasi | Rias & Gaun | Dokumentasi | Tenda
└── Lightbox Preview & Detail Foto

[ Testimonials & Real Couples ]
├── Testimoni pengantin asli, rating bintang, foto pernikahan, dan venue

[ FAQ Section ]
├── Skema pembayaran & DP
├── Area jangkauan layanan
├── Fleksibilitas kustomisasi konsep
└── Prosedur booking & survey lokasi

[ Footer & Sticky Floating CTA ]
├── Profil Rose Decor, alamat galeri/kantor, kontak media sosial, jam kerja
└── Sticky Floating WhatsApp Button di pojok kanan bawah
```

---

## 5. Conversion Strategy (Rekomendasi Hasil Terbaik)

Agar website ini efektif menghasilkan *booking*, terapkan strategi berikut:

1. **Interactive Budget Estimator / Package Selector:**
   Beri calon pengantin kalkulator sederhana untuk mencentang layanan yang mereka butuhkan (Dekor + MUA + Dokumentasi saja atau All-in), lalu tombol otomatis mengarahkan ke WhatsApp dengan teks:
   > *"Halo Rose Decor, saya ingin konsultasi paket custom (Dekorasi + MUA + Dokumentasi) untuk estimasi 300 tamu di [Kota/Daerah]."*

2. **Visual Hierarchy & Image Optimization:**
   Industri wedding sangat bergantung pada estetika visual. Pastikan semua aset gambar dikonversi ke format **WebP / AVIF** dengan *lazy loading* agar website tetap terbuka di bawah 1.5 detik di perangkat mobile.

3. **Proof of Quality (Social Proof):**
   Sertakan *behind-the-scenes* singkat atau showcase video dokumentasi asli agar calon pengantin yakin dengan kredibilitas tim di lapangan.
