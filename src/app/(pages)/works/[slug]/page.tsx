import works from "../../../api/works/works";
import Nav from "../../../components/sections/Nav";
import Image from "next/image";
import ThankYou from "../../../components/sections/ThankYou";
import Link from "next/link";
import Info from "../../../components/info";
import WorkPresentation from "../../../components/workPresentation";
import { NewYork } from "@/app/fonts/newyork";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkPageProps {
  params: Promise<{ slug: string }>; // Definieer `params` als een `Promise`
}

const WorkPage = async ({ params }: WorkPageProps) => {
  const { slug } = await params;

  const work = works.find((work) => work.slug === slug);

  if (!work) {
    return <div className="not-found">Not Found</div>;
  }

  const currentIndex = works.findIndex((w) => w.slug === slug);
  const nextIndex = (currentIndex + 1) % works.length;
  const nextWork = works[nextIndex];

  return (
    <div>
      <Nav />

      <div className="work-page">
        <div className=" h-screen">
          {/* Header-afbeelding vult het hele scherm */}
          {work.imageHeader && work.imageHeader.length > 0 && (
            <div className="header-image absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src={work.imageHeader[0]}
                alt={`${work.title} header`}
                layout="fill"
                objectFit="cover"
                priority={true}
                unoptimized
              />
            </div>
          )}
          <Info
            work={{
              ...work,
              roles: Array.isArray(work.roles) ? work.roles : [work.roles],
            }}
          />
        </div>
        <div className="sm:hidden px-4">
          <h1
            className={`${NewYork.className} text-[12PX]text-newyork text-5xl  my-5`}
          >
            {work.title}
          </h1>
          <p className="text-[10px] ">{work.description}</p>
        </div>

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

        <div className="thank-you-section">
          <ThankYou />
        </div>

        {/* Next Work Section */}
        <div className="next-work-section h-screen w-screen relative">
          <div className="next-work-link flex justify-center items-center h-full w-full">
            <Link href={`/works/${nextWork.slug}`} scroll={true}>
              <Image
                src={nextWork.imageHeader[0]}
                alt={`${nextWork.title} header`}
                layout="fill"
                objectFit="cover"
                unoptimized
                className="absolute top-0 left-0 w-full h-full"
              />
              <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {nextWork.title}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Functie om alle statische paden te genereren
// Functie om alle statische paden te genereren
export async function generateStaticParams() {
  const params = works.map((work) => ({
    slug: work.slug, // Zorg ervoor dat slugs beschikbaar zijn
  }));

  console.log(params); // Controleer of de slugs correct worden gegenereerd
  return params;
}

export default WorkPage;
