"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, Check } from "lucide-react";
import { Product, formatPriceShort } from "@/data/products";
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

    // Stagger offset for visual interest
    const offsetClass = index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "" : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group glass-card rounded-[2rem] p-4 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-3 ${offsetClass}`}
        >
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-6 right-6 z-20">
                    <span className={`bg-gradient-to-r ${product.badgeColor || "from-rose-primary to-rose-dark"} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-rose-primary/30 tracking-wide uppercase`}>
                        {product.badge}
                    </span>
                </div>
            )}

            {/* Product Image */}
            <div className="w-full aspect-square rounded-[1.5rem] mb-6 overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Quick View on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <button
                        onClick={handleAdd}
                        className="w-full bg-white/90 backdrop-blur text-rose-dark font-bold py-3 rounded-xl shadow-lg hover:bg-white transition-colors"
                    >
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-2 pb-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-rose-dark font-serif">{product.name}</h3>
                    <p className="text-xl font-serif font-bold text-rose-primary">
                        {formatPriceShort(product.price)}
                    </p>
                </div>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-2">
                    {product.description}
                </p>

                {/* Add to Cart Button */}
                <motion.button
                    onClick={handleAdd}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${added
                            ? "bg-rose-primary text-white shadow-lg shadow-rose-primary/30"
                            : product.badge === "Best Seller"
                                ? "bg-rose-dark text-white hover:bg-rose-primary shadow-lg shadow-rose-dark/20 group-hover:shadow-rose-primary/40"
                                : "border-2 border-rose-dark text-rose-dark hover:bg-rose-dark hover:text-white"
                        }`}
                >
                    <AnimatePresence mode="wait">
                        {added ? (
                            <motion.span
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex items-center gap-1"
                            >
                                <Check className="w-4 h-4" /> Added!
                            </motion.span>
                        ) : (
                            <motion.span
                                key="add"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex items-center gap-1"
                            >
                                {product.badge === "Best Seller" ? (
                                    <><ShoppingBag className="w-4 h-4" /> Pesan Sekarang</>
                                ) : (
                                    <><Plus className="w-4 h-4" /> Tambah</>
                                )}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </motion.div>
    );
}
