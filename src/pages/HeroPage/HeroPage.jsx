import React from "react";

import GetInTouch from "./GetInTouch";
import DownloadResume from "./DownloadResume";

import PortfolioEditor from './PortfolioEffect';

const HeroPage = ({onAboutClick, onProjectsClick,onContactClick}) => {
  return (
    <section className="min-h-[calc(100vh-76px)] bg-black px-4 sm:px-6">
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-76px)]
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-12
          py-12
          sm:py-16
          lg:flex-row
          lg:gap-8
          lg:py-10
        "
      >
        {/* LEFT - Introduction */}
        <header
          className="
            w-full
            text-center
            lg:w-[55%]
            lg:text-left
          "
        >
          {/* Heading */}
          <h1
            className="
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
          "
          >
            Hello! I am Inal Cany Mendonca
          </h1>

          {/* Job Title */}
          <span
            className="
              mt-4
              block
              text-xl
              font-medium
              text-cyan-400
              sm:text-2xl
            "
          >
            Software Developer
          </span>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-400
              sm:text-lg
              sm:leading-8
              lg:mx-0
            "
          >
            I build backend applications and REST APIs using Java and
            Spring Boot, with React for modern web interfaces.
          </p>

          {/* Location / Availability */}
          <p
            className="
              mt-4
              font-mono
              text-sm
              leading-7
              text-gray-300
              sm:text-base
              md:text-lg
              sm:leading-8
            "
          >
            Currently based in Dubai, UAE
            <span className="block text-cyan-400/80">
              Open to Junior Software Developer opportunities
            </span>
          </p>

          {/* Buttons */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              lg:justify-start
            "
          >
            <DownloadResume />
            <GetInTouch onContactClick={onContactClick} />
          </div>
        </header>

        {/* RIGHT - Portfolio Image */}
        <div
          className="
            flex
            w-full
            items-center
            justify-center
            lg:w-[45%]
          "
        >
          <div className="relative">

            {/* Glow behind image */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-6
                -z-10
                rounded-3xl
                bg-cyan-400/10
                blur-3xl
              "
            />
            <PortfolioEditor
            onAboutClick={onAboutClick}
            onProjectsClick={onProjectsClick}
            
          />

            {/* Portfolio Image */}
            {/* <img
              src={PortFolioImage}
              alt="Inal Mendonca portfolio"
              className="
                w-[260px]
                max-w-full
                rounded-2xl
                border
                border-cyan-400/50
                shadow-[0_0_60px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
                hover:scale-[1.02]
                hover:border-cyan-400/80
                hover:shadow-[0_0_70px_rgba(34,211,238,0.3)]

                sm:w-[320px]
                md:w-[360px]
                lg:w-[400px]
                xl:w-[420px]
              "
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;