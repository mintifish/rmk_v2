"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" variant="default" className="shrink-0 bg-[#5e1c0b] px-6 py-6 text-base font-semibold text-white shadow-sm hover:bg-[#703c14]">
          Prijavnice <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScODt6gOeX2P2NfuxawZQ_QiUEmpoUItighomgHuo2lFUEzJA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="cursor-pointer">
            Tabor 2026
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3NMU1upHra_xegDxzyFZ7cdY-6tbGS9X3Qdwep16YRS0_nA/viewform?usp=header" target="_blank" rel="noreferrer" className="cursor-pointer">
            Pristopna izjava 25/26
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
