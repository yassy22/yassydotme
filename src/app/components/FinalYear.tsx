"use client";
import React from "react";
import { motion } from "framer-motion";

function FinalYear() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden px-4 md:px-6 py-16 md:py-24 min-h-screen md:mt-[100vh]"
      data-nav="dark"
      style={{ backgroundColor: "#101010", color: "#FCFAF6" }}
    >
      {/* Label haut gauche — caché sur mobile */}
      <motion.p
        className="hidden md:block absolute uppercase font-bold tracking-widest text-[10px] leading-tight"
        style={{ top: "17%", left: "26%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        HELLO
        <br />
        IT&apos;S VERY NICE TO MEET YOU
      </motion.p>

      {/* Label milieu droite — caché sur mobile */}
      <motion.div
        className="hidden md:flex md:flex-col absolute uppercase font-bold tracking-widest text-[10px] leading-tight gap-3"
        style={{ top: "46%", right: "8%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <p>
          I&apos;M WRITING THIS TO EXPRESS
          <br />
          MY INTEREST IN WORKING TOGETHER
        </p>
        <p>
          PLEASE SEE THE
          <br />
          ATTACHED WORKS BELOW:
        </p>
      </motion.div>

      {/* Texte principal */}
      <div
        className="text-center leading-none font-black uppercase overflow-hidden w-full"
        style={{
          fontFamily: "'Arial Black', 'Arial', sans-serif",
          fontSize: "clamp(40px, 13vw, 200px)",
          letterSpacing: "-0.02em",
          lineHeight: 0.9,
        }}
      >
        {/* JUNIOR WITH — vient de gauche */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1] }}
          viewport={{ once: true }}
        >
          JUNIOR WITH
        </motion.div>

        {/* TALENT — vient de droite */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
          viewport={{ once: true }}
        >
          TALENT
        </motion.div>

        {/* 3e lijn */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-14">
          <motion.div
            className="text-left normal-case"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            OR NOT
          </motion.div>

          <motion.div
            className="text-center normal-case md:mt-12 md:pr-20"
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1], delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--newyork)",
              fontSize: "clamp(16px, 4vw, 60px)",
              fontWeight: "normal",
              wordSpacing: "0.2em",
            }}
          >
            (what do you think?)
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalYear;
