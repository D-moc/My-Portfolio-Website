import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind",
      "Bootstrap",
      "React JS",
      "Redux",
      "GSAP",
    ],
  },
  {
    title: "Backend",
    skills: ["Node JS", "Express JS", "MongoDB", "PostgreSQL", "MySQL",],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "C++","C",],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code",],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans relative 
                 bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center w-full justify-center gap-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-4xl font-bold text-white">SKILLS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg font-medium max-w-3xl text-center">
          My evolving skillset crafted from projects, challenges, and continuous
          learning.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border-5 border-white/20 
                       rounded-xl shadow-lg p-6 flex flex-col items-center 
                       hover:shadow-red-500/40 transition duration-300 
                       min-h-[300px] max-h-[300px]"
          >
            {/* Card Title in Box */}
            <div className="mb-6 px-5 py-2 bg-red-500/10 border-2 border-red-400/50 rounded-md">
              <h3 className="text-lg font-extrabold text-red-400 tracking-wide text-center">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid (exact 2 rows) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-amber-500/10 text-amber-300 text-xs font-semibold 
                             px-2 py-1 rounded-md shadow-sm border border-amber-500/30
                             hover:bg-amber-500/20 hover:text-amber-200 
                             hover:shadow-[0_0_10px_rgba(251,191,36,0.6)] 
                             transition duration-300 cursor-pointer text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
