"use client";

import React, { useRef } from "react";
import Image from "next/image";
import home from "../api/home/home";
import { NewYork } from "../fonts/newyork";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero2() {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const greetingRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });
      tl.from(greetingRef.current, { opacity: 0, y: 50, delay: 0.5 })
        .from(img1Ref.current, { opacity: 0, y: -20 }, "-=0.4")
        .from(vidRef.current, { opacity: 0, y: 20 }, "-=0.8");
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef} className="hero2 h-screen relative">
      {/* Achtergrond: mobiel = image, desktop = video */}
      <div className="absolute inset-0">
        {/* Mobiel background image */}
        <Image
          src={home[0].image[4]}
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="sm:hidden object-cover"
          unoptimized
          ref={img1Ref}
        />

        {/* Desktop background video */}
        <video
          ref={vidRef}
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/V1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div
        className="presentation grid place-items-center gap-4 h-screen w-screen relative z-10"
        ref={greetingRef}
      >
        <div className="col-start-1 row-start-1">
          <h1
            className={`${NewYork.variable} font-newYork text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] leading-tight`}
          >
            Digital Designer
          </h1>

          <div className="flex flex-col items-end pr-6">
            <p
              className={`${NewYork.variable} font-newYork text-[40px] leading-tight sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[95px]`}
            >
              Web developer
            </p>
          </div>
        </div>

        {/* <MySVG width={300} height={300} /> */}
      </div>
    </div>
  );
}

export default Hero2;
