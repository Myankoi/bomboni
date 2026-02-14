"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback(
        (newDirection: number) => {
            setDirection(newDirection);
            setCurrent((prev) => {
                const next = prev + newDirection;
                if (next < 0) return testimonials.length - 1;
                if (next >= testimonials.length) return 0;
                return next;
            });
        },
        []
    );

    useEffect(() => {
        const timer = setInterval(() => paginate(1), 5000);
        return () => clearInterval(timer);
    }, [paginate]);

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -200 : 200,
            opacity: 0,
        }),
    };

    const testimonial = testimonials[current];

    return (
        <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate mb-4">
                        Kata Mereka
                    </h2>
                    <p className="text-chocolate/50 max-w-lg mx-auto text-lg">
                        Ribuan pelanggan sudah jatuh cinta dengan bomboloni kami.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="bg-white rounded-3xl shadow-soft-lg p-8 sm:p-12 min-h-[280px] flex items-center overflow-hidden">
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full text-center"
                            >
                                {/* Stars */}
                                <div className="flex items-center justify-center gap-1 mb-6">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating
                                                    ? "text-amber-400 fill-amber-400"
                                                    : "text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-chocolate/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto italic">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                {/* Avatar + Name */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-chocolate">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-chocolate/40">Pelanggan Setia</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(-1)}
                            className="p-2.5 rounded-xl bg-white shadow-soft hover:shadow-soft-lg border border-primary/10 text-chocolate/60 hover:text-primary transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > current ? 1 : -1);
                                        setCurrent(i);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-chocolate/20 hover:bg-chocolate/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(1)}
                            className="p-2.5 rounded-xl bg-white shadow-soft hover:shadow-soft-lg border border-primary/10 text-chocolate/60 hover:text-primary transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
