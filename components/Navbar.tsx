"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#projekt", label: "Projekt" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/app-icon-light-512.png"
              alt="Sitepulse logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Site<span className="text-blue-600">pulse</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:info@sitepulse.se"
              className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
            >
              info@sitepulse.se
            </a>
            <a
              href="#kontakt"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
            >
              Kom igång
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-500 hover:text-slate-900 transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Öppna meny"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-b border-slate-200 px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg px-4 py-3 text-sm font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#kontakt"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Kom igång
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
