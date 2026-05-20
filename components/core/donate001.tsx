"use client";
import Magnet from "@/components/Magnet";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export function Donate001() {
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const check = () => {
      const isMouse = window.matchMedia("(pointer: fine)").matches;
      setIsMagnetic(isMouse);
    };
    check();
    window.matchMedia("(pointer: fine)").addEventListener("change", check);
    return () => {
      window.matchMedia("(pointer: fine)").removeEventListener("change", check);
    };
  }, []);

  return (
    <div>
      <Dialog>
        {isMagnetic ? (
          <Magnet
            padding={300}
            magnetStrength={1}
            activeTransition="transform 0.5s ease-out"
            inactiveTransition="transform 1s ease-in-out"
          >
            <DialogTrigger asChild>
              <button className="px-8 py-3 text-base font-semibold text-white transition-colors bg-transparent border-2 rounded cursor-pointer border-white/70 hover:bg-white/10 hover:border-white">
                Doniraj 1%
              </button>
            </DialogTrigger>
          </Magnet>
        ) : (
          <DialogTrigger asChild>
            <button className="px-8 py-3 text-base font-semibold text-white transition-colors bg-transparent border-2 rounded cursor-pointer border-white/70 hover:bg-white/10 hover:border-white">
              Doniraj 1%
            </button>
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hvala!</DialogTitle>
            <DialogDescription>
              Hvala za vašo podporo! Vaša donacija pomaga Rod Mlinskih Kamnov
              pri nadaljnjem delovanju.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
