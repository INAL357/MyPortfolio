import React from "react";
import portfolio from "../../assets/Portfolio_Imag.png";
import TableData from "./TableData";
import RightSide from "./RightSide";
import EducationDetails from "./EducationDetails";

const AboutMe = ({ aboutSectionRef, educationRef }) => {
  return (
    <>
      {/* About Section */}
      <section
        ref={aboutSectionRef}
        className="min-h-screen bg-black px-6 py-15 text-white"
      >
        <h1 className="mb-12 text-center text-6xl font-bold">
          Who am I
        </h1>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2">

          {/* Left Profile Card */}
          <div className="rounded-2xl border border-slate-700 bg-[#1c1c1c] px-8 py-10">

            {/* Profile */}
            <div className="mb-12 flex justify-center">
              <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-cyan-400 p-1">
                <img
                  src={portfolio}
                  alt="My Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <table className="w-full">
              <TableData />
            </table>
          </div>

          {/* Right Terminal Card */}
          <div className="w-full">
            <RightSide />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={educationRef}
        className="min-h-screen bg-black  text-white"
      >
        {/* Eduaction Page Import */}
        <section className="bg-black  text-white">
        <EducationDetails />
      </section>
      </section>
    </>
  );
};

export default AboutMe;