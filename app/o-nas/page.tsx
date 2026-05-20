import { Footer } from "@/components/core/footer";
import Image from "next/image";

export default function ONasPage() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen pt-12 sm:pt-4 md:px-12 ">
        <div className="flex flex-col w-full gap-8 md:flex-row">
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
              src="/images/vodstvo-skupinska.jpg"
              alt="Vodstvo skupinska"
              width={2907}
              height={1462}
              className="object-cover w-full shadow-2xl md:rounded-lg max-h-115"
            />
          </div>
        </div>
        {/* Additional Content Section */}
        <section className="flex flex-col items-center w-full mt-12">
          <h2 className="text-3xl font-bold text-[#43302b] mb-4">
            Naše poslanstvo
          </h2>
          <p className="max-w-xl mb-6 text-lg text-center text-muted-foreground">
            Naš rod si prizadeva za osebno rast, prijateljstvo in pustolovščine
            v naravi. Skupaj ustvarjamo okolje, kjer vsakdo lahko prispeva in
            raste.
          </p>
          <ul className="list-disc list-inside text-base text-[#43302b] space-y-2">
            <li>Poudarjamo vrednote taborništva</li>
            <li>Spodbujamo sodelovanje in prijateljstvo</li>
            <li>Učimo se skozi izkušnje v naravi</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
