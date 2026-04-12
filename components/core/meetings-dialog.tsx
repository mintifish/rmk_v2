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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { meetingsData } from "@/lib/meetings-data";
import { Calendar, Phone, DoorOpen, User } from "lucide-react";

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

export function MeetingsDialog() {
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
          <DialogTitle className="text-3xl font-bold font-heading">
            Termini po razredih
          </DialogTitle>
          <DialogDescription className="mt-0.5 text-base text-primary-foreground/90">
            Kdaj in kje se bodo odvijali sestanki za posamezne razrede.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 max-h-[calc(90vh-120px)] overflow-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {meetingsData.map((entry) => (
              <AccordionItem
                key={entry.title}
                value={entry.title}
                className="overflow-hidden bg-white border shadow-sm rounded-xl not-last:border-b-0"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline gap-4 rounded-xl">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className="size-8 shrink-0 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
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
                    <span className="text-xl text-primary font-bold">
                      {entry.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4">
                  <div className="flex flex-col gap-2 pl-1 pt-1 text-base">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 shrink-0 text-muted-foreground" />
                      <a
                        href={`tel:${entry.phone.replace(/-/g, "")}`}
                        className="hover:underline"
                      >
                        {entry.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3 shrink-0 text-muted-foreground" />
                      <span>{entry.cas}</span>
                    </div>
                    <div className="flex items-center">
                      <DoorOpen className="w-4 h-4 mr-3 shrink-0 text-muted-foreground" />
                      <span>{entry.classroom}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-3 shrink-0 text-muted-foreground" />
                      <span>{entry.vodnik}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}
