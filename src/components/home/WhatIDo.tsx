"use client";

import { motion } from "framer-motion";
import { Users, Layout, Code2, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Developer Relations & Ecosystems",
    short: "DEVREL & COMMUNITY",
    icon: Users,
    description:
      "Cultivating developer ecosystems, organizing campus outreach roadshows, moderating technical channels (Discord & Telegram), and supporting hackathon developers with technical guidance.",
    tags: ["DevRel", "Community Moderation", "Hackathons", "Tech Outreach", "Web3 Onboarding"],
    deliverables: [
      "Developer community onboarding & growth frameworks",
      "Technical hackathon moderation & builder support",
      "University partnerships & campus ambassador programs",
      "Developer documentation & technical communication",
    ],
  },
  {
    number: "02",
    title: "UI / UX Design Systems & Prototypes",
    short: "DESIGN & UX RESEARCH",
    icon: Layout,
    description:
      "Crafting accessible user interfaces and robust design systems in Figma. From initial wireframing and user journey research to high-fidelity clickable prototypes ready for engineering handoff.",
    tags: ["Figma", "Design Systems", "Wireframing", "User Research", "Responsive UI"],
    deliverables: [
      "Figma design tokens & reusable component systems",
      "High-fidelity clickable prototypes for stakeholders",
      "User flows, information architecture & wireframing",
      "Developer-ready design specs & asset handoffs",
    ],
  },
  {
    number: "03",
    title: "Modern Web & Frontend Engineering",
    short: "WEB DEVELOPMENT",
    icon: Code2,
    description:
      "Building performant, responsive web applications using Next.js, React, TypeScript, and modern CSS. Writing maintainable code with focus on speed, accessibility, and smooth user interactions.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    deliverables: [
      "Production-ready responsive web apps in Next.js & React",
      "Type-safe component architectures in TypeScript",
      "Clean REST API integrations & database models",
      "SEO optimization, web accessibility & performance tuning",
    ],
  },
  {
    number: "04",
    title: "Technical Operations & Data Rigor",
    short: "OPERATIONS & QUALITY",
    icon: ShieldCheck,
    description:
      "Bringing structured operational monitoring, data integrity audits, and clear asynchronous reporting to complex institutional and distributed programs to keep teams aligned and on schedule.",
    tags: ["Data Verification", "Program Monitoring", "Async Reporting", "Quality Control"],
    deliverables: [
      "Data auditing, validation & inconsistency escalation",
      "Structured progress tracking & performance metrics",
      "Cross-departmental stakeholder synchronization",
      "Audit-ready documentation and progress reporting",
    ],
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-20 sm:py-28 md:py-36 text-white overflow-hidden">
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
            <span>[ 03 // CAPABILITIES & DELIVERABLES ]</span>
          </motion.div>

          <span className="hidden sm:inline text-xs font-mono-code tracking-wider text-white/60 font-medium">
            SYSTEM // VALUE_ADD
          </span>
        </div>

        {/* TITLE */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
          >
            Capabilities tailored for{" "}
            <span className="text-[#fda4af] italic">modern teams.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xs sm:text-base leading-relaxed text-white/85 font-normal"
          >
            A high-leverage blend of developer relations, product design, engineering, and operational rigor — delivering value from day one.
          </motion.p>
        </div>

        {/* CAPABILITIES EXPANDED CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl bg-black/25 backdrop-blur-2xl border border-white/20 p-5 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#fb7185]/60 hover:bg-black/35 hover:shadow-[0_0_40px_rgba(251,113,133,0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#fda4af] bg-[#fb7185]/20 border border-[#fb7185]/30 px-3 sm:px-3.5 py-1 rounded-full">
                      {item.number}
                    </span>
                    <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 border border-white/15 text-white group-hover:bg-[#fb7185] group-hover:text-[#25120f] transition-colors">
                      <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* DELIVERABLES */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/15">
                    <p className="text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider text-white/70 font-bold mb-2.5 sm:mb-3">
                      KEY DELIVERABLES
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2 text-[11px] sm:text-xs text-white/90 font-medium leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#fb7185] mt-1.5 shrink-0 shadow-[0_0_6px_rgba(251,113,133,0.8)]" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/15 flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl bg-white/10 border border-white/15 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono-code text-white font-semibold"
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