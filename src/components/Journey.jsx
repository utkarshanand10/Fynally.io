import React from "react";

const steps = [
  {
    title: "Student",
    desc: "Access study material & career tips 🎓",
    img: "https://images.unsplash.com/photo-1650978810505-12705ba70e6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Learner",
    desc: "Skill up with guided learning 📘",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Intern",
    desc: "Gain hands-on experience 💼",
    img: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Employee",
    desc: "Achieve career success 🚀",
    img: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Career Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From Student to Employee — follow a guided path to grow your skills,
            gain experience, and achieve success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
