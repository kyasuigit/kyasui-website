import React from "react";
import Image from "next/image";
import WaterDropGrid from "./WaterDropGrid";
import { Button, TextInput, Textarea } from "flowbite-react";
import { easeInOut, easeOut, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    alert("Your email has been sent!");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Your email has been sent! :)");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-[140vh] w-[100vw] bg-[#fafafa]">
      <div className="w-[100%] h-[55%] bg-[#f2f2f2] shadow-lg flex justify-around mx-auto items-center">
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <WaterDropGrid gridid={2}></WaterDropGrid>
        </motion.div>
        <div className="w-[55%] h-[100%] flex relative justify-center align-center ">
          <motion.div
            className="w-[45%] h-[100%] flex flex-col self-center justify-center"
            initial={{ x: -500, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <h1 className="font-bold text-[5em] text-[#444444] leading-snug">
              Contact me.
            </h1>
            <h3 className="text-[1.4em] text-gray-600">
              Reach out to me through any of the social media links below!
            </h3>
            <div className="grid grid-cols-2 h-[30%] gap-0 w-[100%] place-items-start mt-[4rem]">
              <a
                href="https://www.linkedin.com/in/kohei-yasui/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex font-semibold text-blue-600 text-[1.2em] w-[100%] items-center">
                  <div className="w-[2rem] h-[2rem] relative mr-[0.8rem]">
                    <Image
                      src="/images/linkedin.png"
                      alt="linkedin"
                      layout="fill"
                      className="object-fit"
                    ></Image>
                  </div>

                  <span>LinkedIn</span>
                </div>
              </a>
              <a
                href="https://github.com/kyasuigit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex font-semibold text-slate-700 text-[1.2em] w-[100%] items-center">
                  <div className="w-[2rem] h-[2rem] relative mr-[0.8rem]">
                    <Image
                      src="/images/github.png"
                      layout="fill"
                      className="object-fit"
                    ></Image>
                  </div>
                  Github
                </div>
              </a>
              <a
                href="https://www.instagram.com/kohei.yasui/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex font-semibold text-purple-600 text-[1.2em] w-[100%] items-center">
                  <div className="w-[2rem] h-[2rem] relative mr-[0.8rem]">
                    <Image
                      src="/images/instagram.webp"
                      layout="fill"
                      className="object-fit"
                    ></Image>
                  </div>
                  Instagram
                </div>
              </a>
              <a
                href="https://www.facebook.com/koheiyasui830/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex font-semibold text-blue-600 text-[1.2em] w-[100%] items-center">
                  <div className="w-[2rem] h-[2rem] relative mr-[0.8rem]">
                    <Image
                      src="/images/facebook.png"
                      layout="fill"
                      className="object-fit"
                    ></Image>
                  </div>
                  Facebook
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-[50%] h-[100%] relative "
            initial={{ x: 500, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <div className="z-[21] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100%] flex justify-center">
              <img src="/images/blob.svg"></img>
            </div>
            <div className="z-[22] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[100%] flex justify-center">
              <img src="/images/blob2.svg"></img>
            </div>
            <div className="z-[23] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[16vw] h-[16vw] aspect-square flex justify-center">
              <Image
                src="/images/kohei.png"
                alt="Kohei"
                width={800}
                height={800}
                className="rounded-full"
              ></Image>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="self-start"
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <WaterDropGrid gridid={3}></WaterDropGrid>
        </motion.div>
      </div>
      <div className="w-[100%] h-[45%] flex items-center justify-center overflow-hidden">
        <div className="w-[60%] h-[70%] flex flex-col gap-[1.4rem]">
          <motion.h3
            initial={{ x: -500, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="font-semibold text-[#444444] text-[2.4em]"
          >
            Or... send me an email!
          </motion.h3>
          <form onSubmit={sendEmail}>
            <div className="grid grid-cols-2 self-center w-[100%] gap-[2rem] h-[40%]">
              <motion.div
                initial={{ x: -500, opacity: 0.4 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="flex flex-col flex-1 h-[100%] justify-between"
              >
                <div>
                  <label for="name">Name</label>
                  <TextInput
                    id="from_name"
                    name="from_name"
                    placeholder="John Doe"
                  ></TextInput>
                </div>
                <div>
                  <label for="email">Email</label>
                  <TextInput
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                  ></TextInput>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 500, opacity: 0.4 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="flex flex-col"
              >
                <label for="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  className="flex-1"
                  placeholder="Hi Kohei! I saw your portfolio website and was wondering..."
                ></Textarea>
              </motion.div>
              <div></div>
              <motion.div
                initial={{ y: 100, opacity: 0.4 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeOut }}
                className="place-self-end"
              >
                <button className="w-[8vw] h-[4vh] bg-gradient-to-r rounded-sm from-[#F87537] to-[#FBA81F] hover:scale-105 transition-all duration-200">
                  <span className="text-white font-semibold text-lg">
                    Submit
                  </span>
                </button>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
