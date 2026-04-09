"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { terminiData } from "@/lib/termini-data";
import { Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

function getStripeStyle(
  stripeA: string,
  stripeB: string,
  gapA: string,
  gapB: string,
) {
  return {
    backgroundImage: `repeating-linear-gradient(135deg, ${stripeA} 0 ${gapA}, ${stripeB} ${gapA} calc(${gapA} + ${gapB}))`,
  };
}

export function TerminiDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="secondary"
          className="h-14 w-64 shrink-0 justify-center px-8 text-base shadow-sm hover:border hover:border-primary/70 hover:bg-background hover:text-primary transition-all hover:-translate-y-0.5"
        >
          <Calendar className="w-5 h-5 mr-2" /> Termini po razredih
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 sm:max-w-lg max-h-[100vh] overflow-hidden border-2 border-border bg-background">
        <DialogHeader className="p-6 rounded-t-xl bg-primary text-primary-foreground">
          <DialogTitle className="text-4xl font-bold text-center font-heading">
            Termini po razredih
          </DialogTitle>
          <DialogDescription className="mt-2 text-lg text-center text-primary-foreground/90">
            Kdaj in kje se bodo odvijali sestanki za posamezne razrede.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 space-y-6 max-h-[calc(90vh-120px)] overflow-auto">
          {terminiData.map((entry) => (
            <div
              key={entry.title}
              className="relative overflow-hidden bg-white border shadow-sm rounded-xl"
            >
              <div
                className="absolute inset-y-0 left-0 w-4"
                style={getStripeStyle(
                  entry.stripeA,
                  entry.stripeB,
                  entry.gapA,
                  entry.gapB,
                )}
              />
              <div
                className="absolute inset-y-0 right-0 w-4"
                style={getStripeStyle(
                  entry.stripeA,
                  entry.stripeB,
                  entry.gapA,
                  entry.gapB,
                )}
              />
              <div className="px-8 py-6">
                <h3 className="text-2xl font-black text-center font-heading text-slate-900">
                  {entry.title}
                </h3>
                <div className="max-w-md mx-auto mt-4 space-y-2 text-lg text-center text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Vodnik:
                    </span>{" "}
                    {entry.vodnik}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Kdaj:</span>{" "}
                    {entry.cas}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Razred:
                    </span>{" "}
                    {entry.razred}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Telefonska številka:
                    </span>{" "}
                    {entry.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
