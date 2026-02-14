"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/store/useCart";

const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { openCart, totalItems } = useCart();

    useEffect(() => {
        setMounted(true);
    }, []);

    const count = mounted ? totalItems() : 0;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-rose-primary/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group cursor-pointer shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Bomboni"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h1 className="text-xl font-black tracking-tight text-[#2d1b20] font-serif italic">
                        Bomboni
                    </h1>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href + link.label}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 hover:text-rose-primary transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rose-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    {/* All Products button */}
                    <a
                        href="#menu"
                        className="hidden sm:flex items-center px-5 py-2 rounded-full border-2 border-[#2d1b20] text-sm font-bold text-[#2d1b20] hover:bg-[#2d1b20] hover:text-white transition-all duration-300"
                    >
                        Order (PO)
                    </a>

                    {/* Cart */}
                    <button
                        onClick={openCart}
                        className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-rose-primary/10 transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5 text-[#2d1b20]" />
                        {count > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 bg-rose-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {count}
                            </span>
                        )}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-rose-primary/10"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-base font-medium py-3 text-neutral-600 hover:text-rose-primary transition-colors border-b border-rose-primary/5"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
