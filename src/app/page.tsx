"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import WhatIDo from "@/components/home/WhatIDo";
import Projects from "@/components/home/Projects";
import TechStack from "@/components/home/TechStack";
import BeyondCode from "@/components/home/BeyondCode";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative text-white selection:bg-[#fb7185] selection:text-[#1c1214] overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 100% SEAMLESS CONTINUOUS ANIMATED GRADIENT BACKGROUND (NO HARD CUTS) */}
      {/* ========================================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        
        {/* Base Rich Continuous Vertical Gradient (Deep Brown -> Rose Pink -> Deep Mocha -> Pink -> Deep Obsidian) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, #180e10 0%, #241417 12%, #381a24 24%, #6b283d 36%, #b54a6c 46%, #d86b8b 54%, #5a1e30 68%, #2a1118 78%, #6b243b 88%, #160a0d 100%)",
          }}
        />

        {/* DYNAMIC FLOATING ANIMATED AURORA / GRADIENT LIGHT ORBS */}
        {/* Orb 1: Glowing Warm Fanta & Peach Orb */}
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -70, 40, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-[10%] h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#fb7185]/35 via-[#f43f5e]/25 to-transparent blur-[140px]"
        />

        {/* Orb 2: Deep Berry / Warm Rose Aura (Hero -> About transition) */}
        <motion.div
          animate={{
            x: [0, -90, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-40 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#fda4af]/30 via-[#f43f5e]/20 to-transparent blur-[160px]"
        />

        {/* Orb 3: Radiant Luminous Blossom (Experience -> WhatIDo area) */}
        <motion.div
          animate={{
            x: [0, 70, -70, 0],
            y: [0, -50, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[42%] -left-48 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#f472b6]/30 via-[#fb7185]/20 to-transparent blur-[170px]"
        />

        {/* Orb 4: Deep Espresso & Magenta Shadow (Projects -> TechStack area) */}
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[65%] right-[5%] h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#fda4af]/35 via-[#f43f5e]/20 to-transparent blur-[160px]"
        />

        {/* Orb 5: Bottom Soft Sunset Glow (BeyondCode -> Contact area) */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#f43f5e]/30 via-[#a855f7]/15 to-transparent blur-[150px]"
        />

        {/* Subtle Cyber Perspective Grid with smooth opacity */}
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle Stardust Dots */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS — 100% TRANSPARENT WITH ZERO HARD DIVIDERS */}
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Experience />
        <WhatIDo />
        <Projects />
        <TechStack />
        <BeyondCode />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}