import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div
        key={project.key}
        style={{
          backgroundImage: `url(` + project.image + `)`,
        }}
        className={
          "relative my-[5rem] w-[58vw] h-[60vh] bg-cover bg-top text-[#f2f2f2] shadow-xl shadow-gray-400 z-[1000] " +
          (project.key % 2 === 1 ? "lg:mr-[20rem]" : "lg:ml-[20rem]")
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gray-800 opacity-60"></div>

        <div
          className={
            "z-[10000000] text-[#ffc96d] absolute top-[-10rem] text-[14rem] font-bold transition-opacity  duration-300 " +
            (project.key % 2 === 1 ? "right-[-4rem] " : "left-[-4rem] ") +
            (isHovered ? " opacity-100" : "opacity-0")
          }
        >
          <span className="drop-shadow-2xl">{"0" + project.key}</span>
        </div>

        <div
          className={
            "z-[100] w-[85%] h-[80%] mx-auto flex flex-col justify-end  lg:" +
            (project.key % 2 === 1
              ? "items-start lg:text-left"
              : "items-end lg:text-right")
          }
        >
          <div
            className={
              "z-[100000] transition transform duration-300 " +
              (isHovered ? "scale-[1.03] " : "scale-100 ")
            }
          >
            <h2 className="font-bold text-[3em]">{project.name}</h2>
            <p className="italic text-[1.2rem] mb-[1.2rem]">
              {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#ef3937] to-[#f06248] py-[0.7rem] px-[1.2rem] align-middle font-bold hover:scale-110 transition-all duration-300">
                See Project Repo
              </button>
            </a>
          </div>
          <div
            className={
              "absolute top-0 right-0 w-full h-full bg-gradient-to-r from-blue-950 to-[#243859] transition-opacity duration-300 " +
              (isHovered ? "opacity-80" : "opacity-0")
            }
          >
            <div className="w-full h-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
