"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Solutions", href: "/solutions" },
    { label: "Quality & Certifications", href: "/quality" },
    { label: "Work With Us", href: "/work-with-us" },
    { label: "Contact Us", href: "/contact" },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Footer() {
    const itemW = 140;
    const trackW = brandLogos.length * itemW;

    return (
        <footer className="relative mt-16 overflow-hidden">

            {/* ── SLIDER — light gray strip ── */}
            <div className="relative bg-[#f4f6fb] border-y border-[rgba(13,36,97,0.08)] py-5 overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10
                        bg-gradient-to-r from-[#f4f6fb] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10
                        bg-gradient-to-l from-[#f4f6fb] to-transparent" />

                <div className="flex overflow-hidden">
                    {[0, 1].map((set) => (
                        <motion.div key={set}
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                            className="flex shrink-0 items-center gap-8 px-4"
                            style={{ width: `${trackW}px` }}>
                            {brandLogos.map((logo) => (
                                <div key={`${set}-${logo.alt}`}
                                    className="relative shrink-0 w-28 h-10 grayscale opacity-50
                             hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── MAIN FOOTER — dark navy ── */}
            <div className="bg-[#071540] pt-14 pb-6">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

                        {/* Brand col */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
                            viewport={{ once: true }} className="md:col-span-5 space-y-5">
                            {/* Logo on dark bg — white box */}
                            <div className="relative w-[150px] h-[50px] bg-white rounded-sm p-1">
                                <Image src="/images/logohps1.jpg" alt="HPS Concord Ltd" fill className="object-contain p-1" />
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-6 h-px bg-[#c8102e]" />
                                <span className="font-display text-[#c8102e] tracking-[0.15em] text-xs uppercase">
                                    Your Wings, Our Passion
                                </span>
                            </div>

                            <p className="text-[#8a9bbf] text-sm leading-relaxed max-w-xs">
                                Global aftermarket aircraft parts supplier to airlines, MROs, and fleet operators — delivering reliability since 2015.
                            </p>

                            {/* Contact card */}
                            <div className="border border-white/10 rounded-sm p-4 space-y-3 bg-white/4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-4 h-4 text-[#c8102e] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                                    </svg>
                                    <a href="mailto:sales@hpsconcord.com"
                                        className="text-[#c8102e] hover:text-red-300 text-sm transition-colors">
                                        sales@hpsconcord.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-4 h-4 text-[#c8102e] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <address className="text-[#8a9bbf] text-sm not-italic leading-relaxed">
                                        3rd Floor Hennessy Court,<br />
                                        Corner Suffren Rd, Pope Hennessy St,<br />
                                        Port Louis, Mauritius 11302
                                    </address>
                                </div>
                            </div>
                        </motion.div>

                        <div className="hidden md:block md:col-span-1" />

                        {/* Nav col */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            className="md:col-span-3 space-y-4">
                            <h4 className="font-display font-600 text-xs tracking-[0.18em] uppercase text-[#c8102e]">
                                Navigation
                            </h4>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}
                                            className="group flex items-center gap-2 text-sm text-[#8a9bbf] hover:text-white transition-colors duration-200">
                                            <span className="w-4 h-px bg-[#c8102e]/40 group-hover:bg-[#c8102e] group-hover:w-5 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Certs col */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            className="md:col-span-3 space-y-4">
                            <h4 className="font-display font-600 text-xs tracking-[0.18em] uppercase text-[#c8102e]">
                                Certifications
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "ISO 9001:2015", href: "/images/iso.pdf" },
                                    { label: "Aviation Supplier Association", href: "/images/ASA Member Certificate.pdf" },
                                    { label: "Trade Name Certificate", href: "/images/cofi.pdf" },
                                ].map((cert) => (
                                    <li key={cert.label}>
                                        <a href={cert.href} target="_blank" rel="noreferrer"
                                            className="group flex items-center gap-3 text-sm text-[#8a9bbf] hover:text-white transition-colors">
                                            <svg className="w-3.5 h-3.5 text-[#c8102e]/50 group-hover:text-[#c8102e] shrink-0 transition-colors"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                            {cert.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm
                              border border-white/15 bg-white/6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
                                <span className="font-display text-[10px] tracking-[0.15em] text-[#c8102e] uppercase">
                                    ASA Member
                                </span>
                            </div>
                        </motion.div>

                    </div>

                    {/* Bottom bar */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-[#4a5a7a] text-xs tracking-wide">
                            © {new Date().getFullYear()} HPS Concord Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-[#4a5a7a] text-xs">
                            <span className="w-1 h-1 rounded-full bg-[#c8102e]/50" />
                            <span>Port Louis, Mauritius</span>
                            <span className="w-1 h-1 rounded-full bg-[#c8102e]/50 ml-1" />
                            <a href="mailto:sales@hpsconcord.com" className="hover:text-[#c8102e] transition-colors">
                                sales@hpsconcord.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}