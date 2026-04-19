import works from "../../../api/works/works";
import Nav from "../../../components/sections/Nav";
import Image from "next/image";
import Link from "next/link";
import Info from "../../../components/info";
import WorkPresentation from "../../../components/workPresentation";
import { NewYork } from "@/app/fonts/newyork";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

const WorkPage = async ({ params }: WorkPageProps) => {
  const { slug } = await params;
  const work = works.find((work) => work.slug === slug);

  if (!work) {
    return <div className="not-found">Not Found</div>;
  }

  const visibleWorks = works.filter((w) => !w.hidden);
  const currentIndex = visibleWorks.findIndex((w) => w.slug === slug);
  const nextIndex = (currentIndex + 1) % visibleWorks.length;
  const nextWork = visibleWorks[nextIndex];
  const nextHeader = Array.isArray(nextWork.imageHeader)
    ? nextWork.imageHeader[0]
    : nextWork.imageHeader;

  return (
    <div style={{ backgroundColor: "#F3F0E9", color: "#101010" }}>
      <Nav />

      {/* ── Hero image ── */}
      <div className="relative h-screen w-full" data-nav="dark">
        <Image
          src={
            Array.isArray(work.imageHeader)
              ? work.imageHeader[0]
              : work.imageHeader
          }
          alt={`${work.title} header`}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Gradient overlay top — pour la lisibilité de la nav */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 55%, rgba(250,248,244,0.95) 100%)",
          }}
        />
      </div>

      {/* ── Desktop info panel ── */}
      <Info
        work={{
          ...work,
          roles: Array.isArray(work.roles) ? work.roles : [work.roles],
        }}
      />

      {/* ── Mobile info ── */}
      <div className="lg:hidden px-6 pt-10 pb-6" style={{ backgroundColor: "#F3F0E9" }}>
        <h1
          className={`${NewYork.variable} font-newYork`}
          style={{ fontSize: "clamp(36px, 10vw, 64px)", lineHeight: 1.05, color: "#101010" }}
        >
          {work.title}
        </h1>

        {/* Roles */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(Array.isArray(work.roles) ? work.roles : [work.roles]).map((role, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "#C4572A", color: "#fff" }}
            >
              {role}
            </span>
          ))}
        </div>

        <p className="mt-6 text-[14px] leading-relaxed" style={{ color: "#101010", opacity: 0.7 }}>
          {work.description}
        </p>

        {/* Links */}
        {work.link?.trim() && (
          <Link
            href={work.link}
            className="inline-flex items-center gap-1 mt-4 text-[13px] font-bold underline"
          >
            View the project →
          </Link>
        )}
        {work.research?.trim() && (
          <Link
            href={work.research}
            className="inline-flex items-center gap-1 mt-2 text-[13px] font-bold underline"
          >
            Desk research →
          </Link>
        )}
      </div>

      {/* ── Images ── */}
      <WorkPresentation
        work={{
          ...work,
          image: Array.isArray(work.image)
            ? work.image.map((img) =>
                typeof img === "string" ? img : img.src
              )
            : work.image,
        }}
      />

      {/* ── Next Work ── */}
      <Link href={`/works/${nextWork.slug}`}>
        <div
          className="w-full group cursor-pointer px-8 md:px-20 pt-16 md:py-24 pb-16"
          data-nav="dark"
          style={{ backgroundColor: "#101010", color: "#F3F0E9" }}
        >
          {/* Contenu : texte + vignette desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            {/* Label + titre + roles + arrow */}
            <div className="flex flex-col gap-5">
              <p className="uppercase tracking-widest text-[11px] font-bold" style={{ opacity: 0.45 }}>
                Next Project
              </p>
              <h2
                className="font-black uppercase leading-none"
                style={{
                  fontFamily: "'Arial Black', 'Arial', sans-serif",
                  fontSize: "clamp(32px, 6vw, 96px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {nextWork.title}
              </h2>
              <p className="uppercase tracking-widest text-[11px] font-bold" style={{ opacity: 0.45 }}>
                {Array.isArray(nextWork.roles) ? nextWork.roles.join(" · ") : nextWork.roles}
              </p>
              <div
                className="mt-2 w-12 h-12 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2"
                style={{ borderColor: "rgba(254,254,242,0.3)" }}
              >
                <span style={{ fontSize: "18px" }}>→</span>
              </div>
            </div>

            {/* Vignette desktop seulement */}
            <div
              className="hidden md:block relative flex-shrink-0 overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-105"
              style={{ width: "clamp(240px, 30vw, 480px)", aspectRatio: "4/3" }}
            >
              <Image
                src={nextHeader}
                alt={nextWork.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Image mobile — sous la flèche, avec margin */}
          <div
            className="md:hidden relative w-full overflow-hidden rounded-xl mt-10"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={nextHeader}
              alt={nextWork.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export async function generateStaticParams() {
  return works.filter((w) => !w.hidden).map((work) => ({ slug: work.slug }));
}

export default WorkPage;
