"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between">
      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1500px] w-full px-5 sm:px-8 md:px-12 flex-1 flex flex-col justify-between">
        
        {/* TOP TELEMETRY STATUS ROW */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8"
        >
          {/* SYSTEM ROLE BADGE */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/70 backdrop-blur-xl px-4 py-1.5 border border-[#2b1810]/15 shadow-sm text-xs font-mono-code text-[#2b1810]">
            <span className="text-[#e11d48] font-bold">SYS::ID</span>
            <span className="text-[#2b1810]/40">/</span>
            <span className="font-bold tracking-wider uppercase">DEVREL_OPS & UIUX</span>
          </div>

          {/* TIMEZONE & LIVE TELEMETRY */}
          <div className="flex items-center gap-4 text-xs font-mono-code tracking-wider text-[#3a221c]/80">
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#e11d48]" />
              JAKARTA [6.2088° S, 106.8456° E]
            </span>
            {time && (
              <span className="flex items-center gap-1.5 bg-white/80 border border-[#2b1810]/15 px-3 py-1 rounded-full text-[#2b1810] font-bold shadow-xs">
                <Clock className="h-3 w-3 text-[#e11d48]" />
                {time} WIB
              </span>
            )}
          </div>
        </motion.div>

        {/* HERO EDITORIAL GRID */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center my-auto py-8">
          
          {/* LEFT: EDITORIAL TYPOGRAPHY & INTRO */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/25 text-[#be123c] text-xs font-mono-code font-bold mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#e11d48]" />
              <span>COMMUNITY ADVOCACY × TECHNICAL OPERATIONS × DESIGN</span>
            </motion.div>

            {/* BIG HIGH-CONTRAST HEADLINE */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-[15vw] sm:text-[12vw] lg:text-[7.8rem] font-extrabold leading-[0.85] tracking-[-0.05em] text-[#2b1810]"
              >
                Yasmeen
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-[14.5vw] sm:text-[11.5vw] lg:text-[7.4rem] font-extrabold leading-[0.85] tracking-[-0.05em] text-[#e11d48] ml-2 sm:ml-6 lg:ml-10 italic"
              >
                Almira<span className="text-[#2b1810] not-italic">.</span>
              </motion.h1>
            </div>

            {/* VALUE PROPOSITION PITCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-xl"
            >
              <p className="font-display text-xl sm:text-2xl text-[#2b1810] font-bold tracking-tight">
                Architecting Developer Ecosystems & Intuitive Digital Experiences.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3a221c]/85 font-medium">
                I help fast-paced teams build developer engagement, craft user-centered interfaces, and coordinate complex technical operations with strong async communication.
              </p>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-[#2b1810] text-[#fce7f3] px-7 py-4 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:bg-[#e11d48] hover:text-white hover:scale-[1.02]"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-[#2b1810]/20 bg-white/80 backdrop-blur-xl text-[#2b1810] px-7 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#2b1810] hover:text-[#fce7f3]"
              >
                <span>Connect / Hire</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#e11d48]" />
              </a>
            </motion.div>

            {/* ATTRIBUTE TAGS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {[
                "Web3 & Tech Communities",
                "Figma Design Systems",
                "Next.js / React Web",
                "Async-First Workflows",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-white/75 border border-[#2b1810]/15 px-3.5 py-1.5 text-[11px] font-mono-code font-semibold text-[#2b1810] tracking-wide shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: PORTRAIT IN CLEAN LUXE FRAME */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* ACCENT BORDER FRAME */}
              <div className="pointer-events-none absolute -inset-3 rounded-3xl border border-[#e11d48]/25 shadow-[0_15px_45px_rgba(225,29,72,0.12)]" />
              
              {/* ROTATING RADIAL RING */}
              <div className="pointer-events-none absolute -inset-8 rounded-full border border-dashed border-[#e11d48]/20 animate-[spin_50s_linear_infinite]" />

              {/* CORNER BRACKETS */}
              <div className="pointer-events-none absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#e11d48]" />
              <div className="pointer-events-none absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#e11d48]" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#e11d48]" />
              <div className="pointer-events-none absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#e11d48]" />

              {/* PHOTO CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl">
                <Image
                  src="/images/profile/yasmeenal.jpeg"
                  alt="Yasmeen Almira — Developer Relations & UI/UX Designer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* SOFT WARM OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1810]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM TELEMETRY FOOTNOTE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code font-medium tracking-wider text-[#3a221c]/70 border-t border-[#2b1810]/10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#e11d48] shadow-[0_0_8px_rgba(225,29,72,0.6)] animate-pulse" />
            <span>JAKARTA, ID · 6.2088° S, 106.8456° E · OPEN TO REMOTE WORLDWIDE</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 text-[#2b1810] hover:text-[#e11d48] font-bold transition-colors"
          >
            <span>DISCOVER PROFILE</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1 text-[#e11d48]" />
          </a>
        </div>

      </div>
    </section>
  );
}