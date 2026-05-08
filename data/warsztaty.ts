// ─────────────────────────────────────────────────────────────
//  WARSZTATY — edytuj ten plik przez GitHub (przycisk ołówka)
//
//  ZASADY TREŚCI:
//  title       → max 5 słów, np. "Malarstwo akwarelowe – podstawy"
//  description → 2–3 zdania, max 300 znaków
//  instructor  → Imię Nazwisko
//  date        → "15 Maja 2026"
//  time        → "10:00 – 14:00"
//  duration    → "4 godz."
//  price       → liczba (w złotych, bez "zł")
//  spots       → aktualna liczba wolnych miejsc (zmieniaj na bieżąco!)
//  totalSpots  → łączna liczba miejsc (nie zmieniaj)
//  category    → "Malarstwo" | "Fotografia" | "Rysunek" | "Ceramika" | "Inne"
//  level       → "Podstawowy" | "Średniozaawansowany" | "Zaawansowany" | "Wszystkie poziomy"
//  forWhom     → "Dorośli" | "Dzieci 6–12 lat" | "Dorośli i dzieci od 14 lat"
//  image       → ścieżka do zdjęcia w /public/images/warsztaty/ (opcjonalne)
//
//  ABY DODAĆ WARSZTAT: skopiuj blok { ... } i wklej na końcu listy (przed ])
//  ABY USUNĄĆ: usuń cały blok { ... },
//  ABY ZMIENIĆ LICZBĘ MIEJSC: zmień tylko pole  spots: X
// ─────────────────────────────────────────────────────────────

export type Workshop = {
  id: number;
  category: string;
  level: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  spots: number;
  totalSpots: number;
  instructor: string;
  forWhom: string;
  image?: string;
};

export const warsztaty: Workshop[] = [
  {
    id: 1,
    category: "Malarstwo",
    level: "Podstawowy",
    title: "Malarstwo akwarelowe",
    description:
      "Poznaj tajniki akwareli — od wyboru narzędzi po techniki mokre na mokrym. Idealne dla zupełnych początkujących.",
    date: "15 Maja 2026",
    time: "10:00 – 14:00",
    duration: "4 godz.",
    price: 220,
    spots: 3,
    totalSpots: 10,
    instructor: "Anna Kowalska",
    forWhom: "Dorośli",
    image: "/images/warsztaty/akwarela.jpg",
  },
  {
    id: 2,
    category: "Fotografia",
    level: "Średniozaawansowany",
    title: "Fotografia portretowa – studio",
    description:
      "Techniki oświetlenia studyjnego, kierowanie modelem, kompozycja i post-produkcja w Lightroom.",
    date: "5 Czerwca 2026",
    time: "11:00 – 16:00",
    duration: "5 godz.",
    price: 350,
    spots: 5,
    totalSpots: 8,
    instructor: "Marek Wiśniewski",
    forWhom: "Dorośli",
    image: "/images/warsztaty/fotografia-studio.jpg",
  },
  {
    id: 3,
    category: "Rysunek",
    level: "Podstawowy",
    title: "Rysunek postaci – anatomia",
    description:
      "Proporcje ciała, szkicowanie z modela, faktura i walor. Warsztaty dla chcących nauczyć się rysowania od podstaw.",
    date: "12 Czerwca 2026",
    time: "17:00 – 20:00",
    duration: "3 godz.",
    price: 180,
    spots: 7,
    totalSpots: 12,
    instructor: "Zofia Nowak",
    forWhom: "Dorośli",
    image: "/images/warsztaty/rysunek.jpg",
  },
  {
    id: 4,
    category: "Ceramika",
    level: "Wszystkie poziomy",
    title: "Ceramika – koło garncarskie",
    description:
      "Praca z gliną na kole garncarskim. Uczestnicy odejdą z własnoręcznie wykonanym naczyniem po wypaleniu.",
    date: "19 Czerwca 2026",
    time: "10:00 – 13:00",
    duration: "3 godz.",
    price: 240,
    spots: 2,
    totalSpots: 6,
    instructor: "Piotr Dąbrowski",
    forWhom: "Dorośli i dzieci od 14 lat",
    image: "/images/warsztaty/ceramika.jpg",
  },
  {
    id: 5,
    category: "Malarstwo",
    level: "Podstawowy",
    title: "Chuje muje dzikie węże ",
    description:
      "Wesoły warsztat malarski dla dzieci. Farby, kolory, ekspresja twórcza w bezpiecznym i inspirującym środowisku.",
    date: "26 Czerwca 2026",
    time: "10:00 – 12:00",
    duration: "2 godz.",
    price: 120,
    spots: 8,
    totalSpots: 15,
    instructor: "Anna Kowalska",
    forWhom: "Dzieci 6–12 lat",
    image: "/images/warsztaty/dzieci.jpg",
  },
];
