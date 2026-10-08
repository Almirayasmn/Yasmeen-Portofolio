"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Users, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & Web Architecture",
    code: "STACK_FE",
    icon: Code,
    skills: [
      { name: "Next.js (App Router)", level: "Primary" },
      { name: "React 18 / 19", level: "Primary" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "REST APIs & JSON", level: "Advanced" },
      { name: "HTML5 / Semantic CSS", level: "Advanced" },
    ],
  },
  {
    title: "UI / UX & Design Systems",
    code: "STACK_DESIGN",
    icon: Palette,
    skills: [
      { name: "Figma (Component Libraries)", level: "Primary" },
      { name: "Design System Tokens", level: "Advanced" },
      { name: "Interactive Prototyping", level: "Advanced" },
      { name: "Wireframing & Flowcharts", level: "Advanced" },
      { name: "Responsive Mobile UI", level: "Advanced" },
      { name: "User Journey Mapping", level: "Intermediate" },
      { name: "WCAG Accessibility (a11y)", level: "Intermediate" },
    ],
  },
  {
    title: "Backend, Data & Verification",
    code: "STACK_DATA",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
      { name: "Laravel (PHP)", level: "Intermediate" },
      { name: "Data Auditing & QA", level: "Advanced" },
      { name: "Anomaly Detection", level: "Advanced" },
      { name: "SQL Querying", level: "Intermediate" },
    ],
  },
  {
    title: "DevRel & Community Advocacy",
    code: "STACK_DEVREL",
    icon: Users,
    skills: [
      { name: "Developer Outreach", level: "Advanced" },
      { name: "Technical Moderation", level: "Advanced" },
      { name: "Discord & Telegram Ops", level: "Advanced" },
      { name: "Hackathon Coordination", level: "Advanced" },
      { name: "Web3 Ecosystems", level: "Intermediate" },
      { name: "Technical Documentation", level: "Advanced" },
    ],
  },
  {
    title: "Remote Collaboration Suite",
    code: "STACK_OPS",
    icon: Globe,
    skills: [
      { name: "Git / GitHub Flow", level: "Daily Use" },
      { name: "Notion Workspaces", level: "Daily Use" },
      { name: "Slack & Discord", level: "Daily Use" },
      { name: "Jira / Trello Agile", level: "Daily Use" },
      { name: "Google Workspace", level: "Daily Use" },
      { name: "Async Standups & Docs", level: "Core Strength" },
    ],
  },
  {
    title: "AI & Modern Tooling",
    code: "STACK_AI",
    icon: Cpu,
    skills: [
      { name: "LSTM Neural Networks", level: "Applied" },
      { name: "Cursor & AI Pair IDEs", level: "Daily Use" },
      { name: "Vercel Deployment", level: "Advanced" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Vite / Turbopack", level: "Advanced" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
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
            <span>// 05_TECHNICAL_ARSENAL_&_MATRIX</span>
          </motion.div>

          <span className="font-mono-code text-xs uppercase tracking-wider text-[#3a221c]/60 font-semibold">
            SYS_ENV: [ MULTI_DISCIPLINARY ]
          </span>
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2b1810] leading-[1.05]"
            >
              The toolchain I use to{" "}
              <span className="text-[#e11d48] italic">
                build & coordinate.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium"
          >
            A curated high-performance stack optimized for rapid UI prototyping, resilient frontend codebases, data verification accuracy, and seamless asynchronous remote teamwork across timezones.
          </motion.p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white/80 border border-[#2b1810]/15 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-[#e11d48]/50 hover:bg-white/95 transition-all duration-300 shadow-[0_15px_35px_rgba(43,24,16,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#fdf2f8] text-[#2b1810] border border-[#2b1810]/10 group-hover:bg-[#e11d48] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono-code text-[10px] text-[#e11d48] font-bold uppercase tracking-wider block">
                          // {cat.code}
                        </span>
                        <h3 className="font-display text-lg font-bold text-[#2b1810]">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* PILLS */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="font-mono-code text-xs rounded-xl bg-[#fdf2f8] border border-[#2b1810]/10 px-3 py-1.5 text-[#2b1810] font-semibold hover:border-[#e11d48]/40 hover:bg-[#fce7f3] transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2b1810]/10 flex items-center justify-between font-mono-code text-[10px] text-[#3a221c]/70 font-bold">
                  <span>CAPACITY: VERIFIED</span>
                  <span className="text-[#e11d48]">READY ↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
