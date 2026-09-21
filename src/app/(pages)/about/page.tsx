"use client";
import React from "react";
import Nav from "@/app/components/sections/Nav";
import { motion } from "framer-motion";
import { NewYork } from "@/app/fonts/newyork";

const skills = [
  "Visual Design",
  "Branding",
  "User Interface Design",
  "Design Systems",
  "Creative Development",
  "Visual Content",
];

const education = [
  {
    period: "09/2023 – 08/2025",
    degree: "Bachelor's Degree - Digital Design and Development",
    school: "Howest — Kortrijk",
  },
  {
    period: "09/2021 – 06/2022",
    degree: "Training Course - Photography",
    school: "Cvo Miras — Kortrijk",
  },
  {
    period: "09/2020 – 06/2022",
    degree: "Professional Diploma - Graphic Design",
    school: "Syntra-West — Brugge",
  },
];

const infos = [
  { label: "Based in", value: "Moeskroen, Belgium" },
  { label: "Available for", value: "Open to opportunities" },
  { label: "Languages", value: "FR · NL · EN" },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", color: "#101010", minHeight: "100vh" }}>
      <Nav />

      {/* ── Hero ── */}
      <section
        className="w-full min-h-screen flex flex-col justify-end px-6 md:px-16 pb-16 pt-36"
        data-nav="light"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="uppercase tracking-widest text-[11px] font-bold mb-8" style={{ color: "#C4572A" }}>
            About me
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              fontSize: "clamp(52px, 12vw, 180px)",
              letterSpacing: "-0.02em",
              lineHeight: 0.88,
            }}
          >
            YASMINE<br />YAHYE<br />ADEN
          </h1>
        </motion.div>
      </section>

      {/* ── Intro ── */}
      <section
        className="w-full px-6 md:px-16 py-24 border-t"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
        data-nav="light"
      >
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Bio */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className={`${NewYork.variable} font-newYork leading-none mb-10`}
              style={{ fontSize: "clamp(36px, 5vw, 72px)", fontStyle: "italic", color: "#C4572A" }}
            >
              Junior with talent,<br />or not —
            </h2>
            <p className="leading-relaxed" style={{ fontSize: "16px", opacity: 0.75, maxWidth: "480px" }}>
              I&apos;m a visual designer and creative developer based in Moeskroen. I love creating digital experiences that feel both thoughtful and visually engaging — from brand identities to interactive interfaces.
            </p>
            <p className="leading-relaxed mt-5" style={{ fontSize: "16px", opacity: 0.75, maxWidth: "480px" }}>
              I&apos;m curious by nature, always exploring ideas through visual design, photography, and code. I believe good design is both beautiful and functional.
            </p>
          </motion.div>

          {/* Infos */}
          <motion.div
            className="md:w-1/2 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {infos.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-5 border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                <span className="uppercase tracking-widest text-[11px] font-bold" style={{ opacity: 0.4 }}>
                  {item.label}
                </span>
                <span className="font-bold text-[13px]">{item.value}</span>
              </div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }} />
          </motion.div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="w-full px-6 md:px-16 py-24" data-nav="light">
        <motion.p
          className="uppercase tracking-widest text-[11px] font-bold mb-12"
          style={{ color: "#C4572A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.p>

        <div className="flex flex-col">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-t gap-2 md:gap-0"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-widest text-[11px] font-bold md:w-1/4" style={{ opacity: 0.4 }}>
                {item.period}
              </span>
              <div className="md:w-3/4">
                <p className="font-black text-[15px] md:text-[17px]" style={{ letterSpacing: "-0.01em" }}>
                  {item.degree}
                </p>
                <p className="text-[13px] mt-1" style={{ opacity: 0.5 }}>
                  {item.school}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }} />
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="w-full px-6 md:px-16 py-24" data-nav="light">
        <motion.p
          className="uppercase tracking-widest text-[11px] font-bold mb-12"
          style={{ color: "#C4572A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What I do
        </motion.p>
        <div className="flex flex-col">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between py-6 border-t group cursor-default"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span
                className="font-black uppercase leading-none group-hover:translate-x-3 transition-transform duration-300"
                style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontSize: "clamp(24px, 4vw, 56px)", letterSpacing: "-0.02em" }}
              >
                {skill}
              </span>
              <span
                className="text-[11px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#C4572A" }}
              >
                0{i + 1}
              </span>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="w-full px-6 md:px-16 py-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        data-nav="dark"
        style={{ backgroundColor: "#101010", color: "#FCFAF6" }}
      >
        <motion.h2
          className={`${NewYork.variable} font-newYork leading-none`}
          style={{ fontSize: "clamp(48px, 8vw, 120px)", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          Currently<br />looking for<br />a job
        </motion.h2>

        <motion.a
          href="mailto:yasmine@example.com"
          className="uppercase tracking-widest text-[11px] font-bold underline underline-offset-4 hover:opacity-60 transition-opacity"
          style={{ color: "#FCFAF6" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Get in touch →
        </motion.a>
      </section>
    </div>
  );
}
