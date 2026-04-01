import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const footerLinks = {
  Tjänster: [
    { label: "Webbdesign", href: "#tjanster" },
    { label: "SEO", href: "#tjanster" },
    { label: "Hosting & Underhåll", href: "#tjanster" },
    { label: "Digital Marknadsföring", href: "#tjanster" },
    { label: "Coaching", href: "#tjanster" },
    { label: "Analys & Strategi", href: "#tjanster" },
  ],
  Företaget: [
    { label: "Om oss", href: "#om-oss" },
    { label: "Projekt", href: "#projekt" },
    { label: "Kontakt", href: "#kontakt" },
    { label: "Integritetspolicy", href: "/integritetspolicy" },
    { label: "Cookiepolicy", href: "/cookiepolicy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/app-icon-light-512.png"
                alt="Sitepulse logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                Site<span className="text-blue-400">pulse</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Vi hjälper företag att lyckas online med modern webbdesign,
              kraftfull SEO och digital marknadsföring som ger verkliga
              resultat.
            </p>

            <div className="space-y-2.5">
              <a
                href="mailto:info@sitepulse.se"
                className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                info@sitepulse.se
              </a>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                Tomtebogatan 37, 113 38 Stockholm
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-start gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimateOnScroll animation="zoom-in">
        <div className="py-8 px-8 mb-10 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">
              Redo att ta nästa steg?
            </h3>
            <p className="text-slate-400 text-sm">
              Boka en kostnadsfri konsultation idag.
            </p>
          </div>
          <a
            href="#kontakt"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/25 group"
          >
            Kom igång gratis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        </AnimateOnScroll>

        {/* Bottom bar */}
        <div className="text-white py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>
            © {new Date().getFullYear()} Sitepulse Marketing AB. Alla rättigheter förbehållna.
          </span>
          <span>Huddinge, Stockholm · Sverige</span>
        </div>
      </div>
    </footer>
  );
}
