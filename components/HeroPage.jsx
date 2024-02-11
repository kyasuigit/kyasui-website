import React, { useEffect, useRef, useState } from "react";
import TextEffects from "./TextEffects";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CommandLineIcon,
} from "@heroicons/react/20/solid";

import { motion, useAnimation } from "framer-motion";

import Reveal from "./Reveal";
import WaterDropGrid from "./WaterDropGrid";
import FloatingShape from "./FloatingShape";

const HeroPage = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const [isUp, setIsUp] = useState(true);
  const controls = useAnimation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: isUp ? -5 : 5,

      transition: {
        duration: 1,
        ease: "linear", // You can experiment with different easing functions
      },
    });
  }, [isUp, controls]);

  return (
    <div className="h-[100vh] bg-[#141414]  w-[100vw] bg-cover bg-center relative overflow-hidden">
      <div>
        <FloatingShape
          svgUrl="/images/square.svg"
          bobTime="5"
          bobInterval="1200"
          top="15"
          left="85"
          rotation="33"
          opacity="0.5"
          scale="0.2"
          animationDelay="1000"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/dots.svg"
          bobTime="4"
          bobInterval="1200"
          top="2"
          left="1"
          rotation="112"
          opacity="0.5"
          scale="0.15"
          animationDelay="800"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/hexagon.svg"
          bobTime="4"
          bobInterval="1200"
          top="1"
          left="44"
          rotation="12"
          opacity="0.5"
          scale="0.12"
          animationDelay="1600"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/hexagon.svg"
          bobTime="4"
          bobInterval="1200"
          top="80"
          left="10"
          rotation="144"
          opacity="0.5"
          scale="0.14"
          animationDelay="500"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/dots.svg"
          bobTime="4"
          bobInterval="1200"
          top="77"
          left="70"
          rotation="112"
          opacity="0.5"
          scale="0.20"
          animationDelay="20"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/donut.svg"
          bobTime="4"
          bobInterval="1200"
          top="40"
          left="0"
          rotation="112"
          opacity="0.6"
          scale="0.116"
          animationDelay="1200"
        ></FloatingShape>
      </div>
      <div className="w-[80%] grid-cols-1 mx-auto  grid lg:grid-cols-2 gap-[3rem] h-[100%] place-items-center">
        <div className="relative">
          <div className="absolute top-[1%] left-[-4%] w-[4vw] h-[4vw] bg-[#363636] z-[0]"></div>
          <div className="z-[100] relative">
            <Reveal colorFrom="from-blue-700" colorTo="to-blue-500">
              <h1 className=" sm:text-[2em] md:text-[4em] lg:text-[6em] text-white font-bold ">
                Kohei Yasui<span className="text-blue-600">.</span>
              </h1>
            </Reveal>
            <Reveal
              colorFrom="from-blue-700"
              colorTo="to-blue-500"
              width="100%"
            >
              <TextEffects></TextEffects>
            </Reveal>
            <Reveal colorFrom="from-blue-700" colorTo="to-blue-500">
              <p className="mt-[2rem] text-[19px] text-[#ffffff92]">
                A passionate new grad computer science student, specializing in
                backend development, web development, API and UI automated
                testing, and game programming.
              </p>
            </Reveal>
          </div>
          <Reveal colorFrom="from-blue-700" colorTo="to-blue-500">
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <button
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1vNZxrdSR_98XfvusyySNAIiFKhDkWRty/view?usp=sharing"
                  )
                }
                className="px-[2rem] opacity-100 hover:scale-110 hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-blue-600 text-gray-100 items-center flex space-x-2 rounded tracking-wider"
              >
                <span>Résumé</span>
                <ArrowTopRightOnSquareIcon className="w-[1.7rem] h-[1.8rem] text-gray-200"></ArrowTopRightOnSquareIcon>
              </button>

              <button
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/kohei-yasui/")
                }
                className="mt-[2rem] flex-col sm:space-y-0 sm:flex sm:flex-row sm:space-x-3 space-y-6 items-center "
              >
                <div className="w-[2rem] hidden relative lg:flex items-center h-[2rem]">
                  <Image
                    className="object-cover"
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    layout="fill"
                  ></Image>
                </div>

                <span className="text-white font-bold text-[18px] hover:text-yellow-400">
                  LinkedIn
                </span>
              </button>
            </div>
          </Reveal>
        </div>
        <Reveal colorFrom="from-orange-500" colorTo="to-orange-400">
          <div className="w-[50vw] h-[50vh] relative lg:flex flex items-center justify-center justify-self-center">
            <div className="z-[99] relative">
              <div className="z-[19] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24vw] h-[24vw] flex justify-center">
                <img src="/images/blob2.svg"></img>
              </div>
              <div className="z-[21] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22.5vw] h-[22.5vw] flex justify-center">
                <img src="/images/blob.svg"></img>
              </div>

              <div className="z-[22] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[16vw] h-[16vw]">
                <Image
                  src="/images/kohei.png"
                  alt="Kohei"
                  width={800}
                  height={800}
                  className="rounded-full"
                ></Image>
              </div>
              <div className="absolute top-0 left-[5rem] ">
                <WaterDropGrid gridid={0}></WaterDropGrid>
              </div>
              <div className="absolute bottom-0 right-[5rem] ">
                <WaterDropGrid gridid={1}></WaterDropGrid>
              </div>
            </div>
            <div className="w-[23vw] h-[23vw] top-1/2 right-[2%] transform -translate-x-1/2 -translate-y-1/2 rounded-full absolute bg-orange-300 blur-3xl opacity-40"></div>
            <div className="z-[112] bottom-[25%] left-[12%] absolute flex px-[1rem] py-[0.9rem] bg-white rounded-[1.1rem] space-x-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center">
              <div className="px-[0.5rem] py-[0.5rem] bg-[#fba81f] rounded-xl shadow-md">
                <BriefcaseIcon className="text-white w-[1.7rem] h-[1.8rem]"></BriefcaseIcon>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[1.1em] font-semibold">
                  Work Experience
                </span>
                <span className="text-gray-500 text-[0.9em]">16 months</span>
              </div>
            </div>
            <div className="z-[112] top-[30%] right-[16%] absolute flex px-[1rem] py-[0.9rem] bg-white rounded-[1.1rem] space-x-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center">
              <div className="px-[0.5rem] py-[0.5rem] bg-[#fba81f] rounded-xl shadow-md">
                <AcademicCapIcon className="text-white w-[1.7rem] h-[1.8rem]"></AcademicCapIcon>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.1em] font-semibold">Education</span>
                <span className="text-gray-500 text-[0.9em]">5 Years</span>
              </div>
            </div>
            <div className="z-[112] top-[0%] right-[30%] absolute flex px-[1rem] py-[0.9rem] bg-white rounded-[1.1rem] space-x-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center">
              <div className="px-[0.5rem] py-[0.5rem] bg-[#fba81f] rounded-xl shadow-md">
                <CommandLineIcon className="text-white w-[1.7rem] h-[1.8rem]"></CommandLineIcon>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.1em] font-semibold">5+</span>
                <span className="text-gray-500 text-[0.9em]">
                  Unique Software Projects
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default HeroPage;
