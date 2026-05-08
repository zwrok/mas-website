import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warsztaty — Modular Art Studio",
  description: "Warsztaty artystyczne dla dorosłych i dzieci. Malarstwo, rysunek, ceramika, fotografia i więcej.",
};

const workshops = [
  {
    id: 1,
    category: "Malarstwo",
    level: "Podstawowy",
    title: "Malarstwo akwarelowe",
    description: "Poznaj tajniki akwareli — od wyboru narzędzi po techniki mokre na mokrym. Idealne dla zupełnych początkujących.",
    date: "15 Maja 2026",
    time: "10:00 – 14:00",
    duration: "4 godz.",
    price: 220,
    spots: 3,
    totalSpots: 10,
    instructor: "Anna Kowalska",
    forWhom: "Dorośli",
  },
  {
    id: 2,
    category: "Fotografia",
    level: "Średniozaawansowany",
    title: "Fotografia portretowa – studio",
    description: "Techniki oświetlenia studyjnego, kierowanie modelem, kompozycja i post-produkcja w Lightroom.",
    date: "5 Czerwca 2026",
    time: "11:00 – 16:00",
    duration: "5 godz.",
    price: 350,
    spots: 5,
    totalSpots: 8,
    instructor: "Marek Wiśniewski",
    forWhom: "Dorośli",
  },
  {
    id: 3,
    category: "Rysunek",
    level: "Podstawowy",
    title: "Rysunek postaci – anatomia artystyczna",
    description: "Proporcje ciała, szkicowanie z modela, faktura i walor. Warsztaty dla chcących nauczyć się rysowania od podstaw.",
    date: "12 Czerwca 2026",
    time: "17:00 – 20:00",
    duration: "3 godz.",
    price: 180,
    spots: 7,
    totalSpots: 12,
    instructor: "Zofia Nowak",
    forWhom: "Dorośli",
  },
  {
    id: 4,
    category: "Ceramika",
    level: "Wszystkie poziomy",
    title: "Ceramika – koło garncarskie",
    description: "Praca z gliną na kole garncarskim. Uczestnicy odejdą z własnoręcznie wykonanym naczyniem po wypaleniu.",
    date: "19 Czerwca 2026",
    time: "10:00 – 13:00",
    duration: "3 godz.",
    price: 240,
    spots: 2,
    totalSpots: 6,
    instructor: "Piotr Dąbrowski",
    forWhom: "Dorośli i dzieci od 14 lat",
  },
  {
    id: 5,
    category: "Malarstwo",
    level: "Podstawowy",
    title: "Malarstwo dla dzieci – lato z farbami",
    description: "Wesoły warsztat malarski dla dzieci. Farby, kolory, ekspresja twórcza w bezpiecznym środowisku.",
    date: "26 Czerwca 2026",
    time: "10:00 – 12:00",
    duration: "2 godz.",
    price: 120,
    spots: 8,
    totalSpots: 15,
    instructor: "Anna Kowalska",
    forWhom: "Dzieci 6–12 lat",
  },
];

const levelColors: Record<string, string> = {
  "Podstawowy": "bg-[#E8F0FE] text-[#1B2259]",
  "Średniozaawansowany": "bg-[#FFF3E0] text-[#B45309]",
  "Wszystkie poziomy": "bg-[#F0FDF4] text-[#166534]",
};

export default function WarsztatyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label mb-5">Oferta</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Warsztaty artystyczne.
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-xl leading-relaxed">
            Warsztaty dla dorosłych i dzieci prowadzone przez doświadczonych artystów.
            Każde spotkanie to intensywna nauka w małych grupach.
          </p>
        </div>
      </section>

      {/* Workshops list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {workshops.map((w) => {
              const isFull = w.spots === 0;
              const isLow = w.spots > 0 && w.spots <= 3;

              return (
                <article
                  key={w.id}
                  className="border border-[#E5E5E1] p-8 flex flex-col card-hover bg-white"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="section-label">{w.category}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 ${levelColors[w.level] ?? "bg-[#F7F7F5] text-[#6B6B6B]"}`}>
                        {w.level}
                      </span>
                    </div>
                    <span className="text-xs text-[#6B6B6B] shrink-0">{w.forWhom}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3">{w.title}</h2>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-6">
                    {w.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                    <div>
                      <p className="text-xs text-[#6B6B6B] mb-1">Data</p>
                      <p className="font-medium">{w.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6B6B] mb-1">Godzina</p>
                      <p className="font-medium">{w.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6B6B] mb-1">Prowadzący</p>
                      <p className="font-medium">{w.instructor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6B6B] mb-1">Dostępne miejsca</p>
                      <p className={`font-medium ${isFull ? "text-red-600" : isLow ? "text-orange-600" : "text-green-700"}`}>
                        {isFull ? "Brak miejsc" : `${w.spots} / ${w.totalSpots}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">{w.price} zł</p>
                    <Link
                      href="/kontakt"
                      className={isFull ? "btn-outline opacity-40 pointer-events-none" : "btn-primary"}
                    >
                      {isFull ? "Brak miejsc" : "Zapisz się"}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-[#F7F7F5] border border-[#E5E5E1]">
            <h3 className="text-xl font-bold mb-3">Nie widzisz tego, czego szukasz?</h3>
            <p className="text-[#6B6B6B] mb-5">
              Organizujemy warsztaty zamknięte dla firm i grup prywatnych.
              Napisz do nas, a dobierzemy program do Twoich potrzeb.
            </p>
            <Link href="/kontakt" className="btn-outline">Zapytaj o warsztat indywidualny</Link>
          </div>
        </div>
      </section>
    </>
  );
}
