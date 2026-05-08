import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wydarzenia — Modular Art Studio",
  description: "Nadchodzące i archiwalne wydarzenia, wernisaże i wystawy w Modular Art Studio.",
};

const upcoming = [
  {
    date: "22 Maj 2026",
    type: "Wernisaż",
    title: 'Wystawa: "Formy i przestrzeń"',
    description: "Wernisaż wystawy rzeźby i instalacji artystycznej. Artyści: Jan Kowalski, Marta Wróbel, Tomasz Górski.",
    time: "19:00",
    admission: "Wstęp wolny",
    href: "#",
  },
  {
    date: "15 Maj 2026",
    type: "Warsztat",
    title: "Malarstwo akwarelowe – poziom podstawowy",
    description: "Intensywny warsztat dla początkujących. Prowadząca: Anna Kowalska.",
    time: "10:00 – 14:00",
    admission: "220 zł",
    href: "/warsztaty",
  },
  {
    date: "5 Czerwiec 2026",
    type: "Warsztat",
    title: "Fotografia portretowa – techniki studyjne",
    description: "Praca w studio z modelem. Oświetlenie, kompozycja, retusz. Prowadzący: Marek Wiśniewski.",
    time: "11:00 – 16:00",
    admission: "350 zł",
    href: "/warsztaty",
  },
  {
    date: "20 Czerwiec 2026",
    type: "Wystawa",
    title: "Otwarcie wystawy: Absolwenci MAS 2026",
    description: "Coroczna wystawa prac uczestników warsztatów. Podsumowanie roku artystycznego.",
    time: "18:00",
    admission: "Wstęp wolny",
    href: "#",
  },
];

const archive = [
  {
    date: "Kwiecień 2026",
    type: "Warsztat",
    title: "Kolaż i mixed media",
    participants: "12 uczestników",
  },
  {
    date: "Marzec 2026",
    type: "Wernisaż",
    title: 'Wystawa: "Blisko natury"',
    participants: "Wstęp wolny — ok. 200 gości",
  },
  {
    date: "Luty 2026",
    type: "Warsztat",
    title: "Rysunek szkicownikowy – plener zimowy",
    participants: "8 uczestników",
  },
  {
    date: "Styczeń 2026",
    type: "Warsztat",
    title: "Malarstwo olejne – fundamenty",
    participants: "10 uczestników",
  },
  {
    date: "Grudzień 2025",
    type: "Wydarzenie",
    title: "Świąteczny jarmark artystyczny MAS",
    participants: "Wstęp wolny — ok. 400 gości",
  },
  {
    date: "Listopad 2025",
    type: "Warsztat",
    title: "Ceramika ręczna – budowanie bez koła",
    participants: "6 uczestników",
  },
  {
    date: "Październik 2025",
    type: "Wernisaż",
    title: 'Wystawa: "Miasto Nocą" — fotografia uliczna',
    participants: "Wstęp wolny — ok. 150 gości",
  },
  {
    date: "Wrzesień 2025",
    type: "Warsztat",
    title: "Ilustracja cyfrowa – podstawy",
    participants: "12 uczestników",
  },
];

const typeColors: Record<string, string> = {
  "Wernisaż": "text-[#1B2259]",
  "Warsztat": "text-[#B45309]",
  "Wystawa": "text-[#166534]",
  "Wydarzenie": "text-[#6B21A8]",
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
            {upcoming.map((e, i) => (
              <Link
                key={i}
                href={e.href}
                className="group border border-[#E5E5E1] p-8 bg-white card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold tracking-widest uppercase ${typeColors[e.type] ?? "text-[#6B6B6B]"}`}>
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
            {archive.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-5"
              >
                <span className="text-xs text-[#6B6B6B] w-36 shrink-0">{e.date}</span>
                <span className={`text-xs font-semibold tracking-widest uppercase w-24 shrink-0 ${typeColors[e.type] ?? "text-[#6B6B6B]"}`}>
                  {e.type}
                </span>
                <span className="flex-1 font-medium text-sm">{e.title}</span>
                <span className="text-xs text-[#6B6B6B] shrink-0">{e.participants}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
