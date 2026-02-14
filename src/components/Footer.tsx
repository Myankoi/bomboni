"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a0f12] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 relative overflow-hidden" id="contact">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-dark via-rose-primary to-gold-accent" />
            <div className="absolute -right-20 top-20 w-64 h-64 bg-rose-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16 relative z-10">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-8">
                        <img
                            src="/images/logo.png"
                            alt="Bomboni"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-serif">
                            Bomboni<span className="text-rose-primary">.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">
                        Bomboloni artisan handmade dengan isian melimpah.
                        Sistem Pre-Order, melayani area 5C Jakarta Timur.
                    </p>
                    {/* Social Icons - Instagram only */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-primary hover:border-rose-primary hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-xl font-bold mb-6 font-serif text-gold-accent">Navigasi</h4>
                    <ul className="flex flex-col gap-4 text-gray-400">
                        {[
                            { label: "Home", href: "#home" },
                            { label: "Menu", href: "#menu" },
                            { label: "Tentang Kami", href: "#about" },
                            { label: "Gallery", href: "#gallery" },
                            { label: "Testimoni", href: "#testimonials" },
                        ].map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:text-rose-primary transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 bg-rose-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Info PO */}
                <div>
                    <h4 className="text-xl font-bold mb-6 font-serif text-gold-accent">Info Pre-Order</h4>
                    <ul className="flex flex-col gap-4 text-gray-400">
                        <li className="flex items-start gap-2">
                            <span className="text-rose-primary mt-1">📦</span>
                            <span>Sistem PO (Pre-Order)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-primary mt-1">📍</span>
                            <span>Area 5C Jakarta Timur</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-primary mt-1">💰</span>
                            <span>Rp 8.000/pcs (min. 6 pcs, boleh campur)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-primary mt-1">🎓</span>
                            <span>PKKWU Project 2025</span>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-6 font-serif text-gold-accent">Hubungi Kami</h4>
                    <div className="flex flex-col gap-6 text-gray-400">
                        <div className="flex gap-4 items-start">
                            <MapPin className="w-5 h-5 text-rose-primary bg-white/5 p-2 rounded-lg box-content shrink-0" />
                            <p>
                                Area 5C Jakarta Timur
                                <br />
                                Cipayung, Ciracas, Cijantung & sekitarnya
                            </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Phone className="w-5 h-5 text-rose-primary bg-white/5 p-2 rounded-lg box-content shrink-0" />
                            <p>Via WhatsApp</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Mail className="w-5 h-5 text-rose-primary bg-white/5 p-2 rounded-lg box-content shrink-0" />
                            <p>DM Instagram</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                <p>© 2025 Bomboni. PKKWU Project.</p>
                <p className="flex items-center gap-1">
                    Made with <Heart className="w-3 h-3 text-rose-primary fill-rose-primary" /> for bomboloni lovers.
                </p>
            </div>
        </footer>
    );
}
