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

export function CampCarousel() {
  return (
    <Carousel
      className="relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent className="py-2 pb-5 gap-2">
        {campImages.map((img) => (
          <CarouselItem
            key={img.image}
            className="basis-3/5 sm:basis-1/2 lg:basis-4/9"
          >
            <img
              src={img.image}
              alt={img.alt}
              className="aspect-4/3 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-black shadow-2xl border-4 border-border"
              style={{
                objectPosition: `${img.offsetX}% ${img.offsetY}%`,
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="w-8 h-8 border -left-12 border-primary/40 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground"
      />
      <CarouselNext
        className="w-8 h-8 border -right-12 border-primary/40 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground"
      />
    </Carousel>
  );
}