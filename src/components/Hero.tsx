"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const floatingDonuts = [
    { emoji: "🍩", className: "top-20 left-[10%]", delay: 0, duration: 6 },
    { emoji: "🍩", className: "top-40 right-[15%]", delay: 1, duration: 7 },
    { emoji: "🍩", className: "bottom-32 left-[20%]", delay: 2, duration: 8 },
    { emoji: "🍩", className: "top-28 right-[8%]", delay: 0.5, duration: 6.5 },
    { emoji: "🍩", className: "bottom-20 right-[25%]", delay: 1.5, duration: 7.5 },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Floating Donuts */}
            {floatingDonuts.map((donut, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${donut.className} text-4xl sm:text-5xl opacity-20 pointer-events-none select-none`}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: donut.duration,
                        delay: donut.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {donut.emoji}
                </motion.div>
            ))}

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary-700 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20"
                >
                    <Sparkles className="w-4 h-4" />
                    Fresh from the oven, daily!
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
                >
                    <span className="text-chocolate">Lumer di </span>
                    <span className="gradient-text">Mulut</span>
                    <br />
                    <span className="text-chocolate">Nyaman di </span>
                    <span className="gradient-text">Kantong</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-chocolate/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Bomboloni premium handcrafted dengan filling berlimpah.
                    <br className="hidden sm:block" />
                    Dibuat fresh setiap hari dengan bahan pilihan terbaik.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#menu"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg"
                    >
                        Lihat Menu
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="#testimonials"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-chocolate font-semibold px-8 py-4 rounded-2xl border border-chocolate/10 hover:border-chocolate/20 transition-all duration-300 text-lg"
                    >
                        Kata Mereka ⭐
                    </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center justify-center gap-8 sm:gap-12 mt-16"
                >
                    {[
                        { value: "10K+", label: "Happy Customers" },
                        { value: "6", label: "Varian Rasa" },
                        { value: "4.9", label: "Rating ⭐" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl sm:text-3xl font-serif font-bold text-chocolate">
                                {stat.value}
                            </div>
                            <div className="text-sm text-chocolate/50 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-chocolate/20 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-primary/50" />
                </div>
            </motion.div>
        </section>
    );
}
