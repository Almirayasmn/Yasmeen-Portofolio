"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Linkedin, Github, Phone, ArrowUpRight, Globe, Clock, Sparkles } from "lucide-react";

const socialLinks = [
  {
    number: "01",
    label: "LinkedIn",
    value: "almirarayass",
    href: "https://www.linkedin.com/in/almirarayass",
    icon: Linkedin,
    description: "Professional network, experience, & recommendations",
  },
  {
    number: "02",
    label: "GitHub",
    value: "Almirayasmn",
    href: "https://github.com/Almirayasmn",
    icon: Github,
    description: "Open-source repositories, Next.js code, & experiments",
  },
  {
    number: "03",
    label: "Email",
    value: "yasmeenalmira9@gmail.com",
    href: "mailto:yasmeenalmira9@gmail.com",
    icon: Mail,
    description: "Direct email for remote work inquiries & interviews",
  },
  {
    number: "04",
    label: "WhatsApp / Direct",
    value: "+62 882-2374-0272",
    href: "https://wa.me/6288223740272",
    icon: Phone,
    description: "Instant messaging for fast communication & scheduling",
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
      className="relative overflow-hidden bg-gradient-to-b from-pink via-deep-brown to-deep-brown text-cream py-28 md:py-40"
    >
      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-fanta/20 blur-[130px]"
        />
        <div className="absolute -left-40 bottom-10 h-[500px] w-[500px] rounded-full bg-pink/15 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,247,236,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,247,236,0.4) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-center justify-between border-b border-cream/15 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-fanta" />
            <span>07 / Get In Touch</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50">
            Let&apos;s Connect
          </span>
        </div>

        {/* TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
            >
              Let&apos;s create something{" "}
              <span className="text-fanta italic underline decoration-pink decoration-4 underline-offset-4">
                remarkable.
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
            <p className="text-sm sm:text-base leading-relaxed text-cream/75">
              I am currently open to remote roles, Developer Relations positions, UI/UX opportunities, and technical operations collaborations with international teams.
            </p>

            {/* QUICK COPY EMAIL BUTTON */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-fanta text-deep-brown font-bold text-xs uppercase tracking-wider px-5 py-3 shadow-lg hover:bg-cream transition-all hover:scale-[1.02]"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Email Copied to Clipboard!" : "Copy Email: yasmeenalmira9@gmail.com"}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* REMOTE AVAILABILITY & TIMEZONE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 rounded-3xl bg-cream/10 border border-cream/15 p-6 sm:p-8 backdrop-blur-md mb-16"
        >
          <div className="flex items-start gap-3">
            <span className="relative flex h-3 w-3 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <h4 className="text-sm font-bold text-cream">Remote Availability</h4>
              <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">
                Open to Remote Full-time, Part-time & Contract agreements worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="h-4 w-4 text-fanta mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-cream">Timezone & Overlap</h4>
              <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">
                UTC+7 (Jakarta) with flexible schedule for US, European, and APAC overlap.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="h-4 w-4 text-fanta mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-cream">Target Roles</h4>
              <p className="text-xs text-cream/70 mt-0.5 leading-relaxed">
                Developer Relations · UI/UX Design · Technical Project Operations · Frontend.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT LINKS & DIRECT FORM GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          
          {/* SOCIAL LINKS LIST */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-fanta mb-6">
              Direct Channels
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
                  className="group relative flex items-center justify-between rounded-2xl bg-cream/[0.06] border border-cream/15 p-5 sm:p-6 transition-all duration-300 hover:bg-cream/[0.12] hover:border-fanta"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-fanta/20 text-fanta border border-fanta/30 group-hover:bg-fanta group-hover:text-deep-brown transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-fanta">
                        {contact.label}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-cream mt-0.5">
                        {contact.value}
                      </p>
                      <p className="text-[11px] text-cream/50 mt-0.5">
                        {contact.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-cream/50 group-hover:text-fanta group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          {/* QUICK REACH OUT EMAIL FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-cream/10 border border-cream/15 p-6 sm:p-8 backdrop-blur-md"
          >
            <h3 className="text-base font-bold text-cream flex items-center gap-2">
              <Mail className="h-4 w-4 text-fanta" />
              <span>Send a Quick Message</span>
            </h3>
            <p className="text-xs text-cream/70 mt-1 mb-6">
              Have an open role or project? Send a direct note to Yasmeen&apos;s inbox.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-cream/60 block mb-1">
                  Subject / Role Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Developer Relations / UI/UX Role (Remote)"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl bg-deep-brown/60 border border-cream/20 px-4 py-3 text-xs text-cream placeholder:text-cream/30 focus:border-fanta focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-cream/60 block mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Hi Yasmeen, we came across your portfolio and would love to discuss a remote opportunity with our team..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-deep-brown/60 border border-cream/20 px-4 py-3 text-xs text-cream placeholder:text-cream/30 focus:border-fanta focus:outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-fanta text-deep-brown font-bold text-xs uppercase tracking-wider py-3.5 hover:bg-cream transition-all shadow-md"
              >
                <span>Compose Direct Email</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}