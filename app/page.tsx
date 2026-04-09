import { TerminiDialog } from "@/components/core/termini-dialog";
import { KontaktDialog } from "@/components/core/kontakt-dialog";
import { CampCarousel } from "@/components/core/camp-carousel";
import { CampCountdown } from "@/components/core/camp-countdown";
import { AddToEmailList } from "@/components/core/add-to-email-list";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/core/fade-in";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover blur-[2px]"
            src="/images/hero-image.jpg"
            alt="Hero Image"
            fill
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12 text-center md:px-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-heading">
                Dobrodošli v <br />
                <span className="text-white">Rod Mlinskih Kamnov</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Tu se nam lahko pridružite, se prijavite na naše aktivnosti in
                poizveste več o nas.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 mx-auto sm:flex-row">
                <TerminiDialog />
                <KontaktDialog />
              </div>
            </div>
          </div>

          <ArrowDown
            className={cn(
              // Position & size
              "absolute size-8 bottom-30 left-1/2 -translate-x-1/2",
              // Animation
              "animate-bounce",
              // Colors
              "text-white",
            )}
          />
        </section>

        {/* GALERY */}
        <FadeIn>
          <div className="container px-4 mx-auto text-center mt-25 md:px-6">
            <h3 className="mb-4 text-5xl font-bold font-heading text-slate-900">
              Tabor 2025
            </h3>
            <h2 className="max-w-3xl mx-auto mb-5 text-lg font-normal leading-relaxed sm:text-xl text-slate-600">
              Premaknite se v galerijo in si oglejte utrinke z našega zadnjega
              tabora!
            </h2>
            <Link
              href="/galerija"
              className="mb-5 inline-flex h-14 items-center gap-2 rounded-lg px-8 border border-primary/40 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground transition-all hover:-translate-y-0.5 text-base font-medium"
            >
              Oglej galerijo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="mx-auto w-full max-w-[1000rem] px-4 sm:px-6 lg:px-8">
              <CampCarousel />
            </div>
          </div>
        </FadeIn>

        {/* CAMP COUNTDOWN */}
        <div className="pt-40 pb-40">
          <FadeIn>
            <CampCountdown />
          </FadeIn>
        </div>
      </main>
      <AddToEmailList />
      {/* FOOTER */}
      <footer className="bg-primary">
        <div className="container flex flex-col items-start justify-between gap-4 py-20 px-20 mx-auto md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-2xl font-black text-left text-black text-white font-heading">
              Rod Mlinskih Kamnov
            </h3>
            <p className="text-sm text-left text-white text">
              Rod Mlinskih Kamnov je neprofitna organizacija, ki deluje na{" "}
              <br />
              prostovoljni osnovi. Naše delovanje je odvisno od podpore naših{" "}
              <br />
              članov, donatorjev in sponzorjev. Hvala, ker ste del naše <br />
              skupnosti!
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-2xl font-black text-left text-black text-white font-heading">
              Kontakt:
            </h3>
            <a href="mailto:rmkrad@gmail.com" className="text-white transition-colors hover:underline">
              Email: rmkrad@gmail.com
            </a>
            <a href="tel:+38670366357" className="text-white transition-colors hover:underline">
              Telefon: +386 70 366 357
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-2xl font-black text-left text-black text-white font-heading">
              Sledi nam:
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/rodmlinskihkamnov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-white/90 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/rmkradomlje/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-white/90 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full pb-5">
          <p className="text-sm text-[#ffe8b0] text-center">
            &copy; {new Date().getFullYear()} Rod Mlinskih Kamnov. Vse pravice
            pridržane.
          </p>
        </div>
      </footer>
    </>
  );
}
