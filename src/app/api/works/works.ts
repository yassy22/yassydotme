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

import fengshui_header from "../../../../public/assets/images/fen/i1.png";
import fengshui_i1 from "../../../../public/assets/images/fen/i2.png";
import fengshui_i2 from "../../../../public/assets/images/fen/i3.png";

//Smart

import smart_header from "../../../../public/assets/images/smart/i1.png";
import smart_i1 from "../../../../public/assets/images/smart/i2.png";
import smart_i2 from "../../../../public/assets/images/smart/i3.png";
import smart_i3 from "../../../../public/assets/images/smart/i4.png";

//lotus
import lotus_header from "../../../../public/assets/images/lotus/i1.png";
import lotus_i1 from "../../../../public/assets/images/lotus/i2.png";
import lotus_i2 from "../../../../public/assets/images/lotus/i3.png";
import lotus_i3 from "../../../../public/assets/images/lotus/i4.png";
import lotus_i4 from "../../../../public/assets/images/lotus/i5.png";
import lotus_i5 from "../../../../public/assets/images/lotus/i6.png";
import lotus_i6 from "../../../../public/assets/images/lotus/i7.png";
// details

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
    slug: "Lunchbox",
    title: "Fengshui",
    description: `
This project was one of my first ventures into designing a one-page website for a unique lunch concept centered around herbs and insects. The goal was to create a playful and visually engaging website that captures attention while informing users about the innovative dishes on offer.

Using a mix of vibrant colors, interactive shapes, and a mobile-first approach, I developed a platform that is both inspiring and functional
    `,
    image: [fengshui_i1, fengshui_i2],
    imageHeader: [fengshui_header],
    roles: ["design"],
  },

  {
    id: 7,
    slug: "Smart",
    title: "Smart",
    description: `
   Dit onderzoek richt zich op het ontwikkelen van een Smart City-oplossing om stress in drukke stadsgebieden te verminderen. Onze oplossing is gericht op het helpen van mensen te leiden naar plaatsen waar het minder druk is en hun stress te verminderen.
   
   Via onze micro-website willen we onze zoektocht naar verschillende oplossingen, inzichten en het algemene proces toelichten.

    `,
    image: [smart_i1, smart_i2, smart_i3],
    imageHeader: [smart_header],
    roles: ["ux design", "research"],
    research:
      "https://www.figma.com/proto/rRzy7Nl15KqM9igMgV7YEC/SMartCitys_micro_site_morgane_sam_yasmine?page-id=617%3A2064&node-id=617-2094&node-type=frame&viewport=2350%2C4685%2C0.32&t=UWvp0pBk1ap7JKWi-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=617%3A2094",
  },

  {
    id: 8,
    slug: "Lotus",
    title: "Lotus",
    description: `
Het "Lotus x Lockers" project is een langdurige campagne van Lotus Biscoff, die loopt van 1 september tot 24 januari, met als doel om bij te dragen aan gelijke onderwijskansen voor kinderen in armoede door lege schoollockers te vullen met essentiële benodigdheden,

waarbij mensen worden aangemoedigd om te doneren en de boodschap te verspreiden via social media, zodat deze gezamenlijke inspanning kan uitmonden in een grotere impact op de lange termijn, culminerend op de Internationale Dag van het Onderwijs.

      
      `,
    image: [lotus_i1, lotus_i2, lotus_i3, lotus_i4, lotus_i5, lotus_i6],
    imageHeader: [lotus_header],
    roles: ["ux design", "design"],
  },
];

export default works;
