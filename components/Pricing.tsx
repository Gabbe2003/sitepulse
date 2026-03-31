import { Check, Zap, Star, Building2 } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    tagline: "Perfekt för nystartade",
    price: "2 499",
    period: "kr/mån",
    description: "Allt du behöver för att komma igång med din digitala närvaro.",
    featured: false,
    cta: "Kom igång",
    features: [
      "Responsiv webbdesign (upp till 5 sidor)",
      "SSL-certifikat ingår",
      "Hosting & domän",
      "Grundläggande SEO-setup",
      "Mobilanpassad design",
      "E-postsupport",
      "1 revisionsrunda",
    ],
  },
  {
    icon: Star,
    name: "Pro",
    tagline: "Mest populär",
    price: "4 999",
    period: "kr/mån",
    description: "Komplett paket för företag som vill växa snabbt online.",
    featured: true,
    cta: "Starta nu",
    features: [
      "Allt i Starter",
      "Upp till 15 sidor",
      "Avancerad SEO-optimering",
      "Google Analytics setup",
      "Social media integration",
      "Prioriterad support 24/7",
      "Månatlig rapport",
      "3 revisionsrundor",
    ],
  },
  {
    icon: Building2,
    name: "Enterprise",
    tagline: "Skräddarsydda lösningar",
    price: "Kontakta oss",
    period: "",
    description: "Fullständig digital närvaro för etablerade företag.",
    featured: false,
    cta: "Boka ett möte",
    features: [
      "Allt i Pro",
      "Obegränsat antal sidor",
      "E-handelslösning",
      "Custom integrationer & API",
      "Dedikerad projektledare",
      "SLA-avtal",
      "Strategiska kvartalsmöten",
      "White-label rapportering",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Prisplaner
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Transparenta priser,{" "}
            <span className="gradient-text">inga överraskningar</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Välj den plan som passar ditt företag. Alla priser är exklusive moms
            och vi erbjuder alltid en kostnadsfri konsultation.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-b from-blue-600 to-blue-700 border border-blue-500 shadow-2xl shadow-blue-500/25 lg:-mt-4 lg:scale-[1.03]"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Most popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold tracking-wide shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Mest populär
                  </span>
                </div>
              )}

              {/* Icon + name */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    plan.featured
                      ? "bg-white/20 border border-white/30"
                      : "bg-blue-50 border border-blue-100"
                  }`}
                >
                  <plan.icon
                    className={`w-5 h-5 ${
                      plan.featured ? "text-white" : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`text-xs font-semibold tracking-wide uppercase mb-0.5 ${
                      plan.featured ? "text-blue-200" : "text-blue-600"
                    }`}
                  >
                    {plan.tagline}
                  </div>
                  <div
                    className={`font-bold text-xl ${
                      plan.featured ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-end gap-1">
                  <span
                    className={`font-extrabold leading-none ${
                      plan.period ? "text-4xl" : "text-2xl"
                    } ${plan.featured ? "text-white" : "text-slate-900"}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm mb-1 ${
                        plan.featured ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <p
                className={`text-sm mb-6 leading-relaxed ${
                  plan.featured ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`block w-full text-center py-3 rounded-xl text-sm font-semibold mb-7 transition-all duration-200 hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20"
                }`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${
                  plan.featured ? "bg-white/20" : "bg-slate-100"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? "bg-white/20" : "bg-blue-50"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.featured ? "text-white" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm leading-snug ${
                        plan.featured ? "text-blue-50" : "text-slate-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Alla priser exklusive moms. Kontakta oss för en kostnadsfri konsultation.
        </p>
      </div>
    </section>
  );
}
