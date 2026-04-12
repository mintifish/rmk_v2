import { Map } from "lucide-react";
import { ReactNode } from "react";

type CampAboutItem = {
  title: string;
  description: string;
  child?: ReactNode; // tuki notr bi lahko definiral custom komponento ki bi prikazala npr googleMapsLink, ki ni na voljo pri vsakemu itemu, ampak samo pri "Kam?"
};

export const CampAbout: CampAboutItem[] = [
  {
    title: "Kam?",
    description: "Borst ob Krki pri Čatežu",
    child: (
      <div className="flex items-center gap-2">
        <Map className="text-primary" />
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
    title: "Kdaj?",
    description:
      "Naš tabor ponuja širok spekter aktivnosti, ki vključujejo športne igre, ustvarjalne delavnice, pohodništvo, plavanje in več. Naše aktivnosti so zasnovane tako, da spodbujajo timsko delo, kreativnost in osebni razvoj otrok.",
  },
  {
    title: "Od kod se odpravimo?",
    description:
      "Zberemo se 17. julija ob 7.00 pred osnovno šolo v Radomljah (pri betonskem igrišču).",
  },
  {
    title: "Kdaj in kako se vračamo?",
    description:
      "Ker je tabor za nas poln novih znanj in spominov, smo se letos odločili, da košček njega želimo deliti tudi z vami. Vabimo vas, da se nam v petek 24. 7. 2026 od 12 ure dalje pridružite, si ogledate naš taborni prostor in se okrepčate s pravim taborniškim golažom. Nato pa se skupaj z otroci odpravite domov.",
  },
  {
    title: "Koliko stane?",
    description:
      "200 € za člane Zveze tabornikov Slovenije\n\n250 € za nečlane",
  },
  {
    title: "Rok plačila tabornine",
    description: "10. 7. 2026",
    child:
      "V primeru, da otroka odjavite do 1. 7. 2026 vam vrnemo 100% tabornine\n\nV primeru kasnejše odjave vam vrnemo 75% tabornine.",
  },
];
