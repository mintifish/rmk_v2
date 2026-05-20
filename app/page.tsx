import { MeetingsDialog } from "@/components/core/meetings-dialog";
import { ContactDialog } from "@/components/core/contact-dialog";
import { Donate001 } from "@/components/core/donate001";
import { CampCarousel } from "@/components/core/camp-carousel";
import { CampCountdown } from "@/components/core/camp-countdown";
import { AddToEmailList } from "@/components/core/add-to-email-list";
import { Footer } from "@/components/core/footer";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/core/fade-in";
import { ScrollSlideIn } from "@/components/core/scroll-slide-in";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover blur-[2px]"
            src="/images/hero-image.jpg"
            alt="Hero Image"
            fill
            loading="eager"
          />
          {/* torn paper effect from the bottom */}
          <div className="absolute inset-x-0 bottom-0 flex flex-row w-full h-50"></div>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12 text-center md:px-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-heading">
                Dobrodošli v <br />
                <span className="text-white">Rod mlinskih kamnov</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Tu se lahko pridružite, se prijavite na naše aktivnosti in
                poizveste več o taborništvu.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 mx-auto sm:flex-row">
                <MeetingsDialog />
                <ContactDialog />
              </div>
            </div>
          </div>
          <div className="absolute bottom-25 left-5 z-10">
            <Donate001 />
          </div>
          <ArrowDown className="absolute text-white -translate-x-1/2 size-8 bottom-25 left-1/2 animate-bounce" />
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
          </div>
          <div className="w-full">
            <CampCarousel />
          </div>
        </FadeIn>
      </main>
      <div className="relative overflow-hidden">
        {/* CAMP COUNTDOWN */}
        <div className="p-10 pt-30">
          <ScrollSlideIn direction="left">
            <CampCountdown />
          </ScrollSlideIn>
        </div>
        <div className="p-10 pt-20 pb-20">
          <ScrollSlideIn direction="right">
            <AddToEmailList />
          </ScrollSlideIn>
        </div>
      </div>
      <Footer />
    </>
  );
}
