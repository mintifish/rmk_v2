"use client";

import Autoplay from "embla-carousel-autoplay";
import { taborImages } from "@/lib/tabor-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function TaborCarousel() {
  return (
    <Carousel
      className="relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true})]}
    >
      <CarouselContent className="gap-2 pb-5 pt-1">
        {taborImages.map((img) => (
          <CarouselItem
            key={img.image}
            className="basis-3/5 sm:basis-1/2 lg:basis-4/9"
          >
            <div className="aspect-[4/3] rounded-2xl shadow-lg">
              <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={img.image}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: `${img.offsetX}% ${img.offsetY}%`,
                  }}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12 h-8 w-8 border border-slate-300 bg-[#5e1c0b] hover:bg-[#703c14] hover:text-white text-white shadow-sm" />
      <CarouselNext className="-right-12 h-8 w-8 border border-slate-300 bg-[#5e1c0b] hover:bg-[#703c14] hover:text-white text-white shadow-sm" />
    </Carousel>
  );
}
