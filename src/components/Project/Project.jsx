import React from 'react';
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="Project" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-10">Project</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">

        <ProjectCard 
          title="Library Management " 
          main="This is a blogging website created in Next.js and used some component library." 
        />

        <ProjectCard 
          title="To-dO List" 
          main="This is a YouTube clone created using Next.js with video search and playback features." 
        />

        <ProjectCard 
          title="Portfolio" 
          main="This is a Netflix-style UI project created in Next.js with media cards and streaming layout." 
        />

      </div>
    </div>
  );
};

export default Project;
