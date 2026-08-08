"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-fanta text-deep-brown">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* soft pink glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-pink/50 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cream/30 blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= NAV ================= */}

      <nav className="relative z-30 flex items-center justify-between px-5 py-5 md:px-10 md:py-6">

  {/* LEFT — ROLE */}

  <div className="flex min-w-0 items-center gap-2 md:gap-3">
    <span className="h-2 w-2 shrink-0 rounded-full bg-deep-brown" />

    {/* MOBILE */}

    <span className="truncate text-[9px] font-bold uppercase tracking-[0.12em] md:hidden">
      DevRel · UI/UX
    </span>

    {/* DESKTOP */}

    <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] md:block lg:text-[11px]">
      Developer Relations · UI/UX Designer
    </span>
  </div>

  {/* CENTER — NAME */}

  <a
    href="#"
    className="
      absolute
      left-1/2
      hidden
      -translate-x-1/2
      text-[11px]
      font-bold
      uppercase
      tracking-[0.18em]
      transition-opacity
      duration-300
      hover:opacity-60
      md:block
      md:text-xs
    "
  >
    Yasmeen Almira
  </a>

  {/* DESKTOP NAV */}

  <div className="hidden items-center gap-7 md:flex">

    <a
      href="#about"
      className="text-[10px] font-semibold uppercase tracking-[0.14em] text-deep-brown/70 transition-colors duration-300 hover:text-deep-brown"
    >
      About
    </a>

    <a
      href="#experience"
      className="text-[10px] font-semibold uppercase tracking-[0.14em] text-deep-brown/70 transition-colors duration-300 hover:text-deep-brown"
    >
      Experience
    </a>

    <a
      href="#what-i-do"
      className="text-[10px] font-semibold uppercase tracking-[0.14em] text-deep-brown/70 transition-colors duration-300 hover:text-deep-brown"
    >
      Work
    </a>

    <a
      href="#projects"
      className="text-[10px] font-semibold uppercase tracking-[0.14em] text-deep-brown/70 transition-colors duration-300 hover:text-deep-brown"
    >
      Projects
    </a>

    <a
      href="#contact"
      className="
        rounded-full
        border-2
        border-deep-brown/50
        px-5
        py-2.5
        text-[10px]
        font-bold
        uppercase
        tracking-[0.14em]
        transition-all
        duration-300
        hover:bg-deep-brown
        hover:text-cream
      "
    >
      Contact ↗
    </a>

  </div>

  {/* MOBILE CONTACT */}

  <a
    href="#contact"
    className="
      shrink-0
      rounded-full
      border-2
      border-deep-brown/50
      px-4
      py-2
      text-[9px]
      font-bold
      uppercase
      tracking-[0.14em]
      transition-all
      duration-300
      hover:bg-deep-brown
      hover:text-cream
      md:hidden
    "
  >
    Contact
  </a>

</nav>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-[1500px] flex-col px-6 pb-10 md:px-10">

        {/* ================= NAME ================= */}

        <div className="relative pt-[7vh] md:pt-[5vh]">

          <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-deep-brown/70">
            Digital Portfolio
          </p>

          <h1 className="display relative z-10 text-[22vw] font-normal leading-[0.7] tracking-[-0.075em] text-cream md:text-[16vw]">
            Yasmeen
          </h1>

          <h1 className="display relative z-10 ml-[7vw] mt-1 text-[21vw] font-normal leading-[0.7] tracking-[-0.075em] text-deep-brown md:text-[15.5vw]">
            Almira!
          </h1>

        </div>

        {/* ================= DESKTOP PHOTO ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative
            mx-auto
            mt-14
            w-[72vw]
            max-w-[330px]
            md:absolute
            md:right-[8%]
            md:top-[15%]
            md:mt-0
            md:w-[28vw]
            md:max-w-[400px]
          "
        >

          {/* thin futuristic ring */}
          <div className="pointer-events-none absolute -inset-4 rounded-[48%_48%_35%_35%] border border-cream/60" />

          {/* photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[48%_48%_35%_35%] border border-cream/90 bg-pink shadow-[0_25px_70px_rgba(58,41,38,0.16)]">

            <Image
              src="/images/profile/yasmeenal.jpeg"
              alt="Yasmeen Almira"
              fill
              priority
              className="object-cover"
            />

          </div>

        </motion.div>

        {/* ================= INTRO ================= */}

        <div className="mt-14 max-w-[430px] md:absolute md:bottom-[12%] md:left-10 md:mt-0">

          <p className="display text-2xl italic leading-tight md:text-3xl">
            Tech × People × Creativity
          </p>

          <p className="mt-5 max-w-[390px] text-xs leading-[1.8] text-deep-brown/75 md:text-sm">
            I build, coordinate, and contribute to digital experiences
            through technology, design, and meaningful collaboration.
          </p>

          <a
            href="#projects"
            className="mt-7 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.18em]"
          >
            <span className="border-b border-deep-brown pb-1">
              Explore my work
            </span>

            <span>↗</span>
          </a>

        </div>

        {/* ================= ROLE ================= */}

        <div className="mt-8 md:absolute md:bottom-[13%] md:right-[42%] md:mt-0">

          <span className="inline-flex rounded-full border border-deep-brown/30 px-5 py-2 text-[8px] uppercase tracking-[0.18em]">
            Informatics Engineering Student
          </span>

        </div>

        {/* ================= SMALL DECORATIONS ================= */}

        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[38%] top-[45%] hidden text-3xl text-cream md:block"
        >
          ✦
        </motion.div>

        <div className="absolute bottom-7 left-6 text-[8px] uppercase tracking-widest text-deep-brown/50 md:left-10">
          6.2088° S · 106.8456° E
        </div>

        <div className="absolute bottom-7 right-8 hidden text-[8px] uppercase tracking-widest text-deep-brown/50 md:block">
          Scroll to explore ↓
        </div>

      </div>

      {/* ================= GRAIN ================= */}

      <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.025] mix-blend-multiply">
        <div className="h-full w-full bg-[url('/images/decorations/grain.png')]" />
      </div>

    </section>
  );
}