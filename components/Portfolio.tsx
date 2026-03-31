import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Finanstid",
    description: "Nyheter & Finansiell Media",
    url: "https://finanstid.se/",
    image: "/companies/finanstid.png",
    tag: "Nyheter",
  },
  {
    name: "CorpVantage",
    description: "Investor Relations",
    url: "https://corpvantage.se/",
    image: "/companies/corpvantage.png",
    tag: "Investor Relations",
  },
  {
    name: "Reachely",
    description: "E-postmarknadsföring",
    url: "https://reachely.com/",
    image: "/companies/reachely.png",
    tag: "Email Marketing",
  },
  {
    name: "Renovera Badrum Stockholm",
    description: "Rot & Rut-tjänster",
    url: "https://renoverabadrumsthlm.se/",
    image: "/companies/renovera.png",
    tag: "Rot & Rut",
  },
  {
    name: "Strictboard",
    description: "Styrelseportal",
    url: "https://strictboard.com/",
    image: "/companies/strictboard.png",
    tag: "Styrelseportal",
  },
  {
    name: "Proport",
    description: "Fastighetsinvestering",
    url: "https://proport.se/",
    image: "/companies/proport.png",
    tag: "Investment",
  },
];

const tagStyles: Record<string, string> = {
  Nyheter: "bg-blue-50 text-blue-600 border-blue-100",
  "Investor Relations": "bg-violet-50 text-violet-600 border-violet-100",
  "Email Marketing": "bg-cyan-50 text-cyan-600 border-cyan-100",
  "Rot & Rut": "bg-emerald-50 text-emerald-600 border-emerald-100",
  Styrelseportal: "bg-amber-50 text-amber-600 border-amber-100",
  Investment: "bg-orange-50 text-orange-600 border-orange-100",
};

export default function Portfolio() {
  return (
    <section
      id="projekt"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Våra projekt
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Vad vi har{" "}
            <span className="gradient-text">byggt</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Ett urval av webbplatser vi har designat, byggt och optimerat för
            våra kunder.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                projects.length % 3 !== 0 && index === projects.length - 1 && projects.length % 3 === 1
                  ? "lg:col-span-3"
                  : projects.length % 3 === 2 && index === projects.length - 2
                  ? "lg:col-span-1"
                  : ""
              }`}
            >
              {/* Hero screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`Skärmdump av ${project.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold">
                    Besök webbplatsen
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                {/* Browser bar decoration */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-slate-200/90 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-slate-300/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 flex-1 bg-white/70 rounded text-slate-500 text-[10px] px-2 py-0.5 truncate font-mono">
                    {project.url.replace("https://", "")}
                  </span>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {project.name}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    {project.description}
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    tagStyles[project.tag] ?? "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {project.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
          >
            Starta ditt projekt
          </a>
        </div>
      </div>
    </section>
  );
}
