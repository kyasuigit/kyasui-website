import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

interface Props {
  openNav: () => void;
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactsRef: RefObject<HTMLDivElement>;
}

const Navbar = ({
  openNav,
  homeRef,
  aboutRef,
  skillsRef,
  experienceRef,
  projectsRef,
  contactsRef,
}: Props) => {
  const calculateBrightness = (color: string) => {
    // Convert hex to RGB
    let hex = color.substring(1);
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    // Calculate brightness
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  return (
    <div className="w-[100%] z-[1000000000] top-0 h-[12vh] bg-transparent fixed">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[38px] text-white font-bold">
          <Reveal colorFrom="from-orange-500" colorTo="to-orange-400">
            <span className="to-[#FBA81F] from-[#F87537] bg-gradient-to-r inline-block text-transparent bg-clip-text">
              K | Y
            </span>
          </Reveal>
        </h1>

        <div
          className="nav-link"
          onClick={() =>
            homeRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          HOME
        </div>
        <div
          className="nav-link"
          onClick={() =>
            aboutRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          ABOUT
        </div>
        <div
          className="nav-link"
          onClick={() =>
            skillsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          SKILLS
        </div>
        <div
          className="nav-link "
          onClick={() =>
            experienceRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          EXPERIENCE
        </div>
        <div
          className="nav-link"
          onClick={() =>
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          PROJECTS
        </div>
        <motion.div
          className="nav-link"
          onClick={() =>
            contactsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          CONTACT
        </motion.div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-500"></Bars3Icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
