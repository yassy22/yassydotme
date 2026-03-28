import React from "react";
import Nav from "@/app/components/sections/Nav";
import QAndA from "@/app/components/sections/about/Q&A";
import TestGallery from "@/app/components/sections/TestGalery";

function About() {
  return (
    <div>
      <Nav />
      <TestGallery />
      {/* <HeroAbout /> */}
      {/* <WhatIDo /> */}
      <QAndA />
    </div>
  );
}

export default About;
