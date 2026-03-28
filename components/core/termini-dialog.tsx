"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { terminiData } from "@/lib/termini-data";
import { Calendar } from "lucide-react";

function getStripeStyle(stripeA: string, stripeB: string, gapA: string, gapB: string) {
  return {
    backgroundImage: `repeating-linear-gradient(135deg, ${stripeA} 0 ${gapA}, ${stripeB} ${gapA} calc(${gapA} + ${gapB}))`,
  };
}

export function TerminiDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="default" className="shrink-0 bg-[#572111] text-white shadow-sm hover:bg-[#6b2a16]">
          <Calendar className="mr-2 h-5 w-5" /> Termini po razredih
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">Termini vodovih sestankov</DialogTitle>
          <DialogDescription className="text-center">Razpored po razredih.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4 pr-2">
            {terminiData.map((entry) => (
              <div key={entry.title} className="relative overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="absolute inset-y-0 left-0 w-4" style={getStripeStyle(entry.stripeA, entry.stripeB, entry.gapA, entry.gapB)} />
                <div className="absolute inset-y-0 right-0 w-4" style={getStripeStyle(entry.stripeA, entry.stripeB, entry.gapA, entry.gapB)} />
                <div className="px-8 py-6">
                  <h3 className="font-heading text-center text-2xl font-black text-slate-900">{entry.title}</h3>
                  <div className="mx-auto mt-4 max-w-md space-y-2 text-center text-lg text-slate-700">
                    <p><span className="font-semibold text-slate-900">Vodnik:</span> {entry.vodnik}</p>
                    <p><span className="font-semibold text-slate-900">Kdaj:</span> {entry.cas}</p>
                    <p><span className="font-semibold text-slate-900">Razred:</span> {entry.razred}</p>
                    <p><span className="font-semibold text-slate-900">Telefonska številka:</span> {entry.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
