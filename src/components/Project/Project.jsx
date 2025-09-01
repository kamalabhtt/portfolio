import React from "react";

// Add images for each project in src/assets/projects/
import ecommerceImg from "../../assets/e-commerce.png";
import portfolioImg from "../../assets/portfolio.png";
import taskmanagerImg from "../../assets/library.jpg";

const projects = [
  {
   title: "E-commerce Web App",
   desc: "Frontend e-commerce application with product listing, cart UI, and responsive design using React and TailwindCSS.",
   tech: ["React", "TailwindCSS", "JavaScript"],
   demo: "https://kamalabhtt.github.io/e-commerce-ui/",
   source: "https://github.com/kamalabhtt/e-commerce-ui",
   image: ecommerceImg

  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website built with React, Vite, and TailwindCSS to showcase projects, skills, and contact information.",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
    demo: "https://kamala-portfolio.com",
    source: "https://github.com/kamalabhtt/portfolio",
    image: portfolioImg

  },
  {
    title: "Library Management System",
    desc: "Full CRUD library management system to manage books, users, and lending records, built with PHP, MySQL, JavaScript, HTML, and CSS.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    demo: "https://library-demo.com",
    source: "https://github.com/kamalabhtt/lms",
    image: taskmanagerImg

  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
              
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, index) => (
                    <span key={index} className="bg-[#465697] text-white px-2 py-1 rounded-full text-xs">{t}</span>
                  ))}
                </div>

                {/* Demo & Source Buttons */}
                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="bg-[#465697] text-white py-1 px-3 rounded-full text-sm hover:opacity-85 transition duration-300">
                    Live Demo
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer"
                     className="border border-[#465697] text-[#465697] py-1 px-3 rounded-full text-sm hover:bg-[#465697] hover:text-white transition duration-300">
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
