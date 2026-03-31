"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  SendHorizonal,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adress",
    value: "Tomtebogatan 37, 113 38 Stockholm",
    href: "https://www.google.com/maps/place/Tomtebogatan+37,+113+38+Stockholm/@59.341706,18.0265436,622m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465f9d7867d98ce3:0x1f9240f9a6da584c!8m2!3d59.341706!4d18.0291185!16s%2Fg%2F11cncpjd_x?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "info@sitepulse.se",
    href: "mailto:info@sitepulse.se",
  },
  {
    icon: Clock,
    label: "Öppettider",
    value: "Måndag–Fredag, 09:00–18:00",
    href: null,
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [testStatus, setTestStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handleTest = async () => {
    setTestStatus("loading");
    try {
      const res = await fetch("/api/contact");
      if (!res.ok) throw new Error();
      setTestStatus("ok");
    } catch {
      setTestStatus("error");
    } finally {
      setTimeout(() => setTestStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Något gick fel.");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Kontakta oss
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Redo att ta din{" "}
            <span className="gradient-text">digitala närvaro</span> till nästa
            nivå?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Fyll i formuläret så återkommer vi inom 24 timmar. Eller kontakta
            oss direkt via e-post.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-medium mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors leading-relaxed"
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-700 text-sm font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Quick response promise */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-600 text-sm font-semibold">
                  Vi svarar inom 24 timmar
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper
                dig hitta den bästa lösningen för ditt företag.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {success ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl">
                    Tack för ditt meddelande!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Vi har mottagit ditt meddelande och återkommer till dig inom
                    24 timmar.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Skicka nytt meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-600 text-xs font-medium mb-2">
                        Namn <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ditt namn"
                        className="w-full px-4 py-3 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-medium mb-2">
                        E-post <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="din@email.se"
                        className="w-full px-4 py-3 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-600 text-xs font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+46 70 000 00 00"
                        className="w-full px-4 py-3 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-medium mb-2">
                        Ämne
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer pr-10 ${
                            form.subject ? "text-slate-800" : "text-slate-400"
                          }`}
                        >
                          <option value="" disabled>Välj ämne</option>
                          <option value="webbdesign">Webbdesign</option>
                          <option value="seo">SEO</option>
                          <option value="hosting">Hosting & Underhåll</option>
                          <option value="marknadsforing">Digital Marknadsföring</option>
                          <option value="coaching">Coaching</option>
                          <option value="annat">Annat</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 text-xs font-medium mb-2">
                      Meddelande <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Berätta om ditt projekt eller ställ dina frågor..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Skickar...
                      </>
                    ) : (
                      <>
                        Skicka meddelande
                        <SendHorizonal className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleTest}
                    disabled={testStatus === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-60 disabled:cursor-not-allowed text-slate-500 rounded-xl text-xs font-medium transition-all duration-200"
                  >
                    {testStatus === "loading" ? (
                      <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Skickar test...</>
                    ) : testStatus === "ok" ? (
                      <><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> <span className="text-emerald-600">Testmail skickat!</span></>
                    ) : testStatus === "error" ? (
                      <span className="text-red-500">Misslyckades – kontrollera API-nyckeln</span>
                    ) : (
                      "Skicka testmail"
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    Genom att skicka formuläret godkänner du vår{" "}
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-700 underline"
                    >
                      integritetspolicy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
