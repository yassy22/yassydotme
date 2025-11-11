import React from "react";
import v1 from "../../../public/video/V1.mp4";

import Image from "next/image";
import home from "../api/home/home";
import { NewYork } from "../fonts/newyork";
import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

function Hero2() {
  const greeting1Ref = useRef(null);
  const i1Ref = useRef(null);
  const i2Ref = useRef(null);

  useGSAP(() =>
    gsap.from(greeting1Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    })
  );

  useGSAP(() =>
    gsap.from(i1Ref.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 1.5,
    })
  );

  useGSAP(() =>
    gsap.from(i2Ref.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
    })
  );
  return (
    <div className="hero2 h-screen">
      <div>
        {" "}
        <Image
          src={home[0].image[4]}
          alt="Responsive Image"
          layout="fill"
          className="sm:hidden" // Verbergt de afbeelding op desktop als achtergrond
          unoptimized
        />
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover w-full h-full hidden sm:block"
        >
          <source src={v1} type="video/mp4"  />
        </video>
      </div>

      <div
        className="presentation grid place-items-center gap-4 h-screen w-screen "
        ref={greeting1Ref}
      >
        <div className="col-start-1 row-start-1  ">
          <h1
            className={`${NewYork.variable} font-newYork text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px]  leading-tight `}
          >
       Digital Designer
          </h1>
          <div className="flex flex-col items-end pr-6 ">
            <div>
              {" "}
              <p
                className={`${NewYork.variable} font-newYork text-[40px] leading-tight sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[95px] `}
              >
               Web developer
              </p>
            </div>
          </div>
        </div>

        {/* <MySVG width={300} height={300} /> */}
      </div>
    </div>
  );
}

export default Hero2;
