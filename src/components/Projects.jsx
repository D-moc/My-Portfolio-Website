import React, { useState } from "react";
import { motion } from "framer-motion";
import gyaanBhandarImg from "../assets/gyanbhandar.jpg";
import vitalTripImg from "../assets/vitaltrip.jpeg";
import aiChatbotImg from "../assets/aichatbot.jpg";

const projects = [
  {
    id: 1,
    title: "Gyaan Bhandar",
    description:
      "An online book store platform with search, categories, and secure checkout.",
    image: gyaanBhandarImg,
    tags: ["React", "Node.js", "MongoDB",],
    github: "https://github.com/D-moc/gyaan-bhandar",
    webapp: "https://gyaan-bhandar-demo.com",
  },
  {
    id: 2,
    title: "VitalTrip",
    description:
      "A trip planner that helps users create and organize travel itineraries with ease.",
    image: vitalTripImg,
    tags: ["React", "Tailwind", "MongoDB"],
    github: "https://github.com/D-moc/vitaltrip",
    webapp: "https://vitaltrip-demo.com",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description:
      "An intelligent chatbot designed to answer questions and assist users in real-time.",
    image: aiChatbotImg,
    tags: ["Python", "Flask"],
    github: "https://github.com/D-moc/ai-chatbot",
    webapp: "https://ai-chatbot-demo.com",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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

      {/* Projects Grid with Motion */}
      <motion.div
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="backdrop-blur-lg bg-white/5 border border-white/10 
                       rounded-2xl shadow-lg overflow-hidden cursor-pointer 
                       hover:shadow-amber-500/30 hover:-translate-y-2 
                       transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
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
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-amber-500/10 text-xs font-semibold 
                               text-amber-400 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 
                          rounded-2xl shadow-2xl w-[95%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-amber-400"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-3xl font-bold text-amber-400 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-amber-500/10 text-xs font-semibold 
                                 text-amber-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
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
