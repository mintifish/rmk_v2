"use client";

import { useEffect, useState } from "react";
import { MoreAboutCampDialog } from "./more-about-camp-dialog";

export function CampCountdown() {
  const [timeLeft, setTimeLeft] = useState<
    ReturnType<typeof getTimeLeft> | undefined
  >(undefined);

  function getTimeLeft() {
    const targetDate = new Date("2026-07-17T07:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === undefined) {
    return null;
  }

  if (!timeLeft) {
    return (
      <p className="text-lg font-semibold text-slate-700">Tabor se je začel!</p>
    );
  }

  const units = [
    { label: "Dni", value: timeLeft.days },
    { label: "Ur", value: timeLeft.hours },
    { label: "Minut", value: timeLeft.minutes, hideOnSm: true },
    { label: "Sekund", value: timeLeft.seconds, hideOnSm: true },
  ];

  return (
    <div
      className="mx-auto flex w-full max-w-[70rem] flex-col items-center justify-between gap-10 rounded-3xl px-6 py-10 md:flex-row lg:px-12 lg:py-12 border-2 border-border bg-background shadow-2xl hover:shadow-3xl transition-shadow duration-300"
    >
      {/* Left side text and buttons */}
      <div className="flex flex-col items-start w-full text-left md:w-1/2 md:pr-6">
        <div className="mb-6 inline-flex items-center rounded-full border-2 border-border bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          17. – 24. julij 2026
        </div>

        <h2 className="font-heading text-4xl font-extrabold text-[#43302b] sm:text-5xl lg:text-6xl">
          Tabor 2026
        </h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#665c58] sm:text-base lg:text-lg">
          Teden v naravi, novih prijateljstvih in taborniških dogodivščinah.
          Do odhoda nas loči še:
        </p>

        <div className="flex flex-col items-start w-full mt-8 gap-4 sm:flex-row sm:items-center lg:gap-5">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScODt6gOeX2P2NfuxawZQ_QiUEmpoUItighomgHuo2lFUEzJA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl px-6 sm:w-auto bg-primary text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 text-sm font-bold uppercase tracking-wider"
          >
            Prijavi se
          </a>

          <MoreAboutCampDialog />
        </div>
      </div>

      {/* Right side timer */}
      <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 md:w-1/2 lg:gap-5">
        {units.map((unit) => {
          const hideClass = unit.hideOnSm ? "hidden sm:flex" : "flex";
          return (
            <div
              key={unit.label}
              className={`${hideClass} flex-col items-center justify-center rounded-[1.25rem] p-6 lg:p-7 border-2 border-border bg-card transition-transform hover:-translate-y-1`}
            >
              <div className="text-5xl font-extrabold tracking-tight tabular-nums text-card-foreground sm:text-4xl lg:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="mt-3 text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground sm:text-[0.65rem] lg:text-[0.75rem]">
                {unit.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
