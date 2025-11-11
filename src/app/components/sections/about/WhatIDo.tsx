import Image from "next/image";

import i1 from "@/app/public/assets/images/gallery/I1 2.jpg";

import { NewYork } from "@/app/fonts/newyork";

function WhatIDo() {
  return (
    <section className="h-screen flex mx-10 gap-5 justify-evenly">
      <div className="flex flex-col gap-16 w-[40%]">
        <div>
          <h1 className={`${NewYork.className} text-[100px] lg:text-[200px]`}>
            Y.
          </h1>
          <h2>A bit about me </h2>
        </div>
        <div>
          <h3 className={`${NewYork.className} text-[200px] lg:text-[35px]`}>
            Who I am
          </h3>
          <p className="pt-3">
            I’m Yasmine, a designer with a love for minimalism and coffee.
            Mostly crafting pixels, occasionally lost in a book or a forest. My
            motto? Everything is fixable (except that one bug).
          </p>
        </div>

        <div>
          <h3 className={`${NewYork.className} text-[40px] lg:text-[35px]`}>
            What I do
          </h3>
          <p className="pt-3">
            I’m a student and designer, balancing learning and creating. From
            studying new techniques to designing sleek digital experiences, I’m
            always leveling up.
          </p>
        </div>

        <div>
          <h3 className={`${NewYork.className} text-[40px] lg:text-[35px]`}>
            Why I design?
          </h3>
          <p className="pt-3">
            I discovered my why in my final year: design is my way of giving
            ideas a personal touch. It’s about crafting experiences that feel
            effortless, yet leave a lasting impression.
          </p>
        </div>
      </div>
      <div>
        <Image src={i1} alt="New York" width={500} height={500} />
      </div>
    </section>
  );
}

export default WhatIDo;
