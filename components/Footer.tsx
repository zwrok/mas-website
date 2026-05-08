import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded p-1.5">
                <Image
                  src="/logo_mas.png"
                  alt="MAS"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span
                className="text-white font-semibold text-sm tracking-wide"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Modular Art Studio
              </span>
            </div>
            <p className="text-[#9A9A9A] text-sm leading-relaxed max-w-xs">
              Galeria sztuki, warsztaty artystyczne i studio filmowo-fotograficzne.
              Przestrzeń dla twórców i miłośników sztuki.
            </p>
          </div>

          {/* Oferta */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#6B6B6B] mb-4">
              Oferta
            </p>
            <ul className="space-y-3 text-sm text-[#C0C0C0]">
              <li><Link href="/warsztaty" className="hover:text-white transition-colors">Warsztaty dla dorosłych</Link></li>
              <li><Link href="/warsztaty" className="hover:text-white transition-colors">Warsztaty dla dzieci</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors">Studio fotograficzne</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors">Studio filmowe</Link></li>
              <li><Link href="/galeria" className="hover:text-white transition-colors">Galeria sztuki</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#6B6B6B] mb-4">
              Kontakt
            </p>
            <ul className="space-y-3 text-sm text-[#C0C0C0]">
              <li>
                <a href="mailto:kontakt@modularart.studio" className="hover:text-white transition-colors">
                  kontakt@modularart.studio
                </a>
              </li>
              <li>
                <a href="tel:+48000000000" className="hover:text-white transition-colors">
                  +48 000 000 000
                </a>
              </li>
              <li className="pt-1">
                <Link href="/kontakt" className="text-[#1B2259] hover:text-[#3A4DB0] transition-colors font-medium">
                  Napisz do nas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4A4A4A]">
            © {new Date().getFullYear()} Modular Art Studio. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-xs text-[#4A4A4A]">
            <Link href="/polityka-prywatnosci" className="hover:text-[#9A9A9A] transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-[#9A9A9A] transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
