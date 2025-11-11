// "use client";
// import { MotionValue } from "framer-motion";

// import { useEffect, useRef, useState } from "react";
// import styles from "../../gallery.module.scss";
// import Image from "next/image";
// import Lenis from "@studio-freight/lenis";
// import { useTransform, useScroll, motion } from "framer-motion";

// import gallery from "@/app/api/gallery/gallery";

// export default function Home() {
//   const gallery1 = useRef(null);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });
//   const [isMobile] = useState(false); // Detecteer mobiel of desktop

//   const { scrollYProgress } = useScroll({
//     target: gallery1,
//     offset: ["start end", "end start"],
//   });

//   const { height } = dimension;
//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, height * (isMobile ? 0.5 : 2)]
//   );
//   const y2 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, height * (isMobile ? 0.6 : 3)]
//   );
//   const y3 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, height * (isMobile ? 1 : 1.25)]
//   );
//   const y4 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, height * (isMobile ? 2 : 3)]
//   );

//  useEffect(() => {
//    const lenis = new Lenis();

//    const raf = (time: number) => {
//      lenis.raf(time);
//      requestAnimationFrame(raf);
//    };

//    const resize = () => {
//      setDimension({ width: window.innerWidth, height: window.innerHeight });
//    };

//    window.addEventListener("resize", resize);
//    requestAnimationFrame(raf);
//    resize();

//    return () => {
//      window.removeEventListener("resize", resize);
//    };
//  }, []);


//   return (
//     <div>
//       <div ref={gallery1} className={styles.gallery1}>
//         <Column images={gallery[0].collomn1} y={y} />
//         <Column images={gallery[0].collomn2} y={y2} />
//         {!isMobile && <Column images={gallery[0].collomn3} y={y3} />}{" "}
//         {/* Verberg op mobiel */}
//         {!isMobile && <Column images={gallery[0].collomn4} y={y4} />}{" "}
//         {/* Verberg op mobiel */}
//       </div>
//     </div>
//   );
// }

// import { StaticImageData } from "next/image";

// interface ColumnProps {
//   images: StaticImageData[]; // Afbeeldingen blijven hetzelfde
//   y: MotionValue<number>; // Specificeer dat y een MotionValue is
// }
// const Column = ({ images, y }: ColumnProps) => {
//   return (
//     <motion.div className={styles.column} style={{ y }}>
//       {images.map((src, i) => (
//         <div key={i} className={styles.imageContainer}>
//           <Image
//             src={src}
//             alt="image"
//             className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
//             loading="lazy"
//             unoptimized
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// };
