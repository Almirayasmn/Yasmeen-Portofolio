"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Capabilities", href: "#what-i-do" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Philosophy", href: "#beyond-code" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-10 ${
          scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-[1500px]">
          <nav
            className={`flex items-center justify-between transition-all duration-300 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 border ${
              scrolled
                ? "bg-[#25120f]/90 backdrop-blur-2xl border-white/20 shadow-[0_10px_35px_rgba(37,18,15,0.5)]"
                : "bg-white/15 backdrop-blur-xl border-white/25 shadow-lg"
            }`}
          >
            {/* LEFT — BRAND IDENTITY */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#"
                className="group flex items-center gap-2 font-display text-base sm:text-xl font-bold tracking-tight text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-[#fb7185] shadow-[0_0_10px_rgba(251,113,133,0.8)]" />
                <span className="tracking-tight text-white">Yasmeen Almira</span>
                <span className="hidden sm:inline font-mono-code text-[11px] text-[#fda4af] font-bold opacity-90">
                  // DEVREL
                </span>
              </a>

              {/* RADAR STATUS BADGE */}
              <div className="hidden xl:flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-[10px] font-mono-code font-bold tracking-wider text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>OPEN_TO_WORK</span>
              </div>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-black/20 p-1 rounded-xl border border-white/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-200 rounded-lg ${
                      isActive
                        ? "text-[#25120f] bg-[#fda4af] font-extrabold shadow-sm"
                        : "text-white/85 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* RIGHT — ACTIONS */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* DESKTOP CONTACT CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-[#25120f] px-4 sm:px-5 py-2 text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,113,133,0.6)] hover:scale-[1.02]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* MOBILE MENU TOGGLE BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl border border-white/20 bg-black/20 text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5 text-[#fda4af]" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-[70px] z-40 rounded-3xl bg-[#25120f]/95 backdrop-blur-2xl border border-white/20 p-5 shadow-2xl md:hidden text-white"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[11px] font-mono-code font-bold tracking-wider text-emerald-300">
                  OPEN TO WORK (UTC+7)
                </span>
              </div>
              <span className="text-[10px] font-mono-code text-white/50">MENU</span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white/90 hover:text-[#25120f] hover:bg-[#fda4af] transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#fb7185]" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-[#25120f] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
