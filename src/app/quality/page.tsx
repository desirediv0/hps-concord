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

const certs = [
    {
        id: "iso", badge: "ISO",
        title: "ISO 9001:2015",
        subtitle: "Quality Management System",
        desc: "Our ISO 9001:2015 certification demonstrates our commitment to consistent quality management, continual improvement, and customer satisfaction across all our operations and processes.",
        highlights: ["Process-driven quality management", "Continual improvement framework", "Customer satisfaction focus", "Risk-based thinking approach"],
        file: "/images/iso.pdf",
        color: "#0d2461",   // navy
        accent: "#c8102e",  // red tick
    },
    {
        id: "asa", badge: "ASA",
        title: "Aviation Supplier Association",
        subtitle: "ASA-100 Member Certification",
        desc: "As a member of the Aviation Supplier Association, HPS Concord adheres to ASA-100 quality standards — the globally recognised benchmark for aviation parts distributors ensuring traceability and documentation integrity.",
        highlights: ["ASA-100 quality standard compliance", "Full parts traceability", "Documentation integrity assured", "Globally recognised accreditation"],
        file: "/images/ASA Member Certificate.pdf",
        color: "#c8102e",   // red
        accent: "#c8102e",
    },
    {
        id: "trade", badge: "TNC",
        title: "Trade Name Certificate",
        subtitle: "Official Business Registration",
        desc: "HPS Concord Limited holds an official Trade Name Certificate confirming our legitimate, registered business identity and legal standing as an incorporated entity in Mauritius.",
        highlights: ["Legally incorporated entity", "Registered in Mauritius", "Verified business identity", "Regulatory compliance confirmed"],
        file: "/images/cofi.pdf",
        color: "#1a3a8a",   // navy-light
        accent: "#c8102e",
    },
];

const pillars = [
    {
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
        title: "Certified Parts Only",
        desc: "Every component supplied by HPS Concord is fully certified, documented, and traceable to its origin.",
    },
    {
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
        title: "Full Documentation",
        desc: "Complete paper trails for every transaction — airworthiness certificates, 8130-3 tags, and COCs.",
    },
    {
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
        title: "Rigorous Inspection",
        desc: "Multi-stage inspection processes ensure each part meets OEM specifications before delivery.",
    },
    {
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
        title: "Continuous Improvement",
        desc: "ISO-driven culture of ongoing process improvement — raising our standards as the industry evolves.",
    },
];

export default function QualityPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/spacecraft-small.jpg" alt="" fill priority className="object-cover object-center opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071540]/85 via-[#071540]/75 to-[#071540]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/90 to-transparent" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#ff6b7a]">
                            <span className="w-8 h-px bg-[#c8102e]" />Standards & Compliance
                        </span>
                        <h1 className="font-display font-700 text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                            Quality &<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff6b7a]">
                                Certifications
                            </span>
                        </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
            </section>

            {/* ── COMMITMENT STATEMENT ── */}
            <section className="py-16 bg-[#0d2461] border-b border-white/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div {...fadeIn(0)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse inline-block mb-6" />
                    </motion.div>
                    <motion.h2 {...fadeUp(0.05)} className="font-display font-700 text-white mb-5"
                        style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
                        A Goal We Will Never Stop Pursuing
                    </motion.h2>
                    <motion.p {...fadeUp(0.15)} className="text-white/70 text-lg leading-relaxed">
                        Improving our quality system is a commitment we make to every customer. We will always
                        prioritise delivering the{" "}
                        <strong className="text-white font-medium">highest-quality materials and services</strong>{" "}
                        in a prompt and cost-effective manner.
                    </motion.p>
                </div>
            </section>

            {/* ── CERT CARDS ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col gap-16">
                        {certs.map((cert, i) => {
                            const even = i % 2 === 0;
                            return (
                                <motion.div key={cert.id} id={cert.id} {...fadeUp(0.1)}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch
                    ${even ? "" : "lg:[direction:rtl]"}`}>

                                    {/* Visual panel */}
                                    <div className={`relative rounded-sm overflow-hidden min-h-[280px]
                      bg-[#f4f6fb] border border-[rgba(13,36,97,0.10)]
                      shadow-[0_8px_40px_rgba(13,36,97,0.10)]
                      flex items-center justify-center
                      ${even ? "" : "lg:[direction:ltr]"}`}>

                                        {/* Dot grid */}
                                        <div className="absolute inset-0 opacity-[0.06]"
                                            style={{ backgroundImage: "radial-gradient(#0d2461 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

                                        {/* Radial glow using cert color */}
                                        <div className="absolute inset-0 rounded-sm"
                                            style={{ background: `radial-gradient(ellipse at 50% 50%, ${cert.color}08, transparent 70%)` }} />

                                        <div className="relative flex flex-col items-center gap-4 p-10">
                                            {/* Badge */}
                                            <motion.div
                                                initial={{ scale: 0.7, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                                className="w-28 h-28 rounded-sm border-2 flex items-center justify-center
                                   shadow-[0_4px_24px_rgba(13,36,97,0.12)]"
                                                style={{ borderColor: cert.color + "40", background: cert.color + "0c" }}>
                                                <span className="font-display font-700 tracking-widest"
                                                    style={{ fontSize: "2rem", color: cert.color }}>
                                                    {cert.badge}
                                                </span>
                                            </motion.div>

                                            <p className="font-display text-[10px] tracking-[0.25em] uppercase text-center"
                                                style={{ color: cert.color + "99" }}>
                                                {cert.subtitle}
                                            </p>

                                            {/* Download */}
                                            <a href={cert.file} target="_blank" rel="noreferrer"
                                                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-sm
                                   font-display text-xs tracking-[0.12em] uppercase
                                   border transition-all duration-300
                                   hover:shadow-[0_4px_16px_rgba(13,36,97,0.15)]"
                                                style={{ color: cert.color, borderColor: cert.color + "30", background: cert.color + "08" }}>
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                                View Certificate
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`flex flex-col justify-center ${even ? "" : "lg:[direction:ltr]"}`}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-[#7a8aaa]">
                                                Certificate
                                            </span>
                                            <span className="flex-1 h-px bg-[rgba(13,36,97,0.10)]" />
                                        </div>

                                        <h2 className="font-display font-700 text-[#0d2461] mb-3"
                                            style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>
                                            {cert.title}
                                        </h2>
                                        <p className="text-[#3a4a6b] text-sm leading-relaxed mb-7">{cert.desc}</p>

                                        <ul className="space-y-3">
                                            {cert.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-3 text-sm text-[#3a4a6b]">
                                                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#c8102e]"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── QUALITY PILLARS ── */}
            <section className="relative py-24 bg-[#f4f6fb] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(#0d2461 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-2 mb-3 font-display text-[10px]
                               tracking-[0.2em] uppercase text-[#c8102e]">
                                <span className="w-8 h-px bg-[#c8102e]" />How We Maintain Quality
                                <span className="w-8 h-px bg-[#c8102e]" />
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461]"
                            style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                            Our Quality Pillars
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div key={p.title} {...fadeUp(i * 0.1)}
                                className="group relative p-6 rounded-sm bg-white
                           border border-[rgba(13,36,97,0.08)]
                           hover:border-[rgba(200,16,46,0.30)]
                           hover:shadow-[0_8px_32px_rgba(13,36,97,0.10)]
                           transition-all duration-500">
                                {/* Top red accent on hover */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm
                                bg-gradient-to-r from-transparent via-[#c8102e] to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-11 h-11 rounded-sm border border-[rgba(13,36,97,0.12)]
                                bg-[#f4f6fb] flex items-center justify-center text-[#0d2461] mb-4
                                group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e]
                                transition-all duration-300">
                                    {p.icon}
                                </div>
                                <h3 className="font-display font-600 text-[#0d2461] text-base mb-2
                               group-hover:text-[#c8102e] transition-colors duration-300">
                                    {p.title}
                                </h3>
                                <p className="text-[#3a4a6b] text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BRAND SLIDER ── */}
            <GallerySlider showLabel speed={32} />

            {/* ── CTA ── */}
            <section className="relative py-20 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,16,46,0.04),transparent_70%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(13,36,97,0.12)] to-transparent" />

                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <motion.h2 {...fadeUp(0)} className="font-display font-700 text-[#0d2461] mb-5"
                        style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                        Questions About Our Standards?
                    </motion.h2>
                    <motion.p {...fadeUp(0.1)} className="text-[#3a4a6b] leading-relaxed mb-8">
                        Our team is happy to provide documentation, traceability records, and compliance details for any part or service.
                    </motion.p>
                    <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact"
                            className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-sm
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
                        <Link href="/solutions"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm
                         font-display font-600 tracking-[0.1em] text-sm uppercase
                         text-[#0d2461] border border-[rgba(13,36,97,0.25)]
                         hover:bg-[#0d2461]/5 transition-all duration-300">
                            Our Solutions
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}