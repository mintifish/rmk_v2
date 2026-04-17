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
import { LeaderData, contactData } from "@/lib/contact-data";
import {
  Mail,
  Phone,
  MapPin,
  IdCard,
  User,
  Banknote,
  ArrowDown,
} from "lucide-react";
import React, { useRef, useState } from "react";

const iconMap = {
  MapPin,
  IdCard,
  User,
  Banknote,
};

export function ContactDialog() {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrolled(scrollRef.current.scrollTop > 0);
    }
  };

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

      <DialogContent className="p-0 sm:max-w-lg max-h-[100vh] overflow-hidden bg-background">
        <DialogHeader className="p-6 rounded-t-xl bg-primary text-primary-foreground">
          <DialogTitle className="text-3xl font-bold font-heading">
            Kontakt
          </DialogTitle>
          <DialogDescription className="mt-0.5 text-base text-primary-foreground/90">
            Kako nas lahko kontaktirate ter naši podatki.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="p-6 mx-4 mt-4 bg-white border rounded-2xl border-border">
            <span className="flex inline-flex gap-2 text-2xl font-bold text-foreground">
              <div className="w-16 h-16 mx-auto overflow-hidden border shadow-sm rounded-xl border-border maxw-w-xs">
                <img
                  src="/images/nacelnik.jpg"
                  alt="Nacelnik"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-foreground text-primary">
                  {LeaderData.description}
                </span>
                <span className="text-base font-medium leading-tight text-foreground/60">
                  Načelnik
                </span>
              </div>
            </span>
            <div className="flex items-center mt-4 text-base">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href={`mailto:${LeaderData.email}`}
                className="ml-2 hover:underline"
              >
                {LeaderData.email}
              </a>
            </div>
            <div className="flex items-center mt-2 text-base">
              <Phone className="w-6 h-6 text-primary" />
              <a
                href={`tel:${LeaderData.telefon.replace(/-/g, "")}`}
                className="ml-2 underline hover:text-primary/80"
              >
                {LeaderData.telefon}
              </a>
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="bg-white rounded-2xl border border-border p-6 mx-4 mb-4 max-h-75 overflow-y-auto overscroll-none"
          >
            <span className="text-xl font-bold text-foreground text-primary">
              Ostali podatki
            </span>
            {contactData.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  className="flex items-start gap-4 p-4 mt-4 transition-colors border-b rounded-lg hover:bg-primary/10 border-border last:border-b-0"
                  key={index}
                >
                  {Icon && (
                    <Icon className="w-6 h-6 mt-1 text-primary shrink-0" />
                  )}
                  <div>
                    <span className="text-base font-medium leading-tight text-foreground">
                      {item.title}:
                    </span>
                    <div className="text-lg font-semibold text-primary">
                      {item.description}
                    </div>
                    {item.child && <div className="mt-2">{item.child}</div>}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="z-20 flex justify-center pb-2 transition-opacity duration-200 bottom-6"
            style={{
              opacity: scrolled ? 0 : 1,
              pointerEvents: scrolled ? "none" : "auto",
            }}
          >
            <ArrowDown className="w-7 h-7 text-primary animate-bounce" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
