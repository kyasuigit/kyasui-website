import React, { useState, useRef, useEffect } from "react";
import { animate, easeInOut, motion } from "framer-motion";

const Skills = () => {
  return (
    <div className=" bg-[#f3f2f2] pb-[5rem] h-[120vh] overflow-x-hidden flex justify-center overflow-hidden relative">
      {/* <img src="/images/checker pattern.svg" className="absolute"></img> */}
      <div className="w-[90%] pt-[4rem] md:pt-[10rem] h-[90%]">
        <div className="z-3 relative flex justify-between">
          <div className="absolute top-[18%] left-[0.2%] transform -translate-x-1/2 -translate-y-1/2 w-[2vw] h-[2vw] bg-[#5a5a5a] opacity-40 z-0"></div>

          <h1 className="heading text-start mb-[4rem] text-slate-800 text-[3.8em] relative">
            Skills<span className="text-[#fba81f]">.</span>
          </h1>
          <h1 className="heading text-start text-slate-800 text-[2.2em] mb-[2%] mr-[32%] self-end">
            Top skills<span className="text-[#fba81f]">.</span>
          </h1>
        </div>
        <div className="grid gap-[5vw] h-[90%] w-[100%] lg:grid-cols-2 sm:grid-cols-1 sm:grd-rows-2 place-items-center">
          <div className="flex-1  h-[100%] w-[100%] grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-4 sm:grid-cols-2 sm:grid-rows-6 place-items-center">
            <SkillCard
              name="Java"
              logoUrl="/images/java.png"
              backText="Java has been my go-to language for just about anything. I worked with it during internship as well!"
              index={1}
            ></SkillCard>
            <SkillCard
              name="Python"
              logoUrl="/images/python.png"
              backText="I've used python for many of my AI or Distributed Systems courses. I also love it for Leetcode!"
              index={2}
            ></SkillCard>
            <SkillCard
              name="JavaScript"
              logoUrl="/images/javascript.png"
              backText="I use javascript when doing anything web relatedin in some of my school projects too!"
              index={3}
            ></SkillCard>
            <SkillCard
              name="ReactJS"
              logoUrl="/images/react.png"
              backText="This website was built using React! It's my favourite JS framework."
              index={4}
            ></SkillCard>
            <SkillCard
              name="C/C++/C#"
              logoUrl="/images/cpp.png"
              backText="I used C and C++ extensively in my OS and OOP courses. I developed my capstone in C#"
              index={5}
            ></SkillCard>
            <SkillCard
              name="Flutter/Dart"
              logoUrl="/images/flutter.png"
              backText="My own project Roomies was developed in Flutter/Dart and I've come to love mobile dev!"
              index={6}
            ></SkillCard>
            <SkillCard
              name="MySQL"
              logoUrl="/images/mysql.svg"
              backText="I used SQL and MySQl extensively in my Databases course, but also during my internship."
              index={7}
            ></SkillCard>
            <SkillCard
              name="Selenium"
              logoUrl="/images/selenium.png"
              backText="Selenium was part of the automation stack that my team used at J.D. Power."
              index={8}
            ></SkillCard>
            <SkillCard
              name="Cucumber"
              logoUrl="/images/cucumber.png"
              backText="I used Cucumber to write a majority of my test automation at J.D. Power."
              index={9}
            ></SkillCard>
            <SkillCard
              name="Git"
              logoUrl="/images/github.png"
              backText="Git is everywhere for me! Work, school, you name it. "
              index={10}
            ></SkillCard>
            <SkillCard
              name="NodeJS"
              logoUrl="/images/node.png"
              backText="This website was developed using node! I also used it in my software architecture course."
              index={11}
            ></SkillCard>
            <SkillCard
              name="Redis"
              logoUrl="/images/redis.png"
              backText="Another database system that I love using!"
              index={12}
            ></SkillCard>
          </div>
          <div className=" flex-1 h-[90%] w-[100%] flex flex-col items-center gap-[5vh] justify-start relative">
            <SkillMeter
              name="Java"
              pctg={78}
              color1="bg-[#2673a7]"
              color2="bg-[#3598db]"
              imageUrl="/images/java.png"
            ></SkillMeter>
            <SkillMeter
              name="Python"
              pctg={75}
              color1="bg-green-500"
              color2="bg-green-400"
              imageUrl="/images/python.png"
            ></SkillMeter>
            <SkillMeter
              name="JavaScript"
              pctg={72}
              color1="bg-yellow-300"
              color2="bg-yellow-200"
              imageUrl="/images/javascript.png"
            ></SkillMeter>
            <SkillMeter
              name="ReactJS"
              pctg={70}
              color1="bg-blue-400"
              color2="bg-blue-300"
              imageUrl="/images/react.png"
            ></SkillMeter>
            <SkillMeter
              name="Selenium"
              pctg={69}
              color1="bg-emerald-700"
              color2="bg-emerald-500"
              imageUrl="/images/selenium.png"
            ></SkillMeter>
            <SkillMeter
              name="MySQL"
              pctg={68}
              color1="bg-slate-700"
              color2="bg-slate-400"
              imageUrl="/images/mysql.svg"
            ></SkillMeter>
            <SkillMeter
              name="C/C++/C#"
              pctg={66}
              color1="bg-purple-500"
              color2="bg-purple-400"
              imageUrl="/images/c.png"
            ></SkillMeter>
          </div>
        </div>
      </div>
    </div>
  );
};
interface SkillCard {
  name: string;
  logoUrl: string;
  backText: string;
  index: number;
}

const SkillCard: React.FC<SkillCard> = ({ name, logoUrl, backText, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const fadeInAnimationvariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.div
      className="flip-card w-[100%] h-[100%]"
      onClick={handleFlip}
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.3, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="w-[10vw] h-[10vw] max-w-[10rem] flip-card-inner"
      >
        <div className="flip-card-front bg-[#ffbc57] py-[1rem] px-[1rem] aspect-square rounded-lg shadow-lg cursor-pointer flex flex-col items-center justify-center gap-[2vh]">
          <div className="h-[50%] w-[100%] flex items-center justify-center">
            <img
              src={logoUrl}
              className="w-[100%] h-[100%] object-scale-down"
            ></img>
          </div>

          <span className=" text-white text-[1cqw]">{name}</span>
        </div>
        <div className="flip-card-back bg-gradient-to-br from-indigo-300 to-violet-300 py-[1rem] px-[1rem] aspect-square rounded-lg shadow-lg cursor-pointer flex flex-col items-center justify-center gap-[2vh] ">
          <span className="h-[100%] w-[100%] flex items-center justify-center text-black text-center text-[0.9em]">
            {backText}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface Skill {
  name: string;
  pctg: number;
  color1: string;
  color2: string;
  imageUrl: string;
}

const SkillMeter: React.FC<Skill> = ({
  name,
  pctg,
  color1,
  color2,
  imageUrl,
}) => {
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressTextRef.current != null) {
      animate(0, pctg, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current!.textContent = cv.toFixed(0);
        },
      });
    }
  }, [pctg]);

  return (
    <div className="bg-white h-[4vh] w-[80%] rounded-md relative flex justify-end items-center">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pctg}%` }}
        transition={{ duration: 2, ease: "easeInOut" }}
        // style={{ width: `${pctg}%` }}
        className={`h-[100%] absolute ${color2} rounded-r-sm rounded-l-md top-0 left-0`}
      ></motion.div>
      <div
        className={`h-[100%] w-[25%] absolute rounded-l-md ${color1} flex items-center justify-start top-0 left-0`}
      >
        <span className="text-white font-semibold pl-[1vw]">{name}</span>
      </div>
      <span
        className="font-semibold text-gray-400 pr-[0.6vw]"
        ref={progressTextRef}
      >
        {pctg}
      </span>
    </div>
  );
};

export default Skills;
