"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const contactCards = [
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" /></svg>,
        label: "Email Us",
        value: "sales@hpsconcord.com",
        sub: "We respond within 24 hours",
        href: "mailto:sales@hpsconcord.com",
        cta: "Send Email",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
        label: "Visit Us",
        value: "3rd Floor Hennessy Court",
        sub: "Corner Suffren Rd, Pope Hennessy St, Port Louis, Mauritius 11302",
        href: "https://maps.google.com/?q=Port+Louis+Mauritius",
        cta: "View on Map",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>,
        label: "Global Operations",
        value: "Worldwide Coverage",
        sub: "Serving airlines, MROs and fleet operators across every major aviation region",
        href: null,
        cta: null,
    },
];

const subjects = [
    "Parts Sourcing Request", "Asset Management Enquiry", "Repair Management",
    "Aircraft / Engine Leasing", "Surplus Inventory", "Private Jet Charter",
    "Partnership Opportunity", "General Enquiry",
];

type FormState = { name: string; email: string; company: string; subject: string; message: string; };

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1400));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/astronaut.jpg" alt="" fill priority className="object-cover object-center opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071540]/85 via-[#071540]/75 to-[#071540]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/90 to-transparent" />
                </div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#ff6b7a]">
                            <span className="w-8 h-px bg-[#c8102e]" />Reach Out
                        </span>
                        <h1 className="font-display font-700 text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                            Contact<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff6b7a]">
                                HPS Concord
                            </span>
                        </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
            </section>

            {/* ── CONTACT CARDS ── */}
            <section className="py-20 bg-[#f4f6fb] border-b border-[rgba(13,36,97,0.07)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactCards.map((card, i) => (
                            <motion.div key={card.label} {...fadeUp(i * 0.1)}
                                className="group relative p-7 rounded-sm bg-white
                           border border-[rgba(13,36,97,0.08)]
                           hover:border-[rgba(200,16,46,0.30)]
                           hover:shadow-[0_8px_32px_rgba(13,36,97,0.10)]
                           transition-all duration-500 flex flex-col gap-4">

                                {/* Top red accent on hover */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm
                                bg-gradient-to-r from-transparent via-[#c8102e] to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-11 h-11 rounded-sm border border-[rgba(13,36,97,0.12)]
                                bg-[#f4f6fb] flex items-center justify-center text-[#0d2461]
                                group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e]
                                transition-all duration-300">
                                    {card.icon}
                                </div>

                                <div className="flex-1">
                                    <p className="font-display text-[10px] tracking-[0.18em] uppercase text-[#c8102e]/70 mb-1">
                                        {card.label}
                                    </p>
                                    <p className="font-display font-600 text-[#0d2461] text-base mb-1">{card.value}</p>
                                    <p className="text-[#3a4a6b] text-sm leading-relaxed">{card.sub}</p>
                                </div>

                                {card.href && card.cta && (
                                    <a href={card.href} target="_blank" rel="noreferrer"
                                        className="inline-flex items-center gap-2 font-display text-xs tracking-[0.12em]
                               uppercase text-[#c8102e] hover:text-[#a00d24] transition-colors group/link">
                                        {card.cta}
                                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORM + SIDE INFO ── */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,16,46,0.03),transparent_60%)]" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                        {/* LEFT info panel */}
                        <motion.div {...fadeUp(0)} className="lg:col-span-2 space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]">
                                    <span className="w-8 h-px bg-[#c8102e]" />Head Office
                                </span>
                                <h2 className="font-display font-700 text-[#0d2461] mb-2"
                                    style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
                                    HPS Concord Limited
                                </h2>
                                <address className="not-italic text-[#3a4a6b] text-sm leading-relaxed">
                                    3rd Floor Hennessy Court,<br />
                                    Corner Suffren Rd,<br />
                                    Pope Hennessy St, Port Louis,<br />
                                    Mauritius 11302
                                </address>
                            </div>

                            {/* Email card */}
                            <div className="flex items-center gap-3 p-4 rounded-sm bg-[#f4f6fb]
                              border border-[rgba(13,36,97,0.10)]">
                                <div className="w-9 h-9 rounded-sm bg-[#c8102e]/8 border border-[rgba(200,16,46,0.20)]
                                flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display text-[9px] tracking-[0.15em] uppercase text-[#c8102e]/60 mb-0.5">Email</p>
                                    <a href="mailto:sales@hpsconcord.com"
                                        className="text-[#c8102e] hover:text-[#a00d24] text-sm transition-colors">
                                        sales@hpsconcord.com
                                    </a>
                                </div>
                            </div>

                            {/* SLA table */}
                            <div className="space-y-0">
                                {[
                                    { label: "General Enquiries", sla: "Within 24 hours" },
                                    { label: "Parts Requests", sla: "Within 4–8 hours" },
                                    { label: "AOG Support", sla: "Immediate" },
                                ].map((item) => (
                                    <div key={item.label}
                                        className="flex items-center justify-between py-3 border-b border-[rgba(13,36,97,0.07)]">
                                        <span className="text-[#3a4a6b] text-sm">{item.label}</span>
                                        <span className="font-display text-xs tracking-wide text-[#c8102e] font-600">{item.sla}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Cert badges */}
                            <div className="flex items-center gap-3 flex-wrap">
                                {["ISO 9001:2015", "ASA Member"].map((c) => (
                                    <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm
                                           border border-[rgba(13,36,97,0.15)] bg-[#f4f6fb]
                                           font-display text-[10px] tracking-[0.15em] uppercase text-[#0d2461]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT form */}
                        <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-center py-20 px-8 rounded-sm bg-white
                             border border-[rgba(13,36,97,0.10)]
                             shadow-[0_8px_40px_rgba(13,36,97,0.10)]">
                                    <div className="w-16 h-16 rounded-sm bg-[#c8102e]/8 border border-[#c8102e]/25
                                  flex items-center justify-center mx-auto mb-5">
                                        <svg className="w-7 h-7 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display font-700 text-[#0d2461] text-xl mb-2">Message Received!</h3>
                                    <p className="text-[#3a4a6b] text-sm">
                                        Thank you, <strong className="text-[#0d2461]">{form.name}</strong>.<br />
                                        We&apos;ll respond to <strong className="text-[#c8102e]">{form.email}</strong> shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="bg-white border border-[rgba(13,36,97,0.10)] rounded-sm
                               shadow-[0_8px_40px_rgba(13,36,97,0.10)] overflow-hidden">
                                    {/* Top accent */}
                                    <div className="h-[3px] bg-gradient-to-r from-[#0d2461] via-[#c8102e] to-[#0d2461]" />

                                    <div className="p-8 md:p-10 space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <Field label="Full Name" required>
                                                <input name="name" type="text" placeholder="John Smith"
                                                    value={form.name} onChange={handleChange} className={inputCls} />
                                            </Field>
                                            <Field label="Email Address" required>
                                                <input name="email" type="email" placeholder="john@airline.com"
                                                    value={form.email} onChange={handleChange} className={inputCls} />
                                            </Field>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <Field label="Company">
                                                <input name="company" type="text" placeholder="Airline / MRO"
                                                    value={form.company} onChange={handleChange} className={inputCls} />
                                            </Field>
                                            <Field label="Subject">
                                                <select name="subject" value={form.subject} onChange={handleChange}
                                                    className={inputCls + " appearance-none cursor-pointer"}>
                                                    <option value="" disabled>Select…</option>
                                                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </Field>
                                        </div>

                                        <Field label="Your Message" required>
                                            <textarea name="message" rows={6}
                                                placeholder="Describe your requirement — part numbers, aircraft type, quantity, urgency…"
                                                value={form.message} onChange={handleChange}
                                                className={inputCls + " resize-none"} />
                                        </Field>

                                        <button onClick={handleSubmit}
                                            disabled={!form.name || !form.email || !form.message || loading}
                                            className="relative w-full py-4 rounded-sm
                                 font-display font-600 tracking-[0.12em] text-sm uppercase
                                 text-white bg-[#c8102e] hover:bg-[#a00d24]
                                 shadow-[0_2px_20px_rgba(200,16,46,0.30)]
                                 hover:shadow-[0_4px_30px_rgba(200,16,46,0.45)]
                                 transition-all duration-300 overflow-hidden group
                                 disabled:opacity-40 disabled:cursor-not-allowed">
                                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                       transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                            {loading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                    </svg>
                                                    Sending…
                                                </span>
                                            ) : "Send Message"}
                                        </button>

                                        <p className="text-center text-[#7a8aaa] text-xs">
                                            Your information is kept confidential and never shared with third parties.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MAP ── */}
            <section className="relative h-72 md:h-96 overflow-hidden border-t border-[rgba(13,36,97,0.08)]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.3!2d57.4989!3d-20.1617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c51344c7c2a1b%3A0x1a!2sPort%20Louis%2C%20Mauritius!5e0!3m2!1sen!2sus!4v1699000000000"
                    width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full opacity-80"
                    style={{ border: 0, filter: "saturate(0.4) brightness(0.95)" }}
                    title="HPS Concord Location"
                />
                {/* Address pin overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="bg-white/95 backdrop-blur-sm border border-[rgba(13,36,97,0.15)]
                       rounded-sm px-5 py-3 shadow-[0_8px_40px_rgba(13,36,97,0.20)]">
                        {/* Red top bar */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm bg-[#c8102e]" />
                        <p className="font-display text-[9px] tracking-[0.18em] uppercase text-[#c8102e] mb-1">Head Office</p>
                        <p className="text-[#0d2461] text-sm font-display font-600">Port Louis, Mauritius</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

/* ── helpers ── */
const inputCls = `
  w-full bg-[#f4f6fb] border border-[rgba(13,36,97,0.12)] rounded-sm
  px-4 py-3 text-sm text-[#0d2461] placeholder-[#7a8aaa]
  focus:outline-none focus:bg-white focus:border-[#c8102e]
  focus:shadow-[0_0_0_3px_rgba(200,16,46,0.08)]
  transition-all duration-200
`;

function Field({ label, required, children }: {
    label: string; required?: boolean; children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="font-display text-[11px] tracking-[0.12em] uppercase text-[#7a8aaa]">
                {label}{required && <span className="text-[#c8102e] ml-1">*</span>}
            </label>
            {children}
        </div>
    );
}