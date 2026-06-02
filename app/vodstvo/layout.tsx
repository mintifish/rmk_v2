import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vodstvo | RMK",
};

export default function VodstvoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}