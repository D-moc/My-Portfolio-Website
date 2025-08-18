import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "experience", name: "Experience" },
    { id: "skills", name: "Skills" },
    { id: "education", name: "Education" },
  ];

  // Detect scroll for sticky bg
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Auto-update activeSection
      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 150) current = link.name;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id, name) => {
    setActiveSection(name);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
                  w-full max-w-[1200px] mx-auto
                  border border-white/20 shadow-2xl 
                  backdrop-blur-xl backdrop-saturate-150
                  transition duration-300 font-poppins
                  px-6 py-3 rounded-full
                  ${
                    isScrolled
                      ? "bg-gradient-to-r from-[#0a0f1c]/90 via-[#1e293b]/90 to-[#0d0d0d]/90"
                      : "bg-gradient-to-r from-[#0a0f1c]/70 via-[#1e293b]/70 to-[#0d0d0d]/70"
                  }`}
    >
      <div className="flex items-center justify-between">
        {/* Active section name (Mobile) */}
        <div className="md:hidden text-lg font-semibold text-white">
          {activeSection}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 mx-auto">
          {links.map((link, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleScroll(link.id, link.name)}
              whileHover={{ scale: 1.1 }}
              className={`relative text-lg md:text-xl font-semibold transition-colors group ${
                activeSection === link.name
                  ? "text-amber-300"
                  : "text-white hover:text-amber-300"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* Hamburger (Mobile Right Side) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[110%] left-0 w-full 
                       rounded-2xl border border-white/20 
                       bg-gradient-to-r from-[#0a0f1c]/95 via-[#1e293b]/95 to-[#0d0d0d]/95
                       backdrop-blur-xl backdrop-saturate-150 shadow-xl p-5"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScroll(link.id, link.name)}
                  className={`text-lg font-medium ${
                    activeSection === link.name
                      ? "text-amber-300"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
