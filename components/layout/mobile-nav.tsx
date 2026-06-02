"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const web_paths = [
  { name: "Domov", href: "/" },
  { name: "Galerija", href: "/galerija" },
  { name: "O nas", href: "/o-nas" },
  { name: "Donacije", href: "/donacije" },
];

const aplications_paths = [
  {
    name: "Tabor 2026",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScODt6gOeX2P2NfuxawZQ_QiUEmpoUItighomgHuo2lFUEzJA/viewform?usp=sf_link",
  },
  {
    name: "Pristopna izjava 25/26",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd3NMU1upHra_xegDxzyFZ7cdY-6tbGS9X3Qdwep16YRS0_nA/viewform?usp=header",
  },
];

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Burger button */}
      <button
        className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg md:hidden hover:bg-accent"
        onClick={() => setMenuOpen(true)}
        aria-label="Odpri meni"
        style={{ marginRight: 0 }}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background shadow-2xl border-l border-border md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-lg font-bold font-heading text-primary">
            Meni
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg hover:bg-accent"
            aria-label="Zapri meni"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {web_paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-accent"
              onClick={() => setMenuOpen(false)}
            >
              {path.name}
            </Link>
          ))}

          <div className="pt-4 mt-3 border-t border-border">
            <p className="px-3 mb-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Prijavnice
            </p>
            {aplications_paths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-accent"
                onClick={() => setMenuOpen(false)}
              >
                {path.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
