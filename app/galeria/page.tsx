import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { aktualne, archiwumWystaw } from "@/data/galeria";

export const metadata: Metadata = {
  title: "Galeria — Modular Art Studio",
  description:
    "Galeria sztuki Modular Art Studio — wystawy lokalnych i międzynarodowych artystów.",
};

export default function GaleriaPage() {
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
          <h2 className="text-3xl font-bold mb-10">Aktualne wystawy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aktualne.map((e, i) => (
              <Link
                key={i}
                href={`/galeria/${e.slug}`}
                className="group border border-[#E5E5E1] bg-white overflow-hidden card-hover block"
              >
                {/* Image */}
                {e.image ? (
                  <div className="relative h-64 w-full">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="h-64 bg-[#F7F7F5] flex items-center justify-center border-b border-[#E5E5E1]">
                    <span className="text-[#C0C0C0] text-sm">
                      Zdjęcie wystawy
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold tracking-widest uppercase ${e.status === "Trwa" ? "text-green-700" : "text-[#1B2259]"}`}
                    >
                      {e.status}
                    </span>
                    <span className="text-xs text-[#6B6B6B]">{e.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#1B2259] transition-colors">{e.title}</h3>
                  <p className="text-sm text-[#1B2259] font-medium mb-1">
                    {e.artist}
                  </p>
                  <p className="text-xs text-[#6B6B6B] mb-4">{e.medium}</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                    {e.description}
                  </p>
                  <span className="text-sm font-medium text-[#1B2259] group-hover:underline">
                    Zobacz wystawę →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-12 bg-[#F7F7F5] border-y border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">
                Godziny otwarcia
              </p>
              <p className="font-semibold">Wt – Sob: 11:00 – 19:00</p>
              <p className="text-sm text-[#6B6B6B]">Niedz: 12:00 – 17:00</p>
            </div>
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">
                Wstęp
              </p>
              <p className="font-semibold">Wolny</p>
              <p className="text-sm text-[#6B6B6B]">Na wszystkie wystawy</p>
            </div>
            <div>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">
                Wernisaże
              </p>
              <p className="font-semibold">Co miesiąc</p>
              <p className="text-sm text-[#6B6B6B]">
                Sprawdź kalendarz wydarzeń
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past exhibitions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Archiwum wystaw</h2>

          <div className="flex flex-col divide-y divide-[#E5E5E1] border-y border-[#E5E5E1]">
            {archiwumWystaw.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-5"
              >
                <span className="text-xs text-[#6B6B6B] w-48 shrink-0">
                  {e.period}
                </span>
                <div className="flex-1">
                  <span className="font-semibold text-sm">{e.title}</span>
                  <span className="text-[#6B6B6B] text-sm"> — {e.artist}</span>
                </div>
                <span className="text-xs text-[#6B6B6B] shrink-0">
                  {e.medium}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#F7F7F5] border border-[#E5E5E1]">
            <h3 className="text-xl font-bold mb-3">
              Chcesz wystawić swoje prace?
            </h3>
            <p className="text-[#6B6B6B] mb-5 text-sm leading-relaxed">
              Przyjmujemy zgłoszenia od artystów zainteresowanych wystawą w
              galerii MAS. Skontaktuj się z nami, dołączając portfolio lub link
              do prac.
            </p>
            <Link href="/kontakt" className="btn-outline text-sm">
              Wyślij zgłoszenie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
