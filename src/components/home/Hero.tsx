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
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between text-white">
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
          <div className="inline-flex items-center gap-2.5 rounded-full bg-black/25 backdrop-blur-xl px-4 py-1.5 border border-white/20 shadow-sm text-xs font-mono-code text-white">
            <span className="text-[#fda4af] font-bold">SYS::ID</span>
            <span className="text-white/40">/</span>
            <span className="font-bold tracking-wider uppercase">DEVREL_OPS & UIUX</span>
          </div>

          {/* TIMEZONE & LIVE TELEMETRY */}
          <div className="flex items-center gap-4 text-xs font-mono-code tracking-wider text-white/80">
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#fb7185]" />
              JAKARTA [6.2088° S, 106.8456° E]
            </span>
            {time && (
              <span className="flex items-center gap-1.5 bg-black/25 border border-white/20 px-3 py-1 rounded-full text-white font-bold shadow-xs">
                <Clock className="h-3 w-3 text-[#fda4af]" />
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fb7185]/20 border border-[#fb7185]/30 text-[#fda4af] text-xs font-mono-code font-bold mb-6 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#fb7185]" />
              <span>COMMUNITY ADVOCACY × TECHNICAL OPERATIONS × DESIGN</span>
            </motion.div>

            {/* BIG HIGH-CONTRAST HEADLINE */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-[15vw] sm:text-[12vw] lg:text-[7.8rem] font-extrabold leading-[0.85] tracking-[-0.05em] text-white"
              >
                Yasmeen
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-[14.5vw] sm:text-[11.5vw] lg:text-[7.4rem] font-extrabold leading-[0.85] tracking-[-0.05em] text-[#fda4af] ml-2 sm:ml-6 lg:ml-10 italic"
              >
                Almira<span className="text-white not-italic">.</span>
              </motion.h1>
            </div>

            {/* VALUE PROPOSITION PITCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-xl"
            >
              <p className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                Architecting Developer Ecosystems & Intuitive Digital Experiences.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85 font-normal">
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
                className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-[#25120f] px-7 py-4 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(251,113,133,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,113,133,0.7)] hover:scale-[1.02]"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-white/25 bg-white/15 backdrop-blur-xl text-white px-7 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#25120f]"
              >
                <span>Connect / Hire</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#fda4af]" />
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
                  className="rounded-xl bg-black/25 border border-white/20 px-3.5 py-1.5 text-[11px] font-mono-code font-semibold text-white tracking-wide shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: PORTRAIT FRAME WITH NEON PINK GLOW */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* ACCENT BORDER FRAME */}
              <div className="pointer-events-none absolute -inset-3 rounded-3xl border border-[#fb7185]/30 shadow-[0_15px_50px_rgba(251,113,133,0.3)]" />
              
              {/* ROTATING RADIAL RING */}
              <div className="pointer-events-none absolute -inset-8 rounded-full border border-dashed border-[#fda4af]/25 animate-[spin_50s_linear_infinite]" />

              {/* CORNER BRACKETS */}
              <div className="pointer-events-none absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#fb7185]" />

              {/* PHOTO CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white/90 bg-[#25120f] shadow-2xl">
                <Image
                  src="/images/profile/yasmeen_portrait.jpg"
                  alt="Yasmeen Almira — Developer Relations & UI/UX Designer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* SOFT GRADIENT OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#25120f]/60 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fb7185]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM TELEMETRY FOOTNOTE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code font-medium tracking-wider text-white/70 border-t border-white/15">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#fb7185] shadow-[0_0_8px_rgba(251,113,133,0.8)] animate-pulse" />
            <span>JAKARTA, ID · 6.2088° S, 106.8456° E · OPEN TO REMOTE WORLDWIDE</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 text-white hover:text-[#fda4af] font-bold transition-colors"
          >
            <span>DISCOVER PROFILE</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1 text-[#fb7185]" />
          </a>
        </div>

      </div>
    </section>
  );
}