import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ contactSectionRef }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailto = `mailto:your-email@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section
      ref={contactSectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#1b1b1b]
        px-6
        py-24
        text-white
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(#444_1px,transparent_1px),linear-gradient(90deg,#444_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <FaEnvelope className="text-3xl text-orange-500" />

          <h2 className="font-mono text-4xl font-bold tracking-wide text-gray-100 md:text-5xl">
            $ ./contact.exe
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================================= */}
          {/* LEFT - CONTACT INFO */}
          {/* ================================= */}

          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-neutral-700
              bg-[#1e1e1e]
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
                border-neutral-700
                bg-[#242424]
                px-5
                py-4
              "
            >

              {/* Mac Buttons */}
              <div className="flex gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <span className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
              </div>

              {/* Filename */}
              <div className="font-mono text-sm text-gray-400">
                <span className="mr-2 text-blue-400">
                  {"</>"}
                </span>
                contact_info.json
              </div>

              <div className="w-16" />
            </div>

            {/* Code */}
            <div className="flex min-h-[470px] p-6 font-mono text-sm">

              {/* Line Numbers */}
              <div
                className="
                  mr-5
                  select-none
                  border-r
                  border-neutral-700
                  pr-4
                  text-right
                  leading-8
                  text-neutral-600
                "
              >
                {Array.from({ length: 15 }, (_, index) => (
                  <div key={index}>{index + 1}</div>
                ))}
              </div>

              {/* JSON */}
              <div className="leading-8">

                <div className="text-yellow-400">{"{"}</div>

                <div className="pl-5">
                  <span className="text-orange-400">
                    "status"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "open_to_work"
                  </span>
                  <span className="text-gray-400">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-orange-400">
                    "email"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "inalmendonca2@gmail.com"
                  </span>
                  <span className="text-gray-400">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-orange-400">
                    "socials"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-yellow-400">
                    {"{"}
                  </span>
                </div>

                <div className="pl-10">
                  <span className="text-orange-400">
                    "github"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "https://github.com/INAL357"
                  </span>
                  <span className="text-gray-400">,</span>
                </div>

                <div className="pl-10">
                  <span className="text-orange-400">
                    "linkedin"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "https://www.linkedin.com/in/inal-mendonca-a9b9a235a/"
                  </span>
                </div>

                <div className="pl-5 text-yellow-400">
                  {"}"}
                  <span className="text-gray-400">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-orange-400">
                    "location"
                  </span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "Dubai, UAE"
                  </span>
                </div>

                <div className="text-yellow-400">
                  {"}"}
                </div>

                <br />

                <div className="italic text-gray-500">
                  // Waiting for connection...
                </div>

                <div className="mt-1 animate-pulse text-orange-500">
                  _
                </div>

              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* RIGHT - EMAIL FORM */}
          {/* ================================= */}

          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-neutral-700
              bg-[#1e1e1e]
              shadow-2xl
            "
          >

            {/* Tab */}
            <div
              className="
                flex
                h-14
                items-center
                gap-3
                border-b
                border-neutral-700
                border-t-2
                border-t-orange-500
                bg-[#242424]
                px-5
                font-mono
                text-sm
              "
            >
              <span className="text-blue-400">
                JSX
              </span>

              <span className="text-gray-300">
                sendMessage.JS
              </span>

              <span className="text-gray-500">
                ×
              </span>
            </div>

            {/* Email Header */}
            <div className="p-6">

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-orange-500/30
                  bg-[#151515]
                "
              >

                {/* Mail Header */}
                <div className="border-b border-orange-500/20">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      py-3
                    "
                  >

                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-orange-500" />

                      <span className="font-mono text-sm text-gray-400">
                        mail.compose
                      </span>
                    </div>

                    <span className="font-mono text-xs text-gray-600">
                      communication channel
                    </span>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-orange-500/10
                      px-5
                      py-3
                      font-mono
                      text-xs
                    "
                  >
                    <span className="text-gray-500">
                      to:
                      <span className="ml-2 text-gray-400">
                        inalmendonca2@gmail.com
                      </span>
                    </span>

                    <span className="text-gray-500">
                      response:
                      <span className="ml-2 text-green-400">
                        within 24h
                      </span>
                    </span>
                  </div>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-5">

                  {/* Name + Email */}
                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          font-mono
                          text-xs
                          uppercase
                          text-gray-500
                        "
                      >
                        Name
                      </label>

                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        className="
                          w-full
                          rounded-md
                          border
                          border-neutral-700
                          bg-[#1c1c1c]
                          px-4
                          py-3
                          font-mono
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-gray-700
                          focus:border-orange-500
                          focus:ring-1
                          focus:ring-orange-500
                        "
                      />
                    </div>

                    <div>
                      <label
                        className="
                          mb-2
                          block
                          font-mono
                          text-xs
                          uppercase
                          text-gray-500
                        "
                      >
                        Email
                      </label>

                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="
                          w-full
                          rounded-md
                          border
                          border-neutral-700
                          bg-[#1c1c1c]
                          px-4
                          py-3
                          font-mono
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-gray-700
                          focus:border-orange-500
                          focus:ring-1
                          focus:ring-orange-500
                        "
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="mt-5">

                    <label
                      className="
                        mb-2
                        block
                        font-mono
                        text-xs
                        uppercase
                        text-gray-500
                      "
                    >
                      Subject
                    </label>

                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="Project inquiry / Collaboration"
                      className="
                        w-full
                        rounded-md
                        border
                        border-neutral-700
                        bg-[#1c1c1c]
                        px-4
                        py-3
                        font-mono
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-700
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
                    />

                  </div>

                  {/* Message */}
                  <div className="mt-5">

                    <label
                      className="
                        mb-2
                        block
                        font-mono
                        text-xs
                        uppercase
                        text-gray-500
                      "
                    >
                      Message
                    </label>

                    <textarea
                      name="message"
                      required
                      rows="6"
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="
                        w-full
                        resize-none
                        rounded-md
                        border
                        border-neutral-700
                        bg-[#1c1c1c]
                        px-4
                        py-3
                        font-mono
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-700
                        focus:border-orange-500
                        focus:ring-1
                        focus:ring-orange-500
                      "
                    />

                  </div>

                  {/* Footer */}
                  <div className="mt-5 font-mono text-xs text-gray-600">
                    // Happy to recive your message
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      rounded-md
                      border
                      border-orange-500/40
                      bg-orange-500/10
                      px-7
                      py-3
                      font-bold
                      uppercase
                      tracking-wide
                      text-orange-400
                      transition-all
                      duration-300
                      hover:bg-orange-500
                      hover:text-black
                      hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]
                    "
                  >
                    <span className="text-lg">
                      ▶
                    </span>

                    Send Message
                  </button>

                </form>

              </div>

            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-10 flex gap-5 items-center justify-center">
                    <h3 className="text-gray-100 text-2xl"><span className="text-green-500 text-2xl">&lt;I/&gt;</span>Inal Mendonca | Software Developer</h3>
                    <p className="flex block">Built using React.js & Tailwind</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;