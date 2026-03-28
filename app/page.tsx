import { Button } from "@/components/ui/button";
import { TerminiDialog } from "@/components/core/termini-dialog";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SEKCIJA (Dobrodošli) */}
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Dobrodošli v{" "}
              <br />
              <span className="text-green-700">Rod Mlinskih Kamnov</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tu se nam lahko pridružite, se prijavite na naše aktivnosti in poizveste več o nas.
            </p>
            <div className="flex flex-wrap gap-4">
              <TerminiDialog />
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" /> Kontakt
              </Button>
            </div>
          </div>

          {/* Mesto za dobrodošlico */}
          <div className="aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-xl lg:aspect-rectangle">
            <div className="flex h-full items-center justify-center text-slate-400 italic">
              Tukaj bo tvoja dobrodošli slika (img/placeholder)
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
