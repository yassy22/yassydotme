import { Home } from "../../data/type";

import i1 from "../../public/assets/images/home/i1_.jpg";
import i2 from "../../public/assets/images/home/i2_.jpg";
import i3 from "../../public/assets/images/home/i3_.jpg";
import i4 from "../../public/assets/images/home/i4_.jpg";

// responsive image
import i1_responsive from "../../public/assets/images/home/i1_responsive.png";

import star from "../../public/assets/images/home/star.png";
import graduate from "../../public/assets/images/home/graduate.png";

const home: Home[] = [
  {
    title: "Bonjour",
    description: "i'm a digital designer",
    image: [i1, i2, i3, i4, i1_responsive],
    details: [star, graduate],
  },
];

export default home;
