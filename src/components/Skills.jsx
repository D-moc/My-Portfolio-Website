import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "GSAP",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans relative 
                 bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center w-full justify-center gap-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-4xl font-bold text-white">SKILLS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg font-medium max-w-3xl text-center">
         My evolving skillset crafted from projects, challenges, and continuous learning.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 
                       rounded-2xl shadow-lg p-10 flex flex-col items-center 
                       hover:shadow-red-500/30 transition duration-300 
                       min-h-[350px]"
          >
            {/* Card Title */}
            <h3 className="text-2xl font-bold mb-6 text-red-400 text-center">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-amber-500/10 text-amber-300 text-sm font-semibold 
                             px-4 py-2 rounded-xl shadow-sm border border-amber-500/20
                             hover:bg-amber-500/20 hover:text-amber-200 
                             hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] 
                             transition duration-300 cursor-pointer"
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
