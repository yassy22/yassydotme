"use client";
import React from "react";
import works from "@/app/api/works/works";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/app/components/sections/Nav";
import { NewYork } from "@/app/fonts/newyork";

function All() {
  return (
    <div style={{ backgroundColor: "#F3F0E9", color: "#101010", minHeight: "100vh" }}>
      <Nav theme="light" />

      <main className="px-6 md:px-16 pt-36 pb-24">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b pb-10"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className={`${NewYork.variable} font-newYork leading-none`}
            style={{
              fontSize: "clamp(48px, 10vw, 130px)",
              color: "#101010",
              fontStyle: "italic",
            }}
          >
            Selected<br />Works
          </h1>
          <p
            className="uppercase tracking-widest text-[11px] font-bold mt-4 md:mt-0"
            style={{ color: "#C4572A" }}
          >
            {works.filter(w => !w.hidden).length} Projects
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {works.filter(w => !w.hidden).map((work, index) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/works/${work.slug}`}>
                <div className="group cursor-pointer">

                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ borderRadius: "10px", aspectRatio: "4/3" }}
                  >
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
                    {/* Index */}
                    <div
                      className="absolute top-4 left-4 text-white font-bold text-[11px] tracking-widest"
                      style={{ opacity: 0.6 }}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-5 flex items-start justify-between">
                    <h2
                      className="font-black uppercase leading-none"
                      style={{
                        fontFamily: "'Arial Black', 'Arial', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 32px)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {work.title}
                    </h2>
                    <p
                      className="uppercase tracking-widest text-[10px] font-bold text-right mt-1"
                      style={{ color: "#101010", opacity: 0.4, maxWidth: "45%" }}
                    >
                      {Array.isArray(work.roles)
                        ? work.roles.join(" · ")
                        : work.roles}
                    </p>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default All;
