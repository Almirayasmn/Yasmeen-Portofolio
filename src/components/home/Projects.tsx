"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Terminal, Cpu, Radio, Eye } from "lucide-react";

type ProjectCategory = "All" | "Fullstack & AI" | "UI/UX & Product";

type Project = {
  id: string;
  sysId: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  telemetry: { label: string; value: string }[];
};

const projectData: Project[] = [
  {
    id: "kira",
    sysId: "SYS-KIRA-01",
    number: "01",
    title: "KIRA",
    category: "Fullstack & AI",
    categoryLabel: "Predictive Maintenance & IoT Asset Hub",
    year: "2025 — 2026",
    tagline: "Intelligent asset management combining IoT telemetry & LSTM neural network RUL forecasting.",
    description:
      "A high-performance enterprise asset intelligence system engineered to forecast Remaining Useful Life (RUL) through time-series LSTM neural networks. Features live sensor telemetry streams, automated threshold alerts, preventive maintenance scheduling, and end-to-end technician dispatch pipelines.",
    highlights: [
      "Deep Learning (LSTM) model integration for Remaining Useful Life (RUL) regression",
      "Real-time IoT sensor telemetry stream dashboard with instant anomaly alarms",
      "Automated preventative maintenance work-order generation & technician assignment",
      "Architected with Next.js App Router, Prisma ORM, and PostgreSQL database",
    ],
    tags: ["Next.js", "React", "Prisma ORM", "PostgreSQL", "LSTM Machine Learning", "Tailwind CSS", "IoT Telemetry"],
    images: ["/images/profile/KIRA.png", "/images/profile/KIRA2.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/Almirayasmn",
    telemetry: [
      { label: "ENGINE", value: "LSTM Neural Net" },
      { label: "DATABASE", value: "PostgreSQL / Prisma" },
      { label: "STATUS", value: "DEPLOYED / ACTIVE" },
    ],
  },
  {
    id: "gagasan",
    sysId: "SYS-GAGASAN-02",
    number: "02",
    title: "GAGASAN",
    category: "UI/UX & Product",
    categoryLabel: "Campus Digital Innovation & Research Portal",
    year: "2025",
    tagline: "High-impact academic innovation portal connecting student research, ideas, and faculty mentors.",
    description:
      "A scalable digital innovation portal created for the Informatics Engineering department. Synthesizes deep user empathy, modern Figma design systems, accessible design tokens, and responsive frontend implementation to streamline student research submissions and multi-stage faculty evaluation.",
    highlights: [
      "Comprehensive Figma design system with reusable atomic components & design tokens",
      "Multi-stage student proposal submission and asynchronous faculty evaluation workflow",
      "Live production deployment serving the Informatics Engineering department",
      "Accessibility-tested responsive UI components optimized for desktop & mobile devices",
    ],
    tags: ["UI/UX Design", "Figma Design System", "Design Tokens", "Web Platform", "Informatics Engineering"],
    images: [
      "/images/projects/gagasan-1.png",
      "/images/projects/gagasan-2.png",
      "/images/projects/gagasan-3.png",
      "/images/projects/gagasan-ti.png",
    ],
    liveUrl: "https://gagasan.tik.pnj.ac.id/",
    githubUrl: "https://github.com/Almirayasmn",
    telemetry: [
      { label: "PLATFORM", value: "gagasan.tik.pnj.ac.id" },
      { label: "DESIGN", value: "Figma Component Library" },
      { label: "DEPLOYMENT", value: "Production Campus Server" },
    ],
  },
];

const categories: ProjectCategory[] = ["All", "Fullstack & AI", "UI/UX & Product"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* SECTION HUD HEADER */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono-code text-xs font-bold uppercase tracking-widest text-[#fda4af]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb7185] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fb7185]"></span>
            </span>
            <span>// 04_SELECTED_PROJECTS_&_SYSTEMS</span>
          </motion.div>

          <div className="flex items-center gap-4 font-mono-code text-xs text-white/70 font-semibold">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-[#fb7185]" />
              <span>FILTER: {activeCategory.toUpperCase()}</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline">{projectData.length} CURATED_MODULES</span>
          </div>
        </div>

        {/* SECTION TITLE & TABS */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Architected systems &{" "}
              <span className="text-[#fda4af] italic">
                production builds.
              </span>
            </motion.h2>
            <p className="mt-4 text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed font-normal">
              From IoT machine-learning predictive pipelines to deployed university innovation platforms — engineered with precision, high performance, and meticulous user experience.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/25 border border-white/20 backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono-code text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 font-bold ${
                  activeCategory === cat
                    ? "bg-[#fda4af] text-[#25120f] shadow-md font-extrabold"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS SHOWCASE CARDS */}
        <div className="space-y-16 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-black/25 border border-white/20 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:border-[#fb7185]/60 hover:bg-black/35 transition-all duration-500"
              >
                {/* CORNER ACCENT BRACKETS */}
                <div className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#fb7185]/50 rounded-tl-3xl" />
                <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#fda4af]/50 rounded-tr-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#fda4af]/50 rounded-bl-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#fb7185]/50 rounded-br-3xl" />

                {/* PROJECT TOP TELEMETRY BAR */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 mb-8 font-mono-code text-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fb7185]/20 border border-[#fb7185]/30 text-[#fda4af] font-bold tracking-wider">
                      <Cpu className="h-3.5 w-3.5" />
                      <span>{project.sysId}</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white uppercase text-[11px] font-bold tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <span className="text-white/70 font-semibold">
                    TIMELINE: <strong className="text-white">{project.year}</strong>
                  </span>
                </div>

                {/* PROJECT CONTENT GRID */}
                <div className="relative z-10 grid lg:grid-cols-[1.1fr_1.2fr] gap-10 lg:gap-14 items-center">
                  
                  {/* LEFT: SPECS & HIGHLIGHTS */}
                  <div>
                    <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2 font-mono-code text-xs sm:text-sm font-bold text-[#fda4af] tracking-wide">
                      {project.tagline}
                    </p>

                    <p className="mt-5 text-sm text-white/85 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* TELEMETRY METRICS TABLE */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-2xl bg-black/20 border border-white/10 font-mono-code text-[11px]">
                      {project.telemetry.map((item) => (
                        <div key={item.label} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="block text-white/60 text-[10px] font-bold tracking-wider">{item.label}</span>
                          <span className="font-bold text-white mt-0.5 block truncate">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* HIGHLIGHTS */}
                    <div className="mt-6 space-y-2.5">
                      <p className="font-mono-code text-[11px] font-bold uppercase tracking-widest text-[#fda4af]">
                        // Key Engineering Milestones
                      </p>
                      {project.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 font-normal">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#fb7185] mt-2 shrink-0 shadow-[0_0_6px_rgba(251,113,133,0.8)]" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* TECH STACK TAGS */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-code rounded-xl bg-white/10 border border-white/15 px-3 py-1 text-[11px] text-white font-semibold hover:border-[#fb7185]/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ACTION LINKS */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/15 font-mono-code text-xs">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fb7185] to-[#f43f5e] px-5 py-3 font-extrabold uppercase tracking-wider text-[#25120f] transition-all hover:shadow-[0_0_25px_rgba(251,113,133,0.6)] hover:scale-[1.02]"
                        >
                          <span>Live Demo Portal</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-5 py-3 font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#25120f]"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT: SCREENSHOT VIEWER */}
                  <div className="relative">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/40 border border-white/20 p-2.5 shadow-2xl">
                      {/* VIEWPORT HUD OVERLAY */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/20 font-mono-code text-[10px] font-bold text-white backdrop-blur-md shadow-xs">
                        <Radio className="h-3 w-3 animate-pulse text-[#fb7185]" />
                        <span>VIEWPORT: LIVE_PREVIEW</span>
                      </div>

                      {/* PRIMARY IMAGE */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full w-full overflow-hidden rounded-xl cursor-pointer group/img"
                        onClick={() => setSelectedImage(project.images[0])}
                      >
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} Interface Preview`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                          <div className="p-3 rounded-full bg-black/80 border border-[#fb7185] text-[#fb7185] shadow-lg">
                            <Eye className="h-5 w-5" />
                          </div>
                        </div>
                      </motion.div>

                      {/* SECONDARY FLOATING PREVIEW */}
                      {project.images[1] && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -bottom-4 -right-4 w-[58%] aspect-[16/10] overflow-hidden rounded-xl border-4 border-white/90 bg-[#25120f] shadow-2xl cursor-pointer group/img2"
                          onClick={() => setSelectedImage(project.images[1])}
                        >
                          <Image
                            src={project.images[1]}
                            alt={`${project.title} Secondary Screen`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img2:scale-105"
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* FULLSCREEN IMAGE MODAL VIEWER */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl p-4 sm:p-10 flex items-center justify-center cursor-zoom-out"
          >
            <div className="relative max-w-6xl max-h-[88vh] w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={selectedImage}
                alt="Enlarged Project Preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}