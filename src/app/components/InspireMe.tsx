
import Image from "next/image";
import home from "../api/home/home";
import { NewYork } from "../fonts/newyork";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);






function InspireMe() {

useGSAP(() =>
  gsap.from(".star-rotation", {
    scrollTrigger: {
      trigger: ".section",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none",
    },
    rotate: 360,
    duration: 5,
    ease: "none",
    repeat: -1,
  })
);
    return (
      <section className="section mx-4 sm:mx-[130px]">
        <div className="my-10 ">
          <div className="flex items-center justify-center">
            <h2
              className={`${NewYork.variable} font-newYork text-[55px] lg:text-[180px]`}
            >
              Photography
            </h2>
            <Image
              src={home[0].details[0]}
              alt="Image 3"
              width={100}
              height={100}
              objectFit="cover"
              className="star-rotation w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
              unoptimized
            />
          </div>

          <h2
            className={`${NewYork.variable} font-newYork text-[55px] text-end lg:text-[200px]`}
          >
            Inspires me
          </h2>
        </div>
      </section>
    );
}

export default InspireMe;