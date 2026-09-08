import React from "react";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/INAL_CANY_MENDONCA_SD.pdf";


const DownloadResume = () => {
  
  return (
    <a
      href={Resume}
      download="INAL_CANY_MENDONCA_SD.pdf"
      className="
        group
        relative
        inline-flex
        h-14
        items-center
        gap-3
        px-10
        overflow-hidden
        font-bold
        uppercase
        tracking-[2px]
        text-cyan-400
        transition-all
        duration-500
        hover:bg-cyan-400
        hover:text-black
        hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4]
      "
    >
      {/* Top */}
      <span
        className="
          absolute
          left-[-100%]
          top-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          to-cyan-400
          group-hover:animate-[getTouchTop_1s_linear_infinite]
        "
      />

      {/* Right */}
      <span
        className="
          absolute
          right-0
          top-[-100%]
          h-full
          w-[2px]
          bg-gradient-to-b
          from-transparent
          to-cyan-400
          group-hover:animate-[getTouchRight_1s_linear_infinite]
        "
      />

      {/* Bottom */}
      <span
        className="
          absolute
          bottom-0
          right-[-100%]
          h-[2px]
          w-full
          bg-gradient-to-l
          from-transparent
          to-cyan-400
          group-hover:animate-[getTouchBottom_1s_linear_infinite]
        "
      />

      {/* Left */}
      <span
        className="
          absolute
          bottom-[-100%]
          left-0
          h-full
          w-[2px]
          bg-gradient-to-t
          from-transparent
          to-cyan-400
          group-hover:animate-[getTouchLeft_1s_linear_infinite]
        "
      />

     
      <FaDownload className="relative z-10 text-lg" />

      {/* Text */}
      <span className="relative z-10">
        Resume
      </span>
    </a>
  );
};

export default DownloadResume;