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

const solutions = [
    {
        id: "parts", number: "01",
        title: "Parts Sales & Component Exchanges",
        img: "/images/parts1.jpg",
        bullets: ["Rotables and consumables", "Engine components and modules", "Avionics and electrical systems", "Landing gear systems", "Auxiliary Power Units (APUs)"],
        desc: "HPS Concord provides comprehensive spare parts solutions across a wide range of aircraft platforms, including fixed-wing aircraft and helicopters. We focus on minimising aircraft downtime through rapid sourcing, competitive pricing, and efficient global logistics.",
    },
    {
        id: "asset", number: "02",
        title: "Aviation Asset Management",
        img: "/images/parts2.jpg",
        bullets: ["Asset evaluation and portfolio management", "Trading of engines, landing gear, and APUs", "End-of-life asset solutions and teardown", "Inventory optimisation and remarketing"],
        desc: "Strategic asset management solutions designed to maximise value and lifecycle efficiency. We help clients make informed decisions to improve operational efficiency and financial performance.",
    },
    {
        id: "repair", number: "03",
        title: "Repair Management",
        img: "/images/parts3.jpg",
        bullets: ["Strategic sourcing of certified repair stations", "Cost optimisation via competitive negotiations", "Real-time repair tracking and visibility", "Quality assurance and regulatory compliance", "Expedited turnaround through priority channels"],
        desc: "End-to-end repair management designed to simplify complexity while maximising asset performance. Acting as a single point of contact, we manage the entire repair cycle with precision and transparency — from initial assessment to final certification.",
    },
    {
        id: "leasing", number: "04",
        title: "Aircraft & Engine Leasing and Sales",
        img: "/images/parts4.jpg",
        bullets: ["Buying, selling, leasing and trading", "Regional and commercial aviation inventory", "Expert financing guidance", "Technical advisory throughout process", "Global vendor network access"],
        desc: "Complete and professional guidance in sourcing, purchasing, and remarketing aircraft or engines. Our expert advisors have the resources to match sellers with buyers and provide technical guidance throughout the process.",
    },
    {
        id: "surplus", number: "05",
        title: "Aircraft & Surplus Inventory Purchasing",
        img: "/images/parts5.jpg",
        bullets: ["Surplus and excess inventory acquisition", "Sourcing from operators and MROs worldwide", "Extensive continuously growing inventory", "Reliable stock availability assurance"],
        desc: "HPS maintains an extensive and continuously growing inventory of aircraft parts. To support our customers, we actively purchase surplus, excess, and redundant aviation inventory from operators, maintenance facilities, and parts suppliers worldwide.",
    },
    {
        id: "jets", number: "06",
        title: "Premium Private Jets On-Demand",
        img: "/images/parts6.jpg",
        bullets: ["Anytime, anywhere — global fleet on your schedule", "Luxury interiors and personalised services", "Hourly charters, one-way, or multi-leg itineraries", "Fully certified pilots and maintained aircraft"],
        desc: "Experience the ultimate in flexible, luxury air travel. Whether it's a business trip, special occasion, or last-minute travel, our on-demand fleet provides unmatched comfort, privacy, and convenience.",
    },
    {
        id: "network", number: "07",
        title: "Global Network & Partnerships",
        img: "/images/parts7.jpg",
        bullets: ["Extensive international supplier network", "Reliable sourcing channels worldwide", "Access to hard-to-find components", "Fast turnaround times"],
        desc: "With an extensive international network of suppliers, MROs, and aviation stakeholders, HPS Concord ensures seamless service delivery across regions. Our partnerships enable reliable sourcing and competitive pricing.",
    },
];

export default function SolutionsPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/parts1.jpg" alt="" fill priority className="object-cover object-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071540]/85 via-[#071540]/75 to-[#071540]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/90 to-transparent" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#ff6b7a]">
                            <span className="w-8 h-px bg-[#c8102e]" />What We Offer
                        </span>
                        <h1 className="font-display font-700 text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                            Our<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff6b7a]">
                                Solutions
                            </span>
                        </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
            </section>

            {/* ── INTRO STRIP ── */}
            <section className="py-14 bg-[#0d2461] border-b border-white/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.p {...fadeUp(0)} className="text-white/70 text-lg leading-relaxed">
                        From individual component sourcing to full lifecycle asset management — HPS Concord delivers
                        <strong className="text-white font-medium"> end-to-end aviation solutions</strong> tailored
                        to airlines, MROs, and fleet operators worldwide.
                    </motion.p>
                </div>
            </section>

            {/* ── SOLUTIONS LIST ── */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {solutions.map((sol, i) => {
                        const even = i % 2 === 0;
                        return (
                            <div key={sol.id} id={sol.id}>
                                {/* Divider */}
                                {i > 0 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }} transition={{ duration: 1 }}
                                        className="h-px bg-gradient-to-r from-transparent via-[rgba(13,36,97,0.15)] to-transparent origin-left"
                                    />
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">

                                    {/* Image */}
                                    <motion.div {...fadeIn(0.1)}
                                        className={`relative h-72 lg:h-auto min-h-[320px] ${even ? "lg:order-1" : "lg:order-2"}`}>
                                        <Image src={sol.img} alt={sol.title} fill
                                            className="object-cover transition-transform duration-700 hover:scale-105" />
                                        {/* Gradient toward content side */}
                                        <div className={`absolute inset-0 bg-gradient-to-${even ? "r" : "l"} from-transparent to-white/60`} />

                                        {/* Big faded number */}
                                        <div className="absolute top-5 left-5">
                                            <span className="font-display font-700 text-[#0d2461]/15 leading-none select-none"
                                                style={{ fontSize: "5rem" }}>
                                                {sol.number}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div {...fadeUp(0.15)}
                                        className={`
                      relative p-8 lg:p-12 flex flex-col justify-center bg-white
                      ${even ? "lg:order-2" : "lg:order-1"}
                    `}>

                                        {/* Number + line */}
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]/60">
                                                {sol.number}
                                            </span>
                                            <span className="flex-1 h-px bg-[rgba(13,36,97,0.10)]" />
                                        </div>

                                        <h2 className="font-display font-700 text-[#0d2461] mb-4"
                                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)" }}>
                                            {sol.title}
                                        </h2>

                                        <p className="text-[#3a4a6b] text-sm leading-relaxed mb-6">{sol.desc}</p>

                                        {/* Bullets */}
                                        <ul className="space-y-2 mb-8">
                                            {sol.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2.5 text-sm text-[#3a4a6b]">
                                                    <svg className="w-3.5 h-3.5 text-[#c8102e] mt-0.5 shrink-0"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href="/contact"
                                            className="self-start inline-flex items-center gap-2 font-display text-xs
                                 tracking-[0.12em] uppercase text-[#c8102e] hover:text-[#a00d24]
                                 transition-colors group">
                                            Enquire Now
                                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ── BRAND SLIDER ── */}
            <GallerySlider showLabel speed={30} />

            {/* ── CTA ── */}
            <section className="relative py-20 overflow-hidden bg-[#f4f6fb]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,16,46,0.05),transparent_70%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(13,36,97,0.15)] to-transparent" />

                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <motion.h2 {...fadeUp(0)} className="font-display font-700 text-[#0d2461] mb-5"
                        style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                        Need a Custom Solution?
                    </motion.h2>
                    <motion.p {...fadeUp(0.1)} className="text-[#3a4a6b] leading-relaxed mb-8">
                        Every operator is different. Our team will work with you to build the right package.
                    </motion.p>
                    <motion.div {...fadeUp(0.2)}>
                        <Link href="/contact"
                            className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-sm
                         font-display font-600 tracking-[0.1em] text-sm uppercase
                         text-white bg-[#c8102e] hover:bg-[#a00d24]
                         shadow-[0_2px_24px_rgba(200,16,46,0.35)]
                         hover:shadow-[0_4px_36px_rgba(200,16,46,0.50)]
                         transition-all duration-300 overflow-hidden group">
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                               transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            Get in Touch
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}