export function Footer() {
    return (
        <footer className="bg-primary">
            <div className="container flex flex-col items-start justify-between gap-4 py-20 px-20 mx-auto md:flex-row">
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <h3 className="text-2xl font-black text-left text-black text-white font-heading">
                        Rod Mlinskih Kamnov
                    </h3>
            <p className="text-sm text-left text-white text max-w-sm">
              Rod Mlinskih Kamnov je neprofitna organizacija, ki deluje na{" "}
              prostovoljni osnovi. Naše delovanje je odvisno od podpore naših{" "}
              članov, donatorjev in sponzorjev. Hvala, ker ste del naše
              skupnosti!
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-2xl font-black text-left text-black text-white font-heading">
              Kontakt:
            </h3>
            <a
              href="mailto:rmkrad@gmail.com"
              className="text-white transition-colors hover:underline"
            >
              Email: rmkrad@gmail.com
            </a>
            <a
              href="tel:+38670366357"
              className="text-white transition-colors hover:underline"
            >
              Telefon: +386 70 366 357
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-2xl font-black text-left text-black text-white font-heading">
              Sledi nam:
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/rodmlinskihkamnov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-white/90 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/rmkradomlje/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-white/90 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full pb-5">
          <p className="text-sm text-[#ffe8b0] text-center">
            &copy; {new Date().getFullYear()} Rod Mlinskih Kamnov. Vse pravice
            pridržane.
          </p>
        </div>
    </footer>
  );
}