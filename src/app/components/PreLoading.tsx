"use client";
import React from "react";
import StarSpin from "./StarSpin";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { NewYork } from "../fonts/newyork";


function PreLoading({ count }: { readonly count: number }) {
  const name = "Yasmine";
  

  const starVariant = {
    initial: {
      opacity: 0,
      rotate: 0,
    },
    animate: {
      opacity: 1,
      rotate: 90,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      rotate: 0,
      transition: {
        delay: .75
      },
    },
  };

  return (
    <AnimatePresence>
      {count > 4 && (
        <motion.section
          className="z-[100] relative bg-lightBg dark:bg-darkBg w-full h-[90vh] lg:h-screen flex items-end justify-center overflow-hidden"
        >
          {name.split("").map((nom, i) => {
            return name[i] === "" ? (
              <div
                key={`${nom}_${i}`}
                className="flex flex-col items-center justify-center gap-y-[6vh] lg:gap-y-[10vh]"
              >
                <motion.div
                  variants={starVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <StarSpin classNameSize="w-[15vw] sm:w-[12vw] lg:w-[7vw]" />
                </motion.div>
                <motion.p
                  initial={{ y: "100%", opacity: 1 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: [0.87, 0, 0.13, 1],
                      delay: i * 0.1,
                    },
                  }}
                  exit={{
                    y: "100%",
                    transition: {
                      delay: 0.6,
                      ease: [0.65, 0, 0.35, 1],
                    },
                  }}
                  className={` ${NewYork.variable} font-newYork  text-[29.5vw] leading-[.85] tracking-tight mb-[-.2em]`}
                >
                  {nom}
                </motion.p>
              </div>
            ) : (
              <div key={`${nom}_${i}`} className="">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: [0.87, 0, 0.13, 1],
                      delay: i * 0.1,
                    },
                  }}
                  exit={{
                    y: 0,
                    opacity: 0,
                    transition: {
                      // delay: 0.1,
                      ease: [0.65, 0, 0.35, 1],
                    },
                  }}
                  className={` ${NewYork.variable} font-newYork  uppercase text-[24.5vw] leading-[.85] tracking-tight mb-[-.2em]`}
                >
                  {nom}
                </motion.p>
              </div>
            );
          })}
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default PreLoading;
