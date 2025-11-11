import React, { useEffect } from "react";
import Image from "next/image";
import works from "../../api/works/works";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NewYork } from "@/app/fonts/newyork";


gsap.registerPlugin(ScrollTrigger);

export default function ScrollWorks() {
  useEffect(() => {
    const context = gsap.context(() => {
      const sections = document.querySelectorAll(".work-image");

      gsap.from(sections, {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-works",
          start: "top center",
          end: "center center",
          toggleActions: "play none none reset",
          markers: false,
        },
      });

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".scroll-works",
          pin: true,
          scrub: 0.1,
          start: "top top",
          end: `+=${sections.length * 500}`,
        },
      });
    });

    return () => context.revert(); // Cleanup functie
  }, []);

  return (
    <section className="scroll-works relative no-scrollbar overflow-x-hidden h-screen flex flex-col justify-evenly items-center ">
      <h2
        className={`${NewYork.className} font-newYork text-[50px] lg:text-[90px] `}
      >
        Selected Projects
      </h2>
      <div className="relative flex justify-center items-center overflow-x-auto">
        <div className="flex">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="work-image flex-shrink-0 w-full flex justify-center"
            >
              <Link href={`/works/${work.slug}`}>
                <Image
                  className="relative"
                  width={1000}
                  src={
                    Array.isArray(work.imageHeader)
                      ? work.imageHeader[0]
                      : work.imageHeader
                  }
                  alt={`work ${index + 1}`}
                  unoptimized
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
