"use client";
import React from "react";
import { NewYork } from "../fonts/newyork";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import Link from "next/link";

interface Work {
  title: string;
  description: string;
  roles: string[];
  link?: string;
  research?: string;
}

function Info({ work }: { work: Work }) {
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial slide-in animation
    tl.to(".info", {
      x: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".info",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Initial slide-in animation

    // Slide-out animation
    tl.to(".info", {
      x: "48vh", // Slide out to the right
      ease: "power3.out",
    });
  });

  return (
    <div className="h-screen hidden lg:block">
      <div className=" info flex items-center justify-end min-h-screen translate-x-[58vh]">
        <div className="handel bg-[#DFDEDA] w-[40px] h-[100px] rounded-s-sm	">
          <div className="bg-pink-400] flex  items-center justify-center h-full ">
            <div className="h-16 w-[2px] bg-gray-800  mx-1"></div>
            <div className="h-16 w-[2px] bg-gray-800 mx-1 "></div>
          </div>
        </div>
        <div className="w-[450px] h-[850px] bg-[#DFDEDA] flex flex-col justify-between">
          <div className="p-10 text-black flex flex-col justify-between">
            <h1 className={`${NewYork.variable} font-newYork text-[50px] `}>
              {work.title}
            </h1>
            <p className="whitespace-pre-line text-[14px]">
              {work.description}
            </p>
            {work.link?.trim() && (
              <Link
                href={work.link}
                className="font-black text-sm py-3 underline flex"
              >
                View the project
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            )}

            {work.research?.trim() && (
              <Link
                href={work.research}
                className="font-black text-sm underline flex"
              >
                Desk research
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            )}

            <p
              className="font-black text-sm py-5"
              aria-label="Scroll to explore the work"
            >
              [Scroll to explore]
            </p>
          </div>

          <div>
            <div className="roles-container text-[12px] flex flex-col font-bold py-5">
              {Array.isArray(work.roles) && work.roles.length > 0 ? (
                work.roles.map((role, index) => (
                  <div
                    key={index}
                    className="role-item py-[6px] px-[20px] text-black"
                  >
                    {role}
                  </div>
                ))
              ) : (
                <p>No roles available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
