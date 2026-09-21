"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import works from "../../api/works/works";

export default function WorksMobile() {
  return (
    <section
      className="w-full px-5 pt-24 pb-20"
      style={{ backgroundColor: "#FCFAF6" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
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
          {works.length} Projects
        </span>
      </div>

      {/* Works list */}
      <div className="flex flex-col gap-10">
        {works.filter(w => !w.hidden).map((work, index) => (
          <Link href={`/works/${work.slug}`} key={work.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="cursor-pointer"
            >
              {/* Image */}
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
                {/* Index */}
                <div
                  className="absolute top-4 left-4 text-white font-bold text-[11px] tracking-widest"
                  style={{ opacity: 0.6 }}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Info */}
              <div className="pt-4">
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
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
