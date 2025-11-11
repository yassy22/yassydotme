// "use client";
// import React from "react";
// import works from "@/app/api/works/works";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, easeInOut } from "framer-motion";
// import Nav from "@/app/components/sections/Nav";
// import { NewYork } from "@/app/fonts/newyork";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5, // Vertraging tussen items
//     },
//   },
// };

// const titleVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: easeInOut,
//     },
//   },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease: easeInOut,
//     },
//   },
// };

// function All() {
//   return (
//     <div>
//       <Nav />{" "}
//       <main>
//         <div className={`container  mx-auto p-6 pt-40 `}>
//           <motion.h1
//             className={`my-5 ${NewYork.variable} font-newYork text-[70px] `}
//             variants={titleVariants}
//             initial="hidden"
//             animate="show"
//           >
//             Some Projects
//           </motion.h1>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//           >
//             {works.map((work) => (
//               <motion.div key={work.slug} variants={itemVariants}>
//                 <Link href={`/works/${work.slug}`}>
//                   <div className="relative group overflow-hidden">
//                     {/* Afbeelding */}
//                     <Image
//                       src={work.imageHeader[0]}
//                       alt={`${work.title} header`}
//                       width={500}
//                       height={300}
//                       className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//                       unoptimized
//                     />

//                     {/* Overlay met titel */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//                       <h2 className="text-white text-xl font-semibold">
//                         {work.title}
//                       </h2>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default All;
