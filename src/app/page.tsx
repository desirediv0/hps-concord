"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GallerySlider from "@/components/GallerySlider";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

const solutions = [
  { title: "Parts Sales & Exchanges", desc: "Rotables, consumables, avionics, APUs — rapid sourcing across fixed-wing and rotary platforms.", img: "/images/parts1.jpg", href: "/solutions#parts" },
  { title: "Aviation Asset Management", desc: "Strategic portfolio management, trading of engines, landing gear and end-of-life asset solutions.", img: "/images/parts2.jpg", href: "/solutions#asset" },
  { title: "Repair Management", desc: "End-to-end repair cycle — single point of contact from initial assessment to return-to-service.", img: "/images/parts3.jpg", href: "/solutions#repair" },
  { title: "Aircraft & Engine Leasing", desc: "Buy, sell, lease or trade with confidence. Expert guidance across regional and commercial aviation.", img: "/images/parts4.jpg", href: "/solutions#leasing" },
  { title: "Surplus Inventory", desc: "We actively purchase surplus and excess aviation inventory from operators and MROs worldwide.", img: "/images/parts5.jpg", href: "/solutions#surplus" },
  { title: "Global Network", desc: "Extensive international MRO partnerships enabling fast turnaround, hard-to-find parts, and competitive pricing.", img: "/images/parts7.jpg", href: "/solutions#network" },
];

const stats = [
  { value: "2015", label: "Year Founded" },
  { value: "9+", label: "OEM Platforms" },
  { value: "100+", label: "Global Partners" },
  { value: "ISO", label: "9001:2015 Certified" },
];

const whyUs = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    title: "Rapid AOG Response",
    desc: "Every hour of downtime costs airlines thousands. Our global inventory network and expedited logistics minimise aircraft-on-ground time so you're back in the sky faster.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    title: "Certified & Traceable",
    desc: "ISO 9001:2015 certified and an ASA member. Every component carries full documentation — airworthiness tags, 8130-3s, and COCs — fully traceable to origin.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>,
    title: "True Global Reach",
    desc: "Headquartered in Mauritius with an international network spanning 4 continents. We serve scheduled carriers, regional operators, charter fleets, and MRO facilities worldwide.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" /></svg>,
    title: "Optimised Pricing",
    desc: "Strategic vendor relationships, competitive repair negotiations, and smart procurement — market-leading value without compromising on quality or compliance.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <>
      {/* ══════════ 1. HERO ══════════ */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image src="/images/space-shuttle.jpg" alt="Aviation" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/97 via-[#071540]/85 to-[#071540]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071540] via-transparent to-[#071540]/20" />
        </motion.div>

        <div className="absolute inset-0 z-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c8102e]/70 to-transparent hidden xl:block" />

        <motion.div style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 w-full">
          <div className="max-w-3xl">

            <motion.div {...fadeIn(0.15)} className="mb-7">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm
                               border border-[rgba(200,16,46,0.45)] bg-[#c8102e]/10
                               font-display text-[11px] tracking-[0.22em] uppercase text-[#ff8a96]">
                <span className="w-2 h-2 rounded-full bg-[#c8102e] animate-pulse shrink-0" />
                Global Aviation Solutions &nbsp;·&nbsp; Since 2015
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-700 leading-[1.02] text-white mb-7"
              style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}>
              Your Wings,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] via-[#e8304a] to-[#ff7a8a]">
                Our Passion
              </span>
            </motion.h1>

            <motion.p {...fadeIn(0.5)} className="text-white/75 leading-[1.85] mb-4 max-w-2xl"
              style={{ fontSize: "clamp(1rem,2vw,1.2rem)" }}>
              HPS Concord is a leading global aftermarket aircraft parts supplier — delivering
              comprehensive Airbus, Boeing, and multi-platform aviation solutions to airlines,
              MROs, and fleet operators worldwide.
            </motion.p>

            <motion.p {...fadeIn(0.6)} className="text-white/45 text-sm leading-relaxed mb-11 max-w-xl">
              ISO 9001:2015 Certified &nbsp;·&nbsp; ASA Member &nbsp;·&nbsp; Mauritius Headquartered &nbsp;·&nbsp; 4-Continent Reach
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }} className="flex flex-wrap gap-4">
              <Link href="/solutions"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-sm
                           font-display font-600 tracking-[0.1em] text-sm uppercase
                           text-white bg-[#c8102e] hover:bg-[#a00d24]
                           shadow-[0_0_40px_rgba(200,16,46,0.45)]
                           hover:shadow-[0_0_60px_rgba(200,16,46,0.65)]
                           transition-all duration-300 overflow-hidden group">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                Explore Solutions
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm
                           font-display font-600 tracking-[0.1em] text-sm uppercase
                           text-white border-2 border-white/30
                           hover:bg-white/10 hover:border-white/55
                           transition-all duration-300">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-display text-[9px] tracking-[0.25em] uppercase text-white/25">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
        </motion.div>
      </section>


      {/* ══════════ 2. STATS BAR ══════════ */}
      <section className="relative bg-[#0d2461] py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(200,16,46,0.18),transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.1)}
                className="flex flex-col items-center text-center gap-2 px-6 py-2
                           border-r border-white/10 last:border-r-0
                           [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r
                           [&:nth-child(3)]:border-r-0 md:[&:nth-child(3)]:border-r">
                <span className="font-display font-700 text-white leading-none"
                  style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
                  {stat.value}
                </span>
                <span className="font-display text-[10px] tracking-[0.2em] uppercase text-white/40 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════ 3. ABOUT ══════════ */}
      <section className="relative py-28 overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#c8102e]/4 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 mb-5 font-display text-[11px] tracking-[0.22em] uppercase text-[#c8102e]">
                  <span className="w-10 h-px bg-[#c8102e]" />Who We Are
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                A Global Force in<br />
                <span className="text-[#c8102e]">Aviation Supply</span>
              </motion.h2>

              <div className="w-16 h-1 bg-gradient-to-r from-[#0d2461] to-[#c8102e] rounded-full my-7" />

              <motion.p {...fadeUp(0.2)} className="text-[#3a4a6b] leading-[1.9] mb-5 text-[0.95rem]">
                <strong className="text-[#0d2461] font-semibold">HPS Concord Limited</strong>, founded in
                early 2015, has rapidly grown into a leading global aftermarket parts supplier serving
                airlines, MROs, and fleet operators across four continents.
              </motion.p>
              <motion.p {...fadeUp(0.28)} className="text-[#3a4a6b] leading-[1.9] mb-10 text-[0.95rem]">
                We deliver comprehensive commercial aircraft and engine solutions for Airbus, Boeing, and
                other major platforms — helping operators maximise reliability, efficiency, and financial
                performance through innovative, value-added supply chain solutions.
              </motion.p>

              {/* Mini stats row */}
              <motion.div {...fadeUp(0.35)}
                className="grid grid-cols-3 gap-0 mb-10 rounded-sm overflow-hidden border border-[rgba(13,36,97,0.10)]">
                {[{ v: "9+", l: "Platforms" }, { v: "100+", l: "Partners" }, { v: "10yr", l: "Experience" }].map((s, si) => (
                  <div key={s.l} className={`text-center py-5 px-3 ${si < 2 ? "border-r border-[rgba(13,36,97,0.10)]" : ""}`}>
                    <p className="font-display font-700 text-[#c8102e] leading-none mb-1.5"
                      style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>{s.v}</p>
                    <p className="font-display text-[10px] tracking-[0.15em] uppercase text-[#7a8aaa]">{s.l}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.4)}>
                <Link href="/about"
                  className="inline-flex items-center gap-2.5 font-display text-sm tracking-[0.12em]
                             uppercase text-[#c8102e] hover:text-[#a00d24] transition-colors group font-600">
                  Our Full Story
                  <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div {...fadeIn(0.2)} className="relative h-[480px] lg:h-[540px]">
              <div className="absolute left-0 top-0 w-[67%] h-[74%] rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)] shadow-[0_24px_72px_rgba(13,36,97,0.18)]">
                <Image src="/images/earth.jpg" alt="Aviation" fill className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[56%] h-[57%] rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)] shadow-[0_24px_72px_rgba(13,36,97,0.22)]">
                <Image src="/images/astronaut.jpg" alt="Aviation team" fill className="object-cover" />
              </div>
              <div className="absolute top-[71%] left-[63%] w-14 h-14 border-b-2 border-r-2 border-[#0d2461]/20" />
              <div className="absolute -top-1 left-[65%] w-10 h-10 border-t-2 border-l-2 border-[#c8102e]/35" />

              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 bottom-[29%] z-10 bg-white rounded-sm px-5 py-4
                           border border-[rgba(13,36,97,0.12)] shadow-[0_12px_40px_rgba(13,36,97,0.18)]">
                <div className="h-[3px] bg-gradient-to-r from-[#0d2461] to-[#c8102e] -mx-5 -mt-4 mb-3 rounded-t-sm" />
                <p className="font-display text-[9px] tracking-[0.2em] uppercase text-[#c8102e] mb-0.5">Established</p>
                <p className="font-display font-700 text-[#0d2461] leading-none" style={{ fontSize: "2.2rem" }}>2015</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════ 4. SOLUTIONS GRID ══════════ */}
      <section className="relative py-28 bg-[#f4f6fb]">
        <div className="absolute inset-0 opacity-[0.045]"
          style={{ backgroundImage: "radial-gradient(#0d2461 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 mb-4 font-display text-[11px] tracking-[0.22em] uppercase text-[#c8102e]">
                  <span className="w-10 h-px bg-[#c8102e]" />What We Offer
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Comprehensive Aviation<br />Solutions
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.2)}>
              <Link href="/solutions"
                className="inline-flex items-center gap-2 font-display text-xs tracking-[0.14em]
                           uppercase text-[#0d2461] border-2 border-[rgba(13,36,97,0.22)]
                           px-5 py-3 rounded-sm hover:bg-[#0d2461] hover:text-white
                           transition-all duration-300 font-600">
                View All Solutions
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title} {...fadeUp(i * 0.08)}>
                <Link href={sol.href} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-sm bg-white
                                  border border-[rgba(13,36,97,0.08)]
                                  hover:border-[rgba(200,16,46,0.35)]
                                  hover:shadow-[0_12px_48px_rgba(13,36,97,0.14)]
                                  transition-all duration-500 flex flex-col">
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <Image src={sol.img} alt={sol.title} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-white/95
                                      flex items-center justify-center shadow-md
                                      group-hover:bg-[#c8102e] transition-colors duration-300">
                        <span className="font-display text-[11px] font-700 text-[#c8102e] group-hover:text-white transition-colors duration-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-display font-700 text-[#0d2461] text-[1.05rem] mb-3 leading-snug
                                     group-hover:text-[#c8102e] transition-colors duration-300">
                        {sol.title}
                      </h3>
                      <p className="text-[#3a4a6b] text-sm leading-[1.85] flex-1">{sol.desc}</p>
                      <div className="mt-5 flex items-center gap-2 font-display text-xs tracking-[0.14em]
                                      uppercase text-[#c8102e]/45 group-hover:text-[#c8102e]
                                      transition-colors duration-300 font-600">
                        <span>Learn more</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[3px]
                                    bg-gradient-to-r from-[#0d2461] via-[#c8102e] to-[#0d2461]
                                    scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════ 5. BRAND SLIDER ══════════ */}
      <GallerySlider showLabel speed={32} />


      {/* ══════════ 6. WHY CHOOSE US ══════════ */}
      <section className="relative py-28 overflow-hidden bg-white">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]
                        bg-[#c8102e]/4 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div {...fadeIn(0.1)} className="relative h-[460px] order-2 lg:order-1">
              <div className="absolute inset-0 rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)]
                              shadow-[0_24px_72px_rgba(13,36,97,0.18)]">
                <Image src="/images/spacecraft-small.jpg" alt="Aircraft" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d2461]/35 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#c8102e]/50" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#0d2461]/35" />

              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 bottom-8 bg-white border border-[rgba(13,36,97,0.12)]
                           rounded-sm px-4 py-3 shadow-[0_8px_32px_rgba(13,36,97,0.15)]">
                <div className="h-[2px] bg-gradient-to-r from-[#0d2461] to-[#c8102e] -mx-4 -mt-3 mb-2 rounded-t-sm" />
                <p className="font-display text-[9px] tracking-[0.18em] uppercase text-[#c8102e]">Certified</p>
                <p className="font-display font-700 text-[#0d2461] text-sm mt-0.5">ISO 9001:2015</p>
              </motion.div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 mb-5 font-display text-[11px] tracking-[0.22em] uppercase text-[#c8102e]">
                  <span className="w-10 h-px bg-[#c8102e]" />Why Choose Us
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Built for the Demands<br />
                <span className="text-[#c8102e]">of Modern Aviation</span>
              </motion.h2>

              <div className="w-16 h-1 bg-gradient-to-r from-[#0d2461] to-[#c8102e] rounded-full my-8" />

              <div className="space-y-8">
                {whyUs.map((item, i) => (
                  <motion.div key={item.title} {...fadeUp(0.1 + i * 0.1)} className="flex gap-5 group">
                    <div className="shrink-0 w-12 h-12 rounded-sm border border-[rgba(13,36,97,0.12)]
                                    bg-[#f4f6fb] flex items-center justify-center text-[#0d2461]
                                    group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e]
                                    group-hover:shadow-[0_4px_16px_rgba(200,16,46,0.30)]
                                    transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-700 text-[#0d2461] text-base mb-2
                                     group-hover:text-[#c8102e] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#3a4a6b] text-sm leading-[1.85]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp(0.55)} className="mt-10">
                <Link href="/about"
                  className="inline-flex items-center gap-2.5 font-display text-sm tracking-[0.12em]
                             uppercase text-[#0d2461] hover:text-[#c8102e] transition-colors group font-600">
                  More About HPS Concord
                  <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ 7. CTA BANNER ══════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/space-shuttle.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/98 via-[#071540]/92 to-[#071540]/98" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,16,46,0.14),transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8102e]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-3 mb-8 font-display text-[11px]
                             tracking-[0.22em] uppercase text-[#ff8a96]">
              <span className="w-10 h-px bg-[#c8102e]" />Ready to Get Started
              <span className="w-10 h-px bg-[#c8102e]" />
            </span>
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.2rem,5.5vw,4.2rem)" }}>
            Ready to Elevate Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] via-[#e8304a] to-[#ff7a8a]">
              Aviation Operations?
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.22)} className="text-white/65 leading-[1.9] mb-12 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem,1.8vw,1.15rem)" }}>
            Partner with HPS Concord for certified parts, competitive pricing, and deep aviation
            expertise — backed by ISO 9001:2015 and ASA membership.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-5">
            <Link href="/contact"
              className="relative inline-flex items-center gap-3 px-10 py-[1.1rem] rounded-sm
                         font-display font-700 tracking-[0.12em] text-sm uppercase
                         text-white bg-[#c8102e] hover:bg-[#a00d24]
                         shadow-[0_0_50px_rgba(200,16,46,0.45)]
                         hover:shadow-[0_0_70px_rgba(200,16,46,0.65)]
                         transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                               transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              Contact Us Today
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/quality"
              className="inline-flex items-center gap-3 px-10 py-[1.1rem] rounded-sm
                         font-display font-600 tracking-[0.12em] text-sm uppercase
                         text-white border-2 border-white/30
                         hover:bg-white/10 hover:border-white/55
                         transition-all duration-300">
              Our Certifications
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}