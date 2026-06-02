"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { campImages } from "@/lib/data/camp-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
            <div
              className="relative aspect-4/3 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-black shadow-2xl border-4 border-border"
            >
              <Image
                src={img.image}
                alt={img.alt}
                fill
                className="object-cover"
                style={{
                  objectPosition: `${img.offsetX}% ${img.offsetY}%`,
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}