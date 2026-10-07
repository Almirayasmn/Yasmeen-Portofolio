"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Globe } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "What I Do", href: "#what-i-do" },
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
            className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 ${
              scrolled
                ? "bg-cream/80 backdrop-blur-md shadow-[0_10px_30px_rgba(58,41,38,0.08)] border border-deep-brown/10 text-deep-brown"
                : "bg-transparent text-deep-brown"
            }`}
          >
            {/* LEFT — IDENTITY & REMOTE BADGE */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group flex items-center gap-2 font-display text-lg sm:text-xl font-bold tracking-tight text-deep-brown transition-transform duration-300 hover:scale-[1.02]"
              >
                <span>Yasmeen</span>
                <span className="text-fanta">.</span>
              </a>

              {/* REMOTE STATUS BADGE */}
              <div className="hidden lg:flex items-center gap-1.5 rounded-full bg-cream/90 border border-deep-brown/10 px-3 py-1 shadow-sm text-[10px] font-semibold tracking-wide text-deep-brown/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Remote</span>
              </div>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-deep-brown bg-fanta/20"
                        : "text-deep-brown/70 hover:text-deep-brown hover:bg-black/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* RIGHT — ACTIONS */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* RESUME BUTTON */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-deep-brown/20 bg-cream/50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-deep-brown transition-all duration-300 hover:border-deep-brown hover:bg-deep-brown hover:text-cream"
              >
                <FileText className="h-3 w-3" />
                <span>Resume</span>
              </a>

              {/* CONTACT CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-deep-brown text-cream px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:bg-fanta hover:text-deep-brown hover:shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full border border-deep-brown/20 text-deep-brown hover:bg-deep-brown/5 focus:outline-none"
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
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-cream/95 backdrop-blur-xl border border-deep-brown/15 p-6 shadow-2xl md:hidden text-deep-brown"
          >
            <div className="flex items-center justify-between pb-4 border-b border-deep-brown/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-brown/80">
                  Open for Remote Roles (UTC+7)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider text-deep-brown/80 hover:text-deep-brown hover:bg-fanta/20 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-fanta" />
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-deep-brown/10 flex flex-col gap-3">
              <a
                href="mailto:yasmeenalmira9@gmail.com"
                className="w-full text-center py-3 rounded-2xl bg-deep-brown text-cream font-bold text-xs uppercase tracking-wider hover:bg-fanta hover:text-deep-brown transition-colors"
              >
                Email Yasmeen Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
