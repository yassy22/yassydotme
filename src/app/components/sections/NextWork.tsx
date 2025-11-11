import Link from "next/link";
import Image from "next/image";

interface NextWorkProps {
  nextWork: {
    image: string;
    title: string;
    description: string;
    slug: string;
  };
}

export default function NextWork({ nextWork }: NextWorkProps) {
  return (
    <div className="next-work-section bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Next Work</h2>
      <div className="flex items-center">
        <div className="w-1/3">
          <Image
            src={nextWork.image}
            alt={nextWork.title}
            width={300} // Stel een breedte in
            height={200} // Stel een hoogte in
            
            className="rounded-lg"
          />
        </div>
        <div className="w-2/3 pl-6">
          <h3 className="text-xl font-bold">{nextWork.title}</h3>
          <p className="text-gray-600 mt-2">{nextWork.description}</p>
          <Link href={`/works/${nextWork.slug}`}>
            <a className="text-blue-500 hover:underline mt-4 inline-block">
              View Next Work →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
