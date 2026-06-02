import { ReactNode } from "react";

type Leader = {
  title: string;
  description: string;
  email: string;
  telefon: string;
};

export const LeaderData: Leader = {
  title: "Načelnik",
  description: "Filip Jakob Špendl",
  email: "rmkrad@gmail.com",
  telefon: "+386 70 366 357",
};

type contactDataItem = {
  title: string;
  description: string;
  icon: string;
  child?: ReactNode;
};

export const contactData: contactDataItem[] = [
  {
    title: "Lokacija",
    description: "Prešernova cesta 43, 1235 Radomlje",
    icon: "MapPin",
    child: (
      // @ts-ignore: JSX only valid in .tsx files
      <div className="flex items-center gap-2">
        <a
          href="https://www.google.com/maps/place/Cultural+Center+Radomlje/@46.1774575,14.610691,422m/data=!3m1!1e3!4m6!3m5!1s0x476535958de56387:0x327251761c63d811!8m2!3d46.177166!4d14.6105618!16s%2Fg%2F11xbqy7yq?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Odpri lokacijo na Google Maps
        </a>
      </div>
    ),
  },
  {
    title: "Davčna številka",
    description: "27905446",
    icon: "IdCard",
  },
  {
    title: "TRR",
    description: "SI56 0201 2000 1234 567 (NLB d.d.)",
    icon: "Banknote",
  },
];