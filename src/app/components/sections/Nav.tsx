"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Nav({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [navTheme, setNavTheme] = useState(theme);
  const [, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/Brussels",
        }) + " GMT+2"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-detect dark/light section behind nav
  useEffect(() => {
    const darkSections = document.querySelectorAll<HTMLElement>(
      "[data-nav='dark']"
    );
    const lightSections = document.querySelectorAll<HTMLElement>(
      "[data-nav='light']"
    );

    if (darkSections.length === 0 && lightSections.length === 0) {
      setNavTheme(theme);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = (entry.target as HTMLElement).dataset.nav as
              | "dark"
              | "light";
            if (t) setNavTheme(t);
          }
        });
      },
      {
        rootMargin: "-10px 0px -90% 0px", // Détecte uniquement la zone en haut où la nav est
        threshold: 0,
      }
    );

    darkSections.forEach((el) => observer.observe(el));
    lightSections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [theme]);

  const color = navTheme === "light" ? "#101010" : "#ffffff";
  const dotColor = navTheme === "light" ? "bg-black" : "bg-white";

  return (
    <header className="fixed w-full z-50">
      <motion.div
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-5 z-50 text-[11px] uppercase tracking-widest"
        animate={{ color }}
        transition={{ duration: 0.4 }}
      >
        {/* Left : location + time */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className={`w-[6px] h-[6px] rounded-full ${dotColor} inline-block`} />
           Moeskroen, BE
          </span>
          {/* <span>{time}</span> */}
          {/* <span className="hidden md:inline">51.0543° N, 3.7174°</span> */}
        </div>

        {/* Right : links */}
        <ul className="flex gap-6 sm:gap-8 text-[11px]">
          <li>
            <Link href="/" className="hover:opacity-50 transition-opacity">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/all" className="hover:opacity-50 transition-opacity">
              WORKS
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              ABOUT
            </Link>
          </li> */}
        </ul>
      </motion.div>
    </header>
  );
}

export default Nav;
