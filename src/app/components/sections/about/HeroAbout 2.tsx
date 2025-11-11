"use client";
import { NewYork } from "@/app/fonts/newyork";
import Image from "next/image";
import about from "@/app/api/about/about";
import { motion } from "framer-motion";
import React, { useRef } from "react";

function HeroAbout() {
  const imageRef = useRef(null);

  const EASING = [0.83, 0, 0.17, 1];

  const reveal = {
    initial: {
      height: "0%", // Initial height
      transformOrigin: "bottom", // Zorgt ervoor dat de animatie van boven naar beneden begint
    },
    animate: {
      height: "auto",
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.5,
      },
    },
  };

  // const appear = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: easeInOut,
  //       delay: 0.4,
  //     },
  //   },
  // };

  const rise1 = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="hero-about h-screen flex justify-center items-center ">
      <div className="hero-about__content text-center overflow-hidden">
        <motion.h1
          variants={rise1}
          initial="initial"
          animate="animate"
          className={` ${NewYork.className} dark:mix-blend-exclusion text-[12vw] xs:text-[9vw] sm:text-[8vw] lg:text-[9vw] text-center leading-[1] text-[#CAC8BC]`}
        >
          Hi, there I’m the <br /> person behind this
        </motion.h1>
      </div>

      <div
        className="absolute w-screen -z-10 
       "
      >
        <motion.div
          variants={reveal}
          initial="initial"
          className="hero-about__image overflow-hidden absolute left-28 bg-orange-600"
          animate="animate"
          ref={imageRef}
        >
          <motion.div className=" ">
            <Image
              src={
                Array.isArray(about[0].image)
                  ? about[0].image[0]
                  : about[0].image
              }
              alt="hero about"
              width={300}
              height={300}
              className=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroAbout;
