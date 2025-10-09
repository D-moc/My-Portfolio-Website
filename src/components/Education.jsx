import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Electronics and Computer Engineering (EXCP)",
    institution: "K.J. Somaiya College of Engineering",
    duration: "2023 - 2027",
    grade: "8.37 CGPA",
    description:
      "Pursuing my undergraduate degree with a focus on Electronics and Computer Engineering, gaining knowledge in hardware, software, and system design.",
  },
  {
    degree: "HSC (XII) - PCM with Computer Science",
    institution: "Mother Mary junior College, Mira Road",
    duration: "Apr 2020 - Mar 2022",
    grade: "68.33%",
    description:
      "Completed my 12th in PCM with Computer Science from HSC Board with strong fundamentals in Physics, Chemistry, Math, and Computer Science.",
  },
  {
    degree: "SEE (X) - Computer Engineering of 2 years ",
    institution: "DurgaLaxmi Model Secondary School, Nepal",
    duration: "Apr 2018 - Mar 2020",
    grade: "95%",
    description:
      "Completed my 10th General with Computer Engineering Subjects.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 relative w-full
                 bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Inner container for padding */}
      <div className="px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center w-full justify-center gap-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <h2 className="text-4xl font-bold text-white tracking-wide">
              EDUCATION
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          {/* Subtitle */}
          <p className="text-gray-300 mt-6 text-lg font-medium max-w-3xl text-center">
            Milestones of my academic journey from school to undergraduate.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Rope */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-amber-500 to-amber-800 h-full rounded-full"></div>

          <div className="flex flex-col gap-20">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-[95%] md:w-[48%] backdrop-blur-xl bg-white/5 border-5 border-white/20 
                              rounded-xl shadow-lg p-8 relative z-10 hover:shadow-amber-500/40 
                              transition duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap className="text-red-400 text-2xl" />
                    <h3 className="text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-white font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">{edu.duration}</p>
                  <p className="text-sm text-gray-300 mb-3">
                    <span className="font-semibold text-amber-300">Grade:</span>{" "}
                    {edu.grade}
                  </p>
                  <p className="text-base text-gray-200 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Node in rope */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full 
                                bg-amber-500 border-4 border-[#0a0f1c]"
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
