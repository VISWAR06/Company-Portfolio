import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGithubBadge } from "react-icons/di";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: "React.js", icon: <DiReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: "🌈" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
        { name: "Express.js", icon: "⚙️" },
        { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: "🗄️" },
      ],
    },
    {
      title: "Other Tools",
      items: [
        { name: "Git & GitHub", icon: <DiGithubBadge className="text-gray-300" /> },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Docker", icon: "🐳" },
        { name: "ServiceNow", icon: "🧠" },
      ],
    },
  ];

  return (
    <section className="py-20" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <div key={i} className="bg-purple-900/20 border border-purple-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
