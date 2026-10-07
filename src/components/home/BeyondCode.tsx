"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Mic, Laptop, Users } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Technology",
    subtitle: "Curiosity & Systems",
    icon: Laptop,
    text: "I enjoy understanding how digital systems operate, building functional products, and exploring modern frameworks that empower real users.",
    tags: ["Next.js", "UI/UX", "System Architecture", "Web3"],
  },
  {
    number: "02",
    title: "People",
    subtitle: "Empathy & Community",
    icon: Users,
    text: "Technology is meaningless without the humans behind it. I thrive when facilitating developer connections, listening to users, and fostering inclusive communities.",
    tags: ["Developer Relations", "Stakeholder Communication", "Community Advocacy"],
  },
  {
    number: "03",
    title: "Creativity & Music",
    subtitle: "Expression & Storytelling",
    icon: Mic,
    text: "Outside engineering and operations, music and vocal performance are where I recharge. It trains presence, active listening, and creative storytelling that enriches my technical work.",
    tags: ["Vocal Performance", "Visual Arts", "Storytelling", "Design"],
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative overflow-hidden bg-pink text-deep-brown py-28 md:py-40"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[-80px] h-[500px] w-[500px] rounded-full bg-cream/50 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-fanta/25 blur-[100px]"
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.5) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-center justify-between border-b border-deep-brown/15 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-deep-brown" />
            <span>06 / Values & Beyond Code</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/50">
            Holistic Perspective
          </span>
        </div>

        {/* MAIN STATEMENT */}
        <div className="relative mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.2em] text-deep-brown/50 mb-4"
          >
            Philosophy & Mindset
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
          >
            I don&apos;t just build systems.
            <br />
            <span className="text-cream italic">I connect people & ideas.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-deep-brown/80"
          >
            Remote collaboration requires more than technical code — it demands clear articulation, active empathy, and a creative spirit that keeps projects vibrant and aligned.
          </motion.p>
        </div>

        {/* BIG EDITORIAL MARQUEE STRIP */}
        <div className="overflow-hidden py-6 my-12 border-y border-deep-brown/15">
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-deep-brown/90"
          >
            <span>Technology</span>
            <span className="text-fanta text-2xl">✦</span>
            <span className="text-cream">People</span>
            <span className="text-fanta text-2xl">✦</span>
            <span>Creativity</span>
            <span className="text-fanta text-2xl">✦</span>
            <span className="text-cream">Empathy</span>
            <span className="text-fanta text-2xl">✦</span>
            <span>Async Precision</span>
            <span className="text-fanta text-2xl">✦</span>
          </motion.div>
        </div>

        {/* 3 PILLARS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="rounded-3xl bg-cream/70 backdrop-blur-md border border-deep-brown/15 p-8 flex flex-col justify-between hover:bg-cream hover:border-fanta transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-deep-brown bg-fanta/30 px-3 py-1 rounded-full">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/80 border border-deep-brown/10 text-deep-brown">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-deep-brown/50">
                    {pillar.subtitle}
                  </p>
                  <h3 className="display text-3xl text-deep-brown mt-1">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-deep-brown/80 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-deep-brown/10 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/70 border border-deep-brown/10 px-3 py-1 text-[10px] font-semibold text-deep-brown/75"
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