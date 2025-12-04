import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const allSkills = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJsSquare className="text-yellow-400" />,
  <SiTailwindcss className="text-cyan-400" />,
  <FaReact className="text-blue-400" />,
  <SiFramer className="text-pink-400" />,
  <FaNodeJs className="text-green-500" />,
  <SiExpress className="text-gray-300" />,
  <SiMongodb className="text-green-400" />,
  <SiPostgresql className="text-blue-400" />,
  <FaJava className="text-red-500" />,
  <FaPython className="text-green-300" />,
  <FaGitAlt className="text-orange-400" />,
  <FaGithub className="text-gray-300" />,
  <FaFigma className="text-pink-500" />,
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 px-[8vw] md:px-[6vw] lg:px-[12vw]  relative 
                 overflow-hidden bg-gradient-to-r from-[#0a0f1c]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center w-full justify-center gap-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-4xl font-bold text-white">SKILLS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg font-medium max-w-3xl text-center">
          A dynamic display of my technical toolkit, continuously growing and evolving.
        </p>
      </div>

      {/* Infinite Scroll Row */}
      <div className="relative w-full overflow-hidden">
        {/* Row 1 - Left to Right */}
        <motion.div
          className="flex gap-10 py-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...allSkills, ...allSkills].map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-20 h-20 rounded-2xl 
                         bg-amber-500/10 border border-amber-500/20 shadow-lg 
                         hover:scale-110 hover:shadow-amber-500/40 transition duration-300"
            >
              {React.cloneElement(icon, { className: `${icon.props.className} text-4xl` })}
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left */}
        <motion.div
          className="flex gap-10 py-8 w-max mt-6 opacity-70"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...allSkills, ...allSkills].map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-20 h-20 rounded-2xl 
                         bg-blue-500/10 border border-blue-500/20 shadow-lg 
                         hover:scale-110 hover:shadow-blue-400/40 transition duration-300"
            >
              {React.cloneElement(icon, { className: `${icon.props.className} text-4xl` })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
