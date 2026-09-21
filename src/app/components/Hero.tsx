"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

const MOBILE_CONVERGE_DURATION = 1.6;

export default function StudioPage() {
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasPlayedRef = useRef(false);
  const lenis = useLenis();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const leftXScroll = useTransform(scrollYProgress, [0, 0.7], ["0vw", "30vw"]);
  const rightXScroll = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0vw", "-30vw"]
  );
  const downZ = useTransform(scrollYProgress, [0, 0.3], ["22vw", "44vw"]);
  const videoScale = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 1.02]);

  // Mobile: the labels converge on a fixed timer instead of scroll position,
  // with scrolling locked until it finishes — a real phone flick can cover
  // the whole scroll-linked range in one gesture, skipping the animation.
  const leftXMobile = useMotionValue("0vw");
  const rightXMobile = useMotionValue("0vw");

  useEffect(() => {
    if (!isMobile || hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    lenis?.stop();
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const release = () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      lenis?.start();
    };

    const controlsLeft = animate(leftXMobile, "13vw", {
      duration: MOBILE_CONVERGE_DURATION,
      ease: [0.16, 1, 0.3, 1],
    });
    const controlsRight = animate(rightXMobile, "-13vw", {
      duration: MOBILE_CONVERGE_DURATION,
      ease: [0.16, 1, 0.3, 1],
      onComplete: release,
    });

    return () => {
      controlsLeft.stop();
      controlsRight.stop();
      release();
    };
  }, [isMobile, lenis, leftXMobile, rightXMobile]);

  const leftX = isMobile ? leftXMobile : leftXScroll;
  const rightX = isMobile ? rightXMobile : rightXScroll;

  return (
    <div
      ref={wrapperRef}
      data-nav="light"
      className="h-dvh md:h-[300vh]"
      style={{ backgroundColor: "#F3F0E9", color: "#101010" }}
    >
      <div
        className="sticky top-0 h-[100dvh] md:h-screen px-4 flex flex-col justify-center -translate-y-10 md:translate-y-0 md:block md:pt-28"
        style={{}}
      >
        {/* Nom */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="uppercase leading-none font-black"
            style={{
              fontSize: "clamp(38px, 13vw, 200px)",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
            }}
          >
            YASMINE
          </h1>
          <h1
            className="uppercase leading-none font-black"
            style={{
              fontSize: "clamp(38px, 13vw, 200px)",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
            }}
          >
            YAHYE ADEN
          </h1>
        </motion.div>

        {/* Middle row */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-40">
          <motion.span
            className="absolute left-4 uppercase font-black leading-none"
            style={{
              fontSize: "clamp(14px, 3.2vw, 58px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              x: leftX,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A VISUAL
          </motion.span>

          <motion.div
            className="hidden md:block absolute flex-shrink-0"
            style={{
              scale: videoScale,
              transformOrigin: "top center",
              y: downZ,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <video
              src="/video/V1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.span
            className="absolute right-4 uppercase font-black leading-none"
            style={{
              fontSize: "clamp(14px, 3.2vw, 58px)",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              x: rightX,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            DESIGNER
          </motion.span>
        </div>

        {/* Scroll down */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest">
          SCROLL DOWN
        </div>
      </div>
    </div>
  );
}
