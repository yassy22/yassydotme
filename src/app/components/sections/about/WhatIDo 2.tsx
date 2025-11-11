function WhatIDo() {
  return (
    <section className="h-screen hero-about flex justify-center items-center px-4">
      <div className="w-full">
        {/* Titel */}
        <div className="section-title flex justify-center">
          <h2 className="take-a-look relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[0.6px] after:bg-white max-w-[80vw] md:w-[600px] lg:w-[900px] text-center my-8 text-3xl md:text-4xl lg:text-5xl">
            What I do
          </h2>
        </div>

        {/* Tekstgedeelte */}
        <div className="text-center max-w-[700px] mx-auto px-2 md:px-4 text-base md:text-lg lg:text-xl flex flex-col gap-4">
          <p>
            I am a multidisciplinary graphic designer & Front-end developer
            based in Belgium. I enjoy crafting clean, minimal, and intuitive
            user experiences.
          </p>
          <p>
            When I’m not busy coding or designing, I love going on solo dates —
            whether it’s dining out or catching a movie, diving deep into anime
            as a longtime enthusiast, or getting lost in games.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
