import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donacije | RMK",
};

export default function DonacijeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
