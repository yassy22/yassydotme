"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StudioPage() {
  const [time, setTime] = useState("");
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], ["0vw", "12vw"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["0vw", "-12vw"]);

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
      ref={wrapperRef}
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "#e8e4dc", color: "#0a0a0a" }}
    >
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

        {/* Middle row: A VISUAL | video | DESIGNER */}
        <div className="relative flex items-center justify-center mt-4 md:mt-6">
          <motion.span
            className="absolute left-4 uppercase font-black leading-none"
            style={{
              fontSize: "clamp(14px, 3.2vw, 58px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              x: leftX,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A VISUAL
          </motion.span>

          {/* Video */}
          <motion.div
            className="flex-shrink-0 overflow-hidden"
            style={{ width: "clamp(300px, 30vw, 500px)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <video
              src="/video/V1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.span
            className="absolute right-4 uppercase font-black leading-none"
            style={{
              fontSize: "clamp(14px, 3.2vw, 58px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              x: rightX,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
