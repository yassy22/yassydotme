import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import lab from "@/app/api/lab/lab";
import Nav from "@/app/components/sections/Nav";
import { NewYork } from "@/app/fonts/newyork";

export const metadata: Metadata = {
  title: "Lab — Yassydotme",
  description: "Experiments in code, 3D, and everything in between.",
};

export default function Lab() {
  const projects = lab.filter((project) => !project.hidden);
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--obsidian)]">
      <Nav theme="light" />
      <main className="px-6 md:px-16 pt-36 pb-24" data-nav="light">
        <header className="border-b border-black/10 pb-12 mb-16">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[var(--accent)] mb-8">
            A space to explore
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1
              className={`${NewYork.variable} font-newYork italic leading-none`}
              style={{ fontSize: "clamp(100px, 18vw, 250px)" }}
            >
              [lab]
            </h1>
            <div className="max-w-sm md:pb-3">
              <p className="text-lg leading-relaxed">Experiments in code, 3D, and everything in between.</p>
              <p className="mt-4 text-sm leading-relaxed text-black/60">
                A collection of side projects, playful ideas, and things made out of curiosity.
              </p>
            </div>
          </div>
        </header>

        {projects.length > 0 ? (
          <section aria-label="Experiments" className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project) => (
              <article key={project.id}>
                <p className="mb-4 text-[11px] uppercase tracking-widest font-bold text-[var(--accent)]">
                  {project.category}
                </p>
                {project.video ? (
                  <video
                    src={project.video}
                    poster={typeof project.image === "string" ? project.image : project.image?.src}
                    controls
                    playsInline
                    preload="none"
                    className="w-full aspect-[4/3] object-contain bg-black/5 rounded-xl"
                  />
                ) : project.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5">
                    <Image src={project.image} alt={project.title} fill className="object-contain" />
                  </div>
                ) : null}
                <h2 className="mt-6 text-2xl md:text-3xl font-black uppercase">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-black/60 whitespace-pre-line">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-6 text-[var(--accent)]">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" aria-label={`View demo: ${project.title} (opens in a new tab)`}>
                      View demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" aria-label={`GitHub: ${project.title} (opens in a new tab)`}>
                      GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>
        ) : (
        <section aria-label="Experiments" className="py-16 md:py-24">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[var(--accent)] mb-4">
            Coming soon
          </p>
          <h2 className={`${NewYork.variable} font-newYork italic text-4xl md:text-6xl`}>
            New experiments on the way.
          </h2>
        </section>
        )}

        <footer className="mt-24 pt-8 border-t border-black/10 flex flex-wrap justify-between gap-6">
          <p className="text-sm text-black/60">Always exploring. More experiments to come.</p>
          <Link href="/all" className="uppercase tracking-widest font-bold text-[var(--accent)] hover:underline">
            Selected works ↗
          </Link>
        </footer>
      </main>
    </div>
  );
}
