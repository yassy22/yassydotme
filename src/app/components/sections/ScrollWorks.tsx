"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import works from "../../api/works/works";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cards = track.querySelectorAll<HTMLElement>(".work-card");

    const totalScroll = () => Math.max(0, track.scrollWidth - section.clientWidth);

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
      // Fade in cards on load
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Horizontal scroll pinned
      gsap.to(track, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav="light"
      className="relative overflow-hidden h-[100svh] w-full"
      style={{ backgroundColor: "#FCFAF6" }}
    >
      {/* Section title */}
      <div
        className="absolute top-24 left-10 z-10 uppercase tracking-widest text-[11px] font-bold"
        style={{ color: "#C4572A" }}
      >
        Selected Works
      </div>

      {/* Counter */}
      <div
        className="absolute top-24 right-10 z-10 uppercase tracking-widest text-[11px] font-bold"
        style={{ color: "#101010", opacity: 0.4 }}
      >
        {works.filter(w => !w.hidden).length} Projects
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-8 px-20"
        style={{ width: "max-content" }}
      >
        {works.filter(w => !w.hidden).map((work, index) => (
          <Link key={work.id} href={`/works/${work.slug}`}>
            <div
              className="work-card relative flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{
                width: "clamp(320px, 30vw, 560px)",
                height: "min(60svh, 680px)",
                borderRadius: "12px",
                backgroundColor: "#FCFAF6",
              }}
            >
              {/* Image */}
              <Image
                src={
                  Array.isArray(work.imageHeader)
                    ? work.imageHeader[0]
                    : work.imageHeader
                }
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-100 lg:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                }}
              >
                <p
                  className="text-white uppercase tracking-widest text-[10px] font-bold mb-2"
                  style={{ opacity: 0.7 }}
                >
                  {Array.isArray(work.roles) ? work.roles.join(" · ") : work.roles}

                </p>
                <h3
                  className="text-white font-black uppercase leading-none"
                  style={{
                    fontFamily: "'Arial Black', 'Arial', sans-serif",
                    fontSize: "clamp(22px, 2.5vw, 38px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {work.title}
                </h3>
              </div>

              {/* Index number */}
              <div
                className="absolute top-5 left-5 text-white font-bold text-[11px] tracking-widest"
                style={{ opacity: 0.5 }}
              >
                0{index + 1}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 uppercase tracking-widest text-[10px] font-bold"
        style={{ color: "#101010", opacity: 0.35 }}
      >
        Scroll to explore →
      </div>
    </section>
  );
}
