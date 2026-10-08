"use client";

import { motion } from "framer-motion";
import { Laptop, Users, Mic } from "lucide-react";

const pillars = [
  {
    number: "01",
    sysCode: "CORE_TECH",
    title: "Technology & Systems",
    subtitle: "Curiosity · Modern Architecture",
    icon: Laptop,
    text: "Driven by continuous exploration of modern frameworks, intelligent data models, and scalable system architectures that solve concrete real-world challenges.",
    tags: ["Next.js", "LSTM Neural Networks", "UI/UX Systems", "Web3"],
  },
  {
    number: "02",
    sysCode: "CORE_PEOPLE",
    title: "People & Community",
    subtitle: "Empathy · Developer Advocacy",
    icon: Users,
    text: "Digital systems achieve impact only through human adoption. I thrive when bridging complex technical concepts, facilitating developer ecosystems, and nurturing vibrant communities.",
    tags: ["DevRel", "Global Community Ops", "Active Empathy", "Public Speaking"],
  },
  {
    number: "03",
    sysCode: "CORE_CREATIVE",
    title: "Creativity & Artistry",
    subtitle: "Vocal Performance · Storytelling",
    icon: Mic,
    text: "Vocal music and artistic expression sharpen my presence, precision, and active listening skills — bringing high energy, distinct taste, and creative storytelling to technical teams.",
    tags: ["Vocal Performance", "Design Aesthetics", "Storytelling", "Dynamic Presence"],
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative py-28 md:py-36 text-[#2b1810]"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HUD HEADER */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-[#2b1810]/10 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono-code text-xs font-bold uppercase tracking-widest text-[#e11d48]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e11d48]"></span>
            </span>
            <span>// 06_PHILOSOPHY_&_BEYOND_CODE</span>
          </motion.div>

          <span className="font-mono-code text-xs uppercase tracking-wider text-[#3a221c]/60 font-semibold">
            HUMAN_IN_THE_LOOP: [ 100% ]
          </span>
        </div>

        {/* MAIN STATEMENT */}
        <div className="relative mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2b1810] leading-[1.05]"
          >
            I don&apos;t just engineer systems.
            <br />
            <span className="text-[#e11d48] italic">
              I connect humans, code, and vision.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium"
          >
            High-leverage remote collaboration demands more than raw code — it requires clear articulation, proactive empathy, aesthetic taste, and an artistic mindset that keeps teams motivated and aligned.
          </motion.p>
        </div>

        {/* ANIMATED PASTEL MARQUEE STRIP */}
        <div className="relative overflow-hidden py-5 my-12 rounded-3xl bg-white/80 border border-[#2b1810]/15 backdrop-blur-xl shadow-sm">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-10 whitespace-nowrap font-mono-code text-sm sm:text-base tracking-widest text-[#2b1810] uppercase font-bold"
          >
            <span className="text-[#e11d48]">SYSTEM_EXPANSION</span>
            <span className="text-[#e11d48]">✦</span>
            <span>TECHNOLOGY × PEOPLE × CREATIVITY</span>
            <span className="text-[#e11d48]">✦</span>
            <span className="text-[#2b1810]">DEVREL & ADVOCACY</span>
            <span className="text-[#e11d48]">✦</span>
            <span>ASYNC PRECISION</span>
            <span className="text-[#e11d48]">✦</span>
            <span className="text-[#e11d48]">SYSTEM_EXPANSION</span>
            <span className="text-[#e11d48]">✦</span>
            <span>TECHNOLOGY × PEOPLE × CREATIVITY</span>
            <span className="text-[#e11d48]">✦</span>
            <span className="text-[#2b1810]">DEVREL & ADVOCACY</span>
            <span className="text-[#e11d48]">✦</span>
            <span>ASYNC PRECISION</span>
          </motion.div>
        </div>

        {/* 3 PILLARS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl bg-white/80 border border-[#2b1810]/15 p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-[#e11d48]/50 hover:bg-white/95 transition-all duration-300 shadow-[0_15px_35px_rgba(43,24,16,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-code text-xs font-bold text-[#e11d48] bg-[#fce7f3] border border-[#e11d48]/25 px-3.5 py-1 rounded-full">
                      // {pillar.sysCode}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#fdf2f8] border border-[#2b1810]/10 text-[#2b1810] group-hover:bg-[#e11d48] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="font-mono-code text-[10px] font-bold uppercase tracking-wider text-[#e11d48]">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[#2b1810] mt-1.5">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-[#3a221c]/80 leading-relaxed font-medium">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2b1810]/10 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-code rounded-xl bg-[#fdf2f8] border border-[#2b1810]/10 px-2.5 py-1 text-[10px] text-[#2b1810] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}