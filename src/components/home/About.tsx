"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Developer Relations",
    description:
      "Outreach, community engagement, stakeholder communication, university relations, and developer-focused initiatives.",
  },
  {
    number: "02",
    title: "Project & Operations",
    description:
      "Monitoring, reporting, coordination, data verification, and identifying operational issues that need follow-up.",
  },
  {
    number: "03",
    title: "UI/UX & Technology",
    description:
      "Designing and developing digital products using modern web technologies with a focus on usability and experience.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream text-deep-brown"
    >
      {/* ================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================== */}

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-pink/40
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          left-[-100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-fanta/20
          blur-3xl
        "
      />

      {/* subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(58,41,38,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(58,41,38,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">

        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}

        <div className="mb-20 flex items-center justify-between">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="h-2 w-2 rounded-full bg-fanta"
            />

            <span>About Me</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-deep-brown/40
            "
          >
            01 / 07
          </motion.span>

        </div>

        {/* animated line */}

        <div className="mb-20 h-px w-full overflow-hidden bg-deep-brown/10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full bg-deep-brown/30"
          />
        </div>

        {/* ================================================== */}
        {/* MAIN STATEMENT */}
        {/* ================================================== */}

        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">

          {/* LEFT */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mb-8
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-deep-brown/40
              "
            >
              A little context
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                display
                max-w-5xl
                text-5xl
                leading-[0.9]
                tracking-[-0.04em]
                md:text-7xl
                lg:text-[8rem]
              "
            >
              I work where{" "}
              <motion.span
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="inline-block text-fanta"
              >
                technology
              </motion.span>
              , people, and ideas meet.
            </motion.h2>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="max-w-md md:pb-2"
          >

            <p className="text-sm leading-[1.9] text-deep-brown/75 md:text-base">
              I&apos;m an Informatics Engineering student with experience
              across developer relations, UI/UX design, project operations,
              data verification, and program monitoring.
            </p>

            <p className="mt-6 text-sm leading-[1.9] text-deep-brown/75 md:text-base">
              I enjoy working at the intersection of technology and people —
              designing digital products, coordinating stakeholders,
              supporting communities, and turning complex information into
              something easier to understand.
            </p>

          </motion.div>

        </div>

        {/* ================================================== */}
        {/* PROFILE CARDS */}
        {/* ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mt-28 grid border-t border-deep-brown/15 md:grid-cols-3"
        >

          {cards.map((card, index) => (
            <motion.article
              key={card.number}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                },
              }}
              className={`
                group
                relative
                overflow-hidden
                py-10
                ${
                  index !== 2
                    ? "border-b md:border-b-0 md:border-r"
                    : ""
                }
                border-deep-brown/15
                md:px-10
                ${
                  index === 0
                    ? "md:pl-0"
                    : ""
                }
              `}
            >

              {/* hover background */}

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-full
                  origin-left
                  bg-fanta
                "
              />

              {/* number */}

              <span className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-deep-brown/40
              ">
                {card.number}
              </span>

              {/* title */}

              <h3 className="
                display
                mt-7
                max-w-[300px]
                text-3xl
                leading-none
                md:text-4xl
              ">
                {card.title}
              </h3>

              {/* description */}

              <p className="
                mt-5
                max-w-[320px]
                text-xs
                leading-[1.8]
                text-deep-brown/60
              ">
                {card.description}
              </p>

              {/* arrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -5,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  absolute
                  bottom-8
                  right-5
                  text-lg
                  text-fanta
                "
              >
                ↗
              </motion.div>

            </motion.article>
          ))}

        </motion.div>

        {/* ================================================== */}
        {/* FOOTER */}
        {/* ================================================== */}

        <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.4,
  }}
  className="
    mt-20
    flex
    items-center
    justify-between
    border-t
    border-deep-brown/20
    pt-5
    text-[9px]
    font-medium
    uppercase
    tracking-[0.16em]
    text-deep-brown
  "
>
  <span>
    Informatics Engineering · PNJ
  </span>

  <span>
    Jakarta, Indonesia
  </span>
</motion.div>

      </div>
    </section>
  );
}