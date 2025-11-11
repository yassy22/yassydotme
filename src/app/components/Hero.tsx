import Image from "next/image";
import Button from "./ui/Button";
import home from "../api/home/home";
import { NewYork } from "../fonts/newyork";
import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";


function Hero() {
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
    <section className="">
      <div className="relative h-screen sm:h-[110vh]">
        <Image
          src={home[0].image[4]}
          alt="Responsive Image"
          layout="fill"
          className="sm:hidden" // Verbergt de afbeelding op desktop als achtergrond
          unoptimized
        />

        <Image
          src={home[0].image[0]}
          alt="Fixed Size Image"
          width={250}
          height={300}
          unoptimized
          className="overflow-hidden absolute right-44 z-10 hidden lg:block"
          ref={i1Ref}
          
        />

        <Image
          src={home[0].image[1]}
          alt="image 2"
          width={250}
          height={300}
          className="hidden sm:block  overflow-hidden object-cover object-top absolute  bottom-40 left-[300px] " // Verbergt de afbeelding op mobiele schermen, laat alleen zien op desktop
          unoptimized
          ref={i2Ref}
        />

        <div
          className="presentation grid place-items-center gap-4 h-screen w-screen"
          ref={greeting1Ref}
        >
          <div className="col-start-1 row-start-2  ">
            <h1
              className={`${NewYork.variable} font-newYork text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[146px]  leading-tight `}
            >
              Frontend Developer
            </h1>
            <div className="flex flex-col items-end pr-6 ">
              <div>
                {" "}
                <p
                  className={`${NewYork.variable} font-newYork text-[40px] leading-tight sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[95px] `}
                >
                  UI Designer
                </p>
                <div className="max-w-[450px]">
                  <p className="text-[14px] max-w-[400px] pt-2  sm:pt-0 ">
                    My front-end development and design skills enable me to
                    bring ideas to life, creating tailored, user-focused
                    solutions from start to finish.
                  </p>
                </div>
                <Button href="/about" className="mt-4">
                  ABOUT ME
                </Button>
              </div>
            </div>
          </div>

          {/* <MySVG width={300} height={300} /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
