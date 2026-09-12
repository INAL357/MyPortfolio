import Typewriter from "typewriter-effect";

const PortfolioEditor = ({onAboutClick, onProjectsClick}) => {

  return (
    <div className="w-full max-w-xl">
      {/* Mock IDE Window */}
      <div
        className="
          w-full
          overflow-hidden
          rounded-xl
          border
          border-neutral-800
          bg-[#18181b]
          font-mono
          text-sm
          text-neutral-200
          shadow-2xl
        "
      >
        {/* Window Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-neutral-800
            bg-[#202024]
            px-4
            py-3
          "
        >
          {/* Window Buttons */}
          <div className="flex space-x-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* File Name */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            portfolio.jsx
          </div>

          <div className="w-12" />
        </div>

        {/* Code Area */}
        <div className="relative flex min-h-[270px] overflow-x-auto p-4 leading-relaxed sm:p-6">

          {/* Line Numbers */}
          <div
            className="
              flex
              select-none
              flex-col
              border-r
              border-neutral-800/40
              pr-4
              text-right
              text-neutral-600
            "
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>

          {/* Typewriter */}
          <div className="min-w-0 w-full whitespace-pre-wrap pl-3 text-left sm:pl-4">
            <Typewriter
              options={{
                delay: 40,
                cursor: "█",
                cursorClassName:
                  "text-orange-500 animate-pulse ml-0.5",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span class="text-neutral-500">// Welcome to my workspace</span>\n'
                  )
                  .pauseFor(300)

                  .typeString(
                    '<span class="text-purple-400">import</span> { <span class="text-orange-400">Developer</span> } <span class="text-purple-400">from</span> <span class="text-green-400">\'./universe\'</span>;\n\n'
                  )
                  .pauseFor(500)

                  .typeString(
                    '<span class="text-purple-400">const</span> <span class="text-yellow-400">Portfolio</span> = () =&gt; {\n'
                  )

                  .typeString(
                    '  <span class="text-purple-400">return</span> (\n'
                  )

                  .typeString(
                    '    &lt;<span class="text-orange-400">Developer</span>\n'
                  )

                  .typeString(
                    '      <span class="text-blue-400">name</span>=<span class="text-green-400">"Inal Mendonca"</span>\n'
                  )

                  .typeString(
                    '      <span class="text-blue-400">role</span>=<span class="text-green-400">"Software Developer"</span>\n'
                  )

                  .typeString(
                    '   <span class="text-orange-600">Status</span>=<span class="text-blue-400">"ACTIVE"</span>\n'
                  )

                  .typeString(
                    '  );\n'
                  )

                  .typeString(
                    '};'
                  )

                  .start();
              }}
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div
          className="
            flex flex-wrap
            gap-4
            border-t
            border-neutral-800/60
            bg-[#131316]
            p-4
            text-xs
          "
        >
          <button
            className="
              flex
              items-center
              gap-2
              rounded-md
              border
              border-orange-500/20
              px-4
              py-2
              text-orange-400
              transition
              hover:bg-orange-500/5
             
            "
            onClick={onAboutClick}
          >
            <span>▷</span>
            Run Profile
          </button>

          <button onClick={onProjectsClick}
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-neutral-800/40
              px-4
              py-2
              text-neutral-300
              transition
              hover:bg-neutral-800
            "
          >
            📂 View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditor;
