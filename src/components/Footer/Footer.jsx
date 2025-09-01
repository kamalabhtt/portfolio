import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#465697] text-white py-12 px-6 md:px-20">
      
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-50">

        {/* Left: Contact Header */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
          <h3 className="text-sm md:text-xl font-normal mb-2">Feel free to reach out!</h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Thank you for visiting my portfolio. If my work resonates with you and you’re looking for a dedicated front-end developer, I’d love the opportunity to collaborate. Open to projects, internships, or full-time roles!
          </p>
        </div>

        {/* Right: Contact Info */}
        <ul className="space-y-3 text-sm md:text-base md:w-1/2">
          <li className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
              <MdOutlineEmail size={20} />
            </span>
            <a href="mailto:kamalabhatt3213@gmail.com" className="hover:text-[#ffda79] transition">bkamalabhatt3213@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
              <CiLinkedin size={20} />
            </span>
            <a href="https://www.linkedin.com/in/kamla-bhatta-35a400295" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffda79] transition">Kamala Bhatta</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
              <FaGithub size={20} />
            </span>
            <a href="https://github.com/kamalabhtt" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffda79] transition">github.com/kamalabhtt</a>
          </li>
        </ul>

      </div>

      {/* Bottom Divider */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-gray-300 text-sm md:text-base">
        © {new Date().getFullYear()} Kamala Bhatta. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
