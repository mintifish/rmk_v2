import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rod Mlinskih Kamnov",
  description: "Dobrodošli v Rod mlinskih kamnov. Pridružite se, prijavite na aktivnosti in izveste več o taborništvu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body suppressHydrationWarning className="flex flex-col min-h-screen overflow-x-hidden bg-background">
        <Nav />
        {children}
      </body>
    </html>
  );
}
