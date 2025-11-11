// "use client";
// import styles from "../../page.module.scss";
// import Image, { StaticImageData } from "next/image";
// import { useRef } from "react";
// import gsap from "gsap";
// import { NewYork } from "@/app/fonts/newyork";
// import { motion } from "framer-motion";

// import about from "../../api/about/about";

// export default function TestGalery() {
//   const plane1 = useRef(null);
//   const plane2 = useRef(null);

//   // const { scrollYProgress } = useScroll(); // Volgt de scrollvoortgang van de hele pagina
//   // const yTransform1 = useTransform(scrollYProgress, [0, 1], [0, 300]); // Plane 1 beweging
//   // const yTransform2 = useTransform(scrollYProgress, [0, 1], [0, 450]); // Plane 2 beweging

//   let requestAnimationFrameId: number | null = null;
//   let xForce = 0;
//   let yForce = 0;
//   const easing = 0.08;
//   const speed = 0.01;
//   const EASING = [0.83, 0, 0.17, 1];

//   // const imageAnimation = {
//   //   initial: {
//   //     opacity: 0,
//   //   },
//   //   animate: {
//   //     opacity: 1,
//   //     y: 0,
//   //     transition: {
//   //       duration: 0.5,
//   //       ease: "easeInOut",
//   //     },
//   //   },
//   // };

//   const rise1 = {
//     initial: {
//       y: "100%",
//     },
//     animate: {
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: EASING,
//         delay: 0.3,
//       },
//     },
//   };

//   const manageMouseMove = (e: React.MouseEvent) => {
//     const { movementX, movementY } = e;
//     xForce += movementX * speed;
//     yForce += movementY * speed;

//     if (requestAnimationFrameId == null) {
//       requestAnimationFrameId = requestAnimationFrame(animate);
//     }
//   };

//   const lerp = (start: number, target: number, amount: number) =>
//     start * (1 - amount) + target * amount;

//   const animate = () => {
//     xForce = lerp(xForce, 0, easing);
//     yForce = lerp(yForce, 0, easing);
//     gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
//     gsap.set(plane2.current, {
//       x: `+=${xForce * 0.5}`,
//       y: `+=${yForce * 0.5}`,
//     });

//     if (Math.abs(xForce) < 0.01) xForce = 0;
//     if (Math.abs(yForce) < 0.01) yForce = 0;

//     if (xForce != 0 || yForce != 0) {
//       requestAnimationFrame(animate);
//     } else {
//       if (requestAnimationFrameId !== null) {
//         cancelAnimationFrame(requestAnimationFrameId);
//       }
//       requestAnimationFrameId = null;
//     }
//   };

//   return (
//     <div onMouseMove={manageMouseMove} className={styles.main}>
//       <div className="hidden sm:block">
//       <motion.div
//         className={styles.plane}
//         ref={plane1}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
        
//       >
//         {Array.isArray(about[0].collomn1) &&
//           about[0].collomn1.map((image: StaticImageData, index: number) => (
//             <Image
//               key={index}
//               src={image}
//               alt="image"
//               width={200}
//               height={200}
//               unoptimized
//             />
//           ))}
//         </motion.div>
//       </div>

//       <motion.div
//         className={styles.plane}
//         ref={plane2}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         {Array.isArray(about[0].collomn2) &&
//           about[0].collomn2.map((image: StaticImageData, index: number) => (
//             <Image
//               key={index}
//               src={image}
//               alt="image"
//               width={200}
//               height={200}
//               unoptimized
//             />
//           ))}
//       </motion.div>

//       {/*       
//       <div className={styles.plane} ref={plane1}>
//         {gallery[0].collomn1.map((image: StaticImageData, index: number) => (
//           <Image key={index} src={image} alt="image" width={200} height={200} />
//         ))}
//       </div>

//       <div className={styles.plane} ref={plane2}>
//         {gallery[0].collomn1.map((image: StaticImageData, index: number) => (
//           <Image key={index} src={image} alt="image" width={200} height={200} />
//         ))}
//       </div>  */}

//       <div className="hero-about h-screen flex justify-center items-center ">
//         <div className="hero-about__content text-center overflow-hidden">
//           <motion.h1
//             variants={rise1}
//             initial="initial"
//             animate="animate"
//             className={` ${NewYork.className} dark:mix-blend-exclusion text-[12vw] xs:text-[9vw] sm:text-[8vw] lg:text-[5vw] text-center leading-[1] text-[#CAC8BC]`}
//           >
//             Hi, there I’m the <br /> person behind this
//           </motion.h1>
//         </div>
//       </div>
//     </div>
//   );
// }
