// ─────────────────────────────────────────────────────────────
//  WYDARZENIA — edytuj ten plik przez GitHub (przycisk ołówka)
//
//  ZASADY TREŚCI:
//  title       → max 6 słów, np. "Wernisaż: Formy i przestrzeń"
//  description → 2–3 zdania, max 300 znaków
//  date        → "22 Maja 2026"
//  time        → "19:00" lub "10:00 – 14:00"
//  type        → "Wernisaż" | "Warsztat" | "Wystawa" | "Wydarzenie"
//  admission   → "Wstęp wolny" lub "220 zł"
//  href        → "/warsztaty" lub "#" (dla wernisaży bez osobnej strony)
//
//  ARCHIWUM:
//  participants → "12 uczestników" lub "Wstęp wolny — ok. 200 gości"
//
//  KOLEJNOŚĆ: najnowsze/najbliższe na górze listy
// ─────────────────────────────────────────────────────────────

export type Event = {
  date: string;
  type: "Wernisaż" | "Warsztat" | "Wystawa" | "Wydarzenie";
  title: string;
  description: string;
  time: string;
  admission: string;
  href: string;
};

export type ArchivedEvent = {
  date: string;
  type: "Wernisaż" | "Warsztat" | "Wystawa" | "Wydarzenie";
  title: string;
  participants: string;
};

export const nadchodzace: Event[] = [
  {
    date: "15 Maja 2026",
    type: "Warsztat",
    title: "Malarstwo akwarelowe – poziom podstawowy",
    description:
      "Intensywny warsztat dla początkujących. Praca z pigmentem, papierem i wodą. Prowadząca: Anna Kowalska.",
    time: "10:00 – 14:00",
    admission: "220 zł",
    href: "/warsztaty",
  },
  {
    date: "22 Maja 2026",
    type: "Wernisaż",
    title: "Wystawa: Formy i przestrzeń",
    description:
      "Wernisaż wystawy rzeźby i instalacji artystycznej. Artyści: Jan Kowalski, Marta Wróbel, Tomasz Górski.",
    time: "19:00",
    admission: "Wstęp wolny",
    href: "#",
  },
  {
    date: "5 Czerwca 2026",
    type: "Warsztat",
    title: "Fotografia portretowa – techniki studyjne",
    description:
      "Praca w studio z modelem. Oświetlenie, kompozycja, retusz. Prowadzący: Marek Wiśniewski.",
    time: "11:00 – 16:00",
    admission: "350 zł",
    href: "/warsztaty",
  },
  {
    date: "20 Czerwca 2026",
    type: "Wystawa",
    title: "Otwarcie: Absolwenci MAS 2026",
    description:
      "Coroczna wystawa podsumowująca rok artystyczny. Prace uczestników warsztatów malarstwa, rysunku, ceramiki i fotografii.",
    time: "18:00",
    admission: "Wstęp wolny",
    href: "#",
  },
];

export const archiwum: ArchivedEvent[] = [
  {
    date: "Kwiecień 2026",
    type: "Warsztat",
    title: "Kolaż i mixed media",
    participants: "12 uczestników",
  },
  {
    date: "Marzec 2026",
    type: "Wernisaż",
    title: "Wystawa: Blisko natury",
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
    title: "Wystawa: Miasto nocą – fotografia uliczna",
    participants: "Wstęp wolny — ok. 150 gości",
  },
  {
    date: "Wrzesień 2025",
    type: "Warsztat",
    title: "Ilustracja cyfrowa – podstawy",
    participants: "12 uczestników",
  },
];
