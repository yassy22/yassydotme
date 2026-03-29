"use client";
import React, { useState, useEffect } from "react";

import PreLoading from "../PreLoading";
import Nav from "../sections/Nav";
import InspireMe from "../InspireMe";
import FinalYear from "../FinalYear";
import Works from "../Works";
import Hero from "../Hero";
import MySuperPower from "../MySuperPower";
import TestGallerySection from "../sections/TestGallery2";
import { AnimatePresence, motion } from "framer-motion";


// Variable en mémoire — reset au refresh, persiste lors de la navigation
let preloaderShown = false;

export default function Home() {
  const [count, setCount] = useState(10);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (preloaderShown) {
      setCount(0);
      setHasLoaded(true);
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          preloaderShown = true;
          return 0;
        } else return prev - 1;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {count > 0 && <PreLoading key="loader" count={count} />}
      </AnimatePresence>

      {count === 0 && (
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Nav theme="light" />
          <main>
            <Hero />
            <FinalYear />
            <MySuperPower />
            <Works />
          </main>
        </motion.div>
      )}
    </>
  );
}
