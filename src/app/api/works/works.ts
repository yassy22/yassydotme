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

// Athena
import athena_i1 from "../../../../public/assets/images/athena/i0.png";
import athena_i1_bw from "../../../../public/assets/images/athena/i0_black_w.png";

import athena_i3 from "../../../../public/assets/images/athena/i3.png";
import athena_i4 from "../../../../public/assets/images/athena/i4.png";
import athena_i5 from "../../../../public/assets/images/athena/i5.png";
import athena_i6 from "../../../../public/assets/images/athena/i6.png";
import gif_athena from "../../../../public/assets/images/athena/igif.gif";

import slipDesktop_i0 from "../../../../public/assets/images/sipdesk/i0.png";
import slipDesktop_i1 from "../../../../public/assets/images/sipdesk/i1.png";
import slipDesktop_i2 from "../../../../public/assets/images/sipdesk/i2.png";
import slipDesktop_i3 from "../../../../public/assets/images/sipdesk/i3.png";
import slipDesktop_i4 from "../../../../public/assets/images/sipdesk/i4.png";
import slipDesktop_i5 from "../../../../public/assets/images/sipdesk/i5.png";
import slipDesktop_i6 from "../../../../public/assets/images/sipdesk/i6.png";
import slipDesktop_i7 from "../../../../public/assets/images/sipdesk/i7.png";
import slipDesktop_i8 from "../../../../public/assets/images/sipdesk/i8.png";

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
    slug: "slipdesktop",
    title: "The Sip Desk",
    description: `
For this project, I designed a desktop application for Slip, a company specializing in high-quality silk products. The goal was to create an intuitive and visually appealing interface that reflects the brand's luxurious aesthetic while providing a seamless user experience.

This project allowed me to explore desktop application design, focusing on usability and visual storytelling to enhance the overall brand experience.
`,
    image: [
      slipDesktop_i0,
      slipDesktop_i1,
      slipDesktop_i2,
      slipDesktop_i3,
      slipDesktop_i4,
      slipDesktop_i5,
      slipDesktop_i6,
      slipDesktop_i7,
      slipDesktop_i8,
    ],
    imageHeader: [slipDesktop_i8],
    roles: ["desktop app design", "visual design"],
  },

  {
    id: 6,
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
  {
    id: 7,
    slug: "athena",
    title: "Athena",
    description: `Athena Calderone has been a major source of inspiration for me and was at the core of this two-day project. The goal was to explore her universe, better understand her approach and aesthetic, and use that as inspiration to develop my own creative style. 
    
    Based on this research, I created a cohesive visual universe and designed posts specifically for this project, focusing on social media and art direction.

    `,
    image: [athena_i3, athena_i4, gif_athena, athena_i5, athena_i6, athena_i1],
    imageHeader: [athena_i1_bw],
    roles: ["visual design", "Social media", "Rush project"],
  },
];

export default works;
