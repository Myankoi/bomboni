"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TransitionSection() {
    return (
        <section className="py-28 px-6 text-center relative overflow-hidden">
            {/* Decorative icon */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 mx-auto mb-8 text-rose-primary/30"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" />
                </svg>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-[#2d1b20] mb-6"
            >
                Dari Cerita ke{" "}
                <span className="italic text-rose-primary font-serif">Cita Rasa</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-neutral-500 max-w-xl mx-auto mb-10 font-light leading-relaxed"
            >
                Setelah mengenal perjalanan kami, sekarang saatnya{" "}
                <span className="font-semibold text-[#2d1b20]">merasakan keajaiban yang kami ciptakan</span>{" "}
                dalam setiap gigitan
            </motion.p>

            {/* Tab-like divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-8 mb-6"
            >
                <div className="h-[2px] w-20 bg-rose-primary/20" />
                <div className="h-[2px] w-32 bg-rose-primary" />
                <div className="h-[2px] w-20 bg-rose-primary/20" />
            </motion.div>

            <div className="flex items-center justify-center gap-12 text-sm font-medium text-neutral-400 mb-8">
                <span className="hover:text-rose-primary transition-colors cursor-pointer">Cerita Kami</span>
                <span className="text-rose-primary font-bold">Produk Premium</span>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-rose-primary font-semibold text-sm tracking-wide mb-4"
            >
                Jelajahi Koleksi Premium Kami
            </motion.p>

            {/* Animated arrows */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center gap-6 text-rose-primary/40"
            >
                <ChevronDown className="w-5 h-5" />
                <div className="w-10 h-[2px] bg-rose-primary/20" />
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
