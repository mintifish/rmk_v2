export type TeamMember = {
  id: number;
  name: string;
  role: string;
  tags: Tag[];
  description: string;
  phone?: string;
  image?: string;
};

type Tag = "rodova uprava" | "vodnik" | "gg vzgoja" | "pp klub";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Filip Jakob Špendl",
    role: "Načelnik",
    tags: ["rodova uprava", "vodnik"],
    description: "Zelo organiziran tabornik zaslužen za povezanost rodu in vodstva, rad se druži in uživa v pospravljanju.",
    image: "/images/vodstvo/FilipJakobSpendl.png",
  },
  {
    id: 2,
    name: "Andrej Sušnik",
    role: "Gospodar",
    tags: ["rodova uprava", "vodnik"],
    description: "Čudovit vodnik, od katerega vedno nekaj novega izveš. Skrbi, da je vsak član bister in odgovoren.",
    image: "/images/vodstvo/AndrejSusnik.png",
  },
  {
    id: 3,
    name: "Jure Sušnik",
    role: "Zakladnik",
    tags: ["rodova uprava"],
    description: "Dolgoletni kuhar, ki je sedaj \"upokojen\" in ima vlogo blagajnika. Obožuje čistočo v kuhinji in med računi.",
    image: "/images/vodstvo/JureSusnik.png",
  },
  {
    id: 4,
    name: "Matic Božič",
    role: "Propagandist",
    tags: ["rodova uprava", "gg vzgoja"],
    description: "Priljubljen med mlajšimi. Vodniški vajenec in glavni propagandist.",
    image: "/images/vodstvo/MaticBozic.png",
  },
  {
    id: 5,
    name: "Živa Habe",
    role: "PP načelnica",
    tags: ["rodova uprava", "vodnik"],
    description: "PP načelnica in vodnica, zelo povezana z ostalimi rodovi in ima veliko taborniških znanj.",
    image: "/images/vodstvo/ZivaHabe.png",
  },
  {
    id: 6,
    name: "Maša Kopitar",
    role: "GG načelnica",
    tags: ["rodova uprava", "vodnik"],
    description: "Zelo živahna, vedno polna energije in vedno pripravljena za druženje.",
    image: "/images/vodstvo/MasaKopitar.png",
  },
  {
    id: 7,
    name: "Žana Habe",
    role: "MČ načelnica",
    tags: ["rodova uprava", "vodnik"],
    description: "Samozavestna in ljubeča, vedno pripravljena na vsako oviro s svojim survival packom.",
    image: "/images/vodstvo/ZanaHabe.png",
  },
  {
    id: 8,
    name: "Tian Hrovat",
    role: "IT podpora",
    tags: ["rodova uprava", "vodnik"],
    description: "Vodniški vajenec in IT podpora našega rodu ter rodov rekorder za govorjenje.",
    image: "/images/vodstvo/TianHrovat.png",
  },
  {
    id: 9,
    name: "Neža Habe",
    role: "Kuharica",
    tags: ["vodnik"],
    description: "Odlična vodnica, ki je pod vodstvom Jureta Sušnika postala tudi odlična glava kuhinje.",
    image: "/images/vodstvo/NezaHabe.png",
  },
  {
    id: 10,
    name: "Ana Bešter",
    role: "Vodnica",
    tags: ["vodnik"],
    description: "Javi se za ogromno nalog in s svojo energijo krepi vsako aktivnost rodu. Teta iz ozadja",
    image: "/images/vodstvo/AnaBester.png",
  },
  {
    id: 11,
    name: "Ana Pšeničnik",
    role: "Vodnica",
    tags: ["vodnik"],
    description: "Najbolj kulska oseba na taboru! In drugje.",
    image: "/images/vodstvo/AnaPsenicnik.png",
  },
  {
    id: 12,
    name: "Tia Poteko",
    role: "Vodnica",
    tags: ["vodnik"],
    description: "Umetniško nadarjena vodnica, ki je zelo povezana svojim vodom. Aktualna rodova prvakinja v štiri v vrsto.",
    image: "/images/vodstvo/TianPoteko.png",
  },
  {
    id: 13,
    name: "Nika Habe",
    role: "Vodnica",
    tags: ["vodnik"],
    description: "Vodnica polna veselja in šal. Na stvari doda pogled iz druge perspektive.",
    image: "/images/vodstvo/NikaHabe.png",
  },
  {
    id: 14,
    name: "Jama",
    role: "Spiritualna vodja",
    tags: ["vodnik"],
    description: "Mistično bitje jama, ki se prebudi vsako leto, da sklene taborniško ljubezen.",
    image: "/images/vodstvo/jama.png",
  },
  {
    id: 15,
    name: "Jaša Farič",
    role: "GG vzgoja",
    tags: ["gg vzgoja"],
    description: "Tabornik, ki je vedno vesel in je vedno na voljo za vsako malenkost.",
    image: "/images/vodstvo/JasaFaric.png",
  },
  {
    id: 16,
    name: "Žan Mežnar",
    role: "GG vzgoja",
    tags: ["gg vzgoja"],
    description: "Vodniški vajenec, ki je tudi zelo priljubljen med mlajšimi.",
    image: "/images/vodstvo/ZanMeznar.png",
  },
  {
    id: 17,
    name: "Filip Karadžič",
    role: "GG vzgoja",
    tags: ["gg vzgoja"],
    description: "Izversten orodjar vedno prinse kar rabiš v rekordnem času.",
    image: "/images/vodstvo/FilipKaradzic.png",
  },
  {
    id: 18,
    name: "Matjaž Petrič Kovačič",
    role: "GG vzgoja",
    tags: ["gg vzgoja"],
    description: "Močn PP kanarček, ki doda k vajbu.",
    image: "/images/vodstvo/MatjazPetricKovacic.png",
  },
  {
    id: 19,
    name: "Ina Zabret",
    role: "PP klub",
    tags: ["pp klub"],
    description: "Tabornica, ki prinaša svežino, ustvarjalnost in burek na tabor.",
    image: "/images/vodstvo/InaZabret.png",
  },
];
