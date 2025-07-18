import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Keerthi Sure
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer who loves crafting clean, scalable web
            applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#projects"
              to="/projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              to="/contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:bg-blue-500/10"
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-center space-x-4 space-y-4 my-4">
            <a
              href="https://drive.google.com/file/d/11FiI2tbE773YGy6y8NcRbfLoEa9QfciK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:color-blue-500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
