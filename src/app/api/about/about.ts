
import { IAbout } from "../../data/type";
import me from "../../public/assets/images/about/me.png";

import i1 from "../../public/assets/images/about/I_1.jpg";
import i2 from "../../public/assets/images/about/I_2.jpg";
import i3 from "../../public/assets/images/about/I_3.jpg";
import i4 from "../../public/assets/images/about/I_4.jpg";
import i5 from "../../public/assets/images/about/I_5.jpg";
import i6 from "../../public/assets/images/about/I_6.jpg";


const about: IAbout[] = [
  {
    id: 1,
    imageHeader: [me],
    image: [me],
    collomn1: [i1, i2, i3],
    collomn2: [i4, i5, i6],
    
  },
];

export default about;
