"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Linkedin, Github, Phone, ArrowUpRight, Globe, Sparkles, Terminal } from "lucide-react";

const socialLinks = [
  {
    number: "01",
    sysId: "CHANNEL_LINKEDIN",
    label: "LinkedIn Profile",
    value: "almirarayass",
    href: "https://www.linkedin.com/in/almirarayass",
    icon: Linkedin,
    description: "Professional background, endorsements & career trajectory",
  },
  {
    number: "02",
    sysId: "CHANNEL_GITHUB",
    label: "GitHub Repositories",
    value: "Almirayasmn",
    href: "https://github.com/Almirayasmn",
    icon: Github,
    description: "Open-source projects, Next.js codebases, & commits",
  },
  {
    number: "03",
    sysId: "CHANNEL_EMAIL",
    label: "Direct Dispatch",
    value: "yasmeenalmira9@gmail.com",
    href: "mailto:yasmeenalmira9@gmail.com",
    icon: Mail,
    description: "Primary communication line for remote inquiries & interviews",
  },
  {
    number: "04",
    sysId: "CHANNEL_WHATSAPP",
    label: "Instant Messenger",
    value: "+62 882-2374-0272",
    href: "https://wa.me/6288223740272",
    icon: Phone,
    description: "Direct chat for fast syncs and scheduling",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yasmeenalmira9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:yasmeenalmira9@gmail.com?subject=${encodeURIComponent(
      subject || "Remote Opportunity / Inquiry"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 md:py-36 text-[#2b1810] overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12">
        
        {/* SECTION HUD HEADER */}
        <div className="mb-10 sm:mb-16 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-[#2b1810]/10 pb-4 sm:pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3 font-mono-code text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#e11d48]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e11d48]"></span>
            </span>
            <span>// 07_TRANSMISSION_TERMINAL</span>
          </motion.div>

          <span className="hidden sm:inline font-mono-code text-xs uppercase tracking-wider text-[#3a221c]/60 font-semibold">
            SIGNAL: [ ONLINE / READY ]
          </span>
        </div>

        {/* TITLE & COPY ACTION */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-12 sm:mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#2b1810] leading-[1.05]"
            >
              Let&apos;s engineer something{" "}
              <span className="text-[#e11d48] italic">
                remarkable together.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-3 sm:space-y-4"
          >
            <p className="text-xs sm:text-base leading-relaxed text-[#3a221c]/85 font-medium">
              I am actively open to remote roles, Developer Relations, UI/UX Product Design positions, and technical operations collaborations with international teams.
            </p>

            {/* QUICK COPY EMAIL BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto font-mono-code inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2b1810] text-[#fce7f3] font-bold text-[11px] sm:text-xs uppercase tracking-wider px-4 sm:px-6 py-3.5 sm:py-4 shadow-lg hover:bg-[#e11d48] hover:text-white transition-all hover:scale-[1.02]"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "EMAIL COPIED TO CLIPBOARD!" : "COPY: yasmeenalmira9@gmail.com"}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* REMOTE AVAILABILITY & TELEMETRY HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 rounded-3xl bg-white/80 border border-[#2b1810]/15 p-5 sm:p-8 backdrop-blur-2xl mb-12 sm:mb-16 shadow-[0_15px_35px_rgba(43,24,16,0.05)]"
        >
          <div className="flex items-start gap-3">
            <span className="relative flex h-3 w-3 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <div>
              <h4 className="font-display text-xs sm:text-sm font-bold text-[#2b1810]">Status: Open to Work</h4>
              <p className="font-mono-code text-[11px] sm:text-xs text-[#3a221c]/80 mt-0.5 leading-relaxed font-medium">
                Available for Remote Full-time, Part-time & Contract roles worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="h-4 w-4 text-[#e11d48] mt-1 shrink-0" />
            <div>
              <h4 className="font-display text-xs sm:text-sm font-bold text-[#2b1810]">Timezone Coordination</h4>
              <p className="font-mono-code text-[11px] sm:text-xs text-[#3a221c]/80 mt-0.5 leading-relaxed font-medium">
                UTC+7 (Jakarta) with high flexibility for Americas, EMEA, and APAC overlap.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="h-4 w-4 text-[#e11d48] mt-1 shrink-0" />
            <div>
              <h4 className="font-display text-xs sm:text-sm font-bold text-[#2b1810]">Primary Target Focus</h4>
              <p className="font-mono-code text-[11px] sm:text-xs text-[#3a221c]/80 mt-0.5 leading-relaxed font-medium">
                Developer Relations · UI/UX Design · Technical Operations · Frontend.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT LINKS & DIRECT TRANSMISSION TERMINAL */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-start">
          
          {/* SOCIAL LINKS LIST */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#e11d48] mb-4 sm:mb-6">
              // DIRECT_CHANNELS
            </h3>

            {socialLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.number}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex items-center justify-between rounded-3xl bg-white/80 border border-[#2b1810]/15 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/95 hover:border-[#e11d48]/50 shadow-[0_10px_30px_rgba(43,24,16,0.04)]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-[#fdf2f8] text-[#2b1810] border border-[#2b1810]/10 group-hover:bg-[#e11d48] group-hover:text-white transition-colors shrink-0">
                      <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono-code text-[10px] text-[#e11d48] font-bold uppercase tracking-wider block">
                        // {contact.sysId}
                      </span>
                      <p className="font-display text-sm sm:text-base font-bold text-[#2b1810] mt-0.5">
                        {contact.label}
                      </p>
                      <p className="font-mono-code text-[11px] sm:text-xs text-[#3a221c]/75 mt-0.5 font-medium truncate">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 sm:h-5 w-4 sm:w-5 text-[#3a221c]/50 group-hover:text-[#e11d48] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-2" />
                </motion.a>
              );
            })}
          </div>

          {/* QUICK DIRECT DISPATCH FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-white/85 border border-[#2b1810]/15 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_15px_35px_rgba(43,24,16,0.06)]"
          >
            {/* CORNER BRACKETS */}
            <div className="pointer-events-none absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[#e11d48]/40 rounded-tr-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[#e11d48]/40 rounded-bl-3xl" />

            <div className="flex items-center gap-2 mb-1">
              <Terminal className="h-4 w-4 text-[#e11d48]" />
              <h3 className="font-display text-base sm:text-lg font-bold text-[#2b1810]">
                Transmit Message
              </h3>
            </div>
            <p className="font-mono-code text-[11px] sm:text-xs text-[#3a221c]/70 font-medium mb-4 sm:mb-6">
              Have a remote vacancy or exciting proposal? Direct message Yasmeen.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-3.5 sm:space-y-4 font-mono-code text-xs">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#3a221c]/70 font-bold block mb-1">
                  // SUBJECT_OR_ROLE_TITLE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Remote DevRel / UI/UX Role Discussion"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-2xl bg-[#fdf2f8] border border-[#2b1810]/15 px-3.5 sm:px-4 py-3 sm:py-3.5 text-[#2b1810] font-medium placeholder-[#3a221c]/40 focus:border-[#e11d48] focus:outline-none transition-colors text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#3a221c]/70 font-bold block mb-1">
                  // MESSAGE_PAYLOAD
                </label>
                <textarea
                  rows={4}
                  placeholder="Hi Yasmeen, I reviewed your portfolio and would like to invite you for a discussion regarding an opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl bg-[#fdf2f8] border border-[#2b1810]/15 px-3.5 sm:px-4 py-3 sm:py-3.5 text-[#2b1810] font-medium placeholder-[#3a221c]/40 focus:border-[#e11d48] focus:outline-none transition-colors resize-none text-xs"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#2b1810] text-[#fce7f3] font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 hover:bg-[#e11d48] hover:text-white transition-all shadow-md cursor-pointer"
              >
                <span>INITIATE DIRECT TRANSMISSION</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}