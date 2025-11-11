"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Scroll({ children }: { readonly children: React.ReactNode }) {
  gsap.registerPlugin(ScrollTrigger);

  return <>{children}</>;
}

export default Scroll;
