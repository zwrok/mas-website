import Link from "next/link";
import type { Metadata } from "next";
import { nadchodzace, archiwum } from "@/data/wydarzenia";

export const metadata: Metadata = {
  title: "Wydarzenia — Modular Art Studio",
  description:
    "Nadchodzące i archiwalne wydarzenia, wernisaże i wystawy w Modular Art Studio.",
};

const typeColors: Record<string, string> = {
  Wernisaż: "text-[#1B2259]",
  Warsztat: "text-[#B45309]",
  Wystawa: "text-[#166534]",
  Wydarzenie: "text-[#6B21A8]",
};

export default function WydarzeniaPPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label mb-5">Kalendarz</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Wydarzenia.
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-xl leading-relaxed">
            Warsztaty, wernisaże i wystawy — zawsze coś się dzieje w MAS.
            Sprawdź nadchodzące terminy i archiwum minionych spotkań.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Nadchodzące</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nadchodzace.map((e, i) => (
              <Link
                key={i}
                href={e.href}
                className="group border border-[#E5E5E1] p-8 bg-white card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold tracking-widest uppercase ${typeColors[e.type] ?? "text-[#6B6B6B]"}`}
                  >
                    {e.type}
                  </span>
                  <span className="text-xs text-[#6B6B6B]">{e.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1B2259] transition-colors">
                  {e.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-6">
                  {e.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B6B6B]">{e.time}</span>
                  <span className="font-semibold">{e.admission}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Archiwum</h2>

          <div className="flex flex-col divide-y divide-[#E5E5E1] border-y border-[#E5E5E1]">
            {archiwum.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-5"
              >
                <span className="text-xs text-[#6B6B6B] w-36 shrink-0">
                  {e.date}
                </span>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase w-24 shrink-0 ${typeColors[e.type] ?? "text-[#6B6B6B]"}`}
                >
                  {e.type}
                </span>
                <span className="flex-1 font-medium text-sm">{e.title}</span>
                <span className="text-xs text-[#6B6B6B] shrink-0">
                  {e.participants}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
