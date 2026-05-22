import { Footer } from "@/components/core/footer";
import { HistoryTimeline } from "@/components/core/history-timeline";
import { TeamSection } from "@/components/core/team-section";
import Image from "next/image";

export default function ONasPage() {
  return (
    <>
      <main className="flex flex-col items-center pb-12 sm:pt-4 md:px-12">
        <div className="flex flex-col w-full gap-8 pt-10 md:flex-row">
          {/* Left: text */}
          <div className="flex flex-col items-center gap-4 p-2 md:items-start md:w-1/2">
            <h1 className="font-heading text-4xl font-extrabold text-[#43302b] md:text-5xl lg:text-8xl md:leading-none text-center md:text-left">
              <span className="inline md:block">Spoznaj </span>
              <span className="inline md:block">naše </span>
              <span className="inline md:block">vodstvo</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-center text-muted-foreground md:text-left">
              Smo taborniki iz Radomlj, ki se z veseljem družimo, raziskujemo
              naravo in ustvarjamo nepozabne spomine.
            </p>
          </div>
          {/* Right: image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/vodstvo-skupinska-slika.jpg"
              alt="Vodstvo skupinska"
              width={3121}
              height={4682}
              className="object-cover w-full shadow-2xl md:rounded-lg max-h-115"
            />
          </div>
        </div>
      </main>
      <HistoryTimeline />
      <TeamSection />
      <Footer />
    </>
  );
}
