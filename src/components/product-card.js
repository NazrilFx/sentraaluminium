import Link from "next/link"; // Jika menggunakan Next.js

export default function ProductCard({
  bgText,
  href,
  alt,
  src,
  title,
  price,
  padding,
  desc,
}) {
  return (
    <article
      className="flex m-0 my-5 sm:m-5 w-[350px] lg:w-[450px]"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link href={href} className="block">
        {/* Background & Rotated Text */}
        <div className="-z-10 w-60 h-60 bg-sky-500 -rotate-90 flex flex-col justify-center items-center rounded-3xl">
          <p className="text-white font-bold text-5xl opacity-50 font-lilita tracking-widest">
            {bgText}
          </p>
          <p className="text-white font-bold text-5xl opacity-70 font-lilita tracking-widest">
            {bgText}
          </p>
          <p className="text-white font-bold text-5xl opacity-90 font-lilita tracking-widest">
            {bgText}
          </p>
          <p className="text-white font-bold text-5xl font-lilita tracking-widest">
            {bgText}
          </p>

          {/* Gambar Produk */}
          <img
            src={src}
            alt={alt}
            className="z-10 translate-x-3 absolute rotate-90"
            itemProp="image"
          />

          {/* Detail Produk */}
          <div
            className="py-4 shadow-2xl rotate-90 z-1 w-[200px] sm:w-[300px] lg:w-[300px] h-[200px] absolute rounded-xl backdrop-blur-md bg-white/70 border border-black translate-y-28 sm:translate-y-40 lg:translate-y-40"
            style={{ paddingLeft: `${padding}px` }}
          >
            {/* Judul Produk */}
            <h2
              className="font-bold sm:text-2xl lg:text-2xl mb-2"
              itemProp="name"
            >
              {title}
            </h2>

            {/* Deskripsi Produk */}
            <p
              className="text-[8px] sm:text-[12px] lg:text-[12px] mb-2"
              style={{ lineHeight: 1.1 }}
              itemProp="description"
            >
              {desc}
            </p>

            {/* Harga Produk */}
            <p
              className="font-bold mb-3"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <meta itemProp="priceCurrency" content="IDR" />
              Rp. <span itemProp="price">{price}</span>
            </p>

            {/* Tombol Detail */}
            <div className="text-[10px] sm:text-[16px] lg:text-[16px] bg-sky-500 px-2 py-1 w-[100px] sm:w-[200px] lg:w-[200px] rounded-lg text-white">
              Tekan untuk lebih detail
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
