import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija | RMK",
};

export default function GalerijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
