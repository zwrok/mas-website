import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { aktualne } from "@/data/galeria";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return aktualne.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exhibition = aktualne.find((e) => e.slug === slug);
  if (!exhibition) return { title: "Wystawa nie znaleziona" };
  return {
    title: `${exhibition.title} — Galeria MAS`,
    description: exhibition.description,
  };
}

export default async function ExhibitionPage({ params }: Props) {
  const { slug } = await params;
  const ex = aktualne.find((e) => e.slug === slug);
  if (!ex) notFound();

  const paragraphs = ex.curatorNote?.split("\n\n") ?? [];

  // Helper: render a paragraph — if it starts with "—" treat as a divider/credit block
  function renderParagraph(text: string, i: number) {
    if (text.trim() === "—") {
      return <hr key={i} className="border-[#E5E5E1] my-2" />;
    }
    const isCreditBlock = text.startsWith("FOTOGRAFIA") || text.startsWith("PATRONI") || text.startsWith("Pon");
    const lines = text.split("\n");
    return (
      <p
        key={i}
        className={
          isCreditBlock
            ? "text-xs text-[#6B6B6B] tracking-wide leading-relaxed font-mono"
            : "text-[#333] leading-relaxed text-lg"
        }
      >
        {lines.map((line, j) => (
          <span key={j}>
            {line}
            {j < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-16">
        {ex.image ? (
          <div className="relative w-full h-[55vh] min-h-[360px] bg-[#0A0A0A]">
            <Image
              src={ex.image}
              alt={ex.title}
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-12">
              <p className="section-label text-[#3A4DB0] mb-3">{ex.period}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
                {ex.title}
              </h1>
              <p className="text-[#C0C0C0] text-lg">{ex.artist}</p>
            </div>
          </div>
        ) : (
          <div className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-6 py-24">
              <p className="section-label text-[#3A4DB0] mb-4">{ex.period}</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
                {ex.title}
              </h1>
              <p className="text-[#9A9A9A] text-lg">{ex.artist}</p>
            </div>
          </div>
        )}
      </section>

      {/* ── META BAR ── */}
      <section className="border-b border-[#E5E5E1] bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${ex.status === "Trwa" ? "bg-green-500" : "bg-[#1B2259]"}`} />
            <span className="font-medium">{ex.status}</span>
          </div>
          <span className="text-[#6B6B6B]">{ex.medium}</span>
          {ex.openingEvent && (
            <span className="text-[#6B6B6B]">Wernisaż: <span className="text-black font-medium">{ex.openingEvent}</span></span>
          )}
          {ex.location && (
            <span className="text-[#6B6B6B] hidden md:block">{ex.location}</span>
          )}
          <Link href="/galeria" className="ml-auto text-[#1B2259] hover:underline font-medium shrink-0">
            ← Wszystkie wystawy
          </Link>
        </div>
      </section>

      {/* ── CURATOR NOTE ── */}
      {paragraphs.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <p className="section-label mb-8">Tekst kuratorski</p>
                <div className="space-y-6">
                  {paragraphs.map((p, i) => renderParagraph(p, i))}
                </div>
              </div>

              {/* Sidebar info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Czas trwania</p>
                  <p className="font-semibold">{ex.period}</p>
                </div>
                {ex.openingEvent && (
                  <div>
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Wernisaż</p>
                    <p className="font-semibold">{ex.openingEvent}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Lokalizacja</p>
                  <p className="font-semibold">{ex.location ?? "Modular Art Studio"}</p>
                </div>
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Wstęp</p>
                  <p className="font-semibold">Wolny</p>
                </div>
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">Godziny otwarcia</p>
                  <p className="text-sm text-[#333]">Wt – Sob: 11:00 – 19:00</p>
                  <p className="text-sm text-[#6B6B6B]">Niedz: 12:00 – 17:00</p>
                </div>
                <Link href="/kontakt" className="btn-primary w-full justify-center">
                  Zapytaj o wystawę
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTWORKS ── */}
      {ex.artworks && ex.artworks.length > 0 && (
        <section className="py-20 bg-[#F7F7F5]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-4">Prace</p>
            <h2 className="text-3xl font-bold mb-12">Wybrane dzieła.</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ex.artworks.map((work, i) => (
                <div key={i} className="bg-white border border-[#E5E5E1] overflow-hidden">
                  {work.image ? (
                    <div className="relative h-56 bg-[#F7F7F5]">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="h-56 bg-[#EFEFEC] flex items-center justify-center">
                      <span className="text-[#C0C0C0] text-xs">Zdjęcie pracy</span>
                    </div>
                  )}
                  <div className="p-5">
                    <p className="font-bold mb-1">{work.title}</p>
                    <p className="text-xs text-[#6B6B6B] mb-1">{work.year}</p>
                    <p className="text-xs text-[#6B6B6B] mb-1">{work.medium}</p>
                    {work.dimensions && (
                      <p className="text-xs text-[#9A9A9A] mb-3">{work.dimensions}</p>
                    )}
                    {work.description && (
                      <p className="text-xs text-[#6B6B6B] leading-relaxed border-t border-[#E5E5E1] pt-3 mt-3">
                        {work.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ARTISTS ── */}
      {ex.artists && ex.artists.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-4">Artyści</p>
            <h2 className="text-3xl font-bold mb-12">O twórcach.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ex.artists.map((artist, i) => (
                <div key={i} className="flex gap-6 border border-[#E5E5E1] p-8 bg-white">
                  {artist.image ? (
                    <div className="relative w-24 h-24 shrink-0 bg-[#F7F7F5]">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 shrink-0 bg-[#F7F7F5] border border-[#E5E5E1] flex items-center justify-center">
                      <span className="text-[#C0C0C0] text-xs text-center">Foto</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-3">{artist.name}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                      {artist.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {artist.website && (
                        <a
                          href={artist.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1B2259] hover:underline font-medium"
                        >
                          Strona →
                        </a>
                      )}
                      {artist.instagram && (
                        <a
                          href={`https://instagram.com/${artist.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6B6B6B] hover:text-[#1B2259] transition-colors"
                        >
                          @{artist.instagram}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER EXHIBITIONS ── */}
      <section className="py-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#6B6B6B] text-sm mb-1">Galeria MAS</p>
            <h3 className="text-2xl font-bold">Zobacz inne wystawy.</h3>
          </div>
          <Link href="/galeria" className="btn-outline border-white text-white hover:bg-white hover:text-black shrink-0">
            Wszystkie wystawy
          </Link>
        </div>
      </section>
    </>
  );
}
