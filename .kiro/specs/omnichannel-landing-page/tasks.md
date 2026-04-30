# Rencana Implementasi: Omnichannel Landing Page

## Overview

Implementasi landing page platform omnichannel messaging menggunakan Vue 3 (Composition API) dan Tailwind CSS. Landing page terdiri dari 9 section utama yang dibangun sebagai komponen modular. Pendekatan implementasi dimulai dari setup project, komponen umum (common), lalu section-by-section dari atas ke bawah, diakhiri dengan integrasi dan responsivitas.

## Tasks

- [x] 1. Setup project dan konfigurasi dasar
  - [x] 1.1 Inisialisasi project Vue 3 dengan Vite
    - Jalankan `npm create vite@latest` dengan template Vue
    - Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`
    - Konfigurasi `tailwind.config.js` dengan custom colors (primary purple/violet, dark navy), font family (Inter, system-ui), dan max-width container
    - Konfigurasi `postcss.config.js`
    - Buat `src/assets/styles/main.css` dengan Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.2 Buat struktur direktori project
    - Buat folder `src/components/common/`
    - Buat folder `src/components/` untuk section components
    - Buat folder `src/composables/`
    - Buat folder `src/data/`
    - Buat folder `src/assets/images/` dengan subfolder (industry, challenges, channels)
    - _Requirements: 1.5_

  - [x] 1.3 Setup Vitest dan Vue Test Utils
    - Install `vitest`, `@vue/test-utils`, `jsdom`
    - Buat `vitest.config.js` dengan environment jsdom dan plugin vue
    - Buat `tests/setup.js` untuk global test setup
    - _Requirements: 1.1_

- [x] 2. Implementasi komponen umum (common components)
  - [x] 2.1 Buat komponen `Container.vue`
    - Implementasi wrapper dengan `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
    - Props: `as` (tag HTML, default 'div'), `padding` (boolean, default true)
    - _Requirements: 12.2, 11.5_

  - [x] 2.2 Buat komponen `BaseButton.vue`
    - Props: `variant` ('primary' | 'secondary' | 'outline'), `size` ('sm' | 'md' | 'lg'), `href`
    - Styling: rounded, transisi hover halus, tap target minimal 44x44px pada mobile
    - Render sebagai `<a>` jika `href` diberikan, `<button>` jika tidak
    - _Requirements: 11.2, 11.6, 12.5_

  - [x] 2.3 Buat komponen `SectionHeading.vue`
    - Props: `title` (required), `subtitle`, `align` ('left' | 'center'), `dark` (boolean)
    - Styling: hierarki tipografi yang jelas (heading besar bold, subtitle regular)
    - _Requirements: 11.4_

  - [ ]* 2.4 Tulis unit tests untuk komponen common
    - Test rendering BaseButton dengan berbagai variant dan size
    - Test Container menghasilkan tag HTML sesuai prop `as`
    - Test SectionHeading menampilkan title dan subtitle dengan benar
    - _Requirements: 1.1, 11.2, 11.4_

- [x] 3. Implementasi Navigation Bar
  - [x] 3.1 Buat file data `src/data/navigation.js`
    - Definisikan array `navLinks` (Products, Pricing, Resources)
    - Definisikan array `ctaButtons` (Book a Demo - secondary, Sign Up - primary)
    - _Requirements: 2.2, 2.3_

  - [x] 3.2 Buat komponen `NavBar.vue`
    - Tampilkan logo di sisi kiri
    - Tampilkan nav links di tengah (desktop)
    - Tampilkan CTA buttons di sisi kanan (desktop)
    - Implementasi sticky/fixed position dengan background putih dan shadow halus
    - State: `isMobileMenuOpen` (ref boolean)
    - Tampilkan hamburger icon pada mobile (< 768px)
    - Implementasi mobile menu dengan animasi slide-down saat hamburger diklik
    - Sembunyikan nav links horizontal pada mobile
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [ ]* 3.3 Tulis unit tests untuk NavBar
    - Test render logo, nav links, dan CTA buttons
    - Test toggle mobile menu saat hamburger diklik
    - Test hamburger icon muncul pada mobile viewport
    - _Requirements: 2.1, 2.2, 2.3, 2.5, 2.6_

- [x] 4. Implementasi Hero Section
  - [x] 4.1 Buat komponen `HeroSection.vue`
    - Tampilkan headline "Connect every message, Delight every customer" dengan font besar dan bold
    - Tampilkan subtitle/deskripsi value proposition
    - Tampilkan dua CTA buttons (primary dan secondary/outline)
    - Tampilkan ilustrasi hero di sisi kanan (placeholder SVG/image)
    - Gunakan aksen gradien ungu/violet pada elemen dekoratif
    - Layout: horizontal (teks kiri, ilustrasi kanan) pada desktop
    - Layout: vertikal (teks atas, ilustrasi bawah) pada mobile
    - Background putih/terang dengan elemen dekoratif gradien halus
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

  - [ ]* 4.2 Tulis unit tests untuk HeroSection
    - Test render headline, subtitle, dan CTA buttons
    - Test keberadaan ilustrasi hero
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 5. Checkpoint - Pastikan semua tests pass
  - Pastikan semua tests pass, tanyakan ke user jika ada pertanyaan.

- [x] 6. Implementasi Industry Solution Section
  - [x] 6.1 Buat file data `src/data/industries.js`
    - Definisikan array `industries` dengan 3 item: E-Commerce & Retail, Hospitality & Travel, Education & Training
    - Setiap item memiliki: id, label, image path, description
    - _Requirements: 4.2_

  - [x] 6.2 Buat komponen `IndustrySection.vue`
    - Tampilkan judul "A solution made for every Industry" dan subtitle
    - Implementasi Tab Navigation dengan 3 tab
    - State: `activeTab` (ref string, default 'ecommerce')
    - Tampilkan gambar/ilustrasi sesuai tab aktif saat tab diklik
    - Style tab aktif berbeda dari tab tidak aktif (warna, border, background)
    - Background section terang (putih/abu-abu muda)
    - Tab navigation scrollable horizontal pada mobile
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

  - [ ]* 6.3 Tulis unit tests untuk IndustrySection
    - Test render semua tiga tab
    - Test tab ecommerce aktif secara default
    - Test switch konten saat tab diklik
    - Test style aktif diterapkan pada tab yang dipilih
    - _Requirements: 4.2, 4.3, 4.4, 4.5_

- [x] 7. Implementasi Common Challenges Section
  - [x] 7.1 Buat file data `src/data/challenges.js`
    - Definisikan array `challenges` dengan 3 item: Looking for a new tool, Disorganized workflow, Limited Conversation
    - Setiap item memiliki: id, title, description, image path
    - _Requirements: 5.2, 5.4_

  - [x] 7.2 Buat komponen `ChallengesSection.vue`
    - Tampilkan judul "Common challenges across industries" dan subtitle
    - Render Challenge Cards dengan layout alternating berdasarkan index (ganjil: gambar kiri-teks kanan, genap: teks kiri-gambar kanan)
    - Layout vertikal (gambar atas, teks bawah) pada mobile
    - Spacing konsisten antar kartu
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [ ]* 7.3 Tulis unit tests untuk ChallengesSection
    - Test render minimal 3 challenge cards
    - Test layout alternating (ganjil/genap)
    - _Requirements: 5.2, 5.3_

- [x] 8. Implementasi Platform Channels Section
  - [x] 8.1 Buat file data `src/data/channels.js`
    - Definisikan array `channels` dengan minimal 6 item: WhatsApp, Instagram, TikTok, Telegram, Facebook, LINE
    - Definisikan array `features` untuk kartu fitur platform
    - Setiap channel memiliki: id, name, icon path
    - Setiap feature memiliki: id, title, description, icon
    - _Requirements: 6.2, 6.3_

  - [x] 8.2 Buat komponen `ChannelsSection.vue`
    - Tampilkan judul "One platform, Infinite ways to talk"
    - Render grid Channel Icons dengan ukuran seragam dan spacing konsisten
    - Render kartu fitur dalam layout grid dengan tema warna gelap (ungu/dark)
    - Grid responsif: 2 kolom atau 1 kolom pada mobile
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [ ]* 8.3 Tulis unit tests untuk ChannelsSection
    - Test render semua channel icons
    - Test render kartu fitur
    - _Requirements: 6.2, 6.3_

- [x] 9. Implementasi How It Works Section
  - [x] 9.1 Buat file data `src/data/steps.js`
    - Definisikan array `steps` dengan minimal 3 langkah: Connect your channels, Set up your team, Start conversations
    - Setiap step memiliki: number, title, description
    - _Requirements: 7.2, 7.4_

  - [x] 9.2 Buat komponen `HowItWorksSection.vue`
    - Tampilkan judul "How it works"
    - Render langkah-langkah berurutan dengan nomor step, judul, dan deskripsi
    - Tampilkan ilustrasi visual alur kerja
    - Layout bersih dengan ikon/elemen visual per langkah
    - Layout vertikal pada mobile
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [ ]* 9.3 Tulis unit tests untuk HowItWorksSection
    - Test render semua langkah dengan nomor, judul, dan deskripsi
    - _Requirements: 7.2, 7.4_

- [x] 10. Checkpoint - Pastikan semua tests pass
  - Pastikan semua tests pass, tanyakan ke user jika ada pertanyaan.

- [x] 11. Implementasi Testimonials dan Social Proof Section
  - [x] 11.1 Buat file data `src/data/testimonials.js`
    - Definisikan array `testimonials` dengan minimal 1 testimonial (quote, author, company, avatar)
    - Definisikan array `stats` dengan minimal 3 statistik (value, label)
    - _Requirements: 8.2, 8.3_

  - [x] 11.2 Buat komponen `TestimonialsSection.vue`
    - Tampilkan judul "Trusted by teams that talk"
    - Render kartu testimonial dengan kutipan, nama, dan info perusahaan
    - Render Stat Cards dengan angka statistik ("> 56%", "> 88%", "> 69%") dan label
    - Background gelap (navy/dark) untuk kontras
    - Teks dan statistik dengan warna terang yang kontras
    - Stat Cards layout vertikal pada mobile
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 11.3 Tulis unit tests untuk TestimonialsSection
    - Test render testimonial card dengan quote dan author
    - Test render minimal 3 stat cards
    - _Requirements: 8.2, 8.3_

- [x] 12. Implementasi CTA Banner Section
  - [x] 12.1 Buat komponen `CTABanner.vue`
    - Tampilkan headline "Bring your team and customers into one place that actually makes sense"
    - Tampilkan satu CTA button yang menonjol
    - Background gradien ungu/violet sesuai palet warna utama
    - Padding vertikal yang cukup untuk ruang visual nyaman
    - Teks dan tombol center-aligned
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [ ]* 12.2 Tulis unit tests untuk CTABanner
    - Test render headline dan CTA button
    - _Requirements: 9.1, 9.2_

- [x] 13. Implementasi Footer Section
  - [x] 13.1 Buat file data `src/data/footer.js`
    - Definisikan array `footerColumns` dengan minimal 3 kolom (Product, Company, Support) dan link di setiap kolom
    - Definisikan array `socialLinks` dengan ikon media sosial
    - _Requirements: 10.2, 10.3_

  - [x] 13.2 Buat komponen `FooterSection.vue`
    - Tampilkan logo platform di bagian atas footer
    - Render kolom navigasi dari data (minimal 3 kolom)
    - Render ikon link media sosial
    - Tampilkan informasi copyright di bagian paling bawah
    - Background gelap (dark/navy) konsisten dengan desain
    - Kolom navigasi layout vertikal (stacked) pada mobile
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

  - [ ]* 13.3 Tulis unit tests untuk FooterSection
    - Test render logo, kolom navigasi, social links, dan copyright
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 14. Integrasi dan composable
  - [x] 14.1 Buat composable `src/composables/useMediaQuery.js`
    - Implementasi reactive boolean yang mengikuti media query
    - Gunakan `matchMedia` API dengan event listener
    - Cleanup listener pada `onUnmounted`
    - _Requirements: 12.1_

  - [x] 14.2 Integrasikan semua komponen di `App.vue`
    - Import dan render semua section components secara berurutan: NavBar, HeroSection, IndustrySection, ChallengesSection, ChannelsSection, HowItWorksSection, TestimonialsSection, CTABanner, FooterSection
    - Pastikan urutan section sesuai desain
    - _Requirements: 1.5, 12.1_

  - [ ]* 14.3 Tulis unit tests untuk App.vue
    - Test semua section components ter-render
    - Test urutan section benar
    - _Requirements: 1.5_

- [x] 15. Polish visual dan responsivitas
  - [x] 15.1 Terapkan konsistensi desain visual
    - Pastikan palet warna konsisten di seluruh komponen (primary purple #7C3AED, white #FFFFFF, dark navy #1E1B4B)
    - Pastikan border-radius konsisten (rounded-lg/rounded-xl) pada kartu dan tombol
    - Pastikan shadow halus (shadow-sm/shadow-md) pada elemen yang memerlukan elevasi
    - Pastikan spacing konsisten antar section (py-16 atau py-20 pada desktop)
    - Tambahkan transisi halus pada elemen interaktif (hover buttons, tab switch)
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

  - [x] 15.2 Verifikasi responsivitas pada semua breakpoints
    - Pastikan layout optimal pada mobile (< 768px), tablet (768px-1024px), dan desktop (> 1024px)
    - Pastikan semua layout multi-kolom menjadi single-column pada mobile
    - Pastikan teks dapat dibaca tanpa horizontal scrolling
    - Pastikan gambar responsif dengan ukuran relatif (max-width: 100%)
    - Pastikan tap target minimal 44x44px pada mobile
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

- [x] 16. Final checkpoint - Pastikan semua tests pass
  - Pastikan semua tests pass, tanyakan ke user jika ada pertanyaan.

## Catatan

- Tasks yang ditandai dengan `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirements spesifik untuk traceability
- Checkpoints memastikan validasi inkremental di setiap tahap
- Unit tests memvalidasi rendering komponen dan interaksi pengguna
- Property-based tests TIDAK diterapkan karena ini adalah UI landing page statis tanpa algoritma kompleks
