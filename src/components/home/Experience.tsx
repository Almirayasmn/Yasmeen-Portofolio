"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, CheckCircle, Sparkles } from "lucide-react";

const experiences = [
  {
    year: "JUL — SEP",
    period: "July — September (Contract)",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    role: "Monitoring Staff — School Revitalization Program",
    type: "Operations & Program Monitoring",
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
    type: "DevRel & Ecosystem Growth",
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
    <section id="experience" className="relative py-28 md:py-36 text-[#2b1810]">
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
            <span>[ 02 // PROFESSIONAL TIMELINE ]</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-300/60 px-3 py-1 text-xs font-mono-code font-bold tracking-wider text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>STATUS: OPEN_TO_WORK</span>
            </div>
            <span className="hidden sm:inline font-mono-code text-xs tracking-wider text-[#3a221c]/60 font-medium">
              TRACK_RECORD
            </span>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-[#2b1810]"
            >
              Proven track record of{" "}
              <span className="text-[#e11d48] italic">execution & impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium"
          >
            Demonstrated experience across government education programs, high-growth Web3 developer ecosystems, and cross-functional teams with high accountability and remote discipline.
          </motion.p>
        </div>

        {/* EXPERIENCE TIMELINE CARDS */}
        <div className="space-y-8 lg:space-y-10">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative rounded-3xl bg-white/80 border border-[#2b1810]/15 p-6 sm:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-[#e11d48]/50 hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(225,29,72,0.1)]"
            >
              {/* TOP META ROW */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2b1810]/10 pb-5 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#e11d48] bg-[#fce7f3] border border-[#e11d48]/25 px-3.5 py-1 rounded-full">
                    <Calendar className="h-3 w-3 text-[#e11d48]" />
                    {exp.year}
                  </span>
                  <span className="text-xs font-mono-code text-[#3a221c]/70 font-semibold">
                    // {exp.period}
                  </span>
                </div>

                <span className="rounded-full border border-[#2b1810]/15 bg-[#fdf2f8] px-3.5 py-1 text-[11px] font-mono-code uppercase tracking-wider text-[#2b1810] font-bold">
                  {exp.type}
                </span>
              </div>

              {/* ROLE TITLE & COMPANY */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2b1810] leading-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-[#e11d48]">
                    {exp.company}
                  </p>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium">
                    {exp.description}
                  </p>

                  {/* BULLET POINTS */}
                  <div className="mt-6 space-y-2.5">
                    {exp.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#2b1810]/85 font-medium leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-[#e11d48] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKILLS & REMOTE ENVIRONMENT */}
                <div className="lg:border-l lg:border-[#2b1810]/10 lg:pl-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono-code uppercase tracking-wider text-[#3a221c]/70 font-bold block mb-3">
                      TOOLS & PROTOCOLS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl bg-[#fdf2f8] border border-[#2b1810]/10 px-3 py-1 text-xs font-mono-code text-[#2b1810] font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2b1810]/10">
                    <span className="text-xs font-mono-code uppercase tracking-wider text-[#3a221c]/60 font-bold block">
                      ENVIRONMENT
                    </span>
                    <p className="text-xs font-mono-code text-[#2b1810] font-bold mt-1">
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