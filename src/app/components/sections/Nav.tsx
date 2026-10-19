"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "HOME" },
  { href: "/all", label: "WORKS" },
  { href: "/lab", label: "[LAB]" },
];

function Nav({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [navTheme, setNavTheme] = useState(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);
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
    <header ref={headerRef} className="fixed w-full z-50">
      <motion.div
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 md:py-5 z-50 text-[11px] uppercase tracking-widest"
        animate={{ color }}
        transition={{ duration: 0.4 }}
      >
        {/* Left : location + time */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className={`w-[6px] h-[6px] rounded-full ${dotColor} inline-block`} />
           Moeskroen, BE
          </span>
          {/* <span className="hidden md:inline">51.0543° N, 3.7174°</span> */}
        </div>

        {/* Right : links */}
        <nav aria-label="Main navigation">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 top-[5px] h-px w-5 bg-current transition-transform motion-reduce:transition-none ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[11px] h-px w-5 bg-current transition-transform motion-reduce:transition-none ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
          <ul className="hidden md:flex gap-8 text-[11px]">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={pathname === href ? "page" : undefined} className="hover:opacity-50 transition-opacity">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul
            id="mobile-navigation"
            hidden={!menuOpen}
            className="absolute top-full left-4 right-4 border border-current/15 p-3 shadow-lg md:hidden"
            style={{ backgroundColor: navTheme === "light" ? "#f3f3ef" : "#101010" }}
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-between px-4 hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Nav;
