"use client";
import React from "react";
import { motion } from "framer-motion";
import { NewYork } from "../fonts/newyork";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Work {
  title: string;
  description: string;
  roles: string[];
  link?: string;
  research?: string;
}

function Info({ work }: { work: Work }) {
  return (
    <section
      className="hidden lg:block w-full px-16 py-24"
      style={{ backgroundColor: "#faf8f4" }}
    >
      {/* Top row : titre + description */}
      <div className="flex items-start justify-between gap-20 border-t pt-12" style={{ borderColor: "rgba(0,0,0,0.1)" }}>

        {/* Titre */}
        <motion.h1
          className={`${NewYork.variable} font-newYork leading-none`}
          style={{
            fontSize: "clamp(48px, 6vw, 96px)",
            color: "#0a0a0a",
            maxWidth: "45%",
            flexShrink: 0,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {work.title}
        </motion.h1>

        {/* Description + liens */}
        <motion.div
          className="flex flex-col gap-6 pt-2"
          style={{ maxWidth: "45%" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p
            className="whitespace-pre-line leading-relaxed"
            style={{ fontSize: "15px", color: "#0a0a0a", opacity: 0.7 }}
          >
            {work.description}
          </p>

          <div className="flex flex-col gap-2">
            {work.link?.trim() && (
              <Link
                href={work.link}
                className="inline-flex items-center gap-1 font-bold text-[13px] underline underline-offset-4"
                style={{ color: "#9b1c2e" }}
              >
                View the project <ArrowUpRight size={14} />
              </Link>
            )}
            {work.research?.trim() && (
              <Link
                href={work.research}
                className="inline-flex items-center gap-1 font-bold text-[13px] underline underline-offset-4"
                style={{ color: "#9b1c2e" }}
              >
                Desk research <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom row : rôles */}
      <motion.div
        className="flex flex-wrap gap-3 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {work.roles.map((role, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: "#9b1c2e", color: "#fff" }}
          >
            {role}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

export default Info;
