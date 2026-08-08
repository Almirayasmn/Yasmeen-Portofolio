"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 — Present",
    company: "Ministry of Primary and Secondary Education",
    shortCompany: "Kemendikdasmen",
    role: "Monitoring Staff",
    type: "Project Operations",
    description:
      "Monitor facilitator performance and progress across the School Revitalization Program. Analyze daily reports, documentation progress, communication activities, and school-level data to identify inconsistencies and performance gaps.",
    points: [
      "Monitor facilitator performance and school progress",
      "Analyze daily reports and operational data",
      "Identify anomalies and incomplete submissions",
      "Prepare monitoring analysis and escalation reports",
      "Coordinate follow-up with relevant team members",
    ],
  },
  {
    year: "2025 — 2026",
    company: "Ministry of Primary and Secondary Education",
    shortCompany: "Kemendikdasmen",
    role: "Data Verificator",
    type: "Data & Administration",
    description:
      "Verified and reviewed school-level data for the Digitalization of Elementary Schools Program, ensuring accuracy, completeness, and consistency with established program requirements.",
    points: [
      "Conduct data validation and verification",
      "Identify discrepancies and incomplete information",
      "Coordinate corrections with relevant stakeholders",
      "Maintain structured records and documentation",
      "Support operational reporting and decision-making",
    ],
  },
  {
    year: "2025",
    company: "ICP Hub Indonesia",
    shortCompany: "ICP Hub",
    role: "Developer Relations Assistant",
    type: "Developer Relations",
    description:
      "Supported developer-focused programs and Web3 initiatives through university outreach, community engagement, stakeholder communication, and event coordination.",
    points: [
      "Conduct university and developer outreach",
      "Manage communication with communities and stakeholders",
      "Support Web3 hackathon initiatives",
      "Manage Telegram and Discord communities",
      "Assist event and participant coordination",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-deep-brown text-cream"
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* pink glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-fanta/15
            blur-[120px]
          "
        />

        {/* second glow */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-60
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-cream/5
            blur-[120px]
          "
        />

        {/* grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,247,236,0.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,247,236,0.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-6
          py-32
          md:px-10
          md:py-44
        "
      >

        {/* =================================================== */}
        {/* HEADER */}
        {/* =================================================== */}

        <div className="mb-24 flex items-center justify-between">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-fanta
              "
            />

            <span>
              Experience
            </span>
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cream/45
            "
          >
            03 / 07
          </motion.span>

        </div>

        {/* =================================================== */}
        {/* SECTION TITLE */}
        {/* =================================================== */}

        <div
          className="
            grid
            gap-12
            md:grid-cols-[1fr_420px]
            md:items-end
          "
        >

          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              display
              max-w-6xl
              text-7xl
              leading-[0.78]
              tracking-[-0.055em]
              md:text-8xl
              lg:text-[9rem]
              xl:text-[10rem]
            "
          >
            Where I&apos;ve
            <br />

            <span className="text-fanta">
              been.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              max-w-lg
              text-base
              leading-[1.8]
              text-cream/65
              md:text-lg
              lg:text-xl
            "
          >
            My experience sits across developer relations,
            education programs, data verification, and project
            operations.
          </motion.p>

        </div>

        {/* =================================================== */}
        {/* TIMELINE */}
        {/* =================================================== */}

        <div className="relative mt-36">

          {/* BASE LINE */}

          <div
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-px
              bg-cream/10
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* ANIMATED LINE */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-px
              bg-fanta
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* ================================================= */}
          {/* EXPERIENCE ITEMS */}
          {/* ================================================= */}

          <div className="space-y-28 md:space-y-40">

            {experiences.map((experience, index) => {

              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    md:gap-24
                  "
                >

                  {/* ================================================= */}
                  {/* DOT */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.2,
                    }}
                    className="
                      absolute
                      left-0
                      top-2
                      z-10
                      h-[17px]
                      w-[17px]
                      rounded-full
                      border-[4px]
                      border-deep-brown
                      bg-fanta
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />

                  {/* ================================================= */}
                  {/* CONTENT */}
                  {/* ================================================= */}

                  <div
                    className={`
                      pl-10
                      md:pl-0
                      ${
                        isEven
                          ? "md:pr-24 md:text-right"
                          : "md:col-start-2 md:pl-24"
                      }
                    `}
                  >

                    {/* YEAR */}

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-fanta
                        md:text-xs
                      "
                    >
                      {experience.year}
                    </motion.p>

                    {/* ROLE */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1,
                      }}
                      className="
                        display
                        mt-5
                        text-6xl
                        leading-[0.82]
                        tracking-[-0.045em]
                        md:text-7xl
                        lg:text-[6rem]
                        xl:text-[6.5rem]
                      "
                    >
                      {experience.role}
                    </motion.h3>

                    {/* COMPANY */}

                    <p
                      className="
                        mt-5
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-cream/70
                        md:text-base
                      "
                    >
                      {experience.shortCompany}
                    </p>

                    {/* TYPE */}

                    <div
                      className={`
                        mt-6
                        flex
                        ${
                          isEven
                            ? "md:justify-end"
                            : "md:justify-start"
                        }
                      `}
                    >
                      <span
                        className="
                          rounded-full
                          border
                          border-cream/25
                          px-5
                          py-2.5
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-cream/65
                        "
                      >
                        {experience.type}
                      </span>
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className={`
                        mt-8
                        max-w-2xl
                        text-base
                        leading-[1.8]
                        text-cream/70
                        md:text-lg
                        lg:text-xl
                        ${
                          isEven
                            ? "md:ml-auto"
                            : ""
                        }
                      `}
                    >
                      {experience.description}
                    </p>

                    {/* POINTS */}

                    <ul
                      className={`
                        mt-8
                        space-y-3
                        ${
                          isEven
                            ? "md:ml-auto"
                            : ""
                        }
                      `}
                    >
                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className={`
                            flex
                            items-start
                            gap-4
                            text-sm
                            leading-[1.7]
                            text-cream/55
                            md:text-base
                            ${
                              isEven
                                ? "md:flex-row-reverse"
                                : ""
                            }
                          `}
                        >

                          <span
                            className="
                              mt-[9px]
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-fanta
                            "
                          />

                          <span>
                            {point}
                          </span>

                        </li>
                      ))}
                    </ul>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

        {/* =================================================== */}
        {/* BOTTOM */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-32
            flex
            flex-col
            gap-4
            border-t
            border-cream/10
            pt-6
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-cream/40
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            Professional Experience
          </span>

          <span>
            2025 — Present
          </span>
        </motion.div>

      </div>
    </section>
  );
}