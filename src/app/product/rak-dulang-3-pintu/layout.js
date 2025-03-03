import Head from "next/head";

export const metadata = {
    title: "Rak Dulang 2 Pintu Murah Bali - Jual Rak Minimalis & Kuat",
    description:
      "Rak Dulang 2 Pintu berkualitas dengan desain minimalis, kokoh, dan tahan lama. Cocok untuk rumah, toko, atau usaha dengan harga terbaik di Bali.",
  };  

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Rak Dulang 2 Pintu, Rak Kaca Aluminium, Rak Termurah Bali, Rak Kaca Tahan Lama" />
        <meta name="author" content="Toko Rak Bali" />
        
        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content="Rak Dulang 2 Pintu Termurah di Bali | Kuat & Minimalis" />
        <meta property="og:description" content="Jual rak dulang 2 pintu dengan desain elegan dan daya tahan tinggi. Harga terjangkau & kualitas terbaik di Bali." />
        <meta property="og:image" content="https://example.com/images/rak-dulang-2pintu.jpg" />
        <meta property="og:url" content="https://example.com/rak-dulang-2pintu" />
        <meta property="og:type" content="product" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rak Dulang 2 Pintu Termurah di Bali" />
        <meta name="twitter:description" content="Rak kaca aluminium dan dulang berkualitas tinggi, minimalis, dan tahan lama. Temukan harga terbaik di Bali." />
        <meta name="twitter:image" content="https://example.com/images/rak-dulang-2-pintu.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://example.com/rak-dulang-2-pintu" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rak Dulang 2 Pintu",
            "image": "https://example.com/images/rak-dulang-2-pintu.jpg",
            "description": "Rak Dulang 2 Pintu dengan desain minimalis, kokoh, dan tahan lama. Harga terbaik & layanan pengiriman di Bali.",
            "brand": { "@type": "Brand", "name": "Toko Rak Dulang Bali" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "price": "1400000",
              "availability": "https://schema.org/InStock",
              "url": "https://example.com/rak-dulang-2-pintu"
            }
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
