import React from "react";

const RightSide = () => {
  return (
    <div
      className="
        w-full
        max-w-2xl
        overflow-hidden
        rounded-xl
        border
        border-slate-700
        bg-[#111111]
        shadow-lg
      "
    >
      {/* Terminal Header */}
      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-slate-700
          bg-[#1a1a1a]
          px-4
          py-3
        "
      >
        {/* Traffic lights */}
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <span className="ml-3 text-sm text-slate-400">
          user_profile.txt
        </span>
      </div>

      {/* Terminal Content */}
      <div
        className="
          p-6
          font-mono
          text-sm
          leading-7
          text-slate-300
        "
      >
        <p className="mb-6">
          <span className="text-cyan-400">➜ whoami</span>
          <br />
          <span className="text-slate-300">
            Software Developer specializing in full-stack web applications,
            with a focus on Java, Spring Boot, React, REST APIs, and
            database-driven systems.
          </span>
          <br />
          <span className="text-slate-300">
            I enjoy building applications from the backend architecture and
            API layer to responsive frontend interfaces, with a focus on
            clean, maintainable code.
          </span>
        </p>

        <p className="mb-6">
          <span className="text-cyan-400">➜ what I do</span>
          <br />
          <span className="text-slate-300">
            Turning real-world problems into practical software solutions.
          </span>
          <br />
          <span className="text-slate-300">
            Currently focused on Spring Boot, REST APIs, authentication,
            database design, React, and building reliable applications
            that are ready to grow.
          </span>
        </p>

        <p>
          <span className="text-cyan-400">➜ what I am Focusing on</span>
          <br />
          <span className="text-slate-300">
            Java • Spring Boot • React • REST APIs • SQL • MongoDB
          </span>
          <br />
          <span className="text-slate-300">
            • Authentication • RBAC • System Design • Deployment
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightSide;