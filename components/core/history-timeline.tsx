"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { historyEvents } from "@/lib/history-data";

gsap.registerPlugin(ScrollTrigger);

export function HistoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ReturnType<typeof ScrollTrigger.create> | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let tween: gsap.core.Tween | undefined;

    // Defer one frame so CSS clamp() values are fully resolved before measuring
    const rafId = requestAnimationFrame(() => {
      const getTotal = () => Math.max(0, track.scrollWidth - window.innerWidth);

      tween = gsap.to(track, { x: () => -getTotal(), ease: "none" });

      stRef.current = ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
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
      stRef.current?.kill();
      stRef.current = null;
      tween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background"
      style={{ height: "85vh" }}
    >
      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex h-full"
        style={{ willChange: "transform" }}
      >
        {/*change background color if the idex is eaven or odd*/}
        {historyEvents.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex flex-col md:flex-row pt-20 md:items-stretch shrink-0 ${index % 2 === 0 ? "bg-background" : "bg-border"}`}
            style={{ width: "100vw", height: "85vh" }}
          >
            {/* Text */}
            <div className="relative flex flex-col w-full md:w-[45%] px-6 pt-28 pb-3 md:px-[clamp(28px,5vw,80px)] md:pt-[clamp(100px,14vh,160px)] md:pb-[clamp(28px,5vw,80px)]">
              {/* Date — top-right corner on sm, inline on md+ */}
              <span className="absolute text-lg font-bold tracking-widest uppercase top-24 right-4 md:static md:mb-3 text-muted-foreground">
                {event.date}
              </span>
              <h3
                className="mb-4 font-extrabold leading-tight font-heading text-primary"
                style={{ fontSize: "clamp(22px, 2.8vw, 44px)" }}
              >
                {event.title}
              </h3>
              <div
                className={
                  event.description_second_block
                    ? "grid grid-cols-2 gap-4 w-full"
                    : "w-full"
                }
              >
                <p
                  className="leading-relaxed text-gray-700"
                  style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
                >
                  {event.description}
                </p>
                {event.description_second_block && (
                  <p
                    className="leading-relaxed text-gray-700"
                    style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
                  >
                    {event.description_second_block}
                  </p>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 min-h-0 w-full px-4 pb-6 md:flex-none md:w-[55%] md:pt-[clamp(32px,7vh,90px)] md:pb-[clamp(32px,7vh,90px)] md:pl-[clamp(8px,1.5vw,20px)] md:pr-[clamp(16px,3vw,48px)]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  unoptimized={event.id === 1}
                  style={{ imageOrientation: "none" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight * 0.55,
            behavior: "smooth",
          })
        }
        className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-md cursor-pointer hover:bg-primary-foreground hover:text-primary hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-200"
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
