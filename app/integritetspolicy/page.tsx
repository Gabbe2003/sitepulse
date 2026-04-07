import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integritetspolicy – Sitepulse Marketing",
  description:
    "Läs om hur Sitepulse Marketing AB samlar in, behandlar och skyddar dina personuppgifter i enlighet med GDPR.",
  alternates: {
    canonical: "https://sitepulse.se/integritetspolicy",
  },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple top bar */}
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
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Juridisk information
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Integritetspolicy
          </h1>
          <p className="text-slate-500 text-sm">
            Senast uppdaterad: 1 mars 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Personuppgiftsansvarig
            </h2>
            <p>
              Sitepulse Marketing AB, organisationsnummer 559XXX-XXXX, med
              adress Tomtebogatan 37, 113 38 Stockholm, är personuppgiftsansvarig
              för behandlingen av dina personuppgifter. Du når oss på{" "}
              <a
                href="mailto:info@sitepulse.se"
                className="text-blue-600 hover:underline"
              >
                info@sitepulse.se
              </a>
              .
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Vilka uppgifter vi samlar in
            </h2>
            <p className="mb-3">
              Vi samlar in personuppgifter som du själv lämnar till oss, till
              exempel när du:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Fyller i kontaktformuläret på vår webbplats</li>
              <li>Skickar e-post eller ringer till oss</li>
              <li>Tecknar avtal om någon av våra tjänster</li>
              <li>Prenumererar på vårt nyhetsbrev</li>
            </ul>
            <p className="mt-3">
              De kategorier av personuppgifter vi behandlar inkluderar: namn,
              e-postadress, telefonnummer (valfritt), företagsnamn samt det
              innehåll du skriver i dina meddelanden till oss.
            </p>
            <p className="mt-3">
              Vi samlar även automatiskt in tekniska uppgifter via cookies och
              analysverktyg, såsom IP-adress, webbläsartyp, besökta sidor och
              besökstid. Mer information finns i vår{" "}
              <Link href="/cookiepolicy" className="text-blue-600 hover:underline">
                cookiepolicy
              </Link>
              .
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Varför vi behandlar dina uppgifter
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 pr-6 font-semibold text-slate-800">
                      Ändamål
                    </th>
                    <th className="text-left py-3 pr-6 font-semibold text-slate-800">
                      Rättslig grund
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Besvara förfrågningar via kontaktformulär och e-post",
                      "Berättigat intresse",
                    ],
                    [
                      "Ingå och uppfylla avtal om tjänster",
                      "Avtalets fullgörande",
                    ],
                    [
                      "Skicka relevant information och nyhetsbrev",
                      "Samtycke",
                    ],
                    [
                      "Uppfylla bokförings- och skattekrav",
                      "Rättslig förpliktelse",
                    ],
                    [
                      "Förbättra och analysera användningen av webbplatsen",
                      "Berättigat intresse / samtycke",
                    ],
                  ].map(([syfte, grund]) => (
                    <tr key={syfte}>
                      <td className="py-3 pr-6 text-slate-600">{syfte}</td>
                      <td className="py-3 text-slate-600">{grund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Hur länge vi sparar uppgifterna
            </h2>
            <p className="mb-3">
              Vi sparar dina personuppgifter så länge det är nödvändigt för det
              ändamål de samlades in, eller så länge det krävs enligt lag:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">Kontaktförfrågningar:</strong>{" "}
                Raderas 12 månader efter ärendets avslutande.
              </li>
              <li>
                <strong className="text-slate-800">Kundavtal och fakturor:</strong>{" "}
                Sparas i 7 år enligt bokföringslagen.
              </li>
              <li>
                <strong className="text-slate-800">Nyhetsbrev:</strong> Tills du
                avregistrerar dig.
              </li>
              <li>
                <strong className="text-slate-800">Analysdata:</strong> Sparas
                i enlighet med vår cookiepolicy, normalt 12–26 månader.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Delning med tredje part
            </h2>
            <p className="mb-3">
              Vi säljer aldrig dina personuppgifter. Vi kan dela uppgifter med:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">IT-leverantörer:</strong>{" "}
                Tjänsteleverantörer för hosting, e-post och CRM som behandlar
                data på uppdrag av oss (personuppgiftsbiträden).
              </li>
              <li>
                <strong className="text-slate-800">Google Analytics:</strong>{" "}
                Anonymiserad statistik om webbplatsanvändning.
              </li>
              <li>
                <strong className="text-slate-800">Myndigheter:</strong> Om vi är
                skyldiga att lämna ut uppgifter enligt lag.
              </li>
            </ul>
            <p className="mt-3">
              Alla leverantörer som behandlar personuppgifter för vår räkning är
              bundna av personuppgiftsbiträdesavtal och får inte använda
              uppgifterna för egna ändamål.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Överföring utanför EU/EES
            </h2>
            <p>
              Vi strävar efter att hålla all databehandling inom EU/EES. Om data
              undantagsvis överförs till tredjeland sker det med stöd av
              EU-kommissionens standardavtalsklausuler (SCC) eller annat giltigt
              skyddsalternativ.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Dina rättigheter
            </h2>
            <p className="mb-3">
              Enligt GDPR har du följande rättigheter:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">Tillgång:</strong> Rätt att
                begära ett registerutdrag över de uppgifter vi har om dig.
              </li>
              <li>
                <strong className="text-slate-800">Rättelse:</strong> Rätt att
                få felaktiga uppgifter korrigerade.
              </li>
              <li>
                <strong className="text-slate-800">Radering:</strong> Rätt att
                begära att vi raderar dina uppgifter ("rätten att bli glömd"),
                under förutsättning att ingen rättslig förpliktelse hindrar det.
              </li>
              <li>
                <strong className="text-slate-800">Begränsning:</strong> Rätt att
                begära att behandlingen av dina uppgifter begränsas i vissa
                situationer.
              </li>
              <li>
                <strong className="text-slate-800">Dataportabilitet:</strong>{" "}
                Rätt att få ut uppgifter du lämnat i ett strukturerat,
                maskinläsbart format.
              </li>
              <li>
                <strong className="text-slate-800">Invändning:</strong> Rätt att
                invända mot behandling som grundar sig på berättigat intresse.
              </li>
              <li>
                <strong className="text-slate-800">
                  Återkalla samtycke:
                </strong>{" "}
                Om behandlingen grundar sig på samtycke kan du när som helst
                återkalla det utan att det påverkar lagligheten av behandlingen
                dessförinnan.
              </li>
            </ul>
            <p className="mt-4">
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a
                href="mailto:info@sitepulse.se"
                className="text-blue-600 hover:underline"
              >
                info@sitepulse.se
              </a>
              . Vi svarar inom 30 dagar.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              8. Klagomål till tillsynsmyndigheten
            </h2>
            <p>
              Om du anser att vi behandlar dina uppgifter på ett felaktigt sätt
              har du rätt att lämna in ett klagomål till{" "}
              <strong className="text-slate-800">
                Integritetsskyddsmyndigheten (IMY)
              </strong>
              , Box 8114, 104 20 Stockholm, e-post:{" "}
              <a
                href="mailto:imy@imy.se"
                className="text-blue-600 hover:underline"
              >
                imy@imy.se
              </a>
              .
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              9. Ändringar i policyn
            </h2>
            <p>
              Vi kan komma att uppdatera denna integritetspolicy. Vid väsentliga
              ändringar meddelar vi dig via e-post eller genom ett tydligt
              meddelande på webbplatsen. Den senaste versionen publiceras alltid
              här.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              10. Kontakta oss
            </h2>
            <p>
              Har du frågor om hur vi hanterar dina personuppgifter är du
              välkommen att kontakta oss:
            </p>
            <address className="mt-3 not-italic text-slate-600 space-y-1">
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
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} Sitepulse Marketing AB · Alla rättigheter förbehållna
      </footer>
    </div>
  );
}
