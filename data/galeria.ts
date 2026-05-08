// ─────────────────────────────────────────────────────────────
//  GALERIA — edytuj ten plik przez GitHub (przycisk ołówka)
//
//  POLA KARTY (lista wystaw):
//  slug        → adres URL, np. "pidlo" → /galeria/pidlo  (tylko małe litery, bez spacji, bez polskich znaków)
//  title       → tytuł wystawy, max 5 słów
//  artist      → imię/imiona artystów lub "Zbiorowa"
//  medium      → technika, max 4 słowa
//  period      → "1 Maj – 30 Maj 2026"
//  description → 2–3 zdania, max 400 znaków — skrót na karcie
//  status      → "Trwa" | "Wkrótce"
//  image       → okładka wystawy, /images/galeria/nazwa.jpg
//
//  POLA PODSTRONY (szczegóły po kliknięciu):
//  curatorNote   → tekst kuratorski, kilka akapitów (użyj \n\n między akapitami)
//  openingEvent  → data i godzina wernisażu, np. "22 Maja 2026, godz. 19:00"
//  location      → adres jeśli inny niż MAS, np. "ul. Freta 20, Warszawa"
//  artists[]     → tablica artystów z bio, linkami, zdjęciem
//  artworks[]    → tablica prac z tytułem, techniką, rokiem, zdjęciem
//
//  ARCHIWUM: najnowsze na górze, bez podstron
// ─────────────────────────────────────────────────────────────

export type Artist = {
  name: string;
  bio: string;            // 3–5 zdań
  website?: string;
  instagram?: string;
  image?: string;         // /images/galeria/artysta-imie.jpg
};

export type Artwork = {
  title: string;
  year: number;
  medium: string;
  dimensions?: string;    // np. "80 × 120 cm"
  image?: string;         // /images/galeria/praca-tytul.jpg
  description?: string;   // opcjonalny opis pracy, 1–2 zdania
};

export type Exhibition = {
  slug: string;
  status: "Trwa" | "Wkrótce";
  title: string;
  artist: string;
  medium: string;
  period: string;
  description: string;
  image?: string;
  // — szczegóły podstrony —
  curatorNote?: string;
  openingEvent?: string;
  location?: string;
  artists?: Artist[];
  artworks?: Artwork[];
};

export type ArchivedExhibition = {
  title: string;
  artist: string;
  medium: string;
  period: string;
};

export const aktualne: Exhibition[] = [
  {
    slug: "pidlo",
    status: "Trwa",
    title: "Pidło",
    artist: "Maciej Malczewski, Łukasz Zając",
    medium: "Rzeźba, instalacja",
    period: "1 Maj – 30 Maj 2026",
    description:
      "Trójgłos o przestrzeni — artyści konfrontują materię z pustką. Wystawa obejmuje rzeźby z drewna, metalu i polimeru oraz instalacje site-specific.",
    image: "/images/galeria/pidlo2.png",

    curatorNote:
      "Projekt dotyczy krajobrazu stawów hodowlanych i relacji między środowiskiem naturalnym a przestrzenią przekształconą przez człowieka.\n\nTo opowieść o tym, jak przyzwyczajenie wpływa na sposób postrzegania - i jak oswojone miejsca mogą ujawniać napięcia, które wcześniej pozostawały niewidoczne.\n\n—\n\nFOTOGRAFIA Łukasz Zając\nKURATOR Maciej Malczewski\nMUZYKA Kuba Stępień\n\nPATRONI: Rust Publishing; Sputnik Photos; Akademia Fotografii; Fundacja Stara Szkoła w Wymysłowie; Kraków. Sztuka; Love IDAA; Kraków Się Wydarza; ZPAP Okręg Krakowski; ZJC FAB.\n\n—\n\nPon-Pt 14:00-20:00 / Sobota 12:00-22:00",
    openingEvent: "2 Maja 2026, godz. 19:00",
    location: "Modular Art Studio, ul. Przykładowa 12, Warszawa",

    artists: [
      {
        name: "Maciej Malczewski",
        bio: "Urodzony w 1984 r. w Krakowie, absolwent Wydziału Rzeźby ASP w Warszawie. Pracuje głównie z drewnem i materiałami organicznymi, tworząc struktury balansujące między architekturą a obiektem artystycznym. Wystawiał m.in. w Zachęcie, CSW Zamek Ujazdowski i galeriach w Berlinie i Wiedniu. Mieszka i pracuje w Warszawie.",
        website: "https://malczewski.art",
        instagram: "malczewski.art",
        image: "/images/galeria/artysta-malczewski.jpg",
      },
      {
        name: "Łukasz Zając",
        bio: "Absolwent Akademii Sztuk Pięknych w Łodzi (2009) oraz Central Saint Martins w Londynie (2012). Jego praktyka artystyczna oscyluje wokół instalacji przestrzennych, w których kluczową rolę odgrywa światło i percepcja. Laureat Nagrody im. Katarzyny Kobro (2021). Współpracuje z galeriami w Polsce, Czechach i Holandii.",
        website: "https://lukasz-zajac.pl",
        instagram: "lzajac.studio",
        image: "/images/galeria/artysta-zajac.jpg",
      },
    ],

    artworks: [
      {
        title: "Bez tytułu #1",
        year: 2026,
        medium: "Drewno, śruby stalowe",
        dimensions: "220 × 80 × 60 cm",
        image: "/images/galeria/pidlo-praca-1.jpg",
        description: "Pierwsza z serii struktur wznoszona metodą intuicyjną, bez wcześniejszego projektu.",
      },
      {
        title: "Membrana",
        year: 2026,
        medium: "Stal, folia polimerowa, światło LED",
        dimensions: "300 × 200 × 40 cm",
        image: "/images/galeria/pidlo-praca-2.jpg",
        description: "Instalacja reagująca na ruch widza — folia drga przy każdym zbliżeniu, zmieniając rozproszenie światła.",
      },
      {
        title: "Splot",
        year: 2025,
        medium: "Drewno dębowe, lina jutowa",
        dimensions: "150 × 150 × 150 cm",
        image: "/images/galeria/pidlo-praca-3.jpg",
        description: "Obiekt space-specific stworzony podczas rezydencji w MAS.",
      },
      {
        title: "Kolumna świetlna",
        year: 2026,
        medium: "Aluminium, światło",
        dimensions: "400 × 30 × 30 cm",
        image: "/images/galeria/pidlo-praca-4.jpg",
        description: "Pionowa instalacja dominująca centrum galerii. Jedyna praca niemożliwa do sprzedaży — stworzona dla tej przestrzeni.",
      },
    ],
  },

  {
    slug: "absolwenci-2026",
    status: "Wkrótce",
    title: "Absolwenci MAS 2026",
    artist: "Uczestnicy warsztatów 2025/2026",
    medium: "Różne techniki",
    period: "20 Czerwiec – 20 Lipiec 2026",
    description:
      "Coroczna wystawa podsumowująca rok artystyczny. Prace uczestników warsztatów malarstwa, rysunku, ceramiki i fotografii.",
    image: "/images/galeria/absolwenci-2026.jpg",

    curatorNote:
      "Każdego roku MAS zaprasza uczestników warsztatów do wspólnej wystawy. To nie jest wystawa \"postępów\" - to pełnoprawna ekspozycja prac, które powstały w ciągu roku intensywnej pracy twórczej.\n\nW 2026 roku udział weźmie 18 artystek i artystów w różnym wieku i o różnym doświadczeniu. Ich prace łączy jedno: śmiałość w podejmowaniu decyzji artystycznych, którą ćwiczyli przez cały rok.\n\nWernisaż połączony będzie z podsumowaniem roku - zapraszamy wszystkich uczestników, ich bliskich oraz sympatyków MAS.",
    openingEvent: "20 Czerwca 2026, godz. 18:00",
    location: "Modular Art Studio, ul. Przykładowa 12, Warszawa",
    artists: [],
    artworks: [],
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
