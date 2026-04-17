"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatedDropdown,
  AnimatedDropdownContent,
  AnimatedDropdownItem,
  AnimatedDropdownTrigger,
} from "@/components/core/animated-dropdown";
import { ChevronDown,ChevronRight} from "lucide-react";
import { useRef, useState } from "react";

export function NavDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <AnimatedDropdown open={open} onOpenChange={() => {}} modal={false}>
        <AnimatedDropdownTrigger asChild>
          <Button
            size="lg"
            variant="default"
            className="px-6 py-6 text-base font-semibold shadow-sm shrink-0 bg-primary text-primary-foreground hover:translate-y-0 data-[state=open]:bg-primary/90"
            onClick={(e) => e.preventDefault()}
          >
            Prijavnice {open ? <ChevronRight className="w-4 h-4 ml-2" /> : < ChevronDown className="w-4 h-4 ml-2" />}
          </Button>
        </AnimatedDropdownTrigger>
        <AnimatedDropdownContent
          align="end"
          sideOffset={8}
          className="w-48"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <AnimatedDropdownItem index={0} asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScODt6gOeX2P2NfuxawZQ_QiUEmpoUItighomgHuo2lFUEzJA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Tabor 2026
            </a>
          </AnimatedDropdownItem>
          <AnimatedDropdownItem index={1} asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3NMU1upHra_xegDxzyFZ7cdY-6tbGS9X3Qdwep16YRS0_nA/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Pristopna izjava 25/26
            </a>
          </AnimatedDropdownItem>
        </AnimatedDropdownContent>
      </AnimatedDropdown>
    </div>
  );
}
