"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import works from "../../api/works/works";

type Work = (typeof works)[number];

function WorkCard({
  work,
  index,
  total,
  scrollYProgress,
}: {
  work: Work;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const fadeSpan = segment * 0.25;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    scrollYProgress,
    [
      start,
      isFirst ? start : start + fadeSpan,
      isLast ? end : end - fadeSpan,
      end,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      start,
      isFirst ? start : start + fadeSpan,
      isLast ? end : end - fadeSpan,
      end,
    ],
    [isFirst ? 1 : 0.94, 1, 1, isLast ? 1 : 0.94]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex flex-col justify-center px-5"
    >
      <Link href={`/works/${work.slug}`} className="cursor-pointer">
        <div
          className="relative w-full overflow-hidden"
          style={{ borderRadius: "10px", aspectRatio: "4/3" }}
        >
          <Image
            fill
            src={
              Array.isArray(work.imageHeader)
                ? work.imageHeader[0]
                : work.imageHeader
            }
            alt={work.title}
            className="object-cover"
            unoptimized
          />
          <div
            className="absolute top-4 left-4 text-white font-bold text-[11px] tracking-widest"
            style={{ opacity: 0.6 }}
          >
            0{index + 1}
          </div>
        </div>

        <div className="pt-4 flex justify-between items-start">
          <h3
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              fontSize: "clamp(18px, 5vw, 28px)",
              letterSpacing: "-0.02em",
              color: "#101010",
            }}
          >
            {work.title}
          </h3>
          <p
            className="uppercase tracking-widest text-[10px] font-bold text-right mt-1"
            style={{ color: "#101010", opacity: 0.45, maxWidth: "45%" }}
          >
            {Array.isArray(work.roles) ? work.roles.join(" · ") : work.roles}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorksMobile() {
  const visibleWorks = works.filter((w) => !w.hidden);
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={wrapperRef}
      className="w-full"
      style={{ height: `${visibleWorks.length * 100}svh` }}
    >
      <div
        className="sticky top-0 w-full h-[100svh] overflow-hidden"
        style={{ backgroundColor: "#F3F0E9" }}
      >
        {/* Header */}
        <div className="absolute top-8 left-5 right-5 flex justify-between items-center z-10">
          <span
            className="uppercase tracking-widest text-[11px] font-bold"
            style={{ color: "#C4572A" }}
          >
            Selected Works
          </span>
          <span
            className="uppercase tracking-widest text-[11px] font-bold"
            style={{ color: "#101010", opacity: 0.4 }}
          >
            {visibleWorks.length} Projects
          </span>
        </div>

        {visibleWorks.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            index={index}
            total={visibleWorks.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
