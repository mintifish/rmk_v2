import Link from "next/link";
import { NavDropdown } from "@/components/core/nav-dropdown";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-background">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-2 mx-auto min-h-20">
        <div className="flex items-center min-w-0 gap-3">
          <img
            src="/images/rmk-logo.png"
            alt="rmk_logo_header"
            className="w-auto h-14 sm:h-16"
          />
          <h1 className="text-xl font-black tracking-tight font-heading text-primary sm:text-2xl lg:text-3xl">
            <Link
              href="/"
              className="text-primary hover:text-primary/90"
            >
              <span className="hidden md:block">Rod mlinskih kamnov</span>
              <span className="text-2xl md:hidden">RMK</span>
            </Link>
          </h1>
        </div>
        {/* Tabs */}
        <div className="items-center hidden gap-6 px-10 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-base font-medium text-foreground hover:text-primary/90"
          >
            Domov
          </Link>
          <Link
            href="/galerija"
            className="text-base font-medium text-foreground hover:text-primary/90"
          >
            Galerija
          </Link>
          <Link
            href="/o-nas"
            className="text-base font-medium text-foreground hover:text-primary/90"
          >
            O nas
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-auto shrink-0">
          <NavDropdown />
        </div>
      </div>
    </header>
  );
}
