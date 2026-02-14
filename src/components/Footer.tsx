"use client";

import { motion } from "framer-motion";
import { Heart, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-chocolate text-white/80 overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-primary via-primary-300 to-primary" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl">🍩</span>
                            <span className="font-serif text-2xl font-bold text-white">
                                Bomboni
                            </span>
                        </div>
                        <p className="text-white/50 leading-relaxed">
                            Premium bomboloni handcrafted with love.
                            <br />
                            Fresh daily, delivered to your door.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-serif text-lg font-bold text-white mb-4">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "Menu", href: "#menu" },
                                { label: "Testimoni", href: "#testimonials" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block text-white/50 hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-serif text-lg font-bold text-white mb-4">
                            Hubungi Kami
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors duration-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-white/50 hover:text-pink-400 transition-colors duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                                @bomboni.id
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-sm">
                        © 2026 Bomboni. All rights reserved.
                    </p>
                    <p className="text-white/30 text-sm flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
