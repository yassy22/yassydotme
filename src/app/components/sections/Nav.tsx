"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


function Nav({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const color = theme === "light" ? "#0a0a0a" : "#ffffff";
  const dotColor = theme === "light" ? "bg-black" : "bg-white";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   const [time, setTime] = useState("");
  
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
  

  return (
    <header className="fixed w-full z-50 ">
      <div
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-5 z-50 text-[11px] uppercase tracking-widest"
        style={{ color }}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className={`w-[6px] h-[6px] rounded-full ${dotColor} inline-block`} />
            GHENT, BE
          </span>
          <span>{time}</span>
          <span className="hidden md:inline">51.0543° N, 3.7174°</span>
        </div>
        <ul className="hidden sm:flex gap-8 text-[11px]">
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
          <li>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full bg-black shadow-lg z-40"
            >
              <ul className="flex flex-col h-full w-full justify-center items-center p-10 gap-5 uppercase text-sm">
                <li
                  onClick={toggleMenu}
                  className="close_button text-[60px] cursor-pointer"
                >
                  &times;
                </li>
                <li>
                  <Link
                    href="/all"
                    onClick={toggleMenu}
                    className="hover:text-blue-500 text-[20px]"
                  >
                    works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={toggleMenu}
                    className="hover:text-blue-500 text-[20px]"
                  >
                    about
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Overlay for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black z-30"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;
