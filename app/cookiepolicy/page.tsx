import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cookiepolicy – Sitepulse Marketing",
  description:
    "Läs om hur Sitepulse Marketing AB använder cookies och liknande spårningstekniker på sin webbplats.",
};

export default function CookiepolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/app-icon-light-512.png"
              alt="Sitepulse"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-slate-900">
              Site<span className="text-blue-600">pulse</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Juridisk information
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Cookiepolicy
          </h1>
          <p className="text-slate-500 text-sm">
            Senast uppdaterad: 1 mars 2025
          </p>
        </div>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Vad är cookies?
            </h2>
            <p>
              Cookies är små textfiler som lagras på din enhet (dator, telefon
              eller surfplatta) när du besöker en webbplats. De hjälper
              webbplatsen att komma ihåg dina inställningar, förbättra din
              upplevelse och ge oss statistik om hur sidan används.
            </p>
            <p className="mt-3">
              Förutom traditionella cookies kan vi även använda liknande
              tekniker som lokal lagring (localStorage) och sessionlagring
              (sessionStorage) för liknande ändamål.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Vilka cookies använder vi?
            </h2>

            {[
              {
                typ: "Nödvändiga cookies",
                badge: "Krävs alltid",
                badgeColor: "bg-slate-100 text-slate-600",
                beskrivning:
                  "Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av. De sätts vanligtvis som svar på åtgärder du vidtar, till exempel att fylla i ett formulär eller ange dina cookie-inställningar. De innehåller ingen personligt identifierbar information.",
                exempel: [
                  {
                    namn: "cookieConsent",
                    syfte: "Sparar ditt samtyckesbeslut",
                    varaktighet: "12 månader",
                  },
                  {
                    namn: "__cf_bm",
                    syfte: "Cloudflare bot-skydd",
                    varaktighet: "30 minuter",
                  },
                ],
              },
              {
                typ: "Funktionella cookies",
                badge: "Valfritt",
                badgeColor: "bg-blue-50 text-blue-600",
                beskrivning:
                  "Dessa cookies tillåter webbplatsen att erbjuda förbättrad funktionalitet och personalisering. De kan sättas av oss eller av tredjeparts leverantörer vars tjänster vi har lagt till på sidorna.",
                exempel: [
                  {
                    namn: "lang",
                    syfte: "Sparar valt språk",
                    varaktighet: "Session",
                  },
                  {
                    namn: "theme",
                    syfte: "Sparar valda visningsinställningar",
                    varaktighet: "6 månader",
                  },
                ],
              },
              {
                typ: "Analytiska cookies",
                badge: "Valfritt",
                badgeColor: "bg-blue-50 text-blue-600",
                beskrivning:
                  "Vi använder Google Analytics för att förstå hur besökare interagerar med vår webbplats. All data samlas in anonymt och aggregerat – vi kan inte identifiera enskilda personer. Informationen hjälper oss att förbättra webbplatsens innehåll och prestanda.",
                exempel: [
                  {
                    namn: "_ga",
                    syfte: "Google Analytics – identifierar unika besökare",
                    varaktighet: "2 år",
                  },
                  {
                    namn: "_ga_*",
                    syfte: "Google Analytics – sessionsdata",
                    varaktighet: "2 år",
                  },
                  {
                    namn: "_gid",
                    syfte: "Google Analytics – särskiljer användare",
                    varaktighet: "24 timmar",
                  },
                ],
              },
              {
                typ: "Marknadsföringscookies",
                badge: "Valfritt",
                badgeColor: "bg-blue-50 text-blue-600",
                beskrivning:
                  "Dessa cookies används för att spåra besökare på webbplatser och visa relevanta annonser. Vi kan använda Google Ads- och Meta-pixlar för att mäta effekten av vår annonsering. De aktiveras enbart med ditt samtycke.",
                exempel: [
                  {
                    namn: "_fbp",
                    syfte: "Meta (Facebook) – spårningspixel",
                    varaktighet: "3 månader",
                  },
                  {
                    namn: "_gcl_au",
                    syfte: "Google Ads – konverteringsspårning",
                    varaktighet: "3 månader",
                  },
                ],
              },
            ].map((kategori) => (
              <div
                key={kategori.typ}
                className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-slate-800 text-base">
                    {kategori.typ}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${kategori.badgeColor}`}
                  >
                    {kategori.badge}
                  </span>
                </div>
                <p className="text-sm mb-4">{kategori.beskrivning}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 pr-4 font-semibold text-slate-700">
                          Namn
                        </th>
                        <th className="text-left py-2 pr-4 font-semibold text-slate-700">
                          Syfte
                        </th>
                        <th className="text-left py-2 font-semibold text-slate-700">
                          Varaktighet
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {kategori.exempel.map((ex) => (
                        <tr key={ex.namn}>
                          <td className="py-2 pr-4 font-mono text-slate-700">
                            {ex.namn}
                          </td>
                          <td className="py-2 pr-4">{ex.syfte}</td>
                          <td className="py-2 text-slate-500">
                            {ex.varaktighet}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Ditt samtycke
            </h2>
            <p>
              Nödvändiga cookies kräver inget samtycke eftersom de är
              nödvändiga för webbplatsens funktion. För alla övriga cookies
              ber vi om ditt samtycke när du besöker webbplatsen för första
              gången via vår cookiebanner.
            </p>
            <p className="mt-3">
              Du kan när som helst ändra eller återkalla ditt samtycke genom
              att klicka på länken "Cookie-inställningar" i sidfoten, eller
              genom att rensa cookies i din webbläsare.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Hantera cookies i din webbläsare
            </h2>
            <p className="mb-3">
              Du kan kontrollera och/eller radera cookies via din webbläsares
              inställningar. Tänk på att om du inaktiverar cookies kan delar
              av webbplatsen sluta fungera korrekt. Här är instruktioner för
              de vanligaste webbläsarna:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Google Chrome – Inställningar → Sekretess och säkerhet → Cookies",
                "Mozilla Firefox – Inställningar → Sekretess och säkerhet → Cookies",
                "Safari (Mac/iOS) – Inställningar → Safari → Sekretess",
                "Microsoft Edge – Inställningar → Cookies och webbplatsbehörigheter",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Tredjepartscookies
            </h2>
            <p>
              Vissa cookies på vår webbplats sätts av tredjepartsleverantörer,
              exempelvis Google och Meta. Dessa parter har egna
              integritetspolicyer som styr hur de hanterar information.
              Vi rekommenderar att du läser deras respektive policyer.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Ändringar i cookiepolicyn
            </h2>
            <p>
              Vi kan komma att uppdatera denna cookiepolicy. Den senaste
              versionen publiceras alltid på denna sida med ett uppdaterat
              datum. Vi rekommenderar att du granskar policyn regelbundet.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Kontakta oss
            </h2>
            <p>
              Har du frågor om vår användning av cookies är du välkommen att
              kontakta oss:
            </p>
            <address className="mt-3 not-italic space-y-1">
              <p className="font-semibold text-slate-800">
                Sitepulse Marketing AB
              </p>
              <p>Tomtebogatan 37, 113 38 Stockholm</p>
              <p>
                <a
                  href="mailto:info@sitepulse.se"
                  className="text-blue-600 hover:underline"
                >
                  info@sitepulse.se
                </a>
              </p>
            </address>
            <p className="mt-4">
              Du kan även läsa vår{" "}
              <Link
                href="/integritetspolicy"
                className="text-blue-600 hover:underline"
              >
                integritetspolicy
              </Link>{" "}
              för mer information om hur vi hanterar dina personuppgifter.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} Sitepulse Marketing AB · Alla rättigheter förbehållna
      </footer>
    </div>
  );
}
