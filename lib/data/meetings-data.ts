export type MeetingEntry = {
  title: string;
  vodnik: string;
  cas: string;
  grade: number;
  classroom: string;
  phone: string;
  stripes : [string, string];
};

export const meetingsData: MeetingEntry[] = [
  {
    title: "Drugi razredi",
    vodnik: "Neža Habe",
    cas: "torek, 16.00 - 17.00",
    grade: 2,
    classroom: "Ni še določen",
    phone: "030-732-991",
    stripes: ["--rutka-red","--rutka-yellow"],
  },
  {
    title: "Tretji razredi",
    vodnik: "Ana Pšeničnik",
    cas: "četrtek, 15.00 - 16.00",
    grade: 3,
    classroom: "Ni še določen",
    phone: "069-604-303",
    stripes: ["--rutka-red","--rutka-yellow"],
  },
  {
    title: "Četrti razredi",
    vodnik: "Ana Bešter",
    cas: "ponedeljek, 16.15 - 17.15",
    grade: 4,
    classroom: "Ni še določen",
    phone: "068-687-115",
    stripes: ["--rutka-red","--rutka-yellow"],
  },
  {
    title: "Peti razredi",
    vodnik: "Žana Habe",
    cas: "ponedeljek, 15.00 - 16.00",
    grade: 5,
    classroom: "Ni še določen",
    phone: "030-744-230",
    stripes: ["--rutka-red","--rutka-yellow"],
  },
  {
    title: "Šesti razredi",
    vodnik: "Maša Kopitar",
    cas: "četrtek, 16.00 - 17.00",
    grade: 6,
    classroom: "Ni še določen",
    phone: "051-217-337",
    stripes: ["--rutka-green","--rutka-yellow"],
  },
  {
    title: "Sedmi razredi",
    vodnik: "Živa Habe",
    cas: "torek, 16.00 - 17.00",
    grade: 7,
    classroom: "Ni še določen",
    phone: "030-669-031",
    stripes: ["--rutka-green","--rutka-yellow"],
  },
  {
    title: "Osmi razredi",
    vodnik: "Andrej Sušnik",
    cas: "četrtek, 16.00 - 17.00",
    grade: 8,
    classroom: "Ni še določen",
    phone: "051-755-118",
    stripes: ["--rutka-green","--rutka-yellow"],
  },
  {
    title: "Deveti razredi",
    vodnik: "Filip Jakob Špendl",
    cas: "petek, 15.00 - 16.00",
    grade: 9,
    classroom: "Ni še določen",
    phone: "070-366-357",
    stripes: ["--rutka-blue","--rutka-yellow"],
  },
];
