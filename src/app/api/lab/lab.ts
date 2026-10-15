import type { StaticImageData } from "next/image";

export interface LabProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string | StaticImageData;
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
  hidden?: boolean;
}

// Ajoute tes expériences ici. Les chemins publics commencent par /assets/.
// Exemple (à décommenter après avoir ajouté ton fichier) :
// {
//   id: "mon-experimentation",
//   title: "Mon expérimentation",
//   category: "3D",
//   description: "Une courte description du projet.",
//   image: "/assets/images/lab/mon-projet/mon-image.png",
//   video: "/assets/videos/lab/mon-animation.mp4", // Facultatif
//   demoUrl: "https://example.com", // Facultatif
//   githubUrl: "https://github.com/username/project", // Facultatif
// },
const lab: LabProject[] = [];

export default lab;
