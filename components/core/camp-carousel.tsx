"use client";

import Autoplay from "embla-carousel-autoplay";
import { campImages } from "@/lib/camp-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CampCarousel() {
  return (
    <Carousel
      className="relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent className="gap-2 pb-5 py-2">
        {campImages.map((img) => (
          <CarouselItem
            key={img.image}
            className="basis-3/5 sm:basis-1/2 lg:basis-4/9"
          >
            <img
              src={img.image}
              alt={img.alt}
              className={cn(
                "aspect-4/3 object-cover rounded-2xl",
                "hover:scale-[1.02] transition-transform duration-300",
                "shadow-black shadow-2xl",
                "border-4 border-border"
              )}
              style={{
                objectPosition: `${img.offsetX}% ${img.offsetY}%`,
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12 h-8 w-8 border border-primary/40 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground" />
      <CarouselNext className="-right-12 h-8 w-8 border border-primary/40 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground" />
    </Carousel>
  );
}