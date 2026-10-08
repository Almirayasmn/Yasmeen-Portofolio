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
    <div className="min-h-screen flex flex-col relative text-[#2b1810] bg-[#fdf2f8] selection:bg-[#2b1810] selection:text-[#fce7f3] overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 100% SEAMLESS CONTINUOUS ANIMATED PASTEL PINK & CREAM GRADIENT BACKGROUND */}
      {/* ========================================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        
        {/* Continuous Master Vertical Gradient (Pastel Blush -> Rose Pink -> Cream Peach -> Soft Blossom) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 18%, #fbcfe8 35%, #ffd6e0 52%, #fef3c7 70%, #fce7f3 86%, #fdf2f8 100%)",
          }}
        />

        {/* DYNAMIC FLOATING ANIMATED PASTEL LIGHT ORBS */}
        {/* Orb 1: Sweet Strawberry & Fanta Glow (Hero Area) */}
        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-[12%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#fb7185]/35 via-[#f472b6]/25 to-transparent blur-[130px]"
        />

        {/* Orb 2: Warm Peachy Cream Aura (About Area) */}
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 70, -50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] -right-32 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#fed7aa]/50 via-[#fbcfe8]/40 to-transparent blur-[150px]"
        />

        {/* Orb 3: Luminous Blossom Pink (Experience & What I Do) */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -50, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[38%] -left-36 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#f472b6]/35 via-[#fda4af]/30 to-transparent blur-[160px]"
        />

        {/* Orb 4: Warm Custard & Rose Twilight (Projects & Stack) */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[8%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#fed7aa]/45 via-[#fbcfe8]/35 to-transparent blur-[150px]"
        />

        {/* Orb 5: Soft Sunset Rose (Values & Contact) */}
        <motion.div
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] left-[25%] h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#fb7185]/35 via-[#fda4af]/30 to-transparent blur-[140px]"
        />

        {/* Subtle Fine Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "linear-gradient(rgba(43, 24, 16, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 24, 16, 0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle Soft Stardust Dots */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(rgba(43, 24, 16, 0.12) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT SECTIONS — 100% SEAMLESS & HIGH CONTRAST */}
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