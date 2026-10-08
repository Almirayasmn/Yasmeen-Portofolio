"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Users, Cpu, Laptop, CheckCircle, Globe, Terminal, Layers } from "lucide-react";

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
            <span>// 05_TECHNICAL_ARSENAL_&_MATRIX</span>
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-wider text-cyber-muted">
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
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              The toolchain I use to{" "}
              <span className="bg-gradient-to-r from-fanta via-neon-rose to-neon-cyan bg-clip-text text-transparent">
                build & coordinate.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-cyber-muted"
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
                className="group relative rounded-3xl bg-black/20 border border-white/15 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between hover:border-rose-400/50 hover:bg-black/30 transition-all duration-400 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                {/* AMBIENT CORNER HIGHLIGHT */}
                <div className="pointer-events-none absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-rose-500/15 to-transparent rounded-tr-3xl" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-rose-200 uppercase tracking-wider block">
                          // {cat.code}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white">
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
                        className="font-mono text-xs rounded-xl bg-white/10 border border-white/15 px-3 py-1.5 text-white hover:border-rose-400/50 hover:bg-rose-500/20 transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-rose-200/80">
                  <span>CAPACITY: VERIFIED</span>
                  <span className="text-rose-300 font-bold">READY ↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
