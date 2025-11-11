"use client";

import { useEffect, useState, useCallback } from "react";
import { NewYork } from "@/app/fonts/newyork";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

type ContentItem = {
  id: number;
  title: string;
  question?: string;
  answer?: string | null;
  videoUrl?: string | null;
  colSpan?: string; // Tailwind class
  hexColor?: string;
};

const easeOutCb = cubicBezier(0.17, 0.55, 0.55, 1); // i.p.v. "easeOut"

// Content
const content: ContentItem[] = [
  {
    id: 1,
    title: "01",
    question: "",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    colSpan: "lg:col-span-6",
  },
  {
    id: 2,
    title: "02",
    question: "My HEX Color",
    answer: "De HEX kleur is #FF5733",
    videoUrl: null,
    colSpan: "lg:col-span-3",
    hexColor: "#FF5733",
  },
  {
    id: 3,
    title: "03",
    question: "",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    colSpan: "lg:col-span-3",
  },
  {
    id: 4,
    title: "04",
    question: "Wat is iets waar je trots op bent dat je hebt bereikt?",
    answer: "Ik ben trots op mijn recente project dat ik heb afgerond.",
    videoUrl: null,
    colSpan: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: 5,
    title: "05",
    question: "",
    answer: "Dit is een antwoord op vraag 5.",
    videoUrl: null,
    colSpan: "lg:col-span-4",
  },
  {
    id: 6,
    title: "06",
    question: "Wat is jouw favoriete tool of technologie?",
    answer: "Mijn favoriete tool is Visual Studio Code.",
    videoUrl: null,
    colSpan: "lg:col-span-4",
  },
  {
    id: 7,
    title: "07",
    question: "",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    colSpan: "lg:col-span-8",
  },
];

export default function QAndA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  }, []);

  // ESC om modal te sluiten
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen, closeModal]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedHex(text);
      setTimeout(() => setCopiedHex(null), 1500);
    } catch {
      // no-op: clipboard niet beschikbaar
    }
  };

  return (
    <section className="qAndA_list py-32 mx-6 lg:mx-0">
      <div>
        <h1
          className={`${NewYork.className} qAndA_title text-newyork text-[64px] sm:text-[80px] lg:text-[100px] text-center py-9 leading-none`}
        >
          Q / A
        </h1>
      </div>

      <div className="grid w-full max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-0">
        {content.map((item, index) => {
          const hasVideo = Boolean(item.videoUrl);
          const hasHex = Boolean(item.hexColor);

          return (
            <motion.div
              key={item.id}
              className={`border flex items-center justify-center ${item.colSpan ?? ""} h-auto min-h-[300px] relative -mr-[1px] -mb-[1px] ${
                hasHex ? "cursor-pointer" : ""
              } group`}
              style={{ backgroundColor: item.hexColor || "transparent" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: easeOutCb,
              }}
              onClick={() => {
                if (hasHex && item.hexColor) copyToClipboard(item.hexColor);
              }}
            >
              <div className="flex flex-col items-center text-center relative w-full h-full">
                {/* Titel */}
                <h2
                  className={`${NewYork.className} text-[50px] lg:text-[90px] absolute right-[10px] -bottom-[3px] lg:right-[12px] lg:-bottom-[25px]`}
                >
                  {item.title}
                </h2>

                {/* Teksttile (geen video) */}
                {!hasVideo && (
                  <div className="flex flex-col items-center justify-center w-full h-full p-6">
                    {item.question ? (
                      <p className="text-lg">{item.question}</p>
                    ) : null}
                    {item.answer ? (
                      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-gray-700">
                        {item.answer}
                      </p>
                    ) : null}

                    {hasHex && item.hexColor ? (
                      <span className="mt-3 text-sm text-white/90 bg-black/40 px-3 py-1 rounded">
                        {copiedHex === item.hexColor
                          ? "Gekopieerd!"
                          : item.hexColor}
                      </span>
                    ) : null}
                  </div>
                )}

                {/* Videotile */}
                {hasVideo && item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => openModal(item.videoUrl!)}
                      aria-label={`Speel video voor tile ${item.title}`}
                      className="text-white text-[38px] w-[80px] h-[80px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-black/40 backdrop-blur"
                    >
                      ▶
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal voor video */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Video modal"
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 rounded relative max-w-[900px] w-full mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: easeOutCb }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Sluit video"
                className="absolute top-2 right-2 bg-red-500 text-white w-9 h-9 rounded-full grid place-items-center focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                ✕
              </button>

              {currentVideo && (
                <video
                  src={currentVideo}
                  controls
                  playsInline
                  className="w-full h-auto rounded"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
