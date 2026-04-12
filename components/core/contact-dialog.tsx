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
import { contactData } from "@/lib/contact-data";
import { Phone, Mail } from "lucide-react";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="secondary"
          className="h-14 w-64 justify-center px-8 text-base shadow-sm hover:border hover:border-primary/70 hover:bg-background hover:text-primary transition-all hover:-translate-y-0.5"
        >
          <Phone className="w-5 h-5 mr-2" /> Kontakt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-auto p-0 border-2 border-border bg-background">
        <DialogHeader className="p-6 bg-primary text-primary-foreground rounded-t-xl">
          <DialogTitle className="text-4xl font-bold text-center font-heading">
            Kontakt
          </DialogTitle>
          <DialogDescription className="mt-2 text-lg text-center text-primary-foreground/90">
            Kako nas lahko kontaktirate.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2 bg-white border border-border rounded-2xl max-h-[calc(90vh-120px)] overflow-auto p-4 shadow-sm hover:bg-primary/10 transition-colors">
            <h3 className="text-2xl font-black text-center font-heading text-slate-900">
              {contactData.vodstvo.naslov}
            </h3>
            <div className="max-w-md mx-auto mt-4 text-lg text-center space-y-2 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Nacelnik:</span>{" "}
                {contactData.vodstvo.nacelnik.ime}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                {contactData.vodstvo.nacelnik.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Telefon:</span>{" "}
                {contactData.vodstvo.nacelnik.telefon}
              </p>
            </div>
          </div>

          <div className="pb-5">
            <div className="space-y-2 bg-white borderborder-border rounded-2xl max-h-[calc(90vh-120px)] overflow-auto p-4 hover:bg-primary/10 transition-colors">
              <h3 className="text-2xl font-black text-center font-heading text-slate-900">
                {contactData.ostaliPodatki.naslov}
              </h3>
              <div className="max-w-md mx-auto mt-4 text-lg text-center space-y-2 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">
                    Lokacija:
                  </span>{" "}
                  {contactData.ostaliPodatki.lokacija}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Davčna številka:
                  </span>{" "}
                  {contactData.ostaliPodatki.davcnaStevilka}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">TRR:</span>{" "}
                  {contactData.ostaliPodatki.trr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
