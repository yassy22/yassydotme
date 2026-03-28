"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";

export default function StudioPage() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0vw", "-30vw"]);
  const downZ = useTransform(scrollYProgress, [0, 1], ["0vw", "20vw"]);

 

  return (
 
    <div
      ref={wrapperRef}
      style={{ height: "300vh", backgroundColor: "#e8e4dc", color: "#0a0a0a" }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center  px-4"
        style={{}}
      >
        {/* Nom */}
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

        {/* Middle row */}
        <div className="relative w-full flex items-center justify-center mt-4 md:mt-6">
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

          <motion.div
            className="  flex-shrink-0"
            style={{
              width: "clamp(300px, 30vw, 500px)", 
              y: downZ,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            
            transition={{ duration: 0.9, delay: 0.6 }}
        
            
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

        {/* Scroll down */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest">
          SCROLL DOWN
        </div>
      </div>
    </div>
  );
}
