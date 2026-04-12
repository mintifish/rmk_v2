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
    description: "Pelechova c. 83, 1235 Radomlje",
    icon: "MapPin",
    child: (
      // @ts-ignore: JSX only valid in .tsx files
      <div className="flex items-center gap-2">
        <a
          href="https://www.google.com/maps/place/Borst+ob+Krki/@45.9425,15.3875,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d9c8e7a9e7f:0x2c8b8c8b8c8b8c8!8m2!3d45.9425!4d15.3875!16s%2Fg%2F11c1z_9v6k?entry=ttu"
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