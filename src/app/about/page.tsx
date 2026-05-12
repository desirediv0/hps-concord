"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GallerySlider from "@/components/GallerySlider";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, delay },
});

const values = [
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Integrity",
        desc: "Every part we supply is fully traceable, certified, and held to the highest aviation standards.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
        title: "Speed",
        desc: "AOG situations demand rapid response. Our global network delivers when it matters most.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
        title: "Innovation",
        desc: "Continuously improving processes and solutions to meet the evolving needs of our clients.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
        title: "Partnership",
        desc: "We build long-term relationships, acting as a trusted extension of your operations.",
    },
];

const milestones = [
    { year: "2015", label: "Founded", desc: "HPS Concord established in Port Louis, Mauritius." },
    { year: "2017", label: "ASA Membership", desc: "Joined the Aviation Supplier Association — global credibility unlocked." },
    { year: "2019", label: "ISO Certified", desc: "Achieved ISO 9001:2015 certification for quality management." },
    { year: "2021", label: "Network Expands", desc: "100+ MRO and supplier partnerships across 4 continents." },
    { year: "2024", label: "Platform Growth", desc: "Extended support to 9+ major OEM platforms including Dassault, Pilatus & Piaggio." },
];

const expertise = [
    { label: "Commercial Aircraft", pct: 92 },
    { label: "Helicopter Components", pct: 78 },
    { label: "Engine Overhaul", pct: 85 },
    { label: "Avionics & Electrical", pct: 80 },
    { label: "Landing Gear Systems", pct: 88 },
];

export default function AboutPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/earth.jpg" alt="" fill priority className="object-cover object-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071540]/80 via-[#071540]/70 to-[#071540]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/90 to-transparent" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#ff6b7a]">
                            <span className="w-8 h-px bg-[#c8102e]" />Our Story
                        </span>
                        <h1 className="font-display font-700 text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                            About<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff6b7a]">
                                HPS Concord
                            </span>
                        </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#c8102e]/4 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Text */}
                        <div>
                            <motion.div {...fadeUp(0)}>
                                <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]">
                                    <span className="w-8 h-px bg-[#c8102e]" />Who We Are
                                </span>
                            </motion.div>
                            <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] mb-6"
                                style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                                Global Provider of<br />
                                <span className="text-[#c8102e]">Aircraft Spare Parts</span>
                            </motion.h2>
                            <motion.p {...fadeUp(0.2)} className="text-[#3a4a6b] leading-relaxed mb-5">
                                <strong className="text-[#0d2461] font-medium">HPS Concord Limited</strong> is a global
                                provider of comprehensive aircraft spare parts solutions, serving both commercial and
                                general aviation sectors. We supply high-quality new, used, and refurbished components,
                                ensuring reliability, efficiency, and cost-effectiveness.
                            </motion.p>
                            <motion.p {...fadeUp(0.3)} className="text-[#3a4a6b] leading-relaxed mb-5">
                                With extensive industry expertise, we specialise in aircraft sales and leasing, as well
                                as helicopter and fixed-wing component and engine overhaul services. Through our strong
                                international partner network, we deliver end-to-end aviation asset management solutions,
                                including trading of engines, landing gear, and auxiliary power units (APUs).
                            </motion.p>
                            <motion.p {...fadeUp(0.35)} className="text-[#3a4a6b] leading-relaxed mb-8">
                                Our commitment is to provide dependable aviation support tailored to the evolving needs
                                of our clients worldwide. The growth is driven by the collective expertise of our team,
                                delivering innovative and value-added solutions.
                            </motion.p>
                            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
                                <Link href="/solutions"
                                    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-sm
                             font-display font-600 tracking-[0.08em] text-sm uppercase
                             text-white bg-[#c8102e] hover:bg-[#a00d24]
                             shadow-[0_2px_20px_rgba(200,16,46,0.30)]
                             transition-all duration-300 overflow-hidden group">
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                   transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                    Our Solutions
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                                <Link href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm
                             font-display font-600 tracking-[0.08em] text-sm uppercase
                             text-[#0d2461] border border-[rgba(13,36,97,0.25)]
                             hover:bg-[#0d2461]/5 transition-all duration-300">
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </div>

                        {/* Image collage */}
                        <motion.div {...fadeIn(0.2)} className="relative h-[460px]">
                            <div className="absolute left-0 top-0 w-[65%] h-[72%] rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)] shadow-[0_20px_60px_rgba(13,36,97,0.15)]">
                                <Image src="/images/astronaut.jpg" alt="HPS Concord Team" fill className="object-cover" />
                            </div>
                            <div className="absolute right-0 bottom-0 w-[58%] h-[60%] rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)] shadow-[0_20px_60px_rgba(13,36,97,0.18)]">
                                <Image src="/images/spacecraft-small.jpg" alt="Aircraft" fill className="object-cover" />
                            </div>
                            <div className="absolute top-0 right-[36%] w-8 h-8 border-t-2 border-r-2 border-[#c8102e]/30" />
                            <div className="absolute bottom-[36%] left-[60%] w-8 h-8 border-b-2 border-l-2 border-[#0d2461]/25" />

                            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-4 bottom-[32%] z-10 bg-white
                           border border-[rgba(13,36,97,0.10)] rounded-sm px-4 py-3
                           shadow-[0_8px_32px_rgba(13,36,97,0.15)]">
                                <p className="font-display text-[9px] tracking-[0.15em] uppercase text-[#c8102e]">Serving Since</p>
                                <p className="font-display font-700 text-[#0d2461] text-2xl leading-none mt-0.5">2015</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CORE VALUES ── */}
            <section className="relative py-20 bg-[#f4f6fb] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(#0d2461 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-2 mb-3 font-display text-[10px]
                               tracking-[0.2em] uppercase text-[#c8102e]">
                                <span className="w-8 h-px bg-[#c8102e]" />What Drives Us
                                <span className="w-8 h-px bg-[#c8102e]" />
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461]"
                            style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                            Our Core Values
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <motion.div key={val.title} {...fadeUp(i * 0.1)}
                                className="group relative p-6 rounded-sm bg-white
                           border border-[rgba(13,36,97,0.08)]
                           hover:border-[rgba(200,16,46,0.30)]
                           hover:shadow-[0_8px_32px_rgba(13,36,97,0.10)]
                           transition-all duration-500">
                                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm
                                bg-gradient-to-r from-transparent via-[#c8102e] to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-10 h-10 rounded-sm border border-[rgba(13,36,97,0.12)]
                                bg-[#f4f6fb] flex items-center justify-center text-[#0d2461] mb-4
                                group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e]
                                transition-all duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="font-display font-600 text-[#0d2461] text-base mb-2
                               group-hover:text-[#c8102e] transition-colors duration-300">
                                    {val.title}
                                </h3>
                                <p className="text-[#3a4a6b] text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERTISE BARS ── */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]
                        bg-[#c8102e]/4 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Bars */}
                        <div>
                            <motion.div {...fadeUp(0)}>
                                <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]">
                                    <span className="w-8 h-px bg-[#c8102e]" />Capabilities
                                </span>
                            </motion.div>
                            <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] mb-10"
                                style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                                Areas of <span className="text-[#c8102e]">Expertise</span>
                            </motion.h2>

                            <div className="space-y-6">
                                {expertise.map((item, i) => (
                                    <motion.div key={item.label} {...fadeUp(0.1 + i * 0.08)}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-display text-sm tracking-wide text-[#0d2461]">{item.label}</span>
                                            <span className="font-display text-sm text-[#c8102e] font-600">{item.pct}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-[rgba(13,36,97,0.08)] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                className="h-full rounded-full bg-gradient-to-r from-[#0d2461] to-[#c8102e]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <motion.div {...fadeIn(0.2)} className="relative h-[420px]">
                            <div className="absolute inset-0 rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)]
                              shadow-[0_24px_80px_rgba(13,36,97,0.15)]">
                                <Image src="/images/space-shuttle.jpg" alt="Aircraft operations" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0d2461]/30 to-transparent" />
                            </div>
                            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#c8102e]/40" />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#0d2461]/30" />

                            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-4 top-4 bg-white
                           border border-[rgba(13,36,97,0.10)] rounded-sm px-4 py-3
                           shadow-[0_8px_32px_rgba(13,36,97,0.15)]">
                                <p className="font-display text-[9px] tracking-[0.15em] uppercase text-[#c8102e]">Platforms</p>
                                <p className="font-display font-700 text-[#0d2461] text-2xl leading-none mt-0.5">9+</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="relative py-24 bg-[#f4f6fb] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,16,46,0.04),transparent_70%)]" />

                <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-2 mb-3 font-display text-[10px]
                               tracking-[0.2em] uppercase text-[#c8102e]">
                                <span className="w-8 h-px bg-[#c8102e]" />Our Journey
                                <span className="w-8 h-px bg-[#c8102e]" />
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461]"
                            style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                            Key Milestones
                        </motion.h2>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
                         bg-gradient-to-b from-transparent via-[rgba(13,36,97,0.20)] to-transparent
                         origin-top hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <motion.div key={m.year} {...fadeUp(i * 0.1)}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                              ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                                    {/* Card */}
                                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="inline-block p-5 rounded-sm bg-white
                                    border border-[rgba(13,36,97,0.08)]
                                    hover:border-[rgba(200,16,46,0.25)]
                                    hover:shadow-[0_4px_20px_rgba(13,36,97,0.10)]
                                    transition-all duration-300">
                                            <p className="font-display font-700 text-[#c8102e] text-lg mb-1">{m.label}</p>
                                            <p className="text-[#3a4a6b] text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>

                                    {/* Year bubble */}
                                    <div className="relative z-10 shrink-0 w-16 h-16 rounded-sm bg-white
                                  border-2 border-[rgba(13,36,97,0.20)]
                                  flex items-center justify-center
                                  shadow-[0_4px_16px_rgba(13,36,97,0.12)]
                                  mx-auto md:mx-0">
                                        <span className="font-display font-700 text-xs text-[#0d2461] tracking-wide">
                                            {m.year}
                                        </span>
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BRAND SLIDER ── */}
            <GallerySlider showLabel speed={35} />

            {/* ── CTA ── */}
            <section className="relative py-20 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,16,46,0.04),transparent_70%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(13,36,97,0.12)] to-transparent" />

                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <motion.h2 {...fadeUp(0)} className="font-display font-700 text-[#0d2461] mb-6"
                        style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                        Partner With Us
                    </motion.h2>
                    <motion.p {...fadeUp(0.1)} className="text-[#3a4a6b] leading-relaxed mb-8">
                        Join the growing network of airlines, MROs, and fleet operators who trust
                        HPS Concord for reliable, certified aviation solutions.
                    </motion.p>
                    <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact"
                            className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm
                         font-display font-600 tracking-[0.1em] text-sm uppercase
                         text-white bg-[#c8102e] hover:bg-[#a00d24]
                         shadow-[0_2px_24px_rgba(200,16,46,0.35)]
                         hover:shadow-[0_4px_36px_rgba(200,16,46,0.50)]
                         transition-all duration-300 overflow-hidden group">
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                               transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            Contact Us
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                        <Link href="/quality"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm
                         font-display font-600 tracking-[0.1em] text-sm uppercase
                         text-[#0d2461] border border-[rgba(13,36,97,0.25)]
                         hover:bg-[#0d2461]/5 transition-all duration-300">
                            Certifications
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}