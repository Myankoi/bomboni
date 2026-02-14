"use client";

import { motion } from "framer-motion";

const galleryImages = [
    { src: "/images/IMG-20250830-WA0051.jpg", alt: "Bomboloni fresh dari oven", caption: "Fresh from the oven! 🍩🔥", span: true },
    { src: "/images/image (1).jpeg", alt: "Pelanggan Bomboni - Pramuka", caption: "Anak-anak pramuka cinta Bomboni! 🫶", span: false },
    { src: "/images/IMG-20250823-WA0013.jpg", alt: "Pelanggan Bomboni - Delivery", caption: "Pesanan sampai, senyum merekah! 📦", span: false },
    { src: "/images/image (2).jpg", alt: "Pelanggan Bomboni - Nutella Close Up", caption: "Nutella overload 🤤", span: false },
    { src: "/images/IMG-20250827-WA0001.jpg", alt: "Tim Pramuka bareng Bomboni", caption: "Tim Pramuka x Bomboni 🤝", span: true },
    { src: "/images/image (3).jpg", alt: "Pelanggan Bomboni - Selfie", caption: "Bestie x Bomboni 🎉", span: false },
    { src: "/images/image (2).jpeg", alt: "Pelanggan Bomboni - Customer muda", caption: "Pelanggan setia Bomboni! 💛", span: false },
    { src: "/images/IMG-20250830-WA0055.jpg", alt: "Aneka varian bomboloni", caption: "Semua varian dalam satu nampan 🌈", span: true },
    { src: "/images/image (1).jpg", alt: "Pelanggan Bomboni - Happy Customer", caption: "Pengiriman sampai aman 📦", span: false },
    { src: "/images/image (4).jpg", alt: "Pelanggan Bomboni - Transaksi", caption: "Happy customer! ✨", span: false },
    { src: "/images/image (6).jpg", alt: "Tim Bomboni - Behind the Scenes", caption: "Behind the scenes 🍩", span: false },
];

export default function Gallery() {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden" id="gallery">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-rose-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">
                        GALLERY
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2d1b20]">
                        Moments{" "}
                        <span className="italic text-rose-primary font-serif">Bahagia</span>
                    </h2>
                    <p className="text-neutral-500 font-light mt-4 max-w-lg mx-auto">
                        Setiap pesanan menciptakan momen kebahagiaan. Lihat cerita mereka bersama Bomboni!
                    </p>
                    <div className="w-12 h-0.5 bg-rose-primary/30 mx-auto mt-6" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span ? "md:row-span-2" : ""
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[150px] sm:min-h-[200px]"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b20]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                                <p className="text-white font-medium text-xs sm:text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Banner Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 rounded-3xl overflow-hidden shadow-xl"
                >
                    <img
                        src="/images/image (5).jpg"
                        alt="Bomboni Banner"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
