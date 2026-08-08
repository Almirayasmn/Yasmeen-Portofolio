"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    number: "01",
    label: "LinkedIn",
    value: "almirarayass",
    href: "https://www.linkedin.com/in/almirarayass",
    external: true,
  },
  {
    number: "02",
    label: "GitHub",
    value: "Almirayasmn",
    href: "https://github.com/Almirayasmn",
    external: true,
  },
  {
    number: "03",
    label: "Email",
    value: "yasmeenalmira9@gmail.com",
    href: "mailto:yasmeenalmira9@gmail.com",
    external: false,
  },
  {
    number: "04",
    label: "Phone",
    value: "088223740272",
    href: "tel:088223740272",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
  id="contact"
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-pink
    via-pink
    to-deep-brown
    text-deep-brown
  "
>
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

  {/* BROWN ENTERING FROM BOTTOM */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-[75%]
      bg-gradient-to-t
      from-deep-brown
      via-deep-brown/95
      to-transparent
    "
  />

  {/* PINK GLOW */}

  <motion.div
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -right-40
      -top-40
      h-[500px]
      w-[500px]
      rounded-full
      bg-fanta/25
      blur-[120px]
    "
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
            <span>Contact</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[9px] uppercase tracking-[0.2em] text-cream/50"
          >
            06 / 07
          </motion.span>
        </div>

        {/* LINE */}

        <div className="mb-20 h-px w-full overflow-hidden bg-cream/10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full bg-fanta"
          />
        </div>

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="display max-w-6xl text-6xl leading-[0.82] tracking-[-0.05em] md:text-8xl lg:text-[9rem]"
        >
          Let&apos;s make
          <br />
          something <span className="text-fanta">happen.</span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 max-w-lg text-sm leading-[1.8] text-cream/65 md:text-base"
        >
          Have a project, collaboration, or opportunity in mind?
          I&apos;d love to hear about it.
        </motion.p>

        {/* CONTACT LIST */}

        <div className="mt-20">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.number}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative flex items-center justify-between overflow-hidden border-t border-cream/15 py-7"
            >
              {/* HOVER BACKGROUND */}

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 origin-left bg-fanta/10"
              />

              {/* LEFT */}

              <div className="relative z-10 flex items-center gap-6">
                <span className="text-[8px] uppercase tracking-[0.18em] text-cream/35">
                  {contact.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-fanta">
                  {contact.label}
                </span>
              </div>

              {/* RIGHT */}

              <div className="relative z-10 flex items-center gap-5">
                <span className="hidden text-sm text-cream/70 md:block">
                  {contact.value}
                </span>

                <motion.span
                  whileHover={{
                    x: 5,
                    y: -5,
                  }}
                  className="text-xl text-cream transition-colors duration-300 group-hover:text-fanta"
                >
                  ↗
                </motion.span>
              </div>
            </motion.a>
          ))}

          <div className="h-px w-full bg-cream/15" />
        </div>

        {/* FOOTER */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-16 flex flex-col gap-4 text-[8px] uppercase tracking-[0.18em] text-cream/50 md:flex-row md:items-center md:justify-between"
        >
          <span>Yasmeen Almira · Digital Portfolio</span>

          <span>Jakarta, Indonesia · 2026</span>
        </motion.div>
      </div>
    </section>
  );
}