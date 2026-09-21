"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { label: "Visual Design",         x: -240, y: -320, rotate: -4 },
  { label: "Branding",              x:  260, y: -260, rotate:  3 },
  { label: "User Interface Design", x: -580, y:  -40, rotate: -3 },
  { label: "Design Systems",        x:  360, y:  120, rotate:  4 },
  { label: "Creative Development",  x: -520, y:  280, rotate: -4 },
  { label: "Visual Content",        x:   80, y:  340, rotate:  3 },
];


function Pill({ label, x, y, rotate, delay }: {
  label: string; x: number; y: number; rotate: number; delay: number;
}) {
  return (
    <motion.div
      className="absolute px-5 py-2.5 rounded-full font-medium cursor-default select-none"
      style={{
        top: "50%",
        left: "50%",
        rotate,
        backgroundColor: "#F3F0E9",
        color: "#101010",
        fontSize: "clamp(11px, 1vw, 15px)",
        whiteSpace: "nowrap",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, x, y, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {label}
    </motion.div>
  );
}

function MySuperPower() {
  return (
    <section
      className="relative w-full overflow-hidden"
      data-nav="light"
      style={{ minHeight: "100vh", backgroundColor: "#F3F0E9", color: "#101010" }}
    >

      {/* ── DESKTOP ── */}
      <div className="hidden md:block w-full" style={{ minHeight: "100vh" }}>
        {skills.map((s, i) => (
          <Pill key={s.label} {...s} delay={0.15 + i * 0.1} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--newyork)",
              fontSize: "clamp(42px, 7vw, 110px)",
              fontWeight: "normal",
              fontStyle: "italic",
              color: "#C4572A",
              lineHeight: 1.05,
            }}
          >
            My Design
            <br />
            Superpowers
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden flex flex-col items-center px-6 pt-24 pb-20 gap-8 min-h-screen">

        {/* Titre */}
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--newyork)",
            fontSize: "clamp(48px, 14vw, 80px)",
            fontWeight: "normal",
            fontStyle: "italic",
            color: "#C4572A",
            lineHeight: 1.05,
          }}
        >
          My Design
          <br />
          Superpowers
        </motion.div>

        {/* Liste des skills */}
        <div className="flex flex-col w-full gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              className="px-6 py-4 rounded-full font-bold text-center"
              style={{
                backgroundColor: "#F3F0E9",
                color: "#101010",
                fontSize: "17px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {s.label}
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default MySuperPower;
