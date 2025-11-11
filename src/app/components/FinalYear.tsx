import home from "../api/home/home";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function FinalYear() {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });

  const EASING = [0.83, 0, 0.17, 1];

  const reveal = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "auto",
      transition: {
        duration: 0.9,
        ease: EASING,
        delay: 1,
      },
    },
  };

  return (
    <section className="mx-4 my-40 sm:mx-[130px] sm:h-[140vh] relative">
      <motion.div
        variants={reveal}
        initial="initial"
        className="overflow-hidden absolute top-60 right-0 hidden lg:block "
        animate={isInView ? "animate" : "initial"}
        ref={imageRef}
      >
        <motion.div className="">
          <Image
            src={home[0].image[2]}
            alt="Fixed Size Image"
            width={600}
            height={700}
            unoptimized
          />
        </motion.div>
      </motion.div>

      <div className=" h-[70vh] sm:h-screen flex flex-col gap-10 justify-center items-center relative z-10">
        <p className="text-[14px] sm:text-[45px] font-light">
          In my final year of studies, I am dedicated to further honing my
          skills in front-end development and design.
        </p>
        <p className="text-[14px] sm:text-[45px] ">
          I focus on transforming creative ideas into well-crafted, high-quality
          products from concept to completion.
        </p>
      </div>
    </section>
  );
}

export default FinalYear;
