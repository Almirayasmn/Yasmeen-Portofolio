"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Capabilities", href: "#what-i-do" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Values", href: "#beyond-code" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-[1500px]">
          <nav
            className={`flex items-center justify-between transition-all duration-300 rounded-2xl px-5 sm:px-7 py-3 border ${
              scrolled
                ? "bg-white/85 backdrop-blur-2xl border-[#2b1810]/15 shadow-[0_10px_30px_rgba(43,24,16,0.08)]"
                : "bg-white/60 backdrop-blur-md border-[#2b1810]/10 shadow-sm"
            }`}
          >
            {/* LEFT — BRAND IDENTITY */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group flex items-center gap-2 font-display text-lg sm:text-xl font-bold tracking-tight text-[#2b1810] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48] shadow-[0_0_10px_rgba(225,29,72,0.6)]" />
                <span className="tracking-tight">Yasmeen Almira</span>
                <span className="font-mono-code text-[11px] text-[#e11d48] font-bold opacity-85 group-hover:opacity-100 transition-opacity">
                  // DEVREL
                </span>
              </a>

              {/* RADAR STATUS BADGE */}
              <div className="hidden xl:flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-300/60 px-3 py-1 text-[10px] font-mono-code font-bold tracking-wider text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>OPEN_TO_WORK</span>
              </div>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#2b1810]/[0.05] p-1 rounded-xl border border-[#2b1810]/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-200 rounded-lg ${
                      isActive
                        ? "text-[#fce7f3] bg-[#2b1810] shadow-sm"
                        : "text-[#3a221c]/75 hover:text-[#2b1810] hover:bg-white/60"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* RIGHT — ACTIONS */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* CONTACT CTA */}
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-xl bg-[#2b1810] text-[#fce7f3] px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:bg-[#e11d48] hover:text-white hover:shadow-lg hover:scale-[1.02]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl border border-[#2b1810]/15 text-[#2b1810] hover:bg-white/60 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#2b1810]/15 p-6 shadow-2xl md:hidden text-[#2b1810]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#2b1810]/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-mono-code font-bold tracking-wider text-emerald-800">
                  STATUS: OPEN_TO_WORK (UTC+7)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#3a221c] hover:text-white hover:bg-[#2b1810] transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#e11d48]" />
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2b1810]/10 flex flex-col gap-3">
              <a
                href="mailto:yasmeenalmira9@gmail.com"
                className="w-full text-center py-3.5 rounded-xl bg-[#2b1810] text-[#fce7f3] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#e11d48] hover:text-white transition-all"
              >
                Send Direct Transmission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
