"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/store/useCart";
import { formatPrice } from "@/data/products";

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, openCheckout, totalItems, subtotal } =
        useCart();
    const count = totalItems();
    const total = subtotal();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-chocolate/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                                <h2 className="font-serif text-xl font-bold text-chocolate">
                                    Keranjang
                                </h2>
                                {count > 0 && (
                                    <span className="bg-primary/10 text-primary text-sm font-semibold px-2.5 py-0.5 rounded-full">
                                        {count}
                                    </span>
                                )}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeCart}
                                className="p-2 rounded-xl hover:bg-cream transition-colors"
                            >
                                <X className="w-5 h-5 text-chocolate/60" />
                            </motion.button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="text-6xl mb-4">🍩</div>
                                    <p className="font-serif text-xl font-bold text-chocolate mb-2">
                                        Keranjang Kosong
                                    </p>
                                    <p className="text-chocolate/50 text-sm">
                                        Yuk, pilih bomboloni favoritmu!
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <AnimatePresence>
                                        {items.map((item) => (
                                            <motion.div
                                                key={item.product.id}
                                                layout
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex gap-4 p-4 bg-cream/50 rounded-2xl border border-cream-300"
                                            >
                                                {/* Product Emoji */}
                                                <div className="w-16 h-16 rounded-xl bg-cream-200 flex items-center justify-center text-3xl shrink-0">
                                                    {item.product.emoji}
                                                </div>

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-chocolate text-sm truncate">
                                                        {item.product.name}
                                                    </h4>
                                                    <p className="text-primary font-bold text-sm mt-0.5">
                                                        {formatPrice(item.product.price)}
                                                    </p>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <motion.button
                                                            whileTap={{ scale: 0.85 }}
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity - 1)
                                                            }
                                                            className="w-7 h-7 rounded-lg bg-white border border-cream-300 flex items-center justify-center hover:border-primary/40 transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </motion.button>
                                                        <span className="w-8 text-center font-semibold text-sm text-chocolate">
                                                            {item.quantity}
                                                        </span>
                                                        <motion.button
                                                            whileTap={{ scale: 0.85 }}
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity + 1)
                                                            }
                                                            className="w-7 h-7 rounded-lg bg-white border border-cream-300 flex items-center justify-center hover:border-primary/40 transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </motion.button>
                                                    </div>
                                                </div>

                                                {/* Subtotal + Delete */}
                                                <div className="flex flex-col items-end justify-between">
                                                    <motion.button
                                                        whileTap={{ scale: 0.85 }}
                                                        onClick={() => removeItem(item.product.id)}
                                                        className="p-1.5 rounded-lg hover:bg-red-50 text-chocolate/30 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </motion.button>
                                                    <span className="text-sm font-bold text-chocolate">
                                                        {formatPrice(item.product.price * item.quantity)}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-cream-300 px-6 py-5 space-y-4">
                                {/* Subtotal */}
                                <div className="flex items-center justify-between">
                                    <span className="text-chocolate/60 font-medium">Subtotal</span>
                                    <span className="text-xl font-bold text-chocolate">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={openCheckout}
                                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 text-lg"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Checkout via WhatsApp
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
