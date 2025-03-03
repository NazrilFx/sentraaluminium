import Head from "next/head";
import Link from "next/link";

export default function ArtikelPage() {
  return (
    <>
      {/* 🔹 META DATA UNTUK SEO */}
      <Head>
        <title>
          Rak Kaca Aluminium: Kelebihan, Jenis, dan Harga Terbaru 2024
        </title>
        <meta
          name="description"
          content="Pelajari kelebihan rak kaca aluminium, berbagai jenisnya, serta harga terbaru 2024. Cocok untuk rumah, toko, atau usaha Anda!"
        />
        <meta
          name="keywords"
          content="rak kaca aluminium, harga rak kaca, rak aluminium, rak toko, rak rumah tangga"
        />
        <meta name="author" content="Nama Toko Aluminium Anda" />

        {/* Open Graph (untuk Facebook & LinkedIn) */}
        <meta
          property="og:title"
          content="Rak Kaca Aluminium: Kelebihan, Jenis, dan Harga Terbaru 2024"
        />
        <meta
          property="og:description"
          content="Pelajari kelebihan rak kaca aluminium, berbagai jenisnya, serta harga terbaru 2024. Cocok untuk rumah, toko, atau usaha Anda!"
        />
        <meta property="og:image" content="/rak-kaca-aluminium.jpg" />
        <meta
          property="og:url"
          content="https://www.tokoaluminium.com/artikel/rak-kaca-aluminium"
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rak Kaca Aluminium: Kelebihan, Jenis, dan Harga Terbaru 2024"
        />
        <meta
          name="twitter:description"
          content="Pelajari kelebihan rak kaca aluminium, berbagai jenisnya, serta harga terbaru 2024."
        />
        <meta name="twitter:image" content="/rak-kaca-aluminium.jpg" />

        {/* Schema Markup untuk Artikel */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Rak Kaca Aluminium: Kelebihan, Jenis, dan Harga Terbaru 2024",
            author: { "@type": "Person", name: "Nama Toko Aluminium Anda" },
            publisher: {
              "@type": "Organization",
              name: "Toko Aluminium Anda",
              logo: { "@type": "ImageObject", url: "/logo.png" },
            },
            datePublished: "2024-02-27",
            dateModified: "2024-02-27",
            mainEntityOfPage:
              "https://www.tokoaluminium.com/artikel/rak-kaca-aluminium",
            image: "/rak-kaca-aluminium.jpg",
          })}
        </script>
      </Head>

      {/* 🔹 BREADCRUMB UNTUK SEO */}
      <nav className="text-gray-600 text-sm">
        <Link href="/">Home</Link> {" > "}
        <Link href="/artikel">Artikel</Link> {" > "}
        <span className="text-gray-900 font-semibold">Rak Kaca Aluminium</span>
      </nav>

      {/* 🔹 KONTEN ARTIKEL */}
      <article className="max-w-3xl mx-auto mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Rak Kaca Aluminium: Kelebihan, Jenis, dan Harga Terbaru 2024
        </h1>
        <img
          src="/rak-kaca-aluminium.jpg"
          alt="Rak Kaca Aluminium Berkualitas"
          className="w-full rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-4">
          Rak kaca aluminium semakin populer untuk rumah dan bisnis karena
          tampilannya yang modern serta daya tahannya yang kuat. Artikel ini
          akan membahas kelebihan, jenis, serta harga rak kaca aluminium terbaru
          di tahun 2024.
        </p>

        {/* 🔹 SECTION 1: KELEBIHAN */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Kelebihan Rak Kaca Aluminium
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <strong>Tahan Lama:</strong> Aluminium tidak mudah berkarat dan
            memiliki ketahanan tinggi.
          </li>
          <li>
            <strong>Ringan:</strong> Mudah dipindahkan dibandingkan rak besi
            atau kayu.
          </li>
          <li>
            <strong>Desain Modern:</strong> Cocok untuk berbagai gaya interior.
          </li>
          <li>
            <strong>Perawatan Mudah:</strong> Cukup dilap dengan kain basah
            untuk menjaga kebersihannya.
          </li>
        </ul>

        {/* 🔹 SECTION 2: JENIS-JENIS */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Jenis-Jenis Rak Kaca Aluminium
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">
          1. Rak Kaca Aluminium 2 Pintu
        </h3>
        <p className="text-gray-700">
          Cocok untuk penyimpanan dalam ruang terbatas, ideal untuk dapur atau
          toko kecil.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-4">
          2. Rak Kaca Aluminium 3 Pintu
        </h3>
        <p className="text-gray-700">
          Memiliki kapasitas lebih besar, sering digunakan untuk penyimpanan
          barang dagangan.
        </p>

        {/* 🔹 SECTION 3: HARGA */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Harga Rak Kaca Aluminium Terbaru 2024
        </h2>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Jenis Rak</th>
              <th className="p-2 border">Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Rak Kaca Aluminium 2 Pintu</td>
              <td className="p-2 border">Rp 1.400.000</td>
            </tr>
            <tr>
              <td className="p-2 border">Rak Kaca Aluminium 3 Pintu</td>
              <td className="p-2 border">Rp 2.100.000</td>
            </tr>
          </tbody>
        </table>

        {/* 🔹 CTA BUTTON */}
        <div className="mt-6 text-center">
          <Link href="https://wa.me/6285792962289?text=Halo%20saya%20ingin%20membeli%20rak%20kaca%20aluminium">
            Pesan Sekarang
          </Link>
        </div>
      </article>
    </>
  );
}