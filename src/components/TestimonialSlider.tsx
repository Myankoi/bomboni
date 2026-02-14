"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function TestimonialSlider() {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-rose-50" id="testimonials">
            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D95D7E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <span className="text-rose-primary font-bold tracking-[0.2em] text-sm uppercase font-sans">
                        Happy Customers
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2d1b20]">
                        Apa Kata Mereka?
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-rose-primary to-gold-accent rounded-full" />
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={
                                t.featured
                                    ? "bg-gradient-to-br from-[#2d1b20] to-[#4a2c35] text-white p-6 sm:p-8 rounded-2xl shadow-2xl relative scale-100 md:scale-105 transform z-10"
                                    : "glass-panel p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative border-t-4 border-rose-primary"
                            }
                        >
                            {/* Featured badge */}
                            {t.featured && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg font-sans">
                                    Top Review
                                </div>
                            )}

                            {/* Quote icon for non-featured */}
                            {!t.featured && (
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-br from-rose-primary to-rose-dark rounded-full flex items-center justify-center text-white shadow-lg text-xl font-serif">
                                    &ldquo;
                                </div>
                            )}

                            {/* Stars */}
                            <div className={`flex mb-4 ${t.featured ? "justify-center" : ""} ${!t.featured ? "mt-2" : ""}`}>
                                {Array.from({ length: 5 }).map((_, si) => (
                                    <Star
                                        key={si}
                                        className={`w-5 h-5 ${si < t.rating
                                            ? "text-gold-accent fill-gold-accent"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className={`italic mb-6 leading-relaxed ${t.featured
                                ? "text-gray-200 text-center font-serif text-lg"
                                : "text-neutral-600 font-light"
                                }`}>
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className={`flex items-center gap-3 border-t pt-4 ${t.featured
                                ? "border-white/10 justify-center"
                                : "border-rose-100"
                                }`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${t.featured
                                    ? "bg-gradient-to-br from-gold-accent to-amber-500 text-white"
                                    : "bg-gradient-to-br from-rose-primary/80 to-rose-dark text-white"
                                    }`}>
                                    {t.initials}
                                </div>
                                <h4 className={`font-bold font-serif ${t.featured ? "text-gold-light" : "text-[#2d1b20]"
                                    }`}>
                                    {t.name}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
