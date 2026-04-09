import Link from "next/link";
import { NavDropdown } from "@/components/core/nav-dropdown";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container flex flex-wrap items-center justify-between py-2 mx-auto min-h-20 gap-3">
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
              Rod Mlinskih kamnov
            </Link>
          </h1>
        </div>

        {/* Tabs */}
        <div className="items-center hidden px-10 text-sm font-medium md:flex gap-6">
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
        <div className="flex items-center ml-auto shrink-0 gap-4">
          <NavDropdown />
        </div>
      </div>
    </header>
  );
}
