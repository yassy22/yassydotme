// clubSofa
import hearder from "../../../../public/assets/images/clubSofa/headeri0.png";
import clubsofa_i1 from "../../../../public/assets/images/clubSofa/clubsofa_i1.png";
import clubsofa_i4 from "../../../../public/assets/images/clubSofa/clubsofa_i4.png";
import clubsofa_i5 from "../../../../public/assets/images/clubSofa/clubsofa_i5.png";
import clubsofa_i6 from "../../../../public/assets/images/clubSofa/clubsofa_i6.png";
import clubsofa_i7 from "../../../../public/assets/images/clubSofa/clubsofa_i7.png";
import clubsofa_i8 from "../../../../public/assets/images/clubSofa/clubsofa_i8.png";
import clubsofa_iphone from "../../../../public/assets/images/clubSofa/clubsofa_iphone.png";

import clubsofa_gif_1 from "../../../../public/assets/images/clubSofa/gifs/workiV1.gif";

// scapino
import scapino_header from "../../../../public/assets/images/scapino/header_scapino.png";
import scapino_i1 from "../../../../public/assets/images/scapino/i1.png";
import scapino_i3 from "../../../../public/assets/images/scapino/styleboard.png";
import scapino_i4 from "../../../../public/assets/images/scapino/insta.png";
import scapino_i5 from "../../../../public/assets/images/scapino/imga1.png";
import scapino_gif_1 from "../../../../public/assets/images/scapino/scapino.gif";
import scapino_phone_gif from "../../../../public/assets/images/scapino/phone.gif";

import header2 from "../../../../public/assets/images/gold/Header_hands.png";

import moodboardGold from "../../../../public/assets/images/gold/Moodboard.png";
import textureGold from "../../../../public/assets/images/gold/Texture.png";
import FinalGold from "../../../../public/assets/images/gold/i1.png";

// muiji
import muiji_header from "../../../../public/assets/images/muij/muij_header.png";
import i1_muji from "../../../../public/assets/images/muij/i1.png";
import i2_muji from "../../../../public/assets/images/muij/i2.png";
import moodboard_muji from "../../../../public/assets/images/muij/moodboard.png";
import styleMuij from "../../../../public/assets/images/muij/style.png";

// wizaa
import wizaa_header from "../../../../public/assets/images/wizaa/i1.png";
import wizaa_iO from "../../../../public/assets/images/wizaa/i0.png";
import wizaa_i1 from "../../../../public/assets/images/wizaa/i2.png";
import wizaa_i2 from "../../../../public/assets/images/wizaa/i3.png";
import wizaa_i3 from "../../../../public/assets/images/wizaa/i4.png";
import wizaa_i4 from "../../../../public/assets/images/wizaa/i5.png";
import wizaa_i5 from "../../../../public/assets/images/wizaa/i6.png";
import gif_1 from "../../../../public/assets/images/wizaa/gif1.gif";

// fengshui

import crowd_header from "../../../../public/assets/images/crowd/crowd_i1.jpg";
import crowd_i2 from "../../../../public/assets/images/crowd/crowd_i2.jpg";
import crowd_i3 from "../../../../public/assets/images/crowd/crowd_i3.jpg";
import crowd_i4 from "../../../../public/assets/images/crowd/crowd_i4.jpg";
import crowd_i5 from "../../../../public/assets/images/crowd/crowd_i5.jpg";
import crowd_i6 from "../../../../public/assets/images/crowd/crowd_i6.jpg";



//gwwc
import gwwc_i1 from "../../../../public/assets/images/gwwc/gwwc_i1.jpg";
import gwwc_i2 from "../../../../public/assets/images/gwwc/gwwc_i2.jpg";
import gwwc_i3 from "../../../../public/assets/images/gwwc/gwwc_i3.jpg";
import gwwc_i4 from "../../../../public/assets/images/gwwc/gwwc_i4.jpg";
import gwwc_i6 from "../../../../public/assets/images/gwwc/gwwc_i6.png";
import gwwc_i7 from "../../../../public/assets/images/gwwc/gwwc_i7.jpg";
import gwwc_i8 from "../../../../public/assets/images/gwwc/gwwc_i8.jpg";
import gwwc_i9 from "../../../../public/assets/images/gwwc/gwwc_i9.jpg";
import gwwc_i10 from "../../../../public/assets/images/gwwc/gwwc_i10.jpg";
import gwwc_i11 from "../../../../public/assets/images/gwwc/gwwc_i11.jpg";

import { IWork } from "../../data/type";

const works: IWork[] = [
  {
    id: 1,
    slug: "sofa-club",
    title: "Sofa Club",
    description: `
This was my first experience designing a subscription-based app, where I focused on creating an intuitive yet visually engaging interface to make the ordering process straightforward and enjoyable.

It was also my first deep dive into app design, where I learned the importance of balancing functionality with aesthetics and gained valuable experience in crafting an intuitive user flow that enhances the customer experience.
`,
    image: [
      clubsofa_gif_1,
      clubsofa_i6,
      clubsofa_i7,
      clubsofa_i1,
      clubsofa_i8,
      clubsofa_i4,
      clubsofa_i5,
    ], // Drie afbeeldingen
    imageHeader: [clubsofa_iphone, hearder],
    roles: ["creative direction", "app design"],
  },
  {
    id: 2,
    slug: "Wizaa",
    title: "Wizaa potery",
    description: `
    For this personal project, I created Wizaa, a website dedicated to pottery. My goal was to explore various design styles and experiment with web design techniques.

    The project allowed me to flex my creative muscles and try new things, from creating a unique visual identity to experimenting with animations and interactions. It was a fun, challenging project that helped me grow as a designer.
    `,
    image: [wizaa_iO, gif_1, wizaa_i1, wizaa_i2, wizaa_i3, wizaa_i5, wizaa_i4], //

    imageHeader: [wizaa_header],
    roles: ["ux design", " 3D modeling", "Ai"],
  },
  {
    id: 3,
    slug: "Muij",
    title: "Muij",
    description: `
For this project, I created a 3D promotional header for Muji with a 'Back to School' theme using Blender. The concept featured a minimalist, interactive mini machine showcasing Muji’s products, with subtle animations to bring the scene to life.

This project helped me refine my skills in 3D modeling and animation while aligning with Muji’s clean, functional aesthetic.
`,
    image: [moodboard_muji, styleMuij, i1_muji, i2_muji],
    imageHeader: [muiji_header],
    roles: ["creative direction", "3D modeling", "animation"],
  },

  {
    id: 4,
    slug: "scapino",
    title: "Scapino",
    description: `
As a team, we designed a digital experience for Scapino Ballet Rotterdam to connect with young adults and attract them to modern dance. The challenge was to create an engaging, interactive one-pager that captures the energy of Scapino’s performances, using storytelling to draw in a younger audience.

This project allowed us to blend creativity with functionality, enhancing my skills in UX design and front-end development while collaborating closely with my teammates to deliver a cohesive result.
`,

    image: [
      scapino_i1,
      scapino_gif_1,
      scapino_phone_gif,
      scapino_i3,
      scapino_i4,
      scapino_i5,
    ],
    imageHeader: [scapino_header],
    roles: ["frontend", "backend", "web design", "ux design"],
    link: "https://devineyasmineyahyeaden.be/integration4/",
    research:
      "https://www.figma.com/proto/NmM4ivwzWdOezNF0SKkZNr/Integration-4?page-id=648%3A1035&node-id=920-2129&node-type=frame&viewport=199%2C-3687%2C0.15&t=vuBQjkpFYa9PODLF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=920%3A2129",
  },

  {
    id: 5,
    slug: "GoldGold",
    title: "Gold + Gold",
    description: `The goal of this project was to choose a significant element from my culture and bring it to life visually. For me, the choice was clear: gold. It represents not just wealth and beauty, but also the deep sense of tradition, resilience, and value that my culture holds dear. 
    
    Gold symbolizes something precious, timeless, and enduring—just like the heritage and values I carry with me.
`,
    image: [moodboardGold, textureGold, FinalGold],
    imageHeader: [header2],
    roles: ["creative direction"],
  },

  {
    id: 6,
    slug: "crowdbuilding",
    title: "crowdbuilding",
    description: `
This project was one of my first ventures into designing a one-page website for a unique lunch concept centered around herbs and insects. The goal was to create a playful and visually engaging website that captures attention while informing users about the innovative dishes on offer.

Using a mix of vibrant colors, interactive shapes, and a mobile-first approach, I developed a platform that is both inspiring and functional
    `,
    image: [crowd_i2, crowd_i3, crowd_i4, crowd_i5, crowd_i6],
    imageHeader: [crowd_header],
    roles: ["visual design", "branding"],
  },


  {
    id: 8,
    slug: "GWWC",
    title: "GWWC",
    description: `
During my internship in Amsterdam, I had the opportunity to work on CrowdBuilding, a Dutch platform that empowers people to collectively develop housing projects.
Within the agency, I contributed to the rebranding, creating new layouts, presentation slides, and visual compositions.

I also worked on the logo redesign, exploring concepts, typography, and visual directions that reflected the idea of collective power and sustainable living.
This project helped me strengthen my skills in branding, creative direction, and visual identity design.
    `,
    image: [
      gwwc_i2,
      gwwc_i3,
      gwwc_i4,
      gwwc_i6,
      gwwc_i7,
      gwwc_i8,
      gwwc_i9,
      gwwc_i10,
      gwwc_i11,
    ],
    imageHeader: [gwwc_i1],
    roles: ["visual design", "illustration"],
  },
];

export default works;
