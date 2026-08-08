"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Developer Relations",
    description:
      "Building connections between developers, communities, universities, and technology ecosystems.",
    tags: ["Community", "Outreach", "Events", "Web3"],
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Turning ideas into intuitive digital experiences through research, wireframes, interfaces, and visual systems.",
    tags: ["Figma", "Wireframe", "Prototype", "Design"],
  },
  {
    number: "03",
    title: "Project Operations",
    description:
      "Coordinating people, information, documentation, and progress to keep projects moving in the right direction.",
    tags: ["Monitoring", "Reporting", "Coordination", "Analysis"],
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "Designing and developing digital products using modern technologies with a focus on usability and experience.",
    tags: ["React", "Next.js", "TypeScript", "Laravel"],
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative overflow-hidden bg-pink text-deep-brown"
    >
      {/* ================= BACKGROUND ================= */}

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
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cream/60 blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-fanta/30 blur-[100px]"
      />

      {/* grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(58,41,38,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58,41,38,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================= CONTENT ================= */}

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
            <span className="h-2 w-2 rounded-full bg-deep-brown" />
            <span>What I Do</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[9px] uppercase tracking-[0.2em] text-deep-brown/40"
          >
            03 / 07
          </motion.span>

        </div>

        {/* LINE */}

        <div className="mb-20 h-px w-full overflow-hidden bg-deep-brown/10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full bg-deep-brown/30"
          />
        </div>

        {/* ================= TITLE ================= */}

        <div className="grid gap-12 md:grid-cols-[1fr_350px] md:items-end">

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              display
              max-w-5xl
              text-6xl
              leading-[0.82]
              tracking-[-0.05em]
              md:text-8xl
              lg:text-[9rem]
            "
          >
            Things I
            <br />
            <span className="text-cream">love to do.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="max-w-sm text-sm leading-[1.8] text-deep-brown/70 md:text-base"
          >
            A mix of technology, design, coordination, and communication —
            the things I naturally gravitate toward when working on a
            project.
          </motion.p>

        </div>

        {/* ================= CAPABILITIES ================= */}

        <div className="mt-28">

          {capabilities.map((item, index) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                delay: index * 0.12,
              }}
              className="group relative border-t border-deep-brown/20"
            >

              {/* hover background */}

              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute inset-0 origin-bottom bg-cream/60"
              />

              {/* CONTENT */}

              <div className="relative grid gap-8 py-10 md:grid-cols-[80px_1fr_1fr_80px] md:items-center md:gap-10">

                {/* NUMBER */}

                <span className="text-[9px] uppercase tracking-[0.2em] text-deep-brown/40">
                  {item.number}
                </span>

                {/* TITLE */}

                <motion.h3
                  whileHover={{
                    x: 10,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="
                    display
                    text-4xl
                    leading-none
                    tracking-[-0.03em]
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  {item.title}
                </motion.h3>

                {/* DESCRIPTION */}

                <p className="
                  max-w-md
                  text-sm
                  leading-[1.8]
                  text-deep-brown/65
                  md:text-base
                ">
                  {item.description}
                </p>

                {/* ARROW */}

                <motion.div
                  initial={{
                    rotate: 0,
                    scale: 0.8,
                  }}
                  whileHover={{
                    rotate: 45,
                    scale: 1,
                  }}
                  className="
                    hidden
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-deep-brown/30
                    text-lg
                    md:flex
                  "
                >
                  ↗
                </motion.div>

              </div>

              {/* TAGS */}

              <div className="relative flex flex-wrap gap-2 pb-8 md:ml-[80px]">

                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-deep-brown/20
                      px-3
                      py-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.14em]
                      text-deep-brown/60
                      transition-all
                      duration-300
                      group-hover:border-deep-brown/40
                      group-hover:text-deep-brown
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

          {/* final line */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px origin-left bg-deep-brown/20"
          />

        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-16
            flex
            items-center
            justify-between
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-deep-brown/50
          "
        >
          <span>Capabilities · Skills · Interests</span>

          <span>Scroll ↓</span>
        </motion.div>

      </div>
    </section>
  );
}