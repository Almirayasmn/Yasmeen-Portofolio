"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles, Layers, Check } from "lucide-react";

type ProjectCategory = "All" | "Fullstack & AI" | "UI/UX & Product";

type Project = {
  id: string;
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
  featured?: boolean;
};

const projectData: Project[] = [
  {
    id: "kira",
    number: "01",
    title: "KIRA",
    category: "Fullstack & AI",
    categoryLabel: "Predictive Maintenance & Asset Management",
    year: "2025 — 2026",
    tagline: "Intelligent asset management combining IoT data & LSTM predictive maintenance.",
    description:
      "A comprehensive enterprise asset management system engineered to calculate Remaining Useful Life (RUL) using machine learning (LSTM). Designed for operational efficiency with live sensor monitoring, maintenance scheduling, and automated anomaly alarms.",
    highlights: [
      "Machine learning integration for Remaining Useful Life (RUL) forecasting",
      "Interactive asset health dashboard with real-time condition tracking",
      "Automated maintenance work orders and technician dispatch pipelines",
      "Built with Next.js App Router, Prisma ORM, and PostgreSQL",
    ],
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "LSTM Machine Learning", "Tailwind CSS"],
    images: ["/images/profile/KIRA.png", "/images/profile/KIRA2.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/Almirayasmn",
    featured: true,
  },
  {
    id: "gagasan",
    number: "02",
    title: "GAGASAN",
    category: "UI/UX & Product",
    categoryLabel: "Campus Digital Innovation Platform",
    year: "2025",
    tagline: "Academic innovation portal connecting student research, ideas, and mentors.",
    description:
      "A digital platform developed as part of an Informatics Engineering initiative, combining user research, clean design systems in Figma, and frontend web development to streamline student idea submissions and faculty evaluation.",
    highlights: [
      "End-to-end Figma UI/UX design and design system tokens",
      "Student submission portal with multi-stage review workflows",
      "Live production deployment on campus infrastructure",
      "Accessibility-tested responsive UI components",
    ],
    tags: ["UI/UX Design", "Figma", "Design Systems", "Web Platform", "Informatics"],
    images: [
      "/images/projects/gagasan-1.png",
      "/images/projects/gagasan-2.png",
      "/images/projects/gagasan-3.png",
      "/images/projects/gagasan-ti.png",
    ],
    liveUrl: "https://gagasan.tik.pnj.ac.id/",
    githubUrl: "https://github.com/Almirayasmn",
    featured: true,
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
      className="relative overflow-hidden bg-cream text-deep-brown py-28 md:py-40"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-pink/30 blur-[110px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.4) 1px, transparent 1px)",
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
            <span className="h-2.5 w-2.5 rounded-full bg-fanta" />
            <span>04 / Selected Projects & Case Studies</span>
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/40">
            {projectData.length} Featured Works
          </span>
        </div>

        {/* TITLE & CATEGORY FILTER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-[-0.04em]"
            >
              Things I&apos;ve{" "}
              <span className="text-fanta italic">designed & built.</span>
            </motion.h2>
            <p className="mt-4 text-sm sm:text-base text-deep-brown/75 max-w-xl">
              From predictive maintenance systems to interactive campus hubs and design systems — built for real users and real impact.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-deep-brown text-cream shadow-md"
                    : "bg-white/60 border border-deep-brown/15 text-deep-brown/70 hover:bg-cream hover:text-deep-brown"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS SHOWCASE */}
        <div className="space-y-16 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white/70 backdrop-blur-md border border-deep-brown/15 p-6 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(58,41,38,0.04)] hover:border-fanta/60 transition-all duration-500"
              >
                {/* PROJECT TOP META */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-deep-brown/10 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-fanta bg-fanta/15 px-3 py-1 rounded-full">
                      Project {project.number}
                    </span>
                    <span className="rounded-full border border-deep-brown/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-deep-brown/70">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-deep-brown/50">
                    {project.year}
                  </span>
                </div>

                {/* PROJECT MAIN CONTENT GRID */}
                <div className="grid lg:grid-cols-[1.1fr_1.2fr] gap-10 lg:gap-14 items-center">
                  
                  {/* LEFT: TEXT DETAILS */}
                  <div>
                    <h3 className="display text-4xl sm:text-5xl lg:text-6xl text-deep-brown leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2 text-sm sm:text-base font-semibold text-fanta">
                      {project.tagline}
                    </p>

                    <p className="mt-5 text-xs sm:text-sm text-deep-brown/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* KEY HIGHLIGHTS */}
                    <div className="mt-6 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-deep-brown/50 mb-2">
                        Key Engineering Highlights
                      </p>
                      {project.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-deep-brown/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-fanta mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* TAGS */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cream border border-deep-brown/10 px-3 py-1 text-[10px] font-semibold text-deep-brown/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ACTION LINKS */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-deep-brown/10">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-deep-brown text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-fanta hover:text-deep-brown"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-deep-brown/30 bg-white/80 text-deep-brown px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-deep-brown hover:text-cream"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code / Profile</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT: VISUAL PRESENTATION */}
                  <div className="relative">
                    {project.images.length > 0 ? (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-pink p-3 shadow-inner">
                        {/* FIRST SCREENSHOT */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-full w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
                          onClick={() => setSelectedImage(project.images[0])}
                        >
                          <Image
                            src={project.images[0]}
                            alt={`${project.title} Interface Preview`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>

                        {/* SECOND SCREENSHOT ACCENT */}
                        {project.images[1] && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="absolute -bottom-4 -right-4 w-[60%] aspect-[16/10] overflow-hidden rounded-xl border-4 border-cream shadow-2xl cursor-pointer"
                            onClick={() => setSelectedImage(project.images[1])}
                          >
                            <Image
                              src={project.images[1]}
                              alt={`${project.title} Secondary Screen`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      /* BRANDED ABSTRACT MOCKUP FOR PROJECTS WITHOUT PNG ASSETS */
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-pink via-fanta/30 to-cream border border-deep-brown/15 p-8 flex flex-col justify-between shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-brown/50">
                            {project.categoryLabel}
                          </span>
                          <span className="text-xl text-fanta">✦</span>
                        </div>

                        <div className="text-center my-auto">
                          <h4 className="display text-4xl sm:text-5xl text-deep-brown">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-xs font-semibold text-deep-brown/70 max-w-xs mx-auto">
                            {project.tagline}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-deep-brown/50 border-t border-deep-brown/10 pt-3">
                          <span>Status: Deployed & Active</span>
                          {project.liveUrl && project.liveUrl !== "#" ? (
                            <span className="text-fanta">Live Online ↗</span>
                          ) : (
                            <span>Production Ready</span>
                          )}
                        </div>
                      </div>
                    )}
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
            className="fixed inset-0 z-50 bg-deep-brown/90 backdrop-blur-md p-4 sm:p-10 flex items-center justify-center cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
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