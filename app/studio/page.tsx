import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — Modular Art Studio",
  description: "Profesjonalne studio fotograficzne i filmowe do wynajęcia. Pełne wyposażenie, elastyczne terminy.",
};

const equipment = [
  {
    category: "Oświetlenie",
    items: ["Profoto B10 Plus ×3", "Softboxy i reflektory", "Rampa LED strefowa", "Stałe LED Aputure 600d"],
  },
  {
    category: "Tła i przestrzeń",
    items: ["Tło bezszwowe 4m (biały, szary, czarny, krem)", "Ramka chromakey 3×3m", "Przestrzeń 80 m²", "Sufity 4,5m"],
  },
  {
    category: "Sprzęt foto/video",
    items: ["Monitor podglądu 4K", "Statyw głowica Manfrotto", "Szyna slideru 1,5m", "Prompter"],
  },
  {
    category: "Akcesoria",
    items: ["Stoły i krzesła stylizowane", "Wentylator efektowy", "Stojaki na ubrania", "Lustro wizażowe z oświetleniem"],
  },
];

const pricingOptions = [
  {
    label: "Godzina",
    price: "150 zł",
    desc: "Idealne dla krótkich sesji produktowych lub portretowych.",
    min: "Min. 2 godz.",
  },
  {
    label: "Pół dnia",
    price: "450 zł",
    desc: "4 godziny do dyspozycji — wystarczy na rozbudowane sesje lub nagrania.",
    min: "4 godz.",
    highlight: true,
  },
  {
    label: "Cały dzień",
    price: "750 zł",
    desc: "8 godzin ciągłej pracy. Produkcje reklamowe, kampanie lookbook.",
    min: "8 godz.",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label text-[#3A4DB0] mb-5">Studio</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Profesjonalne<br />studio filmowo-<br />fotograficzne.
          </h1>
          <p className="text-lg text-[#9A9A9A] max-w-xl leading-relaxed mb-8">
            80 m² przestrzeni z pełnym wyposażeniem oświetleniowym.
            Wynajem na godziny, pół dnia lub cały dzień. Elastyczne terminy.
          </p>
          <Link href="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-black">
            Sprawdź dostępność
          </Link>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Wyposażenie</p>
          <h2 className="text-4xl font-bold mb-12">Wszystko czego potrzebujesz.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((cat) => (
              <div key={cat.category} className="bg-white p-6 border border-[#E5E5E1]">
                <p className="section-label mb-4">{cat.category}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                      <span className="text-[#1B2259] mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Cennik</p>
          <h2 className="text-4xl font-bold mb-12">Proste i przejrzyste ceny.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((p) => (
              <div
                key={p.label}
                className={`p-8 border flex flex-col ${p.highlight ? "border-[#1B2259] bg-[#1B2259] text-white" : "border-[#E5E5E1] bg-white"}`}
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-6 ${p.highlight ? "text-[#9AA7E0]" : "text-[#6B6B6B]"}`}>
                  {p.label}
                </p>
                <p className="text-5xl font-bold mb-1">{p.price}</p>
                <p className={`text-sm mb-6 ${p.highlight ? "text-[#9AA7E0]" : "text-[#6B6B6B]"}`}>{p.min}</p>
                <p className={`text-sm leading-relaxed flex-1 mb-8 ${p.highlight ? "text-[#C5CCF0]" : "text-[#6B6B6B]"}`}>
                  {p.desc}
                </p>
                <Link
                  href="/kontakt"
                  className={p.highlight ? "btn-outline border-white text-white hover:bg-white hover:text-[#1B2259]" : "btn-outline"}
                >
                  Zarezerwuj
                </Link>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#6B6B6B] mt-6">
            * Ceny netto. Do cen należy doliczyć 23% VAT. Możliwe rabaty przy rezerwacji cyklicznej. Asystent techniczny dostępny za dopłatą.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F7F5] border-t border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Masz pytania?</h3>
            <p className="text-[#6B6B6B]">Zadzwoń lub napisz — pomożemy dobrać pakiet i termin.</p>
          </div>
          <Link href="/kontakt" className="btn-primary shrink-0">Skontaktuj się</Link>
        </div>
      </section>
    </>
  );
}
