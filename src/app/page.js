"use client";

import Image from "next/image";
import ProductCard from "@/components/product-card";
import SuperiorCard from "@/components/superior-card";
import { ShieldCheck, LayoutDashboard, Droplet, MoveDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Set state pertama kali
    setIsLarge(mediaQuery.matches);

    // Listener untuk mendeteksi perubahan ukuran layar
    const handleResize = (e) => setIsLarge(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isLarge;
}

export default function Home() {
  let isLarge = useIsLargeScreen();
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold">
            Jual Rak Kaca Aluminium & Rak Dulang Termurah di Bali – Kuat &
            Elegan
          </h1>
          <p className="text-gray-400 mt-2">
            Temukan rak kaca aluminium dan rak dulang termurah di Bali dengan
            kualitas terbaik, desain elegan, dan daya tahan tinggi, cocok untuk
            berbagai kebutuhan penyimpanan.
          </p>
          <div className="mx-auto lg:mx-0 mt-5 w-36 bg-sky-500 px-6 py-2 rounded-full text-white font-bold hover:bg-sky-600 flex items-center justify-center gap-2 shadow-2xl shadow-sky-500">
            SCROLL <MoveDown className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-10 lg:mt-1 w-[350px] sm:w-[400px] lg:w-[400px] h-[450px] *:absolute *:rounded-3xl">
          <img
            src="/landing1.png"
            alt="Rak Dulang 2 Pintu Termurah di Bali"
            className="h-auto w-40 translate-x-48 sm:translate-x-56 lg:translate-x-56 translate-y-10"
          ></img>
          <img
            src="/landing3.jpg"
            alt="Rak Dulang 3 Pintu Termurah di Bali"
            className="h-auto w-40 translate-x-0 translate-y-50"
          ></img>
          <img
            src="/landing2.jpg"
            alt="Rak Dulang 4 Pintu Termurah di Bali"
            className="h-auto w-40 translate-x-10 translate-y-60"
          ></img>
          <div className="size-32 bg-sky-500/15 backdrop-blur-md rounded-none translate-x-28 translate-y-40"></div>
        </div>
      </section>

      <section>
        <h2>Rak Unggulan Kami!</h2>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around">
          <ProductCard
            bgText="2 PINTU"
            href="/product/rak-dulang-2-pintu"
            src="/2-pintu.png"
            title="Rak Kaca 2 Pintu"
            price="1.400.000"
            padding={40}
            desc="Kecil dan simpel, cocok untuk ruang terbatas. Ideal untuk menyimpan perlengkapan rumah tangga, buku, atau kosmetik."
          ></ProductCard>
          <ProductCard
            bgText="3 PINTU"
            href="/product/rak-dulang-3-pintu"
            src="/3-pintu.png"
            title="Rak Kaca 3 Pintu"
            price="2.100.000"
            padding={55}
            desc="Ukuran medium dengan kapasitas lebih luas. Cocok untuk menyimpan peralatan dapur, makanan ringan, atau perlengkapan kantor."
          ></ProductCard>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around">
          <ProductCard
            bgText="4 PINTU"
            href="/product/rak-dulang-4-pintu"
            src="/4-pintu.png"
            title="Rak 4 Pintu"
            price="2.600.000"
            padding={80}
            desc="Ekstra besar, muat lebih banyak barang. Ideal untuk menyimpan perlengkapan rumah tangga, alat elektronik kecil, atau stok dagangan."
          ></ProductCard>
          <ProductCard
            bgText="??????"
            href="/"
            src="/rak-lainnya.png"
            title="Rak Kaca Lainnya"
            price="?.???.???"
            padding={50}
            desc="Temukan rak kaca berkualitas, elegan, dan kokoh untuk kebutuhan Anda!"
          ></ProductCard>
        </div>
      </section>

      <section>
        <h2>Apa Keunggulan Rak Kaca Aluminum?</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <SuperiorCard
            type={1}
            icon={<ShieldCheck />}
            text="Tahan Karat & Kokoh"
          />
          <SuperiorCard
            type={isLarge ? 1 : 2}
            icon={<LayoutDashboard />}
            text="Desain Elegan & Minimalis"
          />
          <SuperiorCard type={1} icon={<Droplet />} text="Mudah Dibersihkan" />
        </div>
      </section>
    </>
  );
}
