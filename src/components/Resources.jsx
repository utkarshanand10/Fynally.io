import React from "react";
import { FaBookOpen, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const resources = [
  {
    title: "Student Guides",
    desc: "Study resources and career advice to stay ahead.",
    icon: <FaBookOpen className="text-blue-600 text-3xl" />,
  },
  {
    title: "Learning Materials",
    desc: "Upskill with tutorials, courses, and curated content.",
    icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Internship Tips",
    desc: "Prepare with interview strategies and workplace insights.",
    icon: <FaBriefcase className="text-cyan-600 text-3xl" />,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{res.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                {res.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {res.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
