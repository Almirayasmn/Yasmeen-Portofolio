"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building, CheckCircle, ChevronDown, Sparkles, MapPin, Briefcase, Plus, Minus } from "lucide-react";

interface ExperienceItem {
  id: string;
  year: string;
  period: string;
  company: string;
  role: string;
  type: string;
  location: string;
  summary: string;
  description: string;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "kemendikdasmen-monitoring",
    year: "JUL — SEP",
    period: "July — September (Contract)",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    role: "Monitoring Staff — School Revitalization Program",
    type: "Operations & Program Monitoring",
    location: "Jakarta, Indonesia (Hybrid)",
    summary:
      "Monitored nationwide school revitalization milestones, validated field reporting data, and escalated operational bottlenecks for leadership.",
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
    id: "kemendikdasmen-verificator",
    year: "2024 — 2025",
    period: "Contract",
    company: "Ministry of Primary and Secondary Education (Kemendikdasmen)",
    role: "Data Verificator — Digitalization of Elementary Schools",
    type: "Data Governance & Quality Assurance",
    location: "Jakarta, Indonesia",
    summary:
      "Executed data auditing and compliance verification for the national Elementary School Digitalization initiative and equipment allocation.",
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
    id: "icp-devrel",
    year: "2024 — 2025",
    period: "Remote Contract",
    company: "ICP Hub Indonesia",
    role: "Developer Relations Assistant",
    type: "DevRel & Ecosystem Growth",
    location: "Remote (Contract)",
    summary:
      "Spearheaded Web3 developer outreach, campus roadshows, hackathon facilitation, and developer community engagement across Indonesia.",
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
  // Store expanded card IDs (default: first experience expanded)
  const [expandedIds, setExpandedIds] = useState<string[]>(["kemendikdasmen-monitoring"]);

  const toggleCard = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(experiences.map((e) => e.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const allExpanded = expandedIds.length === experiences.length;

  return (
    <section id="experience" className="relative py-28 md:py-36 text-white">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* HUD SECTION HEADER */}
        <div className="mb-14 flex items-center justify-between pb-6 border-b border-white/15">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono-code text-xs font-bold tracking-wider text-[#fda4af]"
          >
            <span className="h-2 w-2 rounded-full bg-[#fb7185] shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
            <span>[ 02 // PROFESSIONAL TIMELINE ]</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={allExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1 text-xs font-mono-code font-bold tracking-wider text-white transition-all hover:scale-105"
            >
              {allExpanded ? (
                <>
                  <Minus className="h-3 w-3 text-[#fda4af]" />
                  <span>COLLAPSE ALL</span>
                </>
              ) : (
                <>
                  <Plus className="h-3 w-3 text-[#fda4af]" />
                  <span>EXPAND ALL</span>
                </>
              )}
            </button>
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-mono-code font-bold tracking-wider text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>OPEN_TO_WORK</span>
            </div>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white"
            >
              Proven track record of{" "}
              <span className="text-[#fda4af] italic">execution & impact.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-sm sm:text-base leading-relaxed text-white/85 font-normal">
              Demonstrated experience across government education programs, high-growth Web3 developer ecosystems, and cross-functional teams with high accountability and remote discipline.
            </p>
            <p className="text-xs font-mono-code text-[#fda4af] font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#fb7185]" />
              <span>Click on any card to view key responsibilities and impact details.</span>
            </p>
          </motion.div>
        </div>

        {/* EXPERIENCE TIMELINE INTERACTIVE ACCORDION CARDS */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl backdrop-blur-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-black/40 border-[#fb7185]/70 shadow-[0_0_50px_rgba(251,113,133,0.2)]"
                    : "bg-black/25 border-white/20 hover:border-white/40 hover:bg-black/35"
                }`}
              >
                {/* ACTIVE ACCENT GLOW BAR */}
                {isExpanded && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fb7185] to-transparent" />
                )}

                {/* CLICKABLE HEADER AREA */}
                <button
                  type="button"
                  onClick={() => toggleCard(exp.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 sm:p-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb7185] rounded-3xl transition-colors"
                >
                  {/* TOP META ROW */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#fda4af] bg-[#fb7185]/20 border border-[#fb7185]/30 px-3.5 py-1 rounded-full">
                        <Calendar className="h-3 w-3 text-[#fb7185]" />
                        {exp.year}
                      </span>
                      <span className="text-xs font-mono-code text-white/70 font-semibold">
                        // {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-mono-code uppercase tracking-wider text-white font-bold">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* ROLE & COMPANY ROW WITH TOGGLE INDICATOR */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-3xl">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-[#fda4af] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-[#fda4af]">
                        <Building className="h-3.5 w-3.5 shrink-0 text-[#fb7185]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* INTERACTIVE EXPAND BUTTON */}
                    <div className="shrink-0 pt-2 md:pt-0">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono-code font-bold tracking-wider transition-all duration-300 ${
                          isExpanded
                            ? "bg-[#fb7185] text-[#25120f] border-[#fb7185] shadow-[0_0_15px_rgba(251,113,133,0.4)]"
                            : "bg-white/10 text-white border-white/20 group-hover:border-[#fb7185]/60 group-hover:bg-white/15"
                        }`}
                      >
                        <span>{isExpanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* SHORT PREVIEW SUMMARY (Visible when collapsed for quick skimming) */}
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/75"
                    >
                      <p className="line-clamp-2 sm:line-clamp-1 font-normal text-white/80">
                        {exp.summary}
                      </p>
                      <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-mono-code text-white/60">
                        <MapPin className="h-3 w-3 text-[#fda4af]" />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>
                  )}
                </button>

                {/* EXPANDED DETAILED DRAWER CONTENT */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-white/15"
                    >
                      <div className="p-6 sm:p-8 md:p-10 bg-black/20">
                        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
                          
                          {/* LEFT: FULL DESCRIPTION & DETAILED BULLET POINTS */}
                          <div className="space-y-6">
                            <div>
                              <span className="text-xs font-mono-code uppercase tracking-wider text-[#fda4af] font-bold block mb-2">
                                // OVERVIEW & SCOPE
                              </span>
                              <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal">
                                {exp.description}
                              </p>
                            </div>

                            <div>
                              <span className="text-xs font-mono-code uppercase tracking-wider text-white/70 font-bold block mb-3">
                                KEY CONTRIBUTIONS & IMPACT
                              </span>
                              <div className="space-y-3">
                                {exp.points.map((point) => (
                                  <div
                                    key={point}
                                    className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-normal leading-relaxed bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                                  >
                                    <CheckCircle className="h-4 w-4 text-[#fb7185] mt-0.5 shrink-0" />
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* RIGHT: TOOLS, PROTOCOLS & WORK ENVIRONMENT */}
                          <div className="lg:border-l lg:border-white/15 lg:pl-8 flex flex-col justify-between space-y-6">
                            <div>
                              <span className="text-xs font-mono-code uppercase tracking-wider text-white/70 font-bold block mb-3">
                                TOOLS & DOMAIN PROTOCOLS
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded-xl bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-mono-code text-white font-semibold shadow-xs"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-6 border-t border-white/15 space-y-3">
                              <div>
                                <span className="text-xs font-mono-code uppercase tracking-wider text-white/60 font-bold block">
                                  LOCATION & WORK MODE
                                </span>
                                <div className="flex items-center gap-2 mt-1.5">
                                  <MapPin className="h-4 w-4 text-[#fb7185] shrink-0" />
                                  <p className="text-xs sm:text-sm font-mono-code text-white font-bold">
                                    {exp.location}
                                  </p>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => toggleCard(exp.id)}
                                className="w-full mt-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono-code font-bold text-white/80 hover:text-white transition-all text-center"
                              >
                                ↑ Close Details
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}