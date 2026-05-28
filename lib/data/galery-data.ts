import { ElementType } from "react";
import { MapPin, TentTree} from "lucide-react";

interface activityData {
    name: string;
    description: string;
    image: string;
    icon: ElementType;
    date_of_posting: string;
    view_count?: number;
    link: string;
}


export const galeryData: activityData[] = [
    {
        name: "Alfa Andrej",
        description: "Andrejov tribute za pomoč pri prvi strani.",
        image: "/images/activities/alfa_andrej.jpg",
        icon: MapPin,
        date_of_posting: "2025-06-17",
        link: "/galerija/alfa-andrej",
    },
    {
        name: "Tabor 2024",
        description: "Poletni tabor 2024.",
        image: "/images/activities/tabor_2024.jpg",
        icon: MapPin,
        date_of_posting: "2024-06-15",
        link: "/galerija/tabor-2024",
    },
    {
        name: "Pohod Na Golico", 
        description: "Jutranji pohod na Golico.",
        image: "/images/activities/pohod_na_golico.jpg",
        icon: TentTree,
        date_of_posting: "2026-05-03",
        link: "/galerija/pohod-na-golico",
    },
    {
        name: "Izrezovanje Lesa", 
        description: "Izrezovanje lesa za palice.",
        image: "/images/activities/izrezovanje_lesa.jpg",
        icon: TentTree,
        date_of_posting: "2025-06-25",
        link: "/galerija/izrezovanje-lesa",
    },
];


