"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const milestones = [
    { year: "Agustus 2025", text: "Lahirnya Bomboni — tugas PKKWU jadi passion", color: "bg-rose-primary" },
    { year: "September 2025", text: "Mulai terima PO pertama di area 5C", color: "bg-rose-dark" },
    { year: "2025", text: "Pelanggan setia makin bertambah!", color: "bg-gold-accent" },
    { year: "Sekarang", text: "Terus tumbuh & berkembang", color: "bg-rose-primary" },
];

export default function StorySection() {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" id="about">
            {/* Decorative dots */}
            <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-32 right-20 w-2 h-2 rounded-full bg-rose-primary/20"
            />
            <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-40 right-1/3 w-1.5 h-1.5 rounded-full bg-gold-accent/30"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                {/* Left - Content */}
                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2d1b20] mb-4 leading-snug"
                    >
                        Dari tugas sekolah jadi{" "}
                        <span className="italic text-rose-primary font-serif">passion</span> yang{" "}
                        <span className="italic text-gold-accent font-serif">nyata</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed mb-8 sm:mb-10"
                    >
                        Bomboni lahir dari tugas PKKWU di sekolah pada Agustus 2025.
                        Apa yang awalnya hanya tugas kewirausahaan, kini menjadi usaha bomboloni
                        artisan dengan sistem Pre-Order yang melayani area 5C Jakarta Timur —
                        Cipayung, Ciracas, Cijantung, dan sekitarnya.
                    </motion.p>

                    {/* Timeline */}
                    <div className="mb-10">
                        <h3 className="font-serif text-xl font-bold text-[#2d1b20] mb-6">Our Journey</h3>
                        <div className="relative pl-8 space-y-6 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-rose-primary/40 before:to-transparent">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={m.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.15 }}
                                    className="relative group"
                                >
                                    {/* Dot */}
                                    <div className={`absolute -left-8 top-1.5 w-5 h-5 rounded-full ${m.color} border-4 border-cream-bg group-hover:scale-125 transition-transform`} />
                                    <p className="text-sm font-bold text-[#2d1b20]">{m.year}</p>
                                    <p className="text-sm text-neutral-500">{m.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        href="#menu"
                        className="inline-flex items-center gap-2 text-sm font-bold text-rose-dark tracking-[0.15em] uppercase hover:text-rose-primary transition-colors group"
                    >
                        LIHAT MENU
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                </div>

                {/* Right - Video/Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-primary/10 group cursor-pointer aspect-[4/3]">
                        <img
                            src="/images/IMG-20250830-WA0051.jpg"
                            alt="Bomboloni artisan Bomboni - berbagai varian rasa"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 text-rose-primary fill-rose-primary ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 sm:right-auto sm:-right-4 bg-white/90 backdrop-blur border border-white/60 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg z-20"
                    >
                        <p className="text-2xl font-black text-[#2d1b20] font-serif">PO</p>
                        <p className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">SYSTEM</p>
                    </motion.div>

                    {/* Bottom Badge */}
                    <motion.div
                        animate={{ y: [4, -6, 4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 left-4 sm:left-8 bg-white/90 backdrop-blur border border-white/60 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg z-20"
                    >
                        <p className="text-2xl font-black text-[#2d1b20] font-serif">5C</p>
                        <p className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">JAKTIM</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
