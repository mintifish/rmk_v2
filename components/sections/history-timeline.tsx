"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { historyEvents } from "@/lib/data/history-data";

gsap.registerPlugin(ScrollTrigger);

export function HistoryTimeline() {
  const [activeId, setActiveId] = useState(historyEvents[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const active = historyEvents.find((e) => e.id === activeId)!;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const count = historyEvents.length;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 10%",
      end: () => `+=${window.innerHeight * (count - 1)}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * count),
          count - 1
        );
        setActiveId(historyEvents[index].id);
      },
    });

    stRef.current = st;

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden py-16 px-6 md:px-[clamp(28px,5vw,80px)]"
    >
      <div className="flex flex-col h-full gap-12 lg:flex-row lg:gap-16">

        {/* Left: vertical event selector */}
        <div className="hidden lg:flex flex-col lg:w-[40%] shrink-0">
          {historyEvents.map((event) => {
            const isActive = event.id === activeId;
            return (
              <button
                key={event.id}
                onClick={() => {
                  const st = stRef.current;
                  if (!st) return;
                  const index = historyEvents.findIndex((e) => e.id === event.id);
                  const count = historyEvents.length;
                  const targetScroll = st.start + ((index + 0.5) / count) * (st.end - st.start);
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}
                className={`text-left flex items-center gap-3 py-1 transition-all duration-200 cursor-pointer text-primary font-extrabold ${
                  isActive
                    ? "opacity-100 scale-105"
                    : "opacity-25 hover:opacity-50"
                }`}
                style={{ fontSize: "clamp(20px, 2.8vw, 42px)" }}
              >
                {isActive && (
                  <span aria-hidden className="shrink-0 hidden lg:inline">→</span>
                )}
                <span className={isActive ? "" : "lg:pl-[1.6em]"}>{event.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right: active event detail */}
        <div className="flex flex-col gap-6 flex-1 min-w-0 p-5 pb-20 overflow-hidden">
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
            {active.date}
          </span>
          <h3
            className="font-extrabold leading-tight font-heading text-primary"
            style={{ fontSize: "clamp(22px, 2.8vw, 44px)" }}
          >
            {active.title}
          </h3>
          <div
            className={
              active.description_second_block
                ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                : ""
            }
          >
            <p
              className="leading-relaxed text-gray-700"
              style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
            >
              {active.description}
            </p>
            {active.description_second_block && (
              <p
                className="leading-relaxed text-gray-700"
                style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
              >
                {active.description_second_block}
              </p>
            )}
          </div>
          <div className="relative flex-1 w-full max-h-full min-h-0 overflow-hidden rounded-2xl">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              unoptimized={active.id === 1}
              style={{ imageOrientation: "none" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
