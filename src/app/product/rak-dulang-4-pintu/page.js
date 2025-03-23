import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function DetailPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Gambar Produk dengan Horizontal Scroll */}
        <div className="w-full lg:w-1/2">
          <div className="absolute mt-[480px] ml-[30px] h-10 w-36 bg-sky-500/50 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold hover:bg-sky-600 flex items-center justify-center gap-2 shadow-2xl shadow-sky-500">
            SCROLL <MoveRight className="w-5 h-5" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {/* Gambar 1 */}
            <div className="flex-shrink-0">
              <Image
                src="/4-pintu.png"
                alt="Rak Dulang 4 Pintu - Tampak 3D"
                width={500}
                height={500}
                className="w-full h-full object-cover  rounded-lg"
              />
            </div>
            {/* Gambar 2 */}
            <div className="flex-shrink-0">
              <Image
                src="/landing2.jpg"
                alt="Rak Dulang 4 Pintu - Tampak Depan"
                width={500}
                height={500}
                className="w-full h-full object-cover  rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Detail Produk */}
        <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Rak Dulang 4 Pintu – Kuat & Minimalis
          </h1>
          <p className="text-gray-500 mt-2">
          Ekstra besar, muat lebih banyak barang. Ideal untuk menyimpan perlengkapan rumah tangga, alat elektronik kecil, atau stok dagangan.
          </p>
          <p className="text-2xl font-bold text-sky-500 mt-4 mb-5">
            Rp 2.800.000
          </p>

          {/* Tombol Beli */}
          <Link
            href="https://wa.me/6285792962289?text=Halo, saya tertarik dengan produk Anda!"
            target="_blank"
            className="bg-sky-500 px-6 py-2 rounded-full text-white font-bold hover:bg-sky-600 shadow-2xl shadow-sky-500"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
