"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, CheckCircle, Sparkles, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "Jul — Sep",
    period: "July — September (Contract)",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    role: "Monitoring Staff — School Revitalization Program",
    type: "Project Operations & Program Monitoring",
    location: "Jakarta, Indonesia (Hybrid)",
    description:
      "Monitored facilitator performance, reporting workflows, and school infrastructure revitalization progress on a national scale. Synthesized field reports, validated data consistency, and proactively escalated operational bottlenecks.",
    points: [
      "Tracked and evaluated facilitator milestones across nationwide school sites.",
      "Analyzed daily operational submissions and identified inconsistencies or reporting delays.",
      "Prepared synthesized monitoring analysis and actionable escalation briefings for leadership.",
      "Coordinated cross-functional follow-ups with field teams and regional stakeholders.",
    ],
    skills: ["Program Monitoring", "Operational Analysis", "Reporting Pipelines", "Stakeholder Alignment"],
  },
  {
    year: "2024 — 2025",
    period: "Contract",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    role: "Data Verificator — Digitalization of Elementary Schools",
    type: "Data Governance & Quality Assurance",
    location: "Jakarta, Indonesia",
    description:
      "Conducted rigorous data auditing and verification for the national Elementary School Digitalization initiative, ensuring school recipient data was 100% compliant, accurate, and ready for equipment distribution.",
    points: [
      "Executed systematic data verification against strict institutional compliance guidelines.",
      "Identified data anomalies, duplicate submissions, and incomplete records across school datasets.",
      "Coordinated data correction protocols directly with regional operators and coordinators.",
      "Maintained structured, audit-ready documentation to support operational decision-making.",
    ],
    skills: ["Data Verification", "Quality Assurance", "Data Cleanliness", "Cross-Team Coordination"],
  },
  {
    year: "2024 — 2025",
    period: "Remote Contract",
    company: "ICP Hub Indonesia",
    role: "Developer Relations Assistant",
    type: "Developer Relations & Ecosystem Growth",
    location: "Remote (Contract)",
    description:
      "Spearheaded developer engagement, university outreach, and community facilitation for Internet Computer Protocol (ICP) Web3 initiatives across Indonesian campuses and tech hubs.",
    points: [
      "Executed university outreach roadshows and campus developer onboarding sessions.",
      "Actively managed, moderated, and grew developer communities on Telegram and Discord.",
      "Assisted in coordinating Web3 hackathons, submission reviews, and participant support.",
      "Bridged communication between core ecosystem partners, student founders, and developers.",
    ],
    skills: ["Developer Relations", "Community Management", "Web3 Outreach", "Discord & Telegram", "Hackathons"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-deep-brown text-cream py-28 md:py-40"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-10 h-[550px] w-[550px] rounded-full bg-fanta/15 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cream/10 blur-[130px]"
        />

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
            <span>02 / Professional Experience</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Open to Work</span>
            </div>
            <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-[0.2em] text-cream/45">
              Track Record & Impact
            </span>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
            >
              Where I&apos;ve made an{" "}
              <span className="text-fanta italic">impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-cream/70"
          >
            Proven track record working with government education programs, high-growth Web3 developer hubs, and cross-functional teams with high accountability and remote discipline.
          </motion.p>
        </div>

        {/* EXPERIENCE TIMELINE CARDS */}
        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative rounded-3xl bg-cream/5 border border-cream/15 p-6 sm:p-10 backdrop-blur-md transition-all duration-300 hover:border-fanta/50 hover:bg-cream/[0.08]"
            >
              {/* TOP ROW: DATES, ROLE TYPE & COMPANY */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream/10 pb-6 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-fanta bg-fanta/20 px-3.5 py-1.5 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.year}
                  </span>
                  <span className="text-[11px] font-semibold text-cream/60">
                    ({exp.period})
                  </span>
                </div>

                <span className="rounded-full border border-cream/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream/70">
                  {exp.type}
                </span>
              </div>

              {/* ROLE TITLE & COMPANY */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
                <div>
                  <h3 className="display text-3xl sm:text-4xl text-cream leading-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-fanta">
                    {exp.company}
                  </p>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-cream/80">
                    {exp.description}
                  </p>

                  {/* BULLET POINTS */}
                  <div className="mt-6 space-y-3">
                    {exp.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-cream/75 leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-fanta mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKILLS & REMOTE TOOLING APPLIED */}
                <div className="lg:border-l lg:border-cream/10 lg:pl-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 block mb-3">
                      Skills & Tools Applied
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-cream/10 border border-cream/15 px-3 py-1 text-[11px] font-medium text-cream/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-cream/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/40 block">
                      Work Environment
                    </span>
                    <p className="text-xs text-cream/75 mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}