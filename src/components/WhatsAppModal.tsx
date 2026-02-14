"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, MapPin, Loader2 } from "lucide-react";
import { useCart } from "@/store/useCart";
import { generateWhatsAppURL } from "@/utils/whatsappLogic";
import { formatPrice } from "@/data/products";

export default function WhatsAppModal() {
    const { items, isCheckoutOpen, closeCheckout, subtotal, clearCart } = useCart();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);

    const total = subtotal();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !location.trim()) return;

        setLoading(true);

        const url = generateWhatsAppURL(name.trim(), location.trim(), items, total);

        setTimeout(() => {
            window.open(url, "_blank");
            setLoading(false);
            setName("");
            setLocation("");
            closeCheckout();
            clearCart();
        }, 500);
    };

    return (
        <AnimatePresence>
            {isCheckoutOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCheckout}
                        className="fixed inset-0 bg-[#2d1b20]/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                    >
                        <div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="relative bg-gradient-to-r from-rose-primary to-rose-dark px-6 py-6 text-white">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={closeCheckout}
                                    className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </motion.button>

                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">
                                        💬
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold">Checkout WhatsApp</h3>
                                        <p className="text-rose-light text-sm font-sans">
                                            Isi data untuk melanjutkan pesanan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-500 mb-2 font-sans">
                                        Nama Lengkap
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300" />
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Masukkan nama kamu"
                                            required
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-rose-100 bg-cream-bg/30 text-[#2d1b20] placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-primary/30 focus:border-rose-primary transition-all font-sans"
                                        />
                                    </div>
                                </div>

                                {/* Location Field */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-500 mb-2 font-sans">
                                        Alamat / Link Google Maps
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-300" />
                                        <textarea
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="Alamat lengkap atau paste link Google Maps"
                                            required
                                            rows={2}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-rose-100 bg-cream-bg/30 text-[#2d1b20] placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-primary/30 focus:border-rose-primary transition-all resize-none font-sans"
                                        />
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="bg-cream-bg/50 rounded-xl p-4 border border-rose-100">
                                    <h4 className="text-sm font-semibold text-neutral-500 mb-2 font-sans">
                                        Ringkasan Pesanan
                                    </h4>
                                    <div className="space-y-1 mb-3">
                                        {items.map((item) => (
                                            <div
                                                key={item.product.id}
                                                className="flex items-center justify-between text-sm font-sans"
                                            >
                                                <span className="text-neutral-500">
                                                    {item.product.name} x{item.quantity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-rose-100 pt-2 flex items-center justify-between">
                                        <span className="font-semibold text-[#2d1b20] text-sm font-sans">Total</span>
                                        <span className="font-bold text-rose-primary text-lg font-sans">
                                            {formatPrice(total)}
                                        </span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={loading || !name.trim() || !location.trim()}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-primary to-rose-dark disabled:opacity-50 text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-primary/30 transition-all duration-300 text-lg font-sans"
                                >
                                    {loading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Kirim via WhatsApp
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
