import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import WhatIDo from "@/components/home/WhatIDo";
import Projects from "@/components/home/Projects";
import CreativeSide from "@/components/home/CreativeSide";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import BeyondCode from "@/components/home/BeyondCode";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <WhatIDo />
      <Projects />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}