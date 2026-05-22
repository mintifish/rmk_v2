import Image from "next/image";
import { teamMembers } from "@/lib/team-data";
import { Button } from "../ui/button";
import { useState } from "react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

{/* return members sorted by tags selecte tags at the top others as idexed by id */}
export function TeamSection() {
  const [sort, setSort] = useState<string>("vsi");

  const sortedMembers = sort === "vsi" 
    ? [...teamMembers] 
    : [...teamMembers].sort((a, b) => {
        const aHasTag = a.tags.includes(sort as any);
        const bHasTag = b.tags.includes(sort as any);

        if (aHasTag && !bHasTag) return -1;
        if (!aHasTag && bHasTag) return 1;
        return a.id - b.id;
      });

  return (
    <section className="w-full px-4 py-24 bg-background md:px-16">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-center font-heading md:text-6xl text-primary">
            Naša ekipa
          </h2>
          <p className="max-w-xl mt-4 text-lg text-center text-muted-foreground">
            Vodstvo roda sestavljajo predani taborniki, ki z veseljem vodijo
            mlajše generacije.
          </p>
                  <div className="flex flex-row flex-wrap justify-center gap-2 p-1 mt-8 mb-6 border-2 rounded-lg">
          {[
            { value: "vsi", label: "Vsi" },
            { value: "rodova uprava", label: "Rodova uprava"},
            { value: "vodnik", label: "Vodnik" },
            { value: "gg vzgoja", label: "GG Vzgoja" },
            { value: "pp klub", label: "PP Klub" },
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedMembers.map((member) => {
            const isSelected = sort === "vsi" || member.tags.includes(sort as any);
            return (
            <div
              key={member.id}
              className={`relative flex flex-row-reverse items-center gap-6 p-6 transition-all duration-500 bg-white shadow-md hover:scale-105 pt-14 rounded-xl ${
                isSelected ? "" : "grayscale opacity-50"
              }`}
            >
              <div className="absolute px-3 py-1 rounded-md shadow-2xl top-4 left-4 bg-primary">
                <span className="text-sm italic text-white">{member.role}</span>
              </div>

              {/* Text content on the right */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {member.description}
                </p>
              </div>

              {/* Image on the left (rounded rectangle) */}
              <div className="relative w-32 h-40 overflow-hidden border border-gray-100 rounded-xl shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-gray-600 bg-gray-300">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
