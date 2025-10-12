import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaHtml5, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFramer, SiJavascript, SiExpress } from "react-icons/si";

import gyaanBhandaarImg from "../assets/gyanbhandaar.jpg";
import vitalTripImg from "../assets/VitalTrip.jpg";
import abhiyantrikiImg from "../assets/abhiyantrikiecesa.jpg";

// 🔹 Tech icons mapping
const techIcons = {
  "React JS": <FaReact className="text-blue-400 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-2xl" />,
  "Bootstrap": <FaBootstrap className="text-purple-500 text-2xl" />,
  "HTML5": <FaHtml5 className="text-orange-500 text-2xl" />,
  "CSS3": <FaCss3Alt className="text-blue-500 text-2xl" />,
  "MongoDB": <SiMongodb className="text-green-500 text-2xl" />,
  "Node JS": <FaNodeJs className="text-green-400 text-2xl" />,
  "Framer Motion": <SiFramer className="text-pink-400 text-2xl" />,
  "Express JS": <SiExpress className="text-gray-300 text-2xl" />,
  "Typing effect": <SiFramer className="text-pink-400 text-2xl" />,
  "Animation": <SiFramer className="text-purple-400 text-2xl" />,
  "JavaScript": <SiJavascript className="text-yellow-400 text-2xl" />,
};

// 🔹 Project data
const projects = [
  {
    id: 1,
    title: "Gyaan Bhandaar",
    description:
      "A MERN stack eBook platform for browsing, searching, and purchasing digital books seamlessly.",
    image: gyaanBhandaarImg,
    tags: ["MongoDB", "Express JS", "React JS", "Node JS"],
    github: "https://github.com/D-moc/gyaan-bhandar",
    webapp: "https://gyaan-bhandar-demo.com",
  },
  {
    id: 2,
    title: "VitalTrip",
    description:
      "VitalTrip is a dynamic travel planning web app that helps users organize trips, manage itineraries, and discover destinations.",
    image: vitalTripImg,
    tags: ["MongoDB", "Express JS", "React JS", "Node JS"],
    github: "https://github.com/D-moc/VitalTrip.git",
    webapp: "https://vital-trip-h57z-ej21p1154-d-mocs-projects.vercel.app/",
  },
  {
    id: 3,
    title: "E-cesa Events",
    description:
      "E-cesa Events is an official college fest website designed to showcase events, competitions, and schedules interactively.",
    image: abhiyantrikiImg,
    tags: ["Tailwind CSS", "JavaScript", "React JS", "Typing effect"],
    github: "https://github.com/D-moc/E-CESA-Abhiyantriki-Website.git",
    webapp: "https://e-cesa-abhiyantriki-website.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans relative 
                 bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center w-full justify-center gap-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <p className="text-gray-300 mt-6 text-lg font-medium max-w-3xl text-center">
          An overview of my academic and professional projects across diverse technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#121826]/95 border-[3px] border-white/20 
                       rounded-2xl shadow-2xl overflow-hidden cursor-pointer 
                       hover:shadow-amber-500/30 hover:border-amber-400/50 
                       hover:-translate-y-2 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } },
            }}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-bold italic text-white mb-3 text-center">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-center leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Icons - smaller and centered */}
              <div className="flex justify-center flex-wrap gap-3 select-none pointer-events-none">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-amber-500/10 
                               rounded-lg w-10 h-10 border border-white/20"
                    title={tag}
                  >
                    {techIcons[tag] || <SiJavascript className="text-yellow-400 text-2xl" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="backdrop-blur-xl bg-[#121826]/95 border-[3px] border-white/20 
                          rounded-2xl shadow-2xl w-[95%] max-w-3xl h-[85vh] overflow-hidden relative flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-amber-400"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col justify-center">
              <div className="w-full flex justify-center px-4 h-[40%]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] h-full object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="p-6 lg:p-8 h-[60%] overflow-y-auto">
                <h3 className="text-3xl font-bold italic text-amber-400 mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {selectedProject.description}
                </p>

                {/* Icons in Modal */}
                <div className="flex justify-center flex-wrap gap-3 mb-6 select-none pointer-events-none">
                  {selectedProject.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-amber-500/10 
                                 rounded-lg w-10 h-10 border border-white/20"
                      title={tag}
                    >
                      {techIcons[tag] || <SiJavascript className="text-yellow-400 text-2xl" />}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-gray-700 text-gray-300 
                               px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-amber-500 hover:bg-amber-600 text-white 
                               px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
