"use client";

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
    <div className="min-h-screen flex flex-col bg-cream text-deep-brown">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <WhatIDo />
        <Projects />
        <TechStack />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}