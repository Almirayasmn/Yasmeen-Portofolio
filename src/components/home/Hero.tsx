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
        timeZone: "Asia/Asia",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      try {
        setTime(new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "Asia/Jakarta" }).format(now));
      } catch {
        setTime(now.toLocaleTimeString("en-GB"));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 flex flex-col justify-between text-white overflow-hidden">
      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1500px] w-full px-4 sm:px-8 md:px-12 flex-1 flex flex-col justify-between">
        
        {/* TOP TELEMETRY STATUS ROW */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8"
        >
          {/* SYSTEM ROLE BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black/25 backdrop-blur-xl px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 text-[11px] sm:text-xs font-mono-code text-white">
            <span className="text-[#fda4af] font-bold">SYS::ID</span>
            <span className="text-white/40">/</span>
            <span className="font-bold tracking-wider uppercase">DEVREL_OPS & UIUX</span>
          </div>

          {/* TIMEZONE & LIVE TELEMETRY */}
          <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono-code tracking-wider text-white/80">
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#fb7185]" />
              JAKARTA [6.2088° S, 106.8456° E]
            </span>
            {time && (
              <span className="flex items-center gap-1.5 bg-black/25 border border-white/20 px-2.5 sm:px-3 py-1 rounded-full text-white font-bold">
                <Clock className="h-3 w-3 text-[#fda4af]" />
                <span>{time} WIB</span>
              </span>
            )}
          </div>
        </motion.div>

        {/* HERO EDITORIAL GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center my-auto py-4 sm:py-8">
          
          {/* LEFT: EDITORIAL TYPOGRAPHY & INTRO */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#fb7185]/20 border border-[#fb7185]/30 text-[#fda4af] text-[10px] sm:text-xs font-mono-code font-bold mb-5 sm:mb-6 backdrop-blur-md"
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#fb7185] shrink-0" />
              <span className="truncate sm:whitespace-normal">COMMUNITY ADVOCACY × OPERATIONS × DESIGN</span>
            </motion.div>

            {/* BIG HIGH-CONTRAST HEADLINE */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] font-extrabold leading-[0.9] tracking-tight text-white"
              >
                Yasmeen
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-extrabold leading-[0.9] tracking-tight text-[#fda4af] italic ml-1 sm:ml-4 lg:ml-8"
              >
                Almira<span className="text-white not-italic">.</span>
              </motion.h1>
            </div>

            {/* VALUE PROPOSITION PITCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 sm:mt-8 max-w-xl"
            >
              <p className="font-display text-lg sm:text-2xl text-white font-bold tracking-tight leading-snug">
                Architecting Developer Ecosystems & Intuitive Digital Experiences.
              </p>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-white/85 font-normal">
                I help fast-paced teams build developer engagement, craft user-centered interfaces, and coordinate complex technical operations with strong async communication.
              </p>
            </motion.div>

            {/* ACTION BUTTONS (Thumb-friendly on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-[#25120f] px-6 sm:px-7 py-3.5 sm:py-4 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(251,113,133,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,113,133,0.7)] hover:scale-[1.02] text-center"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/25 bg-white/15 backdrop-blur-xl text-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#25120f] text-center"
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
              className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5"
            >
              {[
                "Web3 & Tech Communities",
                "Figma Design Systems",
                "Next.js / React Web",
                "Async-First Workflows",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-black/25 border border-white/20 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-[11px] font-mono-code font-semibold text-white tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: PORTRAIT FRAME WITH NEON PINK GLOW */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"
            >
              {/* ACCENT BORDER FRAME */}
              <div className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-3xl border border-[#fb7185]/30 shadow-[0_15px_50px_rgba(251,113,133,0.3)]" />
              
              {/* ROTATING RADIAL RING */}
              <div className="pointer-events-none absolute -inset-4 sm:-inset-8 rounded-full border border-dashed border-[#fda4af]/20 animate-[spin_50s_linear_infinite]" />

              {/* CORNER BRACKETS */}
              <div className="pointer-events-none absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-4 sm:w-5 h-4 sm:h-5 border-t-2 border-l-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-4 sm:w-5 h-4 sm:h-5 border-t-2 border-r-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 w-4 sm:w-5 h-4 sm:h-5 border-b-2 border-l-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-4 sm:w-5 h-4 sm:h-5 border-b-2 border-r-2 border-[#fb7185]" />

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
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono-code font-medium tracking-wider text-white/70 border-t border-white/15">
          <div className="flex items-center gap-2.5 sm:gap-3 text-center sm:text-left">
            <span className="h-2 w-2 rounded-full bg-[#fb7185] shadow-[0_0_8px_rgba(251,113,133,0.8)] animate-pulse shrink-0" />
            <span>JAKARTA, ID · OPEN TO REMOTE WORLDWIDE</span>
          </div>

          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-white hover:text-[#fda4af] font-bold transition-colors"
          >
            <span>DISCOVER PROFILE</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1 text-[#fb7185]" />
          </a>
        </div>

      </div>
    </section>
  );
}