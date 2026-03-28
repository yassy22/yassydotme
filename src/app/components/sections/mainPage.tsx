"use client";
import React, { useState, useEffect } from "react";

import PreLoading from "../PreLoading";
import Nav from "../sections/Nav";
import InspireMe from "../InspireMe";
import FinalYear from "../FinalYear";
import Works from "../Works";
import Hero from "../Hero";
import TestGallerySection from "../sections/TestGallery2";


export default function Home() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {count > 0 ? (
        <PreLoading count={count} />
      ) : (
        <>
          <Nav theme="light" />
          <main className="overflow-hidden">
            {/* <Hero /> */}
            <Hero />

            <FinalYear />
            <InspireMe />
            <TestGallerySection />

            <Works />
          </main>
        </>
      )}
    </>
  );
}
