"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { StaticImageData } from "next/image";

interface Work {
  id: number;
  image: (string | StaticImageData)[];
}

function WorkImage({ image, index }: { image: string | StaticImageData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="work-image overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      }}
    >
      <Image
        width={1200}
        height={800}
        src={image}
        alt={`work image ${index + 1}`}
        className="w-full h-auto rounded-lg"
        loading={index === 0 ? "eager" : "lazy"}
      />
    </motion.div>
  );
}

function WorkPresentation({ work }: { work: Work }) {
  return (
    <section
      className="px-5 md:px-10 pt-10 pb-20"
      data-nav="light"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="flex flex-col gap-8 md:gap-16 items-center">
        {work.image.map((image, index) => (
          <WorkImage key={index} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}

export default WorkPresentation;
