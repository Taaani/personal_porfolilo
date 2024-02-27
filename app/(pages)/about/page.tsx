import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
// import { myImage } from "/image.png"

export const metadata: Metadata = {
  title: "About me ",
  description:
    "I am passionate software engineer and MERN stack developer with a mission to transform ideas into reality. I am an obsessive attention to detail and an unwavering love for crafting digital solutions. I am excited to collaborate with visionary teams and organizations that share a passion for innovation and the drive to change the world through technology.I have extensive experience in all aspects of the MERN stack, including React, Node.js, Express.js, and MongoDB. I am also proficient in a variety of other front-end and back-end technologies, such as HTML, CSS, JavaScript, Python, and SQL.",
  keywords:
    "Software Engineer, Web Developer, MERN Stack Developer, Full Stack Developer, Front-End Developer, Back-End Developer, Web Development Services, MERN Stack Development Services, Full Stack Development Services, Front-End Development Services, Back-End Development Services, Custom Web Development, Custom Software Development",
  alternates: {
    canonical: "/about",
  },
};

function About() {
  return (
    <>
      <div className="overflow-y-scroll md:overflow-y-hidden max-h-[70vh] md:max-h-none scrollBar pb-8">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold  leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About me
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between mt-8 sm:mt-0 ">
          <div className="w-full lg:w-1/2 flex justify-center self-start">
            <div className="rounded-xl  overflow-hidden relative text-center p-10 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl about-card glass dark:border-gray-600 ">
              <span className="about-card-span-1"></span>
              <span className="about-card-span-2"></span>
              <div className="text-gray-500 group-hover:scale-105 transition-all">
                <div className="relative w-48 m-1">
                  <Image
                    src={"/image.jpg"}
                    alt="author"
                    className="object-cover rounded-xl cursor-pointer uppercase px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_hsl(var(--primary)),-0.5rem_-0.5rem_black] dark:hover:shadow-[0.5rem_0.5rem_hsl(var(--primary)),-0.5rem_-0.5rem_white] transition"
                    height={275}
                    width={265}
                  />
                </div>
              </div>
              <div className="group-hover:pb-10 transition-all duration-500 delay-200 mt-12">
                <h1 className="font-semibold text-gray-700 dark:text-white z-10">
                  Muhammad Tahir Siddique
                </h1>
                <p className="text-gray-500 text-sm dark:text-white z-10">
                  IT Professional
                </p>
              </div>
              <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                  <a
                    href="https://github.com/taaani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="mailto:tahirsiddique535@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200"
                  >
                    <AiFillMail />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/taaani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center ">
            <div
              className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0 md:overflow-y-scroll scrollBar md:max-h-[55vh]`}
            >
              <p className={`text-[12px] text-white-200 `}>Introduction</p>
              <div className={`relative top-[20px]`}>
                <h1 className={`text-[35px] font-bold mb-[10px]`}>
                  Hi ✌️ I&apos;m M. Tahir Siddique
                </h1>
                <br />
                <div className="p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                  <p className="text-lg border-l-green-200 p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                    A dedicated Information Technology student and a passionate
                    MERN stack developer with expertise in virtualization,
                    networking, and cloud computing. 🌟
                  </p>
                  <p className="text-lg border-l-green-200 p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                    With a keen eye for detail and a fervent love for coding, I
                    strive to translate concepts into functional digital
                    solutions. My dedication to coding goes beyond mere tasks;
                    it's a commitment to creating impactful technological
                    innovations.
                  </p>
                  <p className="text-lg border-l-green-200 p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                    ⚙️ I firmly believe that being an exceptional developer
                    entails more than just writing code; it involves
                    comprehending complex problems, designing elegant solutions,
                    and perpetually enhancing skills to remain at the forefront
                    of technology.
                  </p>
                  <p className="text-lg border-l-green-200 p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                    🌍 I am enthusiastic about collaborating with
                    forward-thinking teams and organizations that share a vision
                    for innovation and are committed to leveraging technology to
                    change the world.
                  </p>
                  <p className="text-lg border-l-green-200 p-4 text-[15px] text-white-200 px-5 bg-dark-400 border-solid">
                    Let's connect and create something extraordinary together.
                    Don't hesitate to reach out, and let's transform ideas into
                    digital marvels! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// https://api.github.com/users/UsmanMERN/repos

// get repest to get all github data
