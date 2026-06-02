import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas | RMK",
};

export default function ONasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
