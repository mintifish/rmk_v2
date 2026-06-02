"use client";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { galeryData } from "@/lib/data/galery-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GalerijaPage() {
  const [sort, setSort] = useState("najljubše");

  const sortedData = [...galeryData].sort((a, b) => {
    if (sort === "najnovejse")
      return (
        new Date(b.date_of_posting).getTime() -
        new Date(a.date_of_posting).getTime()
      );
    return 0;
  });

  return (
    <>
      <main className="relative flex flex-col items-center min-h-screen p-8">
        {/*Tune these to reposition/resize the background art
         width/height = scale; left = horizontal center (>50% → right); top = vertical center 
        <Image
          className="absolute object-contain pointer-events-none -z-10 opacity-20"
          style={{
            width: "100%",
            height: "100%",
            left: "80%",
            top: "90%",
            transform: "translate(-50%, -50%)",
          }}
          src="/art/triglav_lineart.png"
          alt="Mountains background"
          width={1920}
          height={1080}
        />*/}
        <h2 className="font-heading text-4xl font-extrabold text-[#43302b] sm:text-5xl lg:text-6xl pb-2">
          Galerija
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-2 p-1 mt-8 mb-6 border-2 rounded-lg">
          {[
            { value: "najljubše", label: "Najljubše" },
            { value: "najnovejse", label: "Najnovejše" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSort(option.value)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                sort === option.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:scale-105 hover:text-primary hover:border-primary/90"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedData.map((activity) => (
            <div
              key={activity.name}
              className="flex flex-col w-full overflow-hidden transition-transform border rounded-lg shadow-sm hover:scale-102 hover:shadow-lg bg-card"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={activity.image}
                  sizes="100vw"
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 p-4 h-36">
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-semibold text-left">
                    {activity.name}
                  </h2>
                  <p className="mt-1 text-sm text-left text-gray-700 line-clamp-2">
                    {activity.description}
                  </p>
                </div>
                <Button
                  size="default"
                  variant="default"
                  className="w-full h-9 text-sm shadow-sm hover:border hover:border-primary/70 transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <Link href={activity.link}>
                    <activity.icon className="w-4 h-4 mr-2" /> Oglej aktivnost
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
