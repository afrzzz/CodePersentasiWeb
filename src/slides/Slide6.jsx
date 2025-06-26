import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide6 = () => {
  const fullText = "Metodologi Penelitian";
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

        <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
          Metode pengembangan sistem yang digunakan dalam penelitian ini adalah <strong className="text-white">Waterfall</strong>, yang terdiri dari beberapa tahap berikut:
        </p>

        <ol className="list-decimal list-inside text-left text-base md:text-lg leading-relaxed text-gray-200 space-y-2">
          <li>
            <strong className="text-white">Analisis Kebutuhan:</strong> Mengidentifikasi kebutuhan pengguna dan sistem.
          </li>
          <li>
            <strong className="text-white">Perancangan:</strong> Mendesain struktur sistem, database, dan antarmuka.
          </li>
          <li>
            <strong className="text-white">Implementasi:</strong> Membangun sistem menggunakan React, Node.js, dan MongoDB.
          </li>
          <li>
            <strong className="text-white">Pengujian:</strong> Menguji fungsionalitas sistem untuk memastikan berjalan dengan baik.
          </li>
          <li>
            <strong className="text-white">Pemeliharaan:</strong> Perbaikan dan pengembangan lanjutan bila diperlukan.
          </li>
        </ol>
      </motion.div>
    </div>
  );
};

export default Slide6;
