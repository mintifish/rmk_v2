"use client";

import ClickSpark from "@/components/animations/ClickSpark";

export function ClickSparkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark
      sparkColor="oklch(0.3787 0.0427 54.7263)"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}
