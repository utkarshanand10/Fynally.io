import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?career,office,success"
          alt="Career growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-cyan-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Your Career Companion
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Guiding you from <span className="font-semibold">Student</span> →{" "}
          <span className="font-semibold">Learner</span> →{" "}
          <span className="font-semibold">Intern</span> →{" "}
          <span className="font-semibold">Employee</span> with the right
          resources and mentorship.
        </p>
        <a
          href="#journey"
          className="mt-10 inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition transform"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
}
