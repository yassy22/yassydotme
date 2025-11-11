import React, { useEffect } from "react";
import gallery from "../../api/gallery/gallery";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GalleryComponent() {
 useEffect(() => {
   if (typeof window === "undefined") return;

   const mm = gsap.matchMedia();

   if (window.innerWidth >= 1024) {
     // Desktop screens
     mm.add("(min-width: 1024px)", () => {
       const height1 = gallery[0].collomn1.length * 127;
       const height2 = gallery[0].collomn2.length * 127;

       gsap.to(".column-up", {
         y: `-${height1}vh`,
         ease: "none",
         scrollTrigger: {
           trigger: ".gallery-container",
           start: "top top",
           end: `+=${height1}`,
           scrub: true,
           pin: true,
         },
       });

       gsap.to(".column-down", {
         y: "0", 
         ease: "none",
         scrollTrigger: {
           trigger: ".gallery-container",
           start: "top top",
           end: `+=${height2}`,
           scrub: true,
         },
       });
     });
   } else {
     // Mobile screens
     mm.add("(max-width: 1023px)", () => {
       const mobileHeight1 = gallery[0].collomn1.length * 25;
       const mobileHeight2 = gallery[0].collomn2.length * 30;

       gsap.to(".column-up", {
         y: `-${mobileHeight1}vh`,
         ease: "none",
         scrollTrigger: {
           trigger: ".gallery-container",
           start: "top top",
           end: `+=${mobileHeight1}`,
           scrub: true,
           pin: true,
         },
       });

       gsap.fromTo(".column-down", {
         y: "-120vh",
       },
         {
          y: `0`,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-container",
            start: "top top",
            end: `+=${mobileHeight2}`,
            scrub: true,
          },
        });
     });
   }

   return () => {
     mm.revert();
     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
   };
 }, []);


  return (
    <div>
      <div className="gallery-container relative h-screen overflow-hidden ">
        <div className="flex w-full h-full gap-4">
          {/* Column Up */}
          <div className="column-up flex flex-col flex-1 w-1/2 gap-4">
            {Array.isArray(gallery[0].collomn1) &&
              gallery[0].collomn1.map(
                (imgSrc: { src: string }, index: number) => (
                  <Image
                    key={`up-${index}`}
                    src={imgSrc.src}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    layout="responsive"
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                    priority={index < 2}
                    quality={90}
                    placeholder="blur"
                    blurDataURL={imgSrc.src}
                    unoptimized
                  />
                )
              )}
          </div>

          {/* Column Down */}
          <div className="column-down flex flex-col flex-1 w-1/2 gap-4  lg:translate-y-[-550vh]">
            {Array.isArray(gallery[0].collomn2) &&
              gallery[0].collomn2.map((imgSrc, index) => (
                <Image
                  key={`down-${index}`}
                  src={imgSrc.src}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  priority={index < 2}
                  quality={90}
                  placeholder="blur"
                  blurDataURL={imgSrc.src}
                  unoptimized
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComponent;
