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
            className="basis-1/1 sm:basis-2/3 lg:basis-4/9"
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
    </Carousel>
  );
}