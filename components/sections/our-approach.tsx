import { ourApproach } from "@/lib/data/our-approach";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Compass,
  Users,
  Sprout,
  HeartHandshake,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

export const OurApproach = () => {
  return (
    <section className="flex flex-colx min-h-screen/2 lg:flex-row items-center gap-8 pb-12 pt-20 px-6 md:px-[clamp(28px,5vw,80px)]">
      <div className="flex flex-col items-start w-full gap-4 lg:flex-row lg:gap-32">
        <div className="flex flex-col gap-6 shrink-0 lg:w-1/4">
          <h2 className="text-3xl font-extrabold text-left font-heading text-primary md:text-4xl lg:text-6xl md:leading-none">
            Naš pristop
          </h2>
          <div className="hidden md:flex">
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <Compass className="w-6 h-6 text-primary" />
                Učenje iz izkušenj
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <Users className="w-6 h-6 text-primary" />
                Majhne skupine
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <HandHeart className="w-6 h-6 text-primary" />
                Prostovoljstvo
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <HeartHandshake className="w-6 h-6 text-primary" />
                Medsebojno spoštovanje
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <Sprout className="w-6 h-6 text-primary" />
                Osebna rast
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 w-full min-w-0">
          <h1 className="">
            <span className="block pt-4 text-base leading-relaxed text-left">
              Vzgoja in učenje pri tabornikih poteka nekoliko drugače kot smo
              navajeni iz šolskih klopi. Taborniki namreč uporabljamo taborniški
              pristop. To pomeni, da znanje in spretnosti pridobivamo skozi
              izkušnje, v varnem okolju majhnih skupin. V skupinah so enako
              stari taborniki, vodijo jih vodniki – mladi, a izkušeni
              prostovoljci, ob podpori odraslih tabornikov. Podlago za učenje in
              vzgojo nam nudi Program za mlade (PZM), ki je enoten vsem
              tabornikom. Njegova ključna komponenta je, da nam omogoča da ob
              skupnih ciljih, sledimo svojim lastnim interesom in ob tem osebno
              rastemo.
            </span>
          </h1>
          <div className="w-full pb-5 mt-8">
            <Carousel
              className="relative w-full"
              opts={{ loop: true, align: "start" }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            >
              <CarouselContent className="py-6">
                {ourApproach.map((item) => (
                  <CarouselItem
                    key={item.title}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex flex-col h-full p-6 transition-all duration-300 bg-white border shadow-lg min-h-64 rounded-2xl border-border hover:shadow-xl hover:-translate-y-1 dark:bg-card">
                      <h3 className="mb-3 text-xl font-bold md:text-2xl text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
