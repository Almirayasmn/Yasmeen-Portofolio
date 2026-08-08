"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Technology",
    text: "I enjoy turning ideas into digital products, exploring modern technologies, and understanding how systems work.",
    tags: ["Web Development", "UI/UX", "Web3"],
  },
  {
    number: "02",
    title: "People",
    text: "I love working with people, communicating ideas, coordinating teams, and building meaningful connections.",
    tags: ["Developer Relations", "Community", "Collaboration"],
  },
  {
    number: "03",
    title: "Creativity",
    text: "Outside technology, creativity is where I recharge — through design, visual storytelling, and music.",
    tags: ["Design", "Music", "Performance"],
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative overflow-hidden bg-pink text-deep-brown"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* moving glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cream/50
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-fanta/25
            blur-[100px]
          "
        />

        {/* grid */}

        <div
          className="absolute inset-0 opacity-[0.045]"
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

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">

        {/* HEADER */}

        <div className="mb-20 flex items-center justify-between">

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
              text-[9px]
              uppercase
              tracking-[0.2em]
            "
          >
            <span className="h-2 w-2 rounded-full bg-deep-brown" />

            <span>
              Beyond Code
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
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-deep-brown/50
            "
          >
            06 / 07
          </motion.span>

        </div>

        {/* LINE */}

        <div className="mb-20 h-px w-full overflow-hidden bg-deep-brown/10">

          <motion.div
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: "0%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-full
              w-full
              bg-deep-brown/30
            "
          />

        </div>

        {/* ================= MAIN STATEMENT ================= */}

        <div className="relative">

          <motion.p
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
              duration: 0.6,
            }}
            className="
              mb-8
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-deep-brown/45
            "
          >
            More than technology
          </motion.p>

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
              text-6xl
              leading-[0.8]
              tracking-[-0.05em]
              md:text-8xl
              lg:text-[9rem]
            "
          >
            I don&apos;t just
            <br />
            <span className="text-cream">
              build things.
            </span>
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mt-10
              max-w-xl
              md:ml-[35%]
            "
          >
            <p className="
              text-base
              leading-[1.8]
              text-deep-brown/70
              md:text-lg
            ">
              I care about the people behind the product, the
              stories behind the ideas, and the creativity that
              makes technology feel human.
            </p>
          </motion.div>

        </div>

        {/* ================= BIG WORDS ================= */}

        <div className="mt-28 overflow-hidden">

          <motion.div
            initial={{
              x: "-20%",
              opacity: 0,
            }}
            whileInView={{
              x: "0%",
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              items-center
              gap-6
              whitespace-nowrap
            "
          >
            <span className="
              display
              text-6xl
              md:text-8xl
              lg:text-[10rem]
            ">
              TECHNOLOGY
            </span>

            <span className="
              text-4xl
              text-fanta
              md:text-6xl
            ">
              ×
            </span>

            <span className="
              display
              text-6xl
              text-cream
              md:text-8xl
              lg:text-[10rem]
            ">
              PEOPLE
            </span>

            <span className="
              text-4xl
              text-fanta
              md:text-6xl
            ">
              ×
            </span>

            <span className="
              display
              text-6xl
              md:text-8xl
              lg:text-[10rem]
            ">
              CREATIVITY
            </span>
          </motion.div>

        </div>

        {/* ================= PILLARS ================= */}

        <div className="mt-28 border-t border-deep-brown/20">

          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                grid
                gap-8
                border-b
                border-deep-brown/20
                py-10
                md:grid-cols-[80px_1fr_1fr]
                md:items-center
              "
            >

              {/* hover background */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  origin-left
                  bg-cream/35
                "
              />

              {/* NUMBER */}

              <span className="
                relative
                z-10
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-deep-brown/40
              ">
                {pillar.number}
              </span>

              {/* TITLE */}

              <motion.h3
                whileHover={{
                  x: 10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  display
                  relative
                  z-10
                  text-4xl
                  leading-none
                  tracking-[-0.03em]
                  md:text-6xl
                "
              >
                {pillar.title}
              </motion.h3>

              {/* DESCRIPTION */}

              <div className="relative z-10">

                <p className="
                  max-w-md
                  text-sm
                  leading-[1.8]
                  text-deep-brown/65
                  md:text-base
                ">
                  {pillar.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {pillar.tags.map((tag) => (
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
                        tracking-[0.12em]
                        text-deep-brown/55
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* ================= PERSONAL NOTE ================= */}

        <motion.div
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
            delay: 0.3,
          }}
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-[1fr_1fr]
            md:items-end
          "
        >

          <p className="
            display
            max-w-3xl
            text-4xl
            leading-[0.95]
            md:text-6xl
          ">
            Curiosity keeps me moving.
            <span className="text-fanta">
              {" "}Creativity keeps me going.
            </span>
          </p>

          <p className="
            max-w-md
            text-sm
            leading-[1.8]
            text-deep-brown/60
            md:ml-auto
          ">
            Whether I&apos;m building a digital product, working with
            a community, coordinating a project, or performing on
            stage, I&apos;m always looking for ways to create something
            meaningful.
          </p>

        </motion.div>

        {/* FOOTER */}

        <motion.div
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
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-deep-brown/50
          "
        >
          <span>
            Technology · People · Creativity
          </span>

          <span>
            2026
          </span>
        </motion.div>

      </div>
    </section>
  );
}