import React, { useRef, useState } from "react";
import NavBar from "@/components/Navbar";
import MobileNavBar from "@/components/MobileNavBar";
import HeroPage from "@/components/HeroPage";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const Home = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div className="relative">
        <MobileNavBar nav={nav} closeNav={closeNav}></MobileNavBar>
        <NavBar
          openNav={openNav}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactsRef={contactsRef}
        />
        <div ref={homeRef}>
          <HeroPage />
        </div>
        <div>
          <div ref={aboutRef}>
            <AboutMe></AboutMe>
          </div>
          <div ref={skillsRef}>
            <Skills></Skills>
          </div>
          <div ref={experienceRef}>
            <Experience></Experience>
          </div>
        </div>
        <div className="relative z-[20]">
          <div ref={projectsRef}>
            <Projects></Projects>
          </div>
          <div ref={contactsRef}>
            <ContactMe></ContactMe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
