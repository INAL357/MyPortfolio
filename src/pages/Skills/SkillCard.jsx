import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="group h-40 w-full [perspective:1000px]">

      {/* Flipping container */}
      <div
        className="
          relative
          h-full
          w-full
          transition-transform
          duration-500
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >

        {/* ================= FRONT ================= */}

        <div
          className="
            absolute
            inset-0
            rounded-xl
            border
            border-slate-800
            bg-[#151515]
            p-4
            text-white
            [backface-visibility:hidden]
            transition
            group-hover:border-cyan-400/60
          "
        >
          {/* Top */}
          <div className="flex items-start justify-between">

            {/* Icon */}
            <div
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-xs
                font-bold
                ${skill.iconStyle}
              `}
            >
              {skill.icon}
            </div>

            {/* Decorative dots */}
            <div className="flex gap-1">
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Skill */}
          <div className="mt-5">
            <h2 className="text-base font-semibold">
              {skill.name}
            </h2>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              {skill.category}
            </p>
          </div>

          <span className="absolute bottom-3 right-4 text-[10px] text-slate-600">
            hover ↗
          </span>
        </div>

        {/* ================= BACK ================= */}

        <div
          className="
            absolute
            inset-0
            rounded-xl
            border
            border-cyan-400/50
            bg-[#0c171a]
            p-4
            text-white
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >
          <div className="flex items-center gap-2">
            <div
              className={`
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                text-[10px]
                font-bold
                ${skill.iconStyle}
              `}
            >
              {skill.icon}
            </div>

            <h2 className="text-sm font-semibold">
              {skill.name}
            </h2>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-300">
            {skill.description}
          </p>

          <span className="absolute bottom-3 right-4 text-[10px] text-cyan-400/60">
            ← back
          </span>
        </div>

      </div>
    </div>
  );
};

export default SkillCard;