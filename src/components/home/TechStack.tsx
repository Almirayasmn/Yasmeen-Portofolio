"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Users, Cpu, Laptop, CheckCircle, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & Web Technologies",
    icon: Code,
    skills: [
      { name: "Next.js", level: "Primary" },
      { name: "React", level: "Primary" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 / Semantic CSS", level: "Advanced" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Framer Motion", level: "Intermediate" },
    ],
  },
  {
    title: "UI / UX & Product Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Primary" },
      { name: "Design Systems", level: "Advanced" },
      { name: "Interactive Prototyping", level: "Advanced" },
      { name: "Wireframing", level: "Advanced" },
      { name: "User Journey Mapping", level: "Intermediate" },
      { name: "Responsive Mobile UI", level: "Advanced" },
      { name: "Accessibility (a11y)", level: "Intermediate" },
    ],
  },
  {
    title: "Backend, Data & Verification",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Data Auditing", level: "Advanced" },
      { name: "Data Verification", level: "Advanced" },
      { name: "Anomaly Detection", level: "Advanced" },
    ],
  },
  {
    title: "DevRel & Community Advocacy",
    icon: Users,
    skills: [
      { name: "Developer Outreach", level: "Advanced" },
      { name: "Community Moderation", level: "Advanced" },
      { name: "Discord & Telegram", level: "Advanced" },
      { name: "Hackathon Facilitation", level: "Advanced" },
      { name: "Web3 Ecosystems", level: "Intermediate" },
      { name: "Technical Communication", level: "Advanced" },
    ],
  },
  {
    title: "Remote Work & Collaboration Suite",
    icon: Globe,
    skills: [
      { name: "Git / GitHub", level: "Daily Use" },
      { name: "Notion", level: "Daily Use" },
      { name: "Slack & Discord", level: "Daily Use" },
      { name: "Jira / Trello", level: "Daily Use" },
      { name: "Google Workspace", level: "Daily Use" },
      { name: "Async Documentation", level: "Core Strength" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-deep-brown text-cream py-28 md:py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-fanta/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-pink/15 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,247,236,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,247,236,0.4) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-center justify-between border-b border-cream/15 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-fanta" />
            <span>05 / Skills & Remote Stack</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/45">
            Toolbox & Technologies
          </span>
        </div>

        {/* TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
            >
              The tools I use to{" "}
              <span className="text-fanta italic">ship & coordinate.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-cream/70"
          >
            A curated toolchain honed for efficient asynchronous collaboration, rapid UI prototyping, and reliable production delivery across remote teams.
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
                className="rounded-3xl bg-cream/[0.06] border border-cream/15 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-fanta/50 hover:bg-cream/[0.09] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-2xl bg-fanta/20 text-fanta border border-fanta/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-cream">
                      {cat.title}
                    </h3>
                  </div>

                  {/* PILLS */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-xl bg-cream/10 border border-cream/15 px-3 py-1.5 text-xs text-cream/90 hover:border-fanta hover:text-fanta transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
