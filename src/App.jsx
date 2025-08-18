import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
