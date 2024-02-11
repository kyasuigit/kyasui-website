import React from "react";
import Project from "./Project";

let projects = [
  {
    key: "1",
    name: "Ocean Bathymetry Explorer",
    description:
      "explore vast ocean bathymetry in VR through my capstone project",
    image: "/images/oceansim.png",
    link: "https://github.com/kyasuigit/chordboard",
  },
  {
    key: "2",
    name: "Chord Board",
    description: "discover harmonious chords through my C++ app",
    image: "/images/chordboard.png",
    link: "https://github.com/kyasuigit/chordboard",
  },
  {
    key: "3",
    name: "Portfolio Website",
    description: "a glimpse of who I am through my web app",
    image: "/images/website.png",
    link: "https://github.com/kyasuigit/personal_website",
  },
  {
    key: "4",
    name: "Roomies",
    description: "make roommate life easier with my Flutter mobile app",
    image: "/images/roomies.png",
    link: "https://github.com/kyasuigit/roomies-beta",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#f2f2f2] opacity-100 relative">
      <img
        src="/images/Wave Line.svg"
        alt="line background"
        className="absolute h-[100%] w-[100%] z-[0] opacity-40"
      ></img>
      <div className="w-[80%] flex flex-col items-center mx-auto pt-[8rem] pb-[8rem]">
        <span className="text-[#b79c90] font-semibold text-[1rem]">
          Kohei Yasui
        </span>
        <span className="text-[#4a4a4a] font-bold text-[2.6rem]">
          Personal Projects
        </span>
        {projects.map((project) => {
          return <Project key={project.key} project={project}></Project>;
        })}
      </div>
    </div>
  );
};

export default Projects;
