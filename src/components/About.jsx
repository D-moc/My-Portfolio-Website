import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileIcon from "../assets/image.jpg";
import resumeFile from "../assets/resume.pdf";
import Tilt from "react-parallax-tilt";


function About() {
  const [text] = useTypewriter({
    words: ["Frontend Developer","Backend Developer", "Aspiring Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="about"
      className="w-full min-h-screen pt-28 flex flex-col-reverse md:flex-row 
                 items-center justify-center gap-12 px-4 sm:px-6 md:px-12 lg:px-16 
                 bg-gradient-to-r from-[#0a0f1c]/80 via-[#2c1810]/80 to-[#0d0d0d]/80 
                 text-white overflow-hidden"
    >
      {/* Left Side - Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
          <span className="text-white-400">Dinesh Bishokarma</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
          {text}
          <Cursor cursorStyle="|" />
        </h2>

        <p className="text-white-400 leading-relaxed mb-5">
          I’m a frontend developer aiming to become a full-stack developer, with
          a strong interest in building clean, responsive, and user-friendly web
          applications. I enjoy bringing design and functionality together to
          create smooth and engaging digital experiences. I’m curious and
          self-motivated, always exploring new technologies and better ways of
          working, with the goal of growing into a well-rounded engineer who can
          build complete solutions from start to finish.
        </p>

        <a
          href={resumeFile}
          download="Dinesh_Resume.pdf"
          className="inline-block px-6 py-3 bg-gradient-to-r from-white-500 to-indigo-600 
                    hover:from-red-600 hover:to-indigo-700 
                  rounded-lg font-medium shadow-lg transition transform hover:scale-105 ml-0"
        >
          Resume Here
        </a>
      </div>

      {/* Right Side - Profile Image with Glow + Animation */}
      <div className="flex-shrink-0 flex justify-center md:justify-end relative">
        {/* Blurry glow behind image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-full 
                 bg-amber-500/30 blur-3xl animate-pulse"
          ></div>
        </div>

        {/* Animated Image */}
        <div className="relative z-10 animate-bounce-slow">
          <img
            src={profileIcon}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover 
                 border-4 border-amber-500 drop-shadow-[0_10px_20px_rgba(251,191,36,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
