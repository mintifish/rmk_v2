import Link from "next/link";
import { NavDropdown } from "@/components/core/nav-dropdown";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm ">
      <div className="container mx-auto flex min-h-20 flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/rmk_logo.png"
            alt="rmk_logo_header"
            className="h-14 w-auto sm:h-16"
          />
          <h1 className="font-heading text-xl font-black tracking-tight text-primary sm:text-2xl lg:text-3xl">
            <Link href="/" className="text-primary hover:text-primary/90">
              Rod Mlinskih Kamnov
            </Link>
          </h1>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium px-10">
          <Link
            href="/"
            className="text-base font-medium text-slate-700 hover:text-primary/90"
          >
            Domov
          </Link>
          <Link
            href="/galerija"
            className="text-base font-medium text-slate-700 hover:text-primary/90"
          >
            Galerija
          </Link>
          <Link
            href="/o-nas"
            className="text-base font-medium text-slate-700 hover:text-primary/90"
          >
            O nas
          </Link>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <NavDropdown />
        </div>
      </div>
    </header>
  );
}
