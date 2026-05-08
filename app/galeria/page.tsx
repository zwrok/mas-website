import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { aktualne, archiwalne } from "@/data/galeria";
import type { Exhibition } from "@/data/galeria";

export const metadata: Metadata = {
  title: "Galeria — Modular Art Studio",
  description:
    "Galeria sztuki Modular Art Studio — wystawy lokalnych i międzynarodowych artystów.",
};

function ExhibitionCard({ e }: { e: Exhibition }) {
  const statusColor =
    e.status === "Trwa"
      ? "text-green-700"
      : e.status === "Zakończona"
      ? "text-[#6B6B6B]"
      : "text-[#1B2259]";

  return (
    <Link
      href={`/galeria/${e.slug}`}
      className="group border border-[#E5E5E1] bg-white overflow-hidden card-hover block"
    >
      {e.image ? (
        <div className="relative h-64 w-full bg-[#F7F7F5]">
          <Image
            src={e.image}
            alt={e.title}
            fill
            className={`object-cover transition-opacity ${e.status === "Zakończona" ? "grayscale opacity-80" : ""}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="h-64 bg-[#F7F7F5] flex items-center justify-center border-b border-[#E5E5E1]">
          <span className="text-[#C0C0C0] text-sm">Zdjęcie wystawy</span>
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-semibold tracking-widest uppercase ${statusColor}`}>
            {e.status}
          </span>
          <span className="text-xs text-[#6B6B6B]">{e.period}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#1B2259] transition-colors">
          {e.title}
        </h3>
        <p className="text-sm text-[#1B2259] font-medium mb-1">{e.artist}</p>
        <p className="text-xs text-[#6B6B6B] mb-4">{e.medium}</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{e.description}</p>
        <span className="text-sm font-medium text-[#1B2259] group-hover:underline">
          Zobacz wystawę →
        </span>
      </div>
    </Link>
  );
}

export default function GaleriaPage() {
  // Group archive by year
  const archiveByYear = archiwalne.reduce<Record<string, Exhibition[]>>((acc, e) => {
    const year = e.period.match(/\d{4}/)?.[0] ?? "Wcześniej";
    if (!acc[year]) acc[year] = [];
    acc[year].push(e);
    return acc;
  }, {});
  const years = Object.keys(archiveByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label text-[#3A4DB0] mb-5">Galeria sztuki</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Wystawa jako<br />doświadczenie.
          </h1>
          <p className="text-lg text-[#9A9A9A] max-w-xl leading-relaxed">
            Galeria MAS prezentuje prace lokalnych i międzynarodowych artystów.
            Wystawy czasowe, wernisaże i spotkania z artystami — przez cały rok.
          </p>
        </div>
      </section>

      {/* Current exhibitions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Aktualne i nadchodzące</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aktualne.map((e) => (
              <ExhibitionCard key={e.slug} e={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-12 bg-[#F7F7F5] border-y border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">Godziny otwarcia</p>
              <p className="font-semibold">Wt – Sob: 11:00 – 19:00</p>
              <p className="text-sm text-[#6B6B6B]">Niedz: 12:00 – 17:00</p>
            </div>
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">Wstęp</p>
              <p className="font-semibold">Wolny</p>
              <p className="text-sm text-[#6B6B6B]">Na wszystkie wystawy</p>
            </div>
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">Wernisaże</p>
              <p className="font-semibold">Co miesiąc</p>
              <p className="text-sm text-[#6B6B6B]">Sprawdź kalendarz wydarzeń</p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      {archiwalne.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2">Archiwum</h2>
            <p className="text-[#6B6B6B] mb-12">
              {archiwalne.length} {archiwalne.length === 1 ? "wystawa" : "wystawy"} — każda z pełną dokumentacją
            </p>

            {years.map((year) => (
              <div key={year} className="mb-12">
                <p className="section-label mb-6">{year}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {archiveByYear[year].map((e) => (
                    <Link
                      key={e.slug}
                      href={`/galeria/${e.slug}`}
                      className="group border border-[#E5E5E1] bg-white overflow-hidden card-hover block"
                    >
                      {e.image ? (
                        <div className="relative h-40 w-full bg-[#F7F7F5]">
                          <Image
                            src={e.image}
                            alt={e.title}
                            fill
                            className="object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                            sizes="(max-width: 768px) 100vw, 25vw"
                          />
                        </div>
                      ) : (
                        <div className="h-40 bg-[#F7F7F5]" />
                      )}
                      <div className="p-5">
                        <p className="text-xs text-[#6B6B6B] mb-1">{e.period}</p>
                        <p className="font-bold text-sm mb-1 group-hover:text-[#1B2259] transition-colors leading-snug">
                          {e.title}
                        </p>
                        <p className="text-xs text-[#6B6B6B]">{e.artist}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 p-8 bg-[#F7F7F5] border border-[#E5E5E1]">
              <h3 className="text-xl font-bold mb-3">Chcesz wystawić swoje prace?</h3>
              <p className="text-[#6B6B6B] mb-5 text-sm leading-relaxed">
                Przyjmujemy zgłoszenia od artystów zainteresowanych wystawą w galerii MAS.
                Skontaktuj się z nami, dołączając portfolio lub link do prac.
              </p>
              <Link href="/kontakt" className="btn-outline text-sm">
                Wyślij zgłoszenie
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
