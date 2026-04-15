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
import { CampAbout } from "@/lib/camp-about";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type CampAboutSection = {
  title: string;
  description: string;
  googleMapsLink?: string;
  refoundPolicy?: string;
};

export function MoreAboutCampDialog() {
  const sections: CampAboutSection[] = [
    CampAbout.where,
    CampAbout.when,
    CampAbout.departure,
    CampAbout.return,
    CampAbout.cost,
    CampAbout.paymentDueDate,
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="h-12 w-60 justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-bold text-foreground shadow-[0_10px_20px_-18px_rgba(68,52,35,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#efe5d6] hover:text-[#5a4a37]"
        >
          <Phone className="w-5 h-5" /> Več o taboru
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg max-h-[90vh] overflow-auto p-0 border-2 border-border bg-background"
      >
        <DialogHeader
          className="p-6 bg-primary text-primary-foreground rounded-t-xl"
        >
          <DialogTitle className="text-4xl font-bold text-center font-heading">
            Več o taboru
          </DialogTitle>
          <DialogDescription className="mt-2 text-lg text-center text-primary-foreground/90">
            Kako nas lahko kontaktirate.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 max-h-[calc(90vh-120px)] overflow-auto p-4">
          <Carousel
            orientation="vertical"
            className="h-[600px]"
          >
            <CarouselContent>
              <CarouselItem>
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="p-4 rounded-lg space-y-2 hover:bg-primary/10 transition-colors"
                  >
                    <h4 className="text-base font-semibold text-foreground">
                      {section.title}
                    </h4>
                    <p className="text-sm whitespace-pre-line text-muted-foreground">
                      {section.description}
                    </p>
                    {section.googleMapsLink ? (
                      <a
                        href={section.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Odpri lokacijo na Google Maps
                      </a>
                    ) : null}
                    {section.refoundPolicy ? (
                      <p className="text-sm whitespace-pre-line text-muted-foreground">
                        {section.refoundPolicy}
                      </p>
                    ) : null}
                  </div>
                ))}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
