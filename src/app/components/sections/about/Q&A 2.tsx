"use client";
import { useState } from "react";
import { NewYork } from "@/app/fonts/newyork";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

// Content array met aangepaste items
const content = [
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

function QAndA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <section className="qAndA_list py-32 mx-6 lg:mx-0">
      <div>
        <h1
          className={`${NewYork.className} qAndA_title text-newyork text-[100px] text-center py-9`}
        >
          Q / A
        </h1>
      </div>
      <div className="grid w-full max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-0">
        {content.map((item, index) => (
          <motion.div
            key={item.id}
            className={`border flex items-center justify-center ${
              item.colSpan
            } h-auto min-h-[300px] relative -mr-[1px] -mb-[1px] ${
              item.hexColor ? "cursor-pointer" : ""
            } group`}
            style={{ backgroundColor: item.hexColor || "transparent" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            custom={index}
          >
            <div className="flex flex-col items-center text-center relative w-full h-full">
              {/* Titel absoluut gepositioneerd */}
              <h2
                className={`${NewYork.className} ${
                  item.videoUrl
                    ? " text-[50px] lg:text-[90px] right-[12px] -bottom-[25px]"
                    : " text-[50px] lg:text-[90px]"
                } absolute right-[10px]  -bottom-[3px] lg:right-[12px] lg:-bottom-[25px]`}
              >
                {item.title}
              </h2>

              {/* Alleen weergeven als er geen video is */}
              {!item.videoUrl && (
                <div className="flex flex-col items-center justify-center w-full h-full p-4">
                  <p className="text-lg">{item.question}</p>
                  {item.answer && (
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-gray-700">
                      {item.answer}
                    </p>
                  )}
                </div>
              )}

              {/* Play-knop voor items met video */}
              {item.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => openModal(item.videoUrl)}
                    className="text-white text-[38px] w-[80px] h-[80px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    ▶
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal voor video */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 rounded relative max-w-[800px] w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                ✕
              </button>
              {currentVideo && (
                <video src={currentVideo} controls className="w-full h-auto" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default QAndA;
