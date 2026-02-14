"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/useCart";

export default function FloatingCart() {
    const { openCart, totalItems, isOpen } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const count = mounted ? totalItems() : 0;

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[100]"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openCart}
                        className="relative bg-gradient-to-r from-rose-primary to-rose-dark text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl shadow-rose-primary/40 flex items-center justify-center group"
                    >
                        <ShoppingCart className="w-7 h-7 group-hover:animate-bounce" />
                        {count > 0 && (
                            <span className="absolute -top-1 -right-1 bg-white text-rose-dark text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-rose-primary shadow-sm font-sans">
                                {count}
                            </span>
                        )}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
