"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <section className="py-24 px-6 relative" id="menu">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20 gap-4">
                    <span className="text-rose-primary font-bold tracking-[0.2em] text-sm uppercase font-sans">
                        Sweet Delights
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-[#2d1b20]">
                        Menu Bomboloni Kami
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-rose-primary to-gold-accent rounded-full" />
                    <p className="text-neutral-500 max-w-lg font-light text-lg font-sans">
                        Pilih rasa favoritmu, dari yang manis klasik hingga sensasi modern yang lumer abis!
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
