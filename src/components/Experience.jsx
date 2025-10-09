import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

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
    skills: ["JavaScript", "React JS","Tailwind CSS"],
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
    skills: ["Python","Linux", "ROS2", "Web Scraping"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen px-[8vw] md:px-[6vw] lg:px-[12vw] py-24 sm:py-28 font-raleway
                 relative bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 mb-16"
      >
        <div className="flex items-center justify-center gap-4 w-full">
          <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></span>
          <h2 className="text-4xl font-bold text-white tracking-wide">
            EXPERIENCE
          </h2>
          <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 text-lg font-medium max-w-3xl text-center">
          A journey of learning and impact across multiple organizations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto border-l-2 border-amber-500/40 pl-6 sm:pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 relative group cursor-pointer"
          >
            {/* Icon */}
            <span
              className="absolute -left-[26px] sm:-left-[34px] 
                             bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 
                             text-gray-950 p-2 rounded-full shadow-lg shadow-amber-500/40 
                             group-hover:scale-125 transition-transform duration-300"
            >
              <FaBriefcase className="text-sm sm:text-base" />
            </span>

            {/* Content */}
            <div
              className="p-5 sm:p-7 rounded-lg border border-amber-500/30 
                            bg-gray-900/60 shadow-lg shadow-amber-500/10 
                            group-hover:shadow-amber-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-lg font-semibold text-red-400">
                {exp.company}
              </p>
              <span className="text-sm text-gray-400 italic">{exp.period}</span>

              {/* Bullet Points */}
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300 text-base leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-amber-500/10 text-amber-400 text-xs font-semibold 
                               px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
