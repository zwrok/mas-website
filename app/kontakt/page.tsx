import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Modular Art Studio",
  description: "Skontaktuj się z Modular Art Studio. Zapisy na warsztaty, rezerwacja studia, zgłoszenia wystawiennicze.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label mb-5">Kontakt</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-xl leading-tight">
            Napisz do nas.
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-lg leading-relaxed">
            Zapisy na warsztaty, rezerwacja studia, zgłoszenia wystawiennicze
            lub po prostu pytanie — odpiszemy w ciągu 24 godzin.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Formularz kontaktowy</h2>

              <form className="flex flex-col gap-6" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-[#6B6B6B] uppercase tracking-widest mb-2" htmlFor="imie">
                      Imię i nazwisko *
                    </label>
                    <input
                      id="imie"
                      name="imie"
                      type="text"
                      required
                      className="w-full border border-[#E5E5E1] px-4 py-3 text-sm focus:outline-none focus:border-[#1B2259] transition-colors bg-white"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6B6B6B] uppercase tracking-widest mb-2" htmlFor="email">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-[#E5E5E1] px-4 py-3 text-sm focus:outline-none focus:border-[#1B2259] transition-colors bg-white"
                      placeholder="jan@przyklad.pl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#6B6B6B] uppercase tracking-widest mb-2" htmlFor="temat">
                    Temat
                  </label>
                  <select
                    id="temat"
                    name="temat"
                    className="w-full border border-[#E5E5E1] px-4 py-3 text-sm focus:outline-none focus:border-[#1B2259] transition-colors bg-white appearance-none"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="warsztat">Zapis na warsztat</option>
                    <option value="studio">Rezerwacja studia</option>
                    <option value="wystawa">Zgłoszenie wystawiennicze</option>
                    <option value="wspolpraca">Współpraca</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#6B6B6B] uppercase tracking-widest mb-2" htmlFor="wiadomosc">
                    Wiadomość *
                  </label>
                  <textarea
                    id="wiadomosc"
                    name="wiadomosc"
                    required
                    rows={6}
                    className="w-full border border-[#E5E5E1] px-4 py-3 text-sm focus:outline-none focus:border-[#1B2259] transition-colors bg-white resize-none"
                    placeholder="Napisz, w czym możemy pomóc..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="zgoda"
                    name="zgoda"
                    type="checkbox"
                    required
                    className="mt-1 shrink-0"
                  />
                  <label htmlFor="zgoda" className="text-xs text-[#6B6B6B] leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez Modular Art Studio
                    w celu udzielenia odpowiedzi na zapytanie, zgodnie z{" "}
                    <a href="/polityka-prywatnosci" className="text-[#1B2259] underline">
                      Polityką prywatności
                    </a>
                    .
                  </label>
                </div>

                <div>
                  <button type="submit" className="btn-primary">
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold mb-8">Dane kontaktowe</h2>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Adres</p>
                  <p className="font-medium">ul. Przykładowa 12</p>
                  <p className="text-[#6B6B6B]">00-001 Warszawa</p>
                </div>

                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">E-mail</p>
                  <a href="mailto:kontakt@modularart.studio" className="font-medium text-[#1B2259] hover:underline">
                    kontakt@modularart.studio
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Telefon</p>
                  <a href="tel:+48000000000" className="font-medium hover:text-[#1B2259] transition-colors">
                    +48 000 000 000
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Godziny pracy biura</p>
                  <p className="font-medium">Poniedziałek – Piątek</p>
                  <p className="text-[#6B6B6B]">10:00 – 17:00</p>
                </div>

                <div className="h-px bg-[#E5E5E1]" />

                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Galeria</p>
                  <p className="text-sm text-[#6B6B6B]">Wt – Sob: 11:00 – 19:00</p>
                  <p className="text-sm text-[#6B6B6B]">Niedz: 12:00 – 17:00</p>
                  <p className="text-sm text-[#6B6B6B]">Pon: nieczynne</p>
                </div>

                {/* Map placeholder */}
                <div className="bg-[#F7F7F5] border border-[#E5E5E1] h-48 flex items-center justify-center">
                  <p className="text-sm text-[#9A9A9A]">Mapa dojazdu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
