import Link from "next/link";
import { TerminiDialog } from "@/components/core/termini-dialog";
import { KontaktDialog } from "@/components/core/kontakt-dialog";
import { TaborCarousel } from "@/components/core/tabor-carousel";
import { FadeIn } from "@/components/core/fade-in";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SEKCIJA (Dobrodošli) */}
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/images/hero-image.jpg"
            alt="Hero Image"
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12 text-center md:px-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Dobrodošli v <br />
                <span className="text-white">Rod Mlinskih Kamnov</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Tu se nam lahko pridružite, se prijavite na naše aktivnosti in
                poizveste več o nas.
              </p>
              <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
                <TerminiDialog />
                <KontaktDialog />
              </div>
            </div>
          </div>
            
        </section>

        {/* DODATNA SEKCIJA (Galerija) */}
        <FadeIn>
        <div className="container mx-auto mt-25 px-4 text-center md:px-6">
          <h3 className="font-heading mb-4 text-5xl font-bold text-slate-900">
            Tabor 2025
          </h3>
          <h2 className="mx-auto mb-5 max-w-3xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
            Premaknite se v galerijo in si oglejte utrinke z našega zadnjega tabora!
          </h2>
          <Link href="/galerija" className="mb-5 inline-flex h-14 items-center gap-2 rounded-lg border border-primary/40 bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground">
            Oglej galerijo
            <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="mx-auto w-full max-w-[1000rem] px-4 sm:px-6 lg:px-8">
            <TaborCarousel />
          </div>
        </div>
        </FadeIn>
      </main>
    </>
  );
}
