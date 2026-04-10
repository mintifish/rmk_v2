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
import { terminiData } from "@/lib/termini-data";
import { cn } from "@/lib/utils";
import { Calendar, Phone, Mail, DoorOpen } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

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
              className="relative overflow-hidden bg-white border shadow-sm rounded-xl px-6 py-5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-xl flex items-center justify-center text-white font-bold text-3xl bg-primary z-20 relative"
                  style={getStripeStyle(
                    entry.stripeA,
                    entry.stripeB,
                    entry.gapA,
                    entry.gapB,
                  )}
                >
                  <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {entry.grade}
                  </span>
                </div>
                <h3 className="text-3xl text-primary font-bold">
                  {entry.title}
                </h3>
              </div>
              <div className="flex flex-col gap-2 pl-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href={`tel:0038640505268`}>040 505 268</a>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>{entry.cas}</span>
                </div>
                <div className="flex items-center">
                  <DoorOpen className="w-5 h-5 mr-3" />
                  <span>{entry.classroom}</span>
                </div>
                <div className="flex items-center">
                  <Avatar size="sm" className="mr-3">
                    <AvatarImage src="/images/tabor2025/1.jpg" />
                  </Avatar>
                  <span>{entry.classroom}</span>
                </div>
              </div>
              {/* <h3 className="text-2xl font-black text-center font-heading text-slate-900"> */}
              {/*   {entry.title} */}
              {/* </h3> */}
              {/* <div className="max-w-md mx-auto mt-4 space-y-2 text-lg text-center text-slate-700"> */}
              {/*   <p> */}
              {/*     <span className="font-semibold text-slate-900"> */}
              {/*       Vodnik: */}
              {/*     </span>{" "} */}
              {/*     {entry.vodnik} */}
              {/*   </p> */}
              {/*   <p> */}
              {/*     <span className="font-semibold text-slate-900">Kdaj:</span>{" "} */}
              {/*     {entry.cas} */}
              {/*   </p> */}
              {/*   <p> */}
              {/*     <span className="font-semibold text-slate-900"> */}
              {/*       Razred: */}
              {/*     </span>{" "} */}
              {/*     {entry.classroom} */}
              {/*   </p> */}
              {/*   <p> */}
              {/*     <span className="font-semibold text-slate-900"> */}
              {/*       Telefonska številka: */}
              {/*     </span>{" "} */}
              {/*     {entry.phone} */}
              {/*   </p> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
