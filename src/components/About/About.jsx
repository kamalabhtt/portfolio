import React from "react";
import profileImg from "../../assets/image.png";

const About = () => {
  const skills = [
    { title: "Frontend", items: "React, Next.js, TailwindCSS" },
    { title: "Backend", items: "Node.js, Express, PHP, MYSQL, MongoDB" },
    { title: "Tools", items: "Git, GitHub, VS Code, Figma" },
    { title: "Soft Skills", items: "Problem Solving, Teamwork, Communication" },
  ];

  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Photo */}
        <div className="flex justify-center md:justify-start">
          <img 
        src={profileImg} 
        alt="Kamala Bhatta" 
        className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] rounded-full shadow-2xl border-4 border-[#465697] object-cover" 
        />

        </div>

        {/* Right: Text & Skills */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-[#465697]">Me</span></h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Hello! I’m <span className="font-semibold">Kamala Bhatta</span>, a passionate <span className="text-[#465697]">Full Stack Developer</span> who loves turning complex ideas into clean, maintainable digital solutions. I focus on user-first design and building applications that make an impact.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h4 className="text-[#465697] font-bold text-lg mb-2">{skill.title}</h4>
                <p className="text-gray-300 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
