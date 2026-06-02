import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

const directionClass = {
  left: "slide-in-from-left",
  right: "slide-in-from-right",
  up: "slide-in-from-bottom",
  down: "slide-in-from-top",
} as const;

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className,
}: SlideInProps) {
  return (
    <div
      className={cn("animate-in fade-in duration-700", directionClass[direction], className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
