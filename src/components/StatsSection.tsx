"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Hand as HandHeart, MapPin, Star, ShoppingBag } from "lucide-react";

interface StatProps {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    sublabel?: string;
    delay: number;
}

function AnimatedStat({ icon, value, suffix, label, sublabel, delay }: StatProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center text-center p-4 sm:p-8 group hover:bg-white/60 rounded-2xl transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-rose-primary/10 flex items-center justify-center mb-5 group-hover:bg-rose-primary/20 transition-colors">
                {icon}
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2d1b20] font-serif mb-2">
                {isInView ? count : 0}
                <span className="text-rose-primary">{suffix}</span>
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-1">
                {label}
            </p>
            {sublabel && (
                <p className="text-xs text-neutral-400 mt-1">{sublabel}</p>
            )}
        </motion.div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-rose-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">KENAPA BOMBONI</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2d1b20]">
                        Craft{" "}
                        <span className="italic text-rose-primary font-serif">Excellence</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-rose-primary/30 mx-auto mt-6" />
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border border-rose-primary/10 rounded-2xl bg-white/30 backdrop-blur-sm">
                    <AnimatedStat
                        icon={<HandHeart className="w-6 h-6 text-rose-primary" />}
                        value={100}
                        suffix="%"
                        label="HANDCRAFTED"
                        sublabel="Dibuat dengan tangan"
                        delay={0}
                    />
                    <AnimatedStat
                        icon={<ShoppingBag className="w-6 h-6 text-rose-primary" />}
                        value={6}
                        suffix=""
                        label="VARIAN"
                        sublabel="Pilihan rasa premium"
                        delay={0.1}
                    />
                    <AnimatedStat
                        icon={<Star className="w-6 h-6 text-rose-primary" />}
                        value={5}
                        suffix="⭐"
                        label="RATING"
                        sublabel="Dari para pelanggan"
                        delay={0.2}
                    />
                    <AnimatedStat
                        icon={<MapPin className="w-6 h-6 text-rose-primary" />}
                        value={5}
                        suffix="C"
                        label="COVERAGE"
                        sublabel="Area Jakarta Timur"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
