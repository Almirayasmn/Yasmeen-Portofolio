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
    <div className="min-h-screen flex flex-col relative text-white selection:bg-[#fb7185] selection:text-[#2b1810] overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 100% SEAMLESS CONTINUOUS ANIMATED PINK & CHOCOLATE GRADIENT BACKGROUND */}
      {/* ========================================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        
        {/* Continuous Master Vertical Gradient (Deep Chocolate -> Warm Pink -> Blossom -> Chocolate) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, #321c18 0%, #4a2722 10%, #7d3346 22%, #d96282 34%, #f896ab 44%, #fda4af 52%, #e2718e 62%, #7a2f42 74%, #3d201c 86%, #25120f 100%)",
          }}
        />

        {/* DYNAMIC FLOATING ANIMATED PINK & CHOCOLATE LIGHT ORBS */}
        {/* Orb 1: Vibrant Hot Pink & Fanta Glow (Hero Area) */}
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -70, 40, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-[10%] h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#fb7185]/45 via-[#f43f5e]/30 to-transparent blur-[140px]"
        />

        {/* Orb 2: Deep Chocolate & Berry Shadow (About Area) */}
        <motion.div
          animate={{
            x: [0, -90, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] -right-36 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#321c18]/60 via-[#f472b6]/30 to-transparent blur-[160px]"
        />

        {/* Orb 3: Luminous Sweet Rose Pink (Experience & What I Do) */}
        <motion.div
          animate={{
            x: [0, 70, -70, 0],
            y: [0, -50, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[38%] -left-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#fda4af]/45 via-[#fb7185]/35 to-transparent blur-[160px]"
        />

        {/* Orb 4: Rich Mocha Chocolate & Rose Twilight (Projects & Stack) */}
        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[5%] h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#fb7185]/40 via-[#321c18]/50 to-transparent blur-[160px]"
        />

        {/* Orb 5: Radiant Pink Sunset Glow (Values & Contact) */}
        <motion.div
          animate={{
            x: [0, 60, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] left-[20%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#fb7185]/45 via-[#f43f5e]/30 to-transparent blur-[150px]"
        />

        {/* Subtle Cyber-Editorial Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle Stardust Dots */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
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