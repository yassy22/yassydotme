// wizaa
import wizaa_header from "../../../../public/assets/images/works/wizaa/i1.png";
import wizaa_iO from "../../../../public/assets/images/works/wizaa/i0.png";
import wizaa_i1 from "../../../../public/assets/images/works/wizaa/i2.png";
import wizaa_i2 from "../../../../public/assets/images/works/wizaa/i3.png";
import wizaa_i3 from "../../../../public/assets/images/works/wizaa/i4.png";
import wizaa_i4 from "../../../../public/assets/images/works/wizaa/i5.png";
import wizaa_i5 from "../../../../public/assets/images/works/wizaa/i6.png";
const gif_1 = "/assets/images/works/wizaa/gif1.mp4";

import athena_i1 from "../../../../public/assets/images/lab/athena/i0.png";
import athena_i1_bw from "../../../../public/assets/images/lab/athena/athena_new.png";
import athena_i3 from "../../../../public/assets/images/lab/athena/i3.png";
import athena_i4 from "../../../../public/assets/images/lab/athena/i4.png";
import athena_i5 from "../../../../public/assets/images/lab/athena/i5.png";
import athena_i6 from "../../../../public/assets/images/lab/athena/i6.png";
const gif_athena = "/assets/images/lab/athena/igif.mp4";
import noyer_header from "../../../../public/assets/images/lab/noyer/noyer03.png";
import noyer_i2 from "../../../../public/assets/images/lab/noyer/noyer02.png";
import noyer_i3 from "../../../../public/assets/images/lab/noyer/noyer01.png";
import noyer_i4 from "../../../../public/assets/images/lab/noyer/noyer04.png";
import noyer_i5 from "../../../../public/assets/images/lab/noyer/noyer5.png";
import noyer_i6 from "../../../../public/assets/images/lab/noyer/noyer06.png";
import noyer_i7 from "../../../../public/assets/images/lab/noyer/noyer07.png";
import noyer_i8 from "../../../../public/assets/images/lab/noyer/noyer08.png";
import noyer_i9 from "../../../../public/assets/images/lab/noyer/noyer09.png";
import noyer_i10 from "../../../../public/assets/images/lab/noyer/noyer10.png";
import exp1_cover from "../../../../public/assets/images/lab/exp1/image 287.png";
import exp1_palette from "../../../../public/assets/images/lab/exp1/color palet.png";
import exp1_illustrations from "../../../../public/assets/images/lab/exp1/illustrations.png";
import exp1_design from "../../../../public/assets/images/lab/exp1/Frame 43.png";
import exp1_photoshop from "../../../../public/assets/images/lab/exp1/photoshop design.png";
import exp1_blender from "../../../../public/assets/images/lab/exp1/blender.png";
import exp1_lighting from "../../../../public/assets/images/lab/exp1/blender-1.png";
import type { StaticImageData } from "next/image";

export interface LabProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string | StaticImageData;
  coverImage?: string | StaticImageData;
  images?: { src?: string | StaticImageData; alt: string; video?: string; wide?: boolean }[];
  video?: string;
  autoplayVideos?: boolean;
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
const lab: LabProject[] = [
  {
    id: "wizaa",
    autoplayVideos: true,
    title: "Wizaa Pottery",
    category: "UX design · 3D modeling · AI",
    description: `For this personal project, I created Wizaa, a website dedicated to pottery. My goal was to explore various design styles and experiment with web design techniques.

The project allowed me to flex my creative muscles and try new things, from creating a unique visual identity to experimenting with animations and interactions. It was a fun, challenging project that helped me grow as a designer.`,
    coverImage: wizaa_header,
    image: wizaa_iO,
    images: [
      { video: gif_1, alt: "Wizaa Pottery — motion exploration" },
      { src: wizaa_i1, alt: "Wizaa Pottery — image 02" },
      { src: wizaa_i2, alt: "Wizaa Pottery — image 03" },
      { src: wizaa_i3, alt: "Wizaa Pottery — image 04" },
      { src: wizaa_i5, alt: "Wizaa Pottery — image 06" },
      { src: wizaa_i4, alt: "Wizaa Pottery — image 05" },
    ],
  },
  {
    id: "exp2",
    title: "Photo Motion — Interactive Image Tool",
    demoUrl: "https://photo-motion.netlify.app/",
    category: "JavaScript · Canvas 2D",
    description: `Photo Motion is an interactive web tool that brings still images to life. Upload your photos and explore movement through spirals, waves and rotating compositions. A minimal control panel lets you adjust speed, rotation, height and scale, with instant visual feedback.

The project explores how motion can transform a collection of images into a playful visual experience. A white background and a quiet interface keep the focus on the imagery.

Focus: Concept, visual design and interaction design
Built with: HTML, CSS, JavaScript and Canvas 2D
Development: Created with AI assistance`,
    // Replace this placeholder with your project cover image when ready.
    image: "/assets/images/lab/exp2/cover-placeholder.svg",
    // Animated cover in the lab overview and video inside the project.
    video: "/assets/images/lab/exp2/photo-motion (2).mp4",
    autoplayVideos: true,
    images: [
      { video: "/assets/images/lab/exp2/white-background.mp4", alt: "Photo Motion — image compositions on a white background" },
      { video: "/assets/images/lab/exp2/controls.mp4", alt: "Photo Motion — adjusting the interactive controls" },
    ],
  },
  {
    id: "exp1",
    title: "Bloom Festival",
    category: "3D · Graphic design",
    description: "A graphic exploration brought into 3D: playful shapes, pastel colours, and a modular festival composition. From the colour palette and illustrations to the final 3D render.",
    image: exp1_cover,
    images: [
      { src: exp1_palette, alt: "Bloom Festival colour palette" },
      { src: exp1_illustrations, alt: "Playful floral illustrations and graphic shapes" },
      { src: exp1_design, alt: "Bloom Festival poster composition" },
      { src: exp1_photoshop, alt: "Poster design process in Photoshop" },
      { src: exp1_blender, alt: "Building the festival scene in Blender" },
      { src: exp1_lighting, alt: "Blender lighting and final scene setup" },
    ],
  },
  {
    id: "athena",
    title: "Athena",
    category: "Social media",
    description: `Athena Calderone has been a major source of inspiration for me and was at the core of this two-day project. The goal was to explore her universe, better understand her approach and aesthetic, and use that as inspiration to develop my own creative style.

    Based on this research, I created a cohesive visual universe and designed posts specifically for this project, focusing on social media and art direction.

    `,
    image: athena_i1_bw,
    images: [
      { src: athena_i3, alt: "Athena visual exploration, first composition" },
      { src: athena_i4, alt: "Athena visual exploration, second composition" },
      { src: athena_i4, video: gif_athena, alt: "Athena motion exploration" },
      { src: athena_i5, alt: "Athena social media composition" },
      { src: athena_i6, alt: "Athena art direction exploration" },
      { src: athena_i1, alt: "Athena visual universe" },
    ],
  },
  {
    id: "studio-noyer",
    title: "Studio Noyer",
    category: "Print",
    description: `There is something honest about solid wood — it doesn't pretend. Studio Noyer, a luxury interior design studio, has built their entire practice around that truth. Brought in to capture their spaces and shape their print presence, the goal was simple: let the material speak, and get out of its way.`,
    coverImage: noyer_header,
    image: noyer_i2,
    images: [
      { src: noyer_i3, alt: "Studio Noyer typographic exploration" },
      { src: noyer_i4, alt: "Studio Noyer, image 04" },
      { src: noyer_header, alt: "Studio Noyer logo" },
      { src: noyer_i5, alt: "Studio Noyer, image 05" },
      { src: noyer_i6, alt: "Studio Noyer, image 06" },
      { src: noyer_i7, alt: "Studio Noyer, image 07" },
      { src: noyer_i8, alt: "Studio Noyer, image 08" },
      { src: noyer_i9, alt: "Studio Noyer, image 09" },
      { src: noyer_i10, alt: "Studio Noyer, image 10" },
    ],
  },
];

export default lab;
