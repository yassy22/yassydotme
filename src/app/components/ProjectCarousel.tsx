"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import works from "../api/works/works";
import { ArrowUpRight } from "lucide-react";

const visibleProjects = works.filter((w) => !w.hidden);

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + visibleProjects.length) % visibleProjects.length);
  const next = () =>
    setCurrent((c) => (c + 1) % visibleProjects.length);

  // Show 3 cards: previous (partial), current (full), next (partial)
  const getIndex = (offset: number) =>
    (current + offset + visibleProjects.length) % visibleProjects.length;

  return (
    <section
      data-nav="light"
      className="w-full overflow-hidden pb-20"
      style={{ backgroundColor: "#F3F0E9" }}
    >
      {/* Section label */}
      <div className="flex items-center justify-between px-6 md:px-16 pt-8 pb-10">
        <span
          className="uppercase font-bold tracking-widest text-[11px]"
          style={{ color: "#101010", opacity: 0.4 }}
        >
          Recent Work
        </span>
        <Link
          href="/all"
          className="inline-flex items-center gap-1 uppercase font-bold tracking-widest text-[11px] hover:opacity-50 transition-opacity"
          style={{ color: "#101010" }}
        >
          View all <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* Carousel track */}
      <div className="relative flex items-stretch gap-4 px-6 md:px-16">
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ backgroundColor: "#101010", color: "#F3F0E9" }}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Cards */}
        <div className="flex gap-4 w-full">
          {[-1, 0, 1, 2].map((offset) => {
            const project = visibleProjects[getIndex(offset)];
            const isActive = offset === 0 || offset === 1;

            return (
              <AnimatePresence key={project.id} mode="popLayout">
                <motion.div
                  layout
                  className="relative overflow-hidden rounded-2xl flex-shrink-0"
                  style={{
                    width: offset === -1 || offset === 2 ? "10%" : "40%",
                    aspectRatio: "3/4",
                    opacity: offset === -1 || offset === 2 ? 0.4 : 1,
                    transition: "width 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s",
                  }}
                >
                  <Image
                    src={project.imageHeader[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  {/* Overlay on active cards */}
                  {isActive && (
                    <Link href={`/works/${project.slug}`}>
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "linear-gradient(to top, rgba(16,16,16,0.7) 0%, transparent 50%)" }}
                      >
                        <p
                          className="font-black uppercase text-[13px] tracking-widest"
                          style={{ color: "#F3F0E9" }}
                        >
                          {project.title}
                        </p>
                        <p
                          className="text-[11px] mt-1 uppercase tracking-widest"
                          style={{ color: "#F3F0E9", opacity: 0.6 }}
                        >
                          {project.roles[0]}
                        </p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ backgroundColor: "#101010", color: "#F3F0E9" }}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {visibleProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              backgroundColor: "#101010",
              opacity: i === current ? 1 : 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
