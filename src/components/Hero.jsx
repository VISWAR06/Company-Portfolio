import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import profile from "../assets/viswa.jpg";
import resume from "../assets/resume.pdf"; // ✅ import resume here

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      id="hero"
    >
      {/* Profile Image */}
      <div className="mb-6">
        <img
          src={profile}
          alt="Viswa R"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-purple-500 object-cover"
        />
      </div>

      <TypeAnimation
        sequence={[
          "Full Stack Developer", 1500,
          "Java Programmer", 1500,
          "ServiceNow Developer", 1500,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-3xl text-primary mb-2"
      />

      {/* Heading and Description */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
        Hey, I’m <span className="text-primary">Viswa R</span>
      </h1>

      <p className="text-gray-300 max-w-xl mb-8">
        I’m a passionate Full Stack Developer and Java Programmer eager to build
        scalable web apps using the MERN stack and ServiceNow platform.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center mb-6 text-4xl text-primary">
        <a href="https://github.com/VISWAR06" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/viswa-r-b37988286/" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin />
        </a>
      </div>

      {/* ✅ Download Resume Button */}
      <a
        href={resume}
        download="Viswa_R_Resume.pdf"
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Download CV
      </a>
    </section>
  );
};

export default Hero;
