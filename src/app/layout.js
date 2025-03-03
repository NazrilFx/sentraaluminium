import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import localfont from "next/font/local"
import "./globals.css";

const lilita = localfont({
  src: "./fonts/LilitaOne-Regular.ttf",
  variable: "--font-lilita",
});

const inter = localfont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata = {
  title: "Rak Kaca Aluminium Murah Bali - Jual Rak Minimalis & Kuat",
  description:
    "Jual rak kaca aluminium murah di Bali! Desain minimalis, kokoh, dan berkualitas tinggi. Tersedia berbagai ukuran dan model. Cek katalog kami sekarang!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        {/* Meta Tags SEO */}
        <meta name="title" content="Rak Kaca Aluminium Murah Bali - Jual Rak Minimalis & Kuat" />
        <meta
          name="description"
          content="Jual rak kaca aluminium murah di Bali! Desain minimalis, kokoh, dan berkualitas tinggi. Tersedia berbagai ukuran dan model. Cek katalog kami sekarang!"
        />
        <meta name="keywords" content="rak kaca aluminium, jual rak aluminium bali, rak murah, rak kaca minimalis" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sentra Aluminium" />

        {/* Open Graph untuk Facebook dan WhatsApp */}
        <meta property="og:title" content="Rak Kaca Aluminium Murah Bali - Jual Rak Minimalis & Kuat" />
        <meta property="og:description" content="Jual rak kaca aluminium murah di Bali! Desain minimalis, kokoh, dan berkualitas tinggi." />
        <meta property="og:image" content="https://namatoko.com/images/rak-kaca-aluminium.jpg" />
        <meta property="og:url" content="https://namatoko.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rak Kaca Aluminium Murah Bali - Jual Rak Minimalis & Kuat" />
        <meta name="twitter:description" content="Jual rak kaca aluminium murah di Bali! Desain minimalis, kokoh, dan berkualitas tinggi." />
        <meta name="twitter:image" content="https://namatoko.com/images/rak-kaca-aluminium.jpg" />

        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Sentra Aluminium",
              "url": "https://namatoko.com",
              "logo": "https://namatoko.com/images/logo.png",
              "description": "Jual rak kaca aluminium murah di Bali dengan berbagai ukuran dan model minimalis.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Contoh No. 123",
                "addressLocality": "Amlapura",
                "addressRegion": "Bali",
                "postalCode": "80231",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62 857-9296-2289",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/namatoko",
                "https://www.facebook.com/namatoko"
              ]
            }),
          }}
        />
      </Head>
      <body className={`${lilita.variable} ${inter.variable} antialiased`}>
        <Link href="https://wa.me/6285792962289?text=Halo! Saya ingin lebih tau lebih lanjut tentang rak aluminium" className="fixed">

        </Link>
        {/* Header / Navigasi */}
        <header className="bg-white py-4 border-b-2 font-inter">
          {/* container mx-auto */}
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-bold text-gray-800">
              <a href="/">Sentra Aluminium</a>
            </h1>
            <nav>
              <ul className="flex space-x-6 text-gray-600">
                <li><a href="/produk" className="hover:text-gray-900">Produk</a></li>
                <li><a href="/tentang" className="hover:text-gray-900">Tentang Kami</a></li>
                <li><a href="/kontak" className="hover:text-gray-900">Kontak</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Konten Utama */}
        <main className="container mx-auto px-4 font-inter *:my-5">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-12 font-inter">
          <p>© 2025 Sentra Aluminium. Semua Hak Dilindungi.</p>
          <p>
            <a href="https://www.instagram.com/namatoko" className="hover:underline">Instagram</a> |
            <a href="https://www.facebook.com/namatoko" className="hover:underline"> Facebook</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
