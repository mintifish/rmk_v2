import { TerminiDialog } from "@/components/core/termini-dialog";
import { KontaktDialog } from "@/components/core/kontakt-dialog";
import { TaborCarousel } from "@/components/core/tabor-carousel";

export default function Home() {
  return (
    <>
      {/* HERO SEKCIJA (Dobrodošli) */}
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Dobrodošli v <br />
              <span className="text-green-700">Rod Mlinskih Kamnov</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tu se nam lahko pridružite, se prijavite na naše aktivnosti in
              poizveste več o nas.
            </p>
            <div className="flex flex-wrap gap-4">
              <TerminiDialog />
              <KontaktDialog />
            </div>
          </div>

          {/* Mesto za dobrodošlico */}
          <div className="aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-xl lg:aspect-rectangle">
            <img
              src="/images/hero-image.jpg"
              alt="Dobrodošli v Rod Mlinskih Kamnov"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* DODATNA SEKCIJA (Galerija) */}
        <div className="mt-75">
          <h3 className="font-heading text-5xl font-bold text-slate-900 mb-6 ml-15">
            Tabor 2025
          </h3>
          <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <TaborCarousel />
          </div>
        </div>
      </main>
    </>
  );
}
