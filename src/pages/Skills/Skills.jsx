import React, { useState } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    {
      id: 1,
      name: "Java",
      category: "languages",
      icon: "Ja",
      iconStyle: "bg-orange-500",
      description:
        "Object-oriented programming, collections, exception handling, and backend development.",
    },
    {
      id: 2,
      name: "JavaScript",
      category: "languages",
      icon: "JS",
      iconStyle: "bg-yellow-400 text-black",
      description:
        "Frontend development, asynchronous programming, API integration, and React applications.",
    },
    {
      id: 3,
      name: "React",
      category: "frontend",
      icon: "Re",
      iconStyle: "bg-cyan-500",
      description:
        "Reusable components, hooks, routing, state management, and responsive interfaces.",
    },
    {
      id: 4,
      name: "Next.js",
      category: "frontend",
      icon: "N",
      iconStyle: "bg-white text-black",
      description:
        "React applications, routing, server-side functionality, and modern web development.",
    },
    {
      id: 5,
      name: "Spring Boot",
      category: "backend",
      icon: "SB",
      iconStyle: "bg-green-600",
      description:
        "REST APIs, authentication, authorization, database integration, and backend applications.",
    },
    {
      id: 6,
      name: "REST APIs",
      category: "backend",
      icon: "API",
      iconStyle: "bg-purple-500",
      description:
        "Designing and consuming RESTful APIs between frontend and backend applications.",
    },
    {
      id: 7,
      name: "MySQL",
      category: "database",
      icon: "SQL",
      iconStyle: "bg-blue-500",
      description:
        "SQL queries, relationships, joins, constraints, and relational database design.",
    },
    {
      id: 8,
      name: "MongoDB",
      category: "database",
      icon: "DB",
      iconStyle: "bg-green-500",
      description:
        "Document databases, collections, CRUD operations, and application integration.",
    },
    {
      id: 9,
      name: "Git",
      category: "tools",
      icon: "Git",
      iconStyle: "bg-orange-600",
      description:
        "Version control, branching, merging, commits, and collaborative development.",
    },
    {
      id: 10,
      name: "JWT",
      category: "backend",
      icon: "JWT",
      iconStyle: "bg-pink-500",
      description:
        "Token-based authentication and authorization for securing REST APIs.",
    },
    {
      id: 11,
      name: "Docker",
      category: "infrastructure",
      icon: "DK",
      iconStyle: "bg-blue-600",
      description:
        "Containerizing applications and creating consistent development environments.",
    },
    {
      id: 12,
      name: "Tailwind CSS",
      category: "frontend",
      icon: "TW",
      iconStyle: "bg-cyan-600",
      description:
        "Responsive interfaces using utility classes and reusable styling patterns.",
    },
  ];

  const categories = [
    "all",
    "languages",
    "frontend",
    "backend",
    "database",
    "infrastructure",
    "tools",
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen bg-black px-4 py-16 text-white sm:px-5">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Skills
        </h1>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-lg border px-4 py-2 text-xs font-medium capitalize
                transition duration-200
                ${
                  activeCategory === category
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-slate-700 bg-[#151515] text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
