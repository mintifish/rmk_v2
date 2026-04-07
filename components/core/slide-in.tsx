"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

const directionVariants = {
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  up: { y: -50, opacity: 0 },
  down: { y: 50, opacity: 0 },
  center: { x: 0, y: 0, opacity: 1 },
};

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SlideInProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={directionVariants[direction]}
        animate={directionVariants.center}
        exit={directionVariants[direction]}
        transition={{ duration: 0.6, delay }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
