"use client";

import { motion } from "framer-motion";
import { Users, Layout, Code2, ShieldCheck, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Developer Relations & Ecosystems",
    short: "DevRel & Community",
    icon: Users,
    description:
      "Cultivating developer communities, organizing university outreach roadshows, moderating technical channels (Discord & Telegram), and supporting hackathon participants with empathy and technical guidance.",
    tags: ["DevRel", "Community Moderation", "Hackathons", "Tech Outreach", "Web3 Onboarding"],
    deliverables: [
      "Developer community onboarding & retention strategy",
      "Technical event moderation & hackathon support",
      "University partnerships & student developer programs",
      "Clear developer documentation & communication channels",
    ],
  },
  {
    number: "02",
    title: "UI / UX Design & Prototyping",
    short: "Design & UX Research",
    icon: Layout,
    description:
      "Crafting human-centered, accessible user interfaces and robust design systems in Figma. From initial wireframing and user research to high-fidelity clickable prototypes ready for developer handoff.",
    tags: ["Figma", "Design Systems", "Wireframing", "User Research", "Responsive UI"],
    deliverables: [
      "Complete Figma design systems & reusable component libraries",
      "High-fidelity interactive prototypes for stakeholder review",
      "User flows, information architecture & wireframing",
      "Developer-ready design specs & asset handoffs",
    ],
  },
  {
    number: "03",
    title: "Modern Web & Frontend Engineering",
    short: "Web Development",
    icon: Code2,
    description:
      "Building clean, performant, and responsive web applications using Next.js, React, TypeScript, and modern CSS. Writing maintainable code with focus on speed, accessibility, and user experience.",
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
    title: "Technical Operations & Data Verification",
    short: "Operations & Quality",
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
    <section
      id="what-i-do"
      className="relative overflow-hidden bg-pink text-deep-brown py-28 md:py-40"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cream/60 blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-fanta/30 blur-[100px]"
        />

        <div
          className="absolute inset-0 opacity-[0.05]"
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
            <span>03 / Capabilities & Offerings</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/40">
            What I Deliver
          </span>
        </div>

        {/* TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
          >
            Capabilities tailored for{" "}
            <span className="text-cream italic underline decoration-fanta decoration-4 underline-offset-4">
              modern teams.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-deep-brown/80"
          >
            A high-leverage blend of developer relations, product design, engineering, and operational rigor — delivering value from day one.
          </motion.p>
        </div>

        {/* CAPABILITIES EXPANDED CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl bg-cream/70 backdrop-blur-md border border-deep-brown/15 p-8 shadow-[0_10px_30px_rgba(58,41,38,0.05)] flex flex-col justify-between transition-all duration-300 hover:bg-cream hover:shadow-xl hover:border-fanta"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-deep-brown bg-fanta/30 px-3 py-1 rounded-full">
                      {item.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/80 border border-deep-brown/10 text-deep-brown group-hover:bg-deep-brown group-hover:text-cream transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="display text-3xl sm:text-4xl text-deep-brown leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-deep-brown/75 leading-relaxed">
                    {item.description}
                  </p>

                  {/* DELIVERABLES */}
                  <div className="mt-6 pt-5 border-t border-deep-brown/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-deep-brown/50 mb-3">
                      Tangible Deliverables
                    </p>
                    <ul className="space-y-2">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2 text-xs text-deep-brown/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-fanta mt-1.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-8 pt-6 border-t border-deep-brown/10 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 border border-deep-brown/10 px-3 py-1 text-[10px] font-semibold text-deep-brown/80"
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