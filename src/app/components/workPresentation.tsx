"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Work {
  id: number;
  image: string | string[];
}

function WorkImage({ image, index }: { image: string; index: number }) {
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
        width={900}
        height={490}
        src={image}
        alt={`work image ${index + 1}`}
        unoptimized
      />
    </motion.div>
  );
}

function WorkPresentation({ work }: { work: Work }) {
  return (
    <section className="work-section mx-[20px] pt-20">
      <div className="section-title flex justify-center">
        <h2 className="take-a-look relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[0.6px] after:bg-white w-[900px] text-center my-8">
          Take a look
        </h2>
      </div>
      <div className="work-images flex justify-center">
        <div className="image-grid flex flex-col gap-10 lg:gap-20">
          {Array.isArray(work.image) ? (
            work.image.map((image, index) => (
              <WorkImage key={index} image={image} index={index} />
            ))
          ) : (
            <WorkImage image={work.image} index={0} />
          )}
        </div>
      </div>
    </section>
  );
}

export default WorkPresentation;
