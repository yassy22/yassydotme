"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StudioPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/Brussels",
        }) + " GMT+2",
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: "#e8e4dc", color: "#0a0a0a" }}
    >
      {/* Top bar */}
      {/* <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-5 z-50 text-[11px] uppercase tracking-widest">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block" />
            GHENT, BE
          </span>
          <span>{time}</span>
          <span className="hidden md:inline">51.0543° N, 3.7174°</span>
        </div>
        <ul className="hidden sm:flex gap-8 text-[11px]">
          <li>
            <Link href="/" className="hover:opacity-50 transition-opacity">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/all" className="hover:opacity-50 transition-opacity">
              WORKS
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              ABOUT
            </Link>
          </li>
        </ul>
      </div> */}

      {/* Main content */}
      <div className="flex flex-col justify-center min-h-screen px-4">
        {/* Giant name */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="uppercase leading-none font-black"
            style={{
              fontSize: "clamp(38px, 13vw, 200px)",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
            }}
          >
            YASMINE
          </h1>
          <h1
            className="uppercase leading-none font-black"
            style={{
              fontSize: "clamp(38px, 13vw, 200px)",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
            }}
          >
            YAHYEADEN
          </h1>
        </motion.div>

        {/* Middle row: A VISUAL | card | DESIGNER */}
        <div className="flex items-center justify-between mt-4 md:mt-6 gap-4">
          <motion.span
            className="uppercase font-black leading-none flex-shrink-0"
            style={{
              fontSize: "clamp(24px, 7.5vw, 130px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A VISUAL
          </motion.span>

          {/* Floating card */}
          <motion.div
            className="flex-shrink-0 bg-white shadow-xl overflow-hidden"
            style={{ width: "clamp(220px, 20vw, 340px)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="flex justify-between items-start px-4 pt-4 text-[10px] uppercase tracking-widest text-black">
              <span>UX / Motion Design</span>
              <span>2026</span>
            </div>

            <div className="overflow-hidden px-4 py-2">
              <p className="text-[9px] text-gray-400 whitespace-nowrap">
                design lover · motion · creative · portfolio · Howest ·
                interaction · visual · design lover · motion · creative ·
              </p>
            </div>

            <div className="mx-4 mb-3 bg-black text-white p-5">
              <p className="text-[22px] font-bold lowercase leading-tight">
                yasmine
                <br />
                yahyeaden
              </p>
            </div>

            <div className="flex justify-between px-4 pb-4 text-[9px] text-black leading-relaxed">
              <div>
                <p>yasmineyahyeaden.be</p>
                <p>yasmine@example.com</p>
              </div>
              <div className="text-right text-gray-400">
                <p>Howest</p>
                <p>UX Design</p>
                <p>Kortrijk</p>
              </div>
            </div>
          </motion.div>

          <motion.span
            className="uppercase font-black leading-none flex-shrink-0"
            style={{
              fontSize: "clamp(24px, 7.5vw, 130px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            DESIGNER
          </motion.span>
        </div>
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest">
        SCROLL DOWN
      </div>
    </div>
  );
}
