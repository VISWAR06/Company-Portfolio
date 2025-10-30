import React from "react";

const Experience = () => {
  const education = [
    {
      title: "B.E in Electronics and Communication Engineering",
      place: "Bannari Amman Institute of Technology, Erode",
      year: "2022 - 2026",
      score: "CGPA: 6.71",
    },
    {
      title: "Higher Secondary School",
      place: "GSR Matric Hr. Sec. School",
      year: "2021 - 2022",
      score: "69.8%",
    },
    {
      title: "SSLC",
      place: "GSR Matric Hr. Sec. School",
      year: "2019 - 2020",
      score: "61%",
    },
  ];

  return (
    <section className="py-20 max-w-4xl mx-auto" id="education">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Education</h2>

      <div className="space-y-8">
        {education.map((e, i) => (
          <div key={i} className="bg-purple-900/20 border border-purple-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">{e.title}</h3>
            <p className="text-gray-300">{e.place}</p>
            <p className="text-gray-400">{e.year}</p>
            <p className="text-gray-300">{e.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
