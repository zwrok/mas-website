// ─────────────────────────────────────────────────────────────
//  GALERIA — edytuj ten plik przez GitHub (przycisk ołówka)
//
//  ZASADY TREŚCI:
//  title       → tytuł wystawy, max 5 słów
//  artist      → imię/imiona artystów lub "Zbiorowa"
//  medium      → technika, max 4 słowa, np. "Malarstwo olejne"
//  period      → "1 Maj – 30 Maj 2026"
//  description → 2–3 zdania, max 400 znaków (tylko dla aktualnych)
//  status      → "Trwa" | "Wkrótce"
//  image       → ścieżka do zdjęcia w /public/images/galeria/ (opcjonalne)
//
//  KOLEJNOŚĆ aktualnych: "Trwa" przed "Wkrótce"
//  ARCHIWUM: najnowsze na górze
// ─────────────────────────────────────────────────────────────

export type Exhibition = {
  status: "Trwa" | "Wkrótce";
  title: string;
  artist: string;
  medium: string;
  period: string;
  description: string;
  image?: string;
};

export type ArchivedExhibition = {
  title: string;
  artist: string;
  medium: string;
  period: string;
};

export const aktualne: Exhibition[] = [
  {
    status: "Trwa",
    title: "Pidło",
    artist: "Maciej Malczewski, Łukasz ",
    medium: "Rzeźba, instalacja",
    period: "1 Maj – 30 Maj 2026",
    description:
      "Trójgłos o przestrzeni — artyści konfrontują materię z pustką. Wystawa obejmuje rzeźby z drewna, metalu i polimeru oraz instalacje site-specific.",
    image: "/images/galeria/formy-i-przestrzen.jpg",
  },
  {
    status: "Wkrótce",
    title: "Absolwenci MAS 2026",
    artist: "Uczestnicy warsztatów 2025/2026",
    medium: "Różne techniki",
    period: "20 Czerwiec – 20 Lipiec 2026",
    description:
      "Coroczna wystawa podsumowująca rok artystyczny. Prace uczestników warsztatów malarstwa, rysunku, ceramiki i fotografii.",
    image: "/images/galeria/absolwenci-2026.jpg",
  },
];

export const archiwumWystaw: ArchivedExhibition[] = [
  {
    title: "Między jawą a snem",
    artist: "Kacper Broniszewski",
    medium: "Malarstwo olejne",
    period: "Marzec – Kwiecień 2026",
  },
  {
    title: "Miasto nocą",
    artist: "Marek Wiśniewski i in.",
    medium: "Fotografia",
    period: "Październik – Listopad 2025",
  },
  {
    title: "Monodruk",
    artist: "Kolektyw Graficzny PL",
    medium: "Grafika, druk artystyczny",
    period: "Sierpień – Wrzesień 2025",
  },
  {
    title: "Debiuty",
    artist: "Absolwenci MAS 2025",
    medium: "Różne techniki",
    period: "Czerwiec – Lipiec 2025",
  },
];
