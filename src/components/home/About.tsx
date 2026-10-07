"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Laptop, Activity, Compass, CheckCircle2, Sparkles } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Developer Relations & Outreach",
    role: "DevRel / Community Advocate",
    description:
      "Facilitating meaningful connections between tech ecosystems, developer communities, universities, and Web3 projects. Experienced in technical advocacy, hackathon support, community moderation (Discord/Telegram), and university roadshows.",
    highlights: [
      "University partnerships & tech outreach",
      "Developer community management & engagement",
      "Hackathon support & participant facilitation",
      "Technical communication & documentation",
    ],
    icon: Users,
  },
  {
    number: "02",
    title: "Technical Operations & Data Rigor",
    role: "Project Operations / Data Verificator",
    description:
      "Bringing structured tracking, anomaly detection, data validation, and asynchronous reporting to complex institutional initiatives. Ensuring operations run on schedule with verified integrity and actionable insights.",
    highlights: [
      "Large-scale program monitoring & reporting",
      "Data verification & discrepancy escalation",
      "Stakeholder coordination across distributed teams",
      "Async-first status reporting & documentation",
    ],
    icon: Activity,
  },
  {
    number: "03",
    title: "UI/UX & Modern Frontend",
    role: "Product Designer / Web Developer",
    description:
      "Designing intuitive, accessible user interfaces in Figma and bringing them to life using Next.js, React, TypeScript, and Tailwind CSS. Focused on human-centered design systems and smooth interactions.",
    highlights: [
      "Figma design systems & interactive prototypes",
      "Responsive web engineering (Next.js / React)",
      "User research, wireframing & experience audits",
      "Translating complex logic into intuitive interfaces",
    ],
    icon: Laptop,
  },
];

const remoteAttributes = [
  {
    title: "Async-First Communication",
    desc: "Detailed documentation, clear issue tracking, and prompt status updates across timezones.",
  },
  {
    title: "Cross-Functional Agility",
    desc: "Equally comfortable speaking with developers, non-technical stakeholders, and end-users.",
  },
  {
    title: "Self-Directed Execution",
    desc: "High autonomy, proactive problem-solving, and disciplined project ownership.",
  },
  {
    title: "Modern Tooling Native",
    desc: "Proficient in Figma, GitHub, Notion, Slack, Jira, Discord, and cloud workflows.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream text-deep-brown py-28 md:py-40"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-pink/40 blur-3xl" />
        <div className="absolute bottom-[-100px] -left-32 h-[450px] w-[450px] rounded-full bg-fanta/20 blur-3xl" />
        
        <div
          className="absolute inset-0 opacity-[0.035]"
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
            <span className="h-2.5 w-2.5 rounded-full bg-fanta" />
            <span>01 / About Me</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/40">
            Profile & Philosophy
          </span>
        </div>

        {/* MAIN STATEMENT */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase font-bold tracking-[0.2em] text-deep-brown/50 mb-4"
            >
              Background & Focus
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em]"
            >
              I thrive where{" "}
              <span className="text-fanta italic underline decoration-pink decoration-4 underline-offset-4">
                technology
              </span>
              , people, and thoughtful execution intersect.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-sm sm:text-base leading-relaxed text-deep-brown/80"
          >
            <p>
              I am an Informatics Engineering student at Politeknik Negeri Jakarta with hands-on experience spanning developer relations, government-level program monitoring, data verification, and UI/UX product design.
            </p>
            <p>
              Whether working with international developer ecosystems, coordinating cross-departmental data pipelines, or designing modern web products, I focus on bringing clarity, reliability, and human empathy to every remote project.
            </p>
          </motion.div>
        </div>

        {/* REMOTE WORK ADVANTAGES BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-pink/30 border border-deep-brown/10 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-4 w-4 text-fanta" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-deep-brown">
              Why I Excel in Remote & Distributed Teams
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteAttributes.map((attr) => (
              <div key={attr.title} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-fanta shrink-0" />
                  <h4 className="text-sm font-bold text-deep-brown">{attr.title}</h4>
                </div>
                <p className="text-xs text-deep-brown/75 leading-relaxed pl-6">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THREE CORE PILLARS */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-deep-brown/50">
              Core Competencies
            </span>
            <h3 className="display text-3xl sm:text-4xl mt-2 text-deep-brown">
              What I bring to your team
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl bg-white/70 backdrop-blur-md border border-deep-brown/10 p-7 sm:p-8 shadow-[0_10px_30px_rgba(58,41,38,0.04)] flex flex-col justify-between transition-all duration-300 hover:border-fanta hover:shadow-[0_20px_40px_rgba(245,143,163,0.15)]"
                >
                  {/* TOP ROW */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-fanta bg-fanta/15 px-3 py-1 rounded-full">
                        {pillar.number}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-cream border border-deep-brown/10 text-deep-brown group-hover:bg-fanta group-hover:text-deep-brown transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-deep-brown/50">
                      {pillar.role}
                    </p>
                    <h4 className="display text-2xl sm:text-3xl mt-1 text-deep-brown leading-tight">
                      {pillar.title}
                    </h4>

                    <p className="mt-4 text-xs sm:text-sm text-deep-brown/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* HIGHLIGHTS LIST */}
                  <div className="mt-8 pt-6 border-t border-deep-brown/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-deep-brown/50 mb-3">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-deep-brown/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-fanta mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}