import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import erdImage from "../assets/erd.png"; // pindahkan dari public ke src/assets biar importable

const Slide8 = () => {
  const fullText = "Struktur Database";
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
          Sistem ini menggunakan database <strong className="text-white">MongoDB</strong> dengan struktur koleksi utama sebagai berikut:
        </p>

        <ul className="text-left list-disc list-inside text-gray-100 text-base md:text-lg space-y-2">
          <li>
            <strong className="text-cyan-300">Users:</strong> Menyimpan data pengguna (nama, email, password, role).
          </li>
          <li>
            <strong className="text-cyan-300">Products:</strong> Menyimpan data produk (nama, harga, deskripsi, stok, gambar).
          </li>
          <li>
            <strong className="text-cyan-300">Orders:</strong> Menyimpan transaksi pesanan pelanggan dan status pembayaran.
          </li>
          <li>
            <strong className="text-cyan-300">Reviews:</strong> Menyimpan ulasan dan rating produk dari pelanggan.
          </li>
        </ul>

        {/* Gambar ERD */}
        <div className="flex justify-center mt-6">
          <motion.img
            src={erdImage}
            alt="ERD Sistem"
            className="w-full max-w-xl rounded-xl shadow-lg bg-white/10 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <p className="text-sm text-gray-400 italic">
          Gambar: Entity Relationship Diagram (ERD) sistem e-commerce
        </p>
      </motion.div>
    </div>
  );
};

export default Slide8;
