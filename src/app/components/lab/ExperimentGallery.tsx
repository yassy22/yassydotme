"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { LabProject } from "@/app/api/lab/lab";
import styles from "../../(pages)/lab/lab.module.css";

type Props = Pick<LabProject, "title" | "image" | "images" | "video" | "autoplayVideos">;

export default function ExperimentGallery({ title, image, images = [], video, autoplayVideos = false }: Props) {
  const items = [
    ...(image || video ? [{ src: image, alt: title, video }] : []),
    ...images,
  ];
  const [active, setActive] = useState(0);
  const sections = useRef<(HTMLElement | null)[]>([]);
  const thumbnails = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const index = sections.current.indexOf(visible[0].target as HTMLElement);
      if (index >= 0) setActive(index);
    }, { rootMargin: "-15% 0px -45% 0px", threshold: 0 });
    sections.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [image, images, video]);

  useEffect(() => {
    const thumbnail = thumbnails.current[active];
    const rail = thumbnail?.parentElement;
    if (!thumbnail || !rail) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (rail.scrollHeight > rail.clientHeight) {
      rail.scrollTo({ top: thumbnail.offsetTop - rail.clientHeight / 2 + thumbnail.clientHeight / 2, behavior: reducedMotion ? "auto" : "smooth" });
    } else if (rail.scrollWidth > rail.clientWidth) {
      rail.scrollTo({ left: thumbnail.offsetLeft - rail.clientWidth / 2 + thumbnail.clientWidth / 2, behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [active]);

  if (!items.length) return null;

  return (
    <div className={styles.galleryLayout}>
      <nav aria-label="Experiment images" className={styles.thumbnailRail} data-lenis-prevent>
        {items.map((item, index) => (
          <a
            key={index}
            href={`#view-${index + 1}`}
            ref={(node) => { thumbnails.current[index] = node; }}
            className={`${styles.thumbnail} ${active === index ? styles.activeThumbnail : ""}`}
            aria-label={`View ${index + 1}: ${item.alt}`}
            aria-current={active === index ? "location" : undefined}
          >
            {item.src ? <Image src={item.src} alt="" fill sizes="80px" /> : <span>Play</span>}
          </a>
        ))}
      </nav>
      <section aria-label="Experiment gallery" className={styles.imageStack}>
        {items.map((item, index) => (
          <figure
            key={index}
            id={`view-${index + 1}`}
            ref={(node) => { sections.current[index] = node; }}
            className={styles.stackFigure}
          >
            {item.video ? (
              <video
                src={item.video}
                poster={typeof item.src === "string" ? item.src : item.src?.src}
                autoPlay={autoplayVideos}
                loop={autoplayVideos}
                muted={autoplayVideos}
                controls={!autoplayVideos}
                playsInline
                preload={autoplayVideos ? "auto" : "none"}
              />
            ) : item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={typeof item.src === "string" ? 1600 : item.src.width}
                height={typeof item.src === "string" ? 1200 : item.src.height}
                priority={index === 0}
                sizes="(max-width: 767px) 100vw, 65vw"
              />
            ) : null}
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><span>{item.alt}</span></figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
