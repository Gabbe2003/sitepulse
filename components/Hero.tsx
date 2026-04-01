import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const logos = [
  { src: "/logo/ft.png", alt: "FT" },
  { src: "/logo/claslut.png", alt: "Claslut" },
  { src: "/logo/renovera.png", alt: "Renovera" },
  { src: "/logo/corpvantage_white_transparent.png", alt: "CorpVantage" },
  { src: "/logo/proport.svg", alt: "Proport" },
];

// Repeat enough times to fill the marquee smoothly
const carouselLogos = [...logos, ...logos, ...logos, ...logos];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        {/* Light gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-100/60 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Badge */}
        <AnimateOnScroll animation="fade-down" duration={700}>
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              AI Marketing Platform · Stockholm
            </span>
          </div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll animation="fade-up" delay={150} duration={800}>
          <h1 className="text-center font-extrabold text-slate-900 leading-[1.1] mb-6 max-w-5xl mx-auto">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Designad för{" "}
              <span className="gradient-text">framgång</span>,
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-1">
              utvecklad för{" "}
              <span className="gradient-text">framtiden</span>
            </span>
          </h1>
        </AnimateOnScroll>

        {/* Subtext */}
        <AnimateOnScroll animation="fade-up" delay={300} duration={700}>
          <p className="text-center text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Vi hjälper dig att lyfta din sida till ny nivå med modern webbdesign,
            kraftfull SEO och digital marknadsföring som{" "}
            <span className="text-slate-700 font-medium">ger verkliga resultat</span>.
          </p>
        </AnimateOnScroll>

        {/* CTA buttons */}
        <AnimateOnScroll animation="fade-up" delay={450} duration={700}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/35 hover:scale-[1.02]"
            >
              Kom igång nu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tjanster"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-semibold text-base transition-all duration-200 shadow-sm"
            >
              Se våra tjänster
            </a>
          </div>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll animation="fade-up" delay={600} duration={700}>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-4">
          {[
            { value: "40+", label: "Nöjda kunder" },
            { value: "50+", label: "Projekt levererade" },
            { value: "2+", label: "Års erfarenhet" },
            { value: "24/7", label: "Support tillgänglig" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>

      {/* Client carousel */}
      <div className="relative z-10 w-full pt-10 pb-20 bg-blue-950">
        <p className="text-center text-blue-300/60 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          Betrodda av ledande företag
        </p>

        {/* Row 1 — left scroll */}
        <div className="marquee-wrapper overflow-hidden mb-4">
          <div className="flex">
            <div className="flex gap-8 animate-marquee w-max">
              {[...carouselLogos, ...carouselLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-6 py-4 bg-blue-900/50 border border-blue-800/50 rounded-xl flex-shrink-0 hover:bg-blue-800/50 transition-all duration-200"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto max-w-[180px] object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="marquee-wrapper overflow-hidden">
          <div className="flex">
            <div className="flex gap-8 animate-marquee-reverse w-max">
              {[...[...carouselLogos].reverse(), ...[...carouselLogos].reverse()].map(
                (logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-6 py-4 bg-blue-900/50 border border-blue-800/50 rounded-xl flex-shrink-0 hover:bg-blue-800/50 transition-all duration-200"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 w-auto max-w-[180px] object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-950 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-950 to-transparent pointer-events-none z-10" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-5 h-5 text-slate-300" />
      </div>
    </section>
  );
}
