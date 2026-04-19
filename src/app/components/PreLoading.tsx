"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewYork } from "../fonts/newyork";

function PreLoading({ count }: { readonly count: number }) {
  const progress = Math.round(((10 - count) / 10) * 100);

  return (
    <AnimatePresence>
      {count > 0 && (
        <>
          {/* Panneau rouge — part en dernier */}
          <motion.div
            className="fixed inset-0 z-[101]"
            style={{ backgroundColor: "#101010" }}
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            }}
          />

          {/* Panneau beige — part en premier */}
          <motion.section
            className="fixed inset-0 z-[102] flex flex-col justify-between px-6 md:px-14 py-8 overflow-hidden"
            style={{ backgroundColor: "#F3F0E9" }}
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {/* Top */}
            <motion.div
              className="flex justify-between items-center uppercase tracking-widest text-[11px] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ opacity: 0.35 }}>Portfolio 2025</span>
              <span style={{ color: "#101010" }}>{progress}%</span>
            </motion.div>

            {/* Center */}
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <motion.h1
                  className="font-black uppercase leading-none"
                  style={{
                    fontFamily: "'Arial Black', 'Arial', sans-serif",
                    fontSize: "clamp(48px, 12vw, 180px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.88,
                    color: "#101010",
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  A VISUAL
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className={`${NewYork.variable} font-newYork leading-none`}
                  style={{
                    fontSize: "clamp(48px, 12vw, 180px)",
                    fontStyle: "italic",
                    color: "#101010",
                    lineHeight: 0.9,
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                >
                  Designer
                </motion.h1>
              </div>
            </div>

            {/* Bottom : barre */}
            <div className="flex flex-col gap-3">
              <div className="w-full h-[1px]" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: "#101010" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <span
                className="uppercase tracking-widest text-[11px] font-bold"
                style={{ opacity: 0.3 }}
              >
                Loading
              </span>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}

export default PreLoading;
