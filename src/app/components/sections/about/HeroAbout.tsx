"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, type Variants, cubicBezier } from "framer-motion";
import { NewYork } from "@/app/fonts/newyork";
import about from "@/app/api/about/about";

function HeroAbout() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  // vervangt [0.83, 0, 0.17, 1]
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  const reveal: Variants = {
    initial: { height: "0%" },
    animate: {
      height: "auto",
      transition: { duration: 1, ease: easing, delay: 0.5 },
    },
  };

  const rise1: Variants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 1, ease: easing, delay: 0.3 },
    },
  };

  return (
    <div className="hero-about h-screen flex justify-center items-center relative">
      <div className="hero-about__content text-center overflow-hidden">
        <motion.h1
          variants={rise1}
          initial="initial"
          animate="animate"
          className={`${NewYork.className} dark:mix-blend-exclusion text-[12vw] xs:text-[9vw] sm:text-[8vw] lg:text-[9vw] leading-[1] text-[#F3F0E9]`}
        >
          Hi, there I’m the <br /> person behind this
        </motion.h1>
      </div>

      <div className="absolute inset-0 -z-10 w-screen">
        <motion.div
          ref={imageRef}
          variants={reveal}
          initial="initial"
          animate="animate"
          style={{ transformOrigin: "bottom" }}
          className="hero-about__image overflow-hidden absolute left-28 bg-orange-600"
        >
          <motion.div>
            <Image
              src={
                Array.isArray(about[0].image)
                  ? about[0].image[0]
                  : about[0].image
              }
              alt="hero about"
              width={300}
              height={300}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroAbout;
