"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/store/useCart";
import { formatPrice, MIN_ORDER } from "@/data/products";

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, openCheckout, totalItems, subtotal } =
        useCart();
    const count = totalItems();
    const total = subtotal();
    const meetsMinOrder = count >= MIN_ORDER;
    const remaining = MIN_ORDER - count;

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
                        className="fixed inset-0 bg-[#2d1b20]/40 backdrop-blur-sm z-50"
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
                        <div className="flex items-center justify-between px-6 py-5 border-b border-rose-100">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-rose-primary" />
                                <h2 className="font-serif text-xl font-bold text-[#2d1b20]">
                                    Keranjang
                                </h2>
                                {count > 0 && (
                                    <span className="bg-rose-primary/10 text-rose-primary text-sm font-semibold px-2.5 py-0.5 rounded-full font-sans">
                                        {count}
                                    </span>
                                )}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeCart}
                                className="p-2 rounded-xl hover:bg-cream-bg transition-colors"
                            >
                                <X className="w-5 h-5 text-[#2d1b20]/60" />
                            </motion.button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="text-6xl mb-4">🍩</div>
                                    <p className="font-serif text-xl font-bold text-[#2d1b20] mb-2">
                                        Keranjang Kosong
                                    </p>
                                    <p className="text-neutral-400 text-sm font-sans">
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
                                                className="flex gap-4 p-4 bg-cream-bg/50 rounded-2xl border border-rose-100"
                                            >
                                                {/* Product Image */}
                                                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                    <img
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-[#2d1b20] text-sm truncate font-sans">
                                                        {item.product.name}
                                                    </h4>
                                                    <p className="text-rose-primary font-bold text-sm mt-0.5 font-sans">
                                                        {formatPrice(item.product.price)}
                                                    </p>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <motion.button
                                                            whileTap={{ scale: 0.85 }}
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity - 1)
                                                            }
                                                            className="w-7 h-7 rounded-lg bg-white border border-rose-100 flex items-center justify-center hover:border-rose-primary/40 transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </motion.button>
                                                        <span className="w-8 text-center font-semibold text-sm text-[#2d1b20] font-sans">
                                                            {item.quantity}
                                                        </span>
                                                        <motion.button
                                                            whileTap={{ scale: 0.85 }}
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity + 1)
                                                            }
                                                            className="w-7 h-7 rounded-lg bg-white border border-rose-100 flex items-center justify-center hover:border-rose-primary/40 transition-colors"
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
                                                        className="p-1.5 rounded-lg hover:bg-red-50 text-neutral-300 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </motion.button>
                                                    <span className="text-sm font-bold text-[#2d1b20] font-sans">
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
                            <div className="border-t border-rose-100 px-6 py-5 space-y-4">
                                {/* Min order warning */}
                                {!meetsMinOrder && (
                                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                                        <span className="text-lg">⚠️</span>
                                        <p className="text-xs font-medium text-amber-700 font-sans">
                                            Min. order total {MIN_ORDER} pcs (boleh campur rasa) — tambah <span className="font-bold">{remaining} pcs</span> lagi ya!
                                        </p>
                                    </div>
                                )}

                                {/* Subtotal */}
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-500 font-medium font-sans">Subtotal ({count} pcs)</span>
                                    <span className="text-xl font-bold text-[#2d1b20] font-sans">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <motion.button
                                    whileHover={meetsMinOrder ? { scale: 1.02 } : {}}
                                    whileTap={meetsMinOrder ? { scale: 0.98 } : {}}
                                    onClick={() => meetsMinOrder && openCheckout()}
                                    className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-2xl transition-all duration-300 text-lg font-sans ${meetsMinOrder
                                        ? "bg-gradient-to-r from-rose-primary to-rose-dark text-white shadow-lg shadow-rose-primary/30 hover:shadow-rose-primary/50 cursor-pointer"
                                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                                        }`}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {meetsMinOrder ? "Checkout via WhatsApp" : `Min. ${MIN_ORDER} pcs untuk checkout`}
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
