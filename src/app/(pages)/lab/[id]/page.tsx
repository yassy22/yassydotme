import type { Metadata } from "next";
import ExperimentGallery from "@/app/components/lab/ExperimentGallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import lab from "@/app/api/lab/lab";
import Nav from "@/app/components/sections/Nav";
import styles from "../lab.module.css";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return lab.filter((project) => !project.hidden).map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = lab.find((item) => item.id === params.id && !item.hidden);
  return { title: project ? `${project.title} — Lab — Yassydotme` : "Lab — Yassydotme", description: project?.description };
}

export default function Experiment({ params }: Props) {
  const projects = lab.filter((project) => !project.hidden);
  const index = projects.findIndex((project) => project.id === params.id);
  const project = projects[index];
  if (!project) notFound();
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;
  return (
    <div className={styles.surface}>
      <Nav theme="light" />
      <main className={styles.detailMain} data-nav="light">
        <Link href="/lab" className={styles.backLink}>← Lab / Index</Link>
        <header className={styles.projectIntro}>
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div>
            <h2>Discipline</h2>
            <p>{project.category}</p>
            <span className={styles.experimentNumber}>EXP_{String(index + 1).padStart(3, "0")}</span>
          </div>
          <div className={styles.projectLinks}>
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">View demo ↗</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
          </div>
        </header>
        <ExperimentGallery title={project.title} image={project.image} images={project.images} video={project.video} />
        <footer className={`${styles.footer} ${styles.bar} ${styles.meta}`}>
          <Link href="/lab">← All experiments</Link>
          {next && <Link href={`/lab/${next.id}`}>Next / {next.title} ↗</Link>}
        </footer>
      </main>
    </div>
  );
}
