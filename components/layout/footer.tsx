const socials_links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/rodmlinskihkamnov/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rmkradomlje/",
  },
];

const contact_links = [
  {
    name: "Email",
    href: "mailto:rmkrad@gmail.com",
  },
  {
    name: "Telefon",
    href: "tel:+38670366357",
  },
];

export function Footer() {
  return (
    <div className="flex flex-col w-full">
      <img src="/art/footer-transition-image.jpg" alt="footer-transition-image" />
      <footer className="bg-primary">
        <div className="flex flex-col items-start justify-between w-full gap-8 p-4 px-4 pb-5 mx-auto md:flex-row md:px-20">
          <div className="flex flex-col items-start w-full gap-4 md:w-auto">
            <h3 className="text-xl font-black text-left text-white md:text-2xl font-heading">
              Rod Mlinskih Kamnov
            </h3>
            <p className="max-w-sm text-base text-left text-white md:text-sm">
              Rod Mlinskih Kamnov je neprofitna organizacija, ki deluje na
              prostovoljni osnovi. Naše delovanje je odvisno od podpore naših
              članov, donatorjev in sponzorjev. Hvala, ker ste del naše
              skupnosti!
            </p>
          </div>
          <div className="flex flex-col items-start w-full gap-4 md:w-auto">
            <h3 className="text-xl font-black text-left text-white md:text-2xl font-heading">
              Kontakt:
            </h3>
            {contact_links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base text-left text-white transition-colors hover:underline md:text-sm"
              >
                {link.name}: {link.href.replace(/^(mailto:|tel:)/, "")}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start w-full gap-4 md:w-auto">
            <h3 className="text-xl font-black text-left text-white md:text-2xl font-heading">
              Sledi nam:
            </h3>
            {socials_links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-left text-white transition-colors hover:text-white/90 hover:underline md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-start justify-start h-full px-4 pb-5 md:px-0">
          <p className="text-base md:text-sm text-[#ffe8b0] text-center w-full">
            &copy; {new Date().getFullYear()} Rod Mlinskih Kamnov. Vse pravice pridržane. Avtor: Tian Hrovat
          </p>
        </div>
      </footer>
    </div>
  );
}
