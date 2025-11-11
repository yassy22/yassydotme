"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css"; // Importeer de CSS-module

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null); // Gebruik useRef voor het cursor-element

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Voeg event listeners toe voor hover effecten op links, knoppen, invoer
    document.querySelectorAll("a, button, input").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup functie om event listeners te verwijderen
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, input").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="40"
        height="40"
      >
        <circle cx="50" cy="50" r="50" fill="rgba(255, 165, 0, 0.8)" />
      </svg>
    </div>
  );
};
