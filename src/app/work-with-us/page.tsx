"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import GallerySlider from "@/components/GallerySlider";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const reasons = [
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
        title: "Dedicated Team",
        desc: "A specialised team committed to understanding your needs and delivering results that go beyond expectations.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Fast Response",
        desc: "AOG doesn't wait. Neither do we. Expect rapid acknowledgment and proactive communication on every request.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
        title: "Expert Guidance",
        desc: "Deep industry knowledge across platforms, regulations, and supply chains — guiding every decision.",
    },
    {
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
        title: "Proven Track Record",
        desc: "ISO certified, ASA member — with years of successful partnerships across airlines and MROs worldwide.",
    },
];

const subjects = [
    "Parts Sourcing Request",
    "Asset Management Enquiry",
    "Repair Management",
    "Aircraft / Engine Leasing",
    "Surplus Inventory",
    "Private Jet Charter",
    "Partnership Opportunity",
    "General Enquiry",
];

type FormState = {
    name: string; email: string; company: string;
    subject: string; message: string; agree: boolean; newsletter: boolean;
};

export default function WorkWithUsPage() {
    const [form, setForm] = useState<FormState>({
        name: "", email: "", company: "", subject: "", message: "", agree: false, newsletter: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.type === "checkbox" ? target.checked : target.value;
        setForm((prev) => ({ ...prev, [target.name]: value }));
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!form.agree) return;
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
                    <Image src="/images/earth.jpg" alt="" fill priority className="object-cover object-center opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071540]/85 via-[#071540]/75 to-[#071540]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/90 to-transparent" />
                </div>
                {/* White grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#ff6b7a]">
                            <span className="w-8 h-px bg-[#c8102e]" />Partner With Us
                        </span>
                        <h1 className="font-display font-700 text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                            Work<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff6b7a]">
                                With Us
                            </span>
                        </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent" />
            </section>

            {/* ── WHY WORK WITH US ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Text */}
                        <div>
                            <motion.div {...fadeUp(0)}>
                                <span className="inline-flex items-center gap-2 mb-4 font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]">
                                    <span className="w-8 h-px bg-[#c8102e]" />Why Partner With HPS
                                </span>
                            </motion.div>
                            <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461] mb-6"
                                style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                                Great Work Happens Through<br />
                                <span className="text-[#c8102e]">Strong Partnerships</span>
                            </motion.h2>
                            <motion.p {...fadeUp(0.2)} className="text-[#3a4a6b] leading-relaxed mb-8">
                                When you choose to work with us, you&apos;re not just hiring a service — you&apos;re gaining a
                                dedicated team committed to your success. We combine expertise, creativity, and a
                                client-first approach to deliver results that truly matter.
                            </motion.p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {reasons.map((r, i) => (
                                    <motion.div key={r.title} {...fadeUp(0.15 + i * 0.08)}
                                        className="group flex gap-3 p-4 rounded-sm bg-[#f4f6fb]
                               border border-[rgba(13,36,97,0.08)]
                               hover:border-[rgba(200,16,46,0.25)]
                               hover:bg-white hover:shadow-[0_4px_20px_rgba(13,36,97,0.08)]
                               transition-all duration-300">
                                        <div className="shrink-0 w-9 h-9 rounded-sm border border-[rgba(13,36,97,0.12)]
                                    bg-white flex items-center justify-center text-[#0d2461]
                                    group-hover:bg-[#c8102e] group-hover:text-white group-hover:border-[#c8102e]
                                    transition-all duration-300">
                                            {r.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-display font-600 text-[#0d2461] text-sm mb-1">{r.title}</h4>
                                            <p className="text-[#3a4a6b] text-xs leading-relaxed">{r.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[460px]">
                            <div className="absolute inset-0 rounded-sm overflow-hidden
                              border border-[rgba(13,36,97,0.10)]
                              shadow-[0_24px_80px_rgba(13,36,97,0.18)]">
                                <Image src="/images/why-choose.jpg" alt="" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/40 to-transparent" />
                            </div>
                            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#c8102e]/40" />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#0d2461]/30" />

                            {/* Floating badge */}
                            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-5 top-5 bg-white shadow-[0_8px_32px_rgba(13,36,97,0.18)]
                           border border-[rgba(13,36,97,0.10)] rounded-sm px-4 py-3">
                                <p className="font-display text-[9px] tracking-[0.15em] uppercase text-[#c8102e]">Partners</p>
                                <p className="font-display font-700 text-[#0d2461] text-2xl leading-none mt-0.5">100+</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="relative py-24 overflow-hidden bg-[#f4f6fb]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,16,46,0.04),transparent_60%)]" />
                <div className="relative max-w-3xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-2 mb-3 font-display text-[10px] tracking-[0.2em] uppercase text-[#c8102e]">
                                <span className="w-8 h-px bg-[#c8102e]" />Send Us a Message
                                <span className="w-8 h-px bg-[#c8102e]" />
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="font-display font-700 text-[#0d2461]"
                            style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)" }}>
                            Let&apos;s Start a Conversation
                        </motion.h2>
                    </div>

                    {submitted ? (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center py-16 px-8 rounded-sm bg-white
                         border border-[rgba(13,36,97,0.10)]
                         shadow-[0_8px_40px_rgba(13,36,97,0.12)]">
                            <div className="w-16 h-16 rounded-sm bg-[#c8102e]/8 border border-[#c8102e]/25
                              flex items-center justify-center mx-auto mb-5">
                                <svg className="w-7 h-7 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="font-display font-700 text-[#0d2461] text-xl mb-2">Message Sent!</h3>
                            <p className="text-[#3a4a6b] text-sm">
                                We&apos;ll get back to you at <strong className="text-[#c8102e]">{form.email}</strong> shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div {...fadeUp(0.15)}
                            className="bg-white border border-[rgba(13,36,97,0.10)] rounded-sm
                         shadow-[0_8px_40px_rgba(13,36,97,0.12)] overflow-hidden">

                            {/* Red top accent */}
                            <div className="h-[3px] bg-gradient-to-r from-[#0d2461] via-[#c8102e] to-[#0d2461]" />

                            <div className="p-8 md:p-10 space-y-6">
                                {/* Row 1 */}
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

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Field label="Company / Organisation">
                                        <input name="company" type="text" placeholder="Airline / MRO Name"
                                            value={form.company} onChange={handleChange} className={inputCls} />
                                    </Field>
                                    <Field label="Subject" required>
                                        <select name="subject" value={form.subject} onChange={handleChange}
                                            className={inputCls + " appearance-none cursor-pointer"}>
                                            <option value="" disabled>Select a subject</option>
                                            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </Field>
                                </div>

                                {/* Message */}
                                <Field label="Message" required>
                                    <textarea name="message" rows={5} placeholder="Tell us about your requirements..."
                                        value={form.message} onChange={handleChange}
                                        className={inputCls + " resize-none"} />
                                </Field>

                                {/* Checkboxes */}
                                <div className="space-y-3 pt-1">
                                    <CheckField id="agree" name="agree" checked={form.agree}
                                        onChange={handleChange} label="I agree to the Terms and Conditions" />
                                    <CheckField id="newsletter" name="newsletter" checked={form.newsletter}
                                        onChange={handleChange} label="Subscribe to HPS Concord newsletter" />
                                </div>

                                {/* Submit */}
                                <button onClick={handleSubmit} disabled={!form.agree || loading}
                                    className="relative w-full py-4 rounded-sm mt-2
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
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ── BRAND SLIDER ── */}
            {/* <GallerySlider showLabel speed={32} /> */}
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

function CheckField({ id, name, checked, onChange, label }: {
    id: string; name: string; checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; label: string;
}) {
    return (
        <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 shrink-0">
                <input id={id} name={name} type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
                <div className={`w-4 h-4 rounded-sm border transition-all duration-200
          ${checked
                        ? "bg-[#c8102e] border-[#c8102e] shadow-[0_0_8px_rgba(200,16,46,0.3)]"
                        : "bg-white border-[rgba(13,36,97,0.2)] group-hover:border-[#c8102e]/50"
                    }`}>
                    {checked && (
                        <svg className="w-full h-full p-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    )}
                </div>
            </div>
            <span className="text-sm text-[#3a4a6b] group-hover:text-[#0d2461] transition-colors leading-snug">
                {label}
            </span>
        </label>
    );
}