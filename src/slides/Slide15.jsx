import React from "react";
import { motion } from "framer-motion";

const Slide15 = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center px-4 text-white relative overflow-hidden">
      
      {/* Animasi Partikel Latar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-pulse" />

      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 max-w-3xl w-full text-center shadow-2xl z-10 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-cyan-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Terima Kasih 🙏
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Demikian presentasi sidang skripsi saya.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Slide15;
