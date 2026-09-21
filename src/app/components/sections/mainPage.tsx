"use client";
import React from "react";

import Nav from "../sections/Nav";
// import FinalYear from "../FinalYear";
import Works from "../Works";
import Hero from "../Hero";
// import MySuperPower from "../MySuperPower";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Nav theme="light" />
      <main>
        <Hero />
        {/* <FinalYear /> */}
        {/* <MySuperPower /> */}
        <Works />
      </main>
    </motion.div>
  );
}
