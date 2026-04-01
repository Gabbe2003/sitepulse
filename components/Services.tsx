import {
  Layout,
  Search,
  Server,
  Megaphone,
  Users,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll, { StaggerChildren } from "./AnimateOnScroll";

const services = [
  {
    icon: Layout,
    title: "Webbdesign",
    description:
      "Vi skapar moderna, användarvänliga webbplatser med responsiv design som konverterar besökare till kunder.",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-blue-600",
    accent: "group-hover:border-blue-200",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Sökmotoroptimering som förbättrar din synlighet på Google och driver organisk trafik till din sida.",
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-100",
    iconColor: "text-violet-600",
    accent: "group-hover:border-violet-200",
  },
  {
    icon: Server,
    title: "Hosting & Underhåll",
    description:
      "Säker, snabb hosting med kontinuerligt underhåll, säkerhetsuppdateringar och teknisk support.",
    iconBg: "bg-cyan-50",
    iconBorder: "border-cyan-100",
    iconColor: "text-cyan-600",
    accent: "group-hover:border-cyan-200",
  },
  {
    icon: Megaphone,
    title: "Digital Marknadsföring",
    description:
      "Målgruppsanpassad annonsering i sociala medier och sökmotorer som ger mätbara resultat.",
    iconBg: "bg-pink-50",
    iconBorder: "border-pink-100",
    iconColor: "text-pink-600",
    accent: "group-hover:border-pink-200",
  },
  {
    icon: Users,
    title: "Coaching",
    description:
      "Personlig vägledning om webbdesign, SEO och digital strategi anpassad efter dina specifika mål.",
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-600",
    accent: "group-hover:border-amber-200",
  },
  {
    icon: BarChart2,
    title: "Analys & Strategi",
    description:
      "Datadrivna insikter och strategisk rådgivning för att maximera din digitala närvaro och ROI.",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-600",
    accent: "group-hover:border-emerald-200",
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Vad vi erbjuder
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Allt du behöver för{" "}
              <span className="gradient-text">digital framgång</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Vi erbjuder ett komplett utbud av digitala tjänster för att hjälpa
              ditt företag växa online.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Service cards */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          animation="fade-up"
          stagger={100}
          baseDelay={100}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${service.accent}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${service.iconBg} border ${service.iconBorder} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              <h3 className="text-slate-900 font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-500 text-sm font-medium transition-colors group/link"
              >
                Kom igång
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
