"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Mic, Laptop, Users, Terminal, Cpu } from "lucide-react";

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
            <span>// 06_PHILOSOPHY_&_BEYOND_CODE</span>
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-wider text-cyber-muted">
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
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            I don&apos;t just engineer systems.
            <br />
            <span className="bg-gradient-to-r from-fanta via-neon-rose to-neon-cyan bg-clip-text text-transparent">
              I connect humans, code, and vision.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-cyber-muted"
          >
            High-leverage remote collaboration demands more than raw code — it requires clear articulation, proactive empathy, aesthetic taste, and an artistic mindset that keeps teams motivated and aligned.
          </motion.p>
        </div>

        {/* FUTURISTIC CYBER MARQUEE STRIP */}
        <div className="relative overflow-hidden py-5 my-12 rounded-2xl bg-cyber-panel/40 border border-cyber-border/70 backdrop-blur-xl">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-sm sm:text-base tracking-widest text-cyber-muted uppercase"
          >
            <span className="text-fanta font-bold">SYSTEM_EXPANSION</span>
            <span className="text-neon-cyan">✦</span>
            <span>TECHNOLOGY × PEOPLE × CREATIVITY</span>
            <span className="text-neon-purple">✦</span>
            <span className="text-white font-bold">DEVREL & ADVOCACY</span>
            <span className="text-fanta">✦</span>
            <span>ASYNC PRECISION</span>
            <span className="text-neon-cyan">✦</span>
            <span className="text-fanta font-bold">SYSTEM_EXPANSION</span>
            <span className="text-neon-cyan">✦</span>
            <span>TECHNOLOGY × PEOPLE × CREATIVITY</span>
            <span className="text-neon-purple">✦</span>
            <span className="text-white font-bold">DEVREL & ADVOCACY</span>
            <span className="text-fanta">✦</span>
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
                className="group relative rounded-3xl bg-black/20 border border-white/15 p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-rose-400/50 hover:bg-black/30 transition-all duration-400 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-rose-300 bg-rose-500/20 border border-rose-500/30 px-3 py-1 rounded-md">
                      // {pillar.sysCode}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white group-hover:text-rose-300 group-hover:border-rose-400/40 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-200">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mt-1.5">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded-lg bg-white/10 border border-white/15 px-2.5 py-1 text-[10px] text-white/90"
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