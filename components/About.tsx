import { CheckCircle2, Award, Clock, HeartHandshake } from "lucide-react";
import AnimateOnScroll, { StaggerChildren } from "./AnimateOnScroll";

const stats = [
  { value: "40+", label: "Nöjda kunder", sub: "och växer" },
  { value: "50+", label: "Projekt levererade", sub: "sedan 2019" },
  { value: "3+", label: "Års erfarenhet", sub: "i branschen" },
  { value: "24/7", label: "Support", sub: "alltid tillgänglig" },
];

const values = [
  {
    icon: Award,
    title: "Expertis i världsklass",
    desc: "Vårt team har djup kunskap inom webbdesign, SEO och digital marknadsföring.",
  },
  {
    icon: CheckCircle2,
    title: "Resultatfokuserade",
    desc: "Vi mäter alltid framgång i konkreta resultat – ökad trafik, fler leads och bättre konvertering.",
  },
  {
    icon: Clock,
    title: "Levererar i tid",
    desc: "Vi respekterar dina deadlines och håller dig informerad under hela projektets gång.",
  },
  {
    icon: HeartHandshake,
    title: "Långsiktiga partnerskap",
    desc: "Vi ser oss som din digitala partner, inte bara en leverantör. Din framgång är vår framgång.",
  },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
          animation="fade-up"
          stagger={100}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-slate-800 font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-xs">{stat.sub}</div>
            </div>
          ))}
        </StaggerChildren>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <AnimateOnScroll animation="fade-right" duration={700}>
            <div>
              <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
                Om oss
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Kraften av digital{" "}
                <span className="gradient-text">excellence</span> med Sitepulse
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-5">
                Sitepulse Marketing är en digital byrå baserad i Stockholm. Vi
                hjälper företag av alla storlekar att lyckas online med
                skräddarsydda lösningar inom webbdesign, SEO och digital
                marknadsföring.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Med ett team av erfarna experter levererar vi webbplatser och
                strategier som inte bara ser bra ut — de konverterar besökare
                till kunder och driver mätbar tillväxt.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
              >
                Ta kontakt med oss
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right: value props */}
          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            animation="fade-left"
            stagger={120}
            baseDelay={200}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-slate-800 font-semibold text-sm mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
