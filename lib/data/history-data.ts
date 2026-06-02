export type HistoryEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
  description_second_block?: string;
  image: string;
};

export const historyEvents: HistoryEvent[] = [
  {
    id: 1,
    date: "Konec 19. stoletja",
    title: "Začetek skavtskega gibanja",
    description:
      "Za začetek taborniškega gibanja sta zaslužna Robert Baden-Powell in Ernest Thompson Seton. Sprva sta se razvijali dve ločeni gibanji. V Ameriki se je s pomočjo znanja ameriških staroselcev razvijalo gozdovništvo, v Angliji pa skavtsko gibanje, ki je temeljilo na znanju, ki ga je Baden-Powell pridobil v vojski, kjer je deloval kot izvidnik.",
    image: "/images/history/filip.jpg",
  },
  {
    id: 2,
    date: "20. leta 20. stoletja",
    title: "Začetek taborniškegav Sloveniji",
    description: "Taborništvo se pri nas pojavi v začetku 20. let 20. stoletja. Takrat se je pri nas pojavila ideja o gozdovništvu in bile so ustanovljene prve skavtske skupine.",
    image: "/images/history/ogenj.jpg",
  },
  {
    id: 3,
    date: "leto 1951",
    title: "Taborništvo na slovenskem",
    description: "Zveza tabornikov Slovenije,  je prostovoljna mladinska organizacija, ki med seboj povezuje vse slovenske tabornike in je tudi največja slovenska mladinska organizacija. V približno 100 enotah (rodovih in četah) združuje prek 10 000 članov. Neprekinjeno deluje od leta 1951, ko je bila ustanovljena na sedežu Univerze v Ljubljani.",
    description_second_block: "GRB – 3 smreke predstavljajo najvišjo slovensko goro,  Triglav, in slovenske gozdove, v katerih taborniki najraje taborimo in ustvarjamo nepozabne spomine. Smreke so pobarvane z modro barvo, ki predstavlja vodo-reke, jezera, morja. Pred smrekami stojita tipi, šotor, ki predstavlja taborjenje in ogenj s 3 plameni, ki predstavljajo 3 MČ zakone in 4 poleni, ker 3×4=12 in imamo 12 taborniških zakonov.",
    image: "/images/history/filip.jpg",
  },
  {
    id: 4,
    date: "leto 1953",
    title: "Taborništvo v Domžalah",
    description: "V naši okolici so se taborniki najprej pojavili v Domžalah. Uradno so bili ustanovljeni 6. decembra 1953, kot 25. taborniška enota v Združenju tabornikov Slovenije. Pobudniki za ustanovitev so bili predvojni skavti, vodstvo pa je v njenih začetkih prevzel Anton Bukovec, profesor na nižji gimnaziji v Domžalah. Prvi tabor je bil organiziran naslednje leto, l. 1954, v Kamniški Bistrici",
    image: "/images/history/ogenj.jpg",
  },
  {
    id: 5,
    date: "leto 1975",
    title: "Taborništvo v Radomljah",
    description: "Prvi začetki taborništva v Radomljah segajo v jesen l. 1975. S pomočjo tovariša Janeza Cerarja se je na šoli osnovala prva četa, ki je štela dva voda. Delo je sprva steklo; taborniki so se dobivali na tedenskih sestankih in organizirali nekaj izletov.  Sčasoma pa je delo počasi pešalo, dokler ni za nekaj časa popolnoma zamrlo. Leta 1976 je zanimanje za taborništvo med učenci še vedno živelo, zato je bilo treba poiskati mentorja. Najbolj zainteresirani taborniki so se udeležili vodniškega tečaja na Veliki planini, za mentorstvo pa se je odločila Janka Jerman. Tako je taborništvo prvič zaživelo tudi v našem kraju, sprva pod okrilje domžalskega rodu.",
    image: "/images/history/filip.jpg",
  },
  {
    id: 6,
    date: "leto 1981",
    title: "Osamosvojitev odreda",
    description: "priprave na ustanovitev odreda (zdajšnjega rodu) so začele potekati v septembru leta 1981. Med učence osnovne šole v Radomljah je bil takrat razpisan razpis za ime in emblem odreda. Delo je steklo in ob pomoči krajanov in v sodelovanju z domžalskimi in mengšanskimi taborniki nam je cilj uspelo doseči. 24. 12. 1981 je v Kulturnem domu v Radomljah potekala ustanovna konferenca. Izbrano je bilo ime odreda in izvoljena uprava, nadzorni odbor in svet odreda. Kot prva starešina našega odreda je bila izbrana Janka Jerman, naziv prvega načelnika pa pripada Mitju Hafnerju. ",
    image: "/images/history/ogenj.jpg",
  },
];
