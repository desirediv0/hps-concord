"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos = [
    { src: "/images/airbus.jpg", alt: "Airbus" },
    { src: "/images/boeing.jpg", alt: "Boeing" },
    { src: "/images/bombardier.jpg", alt: "Bombardier" },
    { src: "/images/dassault.jpg", alt: "Dassault" },
    { src: "/images/ebraer.jpg", alt: "Embraer" },
    { src: "/images/gulfstream.jpg", alt: "Gulfstream" },
    { src: "/images/piaggio.jpg", alt: "Piaggio" },
    { src: "/images/pilatus.jpg", alt: "Pilatus" },
    { src: "/images/textron.jpg", alt: "Textron" },
];

interface GallerySliderProps {
    speed?: number;
    showLabel?: boolean;
}

export default function GallerySlider({ speed = 28, showLabel = false }: GallerySliderProps) {
    const itemW = 140;
    const trackW = brandLogos.length * itemW;

    return (
        <section className="relative w-full overflow-hidden bg-[#f4f6fb] border-y border-[rgba(13,36,97,0.07)] py-5">
            {showLabel && (
                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center font-display text-[10px] tracking-[0.22em] uppercase text-[#0d2461]/40 mb-4">
                    Platforms We Support
                </motion.p>
            )}

            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10
                      bg-gradient-to-r from-[#f4f6fb] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10
                      bg-gradient-to-l from-[#f4f6fb] to-transparent" />

            <div className="flex">
                {[0, 1].map((set) => (
                    <motion.div key={set}
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
                        className="flex shrink-0 items-center gap-8 px-4"
                        style={{ width: `${trackW}px` }}>
                        {brandLogos.map((logo) => (
                            <div key={`${set}-${logo.alt}`}
                                className="relative shrink-0 w-28 h-10 grayscale opacity-45
                           hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}