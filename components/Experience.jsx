import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import {
  motion,
  useAnimation,
  useScroll,
  useMotionValue,
  useTransform,
  easeInOut,
} from "framer-motion";
import FloatingShape from "./FloatingShape";

const Experience = () => {
  const [isUp, setIsUp] = useState(true);
  const controls = useAnimation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: isUp ? -2 : 2,
      transition: {
        duration: 1,
        ease: "easeInOut", // You can experiment with different easing functions
      },
    });
  }, [isUp, controls]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="pt-[8rem] md:pt-[8rem] h-[120vh] pb-[8rem] bg-[#252525] items-start flex justify-center relative"
      ref={ref}
    >
      <div>
        <FloatingShape
          svgUrl="/images/square.svg"
          bobTime="5"
          bobInterval="1200"
          top="0"
          left="10"
          rotation="33"
          opacity="0.5"
          scale="0.2"
          animationDelay="1000"
          dir="bot"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/dots.svg"
          bobTime="4"
          bobInterval="1200"
          top="80"
          left="1"
          rotation="112"
          opacity="0.5"
          scale="0.15"
          animationDelay="800"
          dir="bot"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/hexagon.svg"
          bobTime="4"
          bobInterval="1200"
          top="10"
          left="85"
          rotation="112"
          opacity="0.5"
          scale="0.12"
          animationDelay="1600"
          dir="bot"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/hexagon.svg"
          bobTime="4"
          bobInterval="1200"
          top="70"
          left="15"
          rotation="144"
          opacity="0.5"
          scale="0.14"
          animationDelay="500"
          dir="bot"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/dots.svg"
          bobTime="4"
          bobInterval="1200"
          top="77"
          left="70"
          rotation="254"
          opacity="0.5"
          scale="0.20"
          animationDelay="20"
          dir="bot"
        ></FloatingShape>

        <FloatingShape
          svgUrl="/images/donut.svg"
          bobTime="4"
          bobInterval="1200"
          top="40"
          left="90"
          rotation="112"
          opacity="0.6"
          scale="0.116"
          animationDelay="1200"
          dir="bot"
        ></FloatingShape>
      </div>
      <div className="w-[90%] mt-[7vh] relative">
        <motion.div
          className="absolute top-[4%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 w-[2vw] h-[2vw] bg-[#5a5a5a] opacity-90 z-0"
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 0.9 }}
          transition={{ duration: 1, ease: easeInOut }}
        ></motion.div>

        <motion.div
          className="z-3"
          initial={{ y: -150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <h1 className="heading text-start mb-[4rem] text-slate-100 text-[3.8em] relative">
            Work Experience<span className="text-[#fba81f]">.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-[12vh] gap[1.2vw]">
          <motion.div
            className="text-slate-100 flex-1 flex flex-col"
            initial={{ x: -500, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: easeInOut,
            }}
          >
            <h2 className="font-bold text-[2.2em] text-orange-400 ">
              Software QA Automation Engineer Intern
            </h2>
            <h3 className="font-semibold text-gray-100 text-[1.2em] italic">
              May 2022 - September 2023
            </h3>
            <div className="my-[1.0rem]"></div>
            <p className="text-gray-400 italic w-[100%]">
              Working as an intern on the CPP team, I developed and maintained
              code automation for one of the largest data analytics and consumer
              intelligence companies in North America.
            </p>
            <div className="my-[1.6rem] "></div>
            <ul className="list-disc w-[95%] justify-self-end self-end text-gray-300">
              <li className="mb-[1.2rem]">
                Developed and maintained automation projects for software
                applications using Java, Selenium WebDriver, Cucumber, and the
                Serenity library.
              </li>
              <li className="mb-[1.2rem]">
                Led the test automation development of the three components of
                the Batch 2.0 servics, testing the Batch API with 96%+ test
                coverage.
              </li>
              <li>
                Automated and debugged over 30 API microservices and business
                services used by numerous automobile companies, increasing
                software quality and tesing capabilities.
              </li>
            </ul>
            <div className="my-[1.7rem]"></div>
            <div className="flex justify-start gap-[0.8vw] text-[0.95em]">
              <div className="w-[10%] h-[100%]">
                <img src="/images/java.png" className=""></img>
              </div>
              <div className="flex justify-center w-[10%] h-[100%]">
                <img src="/images/selenium2.png" className="w-[60%]"></img>
              </div>
              <div className="flex justify-center w-[10%] h-[100%]">
                <img src="/images/cucumber.png" className="w-[60%]"></img>
              </div>
              <div className="flex justify-center w-[10%] h-[100%]">
                <img src="/images/serenity.png" className="w-[60%]"></img>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-1 justify-center items-center"
            initial={{ x: 500, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1.0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <div
              className="flip-card w-[80%] h-[100%] flex items-center justify-center relative cursor-pointer"
              onClick={handleFlip}
            >
              <motion.div
                className="flip-card-inner w-[100%] h-[100%]"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                <motion.div
                  className="flip-card-front w-[100%] h-[100%] bg-cover rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center"
                  initial={{ y: 0 }}
                  animate={controls}
                >
                  <Image
                    src="/images/jdpower.webp"
                    alt="jdpower"
                    width={450}
                    height={450}
                  ></Image>
                </motion.div>
                <div className="flip-card-back w-[100%] h-[100%]  bg-cover bg-center rounded-xl bg-[url('/images/jdpowerbg.jpg')] relative overflow-hidden flex">
                  <div className="bg-black absolute w-[50%] h-[100%] left-[-15%] opacity-[70%] scale-150 rotate-[10deg]"></div>
                  <div className=" z-[10] w-[50%] px-[1.2vw]  flex flex-col justify-center">
                    <div className="text-blue-500 font-bold text-[2em] mb-[1rem] ">
                      Data Analytics and Market Research
                    </div>
                    <ul className="list-disc text-gray-300 px-[1.4vw]">
                      <li>
                        Conducts automobile and healthcare consumer behaviour
                        research.
                      </li>
                      <li>
                        Large player in big data, artificial intelligence and
                        algorithmic modelling.
                      </li>
                      <li>
                        Known worldwide for their &quot;J.D. Power Award&quot;
                      </li>
                    </ul>
                    <div className="flex h-[20%] items-end">
                      <button
                        className="self-end bg-gradient-to-r py-[1vh] px-[1vw] rounded-md from-[#c21f02] to-[#e0423d] hover:scale-105 transition-all duration-200"
                        onClick={() => {
                          openInNewTab("https://canada.jdpower.com/");
                        }}
                      >
                        <span className="text-white font-semibold text-lg">
                          Visit website
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
