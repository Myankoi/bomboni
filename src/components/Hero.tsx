"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Truck, ShieldCheck, Leaf } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden" id="home">
            {/* Decorative Circles */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-60 h-60 rounded-full border border-rose-primary/10"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 -right-10 w-40 h-40 rounded-full border border-rose-primary/10"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-20 w-24 h-24 rounded-full border border-gold-accent/15"
            />
            {/* Small floating dots */}
            <motion.div
                animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-rose-primary/30"
            />
            <motion.div
                animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-gold-accent/40"
            />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
                {/* Left - Text */}
                <div className="flex flex-col gap-6 z-10 text-center lg:text-left">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center self-center lg:self-start gap-2 bg-rose-primary/10 border border-rose-primary/20 text-rose-dark px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-rose-primary" />
                        Bomboloni Terbaik
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#2d1b20]"
                    >
                        Sentuhan{" "}
                        <span className="italic text-rose-primary">Lumer</span>
                        {" "}dengan Cita Rasa{" "}
                        <span className="italic text-gold-accent font-serif">Premium</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm sm:text-lg text-neutral-500 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Bomboloni artisan handmade dengan isian melimpah. Tersedia dalam berbagai varian rasa premium, dibuat fresh setiap batch via sistem <span className="font-semibold text-rose-dark">Pre-Order</span>.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
                    >
                        <a
                            href="#menu"
                            className="bg-gradient-to-r from-rose-primary to-rose-dark text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-rose-primary/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Order Sekarang</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 rounded-full font-bold text-sm text-rose-dark border-2 border-rose-dark/20 hover:border-rose-dark hover:bg-rose-dark hover:text-white transition-all duration-300"
                        >
                            Tentang Kami
                        </a>
                    </motion.div>
                </div>

                {/* Right - Image + Floating Badges */}
                <div className="relative flex items-center justify-center h-[280px] sm:h-[400px] lg:h-[480px]">
                    {/* Main Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <motion.img
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            src="/images/image (1).png"
                            alt="Premium Bomboloni Strawberry"
                            className="w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] object-cover rounded-[2.5rem] shadow-2xl shadow-rose-primary/15 border-[6px] border-white/80"
                        />
                    </motion.div>

                    {/* Floating Badge - Rating */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute top-16 right-0 lg:right-4 z-20 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-gold-accent/20 flex items-center justify-center">
                                <Star className="w-4 h-4 text-gold-accent fill-gold-accent" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#2d1b20]">Rating Terbaik</p>
                                <p className="text-xs text-neutral-400">4.9/5.0</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Badge - Kualitas */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="absolute bottom-40 right-0 lg:-right-4 z-20 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-rose-primary/15 flex items-center justify-center">
                                <ShieldCheck className="w-4 h-4 text-rose-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#2d1b20]">Fresh & Handmade</p>
                                <p className="text-xs text-neutral-400">Dibuat dengan cinta</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Badge - Pengiriman */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="absolute bottom-16 right-8 lg:right-12 z-20 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [-3, 7, -3] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
                                <Truck className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#2d1b20]">Sistem Pre-Order</p>
                                <p className="text-xs text-neutral-400">Area 5C Jaktim</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Badge - Natural */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="absolute bottom-4 left-4 lg:left-16 z-20 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [3, -6, 3] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-xl px-3 py-2 shadow-lg"
                        >
                            <p className="text-xs font-bold text-[#2d1b20]">100% Natural</p>
                            <p className="text-[10px] text-neutral-400">Tanpa Pengawet</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
