"use client";

import { motion } from "framer-motion";
import { Users, Laptop, Activity, CheckCircle2, Sparkles } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Developer Relations & Advocacy",
    role: "DEVREL & COMMUNITY",
    description:
      "Facilitating developer onboarding, university roadshows, Web3 community facilitation, and technical hackathon operations across digital channels (Discord/Telegram).",
    highlights: [
      "Developer ecosystem outreach & campus roadshows",
      "Technical hackathon moderation & participant guidance",
      "Developer documentation & technical communication",
      "Global Web3 & community management pipelines",
    ],
    icon: Users,
  },
  {
    number: "02",
    title: "Technical Operations & Data Rigor",
    role: "PROJECT OPERATIONS & AUDITING",
    description:
      "Bringing systematic tracking, anomaly detection, data integrity validation, and async status reporting to complex institutional initiatives.",
    highlights: [
      "National-scale program monitoring & reporting",
      "Data auditing, verification & error discrepancy handling",
      "Cross-functional stakeholder synchronization",
      "Async-first documentation and status reporting",
    ],
    icon: Activity,
  },
  {
    number: "03",
    title: "UI/UX Design Systems & Frontend",
    role: "PRODUCT DESIGN & WEB DEV",
    description:
      "Designing accessible, human-centric design systems in Figma and engineering responsive web interfaces using Next.js, React, TypeScript, and modern styling.",
    highlights: [
      "Figma design systems & clickable prototypes",
      "Production-ready Next.js / React architectures",
      "User research, UX workflows & accessibility (a11y)",
      "Translating complex logic into intuitive interfaces",
    ],
    icon: Laptop,
  },
];

const remoteAttributes = [
  {
    title: "Async-First Precision",
    desc: "Comprehensive documentation, issue tracking, and reliable status updates across timezones.",
  },
  {
    title: "Cross-Functional Agility",
    desc: "Equally effective communicating with engineers, leadership, and community members.",
  },
  {
    title: "Autonomous Execution",
    desc: "Proactive problem solving, high discipline, and project ownership from start to finish.",
  },
  {
    title: "Modern Tech Native",
    desc: "Daily proficiency with Figma, GitHub, Notion, Slack, Jira, Discord, and Web frameworks.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12">
        
        {/* HUD SECTION HEADER */}
        <div className="mb-10 sm:mb-14 flex items-center justify-between pb-4 sm:pb-6 border-b border-white/15">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3 font-mono-code text-[11px] sm:text-xs font-bold tracking-wider text-[#fda4af]"
          >
            <span className="h-2 w-2 rounded-full bg-[#fb7185] shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
            <span>[ 01 // PROFILE & PHILOSOPHY ]</span>
          </motion.div>

          <span className="hidden sm:inline text-xs font-mono-code tracking-wider text-white/60 font-medium">
            SYSTEM // CORE CAPABILITY
          </span>
        </div>

        {/* MAIN STATEMENT */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-14 sm:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] sm:text-xs font-mono-code uppercase tracking-widest text-[#fda4af] font-bold mb-2.5 sm:mb-3"
            >
              // Interdisciplinary Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
            >
              Thriving where{" "}
              <span className="text-[#fda4af] italic">technology</span>
              , people, and thoughtful execution intersect.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-3 sm:space-y-4 text-xs sm:text-base leading-relaxed text-white/85 font-normal"
          >
            <p>
              Informatics Engineering background at Politeknik Negeri Jakarta with proven hands-on execution across developer relations, government-level operations, data verification, and UI/UX product systems.
            </p>
            <p>
              Whether bridging developer hubs, auditing cross-regional operational pipelines, or architecting modern web apps, I prioritize high clarity, reliability, and human empathy in every distributed team.
            </p>
          </motion.div>
        </div>

        {/* REMOTE WORK PROTOCOLS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-3xl bg-black/25 border border-white/20 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_15px_45px_rgba(0,0,0,0.3)] mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 text-[#fb7185] shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono-code uppercase tracking-wider text-white font-bold">
              OPERATIONAL PROTOCOLS FOR DISTRIBUTED & REMOTE TEAMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {remoteAttributes.map((attr) => (
              <div key={attr.title} className="flex flex-col gap-1.5 p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-white">{attr.title}</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-white/75 leading-relaxed pl-6 font-normal">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THREE CORE PILLARS */}
        <div>
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono-code tracking-wider text-[#fda4af] font-bold uppercase">
              // PILLARS OF COMPETENCY
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mt-1 sm:mt-2 text-white">
              What I bring to your team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-3xl bg-black/25 backdrop-blur-2xl border border-white/20 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#fb7185]/60 hover:bg-black/35 hover:shadow-[0_0_40px_rgba(251,113,133,0.25)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#fda4af] bg-[#fb7185]/20 border border-[#fb7185]/30 px-3 sm:px-3.5 py-1 rounded-full">
                        {pillar.number}
                      </span>
                      <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 border border-white/15 text-white group-hover:bg-[#fb7185] group-hover:text-[#25120f] transition-colors">
                        <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-[11px] font-mono-code tracking-wider text-[#fda4af] uppercase font-bold">
                      {pillar.role}
                    </p>
                    <h4 className="font-display text-xl sm:text-2xl mt-1 text-white font-bold leading-tight">
                      {pillar.title}
                    </h4>

                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/15">
                    <p className="text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider text-white/70 font-bold mb-2.5 sm:mb-3">
                      KEY DELIVERABLES
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-white/90 font-medium leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#fb7185] mt-1.5 shrink-0 shadow-[0_0_6px_rgba(251,113,133,0.8)]" />
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