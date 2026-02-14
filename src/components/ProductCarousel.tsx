"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Info, Minus, Plus, X, Check } from "lucide-react";
import { products, formatPrice, MIN_ORDER } from "@/data/products";
import { useCart } from "@/store/useCart";

export default function ProductCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showQtyPopup, setShowQtyPopup] = useState(false);
    const [qty, setQty] = useState(1);
    const [addedFeedback, setAddedFeedback] = useState(false);
    const addItemWithQuantity = useCart((s) => s.addItemWithQuantity);

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
    };
    const next = () => {
        setDirection(1);
        setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));
    };

    const product = products[current];

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
    };

    const handleOpenPopup = () => {
        setQty(1);
        setShowQtyPopup(true);
    };

    const handleConfirmAdd = () => {
        addItemWithQuantity(product, qty);
        setShowQtyPopup(false);
        setAddedFeedback(true);
        setTimeout(() => setAddedFeedback(false), 2000);
    };

    const quickQtys = [1, 2, 3, 6, 12];

    return (
        <>
            <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden" id="menu">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6"
                    >
                        <p className="text-rose-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">PILIH VARIAN</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2d1b20]">
                            Our <span className="italic text-rose-primary font-serif">Products</span>
                        </h2>
                        <div className="w-12 h-0.5 bg-rose-primary/30 mx-auto mt-6" />
                    </motion.div>

                    {/* Min order & price info banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-10 sm:mb-14 flex-wrap"
                    >
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-rose-primary/10 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full">
                            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-primary" />
                            <span className="text-xs sm:text-sm font-bold text-rose-dark">Min. {MIN_ORDER} pcs <span className="font-normal text-neutral-500 hidden sm:inline">(boleh campur)</span></span>
                        </div>
                        <div className="flex items-center gap-2 bg-gold-accent/10 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full">
                            <span className="text-xs sm:text-sm font-bold text-[#2d1b20]">Rp 8.000<span className="text-neutral-400 font-normal">/pcs</span></span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-500/10 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full">
                            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                            <span className="text-xs sm:text-sm font-bold text-emerald-700">Pre-Order</span>
                        </div>
                    </motion.div>

                    {/* Carousel */}
                    <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                        {/* Left Arrow */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:relative z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-rose-primary/20 flex items-center justify-center hover:bg-rose-primary hover:text-white hover:border-rose-primary transition-all duration-300 text-rose-dark bg-white/80 backdrop-blur-sm lg:bg-transparent"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Product Display */}
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[380px] sm:min-h-[420px] w-full px-10 lg:px-0">
                            {/* Product Image */}
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={product.id + "-img"}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative flex items-center justify-center"
                                >
                                    {/* Gray circle bg */}
                                    <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-[2rem] bg-neutral-200/50" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] object-cover rounded-[2rem] shadow-2xl shadow-rose-primary/10 border-4 border-white"
                                    />
                                    {/* Small floating product image */}
                                    <motion.div
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -top-2 -right-2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-white shadow-lg"
                                    >
                                        <img
                                            src={products[(current + 2) % products.length].image}
                                            alt="Next"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Product Card */}
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={product.id + "-card"}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
                                    className="bg-gradient-to-br from-[#2d1b20] to-[#4a2c35] text-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl max-w-md mx-auto lg:mx-0 w-full"
                                >
                                    {/* Badge */}
                                    {product.badge && (
                                        <span className="inline-block bg-white/10 text-rose-light text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4 uppercase tracking-wider">
                                            {product.badge}
                                        </span>
                                    )}

                                    <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-2 sm:mb-3">{product.name}</h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                        <div className="flex">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < 5 ? "text-gold-accent fill-gold-accent" : "text-gray-500"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">5.0</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                                        <span className="text-2xl sm:text-3xl font-black font-serif text-gold-light">
                                            {formatPrice(product.price)}
                                        </span>
                                        <span className="text-xs sm:text-sm text-gray-400">/pcs</span>
                                    </div>

                                    <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light">
                                        {product.description}
                                    </p>

                                    {/* Min order notice */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-accent shrink-0" />
                                        <p className="text-[11px] sm:text-xs text-gray-300">
                                            Min. order total <span className="font-bold text-gold-light">{MIN_ORDER} pcs</span> ({formatPrice(product.price * MIN_ORDER)}) — boleh campur rasa!
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleOpenPopup}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-primary to-rose-dark hover:from-rose-dark hover:to-rose-primary text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all duration-300 group shadow-lg shadow-rose-primary/20 text-sm sm:text-base"
                                    >
                                        <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        Tambah ke Keranjang
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:relative z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-rose-primary/20 flex items-center justify-center hover:bg-rose-primary hover:text-white hover:border-rose-primary transition-all duration-300 text-rose-dark bg-white/80 backdrop-blur-sm lg:bg-transparent"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
                        {products.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > current ? 1 : -1);
                                    setCurrent(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-rose-primary" : "w-2 bg-rose-primary/20 hover:bg-rose-primary/40"}`}
                            />
                        ))}
                    </div>

                    {/* Quick product selector */}
                    <div className="mt-6 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-2">
                        {products.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => {
                                    setDirection(i > current ? 1 : -1);
                                    setCurrent(i);
                                }}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${i === current
                                    ? "bg-rose-primary text-white shadow-lg shadow-rose-primary/20"
                                    : "bg-white/60 text-neutral-600 hover:bg-white border border-rose-primary/10"
                                    }`}
                            >
                                {p.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Added to cart feedback toast */}
            <AnimatePresence>
                {addedFeedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-sans"
                    >
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-bold">Ditambahkan ke keranjang!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quantity Popup Modal */}
            <AnimatePresence>
                {showQtyPopup && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowQtyPopup(false)}
                            className="fixed inset-0 bg-[#2d1b20]/50 backdrop-blur-sm z-[150]"
                        />

                        {/* Modal Container - flex centering for desktop, bottom-aligned for mobile */}
                        <div className="fixed inset-0 z-[151] flex items-end md:items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                transition={{ type: "spring", damping: 28, stiffness: 350 }}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto"
                            >
                                {/* Header with product info */}
                                <div className="relative bg-gradient-to-br from-[#2d1b20] to-[#4a2c35] p-5 md:p-6 text-white">
                                    <button
                                        onClick={() => setShowQtyPopup(false)}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-white/20 shrink-0">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-lg md:text-xl">{product.name}</h3>
                                            <p className="text-gold-light font-bold text-sm md:text-base">{formatPrice(product.price)}<span className="text-gray-400 font-normal text-xs"> /pcs</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6 space-y-5">
                                    {/* Quick amounts */}
                                    <div>
                                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Pilih Jumlah</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {quickQtys.map((q) => (
                                                <button
                                                    key={q}
                                                    onClick={() => setQty(q)}
                                                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${qty === q
                                                        ? "bg-rose-primary text-white shadow-lg shadow-rose-primary/30 scale-105"
                                                        : "bg-rose-primary/5 text-rose-dark hover:bg-rose-primary/10 border border-rose-primary/10"
                                                        }`}
                                                >
                                                    {q} pcs
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Manual qty stepper */}
                                    <div className="flex items-center justify-between bg-cream-bg/50 rounded-2xl p-4 border border-rose-primary/10">
                                        <div className="flex items-center gap-3">
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setQty(Math.max(1, qty - 1))}
                                                className="w-10 h-10 rounded-xl bg-white border border-rose-primary/20 flex items-center justify-center hover:border-rose-primary/50 transition-colors shadow-sm"
                                            >
                                                <Minus className="w-4 h-4 text-rose-dark" />
                                            </motion.button>
                                            <input
                                                type="number"
                                                value={qty}
                                                onChange={(e) => {
                                                    const val = parseInt(e.target.value);
                                                    if (!isNaN(val) && val >= 1 && val <= 99) setQty(val);
                                                }}
                                                className="w-14 text-center text-xl font-black text-[#2d1b20] bg-transparent outline-none font-sans [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setQty(Math.min(99, qty + 1))}
                                                className="w-10 h-10 rounded-xl bg-white border border-rose-primary/20 flex items-center justify-center hover:border-rose-primary/50 transition-colors shadow-sm"
                                            >
                                                <Plus className="w-4 h-4 text-rose-dark" />
                                            </motion.button>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-neutral-400">Total</p>
                                            <p className="text-lg font-black text-[#2d1b20] font-sans">{formatPrice(product.price * qty)}</p>
                                        </div>
                                    </div>

                                    {/* Confirm button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleConfirmAdd}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-primary to-rose-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-primary/30 hover:shadow-rose-primary/50 transition-all duration-300 text-sm md:text-base"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Tambah {qty} pcs — {formatPrice(product.price * qty)}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
