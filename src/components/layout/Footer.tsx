"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#2b1810] text-[#fce7f3] pt-14 pb-12 sm:pt-20 sm:pb-16 rounded-t-[32px] sm:rounded-t-[40px] shadow-2xl font-mono-code overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8 md:px-12">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-10 sm:pb-14 border-b border-white/15">
          
          {/* BRAND COLUMN */}
          <div className="sm:col-span-2">
            <a href="#" className="font-display text-xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Yasmeen Almira</span>
              <span className="font-mono-code text-[11px] px-2 py-0.5 rounded-md bg-[#e11d48]/20 border border-[#e11d48]/40 text-[#fda4af]">v2.6</span>
            </a>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#fce7f3]/80 max-w-md leading-relaxed font-sans font-medium">
              Developer Relations · UI/UX Product Designer · Technical Operations. Open for remote opportunities worldwide across US, EMEA, and APAC timezones.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#fda4af]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR REMOTE CONTRACT & FULL-TIME</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#fda4af] mb-3 sm:mb-4">
              // NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#fce7f3]/75 font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">01 // About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">02 // Experience</a>
              </li>
              <li>
                <a href="#what-i-do" className="hover:text-white transition-colors">03 // Capabilities</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">04 // Projects</a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">05 // Skill Matrix</a>
              </li>
              <li>
                <a href="#beyond-code" className="hover:text-white transition-colors">06 // Philosophy</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">07 // Contact</a>
              </li>
            </ul>
          </div>

          {/* CONNECT & BACK TO TOP */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#fda4af] mb-3 sm:mb-4">
                // TELEMETRY_LINKS
              </h4>
              <ul className="space-y-2 text-xs text-[#fce7f3]/75 font-medium">
                <li>
                  <a
                    href="https://www.linkedin.com/in/almirarayass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Almirayasmn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yasmeenalmira9@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    Direct Email ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6288223740272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp ↗
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 sm:mt-8 self-start inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 sm:py-2.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#e11d48] hover:border-[#e11d48] transition-all shadow-sm cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & METRICS */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-wider text-[#fce7f3]/60 font-semibold text-center sm:text-left">
          <span>
            © 2026 YASMEEN ALMIRA · ALL RIGHTS RESERVED
          </span>

          <span className="flex items-center gap-1.5 text-white">
            DESIGNED & COMPILED IN JAKARTA, ID
          </span>
        </div>

      </div>
    </footer>
  );
}