import React, { useEffect } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { easeInOut, motion } from "framer-motion";

import FloatingShape from "./FloatingShape";
const AboutMe = () => {
  return (
    <div className="bg-[#010012] h-[110vh] flex items-center justify-center ">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-[10rem] lg:gap-y-[2rem] grid-rows-2 gap-y-0 gap-x-[5rem] gap w-[74%] h-[60%]">
        <motion.div
          initial={{ x: -500, opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1.0 }}
          transition={{
            duration: 0.7,
            ease: easeInOut,
            type: "spring",
            stiffness: 100,
          }}
        >
          <h2 className="text-[#FBA81F] font-bold text-[3.5em]">
            Student<span className="text-white">.</span>
          </h2>
          <p className="text-white text-[1.1em]">
            Hi there! Welcome to my website! I&apos;m a Japanese student
            currently studying computer science at{" "}
            <span className="text-purple-500">Western University</span>.
            I&apos;ve spent my life moving around and living in places like
            Japan, New York, Thailand, and now I&apos;m pursuing a degree in
            Canada! I love playing badminton, table tennis, and cooking in my
            free time. I also <span className="italic">love</span> travelling!
            Some of my top destinations I&apos;ve visited include New Zealand,
            Vietnam, and Malaysia!
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1.0 }}
          transition={{
            duration: 0.7,
            ease: easeInOut,
            type: "spring",
            stiffness: 100,
          }}
          className="relative"
        >
          <div>
            <FloatingShape
              svgUrl="/images/mountains.svg"
              bobTime="5"
              bobInterval="1200"
              top="-50"
              left="-30"
              rotation="12"
              opacity="0.7"
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>
            <FloatingShape
              svgUrl="/images/badminton.svg"
              bobTime="5"
              bobInterval="1800"
              top="-70"
              left="0"
              rotation="-30"
              opacity="0.9"
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>

            <FloatingShape
              svgUrl="/images/cblossom.svg"
              bobTime="5"
              bobInterval="800"
              top="-50"
              left="30"
              rotation="-90"
              opacity="0.9"
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1.0 }}
          transition={{
            duration: 0.7,
            ease: easeInOut,
            type: "spring",
            stiffness: 100,
          }}
          className="relative"
        >
          <div>
            <FloatingShape
              svgUrl="/images/code.svg"
              bobTime="5"
              bobInterval="600"
              top="-60"
              left="-35"
              rotation="-22"
              opacity="0.9"
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>

            <FloatingShape
              svgUrl="/images/piano.svg"
              bobTime="5"
              bobInterval="1200"
              top="-30"
              left="0"
              rotation="20"
              opacity="0.9"
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>

            <FloatingShape
              svgUrl="/images/fish.svg"
              bobTime="5"
              bobInterval="1500"
              top="-60"
              left="30"
              rotation="-20"
              opacity="0.9    "
              scale="0.2"
              animationDelay="1000"
            ></FloatingShape>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1.0 }}
          transition={{
            duration: 1,
            ease: easeInOut,
            type: "spring",
            stiffness: 100,
          }}
          className="place-self-start"
        >
          <h2 className="text-[#FBA81F] font-bold text-[3.5em] text-right ">
            Developer<span className="text-white">.</span>
          </h2>
          <p className="text-white text-[1.1em]">
            I love developing software. I developed software profesionally
            during my time at <span className="text-red-500">J.D. Power</span>,
            where I coded for one of the largest data analytics companies in
            North America! Beyond that, I&apos;ve developed many side projects
            that go from musical applications to an ocean simulator! I love
            tackling new challenges that go beyond my scope of knowledge, and
            gaining new skills each and every day.
          </p>
        </motion.div>
      </div>
      {/* <motion.div
        className="w-[90%] h-[85%]"
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        <Carousel pauseOnHover slide={false} slideInterval={3000}>
          <div className="flex h-full content-center w-[85%] items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-[6rem] items-center place-items-center">
              <div>
                <h1 className="text-[24px] font-bold lowercase text-[#55a6a5] mb-[1rem]">
                  about me
                </h1>
                <h2 className="text-[25px] md:text-[3tpx] lg:text-[45px] md:leading-[3rem] leading-[2rem]  mb-[3rem] font-bold text-white">
                  a computer science{" "}
                  <span className="text-orange-400">student</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                  <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                  <p className="text-[1.2em] text-slate-300 w-[80%]">
                    Born in <span className="text-red-600">Japan</span> and
                    raised in various countries around the world, I'm a
                    university student currently studying computer science and
                    game design at{" "}
                    <span className="text-purple-600">Western University</span>!
                  </p>
                </div>
                <button></button>
              </div>
              <div className="lg:w-[30rem] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[30rem] w-[20rem] h-[20rem] relative">
                <Image
                  src="/images/japan.png"
                  alt="japan"
                  layout="fill"
                  objectFit="contain"
                  className="relative z-[11] w-[100%] h-[100%] object-contain"
                ></Image>
                <div className="absolute w-[100%] h-[100%] z-[10] bg-red-600 top-[-2rem] right-[-2rem] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex h-full content-center w-[85%] items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-[1rem] items-center place-items-center">
              <div className="lg:w-[30rem] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[30rem] w-[20rem] h-[20rem] relative ">
                <div className="w-[100%] h-[100%] z-[12] relative">
                  <Image
                    src="/images/endless.png"
                    alt="game"
                    layout="fill"
                    className="z-[11] w-[100%] h-[100%] object-cover rounded-full"
                  ></Image>
                  <div className="h-[100%] w-[100%] absolute top-0 right-[-88%] z-[20]">
                    <Image
                      src="/images/textgame.png"
                      alt="a game I made"
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[25px] md:text-[3tpx] lg:text-[45px] md:leading-[3rem] leading-[2rem] text-right  mb-[3rem] font-bold text-white">
                  <span className="text-orange-400">a software</span> developer
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                  <p className="text-[1.2em] text-slate-300 w-[80%] text-right">
                    I'm big into anything{" "}
                    <span className="text-blue-600">tech</span>. I've come to
                    love coding since starting in university, and now program
                    <span className="text-green-500"> games</span> and learn new
                    tech stacks in my free time!
                  </p>
                  <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                </div>
                <button></button>
              </div>
            </div>
          </div>
          <div className="flex h-full content-center w-[85%] items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-[6rem] items-center place-items-center">
              <div>
                <h2 className="text-[25px] md:text-[3tpx] lg:text-[45px] md:leading-[3rem] leading-[2rem]  mb-[3rem] font-bold text-white">
                  sports <span className="text-orange-400">and hobbies</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                  <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                  <p className="text-[1.2em] text-slate-300 w-[80%]">
                    I love playing sports like{" "}
                    <span className="text-blue-500"> badminton </span> and{" "}
                    <span className="text-orange-400"> table tennis</span> in my
                    free time! I also love playing the piano and I'm currently
                    in the beginners{" "}
                    <span className="text-green-400">dance</span> team at
                    Western!
                  </p>
                </div>
                <button></button>
              </div>
              <div className="lg:w-[30rem] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[30rem] w-[20rem] h-[20rem] relative">
                <Image
                  src="/images/hobby.jpg"
                  alt="hobbies"
                  layout="fill"
                  className="relative z-[11] w-[100%] h-[100%] object-cover rounded-full"
                ></Image>
                <div className="absolute w-[100%] h-[100%] z-[10] bg-yellow-600rounded-full"></div>
              </div>
            </div>
          </div>
        </Carousel>
      </motion.div> */}
    </div>
  );
};

export default AboutMe;
