import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si"; // ✅ fixed typo
// Optional: Remove this if not working
//  import { RiNetflixFill } from "@remixicon/react";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>

        {/* Experience Blocks */}
        <div className="flex flex-col gap-4 w-full md:w-2/5">
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <div className="text-white">
              <h2 className="leading-tight font-semibold">Software Engineer, Google</h2>
              <p className="text-sm font-thin">Sept 2024 - Present</p>
              <ul className="text-sm list-disc ml-4 mt-1">
                <li>Work as software developer</li>
                <li>Senior SDE developer</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <div className="text-white">
              <h2 className="leading-tight font-semibold">Software Engineer, Google</h2>
              <p className="text-sm font-thin">Sept 2024 - Present</p>
              <ul className="text-sm list-disc ml-4 mt-1">
                <li>Work as software developer</li>
                <li>Senior SDE developer</li>
              </ul>
            </div>
          </div>

          

          {/* Netflix and Amazon sections can be added similarly */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
