"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <section id="menu" className="relative py-24 px-4 sm:px-6 lg:px-8">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
                        Our Menu
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate mb-4">
                        Pilih Favoritmu
                    </h2>
                    <p className="text-chocolate/50 max-w-lg mx-auto text-lg">
                        Setiap bomboloni dibuat fresh daily dengan filling premium yang berlimpah.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
