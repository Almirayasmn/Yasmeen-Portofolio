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
    title: "Modern Tech-Stack Native",
    desc: "Daily proficiency with Figma, GitHub, Notion, Slack, Jira, Discord, and Web frameworks.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 text-[#2b1810]">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* HUD SECTION HEADER */}
        <div className="mb-14 flex items-center justify-between pb-6 border-b border-[#2b1810]/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono-code text-xs font-bold tracking-wider text-[#e11d48]"
          >
            <span className="h-2 w-2 rounded-full bg-[#e11d48] shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
            <span>[ 01 // PROFILE & PHILOSOPHY ]</span>
          </motion.div>

          <span className="text-xs font-mono-code tracking-wider text-[#3a221c]/60 font-medium">
            SYSTEM // CORE CAPABILITY
          </span>
        </div>

        {/* MAIN STATEMENT */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono-code uppercase tracking-widest text-[#e11d48] font-bold mb-3"
            >
              // Interdisciplinary Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-[#2b1810]"
            >
              Thriving where{" "}
              <span className="text-[#e11d48] italic">technology</span>
              , people, and thoughtful execution intersect.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium"
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl bg-white/80 border border-[#2b1810]/15 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_15px_35px_rgba(43,24,16,0.05)] mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-4 w-4 text-[#e11d48]" />
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#2b1810] font-bold">
              OPERATIONAL PROTOCOLS FOR DISTRIBUTED & REMOTE TEAMS
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteAttributes.map((attr) => (
              <div key={attr.title} className="flex flex-col gap-1.5 p-4 rounded-2xl bg-[#fdf2f8]/70 border border-[#2b1810]/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <h4 className="text-sm font-bold text-[#2b1810]">{attr.title}</h4>
                </div>
                <p className="text-xs text-[#3a221c]/80 leading-relaxed pl-6 font-medium">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THREE CORE PILLARS */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono-code tracking-wider text-[#e11d48] font-bold uppercase">
              // PILLARS OF COMPETENCY
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-[#2b1810]">
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
                  className="group relative rounded-3xl bg-white/80 backdrop-blur-2xl border border-[#2b1810]/15 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#e11d48]/50 hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(225,29,72,0.1)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-code text-xs font-bold text-[#e11d48] bg-[#fce7f3] border border-[#e11d48]/25 px-3.5 py-1 rounded-full">
                        {pillar.number}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-[#fdf2f8] border border-[#2b1810]/10 text-[#2b1810] group-hover:bg-[#e11d48] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="text-[11px] font-mono-code tracking-wider text-[#e11d48] uppercase font-bold">
                      {pillar.role}
                    </p>
                    <h4 className="font-display text-2xl sm:text-3xl mt-1 text-[#2b1810] font-bold leading-tight">
                      {pillar.title}
                    </h4>

                    <p className="mt-4 text-xs sm:text-sm text-[#3a221c]/80 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-8 pt-6 border-t border-[#2b1810]/10">
                    <p className="text-[11px] font-mono-code uppercase tracking-wider text-[#3a221c]/70 font-bold mb-3">
                      KEY DELIVERABLES
                    </p>
                    <ul className="space-y-2">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#2b1810] font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e11d48] mt-1.5 shrink-0 shadow-[0_0_5px_rgba(225,29,72,0.6)]" />
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