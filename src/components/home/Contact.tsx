"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Linkedin, Github, Phone, ArrowUpRight, Globe, Clock, Sparkles, Terminal, Radio, ShieldCheck } from "lucide-react";

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
      className="relative py-28 md:py-36 text-cyber-text"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HUD HEADER */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-cyber-border/60 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-fanta"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fanta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fanta"></span>
            </span>
            <span>// 07_TRANSMISSION_TERMINAL_&_CONTACT</span>
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-wider text-neon-cyan">
            SIGNAL: [ ONLINE / READY ]
          </span>
        </div>

        {/* TITLE & COPY ACTION */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Let&apos;s engineer something{" "}
              <span className="bg-gradient-to-r from-fanta via-neon-rose to-neon-cyan bg-clip-text text-transparent">
                remarkable together.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-sm sm:text-base leading-relaxed text-cyber-muted">
              I am actively open to remote roles, Developer Relations, UI/UX Product Design positions, and technical operations collaborations with international teams.
            </p>

            {/* QUICK COPY EMAIL BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="font-mono inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fanta to-neon-rose text-cyber-black font-bold text-xs uppercase tracking-wider px-5 py-3.5 shadow-[0_0_25px_rgba(255,45,117,0.5)] hover:scale-[1.02] transition-all"
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
          className="grid md:grid-cols-3 gap-6 rounded-3xl bg-cyber-panel/40 border border-cyber-border/70 p-6 sm:p-8 backdrop-blur-2xl mb-16 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start gap-3">
            <span className="relative flex h-3 w-3 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <div>
              <h4 className="font-display text-sm font-bold text-white">Status: Open to Work</h4>
              <p className="font-mono text-xs text-cyber-muted mt-1 leading-relaxed">
                Available for Remote Full-time, Part-time & Contract roles worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="h-4 w-4 text-neon-cyan mt-1 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">Timezone Coordination</h4>
              <p className="font-mono text-xs text-cyber-muted mt-1 leading-relaxed">
                UTC+7 (Jakarta) with high flexibility for Americas, EMEA, and APAC overlap.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="h-4 w-4 text-fanta mt-1 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">Primary Target Focus</h4>
              <p className="font-mono text-xs text-cyber-muted mt-1 leading-relaxed">
                Developer Relations · UI/UX Design · Technical Project Operations · Frontend.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT LINKS & DIRECT TRANSMISSION TERMINAL */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          
          {/* SOCIAL LINKS LIST */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-rose-300 mb-6">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex items-center justify-between rounded-3xl bg-black/20 border border-white/15 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:bg-black/30 hover:border-rose-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-rose-200 uppercase tracking-wider block">
                        // {contact.sysId}
                      </span>
                      <p className="font-display text-base font-bold text-white mt-0.5">
                        {contact.label}
                      </p>
                      <p className="font-mono text-xs text-white/80 mt-0.5">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-rose-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          {/* QUICK DIRECT DISPATCH FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-black/25 border border-white/15 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          >
            {/* CORNER BRACKETS */}
            <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-400/40 rounded-tr-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rose-400/40 rounded-bl-3xl" />

            <div className="flex items-center gap-2 mb-1">
              <Terminal className="h-4 w-4 text-rose-300" />
              <h3 className="font-display text-lg font-bold text-white">
                Transmit Message
              </h3>
            </div>
            <p className="font-mono text-xs text-rose-200/80 mb-6">
              Have a remote vacancy or exciting proposal? Direct message Yasmeen.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4 font-mono text-xs">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-rose-200/80 block mb-1">
                  // SUBJECT_OR_ROLE_TITLE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Remote DevRel / UI/UX Role Discussion"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-rose-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-rose-200/80 block mb-1">
                  // MESSAGE_PAYLOAD
                </label>
                <textarea
                  rows={4}
                  placeholder="Hi Yasmeen, I reviewed your portfolio and would like to invite you for a discussion regarding an opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-rose-400 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold text-xs uppercase tracking-wider py-4 hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] hover:scale-[1.01] transition-all"
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