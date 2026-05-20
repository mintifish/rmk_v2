import Image from "next/image";
import { teamMembers } from "@/lib/team-data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-[#43302b]",
  "bg-[#6b4c3b]",
  "bg-[#8b6151]",
  "bg-[#a0785a]",
  "bg-[#c9a07a]",
];

export function TeamSection() {
  return (
    <section className="w-full px-6 py-24 bg-background md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-[#43302b] text-center">
            Naša ekipa
          </h2>
          <p className="max-w-xl mt-4 text-lg text-center text-muted-foreground">
            Vodstvo roda sestavljajo predani taborniki, ki z veseljem vodijo
            mlajše generacije.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#e8d5c0] group-hover:ring-[#a0785a] transition-all duration-300 shadow-md">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center text-white text-2xl font-bold ${
                      AVATAR_COLORS[index % AVATAR_COLORS.length]
                    }`}
                  >
                    {getInitials(member.name)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-[#43302b] text-base leading-tight">
                  {member.name}
                </span>
                <span className="text-sm text-[#a0785a] font-medium mt-0.5">
                  {member.role}
                </span>
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/-/g, "")}`}
                    className="text-xs text-muted-foreground mt-1 hover:text-[#43302b] transition-colors"
                  >
                    {member.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
