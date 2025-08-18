import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const contacts = [
  { name: "Discord", icon: <FaDiscord />, link: "https://discord.com/users/dinesh.bk" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/imdineshbk" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/D-moc" },
  { name: "X", icon: <FaTwitter />, link: "https://x.com/imdineshbk" },
];

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-r from-[#0a0f1c]/80 via-[#1e293b]/80 via-[#2c1810]/80 to-[#0d0d0d]/80 
                 text-gray-300 py-12 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Shiny Bluish Blurry Line */}
        <div className="w-full max-w-4xl h-[2px] mb-10 rounded-full 
                        bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                        blur-[2px] shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-lg border border-white/10 
                         hover:text-amber-400 transition text-gray-200"
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-8 flex-wrap mb-6 text-base font-medium tracking-wide">
          {navLinks.map((nav, i) => (
            <a
              key={i}
              href={nav.link}
              className="hover:text-amber-400 transition text-gray-300"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-400 font-normal">
         
          <span className="text-400 font-bold"> © {new Date().getFullYear()}{" "} Dinesh Bishokarma. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
