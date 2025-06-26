import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import flow1 from "../assets/flowchart1.png";
import flow2 from "../assets/flowchart2.png";

const images = [
  {
    src: flow1,
    alt: "Diagram Alur Sistem 1",
  },
  {
    src: flow2,
    alt: "Diagram Alur Sistem 2",
  },
];

const Slide7 = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const fullText = "Perancangan Sistem";
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === fullText.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // jeda sebelum hapus
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(fullText.substring(0, subIndex));
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 60 : 120
    ); // kecepatan hapus & ketik

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center px-4 md:px-12 text-white">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 max-w-4xl text-center space-y-6 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Typing Title Loop */}
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 min-h-[2.5rem]">
          {text}
          <span className="text-white animate-pulse">|</span>
        </h2>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Berikut adalah alur interaksi pengguna dan admin dalam sistem
          e-commerce:
        </p>

        {/* Gambar manual dengan animasi */}
        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className="w-full max-h-[450px] object-contain bg-white/10 p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Tombol kontrol */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prev}
              className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg text-sm font-medium transition"
            >
              ⬅ Sebelumnya
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg text-sm font-medium transition"
            >
              Selanjutnya ➡
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-400 italic">
          Gambar {current + 1} dari {images.length} – {images[current].alt}
        </p>
      </motion.div>
    </div>
  );
};

export default Slide7;
