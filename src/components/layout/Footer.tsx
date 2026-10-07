"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-deep-brown text-cream pt-16 pb-12 border-t border-cream/15">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-cream/10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-3xl font-bold tracking-tight text-cream">
              Yasmeen Almira<span className="text-fanta">.</span>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-cream/70 max-w-md leading-relaxed">
              Developer Relations, UI/UX Product Designer, and Technical Operations Specialist. Ready to collaborate with global remote teams.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-fanta">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Remote Opportunities Worldwide</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-fanta mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/75">
              <li>
                <a href="#about" className="hover:text-fanta transition-colors">01 / About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-fanta transition-colors">02 / Experience</a>
              </li>
              <li>
                <a href="#what-i-do" className="hover:text-fanta transition-colors">03 / Capabilities</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-fanta transition-colors">04 / Projects</a>
              </li>
              <li>
                <a href="#stack" className="hover:text-fanta transition-colors">05 / Skills Stack</a>
              </li>
              <li>
                <a href="#beyond-code" className="hover:text-fanta transition-colors">06 / Values</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fanta transition-colors">07 / Contact</a>
              </li>
            </ul>
          </div>

          {/* CONNECT & BACK TO TOP */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-fanta mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs text-cream/75">
                <li>
                  <a
                    href="https://www.linkedin.com/in/almirarayass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fanta transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Almirayasmn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fanta transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yasmeenalmira9@gmail.com"
                    className="hover:text-fanta transition-colors"
                  >
                    Email ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6288223740272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fanta transition-colors"
                  >
                    WhatsApp ↗
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 self-start inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-cream hover:bg-fanta hover:text-deep-brown hover:border-fanta transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & SLOGAN */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-[0.16em] text-cream/45">
          <span>
            © 2026 Yasmeen Almira · All Rights Reserved
          </span>

          <span className="flex items-center gap-1.5">
            Designed & Built with <span className="text-fanta">♥</span> in Jakarta
          </span>

          <span>
            Tech × People × Creativity
          </span>
        </div>

      </div>
    </footer>
  );
}