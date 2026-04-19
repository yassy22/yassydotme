import { StaticImageData } from "next/image";


export interface IWork {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: (string | StaticImageData)[];
  imageHeader: (string | StaticImageData)[];
  roles: string[] | string;
  video?: string;
  link?: string;
  research?: string;
  hidden?: boolean;
}

export interface Gold {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string | StaticImageData[];
  imageHeader: string | StaticImageData[];
  roles: string[] | string;
}

export interface Home {
  title: string;
  description: string;
  image: string | StaticImageData[];
  details: string | StaticImageData[];
}

// export interface Gallery {
//   id: string;
//   collomn1: string | StaticImageData[];
//   collomn2: string | StaticImageData[];
// }

export interface Gallery {
  id: string;
  collomn1: StaticImageData[];
  collomn2: StaticImageData[];
  collomn3: StaticImageData[];
  collomn4: StaticImageData[];
}


export interface IAbout {
  id: number;
  imageHeader: string | StaticImageData[];
  image: string | StaticImageData[];
  collomn1: string | StaticImageData[];
  collomn2: string | StaticImageData[];
}
