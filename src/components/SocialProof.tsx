"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const notifications = [
    { initials: "AS", name: "Andini", item: "6 Nutella Blasts! 🍩" },
    { initials: "BP", name: "Budi", item: "3 Kyoto Matcha! 🍵" },
    { initials: "RM", name: "Rina", item: "4 Berry Love! 🍓" },
    { initials: "DK", name: "Dani", item: "2 Salted Caramel! 🍯" },
];

export default function SocialProof() {
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        const showTimer = setTimeout(() => {
            setVisible(true);
        }, 3000);

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % notifications.length);
                setVisible(true);
            }, 500);
        }, 8000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(interval);
        };
    }, [dismissed]);

    const notification = notifications[currentIndex];

    if (dismissed) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="fixed bottom-8 left-8 z-[90]"
                >
                    <div className="glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl shadow-rose-primary/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-primary to-rose-dark flex items-center justify-center text-white font-bold text-sm font-sans">
                            {notification.initials}
                        </div>
                        <div>
                            <p className="text-xs font-bold text-rose-dark font-sans">Baru saja PO</p>
                            <p className="text-sm font-semibold text-gray-800 font-sans">{notification.item}</p>
                        </div>
                        <button
                            onClick={() => {
                                setVisible(false);
                                setDismissed(true);
                            }}
                            className="ml-2 text-gray-400 hover:text-rose-primary transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
