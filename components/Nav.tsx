"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/warsztaty", label: "Warsztaty" },
  { href: "/wydarzenia", label: "Wydarzenia" },
  { href: "/galeria", label: "Galeria" },
  { href: "/studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E1]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo_mas.png"
            alt="Modular Art Studio"
            width={40}
            height={40}
            className="object-contain"
          />
          <span
            className="text-[#1B2259] font-semibold text-sm tracking-wide hidden sm:block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Modular Art Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href || pathname.startsWith(link.href + "/") ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-4">
          <Link href="/warsztaty" className="btn-primary hidden md:inline-flex text-xs py-2.5 px-5">
            Zapisz się
          </Link>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E5E1] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link py-1${pathname === link.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/warsztaty" className="btn-primary mt-2" onClick={() => setOpen(false)}>
            Zapisz się
          </Link>
        </div>
      )}
    </header>
  );
}
