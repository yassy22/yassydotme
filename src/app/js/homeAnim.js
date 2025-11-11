// animations.js
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const animateElements = ({ greeting,  }) => {
  const tl = gsap.timeline();

  tl.from(greeting, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
  });

  return tl;
};
