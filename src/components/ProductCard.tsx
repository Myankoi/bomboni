"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Check } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/store/useCart";

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const [added, setAdded] = useState(false);
    const addItem = useCart((state) => state.addItem);

    const handleAdd = () => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500"
        >
            {/* Badge */}
            <AnimatePresence>
                {product.badge && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${product.badge === "Best Seller"
                                ? "bg-primary text-white"
                                : product.badge === "New"
                                    ? "bg-emerald-500 text-white"
                                    : product.badge === "Limited"
                                        ? "bg-purple-500 text-white"
                                        : "bg-chocolate/90 text-white"
                            }`}
                    >
                        {product.badge}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Product Image Area */}
            <div className="relative h-56 bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="text-8xl select-none"
                    animate={{
                        y: [-5, 5, -5],
                        rotate: [-2, 2, -2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {product.emoji}
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {product.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-chocolate mt-1 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-chocolate/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Price + Add to Cart */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-chocolate">
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    <motion.button
                        onClick={handleAdd}
                        whileTap={{ scale: 0.85 }}
                        className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${added
                                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                                : "bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50"
                            }`}
                    >
                        <AnimatePresence mode="wait">
                            {added ? (
                                <motion.span
                                    key="check"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0 }}
                                    className="flex items-center gap-1"
                                >
                                    <Check className="w-4 h-4" />
                                    Added!
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="add"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="flex items-center gap-1"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
