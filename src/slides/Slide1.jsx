// Slide1.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pp from "../assets/foto-profil.jpg";

const typingTexts = ["AFRIZAL ARDIANSYAH SIDIQ", "MAHASISWA JURUSAN INFORMATIKA"];

const Slide1 = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === typingTexts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(typingTexts[index].substring(0, subIndex));
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center">

      {/* Glass Effect Box */}
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-10 shadow-xl w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* FOTO */}
        <motion.img
          src={pp}
          alt="Foto Profil"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* TEKS */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-300 min-h-[3rem]">
            {text}
            <span className="text-white animate-pulse">|</span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            NIM: <span className="font-medium text-white">5520421002</span>
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Judul Skripsi:{" "}
            <span className="font-semibold text-white">
              Rancang Bangun E-Commerce Penjualan Sepatu di Toko Donisso Watu Agung Berbasis Web
            </span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide1;
