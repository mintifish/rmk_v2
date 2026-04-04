import { NavDropdown } from "@/components/core/nav-dropdown";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex min-h-20 flex-wrap items-center justify-between gap-3 px-4 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/rmk_logo.png"
            alt="rmk_logo_header"
            className="h-14 w-auto sm:h-16"
          />
          <h1
            className="font-heading text-xl font-black tracking-tight sm:text-2xl lg:text-3xl text-[#5e1c0b]"
          >
            ROD MLINSKIH KAMNOV
          </h1>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-4">
          <NavDropdown />
        </div>
      </div>
    </header>
  );
}

