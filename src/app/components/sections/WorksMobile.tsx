"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, cubicBezier } from "framer-motion";
import works from "../../api/works/works";
import Rols from "../work/Rols";

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1), // vervangt "easeOut"
    },
  },
};

export default function WorksMobile() {
  return (
    <section className="mx-4 my-16">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {works.map((work, index) => (
          <Link href={`/works/${work.slug}`} key={work.id || index}>
            <motion.div
              className="cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants}
            >
              {/* Afbeelding */}
              <Image
                className="w-full object-cover"
                width={900}
                height={500}
                src={
                  Array.isArray(work.imageHeader)
                    ? work.imageHeader[0]
                    : work.imageHeader
                }
                alt={`work ${index + 1}`}
                unoptimized
              />

              {/* Titel en rollen */}
              <div className="pt-6">
                <p className="text-[20px] md:text-[25px] my-2 md:my-3 font-semibold">
                  {work.title}
                </p>
                <Rols
                  roles={Array.isArray(work.roles) ? work.roles : [work.roles]}
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
