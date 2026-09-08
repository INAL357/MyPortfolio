import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import AboutMe from "./pages/AboutPage/AboutMe.jsx";
import HeroPage from "./pages/HeroPage/HeroPage.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Projects from "./pages/projectPage/Projects.jsx";
import Contact from "./pages/ContactPage/ContactMe.jsx";
import EducationDetails from "./pages/AboutPage/EducationDetails.jsx";
import Certificates from "./pages/certificates/certificates.jsx";
import Skills from "./pages/Skills/Skills.jsx";

function App() {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
const  contactSectionRef = useRef(null);
const educationRef = useRef(null)
  

  const scrollToSection = (targetRef) => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <BrowserRouter>
      <Navbar
        onAboutClick={() => scrollToSection(aboutSectionRef)}
        onProjectsClick={() => scrollToSection(projectsSectionRef)}
        onContactClick = {()=>scrollToSection(contactSectionRef)}
        onEducation = {()=>scrollToSection(educationRef)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="portfolio-container">

              <HeroPage
                onAboutClick={() => scrollToSection(aboutSectionRef)}
                onProjectsClick={() => scrollToSection(projectsSectionRef)}
                onContactClick = {()=>scrollToSection(contactSectionRef)}
                onEducation = {()=>scrollToSection(educationRef)}
              />

              <AboutMe
                aboutSectionRef={aboutSectionRef}
                EducationDetails educationRef={educationRef}
              />

              <Projects
                projectsSectionRef={projectsSectionRef}
              />
              <Skills/>
              <Contact contactSectionRef={contactSectionRef} />

            </div>
          }
        />

        <Route path="/certificates" element={<Certificates/>}/>
        <Route path="/education" element={<EducationDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;