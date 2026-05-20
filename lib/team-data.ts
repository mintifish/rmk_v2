export type TeamMember = {
  id: number;
  name: string;
  role: string;
  phone?: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Filip Jakob Špendl",
    role: "Načelnik",
    phone: "070-366-357",
    image: "/images/nacelnik.jpg",
  },
  {
    id: 2,
    name: "Neža Habe",
    role: "Vodnica 2. razredov",
    phone: "030-732-991",
  },
  {
    id: 3,
    name: "Ana Pšeničnik",
    role: "Vodnica 3. razredov",
    phone: "069-604-303",
  },
  {
    id: 4,
    name: "Ana Bešter",
    role: "Vodnica 4. razredov",
    phone: "068-687-115",
  },
  {
    id: 5,
    name: "Žana Habe",
    role: "Vodnica 5. razredov",
    phone: "030-744-230",
  },
  {
    id: 6,
    name: "Maša Kopitar",
    role: "Vodnica 6. razredov",
    phone: "051-217-337",
  },
  {
    id: 7,
    name: "Živa Habe",
    role: "Vodnica 7. razredov",
    phone: "030-669-031",
  },
  {
    id: 8,
    name: "Andrej Sušnik",
    role: "Vodnik 8. razredov",
    phone: "051-755-118",
  },
];
