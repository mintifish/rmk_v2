"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { historyEvents } from "@/lib/history-data";

gsap.registerPlugin(ScrollTrigger);

// All sizing is done via CSS clamp() in the JSX below.
// GSAP measures the rendered DOM so it automatically matches any screen size.

export function HistoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let st: ReturnType<typeof ScrollTrigger.create> | undefined;
    let tween: gsap.core.Tween | undefined;

    // Defer one frame so CSS clamp() values are fully resolved before measuring
    const rafId = requestAnimationFrame(() => {
      const getTotal = () => Math.max(0, track.scrollWidth - window.innerWidth);

      tween = gsap.to(track, { x: () => -getTotal(), ease: "none" });

      st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getTotal()}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      st?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background will-change-transform"
      style={{ height: "100vh" }}
    >
      {/* Section header */}
      <div className="absolute left-0 z-10 flex flex-col items-center w-full pointer-events-none select-none top-30">
        <h2 className="text-4xl font-extrabold font-heading text-primary md:text-5xl">
          Naša zgodovina
        </h2>
        <p className="max-w-xs px-4 mt-2 text-sm text-center text-primary md:max-w-md">
          Spoznaj kako smo rasli skozi leta, od ustanovitve do danes, in ključne
          dogodke na naši poti.
        </p>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex items-center h-full"
        style={{
          paddingLeft: "clamp(20px, 8vw, 120px)",
          paddingRight: "clamp(60px, 30vw, 500px)",
          gap: "clamp(20px, 4vw, 72px)",
          willChange: "transform",
        }}
      >
        {/* Timeline line — spans exactly from first to last card */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-border"
          style={{
            left: "clamp(20px, 8vw, 120px)",
            right: "clamp(60px, 30vw, 500px)",
          }}
        />

        {historyEvents.map((event, index) => {
          const isAbove = index % 2 === 0;
          return (
            <div
              key={event.id}
              className="relative flex flex-col items-center"
              style={{ width: "min(520px, calc(100vw - 48px))", flexShrink: 0 }}
            >
              {isAbove && (
                <div className="w-full mb-6">
                  <EventCard event={event} />
                </div>
              )}

              {/* Timeline dot + date */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-primary border-[3px] border-background shadow-lg" />
                <span className="mt-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  {event.date}
                </span>
              </div>

              {!isAbove && (
                <div className="w-full mt-6">
                  <EventCard event={event} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll hint — clicking scrolls down to advance the horizontal track */}
      <button
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight * 0.55,
            behavior: "smooth",
          })
        }
        className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full border-2 border-border bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-md cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-200"
      >
        Pomakni desno
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M4 10h12M12 6l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}

function EventCard({ event }: { event: (typeof historyEvents)[number] }) {
  return (
    <div className="overflow-hidden transition-all duration-300 border-2 shadow-2xl border-border bg-card rounded-3xl hover:shadow-3xl hover:-translate-y-1">
      <div className="relative w-full aspect-video">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-extrabold leading-tight font-heading text-[#43302b]">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#665c58]">
          {event.description}
        </p>
      </div>
    </div>
  );
}
