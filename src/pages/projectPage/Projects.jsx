

// Import your project images here
import img1 from "../../assets/project/img1.jpg"
import img2 from "../../assets/project/img2.jpg"
import img3 from "../../assets/project/img3.avif";

import { useState } from "react";

const Projects = ({ projectsSectionRef }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      type: "PERSONAL PROJECT",
      title: "JobTrack",
      description:
        "A job application tracking platform designed to organize applications, track interview progress, and manage the complete job search workflow.",
      image: img1,
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "REST API",
        "JWT",
      ],
      github: "https://github.com/yourusername/jobtrack",
      live: "https://your-project-url.com",
    },

    {
      id: 2,
      type: "PERSONAL PROJECT",
      title: "Rental Maintenance Management",
      description:
        "A maintenance management system connecting tenants, landlords, and technicians through a structured request and approval workflow.",
      image: img2,
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
      ],
      github: "https://github.com/yourusername/project",
      live: "https://your-project-url.com",
    },

    {
      id: 3,
      type: "PERSONAL PROJECT",
      title: "Project Three",
      description:
        "A full-stack web application built to solve a practical business problem.",
      image: img3,
      technologies: [
        "React",
        "Spring Boot",
        "REST API",
      ],
      github: "https://github.com/yourusername/project",
      live: "https://your-project-url.com",
    },
  ];

  const activeProject = projects[selectedProject];

  return (
    <section
      ref={projectsSectionRef}
      className="min-h-screen bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Selected{" "}
            <span className="text-cyan-400">
              projects.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            A collection of projects I've built to apply my
            knowledge of frontend development, backend engineering,
            APIs, databases, and software architecture.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-[#111111] lg:grid-cols-2">

          {/* Project Image */}
          <div className="relative min-h-[350px] overflow-hidden bg-[#181818]">

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute left-5 top-5 rounded-md border border-slate-700 bg-black/70 px-3 py-1">
              <span className="font-mono text-xs text-cyan-400">
                PROJECT_{String(activeProject.id).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-center p-8 lg:p-10">

            <p className="font-mono text-xs tracking-widest text-cyan-400">
              {activeProject.type}
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              {activeProject.title}
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
              {activeProject.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-md
                    border
                    border-slate-700
                    bg-[#1a1a1a]
                    px-3
                    py-1.5
                    font-mono
                    text-xs
                    text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg
                  border
                  border-slate-700
                  px-5
                  py-2.5
                  font-mono
                  text-sm
                  text-slate-300
                  transition
                  hover:border-cyan-400
                  hover:text-cyan-400
                "
              >
                GitHub →
              </a>

              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg
                  bg-cyan-400
                  px-5
                  py-2.5
                  font-mono
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-cyan-300
                "
              >
                Live Demo →
              </a>

            </div>
          </div>
        </div>

        {/* Project Selector */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`
                rounded-xl
                border
                p-5
                text-left
                transition
                duration-300

                ${
                  selectedProject === index
                    ? "border-cyan-400 bg-[#151515]"
                    : "border-slate-800 bg-[#0d0d0d] hover:border-slate-600"
                }
              `}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {project.type}
              </p>

              <h3
                className={`
                  mt-2 text-sm font-medium
                  ${
                    selectedProject === index
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }
                `}
              >
                {project.title}
              </h3>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;