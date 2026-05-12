"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Solutions", href: "/solutions" },
    { label: "Quality & Certifications", href: "/quality" },
    { label: "Work With Us", href: "/work-with-us" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-400
          ${scrolled
                        ? "bg-white/95 backdrop-blur-lg shadow-[0_2px_24px_rgba(13,36,97,0.10)] border-b border-[rgba(13,36,97,0.08)]"
                        : "bg-white border-b border-[rgba(13,36,97,0.06)]"
                    }
        `}
            >
                {/* Red top accent line */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#0d2461] via-[#c8102e] to-[#0d2461]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* ── LOGO ── */}
                        <Link href="/" className="relative flex items-center">
                            <div className="relative w-[160px] h-[52px] md:w-[180px] md:h-[58px]">
                                <Image
                                    src="/images/logohps1.jpg"
                                    alt="HPS Concord Ltd"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* ── DESKTOP NAV ── */}
                        <nav className="hidden lg:flex items-center gap-0.5">
                            {navLinks.map((link, i) => {
                                const active = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`
                        relative px-3.5 py-2 text-[13px] font-medium tracking-wide
                        transition-colors duration-200 group
                        ${active
                                                    ? "text-[#c8102e]"
                                                    : "text-[#0d2461] hover:text-[#c8102e]"
                                                }
                      `}
                                        >
                                            <span className="absolute inset-0 rounded-md bg-[#c8102e]/0 group-hover:bg-[#c8102e]/5 transition-all duration-300" />
                                            {link.label}
                                            {active && (
                                                <motion.span
                                                    layoutId="nav-underline"
                                                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#c8102e]"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="ml-3"
                            >
                                <Link
                                    href="/contact"
                                    className="
                    relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm
                    font-display font-600 tracking-[0.08em] text-[12px] uppercase
                    text-white bg-[#c8102e]
                    hover:bg-[#a00d24] transition-colors duration-200
                    shadow-[0_2px_12px_rgba(200,16,46,0.30)]
                    hover:shadow-[0_4px_20px_rgba(200,16,46,0.40)]
                    overflow-hidden group
                  "
                                >
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                   transition-transform duration-600 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </nav>

                        {/* ── HAMBURGER ── */}
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
                            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]">
                            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-[2px] bg-[#0d2461] rounded-full block origin-center" />
                            <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-4 h-[2px] bg-[#c8102e] rounded-full block self-start ml-1" />
                            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-[2px] bg-[#0d2461] rounded-full block origin-center" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* ── MOBILE MENU ── */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div key="bd"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-[#0d2461]/20 backdrop-blur-sm lg:hidden" />

                        <motion.div key="menu"
                            initial={{ opacity: 0, y: -16, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -16, scaleY: 0.95 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-[67px] left-0 right-0 z-40 lg:hidden
                         bg-white border-b border-[rgba(13,36,97,0.10)]
                         shadow-[0_12px_40px_rgba(13,36,97,0.15)] origin-top"
                        >
                            <nav className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-1">
                                {navLinks.map((link, i) => {
                                    const active = pathname === link.href;
                                    return (
                                        <motion.div key={link.href}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}>
                                            <Link href={link.href}
                                                className={`
                          flex items-center gap-3 px-4 py-3 rounded-sm text-[14px] font-medium
                          transition-all duration-200
                          ${active
                                                        ? "text-[#c8102e] bg-[#c8102e]/6 border-l-2 border-[#c8102e]"
                                                        : "text-[#0d2461] hover:text-[#c8102e] hover:bg-[#c8102e]/4 border-l-2 border-transparent"
                                                    }
                        `}>
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    transition={{ delay: 0.35 }} className="mt-2 pb-3">
                                    <Link href="/contact"
                                        className="block text-center py-3 px-6 rounded-sm
                               font-display font-600 tracking-[0.08em] uppercase text-sm
                               text-white bg-[#c8102e] shadow-[0_2px_12px_rgba(200,16,46,0.3)]">
                                        Get in Touch
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="h-[67px] md:h-[83px]" />
        </>
    );
}