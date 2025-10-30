import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    title: "Leave Management System (ServiceNow)",
    desc: "Developed a leave management portal with automated workflows using ServiceNow Studio, including tables, forms, and dashboards for analytics.",
    github: "https://gitlab.com/rviswa0606-group/leave-management",
  },
  {
    title: "Real-Time Chat Application (MERN)",
    desc: "Built a real-time chat app using the MERN stack and Socket.io for seamless live communication, typing indicators, and persistent message history.",
    github: "https://github.com/VISWAR06/MERN-Chat-app",
  },
  {
    title: "E-Commerce Website (MERN)",
    desc: "Created a full-stack MERN e-commerce website featuring seller dashboards, authentication, CRUD operations, and secure data management.",
    github: "https://github.com/VISWAR06/MERN-Ecommerce",
  },
  {
    title: "Notes Application (MERN + MySQL)",
    desc: "Developed a full-stack notes management application with Express.js, MySQL, JWT authentication, and Sequelize ORM for secure CRUD operations.",
    github: "https://github.com/VISWAR06/MERN-note-sql",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20" id="portfolio">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Projects</h2>

      <div className="max-w-5xl mx-auto grid gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-purple-900/20 border border-purple-800 rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              <AiOutlineGithub />
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
