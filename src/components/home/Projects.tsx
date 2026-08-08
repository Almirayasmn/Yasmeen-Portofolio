"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  images: string[];
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "KIRA",
    category: "Asset Management System",
    year: "2025",
    description:
      "An asset management system designed to support predictive maintenance by combining asset data, maintenance history, and Remaining Useful Life prediction.",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "LSTM"],
    images: [
      "/images/profile/KIRA.png",
      "/images/profile/KIRA2.png",
    ],
    href: "#",
  },
  {
    number: "02",
    title: "GAGASAN",
    category: "Digital Product",
    year: "2025",
    description:
      "A digital product developed as part of an Informatics Engineering project, combining product design, system development, and user-focused experience.",
    tags: ["UI/UX", "React", "Web", "Figma"],
    images: [],
    href: "https://gagasan.tik.pnj.ac.id/",
  },
];

function ProjectVisual({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-pink">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/80"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[190px] w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] border border-deep-brown/20"
        />

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="block text-[9px] uppercase tracking-[0.25em] text-deep-brown/40">
            Project 02
          </span>

          <h4 className="display mt-3 text-5xl md:text-6xl">
            {title}
          </h4>

          <span className="mt-4 block text-[8px] uppercase tracking-[0.18em] text-deep-brown/40">
            Preview coming soon
          </span>
        </div>

        <span className="absolute left-6 top-6 text-2xl text-cream">
          ✦
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-pink">
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-1.5, 0, -1.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[7%] top-[7%] z-10 w-[82%] overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(58,41,38,0.18)]"
      >
        <Image
          src={images[0]}
          alt={`${title} project screen 1`}
          width={1200}
          height={750}
          priority
          className="h-auto w-full object-cover"
        />
      </motion.div>

      {images[1] && (
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [2, 0, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[5%] right-[4%] z-20 w-[62%] overflow-hidden rounded-xl border-[5px] border-cream shadow-[0_25px_60px_rgba(58,41,38,0.25)]"
        >
          <Image
            src={images[1]}
            alt={`${title} project screen 2`}
            width={1200}
            height={750}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      )}

      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-6 top-5 z-30 text-xl text-cream"
      >
        ✦
      </motion.span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-cream text-deep-brown"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-pink/30 blur-[100px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">

        {/* HEADER */}

        <div className="mb-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]"
          >
            <span className="h-2 w-2 rounded-full bg-fanta" />
            <span>Selected Projects</span>
          </motion.div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-deep-brown/50">
            04 / 07
          </span>
        </div>

        {/* TITLE */}

        <div className="grid gap-12 md:grid-cols-[1fr_350px] md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display max-w-5xl text-6xl leading-[0.82] tracking-[-0.05em] md:text-8xl lg:text-[9rem]"
          >
            Things I&apos;ve
            <br />
            <span className="text-fanta">built.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-sm text-sm leading-[1.8] text-deep-brown/65 md:text-base"
          >
            A small selection of projects where technology, design,
            problem-solving, and collaboration come together.
          </motion.p>
        </div>

        {/* PROJECTS */}

        <div className="mt-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t border-deep-brown/15 py-12 md:py-16"
            >
              {/* PROJECT HEADER */}

              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-deep-brown/50">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-deep-brown/20 px-4 py-2 text-[8px] uppercase tracking-[0.15em] text-deep-brown/70">
                    {project.category}
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.18em] text-deep-brown/50">
                  {project.year}
                </span>
              </div>

              {/* BODY */}

              <div className="grid gap-10 md:grid-cols-[1fr_1.25fr] md:items-center">

                {/* TEXT */}

                <div>
                  <h3 className="display text-6xl leading-[0.8] tracking-[-0.04em] md:text-8xl lg:text-[8rem]">
                    {project.title}
                  </h3>

                  <p className="mt-8 max-w-md text-sm leading-[1.8] text-deep-brown/70 md:text-base">
                    {project.description}
                  </p>

                  {/* TAGS */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-deep-brown/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] text-deep-brown/70 transition-colors duration-300 group-hover:border-deep-brown/40 group-hover:text-deep-brown"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}

                  {project.href !== "#" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.18em]"
                    >
                      <span className="border-b border-deep-brown pb-1">
                        Visit project
                      </span>

                      <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                {/* VISUAL */}

                <ProjectVisual
                  images={project.images}
                  title={project.title}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-between border-t border-deep-brown/15 pt-5 text-[8px] uppercase tracking-[0.18em] text-deep-brown/70"
        >
          <span>Selected Work</span>
          <span>02 Projects</span>
        </motion.div>

      </div>
    </section>
  );
}