import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaLinux } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRos,
  SiExpress,
  SiWebstorm,
  SiJavascript,
} from "react-icons/si";

import ecesa from "../assets/ecesa.jpg";
import tmrt from "../assets/tmrt.jpg";

const skillIcons = {
  JavaScript: <SiJavascript className="text-yellow-400 text-sm" />,
  React: <FaReact className="text-blue-400 text-sm" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-sm" />,
  Python: <FaPython className="text-green-400 text-sm" />,
  Linux: <FaLinux className="text-gray-300 text-sm" />,
  ROS2: <SiRos className="text-pink-400 text-sm" />,
  Express: <SiExpress className="text-gray-300 text-sm" />,
  "Web Scraping": <SiWebstorm className="text-sky-400 text-sm" />,
};

const experiences = [
  {
    role: "Joint Technical Head",
    company: "ECESA",
    period: "Aug 2025 – present",
    description: [
      "Led technical workshops and coding competitions for students.",
      "Mentored juniors in software and electronics projects.",
      "Improved team collaboration through knowledge-sharing sessions.",
    ],
    skills: ["JavaScript", "React", "Express", "Tailwind"],
    image: ecesa,
  },
  {
    role: "Hardware Team Member",
    company: "TMRT",
    period: "Aug 2024 – July 2025",
    description: [
      "Developed a fish-catching drone using ROS2 navigation.",
      "Contributed to research papers and technical documentation.",
      "Implemented web scraping solutions for robotics data collection.",
    ],
    skills: ["Python", "Linux", "ROS2", "Web Scraping"],
    image: tmrt,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen px-[8vw] md:px-[6vw] lg:px-[12vw] py-24 font-sans 
      relative bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 mb-20"
      >
        <div className="flex items-center justify-center gap-4 w-full">
          <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></span>
          <h2 className="text-4xl font-bold text-white tracking-wide">
            EXPERIENCE
          </h2>
          <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></span>
        </div>
        <p className="text-gray-300 mt-4 text-lg font-medium max-w-3xl text-center">
          A journey of learning and impact across multiple organizations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Rope (Timeline Line) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-amber-200 via-amber-200/80 to-transparent rounded-full " />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative mb-24 flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Card Animation Only */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`w-full sm:w-[48%] ${
                  isLeft ? "sm:pr-12 sm:text-left" : "sm:pl-12 sm:text-left"
                }`}
              >
                <div
                  className="relative p-7 sm:p-8 rounded-lg border border-amber-500/30 
                  bg-[#0a0f1c]/90 shadow-[0_0_25px_rgba(255,193,7,0.12)] 
                  hover:shadow-[0_0_30px_rgba(255,193,7,0.25)] 
                  transition-all duration-300 text-gray-200"
                >
                  {/* Period Badge */}
                  <div
                    className={`absolute top-0 ${
                      isLeft
                        ? "right-0 rounded-bl-lg"
                        : "left-0 rounded-br-lg"
                    } bg-amber-600/30 text-amber-300 text-xs font-semibold px-3 py-1`}
                  >
                    {exp.period}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-amber-400 mb-4">
                    {exp.company}
                  </p>

                  {/* Bullet Points aligned left */}
                  <ul className="list-disc pl-5 text-gray-300 space-y-2 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-amber-500/10 
                        text-amber-400 text-xs font-semibold px-3 py-2 rounded-sm 
                        border border-amber-500/20 shadow-sm shadow-amber-400/10"
                      >
                        {skillIcons[skill] || (
                          <SiJavascript className="text-yellow-400 text-sm" />
                        )}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Static Image Node on the Rope */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-amber-200 shadow-[0_0_20px_rgba(255,200,0,0.7)] flex items-center justify-center overflow-hidden border-2 border-amber-200">
                <img
                  src={exp.image}
                  alt="role-icon"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
