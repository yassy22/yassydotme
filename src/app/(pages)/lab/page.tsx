import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import lab from "@/app/api/lab/lab";
import Nav from "@/app/components/sections/Nav";
import styles from "./lab.module.css";
import { NewYork } from "@/app/fonts/newyork";

export const metadata: Metadata = {
  title: "Lab — Yassydotme",
  description: "Experiments in code, 3D, and everything in between.",
};

export default function Lab() {
  const projects = lab.filter((project) => !project.hidden);
  const tiles = [
    ...projects.map((project) => ({
      project,
      image: (project.coverImage ?? project.image)
        ? { src: (project.coverImage ?? project.image)!, alt: project.title }
        : project.images?.[0],
    })),
    ...Array.from({ length: Math.max(0, 8 - projects.length) }, () => ({ project: undefined, image: undefined })),
  ];
  const positions = [
    { column: "5", row: 2, span: 1 },
    { column: "1", row: 1, span: 1 },
    { column: "4", row: 1, span: 1 },
    { column: "2", row: 2, span: 2 },
    { column: "3", row: 1, span: 1 },
    { column: "1", row: 4, span: 1 },
    { column: "4", row: 4, span: 1 },
    { column: "5", row: 4, span: 1 },
  ];
  return (
    <div className={styles.surface}>
      <Nav theme="light" />
      <main className={styles.collageMain} data-nav="light">
        <section className={styles.collage} aria-label="Lab experiments">
          <header className={`${styles.collageTitle} ${NewYork.variable}`}>
            <p className={styles.meta}>Code · 3D · Explorations</p>
            <h1>[lab]</h1>
            <p className={styles.meta}>Select an experiment ↗</p>
          </header>
          {tiles.map(({ project, image }, index) => {
            const position = positions[index % positions.length];
            const row = position.row + Math.floor(index / positions.length) * 4;
            if (!project) {
              return (
                <div
                  key={`coming-${index}`}
                  className={styles.comingSlot}
                  style={{ gridColumn: position.column, gridRow: `${row} / span ${position.span}` }}
                >
                  <span className={styles.comingSquare}>Project Coming</span>
                </div>
              );
            }
            return (
              <Link
                key={`${project.id}-${index}`}
                href={`/lab/${project.id}`}
                className={styles.collageTile}
                style={{ gridColumn: position.column, gridRow: `${row} / span ${position.span}` }}
                aria-label={`Explore ${project.title}${image ? ` — ${image.alt}` : ""}`}
              >
                {project.video ? (
                  <video src={project.video} autoPlay loop muted playsInline preload="metadata" aria-hidden="true" />
                ) : image?.src ? (
                  <Image src={image.src} alt={image.alt} fill priority={index < 3} sizes="(max-width: 767px) 50vw, 20vw" />
                ) : <span className={styles.meta}>{project.title}</span>}
                <span className={styles.tileLabel}>
                  <span>{project.title}</span><span aria-hidden="true">↗</span>
                </span>
              </Link>
            );
          })}
        </section>
        {!projects.length && <p className="text-center py-16 font-mono text-sm">New experiments on the way.</p>}
        <footer className={`${styles.collageFooter} ${styles.meta}`}>
          <span>{String(projects.length).padStart(2, "0")} experiments / Ongoing explorations</span>
          <Link href="/all">Selected works ↗</Link>
        </footer>
      </main>
    </div>
  );
}
