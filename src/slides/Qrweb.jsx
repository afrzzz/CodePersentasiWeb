import React from "react";
import { motion } from "framer-motion";
import qrImage from "../assets/qr.png"; // Gambar hasil upload

const Qrweb = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center">
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-6 shadow-xl w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-300 text-center">
          Scan QR untuk Melihat Persentasi Di SmartPhone
        </h1>

        <motion.img
          src={qrImage}
          alt="QR Code"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className="text-sm md:text-base text-gray-300 text-center max-w-md">
          Arahkan kamera HP Anda ke QR Code di atas untuk mengakses website
          skripsi secara langsung.
        </p>
      </motion.div>
    </div>
  );
};

export default Qrweb;
