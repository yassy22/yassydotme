"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, type Variants, useInView, cubicBezier } from "framer-motion";
import home from "../api/home/home";

function FinalYear() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(imageRef, { once: true });

  // Typesafe easing i.p.v. `any`
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  const reveal: Variants = {
    initial: { height: "0%" },
    animate: {
      height: "auto",
      transition: {
        duration: 0.9,
        ease: easing,
        delay: 1,
      },
    },
  };

  return (
    <section className="mx-4 my-40 sm:mx-[130px] sm:h-[140vh] relative">
      <motion.div
        ref={imageRef}
        className="overflow-hidden absolute top-60 right-0 hidden lg:block"
        variants={reveal}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div>
          <Image
            src={home[0].image[2]}
            alt="Fixed Size Image"
            width={600}
            height={700}
            unoptimized
          />
        </motion.div>
      </motion.div>

      <div className="h-[70vh] sm:h-screen flex flex-col gap-10 justify-center items-center relative z-10">
        <p className="text-[14px] sm:text-[45px] font-light">
          In my final year of studies, I am dedicated to further honing my
          skills in front-end development and design.
        </p>
        <p className="text-[14px] sm:text-[45px]">
          I focus on transforming creative ideas into well-crafted, high-quality
          products from concept to completion.
        </p>
      </div>
    </section>
  );
}

export default FinalYear;
