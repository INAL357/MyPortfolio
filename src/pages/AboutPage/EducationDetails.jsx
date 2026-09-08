import React from "react";
import InternshipCertificate from "../../assets/certificates/Internship_certificate.jpg";

const education = [
  {
    id: 1,
    year: "2020 - 2023",
    title: "Milagres College",
    course: "BCA",
    description:
      "Built a foundation in programming, database management, web development, computer applications, and business fundamentals, while developing problem-solving and analytical skills through academic projects.",
  },
  {
    id: 2,
    year: "2023 - 2025",
    title: "St. Aloysius College of Management and IT",
    course: "MCA",
    description:
      "Advanced my knowledge of software development, databases, web technologies, and application architecture while also gaining exposure to management, business processes, project management, and organizational practices.",
  },
];

const ExperienceData = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Calypso Innovations",
    duration: "2025",
    description:
      "Worked on software development tasks, contributing to application development, debugging, testing, and implementing features as part of the development team.",
    text: "View Internship Certificate",
    url: InternshipCertificate,
  },
  {
    id: 2,
    role: "Classroom Training",
    company: "GeeksforGeeks",
    duration: "2025 - 2026",
    description:
      "Completed classroom-based training focused on programming, data structures, algorithms, and software development fundamentals through practical exercises and problem-solving.",
  },
];

const EducationDetails = () => {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h1 className="mb-16 text-center text-5xl font-bold">
          Education & Experience
        </h1>

        {/* Two Columns */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

          {/* ================= EDUCATION ================= */}
          <div>
            <h2 className="mb-10 text-2xl font-bold tracking-wider text-cyan-400">
              EDUCATION
            </h2>

            <div className="relative border-l-2 border-cyan-400/40 pl-8">

              {education.map((data) => (
                <div key={data.id} className="relative mb-8 last:mb-0">

                  {/* Timeline Dot */}
                  <span
                    className="
                      absolute
                      -left-[41px]
                      top-2
                      h-4
                      w-4
                      rounded-full
                      border-2
                      border-black
                      bg-cyan-400
                      shadow-[0_0_10px_rgba(34,211,238,0.7)]
                    "
                  ></span>

                  {/* Card */}
                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-700
                      bg-[#1c1c1c]
                      p-6
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400
                    "
                  >
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      {data.year}
                    </p>

                    <h3 className="text-xl font-bold">
                      {data.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {data.course}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {data.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div>
            <h2 className="mb-10 text-2xl font-bold tracking-wider text-cyan-400">
              EXPERIENCE
            </h2>

            <div className="relative border-l-2 border-cyan-400/40 pl-8">

              {ExperienceData.map((data) => (
                <div key={data.id} className="relative mb-8 last:mb-0">

                  {/* Timeline Dot */}
                  <span
                    className="
                      absolute
                      -left-[41px]
                      top-2
                      h-4
                      w-4
                      rounded-full
                      border-2
                      border-black
                      bg-cyan-400
                      shadow-[0_0_10px_rgba(34,211,238,0.7)]
                    "
                  ></span>

                  {/* Card */}
                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-700
                      bg-[#1c1c1c]
                      p-6
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400
                    "
                  >
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      {data.duration}
                    </p>

                    <h3 className="text-xl font-bold">
                      {data.role}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {data.company}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {data.description}
                    </p>

                    {data.url && (
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-4
                          inline-block
                          text-sm
                          text-cyan-400
                          hover:text-cyan-300
                          hover:underline
                        "
                      >
                        {data.text}
                      </a>
                    )}
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationDetails;