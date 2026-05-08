import Link from "next/link";

const services = [
  {
    label: "Warsztaty",
    title: "Nauka przez tworzenie",
    description:
      "Warsztaty artystyczne dla dorosłych i dzieci prowadzone przez doświadczonych artystów. Malarstwo, rysunek, ceramika i wiele więcej.",
    href: "/warsztaty",
    cta: "Zobacz warsztaty",
  },
  {
    label: "Studio",
    title: "Profesjonalne studio",
    description:
      "Wynajem studia fotograficznego i filmowego z pełnym wyposażeniem. Idealne dla twórców, fotografów i filmowców.",
    href: "/studio",
    cta: "Dowiedz się więcej",
  },
  {
    label: "Galeria",
    title: "Przestrzeń sztuki",
    description:
      "Galeria prezentująca prace lokalnych i międzynarodowych artystów. Regularne wystawy i wernisaże przez cały rok.",
    href: "/galeria",
    cta: "Odwiedź galerię",
  },
];

const upcomingEvents = [
  {
    date: "15 Maj 2026",
    type: "Warsztat",
    title: "Malarstwo akwarelowe – poziom podstawowy",
    spots: "3 miejsca",
    price: "220 zł",
    href: "/warsztaty",
  },
  {
    date: "22 Maj 2026",
    type: "Wernisaż",
    title: 'Wystawa: "Formy i przestrzeń"',
    spots: "Wstęp wolny",
    price: null,
    href: "/wydarzenia",
  },
  {
    date: "5 Czerwiec 2026",
    type: "Warsztat",
    title: "Fotografia portretowa – techniki studyjne",
    spots: "5 miejsc",
    price: "350 zł",
    href: "/warsztaty",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-6 flex flex-col justify-center py-24">
          <p className="section-label mb-6">Modular Art Studio — Warszawa</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 max-w-4xl">
            Sztuka,{" "}
            <span className="text-[#1B2259]">Warsztat</span>
            {" "}i Studio.
          </h1>

          <p className="text-lg text-[#6B6B6B] max-w-xl leading-relaxed mb-10">
            Przestrzeń dla twórców — galeria sztuki, warsztaty artystyczne
            dla dorosłych i dzieci oraz profesjonalne studio
            filmowo-fotograficzne.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/warsztaty" className="btn-primary">
              Zapisz się na warsztat
            </Link>
            <Link href="/galeria" className="btn-outline">
              Odwiedź galerię
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full pb-8">
          <div className="w-full h-px bg-[#E5E5E1]" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Nasza oferta</p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
              Trzy przestrzenie,<br />jeden adres.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white p-8 flex flex-col card-hover border border-[#E5E5E1]"
              >
                <p className="section-label mb-6">{s.label}</p>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#1B2259] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-6">
                  {s.description}
                </p>
                <span className="text-sm font-medium text-[#1B2259] group-hover:underline">
                  {s.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">Kalendarz</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Nadchodzące<br />wydarzenia.
              </h2>
            </div>
            <Link href="/wydarzenia" className="btn-outline shrink-0">
              Wszystkie wydarzenia
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-[#E5E5E1] border-y border-[#E5E5E1]">
            {upcomingEvents.map((e, i) => (
              <Link
                key={i}
                href={e.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6 hover:bg-[#F7F7F5] px-4 -mx-4 transition-colors"
              >
                <span className="text-xs text-[#6B6B6B] font-medium w-32 shrink-0">
                  {e.date}
                </span>
                <span className="section-label text-xs w-24 shrink-0">{e.type}</span>
                <span className="flex-1 font-semibold text-base group-hover:text-[#1B2259] transition-colors">
                  {e.title}
                </span>
                <div className="flex items-center gap-4 sm:ml-auto shrink-0">
                  <span className="text-xs text-[#6B6B6B]">{e.spots}</span>
                  {e.price && (
                    <span className="text-sm font-bold">{e.price}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label text-[#3A4DB0] mb-6">O nas</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Tworzymy przestrzeń<br />dla sztuki.
              </h2>
              <p className="text-[#9A9A9A] leading-relaxed mb-4">
                Modular Art Studio to miejsce, gdzie sztuka spotyka się
                z edukacją i profesjonalną produkcją wizualną.
                Prowadzimy warsztaty artystyczne, wystawy oraz
                udostępniamy w pełni wyposażone studio dla twórców.
              </p>
              <p className="text-[#9A9A9A] leading-relaxed mb-8">
                Naszą misją jest demokratyzacja sztuki — zarówno jej
                tworzenia jak i odbioru. Zapraszamy dorosłych,
                dzieci oraz profesjonalnych twórców.
              </p>
              <Link href="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-black">
                Skontaktuj się z nami
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#1F1F1F]">
              {[
                { num: "200+", label: "Uczestników warsztatów" },
                { num: "40+", label: "Edycji warsztatów" },
                { num: "15+", label: "Wystaw rocznie" },
                { num: "3", label: "Przestrzenie twórcze" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0A0A0A] p-8">
                  <p className="text-4xl font-bold text-white mb-2">{s.num}</p>
                  <p className="text-sm text-[#6B6B6B]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 border-y border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Gotowy, żeby zacząć?</h2>
            <p className="text-[#6B6B6B]">Zapisz się na najbliższy warsztat lub napisz do nas.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/warsztaty" className="btn-primary">Warsztaty</Link>
            <Link href="/kontakt" className="btn-outline">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
