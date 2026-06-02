import Link from "next/link";
import Image from "next/image";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-background">
      <div className="flex flex-wrap items-center justify-between w-full gap-3 px-5 py-2 min-h-20">
        {/* Logo */}
        <div className="flex items-center min-w-0 gap-3">
          <Image
            src="/images/rmk-logo.png"
            alt="rmk_logo_header"
            width={64}
            height={64}
            className="w-auto h-14 sm:h-16"
          />
          <h1 className="text-xl font-black tracking-tight font-heading text-primary sm:text-2xl lg:text-3xl">
            <Link href="/" className="text-2lg text-primary hover:text-primary/90">
              <span>Rod mlinskih kamnov</span>
            </Link>
          </h1>
        </div>

        {/* Desktop tabs */}
        <div className="items-center hidden gap-6 px-10 text-sm font-medium md:flex">
          <Link href="/" className="text-base font-medium text-foreground hover:text-primary/90">
            Domov
          </Link>
          <Link href="/galerija" className="text-base font-medium text-foreground hover:text-primary/90">
            Galerija
          </Link>
          <Link href="/o-nas" className="text-base font-medium text-foreground hover:text-primary/90">
            O nas
          </Link>
          <Link href="/donacije" className="text-base font-medium text-foreground hover:text-primary/90">
            Donacije
          </Link>
        </div>

        {/* Desktop dropdown */}
        <div className="items-center hidden gap-4 ml-auto md:flex shrink-0">
          <NavDropdown />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
