"use client";
import React, { useState } from "react";
import logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50">
      <nav className="flex justify-between items-center py-5 px-5">
        {/* Logo */}
        <Link href="/" className="">
          <Image src={logo} alt="logo" width={80} height={80} unoptimized />
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden flex flex-col gap-1"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="block w-10 h-[2px] bg-white"></span>
          <span className="block w-10 h-[2px] my-1 bg-white"></span>
          <span className="block w-10 h-[2px] bg-white"></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-5 sm:gap-10 uppercase text-sm sm:text-base">
          <li>
            <Link href="/all" className="hover:text-blue-500">
              works
            </Link>
          </li>
          <li>
            {/* <Link href="/about" className="hover:text-blue-500">
              about
            </Link> */}
          </li>
        </ul>
      </nav>

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
