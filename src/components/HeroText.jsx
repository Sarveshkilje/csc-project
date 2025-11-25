import { motion } from "motion/react";

const HeroText = () => {
  return (
    <section className="pt-32 md:pt-40 px-6 md:px-16">
      <div className="max-w-3xl">

        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Building Future{" "}
          <span className="bg-gradient-to-r from-blue-300 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_#00eaff]">
            Cybersecurity
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text drop-shadow-[0_0_5px_#00eaff]">
            Leaders
          </span>{" "}
          Through Innovation.
        </h1>

        {/* PARAGRAPH */}
        <p className="mt-6 text-neutral-300 text-base md:text-lg leading-relaxed">
          Master cybersecurity skills through hands-on workshops, collaborate on
          security projects, and explore the fascinating world of ethical hacking!
          Our club welcomes aspiring security professionals from all departments.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg font-medium text-black shadow-lg hover:scale-105 transition">
            Join the Club
          </button>

          <button className="px-5 py-2 border border-cyan-400 text-cyan-300 rounded-lg font-medium hover:bg-cyan-400/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
