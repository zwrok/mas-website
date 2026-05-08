// ─────────────────────────────────────────────────────────────
//  GALERIA — edytuj ten plik przez GitHub (przycisk ołówka)
//
//  JAK PRZENIEŚĆ WYSTAWĘ DO ARCHIWUM:
//  1. Zmień status na "Zakończona"
//  2. Przenieś cały blok { ... } z tablicy "aktualne" do "archiwalne"
//  3. Podstrona /galeria/[slug] nadal będzie dostępna
//
//  POLA KARTY (lista wystaw):
//  slug        → adres URL (tylko małe litery, bez spacji, bez polskich znaków)
//  status      → "Trwa" | "Wkrótce" | "Zakończona"
//  title       → tytuł wystawy, max 5–6 słów
//  artist      → imię/imiona artystów lub "Zbiorowa"
//  medium      → technika, max 4 słowa
//  period      → "1 Maj – 30 Maj 2026"
//  description → 2–3 zdania, max 400 znaków — skrót na karcie
//  image       → okładka wystawy, /images/galeria/nazwa.jpg
//
//  POLA PODSTRONY:
//  curatorNote   → tekst kuratorski (\n\n = nowy akapit, \n = nowa linia)
//                  Uwaga: unikaj cudzysłowów „" wewnątrz stringa — użyj \"
//  openingEvent  → "22 Maja 2026, godz. 19:00"
//  location      → adres jeśli inny niż MAS
//  artists[]     → tablica artystów z bio i linkami
//  artworks[]    → tablica prac z tytułem, techniką, rokiem, zdjęciem
// ─────────────────────────────────────────────────────────────

export type Artist = {
  name: string;
  bio: string;
  website?: string;
  instagram?: string;
  image?: string;
};

export type Artwork = {
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  image?: string;
  description?: string;
};

export type Exhibition = {
  slug: string;
  status: "Trwa" | "Wkrótce" | "Zakończona";
  title: string;
  artist: string;
  medium: string;
  period: string;
  description: string;
  image?: string;
  curatorNote?: string;
  openingEvent?: string;
  location?: string;
  artists?: Artist[];
  artworks?: Artwork[];
};

// ── AKTUALNE I NADCHODZĄCE ──────────────────────────────────
// Kolejność: "Trwa" na górze, potem "Wkrótce"

export const aktualne: Exhibition[] = [
  {
    slug: "pidlo",
    status: "Trwa",
    title: "Pidło",
    artist: "Maciej Malczewski, Łukasz Zając",
    medium: "Rzeźba, instalacja",
    period: "1 Maj – 30 Maj 2026",
    description:
      "Projekt dotyczy krajobrazu stawów hodowlanych i relacji między środowiskiem naturalnym a przestrzenią przekształconą przez człowieka. Opowieść o tym, jak oswojone miejsca ujawniają napięcia, które wcześniej pozostawały niewidoczne.",
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
        description: "Instalacja reagująca na ruch widza — folia drga przy każdym zbliżeniu.",
      },
      {
        title: "Splot",
        year: 2025,
        medium: "Drewno dębowe, lina jutowa",
        dimensions: "150 × 150 × 150 cm",
        image: "/images/galeria/pidlo-praca-3.jpg",
        description: "Obiekt site-specific stworzony podczas rezydencji w MAS.",
      },
      {
        title: "Kolumna świetlna",
        year: 2026,
        medium: "Aluminium, światło",
        dimensions: "400 × 30 × 30 cm",
        image: "/images/galeria/pidlo-praca-4.jpg",
        description: "Pionowa instalacja dominująca centrum galerii. Stworzona dla tej przestrzeni.",
      },
    ],
  },

  {
    slug: "tober",
    status: "Wkrótce",
    title: "Ślad myślenia. Forma się broni.",
    artist: "Bogusław Tober",
    medium: "Malarstwo, rzeźba",
    period: "Czerwiec 2026",
    description:
      "Bogusław Tober porusza się swobodnie pomiędzy dyscyplinami, traktując ich granicę jako punkt wyjścia do negocjacji. Rzeźba i malarstwo tworzą jeden nierozerwalny dyskurs o kolorze, formie i ich wzajemnym pierwszeństwie.",
    image: "/images/galeria/tober.png",
    curatorNote:
      "ŚLAD MYŚLENIA. Forma się broni.\n\nBogusław Tober należy do tych artystów, których twórczość jest trudna do uchwycenia za pomocą jednej etykietki - i bardzo dobrze. Absolwent Akademii Sztuk Pięknych w Warszawie, ukształtowany przez wymagające środowisko pracowni Jacka Sienickiego (malarstwo) i Stanisława Słoniny (rzeźba), porusza się swobodnie pomiędzy dyscyplinami, traktując ich granicę jako punkt wyjścia do negocjacji, a nie jako nieprzekraczalny mur.\n\nW swoich pracach prezentuje dojrzałą, spójną wewnętrznie postawę twórczą, w której rzeźba i malarstwo tworzą jeden, nierozerwalny dyskurs o kolorze, formie i ich wzajemnym pierwszeństwie. Pytanie, które implicitnie zadaje ta twórczość - czy to kolor rodzi kształt, czy kształt domaga się koloru - pozostaje celowo bez odpowiedzi. I na tym polega jej siła.\n\nfragment tekstu kuratorskiego Zofii Kubickiej",
    artists: [
      {
        name: "Bogusław Tober",
        bio: "Absolwent Akademii Sztuk Pięknych w Warszawie. Ukształtowany przez pracownię Jacka Sienickiego (malarstwo) i Stanisława Słoniny (rzeźba). W swojej twórczości swobodnie przekracza granice dyscyplin, tworząc spójny dyskurs o kolorze i formie.",
      },
    ],
    artworks: [],
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

// ── ARCHIWUM ────────────────────────────────────────────────
// Wystawy zakończone — przenoś tutaj z "aktualne", zmieniając status na "Zakończona"
// Podstrony /galeria/[slug] pozostają aktywne
// Kolejność: najnowsze na górze

export const archiwalne: Exhibition[] = [
  {
    slug: "miedzy-jawa-a-snem",
    status: "Zakończona",
    title: "Między jawą a snem",
    artist: "Kacper Broniszewski",
    medium: "Malarstwo olejne",
    period: "Marzec – Kwiecień 2026",
    description:
      "Cykl obrazów olejnych eksplorujących granicę między snem a rzeczywistością. Prace powstałe podczas rocznej rezydencji artystycznej.",
    image: "/images/galeria/miedzy-jawa-a-snem.jpg",
  },
  {
    slug: "miasto-noca",
    status: "Zakończona",
    title: "Miasto nocą",
    artist: "Marek Wiśniewski i in.",
    medium: "Fotografia",
    period: "Październik – Listopad 2025",
    description:
      "Zbiorowa wystawa fotografii nocnej. Artyści dokumentują nocne życie miasta — jego rytm, światło i cień.",
    image: "/images/galeria/miasto-noca.jpg",
  },
  {
    slug: "monodruk",
    status: "Zakończona",
    title: "Monodruk",
    artist: "Kolektyw Graficzny PL",
    medium: "Grafika, druk artystyczny",
    period: "Sierpień – Wrzesień 2025",
    description:
      "Wystawa poświęcona technice monotypii i monodruku. Prace 8 artystów z całej Polski.",
    image: "/images/galeria/monodruk.jpg",
  },
  {
    slug: "debiuty-2025",
    status: "Zakończona",
    title: "Debiuty",
    artist: "Absolwenci MAS 2025",
    medium: "Różne techniki",
    period: "Czerwiec – Lipiec 2025",
    description:
      "Pierwsza wspólna wystawa uczestników warsztatów MAS. Malarstwo, rysunek, ceramika i fotografia.",
    image: "/images/galeria/debiuty-2025.jpg",
  },
];
