"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Globe, MapPin, Clock } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden bg-fanta text-deep-brown pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft ambient pink & cream glows */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-pink/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-cream/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-white/30 blur-2xl" />

        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58,41,38,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(58,41,38,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-[1500px] w-full px-5 sm:px-8 md:px-12 flex-1 flex flex-col justify-between">
        
        {/* TOP STATUS ROW */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-end gap-4 pb-6"
        >
          {/* TIMEZONE & LOCATION INFO */}
          <div className="hidden sm:flex items-center gap-5 text-[11px] font-semibold tracking-wider uppercase text-deep-brown/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-deep-brown/60" />
              Jakarta, Indonesia (UTC+7)
            </span>
            {time && (
              <span className="flex items-center gap-1.5 font-mono text-[10px] bg-deep-brown/10 px-2.5 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {time} WIB
              </span>
            )}
          </div>
        </motion.div>

        {/* HERO EDITORIAL GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center my-auto py-6">
          
          {/* LEFT: EDITORIAL TYPOGRAPHY & INTRO */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="h-4 w-4 text-cream" />
              <span className="text-[11px] uppercase font-bold tracking-[0.22em] text-deep-brown/75">
                Developer Relations · UI/UX Designer · Tech Operations
              </span>
            </motion.div>

            {/* BIG HEADLINE */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="display text-[15vw] sm:text-[12vw] lg:text-[8.5rem] font-normal leading-[0.82] tracking-[-0.06em] text-cream"
              >
                Yasmeen
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="display text-[14.5vw] sm:text-[11.5vw] lg:text-[8rem] font-normal leading-[0.82] tracking-[-0.06em] text-deep-brown ml-4 sm:ml-8 lg:ml-12"
              >
                Almira<span className="text-cream">.</span>
              </motion.h1>
            </div>

            {/* PITHY PITCH FOR REMOTE HIRING MANAGERS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-xl"
            >
              <p className="display text-xl sm:text-2xl text-deep-brown italic">
                Bridging Technology × People × Creative Experience
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-deep-brown/85">
                I help fast-paced teams build developer ecosystems, design user-centric interfaces, and coordinate complex technical operations with strong async communication.
              </p>
            </motion.div>

            {/* ACTION BUTTONS GROUP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-deep-brown text-cream px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] shadow-md transition-all duration-300 hover:bg-cream hover:text-deep-brown hover:shadow-lg hover:scale-[1.02]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-deep-brown/40 bg-cream/40 backdrop-blur-sm text-deep-brown px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:border-deep-brown hover:bg-deep-brown hover:text-cream"
              >
                <span>Hire / Get in Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* KEY METRICS / ATTRIBUTES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-2 sm:gap-3"
            >
              {[
                "Web3 & Tech Communities",
                "Figma Design Systems",
                "Next.js / React Web",
                "Async-First Workflow",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-cream/60 border border-deep-brown/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-deep-brown/80"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: PORTRAIT PRESENTATION & FLOATING BADGES */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* BACKDROP ROTATING DECORATION */}
              <div className="pointer-events-none absolute -inset-5 rounded-[45%_45%_35%_35%] border-2 border-cream/50" />
              
              <div className="pointer-events-none absolute -inset-10 rounded-[50%_50%_40%_40%] border border-cream/25 border-dashed animate-[spin_60s_linear_infinite]" />

              {/* PHOTO CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[45%_45%_35%_35%] border-2 border-cream bg-pink shadow-[0_25px_60px_rgba(58,41,38,0.22)]">
                <Image
                  src="/images/profile/yasmeenal.jpeg"
                  alt="Yasmeen Almira — Developer Relations & UI/UX Designer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* SOFT GRADIENT OVERLAY AT BOTTOM */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM TICKER / FOOTNOTE */}
        <div className="border-t border-deep-brown/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-[0.18em] text-deep-brown/70">
          <div className="flex items-center gap-4">
            <span>Jakarta, ID · 6.2088° S, 106.8456° E</span>
            <span className="hidden md:inline text-deep-brown/30">|</span>
            <span className="hidden md:inline">Open to Remote Relocation / Travel</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 hover:text-deep-brown transition-colors"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-1" />
          </a>
        </div>

      </div>
    </section>
  );
}