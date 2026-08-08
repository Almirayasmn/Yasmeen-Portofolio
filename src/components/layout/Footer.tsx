"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-brown text-cream">

      <div className="mx-auto max-w-[1500px] px-6 md:px-10">

        {/* TOP LINE */}

        <div className="h-px w-full bg-cream/15" />

        {/* MAIN */}

        <div className="relative py-16 md:py-20">

          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-fanta">
                Digital Portfolio
              </p>

          
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6 md:items-end"
            >
              <div className="text-left md:text-right">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/40">
                  Based in
                </p>

                <p className="mt-2 text-sm font-medium">
                  Jakarta, Indonesia
                </p>
              </div>

              <a
                href="#"
                className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em]"
              >
                <span className="border-b border-cream/50 pb-1">
                  Back to top
                </span>

                <span className="transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
              </a>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-5 border-t border-cream/10 py-6 text-[8px] font-medium uppercase tracking-[0.16em] text-cream/40 md:flex-row md:items-center md:justify-between">

          <span>
            © 2026 Yasmeen Almira
          </span>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/almirarayass"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fanta"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Almirayasmn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fanta"
            >
              GitHub
            </a>

            <a
              href="mailto:yasmeenalmira9@gmail.com"
              className="transition-colors hover:text-fanta"
            >
              Email
            </a>
          </div>

          <span>
            Tech × People × Creativity
          </span>

        </div>

      </div>

    </footer>
  );
}