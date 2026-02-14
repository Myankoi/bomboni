"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    const items = [
        "Bomboloni Artisan",
        "✦",
        "Sistem Pre-Order",
        "✦",
        "Area 5C Jakarta Timur",
        "✦",
        "Handmade Fresh",
        "✦",
        "Rp 8.000/pcs",
        "✦",
        "6 Varian Rasa",
        "✦",
        "Min. Order 6 pcs",
        "✦",
    ];

    const content = items.join("  ");
    const repeated = `${content}  ${content}  ${content}  `;

    return (
        <div className="relative py-6 overflow-hidden border-y border-rose-primary/10 bg-white/30 backdrop-blur-sm">
            <motion.div
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
            >
                <span className="text-sm font-medium text-neutral-400 tracking-[0.15em] uppercase px-4 min-w-max">
                    {repeated}
                </span>
                <span className="text-sm font-medium text-neutral-400 tracking-[0.15em] uppercase px-4 min-w-max">
                    {repeated}
                </span>
            </motion.div>
        </div>
    );
}
